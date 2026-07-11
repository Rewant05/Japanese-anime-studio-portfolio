import Hero from "@/components/Hero";
import WorksShowcase from "@/components/WorksShowcase";
import StudioProcess from "@/components/StudioProcess";
import TeamSection from "@/components/TeamSection";
import RecruitCTA from "@/components/RecruitCTA";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WorksShowcase />
      <StudioProcess />
      <TeamSection />
      <RecruitCTA />
      <ContactSection />
    </>
  );
}
