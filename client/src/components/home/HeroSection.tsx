import { ImageSlider } from "@/components/home/ImageSlider";
import { sliderImages } from "@/data/slider-images";
import consultantImage from "@assets/choose.png";
import Logo from "@assets/next-gen-final.jpeg";

export function HeroSection() {
  return (
    <section className="relative">
      {/* Expertise Banner */}
      <div className="text-center py-8 bg-white flex items-center justify-center">
        <h2 className="text-4xl font-bold text-[#FA061A] mb-0">
          LOW VOLTAGE AND BLUEPRINT ENGINEERING EXPERT
        </h2>
      </div>

      <div className="grid md:grid-cols-3">
        {/* Project Slider (2/3 width on desktop) */}
        <div className="md:col-span-2 relative bg-white">
          <ImageSlider images={sliderImages} autoPlayInterval={6000} />
        </div>

        {/* Hero Image (1/3 width on desktop) */}
        <div className="md:col-span-1 bg-white p-4 flex justify-center items-center relative">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={consultantImage} 
              alt="Professional Consultant" 
              className="object-cover h-[600px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}