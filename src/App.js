import React from "react";
import Home from "./components";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Experience></Experience>
      <About></About>
      <Contact></Contact>
    </>
  );
}

export default App;
