"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full px-6 md:px-12 py-4 flex items-center justify-between text-white shadow-sm transition-all duration-300 z-50 ${
          isScrolled
            ? "fixed bottom-4 left-1/2 -translate-x-1/2 max-w-5xl bg-[#0B47B3] rounded-full"
            : "bg-[#0B47B3]"
        }`}
      >
        {/* Logo Area */}
        <div className="flex items-center cursor-pointer">
          <Link href="/" className="text-xl font-bold tracking-wide">
            UXCRAFT STUDIO
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-sm lg:text-base">
          <li>
            <Link
              href="/"
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="#services">Services</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="#case-studies">Case Studies</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="#process">Process</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="#about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="#testimonials">Testimonials</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="#faq">FAQ</Link>
          </li>
        </ul>

        {/* Call to Action Button */}
        <Link
          href="#contact"
          className="hidden md:block bg-white text-[#0B47B3] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-sm"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0B47B3] text-white z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <li>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#case-studies"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="#process"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}