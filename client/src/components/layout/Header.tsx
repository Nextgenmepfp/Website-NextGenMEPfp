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
            <a href="tel:(877) 207-8131" className="flex items-center text-sm md:text-base">
              <i className="fa fa-phone mr-2"></i> (877) 207-8131
            </a>
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
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/next-gen-final.jpeg" 
              alt="NEXTGEN MEPfp Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-[#FA061A] hover:text-white transition">Home</Link> 
            <Link href="/why-choose-us" className="text-[#FA061A] hover:text-white transition">Why Choose Us</Link> 
            <Link href="/services" className="text-[#FA061A] hover:text-white transition">Services</Link> 
            <Link href="/projects" className="text-[#FA061A] hover:text-white transition">Projects</Link> 
            <Link href="/testimonials" className="text-[#FA061A] hover:text-white transition">Testimonials</Link> 
            <Link href="/contact" className="bg-[#FA061A] text-white px-6 py-2 rounded hover:bg-[#E0051A] transition">Contact Us</Link> 
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
                <Link href="/" className="text-[#FA061A] hover:text-white transition">Home</Link> 
                <Link href="/why-choose-us" className="text-[#FA061A] hover:text-white transition">Why Choose Us</Link> 
                <Link href="/services" className="text-[#FA061A] hover:text-white transition">Services</Link> 
                <Link href="/projects" className="text-[#FA061A] hover:text-white transition">Projects</Link> 
                <Link href="/testimonials" className="text-[#FA061A] hover:text-white transition">Testimonials</Link> 
                <Link href="/contact" className="bg-[#FA061A] text-white px-6 py-2 rounded hover:bg-[#E0051A] transition">Contact Us</Link> 
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}