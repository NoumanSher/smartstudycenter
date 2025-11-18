import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
// import StatsSection from '@/components/sections/StatsSection';
import FAQSection from "@/components/sections/FAQSection";
// import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen pt-[80px]">
      <HeroSection />
      <div id="features-section" className="lg:scroll-mt-20 scroll-mt-14">
        <FeaturesSection />
      </div>
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}
