import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/WorkFlow";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto pt-20">
        <HeroSection />
      </div>
      <Workflow />
      <FeatureSection />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
