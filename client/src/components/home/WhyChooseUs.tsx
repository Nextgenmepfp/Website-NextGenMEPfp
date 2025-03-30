
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      id="why-choose-us" 
      className="py-16 relative bg-white"
    >      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We Stand out in Low Voltage MEP & Blueprints Engineering
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <h3 className="text-white text-xl font-bold p-6 w-full text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
