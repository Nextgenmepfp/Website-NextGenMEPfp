import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <img 
              src="/next-gen-final.jpeg" 
              alt="NEXTGEN MEPfp Logo" 
              className="h-12 w-auto"
            />
            <p className="text-black">4095 Southern BLVD Suite #207, WEST PALM BEACH, FL 33406</p>
            <p className="text-black">(877) 307-8131</p>
            <p className="text-black">info@nextgenmepfp.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-black hover:text-[#971B1E] transition-colors cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us">
                  <span className="text-black hover:text-[#971B1E] transition-colors cursor-pointer">Why Choose Us</span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="text-black hover:text-[#971B1E] transition-colors cursor-pointer">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-black hover:text-[#971B1E] transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-black text-sm">
              © {new Date().getFullYear()} NEXTGEN MEPfp. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy">
                <span className="text-black hover:text-[#971B1E] transition-colors text-sm cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms-of-service">
                <span className="text-black hover:text-[#971B1E] transition-colors text-sm cursor-pointer">
                  Terms of Service
                </span>
              </Link>
              <Link href="/sitemap">
                <span className="text-black hover:text-[#971B1E] transition-colors text-sm cursor-pointer">
                  Sitemap
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}