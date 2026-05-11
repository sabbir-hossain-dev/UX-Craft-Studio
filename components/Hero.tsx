export default function Hero() {
  return (
    <div className="bg-[#0B47B3] min-h-[calc(100vh-76px)] relative font-sans pt-8 md:pt-16">
      
      {/* Top Hero Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pb-24 z-10 relative">
        
        {/* Left Column: Text & Buttons */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
            We build digital experiences
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            We Build Solutions <br className="hidden md:block" />
            That Drive <span className="text-[#8BB4F6]">Growth</span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-100/80 mb-10 max-w-lg leading-relaxed">
            We help businesses turn ideas into powerful digital products that engage users and drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#0B47B3] px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg">
              Get Started
            </button>
            <button className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Right Column: Image & Floating Cards */}
        <div className="relative h-[450px] md:h-[550px] w-full mt-8 lg:mt-0">
          
          <div 
            className="absolute right-0 top-6 w-[85%] h-[85%] bg-blue-300 overflow-hidden shadow-2xl"
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Corporate Building" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card 1: Performance */}
          <div className="absolute top-12 right-0 bg-white rounded-xl p-4 shadow-xl w-48 z-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#0B47B3] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-semibold uppercase">Performance</p>
                <p className="text-xl font-bold text-gray-900 leading-none">+120%</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mb-2">Growth this year</p>
            <svg className="w-full h-8" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 25C10 25 15 10 25 10C35 10 40 20 50 20C60 20 65 5 75 5C85 5 90 15 100 15" stroke="#8BB4F6" strokeWidth="2" strokeLinecap="round"/>
              <path d="M0 25C10 25 15 10 25 10C35 10 40 20 50 20C60 20 65 5 75 5C85 5 90 15 100 15V30H0V25Z" fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="50" y1="5" x2="50" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8BB4F6" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="#8BB4F6" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Card 2: Trusted Clients */}
          <div className="absolute bottom-12 left-0 lg:-left-12 bg-white rounded-xl p-5 shadow-2xl w-56 z-20">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#0B47B3] flex items-center justify-center text-white shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Trusted by</p>
                <p className="text-2xl font-extrabold text-gray-900 leading-tight">500+</p>
                <p className="text-[11px] text-gray-400">Happy Clients</p>
              </div>
            </div>
            <div className="flex -space-x-3 mt-4">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="Client" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="Client" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="Client" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=4" alt="Client" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#0B47B3] text-white flex items-center justify-center text-xs font-bold z-10 relative">
                +
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Logos Section */}
      <div className="bg-white rounded-t-[2.5rem] w-full py-10 px-6 md:px-12 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-gray-500 font-medium text-sm border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-8 shrink-0">
            Trusted by leading companies
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-around w-full gap-6 lg:gap-12 text-gray-400 font-bold text-xl md:text-2xl">
            <span className="hover:text-gray-600 transition-colors cursor-pointer flex items-center gap-2">
              <span className="text-2xl">#</span> slack
            </span>
            <span className="hover:text-gray-600 transition-colors cursor-pointer">Google</span>
            <span className="hover:text-gray-600 transition-colors cursor-pointer flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/></svg> Microsoft
            </span>
            <span className="hover:text-gray-600 transition-colors cursor-pointer">airbnb</span>
            <span className="hover:text-gray-600 transition-colors cursor-pointer flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L2.4 6.13l3.82 2.6L12 5.06l5.78 3.67 3.82-2.6zM2.4 17.87L12 24l9.6-6.13-3.82-2.6L12 18.94l-5.78-3.67zM12 11.3l-5.78-3.67-3.82 2.6L12 16.36l5.78-3.67-3.82-2.6z"/></svg> Dropbox
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}