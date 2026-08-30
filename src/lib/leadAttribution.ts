export const ATTRIBUTION_STORAGE_KEY = "jit_yeda_attribution_v1";

export const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

export type LeadAttribution = Record<(typeof ATTRIBUTION_KEYS)[number], string>;

type StorageLike = Pick<Storage, "getItem" | "setItem">;

function emptyAttribution(): LeadAttribution {
  return Object.fromEntries(ATTRIBUTION_KEYS.map((key) => [key, ""])) as LeadAttribution;
}

function attributionFromUrl(url: string): LeadAttribution {
  const result = emptyAttribution();
  try {
    const query = new URL(url).searchParams;
    for (const key of ATTRIBUTION_KEYS) result[key] = (query.get(key) || "").trim();
  } catch {
    return result;
  }
  return result;
}

function attributionFromStorage(storage: StorageLike): LeadAttribution {
  const result = emptyAttribution();
  try {
    const parsed = JSON.parse(storage.getItem(ATTRIBUTION_STORAGE_KEY) || "{}");
    for (const key of ATTRIBUTION_KEYS) result[key] = String(parsed?.[key] || "").trim();
  } catch {
    return result;
  }
  return result;
}

export function captureLandingAttribution(url: string, storage: StorageLike): LeadAttribution {
  const existing = attributionFromStorage(storage);
  const incoming = attributionFromUrl(url);
  const firstTouch = emptyAttribution();
  for (const key of ATTRIBUTION_KEYS) firstTouch[key] = existing[key] || incoming[key];
  if (Object.values(firstTouch).some(Boolean)) {
    storage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(firstTouch));
  }
  return firstTouch;
}

export function getLeadAttribution(url: string, storage: StorageLike): LeadAttribution {
  const stored = attributionFromStorage(storage);
  const active = attributionFromUrl(url);
  const payload = emptyAttribution();
  for (const key of ATTRIBUTION_KEYS) payload[key] = active[key] || stored[key];
  return payload;
}
