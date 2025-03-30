import { Link } from "@radix-ui/react-navigation-menu";

export function Footer() {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">NEXTGEN MEPfp</h3>
            <p className="text-black mb-4">
              Providing comprehensive MEP, fire protection, and low voltage solutions for commercial and industrial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              {[
                'Home',
                'Why Choose Us',
                'Services',
                'Projects',
                'Join Waitlist',
                'Contact'
              ].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-black hover:text-[#971B1E] transition-colors cursor-pointer">
                      {link}
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
                'Entertainment Systems',
                'Wireless Solutions',
                'Physical Security',
                'Communication Systems'
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

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-black">
            © {new Date().getFullYear()} NEXTGEN MEPfp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}