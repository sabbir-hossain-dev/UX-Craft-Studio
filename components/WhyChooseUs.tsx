export default function WhyChooseUs() {
  const comparisonData = [
    { feature: "Custom Strategy", us: true, agencies: true, freelancers: true },
    { feature: "Dedicated Team", us: true, agencies: true, freelancers: false },
    { feature: "Timely Delivery", us: true, agencies: true, freelancers: false },
    { feature: "Measurable Results", us: true, agencies: false, freelancers: false },
    { feature: "Long-term Support", us: true, agencies: false, freelancers: false },
    { feature: "Data Security", us: true, agencies: false, freelancers: false },
  ];

  return (
    <section id="about" className="bg-white py-24 font-sans">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B47B3] text-white text-xs font-bold tracking-wide mb-6 uppercase shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Why Choose Us
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          More Than a Service. <br className="hidden md:block" />
          A True <span className="text-[#0B47B3]">Growth Partner.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          We go beyond delivering solutions—we partner with you to drive meaningful growth, every step of the way.
        </p>
      </div>

      {/* 6 Grid Cards */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">Client-Centric <br/>Approach</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">Your goals are our priority. We listen, collaborate, and build solutions that truly align with your vision.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">Strategic <br/>Thinking</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">We combine data, insights, and creativity to craft strategies that drive real business impact.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">End-to-End <br/>Solutions</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">From strategy and design to development and support—we've got you covered at every stage.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">Proven <br/>Results</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">Our solutions are measurable, impactful, and built to deliver consistent growth.</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">Quality & <br/>Reliability</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">We follow best practices and maintain the highest standards in everything we deliver.</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">Ongoing <br/>Partnership</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">We're with you for the long run—offering support, optimization, and continuous improvement.</p>
        </div>

      </div>

      {/* Bottom Section: Side-by-side Layout */}
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-stretch gap-6">
        
        {/* Left: Why We're Different Info Box */}
        <div className="w-full lg:w-[35%] bg-[#0B47B3] rounded-[2rem] p-10 text-white flex flex-col justify-center shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
            </div>
            <h3 className="text-3xl font-bold leading-tight">Why We're<br/>Different</h3>
          </div>
          <p className="text-blue-100 mb-10 text-sm leading-relaxed border-b border-white/20 pb-8">
            We don't just complete projects—we build partnerships that drive long-term success.
          </p>
          <ul className="space-y-5">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 text-[#0B47B3]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <span className="text-sm font-medium text-white">Tailored strategies for your unique challenges</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 text-[#0B47B3]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <span className="text-sm font-medium text-white">Transparent communication, every step of the way</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 text-[#0B47B3]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <span className="text-sm font-medium text-white">Focused on ROI, growth, and long-term value</span>
            </li>
          </ul>
        </div>

        {/* Right: Comparison Table */}
        <div className="w-full lg:w-[65%] bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[600px] w-full p-2">
              
              {/* Table Header */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-end px-6 pt-6 pb-4">
                <div className="font-bold text-gray-900 text-lg">Features</div>
                <div className="bg-[#0B47B3] text-white font-bold text-center py-4 px-2 rounded-t-2xl shadow-md text-sm relative">
                  UXCRAFT STUDIO
                  {/* Subtle glow effect for highlighted column */}
                  <div className="absolute inset-0 bg-white/10 rounded-t-2xl opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="font-bold text-gray-700 text-center text-sm">Other Agencies</div>
                <div className="font-bold text-gray-700 text-center text-sm">Freelancers</div>
              </div>

              {/* Table Rows */}
              <div className="flex flex-col">
                {comparisonData.map((item, index) => (
                  <div key={index} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center px-6">
                    
                    {/* Feature Name */}
                    <div className="flex items-center gap-3 py-4 border-b border-gray-100 text-gray-700 font-medium text-sm">
                      <span className="text-[#0B47B3] opacity-70">
                        {/* Adding subtle icons based on index to match the reference */}
                        {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>}
                        {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                        {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                        {index === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>}
                        {index === 4 && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>}
                        {index === 5 && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
                      </span>
                      {item.feature}
                    </div>

                    {/* UXCRAFT Column (Highlighted) */}
                    <div className={`bg-[#0B47B3] flex justify-center py-4 ${index === comparisonData.length - 1 ? 'rounded-b-2xl mb-2' : ''}`}>
                      {item.us ? (
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#0B47B3]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      ) : null}
                    </div>

                    {/* Other Agencies Column */}
                    <div className="flex justify-center py-4 border-b border-gray-100">
                      {item.agencies ? (
                        <div className="w-6 h-6 rounded-full bg-[#0B47B3] flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </div>
                      )}
                    </div>

                    {/* Freelancers Column */}
                    <div className="flex justify-center py-4 border-b border-gray-100">
                      {item.freelancers ? (
                         <div className="w-6 h-6 rounded-full bg-[#0B47B3] flex items-center justify-center text-white">
                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                       </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </div>
                      )}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}