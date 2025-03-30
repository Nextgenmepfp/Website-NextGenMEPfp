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
        className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-radial from-red-500/10 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-radial from-red-500/10 to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 tracking-tight mb-4">
            LOW VOLTAGE AND BLUEPRINT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto"></div>
        </motion.div>


        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 text-center tracking-wide relative z-10"
        >
          ENGINEERING EXPERT
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-4 mt-6"
        >
          <div className="px-4 py-2 bg-red-50 rounded-lg border border-red-100">
            <span className="text-red-600 font-semibold">15+ Years Experience</span>
          </div>
          <div className="px-4 py-2 bg-red-50 rounded-lg border border-red-100">
            <span className="text-red-600 font-semibold">100% Success Rate</span>
          </div>
        </motion.div>
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