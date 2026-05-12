import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import Transformation from "../components/TransformationSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustSection />
      <Transformation />
    </div>
  );
}