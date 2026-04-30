import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Problems from "@/components/Problems";
import WhyYeda from "@/components/WhyYeda";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import Dashboard from "@/components/Dashboard";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Problems />
        <WhyYeda />
        <Features />
        <AISection />
        <Dashboard />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
