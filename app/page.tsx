import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NosotrosSection from "@/components/NosotrosSection";
import CeremoniaSection from "@/components/CeremoniaSection";
import GaleriaSection from "@/components/GaleriaSection";
import RSVPSection from "@/components/RSVPSection";
import RecomendacionesSection from "@/components/RecomendacionesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NosotrosSection />
      <CeremoniaSection />
      <GaleriaSection />
      <RSVPSection />
      <RecomendacionesSection />
      <Footer />
    </>
  );
}
