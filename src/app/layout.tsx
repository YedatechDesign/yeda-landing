import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import TargetBobLoader from "@/components/TargetBobLoader";
import { ORGANIZATION_JSON_LD, SITE_URL, WEBSITE_JSON_LD } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Yeda - מערכת ניהול למידה וידע ארגוני",
  description: "הפלטפורמה החכמה לניהול ידע, הכשרות והדרכות ארגוניות עם כלי AI ליצירת תוכן ומעקב ביצועים.",
  applicationName: "Yeda LMS",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000F61",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
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
        <a className="skip-link" href="#main-content">דילוג לתוכן הראשי</a>
        {children}
        <AccessibilityWidget />
        <TargetBobLoader />
      </body>
    </html>
  );
}
