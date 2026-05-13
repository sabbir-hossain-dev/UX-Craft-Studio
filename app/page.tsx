import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import ServicesSection from "../components/ServicesSection";
import Transformation from "../components/TransformationSection";
import PortfolioSection from "../components/PortfolioSection";
import CaseStudies from "../components/CaseStudies";
import ResultsSection from "../components/ResultsSection";
import ProcessSection from "../components/ProcessSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustSection />
      <ServicesSection />
      <Transformation />
      <PortfolioSection />
      <CaseStudies />
      <ResultsSection />
      <ProcessSection />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <CTASection />
    </div>
  );
}