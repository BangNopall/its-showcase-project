import { AdminPortalSection } from "@/components/sections/AdminPortalSection";
import { BackgroundSection } from "@/components/sections/BackgroundSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { EventRequestSection } from "@/components/sections/EventRequestSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { LiveDemoSection } from "@/components/sections/LiveDemoSection";
import { NewsShowcaseSection } from "@/components/sections/NewsShowcaseSection";
import { PersonaSection } from "@/components/sections/PersonaSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { WebsiteOverviewSection } from "@/components/sections/WebsiteOverviewSection";
import { CinematicScroll } from "@/components/ui/CinematicScroll";
import { Footer } from "@/components/ui/Footer";
import { KeyboardNavigation } from "@/components/ui/KeyboardNavigation";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SectionIndicator } from "@/components/ui/SectionIndicator";
import {
  ItMengenalSection,
  ItProkerSection,
  ItWorkflowSection
} from "@/components/sections/ItSolutionsSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CinematicScroll />
      <KeyboardNavigation />
      <SectionIndicator />
      <main>
        <ItMengenalSection />
        <ItProkerSection />
        <ItWorkflowSection />
        <HeroSection />
        <BackgroundSection />
        <ProblemSection />
        <SolutionSection />
        <PersonaSection />
        <FeatureSection />
        <WebsiteOverviewSection />
        <NewsShowcaseSection />
        <EventRequestSection />
        <AdminPortalSection />
        <TechStackSection />
        <LiveDemoSection />
        <ImpactSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
