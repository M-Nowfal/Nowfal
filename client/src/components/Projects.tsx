"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

interface ProjectType {
  id: number;
  image: string;
  title: string;
  category: string;
  githubUrl: string;
  liveUrl: string;
  description: string;
  technologies: string[];
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BrainBridge E-Learning Platform",
      category: "Advanced",
      description: "A MERN stack platform for sharing study materials, taking quizzes, tracking progress, and using AI-powered Q&A to support collaborative learning.",
      image: "/projects/brain-bridge.jpg",
      githubUrl: "https://github.com/M-Nowfal/BrainBridge",
      liveUrl: "https://brain-bridge-psi.vercel.app/",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "TypeScript"]
    },
    {
      id: 2,
      title: "FTC Finna Tuition Centre",
      category: "Advanced",
      description: "I built a web app for a tuition centre to manage student attendance, fee tracking, and faculty coordination. It provides a central dashboard for admins, making record-keeping easier, faster, and more transparent.",
      image: "/projects/ftc.jpeg",
      githubUrl: "https://github.com/M-Nowfal/finna-tuition-centre",
      liveUrl: "https://finna-tuition-centre-drab.vercel.app/",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Byte-Cart E-Commerce Platform",
      category: "Advanced",
      description: "A full-featured e-commerce site using Next.js and MongoDB. Supports authentication and cart functions. Covers 50% of Amazon's core features, with server-side rendering for performance and SEO.",
      image: "/projects/e-commerce.jpg",
      githubUrl: "https://github.com/M-Nowfal/Byte-Cart",
      liveUrl: "http://byte-cart.vercel.app/",
      technologies: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Authentication"]
    }
  ];

  const [projectCategory, setProjectCategory] = useState<string>("Advanced");
  const [filteredProjects, setFilteredProjetcs] = useState<ProjectType[]>(projects);

  useEffect(() => {
    if (projectCategory === "All")
      setFilteredProjetcs(projects);
    else
      setFilteredProjetcs(projects.filter(project => project.category === projectCategory));
  }, [projectCategory]);

  return (
    <section className="py-16 px-4" id="projects">
      <div className="py-5"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative mb-8"  data-aos="fade-down">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 to-amber-600/10 blur-3xl opacity-75 rounded-full mx-auto w-3/4"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold relative bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
              My Projects
            </h1>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full mx-auto mt-6 mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve built to showcase my skills and passion for development.
            </p>
          </div>
          <div className="flex justify-center gap-3" data-aos="fade-up">
            {["Advanced", "Intermediate", "Basic", "All"].map(category => (
              <Button
                key={category}
                className={`${projectCategory === category ? "text-white bg-orange-600 hover:bg-orange-600" : "bg-orange-300/30 hover:bg-orange-300/80 text-black dark:text-white"} border text-shadow-lg shadow-lg hover:shadow-xl cursor-pointer`}
                onClick={() => setProjectCategory(category)}
              >{category}</Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && <div className="flex justify-center animate-float" data-aos="fade-up">
          <p className="font-bold text-3xl w-75 text-center text-orange-500 text-shadow-lg">No Projects in this Category</p>
        </div>}
      </div>
    </section>
  );
};

export default Projects;
