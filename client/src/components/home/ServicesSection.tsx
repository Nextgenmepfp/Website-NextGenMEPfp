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
        
        <div className="flex flex-row space-x-8 justify-center mx-auto px-4 w-full overflow-x-auto pb-8">
          {services.slice(0, 3).map((service) => (
            <div 
              key={service.id}
              className="rounded-[40px] overflow-hidden shadow-lg transition-shadow duration-300 group min-w-[300px] max-w-[350px] h-[450px] flex-shrink-0 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-200/10 flex flex-col"
            >
              <div className="p-10 text-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center">{service.title}</h3>
                  <p className="text-sm mb-10 text-gray-200 text-center line-clamp-6">
                    {service.description}
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <a 
                    href="#contact" 
                    className="text-white text-sm font-medium inline-block px-6 py-3 rounded-full bg-primary border border-white/30 hover:bg-primary-dark transition-colors duration-300"
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
