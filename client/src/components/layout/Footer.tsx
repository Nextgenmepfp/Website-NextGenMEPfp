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
    <footer className="bg-white py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <img src="/images/logo.png" alt="NEXTGEN MEPfp" className="h-12 mb-4" />
            </Link>
            <p className="text-black mb-4">
              Providing comprehensive MEP, fire protection, and low voltage solutions for commercial and industrial projects.
            </p>
            <p className="text-black">
              <a href="tel:(877)307-8131" className="hover:text-[#971B1E] transition-colors">(877) 307-8131</a><br />
              <a href="mailto:info@nextgenmepfp.com" className="hover:text-[#971B1E] transition-colors">info@nextgenmepfp.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Why Choose Us', 'Services', 'Projects', 'Join Waitlist', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-black hover:text-[#971B1E] transition-colors cursor-pointer">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Mechanical Systems',
                'Electrical Systems',
                'Plumbing Systems',
                'Fire Protection',
                'Security Systems',
                'Low Voltage Systems'
              ].map((service) => (
                <li key={service}>
                  <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-black hover:text-[#971B1E] transition-colors cursor-pointer">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Newsletter</h3>
            <p className="text-black mb-4">
              Subscribe to our newsletter for the latest updates and industry news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-gray-300"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#971B1E] hover:bg-[#7a1618] text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-black text-sm">
              © {new Date().getFullYear()} NEXTGEN MEPfp. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy">
                <span className="text-black hover:text-[#971B1E] transition-colors text-sm cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms-of-service">
                <span className="text-black hover:text-[#971B1E] transition-colors text-sm cursor-pointer">
                  Terms of Service
                </span>
              </Link>
              <Link href="/sitemap">
                <span className="text-black hover:text-[#971B1E] transition-colors text-sm cursor-pointer">
                  Sitemap
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}