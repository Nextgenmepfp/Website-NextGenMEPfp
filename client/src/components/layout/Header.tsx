import { Link } from "wouter";

export function Header() {
  return (
    <header className="w-full">
      {/* Contact Info Bar */}
      <div className="bg-[#FA061A] text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:(877) 307-8131" className="text-sm md:text-base hover:text-gray-200 transition-colors">
              <i className="fas fa-phone mr-2"></i>(877) 307-8131
            </a>
            <a href="mailto:info@nextgenmepfp.com" className="text-sm md:text-base hover:text-gray-200 transition-colors">
              <i className="fas fa-envelope mr-2"></i>info@nextgenmepfp.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#F6050A] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/">
              <img 
                src="/images/logo.jpeg" 
                alt="NEXTGEN MEPfp Logo" 
                className="h-12 md:h-16 w-auto cursor-pointer transform hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <div className="hidden md:flex space-x-6">
              <Link href="/" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Home</Link>
              <Link href="/why-choose-us" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Why Choose Us</Link>
              <Link href="/services" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Services</Link>
              <Link href="/projects" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Projects</Link>
              <Link href="/testimonials" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Testimonials</Link>
              <a href="/contact-us" className="px-6 py-2 bg-[#FA061A] text-white rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}