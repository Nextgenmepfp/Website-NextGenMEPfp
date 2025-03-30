
import { ImageSlider } from "@/components/home/ImageSlider";
import { sliderImages } from "@/data/slider-images";
import consultantImage from "@assets/choose.png";
import Logo from "@assets/next-gen-final.jpeg";

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
        <div className="md:col-span-2 relative bg-[#FA061A]">
          <ImageSlider images={sliderImages} autoPlayInterval={6000} />
        </div>

        {/* Hero Image (1/3 width on desktop) */}
        <div className="md:col-span-1 bg-[#FA061A] p-4 flex justify-center items-center relative">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={consultantImage} 
              alt="Professional Consultant" 
              className="object-contain max-h-[800px] w-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
