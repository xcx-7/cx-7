import React from "react";
import Draggable from "react-draggable";

const DesktopIcons = ({ icons, onDoubleClick }) => {
  return (
    <>
      {icons.map((icon) => (
        <Draggable key={icon.id} defaultPosition={{ x: icon.left, y: icon.top }}>
          <div
            className="absolute flex flex-col items-center cursor-pointer"
            onDoubleClick={() => onDoubleClick(icon.name)}
          >
            <img src={icon.img} alt={icon.name} className="w-16 h-16" />
            <span className="text-white text-sm font-semibold mt-1">
              {icon.name}
            </span>
          </div>
        </Draggable>
      ))}
    </>
  );
};

export default DesktopIcons;
