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

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/about"
            element={<About darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/login"
            element={<Login darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/signup"
            element={<Signup darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/components"
            element={<Components darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/listview"
            element={
          <ListView
                  darkMode={darkMode}
              setDarkMode={setDarkMode}
    />
  }
/>
<Route
  path="/aifeature"
  element={
    <AIFeature
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;