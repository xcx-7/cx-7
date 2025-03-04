import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter  } from "react-router-dom";

import { Hero } from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile overlay with Tailwind styles
  if (isMobile) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-md p-6 text-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md">
          <h1 className="text-xl font-bold text-gray-800 mb-4">
            Sorry, I'm still developing this and I didn't create a mobile view.
          </h1>
          <p className="text-gray-600">
            If you wanna see this, please open it on a desktop or laptop.  
            Otherwise, check out my second portfolio{" "}
            <a
              href="https://xcx-7.github.io/cx7here/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  // Normal desktop view
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <div className="relative z-0">{/* Additional components or routes */}</div>
      </div>
    </HashRouter>
  );
};

export default App;
