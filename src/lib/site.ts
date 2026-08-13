export const SITE_URL = "https://www.orglms.co.il";

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Yeda",
  url: SITE_URL,
  description: "מערכת LMS לניהול למידה, ידע והדרכות בארגונים וחברות.",
  logo: `${SITE_URL}/icon.png`,
  sameAs: [
    "https://www.linkedin.com/company/yedalms",
    "https://www.youtube.com/@yedalms",
    "https://www.facebook.com/yedalms",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+972-72-338-5091",
    email: "coo@yedalms.io",
    availableLanguage: ["he", "en"],
  },
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Yeda",
  url: SITE_URL,
  inLanguage: "he-IL",
  publisher: { "@id": `${SITE_URL}/#organization` },
};
