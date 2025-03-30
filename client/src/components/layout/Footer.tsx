import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await apiRequest("POST", "/api/newsletter", { email });
      const data = await response.json();

      toast({
        title: "Success!",
        description: data.message || "You have successfully subscribed to our newsletter.",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe to newsletter",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                className="text-primary"
              >
                <path
                  fill="currentColor"
                  d="M10,0 L40,0 L30,40 L0,40 L10,0 Z"
                />
              </svg>
            </Link>
            <p className="mb-4 text-gray-400">
              Providing comprehensive MEP, fire protection, and low voltage solutions for commercial and industrial projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition">Home</a>
                </Link>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-white transition">Why Choose Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition">Projects</a>
              </li>
              <li>
                <a href="#waitlist" className="text-gray-400 hover:text-white transition">Join Waitlist</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Mechanical Systems</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Electrical Systems</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Plumbing Systems</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Fire Protection</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Security Systems</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Low Voltage Systems</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and industry news.
            </p>
            <form className="space-y-2" onSubmit={handleNewsletterSubmit}>
              <div>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NEXTGEN MEPfp. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}