import { GraduationCap, Mail, Phone } from "lucide-react";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { useState } from "react";

const Hero = () => {

  const floating_skills = [
    // Top row
    { src: "/skills/frontend/HTML5.svg", pos: "top-[10%] left-[35%]" },
    { src: "/skills/frontend/Tailwind CSS.svg", pos: "top-[10%] right-[12%]" },
    { src: "/skills/frontend/React.svg", pos: "top-[8%] left-[7%] w-25" },

    // Sides
    { src: "/skills/frontend/JavaScript.svg", pos: "top-[40%] left-[4%]" },
    { src: "/skills/backend/Node.js.svg", pos: "bottom-[25%] left-[6%]" },
    { src: "/skills/backend/Express.svg", pos: "top-[30%] right-[6%] dark:invert" },
    { src: "/skills/backend/MongoDB.svg", pos: "bottom-[35%] right-[8%]" },

    // Bottom row
    { src: "/skills/frontend/TypeScript.svg", pos: "bottom-[12%] left-[20%]" },
    { src: "/skills/frontend/CSS3.svg", pos: "bottom-[10%] left-[50%]" },
    { src: "/skills/frontend/Next.js.svg", pos: "bottom-[10%] right-[15%] dark:invert" },
  ];

  const [key, setKey] = useState<number>(0);

  return (
    <section id="hero" className="relative flex flex-col md:flex-row-reverse justify-center items-center gap-5 w-full min-h-svh md:p-0">
      {/* Floating skills around section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }} // after profile photo (0.5s)
      >
        {floating_skills.map((skill, i) => (
          <img
            key={skill.src}
            src={skill.src}
            alt="Skill"
            width={60}
            height={60}
            loading="lazy"
            className={`absolute opacity-25 hover:opacity-80 hover:drop-shadow-xl transition rounded-2xl animate-float ${skill.pos}`}
            style={{ animationDelay: `${i * 2.6}s` }}
          />
        ))}
      </motion.div>

      {/* Hero image */}
      <motion.figure
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block"
      >
        <img
          src="/portfolio/nowfal-portfolio.png"
          alt="Portfolio Image"
          loading="lazy"
          className="
            rounded-[40%] sm:w-56 lg:w-96 
            drop-shadow-[15px_20px_20px_rgba(0,0,0,0.6)] 
            dark:drop-shadow-[0_0_25px_rgba(255,166,0,0.3)]
            animate-drift w-80 md:w-auto
          "/>
      </motion.figure>

      {/* Hero content */}
      <div className="flex flex-col items-center gap-15 justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl lg:text-6xl font-semibold text-center flex flex-col gap-7"
        >
          <div role="button" onClick={() => setKey(prev => prev + 1)} className="cursor-pointer">
            <SplitText
              key={key}
              text="Muhammed Nowfal"
              className="text-4xl md:ms-5 lg:ms-0 text-orange-500 sm:text-5xl md:text-7xl font-extrabold relative  drop-shadow-lg"
              delay={100}
              duration={2}
              ease="elastic.out(1,0.3)"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <h2 className="font-extrabold tracking-tight text-shadow-lg dark:text-shadow-gray-700">
            <Typewriter
              options={{
                strings: [
                  "Web Development.", "MERN Stack.", "Full Stack.",
                  "Front-end.", "Back-end.", "Designer.", "Fast Learner."
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          <Button
            variant="secondary"
            size="lg"
            className="
              w-fit m-auto border bg-transparent border-orange-600 hover:bg-orange-700 transition 
              text-shadow-lg text-orange-700 hover:text-white font-bold cursor-pointer 
              hover:scale-105 shadow-md hover:shadow-2xl hover:shadow-orange-600 animate-float
            "
            onClick={() => window.open("/nowfalresume.pdf", "__blank")}
          >
            Resume
          </Button>
        </motion.div>

        <motion.address
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="not-italic text-gray-500 font-semibold flex flex-col gap-2 items-center"
        >
          <div className="flex items-center gap-2">
            <GraduationCap size={22} /> B.Sc, Computer Science
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} /> +91 8610297319
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} /> nowfalmmuhammed@gmail.com
          </div>
        </motion.address>
      </div>
    </section>
  );
}

export default Hero;
