import { memo, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import NavigateTop from "./NavigateTop";
import Projects from "./Projects";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 300,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

const Home = memo(() => {

   useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out", 
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <NavigateTop />
      </main>
      <Footer />
    </>
  );
});

export default Home;
