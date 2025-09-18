import { memo, useContext, useEffect } from "react";
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
import { AuthContext } from "@/App";
import axios, { AxiosError } from "axios";

AOS.init({
  duration: 300,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

const Home = memo(() => {

  const { author } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });

    (async () => {
      try {
        if (!author)
          await axios.patch(`${import.meta.env.VITE_API_URL}/increaseviews`);
      } catch (err: unknown) {
        const error = err instanceof AxiosError ? err.response?.data?.message : String(err);
        console.error(error);
      }
    })();
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
