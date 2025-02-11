

// components/Modals/BrowserModal.js
import React, { useState } from "react";

const BrowserModal = ({ setOpenProject }) => {
  const [query, setQuery] = useState("");
  const [iframeUrl, setIframeUrl] = useState("https://www.bing.com");

  const handleSearch = (e) => {
    e.preventDefault();
    // Use Bing’s search URL (since Bing generally allows embedding)
    setIframeUrl(`https://www.bing.com/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div
      className="fixed top-20 w-3/4 h-4/5 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden"
      style={{ left: "12.5%" }} // centers the modal horizontally for a 75% width modal
    >
      {/* Header Bar */}
      <div className="flex items-center bg-blue-600 text-white p-2">
        <span className="font-bold mr-4">Mini Browser</span>
        <form onSubmit={handleSearch} className="flex flex-grow">
          <input
            className="flex-grow px-2 py-1 rounded-l outline-none text-white"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter URL or search query"
          />
          <button
            type="submit"
            className="bg-blue-800 px-3 py-1 rounded-r hover:bg-blue-900"
          >
            🔍
          </button>
        </form>
        <button
          className="ml-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          onClick={() => setOpenProject(null)}
        >
          ✖
        </button>
      </div>

      {/* Iframe Content */}
      <div className="flex-grow">
        <iframe
          src={iframeUrl}
          sandbox="allow-same-origin allow-scripts allow-forms" // no allow-popups
          className="w-full h-full"
          title="Web Browser"
        ></iframe>
      </div>
    </div>
  );
};

export default BrowserModal;
