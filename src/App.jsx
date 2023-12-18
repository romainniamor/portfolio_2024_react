import { useState, useEffect } from "react";
import ButtonLink from "./components/ButtonLink";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const size = () => {
    if (!isVisible) return 1;
    if (isHovered) return 500;
    return 1;
  };

  // console.log("mousePosition:", mousePosition);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mousePosition]);

  const textEnter = () => {
    setIsHovered(true);
  };
  const textLeave = () => {
    setIsHovered(false);
  };
  const linkEnter = () => {
    setIsVisible(false);
    console.log("enter");
  };
  const linkLeave = () => {
    setIsVisible(true);
  };

  return (
    <div className="app w-full h-screen relative bg-black flex flex-col justify-center items-center">
      <nav className="fixed top-0 left-0 w-full flex justify-end z-20 ">
        <div
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
          className="flex flex-col gap-4 p-9"
        >
          <ButtonLink text="Home" />
          <ButtonLink text="About" />
          <ButtonLink text="Works" />
          <ButtonLink text="Contact" />
        </div>
      </nav>
      <h1 className="text-neutral-300 text-9xl">Hello World</h1>
      <motion.div
        className="mask absolute w-full h-full flex justify-center items-center"
        style={{
          WebkitMaskPosition: `${mousePosition.x}px ${mousePosition.y}px`,
          WebkitMaskSize: `${size()}px`,
        }}
        animate={{
          WebkitMaskPosition: `${mousePosition.x - size() / 2}px ${
            mousePosition.y - size() / 2
          }px`,
          WebkitMaskSize: `${size()}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        <h1
          className="text-9xl"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Bye World
        </h1>
      </motion.div>
    </div>
  );
}

export default App;
