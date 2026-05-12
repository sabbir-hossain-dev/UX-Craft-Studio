import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import Transformation from "../components/TransformationSection";
import Testimonials from "../components/Testimonials";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustSection />
      <Transformation />
      <Testimonials />
      <PortfolioSection />
    </div>
  );
}