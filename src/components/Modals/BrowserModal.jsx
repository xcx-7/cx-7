

// // components/Modals/BrowserModal.js
// import React, { useState } from "react";

// const BrowserModal = ({ setOpenProject }) => {
//   const [query, setQuery] = useState("");
//   const [iframeUrl, setIframeUrl] = useState("https://www.bing.com");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Use Bing’s search URL (since Bing generally allows embedding)
//     setIframeUrl(`https://www.bing.com/search?q=${encodeURIComponent(query)}`);
//   };

//   return (
//     <div
//       className="fixed top-20 w-3/4 h-4/5 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden"
//       style={{ left: "12.5%" }} // centers the modal horizontally for a 75% width modal
//     >
//       {/* Header Bar */}
//       <div className="flex items-center bg-blue-600 text-white p-2">
//         <span className="font-bold mr-4">Mini Browser</span>
//         <form onSubmit={handleSearch} className="flex flex-grow">
//           <input
//             className="flex-grow px-2 py-1 rounded-l outline-none text-white"
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Enter URL or search query"
//           />
//           <button
//             type="submit"
//             className="bg-blue-800 px-3 py-1 rounded-r hover:bg-blue-900"
//           >
//             🔍
//           </button>
//         </form>
//         <button
//           className="ml-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600"
//           onClick={() => setOpenProject(null)}
//         >
//           ✖
//         </button>
//       </div>

//       {/* Iframe Content */}
//       <div className="flex-grow">
//         <iframe
//           src={iframeUrl}
//           sandbox="allow-same-origin allow-scripts allow-forms" // no allow-popups
//           className="w-full h-full"
//           title="Web Browser"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default BrowserModal;










// // components/Modals/BrowserModal.js
// import React, { useState } from "react";

// const BrowserModal = ({ setOpenProject }) => {
//   const [query, setQuery] = useState("");
//   const [iframeUrl, setIframeUrl] = useState("https://www.bing.com");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const trimmedQuery = query.trim();
//     // If the query starts with http:// or https://, treat it as a URL.
//     if (/^https?:\/\//i.test(trimmedQuery)) {
//       setIframeUrl(trimmedQuery);
//     } else {
//       // Otherwise, perform a Bing search.
//       setIframeUrl(`https://www.bing.com/search?q=${encodeURIComponent(trimmedQuery)}`);
//     }
//   };

//   return (
//     <div
//       className="fixed top-20 w-3/4 h-4/5 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden"
//       style={{ left: "12.5%" }}
//     >
//       {/* Header with CX-7 branding and close button */}
//       <div className="flex items-center bg-blue-600 text-white p-4">
//         <div className="flex-grow text-center text-3xl font-bold">CX-7</div>
//         <button
//           className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
//           onClick={() => setOpenProject(null)}
//         >
//           ✖
//         </button>
//       </div>
//       {/* Search Bar */}
//       <div className="flex items-center bg-white p-2 border-b">
//         <form onSubmit={handleSearch} className="flex-grow flex justify-center">
//           <input
//             className="w-2/3 px-4 py-2 border rounded-l focus:outline-none"
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search or paste a URL"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//       {/* Iframe */}
//       <div className="flex-grow">
//         <iframe
//           src={iframeUrl}
//           className="w-full h-full"
//           title="Web Browser"
//         ></iframe>
//       </div>
//       {/* Note for the user */}
//       <div className="p-2 text-xs text-gray-500">
//         Note: Some websites do not allow embedding in iframes due to security settings.
//       </div>
//     </div>
//   );
// };

// export default BrowserModal;


























// components/Modals/BrowserModal.js
import React, { useState } from "react";

