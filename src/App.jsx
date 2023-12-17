import { useState } from "react";
import "./App.css";
import ButtonLink from "./components/ButtonLink";
import MouseMove from "./components/MouseMove";

function App() {
  return (
    <>
      <MouseMove />

      <nav className="fixed top-0 left-0 w-full flex justify-end p-12">
        <div className="flex flex-col gap-4">
          <ButtonLink text="Home" />
          <ButtonLink text="About" />
          <ButtonLink text="Works" />
          <ButtonLink text="Contact" />
        </div>
      </nav>
    </>
  );
}

export default App;
