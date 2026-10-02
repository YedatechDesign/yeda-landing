// Settle promptly on lifetime abort while handling late completion/rejection safely.
export async function waitForLifetime(work, signal) {
  let onAbort;
  const aborted = new Promise((resolve, reject) => {
    onAbort = () => reject(new DOMException('Public lifetime cancelled.', 'AbortError'));
    signal.addEventListener('abort', onAbort, { once: true });
    if (signal.aborted) onAbort();
  });
  try {
    return await Promise.race([Promise.resolve(work), aborted]);
  } finally {
    signal.removeEventListener('abort', onAbort);
  }
}
