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
        <div className="md:col-span-2 relative">
          {/* Full-size Image Slider */}
          <ImageSlider images={sliderImages} autoPlayInterval={6000} />
          
          {/* Overlay Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              NEXTGEN MEPfp
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-lg max-w-xl mx-auto">
              Innovative engineering solutions for modern infrastructure
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
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
      
      {/* Key Services Banner */}
      <div className="bg-neutral-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Data Centers</h3>
              <p className="text-gray-700">Comprehensive low voltage systems for modern data centers</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Security Systems</h3>
              <p className="text-gray-700">Advanced surveillance and access control solutions</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Fire Alarm Systems</h3>
              <p className="text-gray-700">State-of-the-art life safety and fire protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
