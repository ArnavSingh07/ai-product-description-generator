import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Package,
  Calendar,
  Sparkles,
  Database,
  ArrowRight,
  PlusCircle,
  List,
  Loader2,
} from "lucide-react";

export default function Dashboard({ darkMode, setDarkMode }) {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  const [stats, setStats] = useState({
    totalProducts: 0,
    todayProducts: 0,
    premiumProducts: 0,
    totalWords: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`
      );

      const data = await response.json();

      setProducts(data);

      const today = new Date().toDateString();

      const todayProducts = data.filter(
        (p) => new Date(p.createdAt).toDateString() === today
      ).length;

      const premiumProducts = data.filter(
        (p) =>
          p.tone &&
          p.tone.toLowerCase() === "premium"
      ).length;

      const totalWords = data.reduce((sum, p) => {
        return sum + (p.description || "").split(" ").length;
      }, 0);

      setStats({
        totalProducts: data.length,
        todayProducts,
        premiumProducts,
        totalWords,
      });

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      color: "bg-blue-500",
    },
    {
      title: "Today's Products",
      value: stats.todayProducts,
      icon: Calendar,
      color: "bg-green-500",
    },
    {
      title: "Premium Products",
      value: stats.premiumProducts,
      icon: Sparkles,
      color: "bg-purple-500",
    },
    {
      title: "Generated Words",
      value: stats.totalWords,
      icon: Database,
      color: "bg-orange-500",
    },
  ];

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="min-h-screen bg-gray-50 py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">

            <div>
              <h1 className="text-4xl font-bold">
                Dashboard
              </h1>

              <p className="text-gray-500 mt-2">
                Monitor your AI generated product descriptions.
              </p>
            </div>

            <div className="flex gap-3 mt-5 lg:mt-0">

              <Link
                to="/aifeature"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
              >
                <PlusCircle size={18} />
                Generate Product
              </Link>

              <Link
                to="/listview"
                className="border px-5 py-3 rounded-xl hover:bg-gray-100 flex items-center gap-2"
              >
                <List size={18} />
                Saved Products
              </Link>

            </div>

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {cards.map((card) => {

              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
                >

                  <div
                    className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-gray-500">
                    {card.title}
                  </h3>

                  <p className="text-4xl font-bold mt-3">
                    {card.value}
                  </p>

                </div>
              );

            })}

          </div>

          {/* Recent Products */}

          <div className="mt-10 bg-white rounded-2xl shadow-md">

            <div className="flex justify-between items-center border-b p-6">

              <h2 className="text-2xl font-bold">
                Recent Products
              </h2>

              <Link
                to="/listview"
                className="text-indigo-600 flex items-center gap-2"
              >
                View All
                <ArrowRight size={18} />
              </Link>

            </div>

            {loading ? (

              <div className="flex justify-center py-12">

                <Loader2
                  className="animate-spin text-indigo-600"
                  size={40}
                />

              </div>

            ) : products.length === 0 ? (

              <div className="text-center py-16">

                <Package
                  className="mx-auto text-gray-300"
                  size={55}
                />

                <h3 className="text-xl font-semibold mt-4">
                  No Products Yet
                </h3>

                <p className="text-gray-500 mt-2">
                  Generate your first AI product description.
                </p>

              </div>

            ) : (

              <div className="divide-y">

                {products
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map((product) => (

                    <div
                      key={product._id}
                      className="flex justify-between items-center p-5 hover:bg-gray-50"
                    >

                      <div>

                        <h3 className="font-semibold text-lg">
                          {product.productName}
                        </h3>

                        <p className="text-gray-500">
                          {product.tone}
                        </p>

                      </div>

                      <span className="text-sm text-gray-400">
                        {new Date(
                          product.createdAt
                        ).toLocaleDateString()}
                      </span>

                    </div>

                  ))}

              </div>

            )}

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}