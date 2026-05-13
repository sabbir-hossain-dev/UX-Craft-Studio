import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B47B3] text-white pt-20 pb-8 px-6 font-sans rounded-t-[2.5rem] mt-12 shadow-[0_-10px_40px_rgba(11,71,179,0.15)] relative z-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="text-2xl font-bold tracking-wide">UXCRAFT</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-8">
              Building Digital Solutions That Drive Real Results. We help businesses innovate, grow, and succeed with end-to-end digital solutions tailored to their goals.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0B47B3] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0B47B3] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0B47B3] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0B47B3] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">COMPANY</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Work', 'Case Studies', 'Blog', 'Careers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-blue-100/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">SERVICES</h4>
            <ul className="space-y-4">
              {['Web Design & Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'E-commerce Solutions', 'Cloud & IT Solutions'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-blue-100/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">RESOURCES</h4>
            <ul className="space-y-4">
              {['Our Process', 'FAQs', 'Pricing', 'Documentation', 'Support', 'Sitemap'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-blue-100/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Get In Touch */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">GET IN TOUCH</h4>
            <ul className="space-y-5 text-sm text-blue-100/80">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>123 Business Avenue,<br/>Suite 100, Dhaka 1212,<br/>Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:info@uxcraft.com">info@uxcraft.com</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+8801234567890">+880 1234 567 890</a>
              </li>
              <li className="flex items-start gap-3 mt-2 text-white font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Let's build something amazing together!
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="border-y border-white/20 py-10 mb-8 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-5 w-full lg:w-1/2">
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Stay Updated</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">Subscribe to our newsletter for the latest insights, tips, and industry updates.</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-end">
            <form className="flex w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-[#093d96] border border-white/20 text-white placeholder-blue-200/50 px-6 py-4 rounded-l-xl focus:outline-none focus:border-white/50 transition-colors text-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-[#0B47B3] font-bold px-6 py-4 rounded-r-xl flex items-center gap-2 hover:bg-gray-100 transition-colors shrink-0 text-sm"
              >
                Subscribe <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/60">
          <p>© 2026 UXCRAFT STUDIO. All rights reserved.</p>
          
          {/* Cavelen Link Integration */}
          <p className="font-medium">
            Made with <span className="text-red-400 mx-1">❤</span> by <a href="https://www.cavelen.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors underline decoration-white/30 underline-offset-4 font-bold">Cavelen</a>
          </p>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}