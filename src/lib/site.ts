export const SITE_URL = "https://www.orglms.co.il";

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yeda",
  url: SITE_URL,
  logo: `${SITE_URL}/yeda-org-logo.png`,
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yeda",
  url: SITE_URL,
  inLanguage: "he-IL",
};