const BrowserModal = ({ setOpenProject }) => {
  const [query, setQuery] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [reloadKey, setReloadKey] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  // Constructs a URL from the query (direct URL if it starts with http/https; otherwise, a Bing search)
  const constructUrl = (q) => {
    const trimmedQuery = q.trim();
    if (!trimmedQuery) return "";
    if (/^https?:\/\//i.test(trimmedQuery)) {
      return trimmedQuery;
    }
    return `https://www.bing.com/search?q=${encodeURIComponent(trimmedQuery)}`;
  };

  // Update history and load new URL in the iframe
  const updateHistory = (newUrl) => {
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(newUrl);
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    setIframeUrl(newUrl);
  };

  // Handles search submissions
  const handleSearch = (e) => {
    e.preventDefault();
    const url = constructUrl(query);
    if (!url) return;
    if (!hasSearched) {
      setHasSearched(true);
    }
    updateHistory(url);
  };

  // "I'm Feeling Lucky" uses the same behavior here
  const handleLucky = () => {
    const url = constructUrl(query);
    if (!url) return;
    if (!hasSearched) {
      setHasSearched(true);
    }
    updateHistory(url);
  };

  // Navigation controls
  const goBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setIframeUrl(history[newIndex]);
    }
  };

  const goForward = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setIframeUrl(history[newIndex]);
    }
  };

  const refreshPage = () => {
    // Changing the key forces the iframe to reload
    setReloadKey(reloadKey + 1);
  };

  const goHome = () => {
    // Navigates to a default home page (Bing in this case)
    const homeUrl = "https://www.bing.com";
    updateHistory(homeUrl);
    setQuery("");
  };

  // Bookmarking functions
  const addBookmark = () => {
    if (iframeUrl && !bookmarks.includes(iframeUrl)) {
      setBookmarks([...bookmarks, iframeUrl]);
    }
  };

  const loadBookmark = (url) => {
    updateHistory(url);
  };

  const getBookmarkLabel = (url) => {
    try {
      return new URL(url).hostname;
    } catch (e) {
      return url;
    }
  };

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 lg:w-2/3 h-4/5 bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* Homepage View (Google-inspired) */}
      {!hasSearched ? (
        <div className="relative h-full flex flex-col items-center justify-center bg-white">
          {/* Close Button */}
          <button
            onClick={() => setOpenProject(null)}
            className="absolute top-4 right-4 text-gray-500 text-2xl focus:outline-none"
            title="Close"
          >
            ✖
          </button>
          {/* Large CX-7 Logo */}
          <div className="text-6xl font-serif text-gray-700 mb-8 select-none">
            CX-7
          </div>
          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-md flex flex-col items-center"
          >
            <input
              type="text"
              className="w-full px-6 py-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:shadow-lg transition duration-150"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search or type a URL"
            />
            <div className="mt-6 flex space-x-4">
              <button
                type="submit"
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none transition duration-150"
              >
                CX-7 Search
              </button>
              <button
                type="button"
                onClick={handleLucky}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none transition duration-150"
              >
                I'm Feeling Lucky
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Search Results View (with extra features)
        <div className="flex flex-col h-full">
          {/* Top Header with minimal Google-style design */}
          <div className="flex flex-col border-b">
            <div className="flex items-center px-4 py-2 bg-white">
              {/* CX-7 Logo */}
              <div className="text-xl font-serif text-gray-700 mr-4 select-none">
                CX-7
              </div>
              {/* Search Input */}
              <form onSubmit={handleSearch} className="flex-grow">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>
              {/* Close Button */}
              <button
                onClick={() => setOpenProject(null)}
                className="ml-4 text-gray-500 text-2xl focus:outline-none"
                title="Close"
              >
                ✖
              </button>
            </div>
            {/* Navigation Controls */}
            <div className="flex items-center px-4 py-1 bg-gray-50">
              <button
                onClick={goBack}
                disabled={currentIndex === 0}
                className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 transition"
                title="Back"
              >
                &#8592;
              </button>
              <button
                onClick={goForward}
                disabled={currentIndex === history.length - 1}
                className="p-2 rounded hover:bg-gray-200 disabled:opacity-50 transition"
                title="Forward"
              >
                &#8594;
              </button>
              <button
                onClick={refreshPage}
                className="p-2 rounded hover:bg-gray-200 transition"
                title="Refresh"
              >
                &#8635;
              </button>
              <button
                onClick={goHome}
                className="p-2 rounded hover:bg-gray-200 transition"
                title="Home"
              >
                &#8962;
              </button>
              <button
                onClick={addBookmark}
                className="ml-4 p-2 bg-yellow-400 hover:bg-yellow-500 rounded transition"
                title="Bookmark"
              >
                ★
              </button>
            </div>
            {/* Bookmarks Display */}
            {bookmarks.length > 0 && (
              <div className="flex items-center px-4 py-1 bg-white border-t border-b overflow-x-auto">
                <span className="mr-2 font-semibold">Bookmarks:</span>
                {bookmarks.map((bm, index) => (
                  <button
                    key={index}
                    onClick={() => loadBookmark(bm)}
                    className="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 mr-2 mb-1 transition"
                  >
                    {getBookmarkLabel(bm)}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Iframe displaying search results */}
          <div className="flex-grow bg-white">
            <iframe
              key={iframeUrl + reloadKey}
              src={iframeUrl}
              title="Search Results"
              className="w-full h-full"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowserModal;
