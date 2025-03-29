import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroProjects = projects.slice(0, 3);

  const showSlide = useCallback((index: number) => {
    setCurrentSlide((index + heroProjects.length) % heroProjects.length);
  }, [heroProjects.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, showSlide]);

  return (
    <section className="relative bg-neutral-200">
      <div className="grid md:grid-cols-3">
        {/* Project Slider (2/3 width on desktop) */}
        <div className="md:col-span-2 relative overflow-hidden" style={{ height: "500px" }}>
          {/* Slider Container */}
          <div className="relative h-full" id="hero-slider">
            {heroProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Navigation */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 focus:outline-none" 
            onClick={() => showSlide(currentSlide - 1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 focus:outline-none" 
            onClick={() => showSlide(currentSlide + 1)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Slider Indicators */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
            {heroProjects.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full bg-white focus:outline-none ${
                  index === currentSlide ? "bg-opacity-100" : "bg-opacity-50"
                }`}
                onClick={() => showSlide(index)}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Hero CTA (1/3 width on desktop) */}
        <div className="md:col-span-1 bg-primary text-white p-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blueprint Excellence for Infrastructure</h1>
          <p className="mb-6">South Florida's premier MEP and low voltage design firm specializing in data centers, high-rise developments, and critical infrastructure projects.</p>
          <p className="text-sm mb-8">BICSI Certified • RCDD On Staff • NFPA Compliant</p>
          <div className="space-y-4 w-full max-w-xs">
            <a href="#waitlist">
              <Button 
                className="w-full bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition"
              >
                Request Consultation
              </Button>
            </a>
            <a href="#contact">
              <Button 
                variant="outline" 
                className="w-full border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition"
              >
                View Our Portfolio
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
