import { features } from "@/data/features";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We bring decades of experience, cutting-edge technology, and unmatched expertise to every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-neutral-200 rounded-lg p-8 text-center hover:shadow-lg transition duration-300"
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <i className={`fas ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
