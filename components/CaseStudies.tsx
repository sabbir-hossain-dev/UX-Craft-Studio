import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="bg-white py-24 relative overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B47B3] text-white text-xs font-bold tracking-wide mb-6 uppercase shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Case Studies
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          Real Challenges. Real Solutions. <span className="text-[#0B47B3]">Real Results.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          Explore how we've helped businesses across industries overcome challenges, implement smart solutions, and achieve measurable growth.
        </p>
      </div>

      {/* Filter and Sort Bar */}
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-5 py-2 rounded-full bg-[#0B47B3] text-white font-semibold text-sm shadow-md transition-colors">All Case Studies</button>
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:border-[#0B47B3] hover:text-[#0B47B3] transition-colors">Web Development</button>
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:border-[#0B47B3] hover:text-[#0B47B3] transition-colors">UI/UX Design</button>
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:border-[#0B47B3] hover:text-[#0B47B3] transition-colors">E-commerce</button>
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:border-[#0B47B3] hover:text-[#0B47B3] transition-colors">Branding</button>
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:border-[#0B47B3] hover:text-[#0B47B3] transition-colors">Digital Marketing</button>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer hover:text-[#0B47B3]">
          Sort by: Latest
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        
        {/* Left Column: Case Study Cards Stack */}
        <div className="flex flex-col gap-6">
          
          {/* Card 1: Fintek */}
          <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group">
            {/* Left Blue Box */}
            <div className="w-full md:w-[35%] bg-[#0B47B3] p-8 flex flex-col relative overflow-hidden text-white">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2 font-bold text-lg"><span className="w-5 h-5 bg-white rounded flex items-center justify-center"><span className="w-2.5 h-2.5 bg-[#0B47B3] rounded-sm"></span></span> Fintek</div>
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-semibold uppercase tracking-wider">Web Development</span>
              </div>
              <p className="text-blue-100 text-sm font-medium relative z-10 mb-8">A modern banking platform designed for the future.</p>
              <div className="mt-auto relative z-10 -mx-8 -mb-8">
                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Building" className="w-full h-40 object-cover opacity-80 mix-blend-overlay" />
              </div>
            </div>
            {/* Right White Box */}
            <div className="w-full md:w-[65%] bg-white p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0B47B3] transition-colors">Digital Banking Platform</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">We built a secure, scalable, and user-friendly digital banking platform to enhance customer experience and streamline financial operations.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div>
                  <div><h4 className="font-bold text-gray-900 text-lg leading-none">120%</h4><p className="text-[11px] text-gray-500 mt-1 leading-snug">Increase in User Growth</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></div>
                  <div><h4 className="font-bold text-gray-900 text-lg leading-none">35%</h4><p className="text-[11px] text-gray-500 mt-1 leading-snug">Reduction in Operational Costs</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                  <div><h4 className="font-bold text-gray-900 text-lg leading-none">2.5x</h4><p className="text-[11px] text-gray-500 mt-1 leading-snug">Faster Transaction Processing</p></div>
                </div>
              </div>
              <Link href="#" className="inline-flex items-center gap-2 text-[#0B47B3] font-bold text-sm hover:gap-3 transition-all">
                View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Card 2: Shopizy */}
          <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group">
            <div className="w-full md:w-[35%] bg-[#0B47B3] p-8 flex flex-col relative overflow-hidden text-white">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2 font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 2v4h6v16H2V6h6V2h8zm-2 4V4H10v2h4z"/></svg> Shopizy</div>
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-semibold uppercase tracking-wider">E-commerce</span>
              </div>
              <p className="text-blue-100 text-sm font-medium relative z-10 mb-8">A scalable e-commerce store that drives more sales.</p>
              <div className="mt-auto relative z-10 -mx-2 -mb-8">
                <div className="bg-white rounded-t-lg p-2 shadow-lg rotate-2 translate-y-4">
                  <img src="https://images.unsplash.com/photo-1434389678278-be43b4aa64c1?q=80&w=2070&auto=format&fit=crop" alt="UI" className="w-full h-24 object-cover rounded" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[65%] bg-white p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0B47B3] transition-colors">E-commerce Platform Redesign</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">We redesigned and developed a high-performing e-commerce platform that improved UX and boosted conversions.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
                  <div><h4 className="font-bold text-gray-900 text-lg leading-none">70%</h4><p className="text-[11px] text-gray-500 mt-1 leading-snug">Increase in Sales</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
                  <div><h4 className="font-bold text-gray-900 text-lg leading-none">55%</h4><p className="text-[11px] text-gray-500 mt-1 leading-snug">Boost in Mobile Revenue</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div>
                  <div><h4 className="font-bold text-gray-900 text-lg leading-none">28%</h4><p className="text-[11px] text-gray-500 mt-1 leading-snug">Reduction in Cart Abandonment</p></div>
                </div>
              </div>
              <Link href="#" className="inline-flex items-center gap-2 text-[#0B47B3] font-bold text-sm hover:gap-3 transition-all">
                View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Card 3: HealthPlus */}
          <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group">
            <div className="w-full md:w-[35%] bg-[#0B47B3] p-8 flex flex-col relative overflow-hidden text-white">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2 font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> HealthPlus</div>
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-semibold uppercase tracking-wider">UI/UX Design</span>
              </div>
              <p className="text-blue-100 text-sm font-medium relative z-10 mb-8">Better experience. Better engagement.</p>
              <div className="mt-auto relative z-10 -mx-4 -mb-8 flex justify-center">
                 <div className="bg-white rounded-t-xl p-1 shadow-lg w-3/4">
                   <div className="bg-blue-50 h-32 rounded-t-lg w-full"></div>
                 </div>
              </div>
            </div>
            <div className="w-full md:w-[65%] bg-white p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0B47B3] transition-colors">Healthcare App UI/UX Design</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">We designed an intuitive and accessible mobile app that improved patient engagement and simplified healthcare management.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div>
                  <div><h4 className="font-bold text-gray-900 text-lg leading-none">90%</h4><p className="text-[11px] text-gray-500 mt-1 leading-snug">Increase in User Satisfaction</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                  <div><h4 className="font-bold text-gray-900 text-lg leading-none">40%</h4><p className="text-[11px] text-gray-500 mt-1 leading-snug">Improvement in App Engagement</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                  <div><h4 className="font-bold text-gray-900 text-lg leading-none">60%</h4><p className="text-[11px] text-gray-500 mt-1 leading-snug">Faster Appointment Bookings</p></div>
                </div>
              </div>
              <Link href="#" className="inline-flex items-center gap-2 text-[#0B47B3] font-bold text-sm hover:gap-3 transition-all">
                View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Right Column: Sidebar (Impact Stats & CTA) */}
        <div className="flex flex-col gap-6">
          
          {/* Delivering Impact Card */}
          <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Delivering Impact</h3>
            <h3 className="text-xl font-bold text-[#0B47B3] mb-8">That Matters</h3>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0B47B3] shadow-sm shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                <div><h4 className="font-bold text-gray-900 text-lg">150+</h4><p className="text-sm font-semibold text-gray-800">Projects Completed</p><p className="text-[11px] text-gray-500 mt-0.5">Across industries and domains</p></div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0B47B3] shadow-sm shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                <div><h4 className="font-bold text-gray-900 text-lg">98%</h4><p className="text-sm font-semibold text-gray-800">Client Satisfaction</p><p className="text-[11px] text-gray-500 mt-0.5">Long-term partnerships built on trust</p></div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0B47B3] shadow-sm shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div>
                <div><h4 className="font-bold text-gray-900 text-lg">2x Avg.</h4><p className="text-sm font-semibold text-gray-800">Business Growth</p><p className="text-[11px] text-gray-500 mt-0.5">Achieved by our clients</p></div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0B47B3] shadow-sm shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                <div><h4 className="font-bold text-gray-900 text-lg">25+</h4><p className="text-sm font-semibold text-gray-800">Industries Served</p><p className="text-[11px] text-gray-500 mt-0.5">From startups to enterprises</p></div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-[#0B47B3] rounded-3xl p-8 text-white shadow-lg">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
            <h3 className="text-xl font-bold mb-2">Have a project in mind?</h3>
            <p className="text-blue-100 text-sm mb-8">Let's create something amazing together.</p>
            <button className="w-full bg-white text-[#0B47B3] px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-md flex items-center justify-center gap-2">
              Get in Touch <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

          <div className="text-center mt-2">
            <Link href="#" className="inline-flex items-center gap-2 text-[#0B47B3] font-bold text-sm hover:gap-3 transition-all">
              View All Case Studies <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}