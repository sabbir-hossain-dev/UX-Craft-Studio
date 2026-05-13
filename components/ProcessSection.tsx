export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We start by understanding your business, goals, target audience, and challenges.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="10" x2="12" y2="10.01"/></svg>,
      bullets: ["Stakeholder discussions", "Requirements gathering", "Goal alignment"]
    },
    {
      num: "02",
      title: "Strategize",
      desc: "We analyze insights and craft a tailored strategy that sets the foundation for success.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/><path d="M15 15l2 2 4-4"/></svg>,
      bullets: ["Market & competitor research", "Solution roadmap", "Success metrics defined"]
    },
    {
      num: "03",
      title: "Design",
      desc: "Our team designs intuitive, engaging, and conversion-focused experiences.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
      bullets: ["Wireframes & prototypes", "UI/UX design", "Design validation"]
    },
    {
      num: "04",
      title: "Develop",
      desc: "We build robust, scalable, and secure solutions using the latest technologies.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      bullets: ["Agile development", "Quality assurance", "Performance optimization"]
    },
    {
      num: "05",
      title: "Launch",
      desc: "We deploy your solution seamlessly and ensure everything is ready to perform.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
      bullets: ["Deployment", "Final testing", "Go-live support"]
    },
    {
      num: "06",
      title: "Optimize",
      desc: "We continuously monitor, analyze, and optimize to drive long-term growth.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
      bullets: ["Performance monitoring", "Data-driven improvements", "Ongoing support"]
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 relative overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-20 relative z-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B47B3] text-white text-xs font-bold tracking-wide mb-6 uppercase shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          Our Process
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          A Clear Process. <span className="text-[#0B47B3]">Proven Results.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          We follow a proven process that ensures clarity, collaboration, and successful outcomes—every step of the way.
        </p>
      </div>

      {/* Process Steps Grid */}
      <div className="max-w-[1400px] mx-auto px-6 relative mb-16">
        
        {/* Connecting Dashed Line (Visible on XL screens) */}
        <div className="hidden xl:block absolute top-12 left-[8%] right-[8%] border-t-[2px] border-dashed border-[#0B47B3]/30 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10 pt-6 xl:pt-0">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center relative mt-8 xl:mt-0">
              
              {/* Number Badge */}
              <div className="absolute -top-6 w-12 h-12 bg-[#0B47B3] rounded-full text-white flex items-center justify-center font-bold text-lg border-[4px] border-[#F8FAFC] shadow-sm">
                {step.num}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center mt-6 mb-4">
                {step.icon}
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6 flex-grow">{step.desc}</p>

              {/* Bullet Points */}
              <div className="w-full text-left border-t border-gray-100 pt-5 space-y-2.5">
                {step.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#0B47B3] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-[11px] font-medium text-gray-600 leading-tight">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Features & CTA Banner */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-[#0B47B3] rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* Features Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 flex-1 w-full lg:pr-8 lg:border-r border-white/20">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 leading-tight">Collaborative <br/>Approach</h4>
                <p className="text-blue-200 text-[11px] leading-snug">We work as an extension<br/>of your team.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 leading-tight">Transparent <br/>Communication</h4>
                <p className="text-blue-200 text-[11px] leading-snug">You'll always know what's<br/>happening and why.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 leading-tight">On-Time <br/>Delivery</h4>
                <p className="text-blue-200 text-[11px] leading-snug">We respect timelines and<br/>deliver with consistency.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 leading-tight">Focused on <br/>Results</h4>
                <p className="text-blue-200 text-[11px] leading-snug">Every step is aligned with<br/>your business goals.</p>
              </div>
            </div>

          </div>

          {/* CTA Area */}
          <div className="w-full lg:w-auto lg:pl-4 text-center lg:text-left flex flex-col items-center lg:items-start shrink-0">
            <h3 className="text-white font-bold text-xl mb-1">Ready to Get Started?</h3>
            <p className="text-blue-100 text-sm mb-6">Let's build something amazing together.</p>
            <button className="bg-white text-[#0B47B3] px-8 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
              Contact Us <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}