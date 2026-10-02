// Staged public navigation only. No install, automatic registration, network, DOM or account access.
const checkedAt = '2026-10-02';
const sites = {
  yedalms: {
    origin: 'https://yedalms.io',
    pages: [
      ['/', 'Yeda LMS public overview', 'LMS platform מערכת למידה'],
      ['/solutions-for-technology-companies/', 'Solutions for technology companies', 'technology software training חברות טכנולוגיה'],
      ['/lms-for-colleges/', 'Solutions for colleges', 'college colleges education מכללות מוסדות לימוד'],
      ['/lms-for-organizations/', 'Solutions for organizations', 'organizations companies training ארגונים חברות'],
      ['/learning-management-system/', 'Learning management system', 'LMS learning management מערכת ניהול למידה'],
      ['/pricing/', 'Public pricing information page', 'pricing price מחירון']
    ]
  },
  orglms: {
    origin: 'https://www.orglms.co.il',
    pages: [
      ['/', 'OrgLMS public overview', 'LMS organization training ארגונים למידה'],
      ['/labs', 'Public Labs information', 'labs AI content לומדות בינה מלאכותית'],
      ['/security', 'Public security information page', 'security information אבטחת מידע']
    ]
  },
  collegelms: {
    origin: 'https://collegelms.co.il',
    pages: [
      ['/', 'Yeda College public overview', 'LMS college education מכללות מערכת למידה'],
      ['/privacy.html', 'Public privacy policy', 'privacy policy פרטיות מדיניות']
    ]
  }
};

export function makeYedaPublicTools(siteKey) {
  if (!Object.hasOwn(sites, siteKey)) throw new RangeError('No admitted public site configuration.');
  const site = sites[siteKey];
  const maxOffset = site.pages.length - 1;
  return [{
    name: `${siteKey}_find_public_pages`,
    description: 'List or find verified public marketing page links. Returns links only; never opens pages, submits forms, reads LMS records or verifies commercial/security claims.',
    inputSchema: {
      type: 'object', additionalProperties: false,
      properties: {
        query: {type: 'string', minLength: 1, maxLength: 100},
        limit: {type: 'integer', minimum: 1, maximum: 3, default: 3},
        offset: {type: 'integer', minimum: 0, maximum: maxOffset, default: 0}
      }
    },
    annotations: {readOnlyHint: true, consequentialHint: false, untrustedContentHint: false},
    async execute(input, execution = {}) {
      if (!input || typeof input !== 'object' || Array.isArray(input) ||
          ![Object.prototype, null].includes(Object.getPrototypeOf(input))) {
        throw new TypeError('Input must be a plain object.');
      }
      for (const key of Reflect.ownKeys(input)) {
        if (typeof key !== 'string' || !['query', 'limit', 'offset'].includes(key) ||
            !Object.hasOwn(Object.getOwnPropertyDescriptor(input, key), 'value')) {
          throw new TypeError('Unknown parameter or non-value field.');
        }
      }
      const query = Object.hasOwn(input, 'query') ? input.query : undefined;
      if (query !== undefined && (typeof query !== 'string' || !query.trim() || query.length > 100 ||
          /[\u0000-\u001f\u007f]/u.test(query))) throw new TypeError('Invalid public search query.');
      // A provided undefined is not valid JSON and must not evade the schema's string requirement.
      if (Object.hasOwn(input, 'query') && query === undefined) throw new TypeError('Invalid public search query.');
      const limit = Object.hasOwn(input, 'limit') ? input.limit : 3;
      const offset = Object.hasOwn(input, 'offset') ? input.offset : 0;
      if (!Number.isInteger(limit) || limit < 1 || limit > 3) throw new RangeError('Invalid result limit.');
      if (!Number.isInteger(offset) || offset < 0 || offset > maxOffset) throw new RangeError('Invalid result offset.');
      if (execution.signal?.aborted) throw new DOMException('Cancelled.', 'AbortError');
      const tokens = query?.normalize('NFKC').toLowerCase().trim().split(/\s+/u) ?? [];
      const matches = site.pages.filter(([path, title, keywords]) => {
        const haystack = `${path} ${title} ${keywords}`.normalize('NFKC').toLowerCase();
        return tokens.every(token => haystack.includes(token));
      });
      const slice = matches.slice(offset, offset + limit);
      const result = {
        total: matches.length,
        pages: slice.map(([path, title]) => ({title, url: site.origin + path, sourceLanguage: 'he', labelLanguage: 'en'})),
        nextOffset: offset + slice.length < matches.length ? offset + slice.length : null,
        sourceCheckedAt: checkedAt
      };
      if (new TextEncoder().encode(JSON.stringify(result)).byteLength > 1500) throw new RangeError('Result exceeds public output budget.');
      return result;
    }
  }];
}

