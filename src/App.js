import React from "react";
import Home from "./components";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
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
      <Home></Home>
      <Experience ref={experienceRef}></Experience>

      <About ref={aboutRef}></About>

      <Contact ref={contactRef}></Contact>
    </>
  );
}

export default App;
