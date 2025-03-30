import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white opacity-50 -skew-y-3"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FA061A] relative">
              Welcome to NEXTGEN MEPfp
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto relative leading-relaxed">
              We specialize in low voltage system design, blueprint engineering, and MEP 
              <span className="hidden md:inline"><br /></span> (Mechanical, Electrical, Plumbing) solutions for 
              <span className="hidden md:inline"><br /></span> commercial, institutional, and industrial projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}