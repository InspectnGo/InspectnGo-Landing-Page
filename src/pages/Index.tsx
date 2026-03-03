import Navbar from "@/components/Navbar";
import HeroHeader from "@/components/HeroHeader";
import HeroSection from "@/components/HeroSection";
import CarBlueprintSection from "@/components/CarBlueprintSection";
import PartnerSection from "@/components/PartnerSection";
import InfoStatsSection from "@/components/InfoStatsSection";
import VintageVsNewSection from "@/components/VintageVsNewSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main className="flex-1">
        <HeroHeader />
        <div className="hero-card">
          <div className="hero-card-inner">
            <HeroSection />
          </div>
        </div>
        <CarBlueprintSection />
        <PartnerSection />
        <InfoStatsSection />
        <VintageVsNewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
