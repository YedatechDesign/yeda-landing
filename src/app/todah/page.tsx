import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "תודה | Yeda",
  description: "קיבלנו את הפנייה ונחזור אליכם בהקדם.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/todah" },
};

export default function TodahPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "96px 24px" }}>
        <div style={{ maxWidth: 560, textAlign: "center" }}>
          <h1 style={{ color: "#000F61", fontSize: "clamp(28px,4vw,42px)", lineHeight: 1.25, marginBottom: 16 }}>
            תודה, קיבלנו את הפנייה
          </h1>
          <p style={{ color: "#2f3552", fontSize: 18, lineHeight: 1.75, marginBottom: 28 }}>
            נחזור אליכם בהקדם עם פרטים על מערכת LMS לארגונים.
          </p>
          <Link href="/" style={{ display: "inline-flex", background: "#0A59EB", color: "#fff", fontWeight: 700, padding: "14px 28px", borderRadius: 999 }}>
            חזרה לאתר
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
