import HomeHeroSection from "@/components/sections/HomeHeroSection";
import ChooseLevelSection from "@/components/sections/ChooseLevelSection";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ReadyToStartSection from "@/components/sections/ReadyToStartSection";
import { faqSchema } from "@/lib/schema";
import { faqsData } from "@/lib/faqs-data";

export default function Home() {
  const jsonLdFaq = faqSchema(faqsData);

  return (
    <main className="min-h-screen pt-[80px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq),
        }}
      />
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
