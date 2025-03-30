import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-16 bg-[#C41E3A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Welcome to NEXTGEN MEPfp</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              We specialize in low voltage system design, blueprint engineering, and MEP (Mechanical, Electrical, Plumbing) 
              solutions for commercial, institutional, and industrial projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}