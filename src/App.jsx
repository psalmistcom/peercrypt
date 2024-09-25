import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import TradeWithTransparency from "./components/TradeWithTransparency";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto pt-20">
        <HeroSection />
      </div>
      <TradeWithTransparency />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
