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
      <nav className="bg-[#F6050A] shadow-lg"> {/* Changed background color here */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <img 
                src="/next-gen-final.jpeg" 
                alt="NEXTGEN MEPfp Logo" 
                className="h-16 w-auto cursor-pointer transform hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-[#FA061A] font-medium transition-colors duration-300">Home</Link> {/* Changed text color */}
              <Link href="/why-choose-us" className="text-white hover:text-[#FA061A] font-medium transition-colors duration-300">Why Choose Us</Link> {/* Changed text color */}
              <Link href="/services" className="text-white hover:text-[#FA061A] font-medium transition-colors duration-300">Services</Link> {/* Changed text color */}
              <Link href="/projects" className="text-white hover:text-[#FA061A] font-medium transition-colors duration-300">Projects</Link> {/* Changed text color */}
              <Link href="/testimonials" className="text-white hover:text-[#FA061A] font-medium transition-colors duration-300">Testimonials</Link> {/* Changed text color */}
              <Link href="/contact-us" className="px-6 py-2 bg-[#FA061A] text-white rounded-full hover:bg-red-700 transition-colors duration-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}