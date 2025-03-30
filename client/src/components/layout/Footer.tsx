import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                'Infrastructure Backbone',
                'Voice & Data Systems',
                'Building Safety Systems',
                'Security & Surveillance',
                'Access Control',
                'Building Management Systems',
                'Telecommunication Systems'
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