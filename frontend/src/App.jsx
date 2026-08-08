import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Components from "./pages/Components";
import ListView from "./pages/ListView";
import AIFeature from "./pages/AIFeature";
import GoogleSuccess from "./pages/GoogleSuccess";
import SavedProducts from "./pages/SavedProducts";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          {/* About */}
          <Route
            path="/about"
            element={
              <About
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          {/* Login */}
          <Route
            path="/login"
            element={
              <Login
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          {/* Signup */}
          <Route
            path="/signup"
            element={
              <Signup
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          {/* Components */}
          <Route
            path="/components"
            element={
              <Components
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          {/* AI Feature */}
          <Route
            path="/aifeature"
            element={
              <AIFeature
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          {/* Google OAuth Success */}
          <Route
            path="/google-success"
            element={<GoogleSuccess />}
          />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              </ProtectedRoute>
            }
          />

          {/* List View */}
          <Route
            path="/listview"
            element={
              <ProtectedRoute>
                <ListView
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              </ProtectedRoute>
            }
          />

          {/* Saved Products */}
          <Route
            path="/saved-products"
            element={
              <ProtectedRoute>
                <SavedProducts
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;