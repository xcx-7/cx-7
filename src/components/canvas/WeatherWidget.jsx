// components/WeatherWidget.js
import React from "react";

const WeatherWidget = () => {
  // For simplicity, we use static data
  const weather = {
    location: "New York",
    temperature: "22°C",
    condition: "Sunny",
  };

  return (
    <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded shadow-lg">
      <div className="font-bold">{weather.location}</div>
      <div>{weather.temperature}</div>
      <div className="text-sm">{weather.condition}</div>
    </div>
  );
};

export default WeatherWidget;
