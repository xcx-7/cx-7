// components/Notification.js
import React, { useEffect, useState } from "react";

const Notification = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 right-4 bg-gray-800 text-white p-3 rounded shadow-lg opacity-90 transition-opacity duration-500">
      {message}
    </div>
  );
};

export default Notification;
