import { Link } from "wouter";

export function Header() {
  return (
    <header className="w-full">
      {/* Combined Navigation */}
      <nav className="bg-[#F6050A] shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="bg-[#FA061A] text-white py-2"> {/* Contact Info Bar */}
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
            <div className="flex justify-between items-center h-16 md:h-20 border-t border-red-400"> {/* Main Navigation */}
              <Link href="/">
                <img 
                  src="/next-gen-final.jpeg" 
                  alt="NEXTGEN MEPfp Logo" 
                  className="h-10 md:h-16 w-auto cursor-pointer transform hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}> {/*This button assumes the existence of a state variable 'mobileMenuOpen' and a function to toggle it.  This needs to be added to the component if not already present. */}
                <i className="fas fa-bars text-2xl"></i>
              </button>

              <div className="hidden md:flex space-x-6">
                <Link href="/" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Home</Link>
                <Link href="/why-choose-us" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Why Choose Us</Link>
                <Link href="/services" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Services</Link>
                <Link href="/projects" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Projects</Link>
                <Link href="/testimonials" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Testimonials</Link>
                <Link href="/contact" className="px-6 py-2 bg-[#FA061A] text-white rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}