
import { Link } from "wouter";

export function Header() {
  return (
    <header className="w-full">
      {/* Contact Info Bar */}
      <div className="bg-[#FA061A] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center">
                <img 
                  src="/next-gen-final.jpeg" 
                  alt="NEXTGEN MEPfp Logo" 
                  className="h-14 w-auto"
                />
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <a href="tel:(877) 307-8131" className="flex items-center hover:text-gray-200 transition-colors">
                  <i className="fas fa-phone-alt mr-2"></i>
                  (877) 307-8131
                </a>
                <a href="mailto:info@nextgenmepfp.com" className="flex items-center hover:text-gray-200 transition-colors">
                  <i className="fas fa-envelope mr-2"></i>
                  info@nextgenmepfp.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-800 hover:text-[#FA061A] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Home
                </Link>
                <Link href="/why-choose-us" className="text-gray-800 hover:text-[#FA061A] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Why Choose Us
                </Link>
                <Link href="/services" className="text-gray-800 hover:text-[#FA061A] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Services
                </Link>
                <Link href="/projects" className="text-gray-800 hover:text-[#FA061A] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Projects
                </Link>
                <Link href="/testimonials" className="text-gray-800 hover:text-[#FA061A] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Testimonials
                </Link>
                <Link href="/contact-us" className="text-gray-800 hover:text-[#FA061A] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
