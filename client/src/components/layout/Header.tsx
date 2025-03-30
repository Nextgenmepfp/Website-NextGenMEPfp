import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FA061A] shadow-md">
      {/* Contact Info Bar */}
      <div className="bg-[#FA061A] text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <img 
                src="/next-gen-final.jpeg" 
                alt="NEXTGEN MEPfp Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <a href="tel:(877) 207-8131" className="text-sm md:text-base">(877) 207-8131</a>
            <a href="mailto:info@nextgenmepfp.com" className="flex items-center text-sm md:text-base">
              <i className="fa fa-envelope mr-2"></i> info@nextgenmepfp.com
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <i className="fa fa-map-marker-alt mr-2"></i>
            <span className="text-sm">4095 Southern Blvd, Suite #207, West Palm Beach, FL - 33406</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Company Name */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">NEXTGEN MEPfp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-white text-lg font-medium relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-4px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Home</Link> 
            <Link href="/why-choose-us" className="text-gray-800 hover:text-white text-lg font-medium relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-4px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Why Choose Us</Link> 
            <Link href="/services" className="text-gray-800 hover:text-white text-lg font-medium relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-4px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Services</Link> 
            <Link href="/projects" className="text-gray-800 hover:text-white text-lg font-medium relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-4px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Projects</Link> 
            <Link href="/testimonials" className="text-gray-800 hover:text-white text-lg font-medium relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-4px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Testimonials</Link> 
            <Link href="/contact" className="bg-[#FA061A] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#E0051A] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">Contact Us</Link> 
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                <Link href="/" className="text-gray-800 hover:text-white text-lg transition-colors">Home</Link> 
                <Link href="/why-choose-us" className="text-gray-800 hover:text-white text-lg transition-colors">Why Choose Us</Link> 
                <Link href="/services" className="text-gray-800 hover:text-white text-lg transition-colors">Services</Link> 
                <Link href="/projects" className="text-gray-800 hover:text-white text-lg transition-colors">Projects</Link> 
                <Link href="/testimonials" className="text-gray-800 hover:text-white text-lg transition-colors">Testimonials</Link> 
                <Link href="/contact" className="bg-[#FA061A] text-white px-6 py-2 rounded hover:bg-[#E0051A] transition">Contact Us</Link> 
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}