import { ImageSlider } from "@/components/home/ImageSlider";
import { sliderImages } from "@/data/slider-images";
import consultantImage from "@assets/choose.png";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative">
      {/* Expertise Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-2 bg-white text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 mb-4 px-4 relative z-10"
        >
          LOW VOLTAGE AND BLUEPRINT
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 text-center"
        >
          ENGINEERING EXPERT
        </motion.h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 max-w-[1920px] mx-auto p-2 bg-gray-50"> {/* Reduced padding */}
        {/* Project Slider */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500"> {/* Removed hover scale */}
            <ImageSlider images={sliderImages} autoPlayInterval={6000} />
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-1"
        >
          <div className="h-full rounded-xl overflow-hidden shadow-2xl bg-white">
            <div className="relative h-full"> {/* Removed hover effects */}
              <img 
                src={consultantImage} 
                alt="Professional Consultant" 
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}