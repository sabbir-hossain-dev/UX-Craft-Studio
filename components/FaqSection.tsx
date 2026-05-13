"use client";
import { useState } from "react";

export default function FaqSection() {
  // Accordion open/close handle korar jonno state
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of digital services including Web Design & Development, Mobile App Development, UI/UX Design, Digital Marketing, E-commerce Solutions, and Cloud & IT Services."
    },
    {
      question: "How long does a project take?",
      answer: "Project timelines depend on the complexity and scope. A standard website might take 4-6 weeks, while a complex web application can take 3-6 months. We will provide a detailed timeline during the discovery phase."
    },
    {
      question: "How do you ensure the quality of your work?",
      answer: "We follow a strict quality assurance process that includes multiple rounds of testing, code reviews, and design validations before any final delivery."
    },
    {
      question: "Will I be involved in the project?",
      answer: "Absolutely! We believe in transparent and collaborative partnerships. You will be involved in every major milestone, from initial strategy to final launch."
    },
    {
      question: "What are your pricing and payment terms?",
      answer: "Our pricing is project-based. We usually require a 30-50% upfront deposit, with the remaining balance tied to specific project milestones and final delivery."
    },
    {
      question: "Do you provide support after project completion?",
      answer: "Yes, we offer ongoing maintenance and support packages to ensure your digital product remains secure, up-to-date, and fully optimized."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 relative overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B47B3] text-white text-xs font-bold tracking-wide mb-6 uppercase shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          FAQ
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Frequently Asked <span className="text-[#0B47B3]">Questions</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          Find answers to common questions about our services, process, and how we work.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-8 items-start relative z-10">
        
        {/* Left Contact Card */}
        <div className="w-full lg:w-[35%] bg-[#0B47B3] rounded-3xl p-10 text-white shadow-xl sticky top-8">
          <div className="w-16 h-16 rounded-full bg-white text-[#0B47B3] flex items-center justify-center mb-8 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h3 className="text-3xl font-bold leading-tight mb-4">
            Still have <br /> a question?
          </h3>
          <p className="text-blue-100 mb-8 leading-relaxed font-medium">
            Can't find the answer you're looking for? Our team is here to help you.
          </p>
          <button className="bg-white text-[#0B47B3] px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 mb-6 w-max">
            Contact Us <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <div className="flex items-center gap-2 text-xs text-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            We usually respond within 24 hours.
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="w-full lg:w-[65%] flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const itemNumber = (index + 1).toString().padStart(2, '0');
            
            return (
              <div 
                key={index} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#0B47B3]/30 shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#0B47B3] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {itemNumber}
                    </span>
                    <span className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-[#0B47B3]' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`text-[#0B47B3] shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    )}
                  </div>
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed pl-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Features Banner */}
      <div className="max-w-[1200px] mx-auto px-6 mt-16">
        <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#0B47B3] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Trusted by Clients</h4>
              <p className="text-xs text-gray-500 font-medium">We're proud to be a reliable partner for businesses worldwide.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#0B47B3] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Transparent Process</h4>
              <p className="text-xs text-gray-500 font-medium">We believe in clear communication and complete transparency at every step.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0B47B3] shadow-sm flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Secure & Reliable</h4>
              <p className="text-xs text-gray-500 font-medium">Your data and project information are always safe with us.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#0B47B3] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Always Here to Help</h4>
              <p className="text-xs text-gray-500 font-medium">Our support team is always ready to assist you whenever you need us.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}