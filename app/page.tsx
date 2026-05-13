import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import Transformation from "../components/TransformationSection";
import Testimonials from "../components/Testimonials";
import PortfolioSection from "../components/PortfolioSection";
import CaseStudies from "../components/CaseStudies";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";
import FaqSection from "../components/FaqSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustSection />
      <Transformation />
      <Testimonials />
      <PortfolioSection />
      <CaseStudies />
      <WhyChooseUs />
      <ProcessSection />
      <ServicesSection />
      <CTASection />
      <FaqSection />
    </div>
  );
}