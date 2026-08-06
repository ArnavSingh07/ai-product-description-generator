import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home({
  darkMode,
  setDarkMode,
}) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

      <FeatureSection />

      <HowItWorks />

      <CTASection />

      <Footer />
    </>
  );
}