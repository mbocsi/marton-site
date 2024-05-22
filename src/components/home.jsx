import Title from "./title";
import Experience from "./experience";
import About from "./about";
import Contact from "./contact";

export default function Home({ experienceRef, contactRef, aboutRef }) {
  return (
    <>
      <Title />
      <Experience ref={experienceRef}></Experience>

      <About ref={aboutRef}></About>

      <Contact ref={contactRef}></Contact>
    </>
  );
}
