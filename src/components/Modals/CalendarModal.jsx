// components/Modals/CalendarModal.js
import React, { useState } from "react";

const CalendarModal = ({ setOpenProject }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Build the weeks grid
  const weeks = [];
  let day = 1 - firstDay;
  while (day <= daysInMonth) {
    let week = [];
    for (let i = 0; i < 7; i++) {
      if (day > 0 && day <= daysInMonth) {
        week.push(day);
      } else {
        week.push("");
      }
      day++;
    }
    weeks.push(week);
  }

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="fixed top-20 left-1/3 w-1/3 bg-gray rounded-lg shadow-xl p-4">
      <div className="flex items-center justify-between bg-blue-600 text-white p-2 rounded">
        <button onClick={goToPrevMonth}>&lt;</button>
        <span>{monthNames[month]} {year}</span>
        <button onClick={goToNextMonth}>&gt;</button>
        <button
          className="ml-4 bg-red-500 px-2 py-1 rounded hover:bg-red-600"
          onClick={() => setOpenProject(null)}
        >
          ✖
        </button>
      </div>
      <table className="mt-4 w-full text-center">
        <thead>
          <tr>
            {dayNames.map((d, i) => (
              <th key={i} className="p-1">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((dayItem, j) => (
                <td key={j} className="p-1 border">{dayItem}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarModal;
