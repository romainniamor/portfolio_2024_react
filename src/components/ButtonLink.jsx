import React, { useEffect, useRef } from "react";

import gsap from "gsap";

function ButtonLink({ text }) {
  const ref1 = useRef();
  const ref2 = useRef();

  const onHover = () => {
    gsap.to([ref1.current, ref2.current], { y: "-100%", duration: 0.3 });
  };

  const onLeave = () => {
    gsap.to([ref1.current, ref2.current], { y: 0, duration: 0.3 });
  };

  return (
    <a
      href=""
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="menu-item relative text-xl font-bold leading-none overflow-hidden cursor-pointer"
    >
      <div ref={ref1} className=" text-neutral-300/20 f text-right">
        {text}
      </div>
      <div className="hover-clone absolute bottom-[-100%] right-0  text-neutral-300 text-right">
        <div ref={ref2}>{text}</div>
      </div>
    </a>
  );
}

export default ButtonLink;
