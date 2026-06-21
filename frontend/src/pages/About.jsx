import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About({
  darkMode,
  setDarkMode,
}) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold">
          About
        </h1>

        <p>
          The AI-Powered E-Commerce Product Description Generator helps food
          processing MSMEs create professional, SEO-friendly product
          descriptions for online marketplaces. The platform uses AI to
          generate high-quality content based on product details, helping
          businesses improve their digital presence and save time.
        </p>
      </main>

      <Footer />
    </>
  );
}