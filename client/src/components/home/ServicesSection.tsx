import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-16 relative bg-primary"
    >
      {/* Background image with transparency */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: "url('/images/bg-why-choose-us.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Comprehensive MEP, fire protection, and low voltage solutions for commercial and industrial projects.
          </p>
        </div>
        
        <div className="flex flex-row space-x-6 justify-center mx-auto px-4 w-full overflow-x-auto pb-4">
          {services.slice(0, 3).map((service) => (
            <div 
              key={service.id}
              className="rounded-xl overflow-hidden shadow-xl transition-shadow duration-300 group min-w-[30%] max-w-[32%] flex-shrink-0 bg-white bg-opacity-10 backdrop-blur-sm border border-gray-200/20"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-sm mb-6 text-gray-200 line-clamp-3">
                  {service.description}
                </p>
                <div className="text-center">
                  <a 
                    href="#contact" 
                    className="text-white text-sm font-medium inline-block px-4 py-2 rounded-md bg-primary border border-white/30 hover:bg-primary-dark transition-colors duration-300"
                  >
                    Contact Us For More Information
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
