export default function CtaSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden font-sans px-6">
      
      <div className="max-w-[1400px] mx-auto bg-[#0B47B3] rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-2xl relative overflow-hidden">
        
        {/* Subtle Background Glow (Minimal) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        {/* Left Column: Content & Features */}
        <div className="w-full lg:w-1/2 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#0B47B3] text-xs font-bold tracking-wide mb-8 uppercase shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
            Ready to Get Started?
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Let's Build Something <br />
            <span className="text-[#38bdf8]">Amazing</span> Together.
          </h2>
          
          <p className="text-blue-100/90 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            Tell us about your project and our team will create a custom solution to help you achieve your goals.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Quick Response</h4>
                <p className="text-blue-200/80 text-xs mt-1 leading-relaxed">We'll get back within<br/>24 hours.</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">No Commitment</h4>
                <p className="text-blue-200/80 text-xs mt-1 leading-relaxed">Free consultation<br/>with no obligations.</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Results Focused</h4>
                <p className="text-blue-200/80 text-xs mt-1 leading-relaxed">Solutions designed<br/>to deliver real impact.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form (Glassmorphism) */}
        <div className="w-full lg:w-1/2 relative z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl">
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
              <div className="w-10 h-1 bg-[#38bdf8] rounded-full"></div>
            </div>

            <form className="flex flex-col gap-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/20 text-white placeholder-white/60 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-colors text-sm" />
                </div>
                
                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/20 text-white placeholder-white/60 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-colors text-sm" />
                </div>
              </div>

              {/* Company Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/60">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <input type="text" placeholder="Company Name" className="w-full bg-white/5 border border-white/20 text-white placeholder-white/60 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-colors text-sm" />
              </div>

              {/* Textarea */}
              <div className="relative">
                <div className="absolute top-3.5 left-0 pl-4 pointer-events-none text-white/60">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/20 text-white placeholder-white/60 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-colors text-sm resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button type="button" className="w-full bg-white text-[#0B47B3] font-bold text-base py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-colors flex justify-center items-center gap-2 mt-2">
                Get a Free Consultation
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>

              {/* Secure Footer text */}
              <div className="flex items-center justify-center gap-2 text-white/60 text-xs mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Your information is 100% secure and confidential.
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}