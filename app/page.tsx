import { AboutSection } from "@/components/about-section";
import { CompetenciesSection } from "@/components/competencies-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { StarField } from "@/components/star-field";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <>
      <StarField />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <AboutSection />
        <CompetenciesSection />
        <TeamSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
