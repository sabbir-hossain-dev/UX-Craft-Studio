export default function TrustSection() {
  return (
    <section className="bg-[#F8FAFC] pt-20 pb-0 relative overflow-hidden font-sans">
      
      {/* 1. Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] text-xs font-bold tracking-wide mb-6 uppercase">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Trusted by businesses worldwide
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Trusted by Businesses. <br />
          Proven by <span className="text-[#0B47B3]">Results.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          We partner with forward-thinking companies to deliver solutions that create real impact.
        </p>
      </div>

      {/* 2. Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-5 w-full md:w-1/4 md:pr-6 pt-4 md:pt-0">
            <div className="w-14 h-14 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-sm font-semibold text-gray-800">Happy Clients</p>
              <p className="text-xs text-gray-500 mt-0.5">Businesses growing with us</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5 w-full md:w-1/4 md:px-6 pt-4 md:pt-0">
            <div className="w-14 h-14 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">120+</h3>
              <p className="text-sm font-semibold text-gray-800">Projects Completed</p>
              <p className="text-xs text-gray-500 mt-0.5">Successful delivery across industries</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-5 w-full md:w-1/4 md:px-6 pt-4 md:pt-0">
            <div className="w-14 h-14 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">98%</h3>
              <p className="text-sm font-semibold text-gray-800">Client Satisfaction</p>
              <p className="text-xs text-gray-500 mt-0.5">Clients who love working with us</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-5 w-full md:w-1/4 md:pl-6 pt-4 md:pt-0">
            <div className="w-14 h-14 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">25+</h3>
              <p className="text-sm font-semibold text-gray-800">Countries Served</p>
              <p className="text-xs text-gray-500 mt-0.5">Global reach, local impact</p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Logos Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <p className="text-[#0B47B3] font-bold text-sm mb-8">Trusted by leading companies</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-400 font-bold text-2xl">
          <span className="hover:text-gray-600 transition-colors flex items-center gap-2"><span className="text-3xl">G</span>oogle</span>
          <span className="hover:text-gray-600 transition-colors flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/></svg> Microsoft</span>
          <span className="hover:text-gray-600 transition-colors flex items-center gap-1"><span className="text-2xl">#</span> slack</span>
          <span className="hover:text-gray-600 transition-colors">airbnb</span>
          <span className="hover:text-gray-600 transition-colors flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L2.4 6.13l3.82 2.6L12 5.06l5.78 3.67 3.82-2.6zM2.4 17.87L12 24l9.6-6.13-3.82-2.6L12 18.94l-5.78-3.67zM12 11.3l-5.78-3.67-3.82 2.6L12 16.36l5.78-3.67-3.82-2.6z"/></svg> Dropbox</span>
          <span className="hover:text-gray-600 transition-colors">HubSpot</span>
        </div>
      </div>

      {/* 4. Testimonials */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between h-full">
          <div>
            <span className="text-4xl text-[#0B47B3] font-serif leading-none">“</span>
            <p className="text-sm text-gray-700 leading-relaxed mt-2 font-medium">
              UXCRAFT Studio transformed our digital presence and helped us achieve growth beyond our expectations. Their team is exceptional!
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=11" alt="John Carter" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">John Carter</h4>
                <p className="text-xs text-gray-500">Marketing Director</p>
              </div>
            </div>
            <span className="text-gray-300 font-bold text-lg">Google</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between h-full">
          <div>
            <span className="text-4xl text-[#0B47B3] font-serif leading-none">“</span>
            <p className="text-sm text-gray-700 leading-relaxed mt-2 font-medium">
              The solution delivered by UXCRAFT Studio has streamlined our workflow and improved our productivity by 40%.
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=5" alt="Sarah Mitchell" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">Sarah Mitchell</h4>
                <p className="text-xs text-gray-500">CEO, TechNova</p>
              </div>
            </div>
            <span className="text-gray-300 font-bold text-lg flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/></svg> Microsoft</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between h-full">
          <div>
            <span className="text-4xl text-[#0B47B3] font-serif leading-none">“</span>
            <p className="text-sm text-gray-700 leading-relaxed mt-2 font-medium">
              Professional, responsive, and results-driven. UXCRAFT Studio is a trusted partner in our digital transformation journey.
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?img=12" alt="David Lee" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">David Lee</h4>
                <p className="text-xs text-gray-500">CTO, InnovateX</p>
              </div>
            </div>
            <span className="text-gray-300 font-bold text-lg flex items-center gap-1"><span className="text-xl">#</span> slack</span>
          </div>
        </div>

      </div>

      {/* 5. Bottom Call to Action Banner */}
      <div className="max-w-[1400px] mx-auto mt-24">
        <div className="bg-[#0B47B3] rounded-t-[3rem] px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Your success is our mission.</h4>
              <p className="text-blue-200 text-sm mt-1">We're here to help you grow with confidence.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-10">
            <p className="text-white font-medium text-lg text-center md:text-left">Let's build something great together.</p>
            <button className="bg-white text-[#0B47B3] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}