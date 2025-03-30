import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-16 bg-[#C41E3A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Welcome to NEXTGEN MEPfp</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              We specialize in low voltage system design, blueprint engineering, and MEP (Mechanical, Electrical, Plumbing) 
              solutions for commercial, institutional, and industrial projects.
            </p>
          </div>
        </div>
      </section>
      {/*<section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to NEXTGEN MEPfp</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in low voltage system design, blueprint engineering, and MEP (Mechanical, Electrical, Plumbing) 
              solutions for commercial, institutional, and industrial projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Expertise</h3>
              <p className="mb-4">
                With extensive experience in the MEP industry, our team delivers innovative engineering solutions 
                for complex infrastructure projects, including high-profile locations like Las Olas, St. Regis, 
                Sea World, Disney Orlando, and Mar-a-Lago.
              </p>
              <p>
                We specialize in creating comprehensive designs for data centers, security systems, fire alarms, 
                and telecommunications infrastructure that meet strict industry standards and compliance requirements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">15+</h4>
                <p className="text-sm">Years of Experience</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">200+</h4>
                <p className="text-sm">Projects Completed</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">50+</h4>
                <p className="text-sm">Luxury Properties</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">100%</h4>
                <p className="text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      <ServicesSection />
    </>
  );
}