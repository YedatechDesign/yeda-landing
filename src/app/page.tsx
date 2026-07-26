import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroNew from "@/components/HeroNew";
import VideoSection from "@/components/VideoSection";
import ClientLogos from "@/components/ClientLogos";
import PainPointsNew from "@/components/PainPointsNew";
import FeaturesNew from "@/components/FeaturesNew";
import AIAgentSection from "@/components/AIAgentSection";
import DashboardSection from "@/components/DashboardSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { faqs } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

const title = "מערכת LMS | מערכת ניהול למידה לארגונים עם AI";
const description = "מערכת LMS לניהול למידה, ידע והדרכות בארגונים וחברות. צרו תוכן עם AI, עקבו אחר ביצועים ונהלו את כל ההכשרות במקום אחד.";
const shareImage = `${SITE_URL}/og-home.png`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "Yeda",
    title,
    description,
    images: [{ url: shareImage, width: 1200, height: 630, alt: "Yeda - מערכת LMS וניהול למידה לארגונים" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: shareImage, alt: "Yeda - מערכת LMS וניהול למידה לארגונים" }],
  },
};

export default function Home() {
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Yeda",
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    inLanguage: "he-IL",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroNew />
        <VideoSection />
        <ClientLogos />
        <PainPointsNew />
        <FeaturesNew />
        <AIAgentSection />
        <DashboardSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
