import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { StatsSection } from "@/components/landing/StatsSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { PersonasSection } from "@/components/landing/PersonasSection";
import { ToolsPreview } from "@/components/landing/ToolsPreview";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingPreview } from "@/components/landing/PricingPreview";
import { FAQSection } from "@/components/landing/FAQSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { CtaSection } from "@/components/landing/CtaSection";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <StatsSection />
      <AboutSection />
      <HowItWorks />
      <BenefitsSection />
      <PersonasSection />
      <ToolsPreview />
      <TestimonialsSection />
      <PricingPreview />
      <FAQSection />
      <ContactSection />
      <CtaSection />
    </SiteLayout>
  );
}
