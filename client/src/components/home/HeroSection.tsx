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
        <h2 className="text-4xl md:text-5xl font-bold text-[#F6050A] mb-0 px-4 relative z-10">
          LOW VOLTAGE AND BLUEPRINT 
          <span className="block mt-2 bg-gradient-to-r from-[#FA061A] to-red-400 bg-clip-text text-transparent">
            ENGINEERING EXPERT
          </span>
        </h2>
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

      {/* Low Voltage and Blueprint Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-100">
              <div className="mb-6">
                <i className="fas fa-network-wired text-3xl text-primary"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Low Voltage Solutions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-2"></i>
                  <span>Advanced Security Systems</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-2"></i>
                  <span>Structured Data Networks</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-2"></i>
                  <span>Smart Building Integration</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-2"></i>
                  <span>Audio/Visual Solutions</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-100">
              <div className="mb-6">
                <i className="fas fa-drafting-compass text-3xl text-primary"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blueprint Engineering</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-2"></i>
                  <span>Detailed Technical Drawings</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-2"></i>
                  <span>3D Modeling & Visualization</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-2"></i>
                  <span>Code Compliance Review</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-2"></i>
                  <span>Construction Documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}