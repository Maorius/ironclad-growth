import HeroSection from "@/components/HeroSection";
import GoalsSection from "@/components/GoalsSection";
import ServicesSection from "@/components/ServicesSection";
import BioSection from "@/components/BioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import WhoSection from "@/components/WhoSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GoalsSection />
      <ServicesSection />
      <BioSection />
      <TestimonialsSection />
      <FAQSection />
      <WhoSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
