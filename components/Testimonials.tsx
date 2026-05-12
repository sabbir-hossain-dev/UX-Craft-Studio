export default function Testimonials() {
  return (
    <section className="bg-[#F8FAFC] py-24 relative overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] text-xs font-bold tracking-wide mb-6 uppercase shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 16c-1.5 1.5-2.5 5-2 5h.034z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1.5-.5 3-1.5 4.5-.5 1-1 3 0 3.5h.034z"/></svg>
          Client Testimonials
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Trusted by Clients. <br />
          Proven by <span className="text-[#0B47B3]">Results.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          We take pride in delivering solutions that make a real difference. Here's what our clients have to say about working with us.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          
          {/* Left: Overall Rating Card */}
          <div className="w-full lg:w-[320px] bg-[#0B47B3] rounded-3xl p-8 text-white shrink-0 flex flex-col justify-center shadow-xl">
            <h3 className="font-medium text-blue-100 text-lg mb-2">Overall Client Rating</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl font-extrabold tracking-tighter">4.9</span>
              <span className="text-xl text-blue-200">/ 5</span>
            </div>
            
            {/* 5 Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" className="drop-shadow-sm"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <p className="text-sm text-blue-200 mb-8 pb-8 border-b border-white/20">Based on 200+ reviews</p>

            {/* Platform Ratings */}
            <div className="flex flex-col gap-5">
              {/* Google */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                    <span className="text-[#0B47B3] font-bold text-xs">G</span>
                  </div>
                  <span className="font-semibold text-sm">Google</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm">4.9/5</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="#ffffff"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Capterra */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#0B47B3"><path d="M12 2L2 22h20L12 2z"/></svg>
                  </div>
                  <span className="font-semibold text-sm">Capterra</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm">4.8/5</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="#ffffff"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clutch */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                    <span className="text-[#0B47B3] font-bold text-xs">C</span>
                  </div>
                  <span className="font-semibold text-sm">Clutch</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm">4.9/5</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="#ffffff"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Cards Carousel */}
          <div className="flex-1 flex gap-6 overflow-hidden relative items-center">
            
            {/* Left Nav Button */}
            <button className="hidden xl:flex absolute left-0 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg text-[#0B47B3] hover:bg-gray-50 -ml-6 transition-all border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {/* Card 1 */}
            <div className="w-full md:w-1/2 xl:w-1/3 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between shrink-0">
              <div>
                <span className="text-5xl text-[#0B47B3] font-serif leading-none block mb-4">“</span>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  UXCRAFT STUDIO transformed our digital presence and helped us achieve growth beyond our expectations. Their team is professional, responsive, and truly invested in our success.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?img=11" alt="John Carter" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">John Carter</h4>
                    <p className="text-xs text-gray-500">Marketing Director</p>
                  </div>
                </div>
                <span className="text-[#0B47B3] font-bold text-lg">Google</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/2 xl:w-1/3 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between shrink-0 hidden md:flex">
              <div>
                <span className="text-5xl text-[#0B47B3] font-serif leading-none block mb-4">“</span>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  The solution delivered by UXCRAFT STUDIO has streamlined our workflow and improved our productivity by 40%. They understood our needs and delivered beyond what we envisioned.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?img=5" alt="Sarah Mitchell" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Sarah Mitchell</h4>
                    <p className="text-xs text-gray-500">CEO, TechNova</p>
                  </div>
                </div>
                <span className="text-gray-400 font-bold text-sm flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/></svg> Microsoft</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-1/2 xl:w-1/3 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between shrink-0 hidden xl:flex">
              <div>
                <span className="text-5xl text-[#0B47B3] font-serif leading-none block mb-4">“</span>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  Professional, responsive, and results-driven. UXCRAFT STUDIO is a trusted partner in our digital transformation journey. Highly recommend their services!
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?img=12" alt="David Lee" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">David Lee</h4>
                    <p className="text-xs text-gray-500">CTO, InnovateX</p>
                  </div>
                </div>
                <span className="text-gray-400 font-bold text-lg flex items-center gap-1"><span className="text-xl">#</span> slack</span>
              </div>
            </div>

            {/* Right Nav Button */}
            <button className="hidden xl:flex absolute right-0 z-20 w-12 h-12 bg-[#0B47B3] rounded-full items-center justify-center shadow-lg text-white hover:bg-blue-800 transition-all border-4 border-[#F8FAFC]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0B47B3]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
        </div>
      </div>

      {/* Bottom Logos Banner */}
      <div className="max-w-6xl mx-auto px-6 mt-16 relative z-10">
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col gap-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-blue-100"></div>
            <p className="text-[#0B47B3] font-bold text-sm md:text-base">Join 500+ companies growing with UXCRAFT STUDIO</p>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-blue-100"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-400 font-bold text-xl md:text-2xl mt-4">
            <span className="hover:text-gray-600 transition-colors flex items-center gap-2"><span className="text-3xl">G</span>oogle</span>
            <span className="hover:text-gray-600 transition-colors flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/></svg> Microsoft</span>
            <span className="hover:text-gray-600 transition-colors flex items-center gap-1"><span className="text-2xl">#</span> slack</span>
            <span className="hover:text-gray-600 transition-colors">airbnb</span>
            <span className="hover:text-gray-600 transition-colors flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L2.4 6.13l3.82 2.6L12 5.06l5.78 3.67 3.82-2.6zM2.4 17.87L12 24l9.6-6.13-3.82-2.6L12 18.94l-5.78-3.67zM12 11.3l-5.78-3.67-3.82 2.6L12 16.36l5.78-3.67-3.82-2.6z"/></svg> Dropbox</span>
            <span className="hover:text-gray-600 transition-colors">HubSpot</span>
          </div>
        </div>
      </div>

    </section>
  );
}