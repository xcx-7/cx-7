

import React from "react";
import Draggable from "react-draggable";

// Import your social media logo images and the info.txt icon.
import instagram from "../../assets/instagram.png";
import xLogo from "../../assets/x.png"; // For Twitter (X)
import thread from "../../assets/thread.png";
import github from "../../assets/github.png";
import mastodon from "../../assets/mastodon.png";
import bluesky from "../../assets/bluesky.png";
import proton from "../../assets/proton.png";
import discord from "../../assets/discord.png";
import textFileImage from "../../assets/txtfile.png";

const ContactFolder = ({ setOpenProject }) => {
  // Array of social media items with name, logo, and link.
  const socialMedia = [
    { name: "Instagram", logo: instagram, url: "https://www.instagram.com/cx7.here/" },
    { name: "X", logo: xLogo, url: "https://x.com/cx7here" },
    { name: "Thread", logo: thread, url: "https://www.threads.net/@cx7.here?hl=en" },
    { name: "GitHub", logo: github, url: "https://github.com/xcx-7" },
    { name: "Mastodon", logo: mastodon, url: "https://mastodon.social/@cx7" },
    { name: "Bluesky", logo: bluesky, url: "https://bsky.app/profile/cx-7.bsky.social" },
    { name: "Proton Mail", logo: proton, url: "cxe-7@proton.me" },
    { name: "Discord", logo: discord, url: "https://discord.gg/yKJhF5HSrm" },
  ];

  return (
    // Add cancel=".draggable-ignore" so clicks on elements with that class won’t trigger dragging.
    <Draggable cancel=".draggable-ignore">
      <div className="absolute top-1/4 left-1/4 bg-gray-800 p-4 rounded-lg shadow-lg w-96 h-auto">
        {/* Title Bar */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">Contacts</span>
          <button
            className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => setOpenProject(null)}
          >
            ✖
          </button>
        </div>

        {/* Social Media Icons + contactInfo.txt */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          {socialMedia.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.open(item.url, "_blank")}
            >
              <img src={item.logo} alt={item.name} className="w-16 h-16" />
              <span className="text-white text-sm">{item.name}</span>
            </div>
          ))}

          {/* Info.txt File */}
          <div
            className="draggable-ignore flex flex-col items-center cursor-pointer"
            onDoubleClick={() => {
              console.log("Info.txt double-clicked");
              setOpenProject("ContactInfo");
            }}
          >
            <img src={textFileImage} alt="Info.txt" className="w-16 h-16" />
            <span className="text-white text-sm">Info.txt</span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ContactFolder;
