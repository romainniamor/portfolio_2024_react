import { useState, useEffect } from "react";
import ButtonLink from "./components/ButtonLink";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState(false);

  // Log the current mouse position
  console.log("mousePosition:", mousePosition);

  useEffect(() => {
    // Define the mouseMove handler
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", mouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mousePosition]); // Empty dependency array to run only once

  const textEnter = () => {
    console.log("textEnter");
    setCursorVariant(true);
  };
  const textLeave = () => {
    console.log("textLeave");
    setCursorVariant(false);
  };

  return (
    <div className="app w-full h-screen relative bg-black flex flex-col justify-center items-center">
      <div
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) ${
            cursorVariant ? "scale(15)" : "scale(1)"
          }`,
          mixBlendMode: cursorVariant ? "difference" : "normal",
          content: cursorVariant ? "Bye world" : "none",
        }}
        className="cursor fixed top-0 left-0 bg-neutral-300 rounded-full w-5 h-5 transition-all duration-300 ease-out pointer-events-none"
      ></div>
      <nav className="fixed top-0 left-0 w-full flex justify-end z-10">
        <div className="flex flex-col gap-4">
          <ButtonLink text="Home" />
          <ButtonLink text="About" />
          <ButtonLink text="Works" />
          <ButtonLink text="Contact" />
        </div>
      </nav>
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-neutral-300 text-9xl"
      >
        Hello World
      </h1>
    </div>
  );
}

export default App;
