import { useState, useEffect } from "react";
import ButtonLink from "./components/ButtonLink";
import { motion } from "framer-motion";
import MagneticLink from "./components/MagneticLink";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const size = () => {
    if (!isVisible) return 0;
    if (isHovered) return 500;
    return 20;
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
          className="flex flex-col gap-4 px-10 py-20"
        >
          <ButtonLink text="Home" />
          <ButtonLink text="About" />
          <ButtonLink text="Works" />
          <ButtonLink text="Contact" />
        </div>
      </nav>
      <footer className="fixed bottom-0 left-0 w-full flex justify-start z-20 text-yellow-300 ">
        <div
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
          className="flex flex-col gap-2 px-10 py-20"
        >
          <MagneticLink>
            <svg
              viewBox="0 0 128 128"
              className="cursor-pointer p-5 cursor-pointer p-5 opacity-20 hover:opacity-100"
            >
              <path
                fill="#fff"
                d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
              ></path>
              <path
                fill="#transparent"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              ></path>
            </svg>
          </MagneticLink>

          <MagneticLink>
            <svg
              className="cursor-pointer p-5 fill-white opacity-20 hover:opacity-100"
              width="80px"
              height="80px"
              viewBox="0 -3.5 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <g>
                <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
              </g>
            </svg>
          </MagneticLink>
        </div>
      </footer>
      <h1 className="text-neutral-300 text-9xl text-center">
        web <br />
        developer <br /> react <br /> django
      </h1>
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
          className="text-9xl text-center"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Making <br />
          stuff <br /> on <br /> web
        </h1>
      </motion.div>
    </div>
  );
}

export default App;
