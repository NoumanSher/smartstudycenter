import HomeHeroSection from "@/components/sections/HomeHeroSection";
import ChooseLevelSection from "@/components/sections/ChooseLevelSection";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
// import StatsSection from '@/components/sections/StatsSection';
import FAQSection from "@/components/sections/FAQSection";
import ReadyToStartSection from "@/components/sections/ReadyToStartSection";
// import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen pt-[80px]">
       <HomeHeroSection />
        <ChooseLevelSection />

      <HeroSection />
      <div id="features-section" className="lg:scroll-mt-20 scroll-mt-14">
        <FeaturesSection />
      </div>
      <TestimonialsSection />
      <ReadyToStartSection />
      <FAQSection />
    </main>
  );
}
