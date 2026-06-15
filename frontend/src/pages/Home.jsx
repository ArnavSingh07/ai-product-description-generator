import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <Card
          title="Generate Descriptions"
          description="Create marketplace-ready product descriptions using AI."
        />

        <Card
          title="Multiple Writing Styles"
          description="Generate Premium, Traditional and Health-Focused content."
        />
      </div>

      <Footer />
    </>
  );
}
