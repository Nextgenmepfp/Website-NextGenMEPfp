
import { ContactSection } from "@/components/home/ContactSection";

export default function Contact() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? Our team is here to help. Reach out to us and we'll get back to you shortly.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
