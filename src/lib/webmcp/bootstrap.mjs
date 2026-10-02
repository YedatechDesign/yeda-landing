// Small entry point: detect native support and exact public route before loading tool logic.
import { isApprovedPublicRoute } from './public-routes.mjs';
import { waitForLifetime } from './lifetime.mjs';

function snapshot(status, supported = false) {
  return { supported, status, registered: [] };
}

function inactive(status) {
  const result = snapshot(status);
  return { ...result, ready: Promise.resolve(result), dispose() {} };
}

function admit(siteKey, doc, secure) {
  if (!secure || !doc || typeof doc.modelContext?.registerTool !== 'function') return 'unsupported';
  const view = doc.defaultView;
  if (view && view.top !== view) return 'embedded';
  if (!isApprovedPublicRoute(siteKey, doc.location)) return 'outside-approved-public-route';
  return undefined;
}

async function loadRuntime() {
  const [business, native] = await Promise.all([import('./public-tools.mjs'), import('./native.mjs')]);
  return { makeYedaPublicTools: business.makeYedaPublicTools, registerPublicTools: native.registerPublicTools };
}

export function mountYedaPublicTools(siteKey, options = {}) {
  const doc = options.document ?? globalThis.document;
  const secure = () => options.secureContext ?? globalThis.isSecureContext;
  try {
    const denied = admit(siteKey, doc, secure());
    if (denied) return inactive(denied);
  } catch {
    return inactive('unavailable-document');
  }
  if (options.signal?.aborted) return inactive('cancelled');

  const lifetime = new AbortController();
  let current;
  let status = 'initializing';
  let reason;
  const detach = () => options.signal?.removeEventListener('abort', onParentAbort);
  function stop(nextStatus) {
    if (!lifetime.signal.aborted) {
      status = nextStatus;
      lifetime.abort();
      current?.dispose();
    }
    detach();
  }
  function onParentAbort() { stop('cancelled'); }
  options.signal?.addEventListener('abort', onParentAbort, { once: true });
  if (options.signal?.aborted) onParentAbort();
  const state = () => ({ supported: true, status, registered: current?.registered ?? [], ...(reason ? { reason } : {}) });

  const ready = (async () => {
    try {
      if (lifetime.signal.aborted) return state();
      const runtime = await waitForLifetime((options.loadRuntime ?? loadRuntime)(), lifetime.signal);
      if (lifetime.signal.aborted) return state();
      const denied = admit(siteKey, doc, secure());
      if (denied) { stop(denied); return state(); }
      current = runtime.registerPublicTools(runtime.makeYedaPublicTools(siteKey), {
        document: doc, secureContext: secure(), signal: lifetime.signal
      });
      const result = await current.ready;
      if (!lifetime.signal.aborted) status = result.status;
      if (result.reason) reason = result.reason;
      if (status !== 'registered') detach();
      return state();
    } catch (error) {
      if (!lifetime.signal.aborted) {
        reason = error?.name ?? 'Error';
        stop('initialization-failed');
      }
      return state();
    }
  })();

  return {
    supported: true,
    get status() { return status; },
    get registered() { return current?.registered ?? []; },
    ready,
    dispose() { stop('disposed'); }
  };
}

// Static/WordPress documents and React clients share the same page lifecycle.
// pagehide aborts even for BFCache; persisted pageshow starts one fresh lifetime.
export function mountYedaDocumentTools(siteKey, options = {}) {
  const doc = options.document ?? globalThis.document;
  const view = doc?.defaultView;
  let active = mountYedaPublicTools(siteKey, options);
  if (!active.supported || !view?.addEventListener || !view?.removeEventListener) return active;
  let disposed = false;
  let suspended = false;
  function onPageHide() {
    active?.dispose();
    active = undefined;
    suspended = true;
  }
  function onPageShow(event) {
    if (!disposed && event.persisted && !options.signal?.aborted) {
      active?.dispose();
      active = mountYedaPublicTools(siteKey, options);
      suspended = false;
    }
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    active?.dispose();
    active = undefined;
    view.removeEventListener('pagehide', onPageHide);
    view.removeEventListener('pageshow', onPageShow);
    options.signal?.removeEventListener('abort', dispose);
  }
  try {
    view.addEventListener('pagehide', onPageHide);
    view.addEventListener('pageshow', onPageShow);
    options.signal?.addEventListener('abort', dispose, { once: true });
    if (options.signal?.aborted) dispose();
  } catch {
    dispose();
    return inactive('unavailable-lifecycle');
  }
  return {
    supported: true,
    get status() { return disposed ? 'disposed' : suspended ? 'suspended' : active.status; },
    get registered() { return active?.registered ?? []; },
    get ready() { return active?.ready ?? Promise.resolve(snapshot(disposed ? 'disposed' : 'suspended', true)); },
    dispose
  };
}
