import Header from "@/components/Header";
import HeroNew from "@/components/HeroNew";
import VideoSection from "@/components/VideoSection";
import ClientLogos from "@/components/ClientLogos";
import PainPointsNew from "@/components/PainPointsNew";
import FeaturesNew from "@/components/FeaturesNew";
import DashboardSection from "@/components/DashboardSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroNew />
        <VideoSection />
        <ClientLogos />
        <PainPointsNew />
        <FeaturesNew />
        <DashboardSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
