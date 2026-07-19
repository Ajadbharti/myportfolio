import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Certificates from "../components/sections/Certificates";
import Contact from "../components/sections/Contact";
import Education from "../components/sections/Education";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
        <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

export default Home;