import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p>

This dashboard will allow users to view, manage, and organize AI-generated product descriptions. Future versions will include description history, saved drafts, and analytics for generated content.
        </p>
      </main>

      <Footer />
    </>
  );
}