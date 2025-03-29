import { Button } from "@/components/ui/button";

// Define the card data with image paths and placeholder text
const whyChooseUsCards = [
  {
    id: 1,
    image: "/images/why-choose-us/WhatsApp Image 2025-03-29 at 18.14.20.jpeg",
    title: "Expertise in MEP Systems",
    description: "Placeholder text for card 1. This will be replaced with actual content once provided."
  },
  {
    id: 2,
    image: "/images/why-choose-us/WhatsApp Image 2025-03-29 at 18.14.21.jpeg",
    title: "Advanced Infrastructure Solutions",
    description: "Placeholder text for card 2. This will be replaced with actual content once provided."
  },
  {
    id: 3,
    image: "/images/why-choose-us/WhatsApp Image 2025-03-29 at 18.14.22.jpeg",
    title: "Cutting-Edge Technology",
    description: "Placeholder text for card 3. This will be replaced with actual content once provided."
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-50">
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
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{card.title}</h3>
                <p className="text-gray-600 mb-4">
                  {card.description}
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
