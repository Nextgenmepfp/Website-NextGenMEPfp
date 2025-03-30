
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
        className="text-center py-8 bg-white flex items-center justify-center shadow-sm"
      >
        <h2 className="text-4xl font-bold text-[#FA061A] mb-0 px-4">
          LOW VOLTAGE AND BLUEPRINT ENGINEERING EXPERT
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 max-w-[1920px] mx-auto">
        {/* Project Slider (2/3 width on desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 relative bg-white p-4"
        >
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <ImageSlider images={sliderImages} autoPlayInterval={6000} />
          </div>
          
          {/* Overlay text */}
          <div className="absolute bottom-8 left-8 right-8 bg-black/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-white text-2xl font-bold mb-2">
              Excellence in Engineering
            </h3>
            <p className="text-white/90">
              Delivering innovative solutions for modern infrastructure needs
            </p>
          </div>
        </motion.div>

        {/* Hero Image (1/3 width on desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-1 bg-white p-4"
        >
          <div className="h-full rounded-lg overflow-hidden shadow-xl">
            <img 
              src={consultantImage} 
              alt="Professional Consultant" 
              className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
