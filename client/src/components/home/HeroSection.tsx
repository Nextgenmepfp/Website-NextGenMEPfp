import { Button } from "@/components/ui/button";
import { ImageSlider } from "@/components/home/ImageSlider";
import { sliderImages } from "@/data/slider-images";
import consultantImage from "@assets/choose.png";

export function HeroSection() {
  return (
    <section className="relative">
      {/* Expertise Banner */}
      <div className="bg-primary text-white py-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold">
          LOW VOLTAGE AND BLUEPRINT ENGINEERING EXPERT
        </h2>
      </div>

      <div className="grid md:grid-cols-3">
        {/* Project Slider (2/3 width on desktop) */}
        <div className="md:col-span-2 relative bg-[#C41E3A]">
          {/* Full-size Image Slider */}
          <ImageSlider images={sliderImages} autoPlayInterval={6000} />

          {/* Empty div to maintain structure */}
          <div className="relative z-10"></div>
        </div>

        {/* Hero Image (1/3 width on desktop) */}
        <div className="md:col-span-1 bg-white p-4 flex justify-center items-center relative">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={consultantImage} 
              alt="Professional Consultant" 
              className="object-contain max-h-[600px] w-auto"
            />
          </div>
        </div>
      </div>


    </section>
  );
}