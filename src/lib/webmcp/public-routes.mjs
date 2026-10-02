// Exact public marketing route admission, snapshot checked 2026-10-02.
// Hosting aliases, tenant domains, previews and YedaTech are not admitted.
const sites = Object.freeze({
  yedalms: Object.freeze({
    origin: 'https://yedalms.io',
    paths: Object.freeze(['/', '/solutions-for-technology-companies/', '/lms-for-colleges/',
      '/lms-for-organizations/', '/learning-management-system/', '/pricing/'])
  }),
  orglms: Object.freeze({
    origin: 'https://www.orglms.co.il', paths: Object.freeze(['/', '/labs', '/security'])
  }),
  collegelms: Object.freeze({
    origin: 'https://collegelms.co.il', paths: Object.freeze(['/', '/privacy.html'])
  })
});

export function isApprovedPublicRoute(siteKey, location) {
  if (!Object.hasOwn(sites, siteKey) || !location) return false;
  const site = sites[siteKey];
  return location.origin === site.origin && site.paths.includes(location.pathname);
}
