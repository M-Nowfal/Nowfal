import { memo } from "react";
import LogoLoop from "./LogoLoop";
import { useTheme } from "./ThemeProvider";

const Skills = memo(() => {

  const { theme } = useTheme();

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { img: "/skills/frontend/html.png", name: "HTML" },
        { img: "/skills/frontend/css-3.png", name: "CSS" },
        { img: "/skills/frontend/javascript.png", name: "JavaScript" },
        { img: "/skills/frontend/typescript.png", name: "TypeScript" },
        { img: "/skills/frontend/react.png", name: "React" },
        { img: "/skills/frontend/nextjs.png", name: "Next.js" },
        { img: "/skills/frontend/tailwind-css.png", name: "Tailwind CSS" },
        { img: "/skills/frontend/bootstrap.png", name: "Bootstrap" },
      ]
    },
    {
      name: "Backend",
      skills: [
        { img: "/skills/backend/nodejs.png", name: "Node.js" },
        { img: "/skills/backend/express.png", name: "Express.js" },
        { img: "/skills/backend/mongodb.png", name: "MongoDB" },
        { img: "/skills/backend/rest-api.png", name: "REST API'S" },
      ]
    },
    {
      name: "Tools",
      skills: [
        { img: "/tools/vscode.png", name: "VS Code" },
        { img: "/tools/github.png", name: "GitHub" },
        { img: "/tools/chatgpt.png", name: "ChatGPT" },
        { img: "/tools/vercel.png", name: "Vercel" },
        { img: "/tools/vite.png", name: "Vite" },
        { img: "/tools/git.png", name: "Git" },
        { img: "/tools/openrouterai.png", name: "OpenRouter" },
      ]
    }
  ];

  const familiarSkills = [
    [
      { src: "/familiar-with/python.png", alt: "Python" },
      { src: "/familiar-with/java.png", alt: "Java" },
      { src: "/familiar-with/c++.png", alt: "C++" },
      { src: "/familiar-with/c.png", alt: "C" }
    ],
    [
      { src: "/familiar-with/mysql.png", alt: "SQL" },
      { src: "/familiar-with/docker.png", alt: "Docker" },
      { src: "/familiar-with/php.png", alt: "PHP" },
      { src: "/familiar-with/cs.png", alt: "C#" }
    ]
  ];

  const shouldInvert = (category: string, index: number): boolean => {
    if (category === "Frontend" && index === 5)
      return true;
    else if (category === "Backend" && index === 1)
      return true;
    else if (category === "Tools" && (index === 1 || index === 3))
      return true;
    else
      return false;
  }

  return (
    <section className="text-center pt-10 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="pt-10"></div>
      {/* Header with orange gradient */}
      <div className="relative mb-16" data-aos="fade-down">
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
                      p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 
                      backdrop-blur-sm rounded-xl shadow-md hover:shadow-orange-500/20 transition-all duration-300 
                      group-hover:bg-white/10 border border-orange-200 dark:border-orange-900/50 h-30 flex flex-col 
                      items-center justify-center group hover:-translate-y-1 cursor-pointer scale-80 md:scale-100 w-full
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
