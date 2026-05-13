import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Web Design & Development",
      desc: "We build responsive, fast, and user-friendly websites that deliver exceptional digital experiences.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M6 7h.01"/><path d="M10 7h.01"/><path d="M14 7h.01"/></svg>
    },
    {
      title: "Mobile App Development",
      desc: "Custom mobile applications designed to engage users and accelerate your business growth.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/><path d="M10 6h4"/></svg>
    },
    {
      title: "E-commerce Solutions",
      desc: "Scalable and secure e-commerce solutions that help you sell more and manage with ease.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies that increase visibility, attract the right audience, and drive ROI.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/><path d="M19 9v6"/><path d="M19 9h-6"/></svg>
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive and engaging designs that enhance user experience and strengthen your brand.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
    },
    {
      title: "Cloud & IT Solutions",
      desc: "Reliable cloud services and IT solutions to streamline operations and support business scalability.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
    }
  ];

  return (
    <section id="services" className="bg-white py-24 relative overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B47B3] text-white text-xs font-bold tracking-wide mb-6 uppercase shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Core Services
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Solutions Built Around <span className="text-[#0B47B3]">Your Goals.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          We offer end-to-end digital solutions that help businesses innovate, grow, and stay ahead of the competition.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start gap-5 mb-4">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0B47B3] flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <div className="mt-1.5">
                <h3 className="font-bold text-gray-900 text-xl leading-tight mb-3 group-hover:text-[#0B47B3] transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{service.desc}</p>
              </div>
            </div>
            
            <div className="mt-auto pt-6 border-t border-gray-50">
              <Link href="#" className="inline-flex items-center gap-2 text-[#0B47B3] font-bold text-sm hover:gap-3 transition-all">
                Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-[#0B47B3] rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl mb-1">Need a Solution Tailored to Your Business?</h3>
              <p className="text-blue-100 text-sm md:text-base">Let's discuss how we can help you achieve your goals.</p>
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-center md:border-l border-white/20 md:pl-10 shrink-0">
            <button className="w-full md:w-auto bg-white text-[#0B47B3] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
              Get in Touch <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}