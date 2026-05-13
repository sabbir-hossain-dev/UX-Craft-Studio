export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-gray-50 py-24 font-sans">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B47B3]/10 text-[#0B47B3] text-xs font-bold tracking-wide mb-6 uppercase shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          Featured Work
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Work That Drives <span className="text-[#0B47B3]">Results.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          Explore a selection of projects where strategy, design, and technology came together to create real business impact.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-6 mb-16">
        <button className="px-6 py-2.5 rounded-full bg-[#0B47B3] text-white font-medium text-sm shadow-md transition-colors">All Projects</button>
        <button className="px-6 py-2.5 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:border-[#0B47B3] hover:text-[#0B47B3] transition-colors">Web Design</button>
        <button className="px-6 py-2.5 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:border-[#0B47B3] hover:text-[#0B47B3] transition-colors">Web Development</button>
        <button className="px-6 py-2.5 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:border-[#0B47B3] hover:text-[#0B47B3] transition-colors">Branding</button>
        <button className="px-6 py-2.5 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:border-[#0B47B3] hover:text-[#0B47B3] transition-colors">UI/UX Design</button>
      </div>

      {/* Project Cards Grid */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
        
        {/* Project Card 1: Fintek */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
          {/* Project Image Area (Placeholder) */}
          <div className="h-64 bg-[#0B47B3] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="p-8 relative z-10 text-white">
              <div className="flex items-center gap-2 mb-6 font-bold"><span className="w-4 h-4 rounded-full bg-white flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-[#0B47B3]"></span></span>Fintek</div>
              <h3 className="text-3xl font-bold leading-tight mb-2">Smart Banking<br/>for a Better Future</h3>
            </div>
          </div>
          {/* Content Area */}
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#0B47B3] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span className="text-sm font-semibold uppercase tracking-wider">Web Design & Development</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0B47B3] transition-colors">Fintek – Digital Banking Platform</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">A modern banking platform designed to deliver seamless financial management for users.</p>
            </div>
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-50">
              <div>
                <div className="flex items-center gap-1 text-[#0B47B3] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> +120%</div>
                <p className="text-[11px] text-gray-500 mt-1">User Growth</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#0B47B3] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg> -35%</div>
                <p className="text-[11px] text-gray-500 mt-1">Bounce Rate</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#0B47B3] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> +60%</div>
                <p className="text-[11px] text-gray-500 mt-1">Conversions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 2: DataPro */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
          <div className="h-64 bg-[#111827] relative overflow-hidden flex items-center justify-center">
             <div className="p-8 relative z-10 text-white w-full h-full text-center flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 mb-4 font-bold text-lg">DataPro</div>
              <h3 className="text-2xl font-bold leading-tight">Turn Data Into<br/><span className="text-blue-400">Actionable Insights</span></h3>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#0B47B3] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                <span className="text-sm font-semibold uppercase tracking-wider">Web Application</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0B47B3] transition-colors">DataPro – Analytics Dashboard</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">An advanced analytics dashboard that transforms complex data into clear, actionable insights.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-50">
              <div>
                <div className="flex items-center gap-1 text-[#0B47B3] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> +40%</div>
                <p className="text-[11px] text-gray-500 mt-1">Efficiency</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#0B47B3] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg> +25%</div>
                <p className="text-[11px] text-gray-500 mt-1">Data Accuracy</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#0B47B3] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> +3x</div>
                <p className="text-[11px] text-gray-500 mt-1">Report Speed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 3: Modeva */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
          <div className="h-64 bg-[#F3F0EC] relative overflow-hidden flex items-center justify-center">
            {/* Using an Unsplash placeholder for fashion/ecommerce vibe */}
            <img src="https://images.unsplash.com/photo-1434389678278-be43b4aa64c1?q=80&w=2070&auto=format&fit=crop" alt="Ecommerce" className="w-full h-full object-cover mix-blend-multiply opacity-50" />
            <div className="absolute inset-0 p-8 flex flex-col items-start justify-center">
              <div className="flex items-center gap-2 mb-4 font-bold text-gray-800"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg> Modeva</div>
              <h3 className="text-2xl font-bold leading-tight text-gray-900">Elevate Your<br/>Everyday Style</h3>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#0B47B3] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                <span className="text-sm font-semibold uppercase tracking-wider">E-commerce Development</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0B47B3] transition-colors">Modeva – E-commerce Store</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">A clean, conversion-focused e-commerce store built for a seamless shopping experience.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-50">
              <div>
                <div className="flex items-center gap-1 text-[#0B47B3] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> +70%</div>
                <p className="text-[11px] text-gray-500 mt-1">Sales Growth</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#0B47B3] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg> +55%</div>
                <p className="text-[11px] text-gray-500 mt-1">Mobile Revenue</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#0B47B3] font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> -28%</div>
                <p className="text-[11px] text-gray-500 mt-1">Cart Abandonment</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="bg-[#0B47B3] rounded-[2rem] p-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl mb-1">Have a project in mind?</h3>
              <p className="text-blue-100/90 text-sm md:text-base">Let's build something amazing together.</p>
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-center md:border-l border-white/20 md:pl-10">
            <button className="w-full md:w-auto bg-white text-[#0B47B3] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
              Let's Talk
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}