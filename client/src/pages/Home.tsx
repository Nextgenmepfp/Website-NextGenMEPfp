import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50 opacity-60 transform -skew-y-6"></div>
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          </div>
          <div className="text-center relative z-10 max-w-5xl mx-auto">
            <div className="inline-block mb-8">
              <span className="inline-block px-4 py-2 bg-red-50 text-[#FA061A] text-sm font-semibold rounded-full mb-4 transform hover:scale-105 transition-transform">
                Professional MEP Solutions
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FA061A] to-red-700 bg-clip-text text-transparent animate-gradient">
              Welcome to NEXTGEN MEPfp
            </h2>
            <div className="space-y-4">
              <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We specialize in low voltage system design, blueprint engineering, and MEP solutions
              </p>
              <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                (Mechanical, Electrical, Plumbing) for commercial, institutional, and industrial projects
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-[#FA061A] text-white rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-[#FA061A] text-[#FA061A] rounded-lg hover:bg-red-50 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}