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
          <Route
  path="/google-success"
  element={<GoogleSuccess />}
/>

          {/* Protected Dashboard */}
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

          {/* Protected ListView */}
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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;