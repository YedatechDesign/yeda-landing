import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import TargetBobLoader from "@/components/TargetBobLoader";
import { ORGANIZATION_JSON_LD, SITE_URL, WEBSITE_JSON_LD } from "@/lib/site";

const GOOGLE_MEASUREMENT_ID = "G-SEPCTJ9Q1S";
const META_PIXEL_ID = "966471677122465";

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" alt="" />`,
          }}
        />
        <a className="skip-link" href="#main-content">דילוג לתוכן הראשי</a>
        {children}
        <AccessibilityWidget />
        <TargetBobLoader />
      </body>
    </html>
  );
}
