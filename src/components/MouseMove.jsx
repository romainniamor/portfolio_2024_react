import React, { useState, useEffect } from "react";

function MouseMove({ isMouseHover, isVisible }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };
    console.log("isMouseHover:", isMouseHover);
    console.log("mousePosition:", mousePosition);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

  return (
    isVisible && (
      <div
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) ${
            isMouseHover ? "scale(20)" : "scale(1)"
          }`,
        }}
        className="absolute w-5 h-5 rounded-full bg-neutral-300 transition-all duration-100 ease-out"
      ></div>
    )
  );
}

export default MouseMove;
