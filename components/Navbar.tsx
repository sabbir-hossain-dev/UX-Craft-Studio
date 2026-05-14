"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0B47B3] text-white z-50 shadow-md">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer shrink-0">
            <Link href="/" className="text-xl font-bold tracking-wide hover:text-blue-200 transition-colors">
              UXCRAFT STUDIO
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-12 font-medium text-sm lg:text-base">
            <li className="cursor-pointer hover:text-blue-200 transition-colors">
              <Link href="#testimonials">Review</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-200 transition-colors">
              <Link href="#portfolio">Work</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-200 transition-colors">
              <Link href="#case-studies">Case Study</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-200 transition-colors">
              <Link href="#services">Service</Link>
            </li>
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">

            {/* Book a Call */}
            <Link href="#contact" className="bg-white text-[#0B47B3] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors shadow-sm ml-1">
              Book a Call
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-[#0B47B3] text-white z-[60] transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col`}>
         <div className="flex justify-between p-6 items-center border-b border-white/10">
           <span className="font-bold text-lg tracking-wide">UXCRAFT</span>
           <button onClick={() => setIsMenuOpen(false)} className="text-white">
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
           </button>
         </div>
         <ul className="flex flex-col items-center justify-center flex-1 gap-8 text-xl font-medium">
           <li><Link href="#testimonials" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-200 transition-colors">Review</Link></li>
           <li><Link href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-200 transition-colors">Work</Link></li>
           <li><Link href="#case-studies" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-200 transition-colors">Case Study</Link></li>
           <li><Link href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-200 transition-colors">Service</Link></li>
           <li><Link href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-white text-[#0B47B3] px-8 py-3 rounded-full font-bold mt-4 inline-block hover:bg-gray-100 transition-colors">Book a Call</Link></li>
         </ul>
      </div>
    </>
  );
}