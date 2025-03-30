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
    <header className="bg-red-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/" className="mr-5 text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/why-choose-us" className="mr-5 text-white hover:text-gray-200">
            Why Choose Us
          </Link>
          <Link href="/services" className="mr-5 text-white hover:text-gray-200">
            Services
          </Link>
          <Link href="/projects" className="mr-5 text-white hover:text-gray-200">
            Projects
          </Link>
          <Link href="/testimonials" className="mr-5 text-white hover:text-gray-200">
            Testimonials
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact Us
          </Link>
        </nav>
        <div className="flex order-first lg:order-none lg:w-1/5 items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <Link href="/" className="flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-800 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold">NEXTGEN MEPfp</span>
          </Link>
        </div>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Button variant="outline" className="text-white border-white hover:bg-red-800">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}