import type { Metadata } from "next";
import "./globals.css";
import AnimationObserver from "@/components/AnimationObserver";
import { ORGANIZATION_JSON_LD, SITE_URL, WEBSITE_JSON_LD } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Yeda - מערכת ניהול למידה וידע ארגוני",
  description: "הפלטפורמה החכמה לניהול ידע, הכשרות והדרכות ארגוניות עם כלי AI ליצירת תוכן ומעקב ביצועים.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          src="https://app.targetbob.ai/embed/project.js"
          data-env="prod"
          data-project-id="56bf7b28-76db-47aa-8695-4892b7acbd63"
          async
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AnimationObserver />
        {children}
      </body>
    </html>
  );
}
