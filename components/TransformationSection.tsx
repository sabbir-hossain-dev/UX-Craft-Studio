export default function TransformationSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B47B3] text-white text-xs font-bold tracking-wide mb-6 uppercase shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
          Problem to Transformation
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          From Challenges to <br />
          <span className="text-[#0B47B3]">Impactful Outcomes</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          We help businesses overcome roadblocks and unlock growth through strategic digital solutions.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 relative z-10">
        
        {/* Left Card: The Challenge */}
        <div className="w-full lg:w-[45%] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex-shrink-0">
          <div className="bg-red-50/50 px-6 py-4 border-b border-red-100 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </div>
            <h3 className="font-bold text-red-600 text-lg">The Challenge</h3>
          </div>
          <div className="p-6 flex flex-col gap-6">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px]">Low Online Visibility</h4>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">Lack of digital presence and visibility limited brand reach and awareness.</p>
              </div>
            </div>
            <hr className="border-gray-50" />
            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px]">Inefficient Processes</h4>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">Manual workflows and disconnected tools led to delays and increased costs.</p>
              </div>
            </div>
            <hr className="border-gray-50" />
            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px]">Poor User Experience</h4>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">Outdated design and complicated journeys resulted in low engagement and retention.</p>
              </div>
            </div>
            <hr className="border-gray-50" />
            {/* Item 4 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px]">No Data-Driven Decisions</h4>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">Lack of insights and reporting made it hard to make informed business decisions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Arrow Indicator */}
        <div className="relative flex items-center justify-center w-16 h-16 shrink-0 rotate-90 lg:rotate-0 my-4 lg:my-0">
          {/* Ripple effects */}
          <div className="absolute w-24 h-24 rounded-full border border-gray-200"></div>
          <div className="absolute w-32 h-32 rounded-full border border-gray-100"></div>
          {/* Main button */}
          <div className="w-12 h-12 rounded-full bg-[#0B47B3] flex items-center justify-center text-white z-10 shadow-[0_0_15px_rgba(11,71,179,0.4)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        {/* Right Card: The Transformation */}
        <div className="w-full lg:w-[45%] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex-shrink-0">
          <div className="bg-[#0B47B3]/5 px-6 py-4 border-b border-[#0B47B3]/10 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#0B47B3] text-white flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3 className="font-bold text-[#0B47B3] text-lg">The Transformation</h3>
          </div>
          <div className="p-6 flex flex-col gap-6">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px]">Stronger Online Presence</h4>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">We build powerful digital experiences that increase visibility and attract the right audience.</p>
              </div>
            </div>
            <hr className="border-gray-50" />
            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px]">Streamlined Operations</h4>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">We automate workflows and integrate tools to save time and reduce operational costs.</p>
              </div>
            </div>
            <hr className="border-gray-50" />
            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px]">Seamless User Experience</h4>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">We design intuitive, user-centric experiences that drive engagement and loyalty.</p>
              </div>
            </div>
            <hr className="border-gray-50" />
            {/* Item 4 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] flex items-center justify-center shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px]">Data-Driven Growth</h4>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">We turn data into actionable insights that help you make smarter decisions.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom KPI Banner */}
      <div className="max-w-6xl mx-auto px-6 mt-16 relative z-10">
        <div className="bg-[#0B47B3] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 shadow-2xl">
          
          {/* Metric 1 */}
          <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-1/4">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl">2X+</h4>
              <p className="text-white/90 text-sm font-semibold">Revenue Growth</p>
              <p className="text-white/60 text-[11px] mt-0.5 leading-snug">Average growth achieved<br/>by our clients</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] bg-white/10 h-16 self-center"></div>

          {/* Metric 2 */}
          <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-1/4">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl">50%</h4>
              <p className="text-white/90 text-sm font-semibold">Efficiency Improvement</p>
              <p className="text-white/60 text-[11px] mt-0.5 leading-snug">Through automation and<br/>process optimization</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] bg-white/10 h-16 self-center"></div>

          {/* Metric 3 */}
          <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-1/4">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl">90%+</h4>
              <p className="text-white/90 text-sm font-semibold">Client Satisfaction</p>
              <p className="text-white/60 text-[11px] mt-0.5 leading-snug">Long-term partnerships<br/>built on results</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] bg-white/10 h-16 self-center"></div>

          {/* Metric 4 */}
          <div className="flex items-center gap-4 w-full md:w-[45%] lg:w-1/4">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 17v-3"/><path d="M12 17v-6"/><path d="M17 17V9"/></svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl">3X</h4>
              <p className="text-white/90 text-sm font-semibold">Faster Time to Market</p>
              <p className="text-white/60 text-[11px] mt-0.5 leading-snug">With agile processes and<br/>smart solutions</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}