import { services } from "@/data/services";

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
              className="rounded-lg overflow-hidden shadow-xl transition-shadow duration-300 group min-w-[30%] max-w-[32%] flex-shrink-0"
            >
              <div className="h-96 relative overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-0 right-0 text-white text-center">
                  <h3 className="text-2xl font-bold py-1 mx-auto text-shadow-lg px-4">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
