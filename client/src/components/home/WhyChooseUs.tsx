// Define the card data with image paths and updated titles
const whyChooseUsCards = [
  {
    id: 1,
    image: "/images/why-choose-us/WhatsApp Image 2025-03-29 at 18.14.20.jpeg",
    title: "BLUEPRINT-READY"
  },
  {
    id: 2,
    image: "/images/why-choose-us/WhatsApp Image 2025-03-29 at 18.34.31.jpeg",
    title: "LOW VOLTAGE EXPERTS"
  },
  {
    id: 3,
    image: "/images/why-choose-us/WhatsApp Image 2025-03-29 at 18.36.54.jpeg",
    title: "AVAILABLE WORLDWIDE"
  }
];

export function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="py-16 relative"
      style={{
        backgroundImage: "url('/images/WhatsApp Image 2025-03-29 at 18.52.00.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay to make content readable against the background image */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Us</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            We Stand out in Low Voltage MEP & Blueprints Engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUsCards.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-primary text-white text-center">
                <h3 className="text-xl font-bold">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
