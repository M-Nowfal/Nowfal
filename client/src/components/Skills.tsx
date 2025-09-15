import { memo } from "react";
import LogoLoop from "./LogoLoop";
import { useTheme } from "./ThemeProvider";

const Skills = memo(() => {

  const { theme } = useTheme();

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { img: "/skills/frontend/HTML5.svg", name: "HTML" },
        { img: "/skills/frontend/CSS3.svg", name: "CSS" },
        { img: "/skills/frontend/JavaScript.svg", name: "JavaScript" },
        { img: "/skills/frontend/TypeScript.svg", name: "TypeScript" },
        { img: "/skills/frontend/React.svg", name: "React" },
        { img: "/skills/frontend/Next.js.svg", name: "Next.js" },
        { img: "/skills/frontend/Tailwind CSS.svg", name: "Tailwind CSS" },
        { img: "/skills/frontend/Bootstrap.svg", name: "Bootstrap" },
      ]
    },
    {
      name: "Backend",
      skills: [
        { img: "/skills/backend/Node.js.svg", name: "Node.js" },
        { img: "/skills/backend/Express.svg", name: "Express.js" },
        { img: "/skills/backend/MongoDB.svg", name: "MongoDB" },
        { img: "/skills/backend/rest-api.svg", name: "REST API'S" },
      ]
    },
    {
      name: "Tools",
      skills: [
        { img: "/tools/vscode.svg", name: "VS Code" },
        { img: "/tools/GitHub.svg", name: "GitHub" },
        { img: "/tools/chatgpt.svg", name: "ChatGPT" },
        { img: "/tools/Vercel.svg", name: "Vercel" },
        { img: "/tools/Vite.js.svg", name: "Vite" },
        { img: "/tools/Git.svg", name: "Git" },
        { img: "/tools/openrouter.svg", name: "OpenRouter" },
        { img: "/tools/npm.svg", name: "npm" }
      ]
    }
  ];

  const familiarSkills = [
    [
      { src: "/familiar-with/Python.svg", alt: "Python" },
      { src: "/familiar-with/Java.svg", alt: "Java" },
      { src: "/familiar-with/C++.svg", alt: "C++" },
      { src: "/familiar-with/C.svg", alt: "C" }
    ],
    [
      { src: "/familiar-with/MySQL.svg", alt: "SQL" },
      { src: "/familiar-with/Docker.svg", alt: "Docker" },
      { src: "/familiar-with/PHP.svg", alt: "PHP" },
      { src: "/familiar-with/CS.svg", alt: "C#" }
    ]
  ];

  const shouldInvert = (category: string, index: number): boolean => {
    if (category === "Frontend" && index === 5)
      return true;
    else if (category === "Backend" && (index === 1 || index === 3))
      return true;
    else if (category === "Tools" && (index >= 1  && index <= 3 || index === 6))
      return true;
    else
      return false;
  }

  return (
    <section className="text-center pt-10 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="pt-10"></div>
      {/* Header with orange gradient */}
      <div className="relative mb-16" data-aos="fade-up">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 to-amber-600/10 blur-3xl opacity-75 rounded-full mx-auto w-3/4"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold relative bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
          My Skills
        </h1>
        <div className="w-24 h-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full mx-auto mt-6 mb-4"></div>
      </div>

      {/* Main Skills */}
      <div className="max-w-6xl mx-auto">
        {skillCategories.map(category => (
          <div key={category.name} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500" data-aos="fade-up">
              {category.name}
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center"
                  data-aos="fade-up"
                >

                  <figure
                    className={`
                      p-4 bg-orange-50 dark:bg-orange-950/30 rounded-xl shadow-md hover:shadow-orange-500/20 transition-all duration-300 
                      hover:bg-orange-100 hover:dark:bg-orange-950/60 border border-orange-300 dark:border-orange-900/50 flex flex-col 
                      items-center justify-center group hover:-translate-y-1 cursor-pointer w-25 h-30 md:w-full active:scale-90
                    `}
                    role="button"
                    onClick={() => navigator.vibrate && navigator.vibrate(50)}
                  >
                    <img
                      src={skill.img}
                      width={64}
                      height={64}
                      alt={skill.name}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className={`
                        object-contain group-hover:drop-shadow-xl transition-all duration-300 rounded-2xl 
                        drop-shadow-lg w-12 h-12 group-hover:scale-105
                        ${shouldInvert(category.name, i) && "dark:invert"}
                      `}
                    />
                    <figcaption className="mt-2 block text-sm md:text-md font-medium text-orange-900 dark:text-orange-200">
                      {skill.name}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Familiar With Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500" data-aos="fade-up">
          Also Familiar With
        </h2>
        <div className="m-auto max-w-6xl relative overflow-hidden mb-10">
          <LogoLoop
            logos={familiarSkills[0]}
            speed={100}
            direction="left"
            logoHeight={48}
            gap={70}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor={theme === "dark" ? "#020618" : "#ffffff"}
            ariaLabel="Familiar skills"
          />
        </div>
        <div className="m-auto max-w-6xl relative overflow-hidden">
          <LogoLoop
            logos={familiarSkills[1]}
            speed={100}
            direction="right"
            logoHeight={48}
            gap={70}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor={theme === "dark" ? "#020618" : "#ffffff"}
            ariaLabel="Familiar skills"
          />
        </div>
      </div>
    </section>
  );
});

export default Skills;
