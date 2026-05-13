import Link from "next/link";

export default function ResultsSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B47B3] text-white text-xs font-bold tracking-wide mb-6 uppercase shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          Client Results
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          Real Results. <span className="text-[#0B47B3]">Real Impact.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          We measure success by the growth and impact we create for our clients. Here's what we've achieved together.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top Stats Banner */}
        <div className="bg-[#0B47B3] rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 md:gap-4 mb-20">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-1/4">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl">250+</h4>
              <p className="text-white/90 text-sm font-semibold">Projects Delivered</p>
              <p className="text-white/60 text-xs mt-0.5">Across industries and business sizes</p>
            </div>
          </div>
          <div className="hidden lg:block w-[1px] bg-white/10 h-16 self-center"></div>
          
          {/* Stat 2 */}
          <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-1/4">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl">98%</h4>
              <p className="text-white/90 text-sm font-semibold">Client Satisfaction</p>
              <p className="text-white/60 text-xs mt-0.5">Long-term partnerships built on trust</p>
            </div>
          </div>
          <div className="hidden lg:block w-[1px] bg-white/10 h-16 self-center"></div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-1/4">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl">2X-6X</h4>
              <p className="text-white/90 text-sm font-semibold">Average ROI</p>
              <p className="text-white/60 text-xs mt-0.5">Delivered measurable growth for our clients</p>
            </div>
          </div>
          <div className="hidden lg:block w-[1px] bg-white/10 h-16 self-center"></div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-1/4">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl">40%+</h4>
              <p className="text-white/90 text-sm font-semibold">Performance Increase</p>
              <p className="text-white/60 text-xs mt-0.5">On average across digital platforms we build</p>
            </div>
          </div>
        </div>

        {/* How We Drive Results - Title */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-[#0B47B3]"></div>
          <h3 className="text-2xl font-bold text-gray-900">How We Drive Results</h3>
          <div className="w-2 h-2 rounded-full bg-[#0B47B3]"></div>
          <div className="w-12 h-[1px] bg-gray-300"></div>
        </div>

        {/* Process Flow */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-20 relative">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-[200px] z-10">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-4 shadow-sm border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Understand</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">We dive deep into your business, audience, and challenges.</p>
          </div>
          
          <div className="hidden md:block text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center max-w-[200px] z-10">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-4 shadow-sm border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Strategize</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">We create data-driven strategies tailored to your goals.</p>
          </div>

          <div className="hidden md:block text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center max-w-[200px] z-10">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-4 shadow-sm border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Execute</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">We design and build with precision, agility, and best practices.</p>
          </div>

          <div className="hidden md:block text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg></div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center max-w-[200px] z-10">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-4 shadow-sm border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Optimize</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">We continuously test, refine, and optimize for better performance.</p>
          </div>

          <div className="hidden md:block text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg></div>

          {/* Step 5 */}
          <div className="flex flex-col items-center text-center max-w-[200px] z-10">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-4 shadow-sm border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Deliver Growth</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">We deliver measurable results that impact your bottom line.</p>
          </div>

        </div>

        {/* Mini Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Fintek</h4>
                  <p className="text-[11px] text-gray-500">Fintech</p>
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <h3 className="text-3xl font-bold text-[#0B47B3]">120%</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B47B3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l7-7 7 7"/><path d="M12 19V5"/></svg>
              </div>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">Increase in user sign-ups in just 6 months.</p>
            </div>
            
            <div className="mt-auto">
              {/* Decorative Chart SVG */}
              <div className="h-12 w-full mb-4 relative overflow-hidden">
                 <svg viewBox="0 0 100 30" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0 25 L 20 20 L 40 22 L 60 10 L 80 15 L 100 2" fill="none" stroke="#0B47B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0 25 L 20 20 L 40 22 L 60 10 L 80 15 L 100 2 L 100 30 L 0 30 Z" fill="url(#gradientBlue)" opacity="0.1"/>
                    <defs>
                      <linearGradient id="gradientBlue" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0B47B3"/>
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                 </svg>
              </div>
              <Link href="#" className="inline-flex items-center gap-1 text-[#0B47B3] font-bold text-xs hover:gap-2 transition-all">
                View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Shopizy</h4>
                  <p className="text-[11px] text-gray-500">E-commerce</p>
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <h3 className="text-3xl font-bold text-[#0B47B3]">75%</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B47B3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l7-7 7 7"/><path d="M12 19V5"/></svg>
              </div>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">Boost in online sales after platform redesign.</p>
            </div>
            
            <div className="mt-auto">
              <div className="h-12 w-full mb-4 relative overflow-hidden">
                 <svg viewBox="0 0 100 30" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0 20 L 25 22 L 50 15 L 75 18 L 100 5" fill="none" stroke="#0B47B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0 20 L 25 22 L 50 15 L 75 18 L 100 5 L 100 30 L 0 30 Z" fill="url(#gradientBlue)" opacity="0.1"/>
                 </svg>
              </div>
              <Link href="#" className="inline-flex items-center gap-1 text-[#0B47B3] font-bold text-xs hover:gap-2 transition-all">
                View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">HealthPlus</h4>
                  <p className="text-[11px] text-gray-500">Healthcare</p>
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <h3 className="text-3xl font-bold text-[#0B47B3]">90%</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B47B3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l7-7 7 7"/><path d="M12 19V5"/></svg>
              </div>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">Increase in app engagement and patient satisfaction.</p>
            </div>
            
            <div className="mt-auto">
              <div className="h-12 w-full mb-4 relative overflow-hidden">
                 <svg viewBox="0 0 100 30" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0 25 L 30 20 L 60 22 L 80 8 L 100 3" fill="none" stroke="#0B47B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0 25 L 30 20 L 60 22 L 80 8 L 100 3 L 100 30 L 0 30 Z" fill="url(#gradientBlue)" opacity="0.1"/>
                 </svg>
              </div>
              <Link href="#" className="inline-flex items-center gap-1 text-[#0B47B3] font-bold text-xs hover:gap-2 transition-all">
                View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Brandio</h4>
                  <p className="text-[11px] text-gray-500">Digital Marketing</p>
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <h3 className="text-3xl font-bold text-[#0B47B3]">3X</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B47B3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l7-7 7 7"/><path d="M12 19V5"/></svg>
              </div>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">Growth in qualified leads within 4 months.</p>
            </div>
            
            <div className="mt-auto">
              <div className="h-12 w-full mb-4 relative overflow-hidden">
                 <svg viewBox="0 0 100 30" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0 25 L 20 28 L 50 15 L 80 20 L 100 2" fill="none" stroke="#0B47B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0 25 L 20 28 L 50 15 L 80 20 L 100 2 L 100 30 L 0 30 Z" fill="url(#gradientBlue)" opacity="0.1"/>
                 </svg>
              </div>
              <Link href="#" className="inline-flex items-center gap-1 text-[#0B47B3] font-bold text-xs hover:gap-2 transition-all">
                View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Testimonial Banner */}
        <div className="bg-[#F8FAFC] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100 shadow-sm mx-auto max-w-5xl">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-[#0B47B3] text-white flex items-center justify-center shrink-0">
              <span className="font-serif text-3xl leading-none mt-2">“</span>
            </div>
            <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed italic max-w-2xl">
              Their expertise, communication, and commitment to results made a huge difference in our growth journey.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 md:pl-6 md:border-l border-gray-200">
            <img src="https://i.pravatar.cc/150?img=11" alt="James Carter" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
            <div>
              <h4 className="font-bold text-gray-900 text-sm">James Carter</h4>
              <p className="text-xs text-gray-500">CEO, Fintek</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}