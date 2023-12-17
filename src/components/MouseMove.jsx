import React, { useState, useEffect } from "react";

function MouseMove({ handleMouseHover, handleMouseLeave, handleMouseHidden }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    //logique pour modifier le pointer dans le parent

    const handleMouseHidden = () => {
      setIsVisible(false);
    };

    const handleMouseHover = () => {
      setIsMouseDown(true);
    };

    const handleMouseLeave = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    isVisible && (
      <div
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: isMouseHover ? "scale(25)" : "scale(1)",
        }}
        className="absolute w-5 h-5 rounded-full bg-neutral-300 transition-all duration-100 ease-out"
      ></div>
    )
  );
}

export default MouseMove;
