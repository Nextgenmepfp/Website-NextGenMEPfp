import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectPortfolio } from "@/components/home/ProjectPortfolio";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WaitlistSection } from "@/components/home/WaitlistSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <ProjectPortfolio />
      <TestimonialsSection />
      <WaitlistSection />
      <ContactSection />
    </>
  );
}
