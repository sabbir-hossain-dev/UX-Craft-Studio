import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0B47B3] px-6 md:px-12 py-4 flex items-center justify-between text-white shadow-sm">
      
      {/* Logo Area */}
      <div className="flex items-center cursor-pointer">
        <span className="text-xl font-bold tracking-wide">UXCRAFT STUDIO</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-sm lg:text-base">
        <li className="relative group cursor-pointer">
          <Link href="/" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
          {/* Active Underline Line */}
          <div className="absolute left-0 -bottom-2 w-full h-[2px] bg-white rounded-full"></div>
        </li>
        
        <li className="cursor-pointer hover:text-gray-200 transition-colors">
          <Link href="/about">About</Link>
        </li>
        
        <li className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition-colors">
          <span>Services</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-1"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </li>
        
        <li className="cursor-pointer hover:text-gray-200 transition-colors">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        
        <li className="cursor-pointer hover:text-gray-200 transition-colors">
          <Link href="/blog">Blog</Link>
        </li>
        
        <li className="cursor-pointer hover:text-gray-200 transition-colors">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Call to Action Button */}
      <button className="hidden md:block bg-white text-[#0B47B3] px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors shadow-sm">
        Get Started
      </button>
      
    </nav>
  );
}