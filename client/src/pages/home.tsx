import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import IndustriesSection from "@/components/industries-section";
import UseCasesSection from "@/components/use-cases-section";
import TestimonialsSection from "@/components/testimonials-section";
import RoadmapSection from "@/components/roadmap-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <IndustriesSection />
      <UseCasesSection />
      <TestimonialsSection />
      <RoadmapSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
