import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const title = "צוות Yeda | מומחי למידה, מוצר וטכנולוגיה";
const description = "הכירו את צוות Yeda שמפתח את מערכת ה-LMS הישראלית לניהול למידה, ידע והדרכות בארגונים.";
const shareImage = `${SITE_URL}/og-team.png`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/team" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: `${SITE_URL}/team`,
    siteName: "Yeda",
    title,
    description,
    images: [{ url: shareImage, width: 1200, height: 630, alt: "צוות Yeda" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [shareImage] },
};

export default function TeamLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
