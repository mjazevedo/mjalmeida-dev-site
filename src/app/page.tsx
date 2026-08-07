import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EngineeringPillarsSection } from "@/components/sections/EngineeringPillarsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <SkipLink />
      <Header />
      <main id="conteudo">
        <HeroSection />
        <PositioningSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ProcessSection />
        <EngineeringPillarsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
