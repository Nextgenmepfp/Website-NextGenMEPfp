import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#C41E3A] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <img 
                src="/next-gen-final.jpeg" 
                alt="NEXTGEN MEPfp Logo" 
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Leading MEP solutions provider with excellence in service and innovation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-red-500">About Us</Link></li>
              <li><Link href="/services" className="hover:text-red-500">Services</Link></li>
              <li><Link href="/projects" className="hover:text-red-500">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li><i className="fas fa-phone mr-2"></i>(877) 307-8131</li>
              <li><i className="fas fa-envelope mr-2"></i>info@nextgenmepfp.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} NEXTGEN MEPfp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}