import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Contact Info Bar */}
      <div className="bg-primary text-white py-2">
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
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                className="text-primary"
              >
                <path
                  fill="currentColor"
                  d="M10,0 L40,0 L30,40 L0,40 L10,0 Z"
                />
              </svg>
              <span className="ml-3 text-xl font-bold">NEXTGEN MEPfp</span>
            </Link>
          </div>
          
          {/* Desktop Navigation on the right */}
          <nav className="hidden md:flex ml-auto">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-800 font-medium hover:text-primary transition">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-gray-800 font-medium hover:text-primary transition">WHY CHOOSE US</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-800 font-medium hover:text-primary transition">SERVICES</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-800 font-medium hover:text-primary transition">PROJECTS</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-800 font-medium hover:text-primary transition">TESTIMONIALS</Link>
              </li>
              <li>
                <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition">CONTACT US</Link>
              </li>
            </ul>
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
                <SheetTitle>NEXTGEN MEPfp</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="/" 
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 hover:bg-gray-100 rounded font-medium"
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/why-choose-us" 
                      className="block py-2 px-4 hover:bg-gray-100 rounded font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      WHY CHOOSE US
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services" 
                      className="block py-2 px-4 hover:bg-gray-100 rounded font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/projects" 
                      className="block py-2 px-4 hover:bg-gray-100 rounded font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/testimonials" 
                      className="block py-2 px-4 hover:bg-gray-100 rounded font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      TESTIMONIALS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className="block py-2 px-4 bg-primary text-white rounded font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
