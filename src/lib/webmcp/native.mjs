// Native WebMCP registration only. Never assign document.modelContext or expand exposure.
import { waitForLifetime } from './lifetime.mjs';
const encoder = new TextEncoder();

export function nativeSupport(document, secureContext) {
  if (!secureContext || !document || typeof document.modelContext?.registerTool !== 'function') return false;
  const view = document.defaultView;
  return !view || view.top === view;
}

function inert(status) {
  const snapshot = { supported: false, status, registered: [] };
  return { ...snapshot, ready: Promise.resolve(snapshot), dispose() {} };
}

// Immediate disposal is available before the first asynchronous registration settles.
export function registerPublicTools(tools, options = {}) {
  const doc = options.document ?? globalThis.document;
  const secure = options.secureContext ?? globalThis.isSecureContext;
  if (!nativeSupport(doc, secure)) return inert('unsupported');
  if (options.signal?.aborted) return inert('cancelled');

  const lifetime = new AbortController();
  let status = 'registering';
  let registered = [];
  let reason;
  let calls = [];
  const now = options.now ?? (() => globalThis.performance?.now() ?? Date.now());
  const snapshot = () => ({ supported: true, status, registered: [...registered], ...(reason ? { reason } : {}) });
  const detach = () => options.signal?.removeEventListener('abort', onParentAbort);
  function stop(nextStatus) {
    if (!lifetime.signal.aborted) {
      status = nextStatus;
      registered = [];
      lifetime.abort();
    }
    detach();
  }
  function onParentAbort() { stop('cancelled'); }
  options.signal?.addEventListener('abort', onParentAbort, { once: true });
  if (options.signal?.aborted) onParentAbort();

  const ready = (async () => {
    try {
      for (const tool of tools) {
        if (lifetime.signal.aborted) return snapshot();
        if (tool.annotations?.readOnlyHint !== true || tool.annotations?.consequentialHint !== false) {
          throw new TypeError('Only approved public read-only tools can register.');
        }
        await waitForLifetime(doc.modelContext.registerTool({
          ...tool,
          async execute(input, execution = {}) {
            if (lifetime.signal.aborted || execution.signal?.aborted) {
              throw new DOMException('Public tool call cancelled.', 'AbortError');
            }
            const time = now();
            if (!Number.isFinite(time)) throw new TypeError('Invalid rate-limit clock.');
            calls = calls.filter(value => time - value < 60000);
            if (calls.length >= 30) throw new RangeError('Public call budget exceeded.');
            calls.push(time);
            const result = await tool.execute(input, execution);
            if (lifetime.signal.aborted || execution.signal?.aborted) {
              throw new DOMException('Public tool call cancelled.', 'AbortError');
            }
            const serialized = JSON.stringify(result);
            if (typeof serialized !== 'string' || encoder.encode(serialized).byteLength > 1500) {
              throw new RangeError('Public result exceeds the UTF-8 output budget.');
            }
            return result;
          }
        }, { signal: lifetime.signal }), lifetime.signal);
        if (lifetime.signal.aborted) return snapshot();
        registered.push(tool.name);
      }
      status = 'registered';
      return snapshot();
    } catch (error) {
      if (!lifetime.signal.aborted) {
        reason = error?.name ?? 'Error';
        stop('registration-failed');
      }
      return snapshot();
    }
  })();

  return {
    supported: true,
    get status() { return status; },
    get registered() { return [...registered]; },
    ready,
    dispose() { stop('disposed'); }
  };
}
