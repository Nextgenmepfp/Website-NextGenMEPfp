import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Contact Info Bar */}
      <div className="bg-white text-[#FA061A] py-2"> {/* Changed primary color to Corvette Red */}
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
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
            <Link href="/" className="text-gray-800 hover:text-[#FA061A] transition">Home</Link> {/* Changed hover color to Corvette Red */}
            <Link href="/why-choose-us" className="text-gray-800 hover:text-[#FA061A] transition">Why Choose Us</Link> {/* Changed hover color to Corvette Red */}
            <Link href="/services" className="text-gray-800 hover:text-[#FA061A] transition">Services</Link> {/* Changed hover color to Corvette Red */}
            <Link href="/projects" className="text-gray-800 hover:text-[#FA061A] transition">Projects</Link> {/* Changed hover color to Corvette Red */}
            <Link href="/testimonials" className="text-gray-800 hover:text-[#FA061A] transition">Testimonials</Link> {/* Changed hover color to Corvette Red */}
            <Link href="/contact" className="bg-[#FA061A] text-white px-6 py-2 rounded hover:bg-[#E0051A] transition">Contact Us</Link> {/* Changed background and hover colors to Corvette Red shades */}
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
                <Link href="/" className="text-gray-800 hover:text-[#FA061A] transition">Home</Link> {/* Changed hover color to Corvette Red */}
                <Link href="/why-choose-us" className="text-gray-800 hover:text-[#FA061A] transition">Why Choose Us</Link> {/* Changed hover color to Corvette Red */}
                <Link href="/services" className="text-gray-800 hover:text-[#FA061A] transition">Services</Link> {/* Changed hover color to Corvette Red */}
                <Link href="/projects" className="text-gray-800 hover:text-[#FA061A] transition">Projects</Link> {/* Changed hover color to Corvette Red */}
                <Link href="/testimonials" className="text-gray-800 hover:text-[#FA061A] transition">Testimonials</Link> {/* Changed hover color to Corvette Red */}
                <Link href="/contact" className="bg-[#FA061A] text-white px-6 py-2 rounded hover:bg-[#E0051A] transition">Contact Us</Link> {/* Changed background and hover colors to Corvette Red shades */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}