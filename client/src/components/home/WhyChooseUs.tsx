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
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            NEXTGENMEP brings industry-leading expertise and innovative solutions to every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUsCards.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center">
                  <h3 className="text-xl font-bold mb-6 text-white px-4 py-2 bg-primary bg-opacity-90 w-full text-center">
                    {card.title}
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
