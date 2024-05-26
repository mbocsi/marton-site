import Title from "./title";
import Experience from "./experience";
// import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

export default function Home({
  experienceRef,
  contactRef,
  // aboutRef,
  projectsRef,
}) {
  return (
    <>
      <Title />
      <Experience ref={experienceRef}></Experience>
      {/* <About ref={aboutRef}></About> */}
      <Projects ref={projectsRef}></Projects>
      <Contact ref={contactRef}></Contact>
    </>
  );
}
