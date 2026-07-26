import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yeda LMS - מערכת ניהול למידה ארגונית",
    short_name: "Yeda LMS",
    description: "מערכת LMS לניהול למידה, ידע והדרכות בארגונים וחברות.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F7FD",
    theme_color: "#000F61",
    lang: "he",
    dir: "rtl",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
