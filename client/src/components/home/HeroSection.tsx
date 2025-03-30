
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
        className="relative py-6 bg-white text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#F6050A] mb-0 px-4 relative z-10">
          LOW VOLTAGE AND BLUEPRINT 
          <span className="block mt-2 bg-gradient-to-r from-[#FA061A] to-red-400 bg-clip-text text-transparent">
            ENGINEERING EXPERT
          </span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 max-w-[1920px] mx-auto p-4 bg-gray-50">
        {/* Project Slider */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
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
            <div className="relative h-full group">
              <img 
                src={consultantImage} 
                alt="Professional Consultant" 
                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
