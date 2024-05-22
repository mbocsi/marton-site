import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { useRef } from "react";

function App() {
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Navbar
        experienceRef={experienceRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      ></Navbar>
      <Home
        experienceRef={experienceRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
    </>
  );
}

export default App;
