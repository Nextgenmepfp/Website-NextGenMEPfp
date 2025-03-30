
import { ImageSlider } from "@/components/home/ImageSlider";
import { sliderImages } from "@/data/slider-images";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-gray-50">
      {/* Expertise Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 py-12 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FA061A] text-center leading-tight">
            LOW VOLTAGE AND BLUEPRINT<br/>ENGINEERING EXPERT
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
            Delivering innovative solutions for your MEP and low voltage system needs with precision and expertise
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Project Slider (2/3 width on desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageSlider images={sliderImages} autoPlayInterval={6000} />
            </div>
          </motion.div>

          {/* Professional Lady Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full max-w-md"
          >
            <img
              src="/images/professional-lady.png"
              alt="Professional Consultant"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
