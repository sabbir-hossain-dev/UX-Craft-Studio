"use client";
import { useState, useEffect } from "react";

export default function CtaSection() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [userTimezone, setUserTimezone] = useState("");
  const [minDate, setMinDate] = useState("");
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  
  // New States for Meeting Method
  const [meetingMethod, setMeetingMethod] = useState("Google Meet");
  const [customMethod, setCustomMethod] = useState("");

  useEffect(() => {
    setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const today = new Date();
    const offset = today.getTimezoneOffset();
    const localToday = new Date(today.getTime() - offset * 60 * 1000);
    setMinDate(localToday.toISOString().split("T")[0]);
  }, []);

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i <= 17; i++) {
      const hour = i > 12 ? i - 12 : i;
      const ampm = i >= 12 ? "PM" : "AM";
      const hourStr = hour.toString().padStart(2, '0');
      slots.push(`${hourStr}:00 ${ampm}`);
      if (i !== 17) {
        slots.push(`${hourStr}:30 ${ampm}`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select both Date and Time for the meeting.");
      return;
    }
    if (meetingMethod === "Other" && !customMethod) {
      alert("Please specify your preferred meeting method.");
      return;
    }
    
    const finalMethod = meetingMethod === "Other" ? customMethod : meetingMethod;
    alert(`Meeting Confirmed for ${selectedDate} at ${selectedTime} (${userTimezone}) via ${finalMethod}. Link will be sent to your email!`);
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 font-sans px-6">
      <div className="max-w-[1400px] mx-auto bg-[#0B47B3] rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-2xl relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#0B47B3] text-xs font-bold tracking-wide mb-8 uppercase shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Book a Discovery Call
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Schedule Your Free <br />
            <span className="text-[#38bdf8]">Strategy Session</span>
          </h2>
          
          <p className="text-blue-100/90 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            Pick a time that works for you. We'll discuss your business goals, challenges, and how our digital solutions can help you grow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">1-on-1 Video Call</h4>
                <p className="text-blue-200/80 text-xs mt-1 leading-relaxed">Direct conversation with our experts.</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">No Obligations</h4>
                <p className="text-blue-200/80 text-xs mt-1 leading-relaxed">100% free advice, no pressure to buy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Booking Form */}
        <div className="w-full lg:w-1/2 relative z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Book Your Slot</h3>
              <div className="w-10 h-1 bg-[#38bdf8] rounded-full"></div>
            </div>

            <form onSubmit={handleBooking} className="flex flex-col gap-5">
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-colors text-sm" />
                <input type="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-colors text-sm" />
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Date Picker */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <input 
                    type="date" 
                    min={minDate}
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setShowTimeSlots(true);
                    }}
                    className="w-full bg-white/5 border border-white/20 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-colors text-sm [&::-webkit-calendar-picker-indicator]:invert cursor-pointer" 
                    style={{ colorScheme: "dark" }}
                    required
                  />
                </div>

                {/* Dynamic Time Slot Selector */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowTimeSlots(!showTimeSlots)}
                    className="w-full bg-white/5 border border-white/20 text-white rounded-xl px-4 py-3.5 flex justify-between items-center hover:bg-white/10 transition-colors text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {selectedTime ? selectedTime : "Select Time"}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showTimeSlots ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                  </button>

                  {/* Expandable Time Slots Grid */}
                  {showTimeSlots && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-[#0a3585] border border-white/20 rounded-xl p-3 shadow-2xl z-20 max-h-[220px] overflow-y-auto custom-scrollbar">
                      <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
                        <span className="text-xs text-white/80 font-bold tracking-wide">AVAILABLE SLOTS</span>
                        {userTimezone && <span className="text-[10px] text-[#38bdf8]">{userTimezone}</span>}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => {
                              setSelectedTime(time);
                              setShowTimeSlots(false);
                            }}
                            className={`py-2 rounded-lg text-xs font-medium transition-all border ${
                              selectedTime === time 
                              ? "bg-[#38bdf8] text-[#0B47B3] border-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
                              : "bg-white/5 text-white border-white/10 hover:bg-white/20 hover:border-white/30"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Meeting Method Selection */}
              <div>
                <label className="block text-white/80 text-xs font-bold mb-2 uppercase tracking-wide">Preferred Meeting Method</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Google Meet", "Zoom", "MS Teams", "Other"].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setMeetingMethod(method)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all border ${
                        meetingMethod === method 
                        ? "bg-[#38bdf8] text-[#0B47B3] border-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.4)]" 
                        : "bg-white/5 text-white border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
                
                {/* Custom Method Input (If 'Other' is selected) */}
                {meetingMethod === "Other" && (
                  <div className="relative animate-fade-in-down">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/60">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    </div>
                    <input 
                      type="text" 
                      placeholder="e.g. Skype, WhatsApp Video..." 
                      value={customMethod}
                      onChange={(e) => setCustomMethod(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 text-white placeholder-white/60 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-colors text-sm" 
                      required
                    />
                  </div>
                )}
              </div>

              {/* Short Description */}
              <div className="relative">
                <div className="absolute top-3.5 left-0 pl-4 pointer-events-none text-white/60">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <textarea rows={2} placeholder="Short description of your project..." className="w-full bg-white/5 border border-white/20 text-white placeholder-white/60 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-colors text-sm resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-white text-[#0B47B3] font-bold text-base py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-colors flex justify-center items-center gap-2 mt-2"
              >
                Confirm Appointment
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
              </button>

              {/* Important Note (Email confirmation) */}
              <div className="bg-white/10 border border-[#38bdf8]/30 rounded-lg p-3 mt-1 flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 19 2 2 4-4"/></svg>
                <p className="text-white/90 text-xs leading-relaxed">
                  <span className="font-bold text-[#38bdf8]">Perfect!</span> The final meeting link and calendar invite will be sent directly to your provided email address.
                </p>
              </div>

            </form>
          </div>
        </div>

      </div>

      {/* Custom scrollbar and animation styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out forwards;
        }
      `}} />
    </section>
  );
}