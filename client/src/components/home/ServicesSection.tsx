import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-16 relative bg-white"
    >
      {/* White background */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive MEP, fire protection, and low voltage solutions for commercial and industrial projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {services.map((service) => (
            <div 
              key={service.id}
              className="rounded-[40px] shadow-lg h-[450px] bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="p-10 text-gray-800 flex-1 flex flex-col justify-between">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{service.title}</h3>
                  <p className="text-base mb-10 text-gray-600">
                    {service.description}
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <Button 
                    className="bg-white hover:bg-gray-100 text-primary font-medium rounded-full px-6"
                  >
                    <a href="#contact">Contact Us</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
