import { AdminPortalSection } from "@/components/sections/AdminPortalSection";
import { BackgroundSection } from "@/components/sections/BackgroundSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { DevelopmentProcessSection } from "@/components/sections/DevelopmentProcessSection";
import { EventRequestSection } from "@/components/sections/EventRequestSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { FutureImprovementSection } from "@/components/sections/FutureImprovementSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { LiveDemoSection } from "@/components/sections/LiveDemoSection";
import { NewsShowcaseSection } from "@/components/sections/NewsShowcaseSection";
import { PersonaSection } from "@/components/sections/PersonaSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProgressHighlightSection } from "@/components/sections/ProgressHighlightSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { WebsiteOverviewSection } from "@/components/sections/WebsiteOverviewSection";
import { Footer } from "@/components/ui/Footer";
import { KeyboardNavigation } from "@/components/ui/KeyboardNavigation";
import { Navbar } from "@/components/ui/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <KeyboardNavigation />
      <Navbar />
      <main>
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
        {/* <DevelopmentProcessSection />
        <ProgressHighlightSection /> */}
        <TechStackSection />
        <LiveDemoSection />
        <ImpactSection />
        {/* <ChallengesSection />
        <FutureImprovementSection /> */}
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
