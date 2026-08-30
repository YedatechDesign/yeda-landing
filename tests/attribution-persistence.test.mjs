import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import test from 'node:test';

const modulePath = new URL('../src/lib/leadAttribution.ts', import.meta.url);

class MemoryStorage {
  #values = new Map();
  getItem(key) { return this.#values.get(key) ?? null; }
  setItem(key, value) { this.#values.set(key, String(value)); }
}

test('persists first landing attribution and restores it after internal navigation', async () => {
  assert.ok(existsSync(modulePath), 'lead attribution helper is missing');
  const { captureLandingAttribution, getLeadAttribution } = await import(modulePath.href);
  const storage = new MemoryStorage();
  const tagged = 'https://www.orglms.co.il/?utm_source=google&utm_medium=cpc&utm_campaign=24131646150&utm_content=200788399122&utm_term=knowledge&gclid=CLICK123&gbraid=GBR123&wbraid=WBR123';

  captureLandingAttribution(tagged, storage);
  const restored = getLeadAttribution('https://www.orglms.co.il/#contact', storage);

  assert.deepEqual(restored, {
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: '24131646150',
    utm_content: '200788399122',
    utm_term: 'knowledge',
    gclid: 'CLICK123',
    gbraid: 'GBR123',
    wbraid: 'WBR123',
  });
});

test('active URL values override stored values only for fields present in the active URL', async () => {
  assert.ok(existsSync(modulePath), 'lead attribution helper is missing');
  const { captureLandingAttribution, getLeadAttribution } = await import(modulePath.href);
  const storage = new MemoryStorage();
  captureLandingAttribution('https://www.orglms.co.il/?utm_source=google&utm_medium=cpc&utm_term=old&gclid=OLD', storage);

  const payload = getLeadAttribution('https://www.orglms.co.il/?utm_term=new&gclid=NEW#contact', storage);
  assert.equal(payload.utm_source, 'google');
  assert.equal(payload.utm_medium, 'cpc');
  assert.equal(payload.utm_term, 'new');
  assert.equal(payload.gclid, 'NEW');
});

test('ignores corrupt session storage and returns a complete empty contract', async () => {
  assert.ok(existsSync(modulePath), 'lead attribution helper is missing');
  const { ATTRIBUTION_STORAGE_KEY, getLeadAttribution } = await import(modulePath.href);
  const storage = new MemoryStorage();
  storage.setItem(ATTRIBUTION_STORAGE_KEY, '{bad json');
  const payload = getLeadAttribution('https://www.orglms.co.il/#contact', storage);
  assert.equal(Object.keys(payload).length, 8);
  assert.ok(Object.values(payload).every((value) => value === ''));
});
