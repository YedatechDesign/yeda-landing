import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yeda LMS | מערכת ניהול ידע ארגוני מבוססת AI",
  description: "הפלטפורמה החכמה לניהול ידע, הכשרות והדרכות ארגוניות – עם כלי AI מתקדמים ליצירת תוכן ומעקב ביצועים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
