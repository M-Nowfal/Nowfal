import {
  BookOpen, Code, Cpu, Database,
  Download, Globe, GraduationCap,
  Lightbulb, Mail, Phone, Terminal
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const cardStyles = "rounded-2xl p-8 shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900/20 backdrop-blur-sm hover:scale-[1.02] hover:shadow-orange-600/20 hover:border-orange-600/30";

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-10"></div>

      {/* Section Header with Animation */}
      <div className="text-center mb-16 relative" data-aos="fade-down">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/10 to-amber-600/10 blur-3xl opacity-75 rounded-full mx-auto w-3/4"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold relative bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
          About Me
        </h1>
        <div className="w-24 h-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full mx-auto mt-6 mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get to know my journey, skills, and passion for technology
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Professional Summary Card */}
          <div className={cardStyles} data-aos="fade-up">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-full ring-2 ring-orange-600/30">
                <BookOpen className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Professional Summary
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Hello! I&apos;m <span className="font-semibold text-orange-600">Muhammed Nowfal</span>,
                  a passionate Computer Science student pursuing my B.Sc. at Government Arts College, Coimbatore.
                  I specialize in building modern web applications and solving complex problems through code.
                </p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className={cardStyles} data-aos="fade-up">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-full ring-2 ring-orange-600/30">
                <GraduationCap className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="transition-transform duration-300 hover:translate-x-1">
                    <h4 className="font-semibold text-lg">B.Sc Computer Science</h4>
                    <p className="text-orange-600 font-medium">Government Arts College, Coimbatore</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</p>
                  </div>
                  <div className="transition-transform duration-300 hover:translate-x-1">
                    <h4 className="font-semibold text-lg">ST. Michael&apos;s Higher Secondary School</h4>
                    <p className="text-orange-600 font-medium">Coimbatore</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2021 - 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills Card */}
          <div className={cardStyles} data-aos="fade-up">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-full ring-2 ring-orange-600/30">
                <Lightbulb className="text-orange-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Skills Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 transition-all duration-300 hover:shadow-md">
                    <div className="p-2 bg-orange-600/20 rounded-full">
                      <Code className="text-orange-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Full-Stack Dev</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">React, Next.js, Express</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 transition-all duration-300 hover:shadow-md">
                    <div className="p-2 bg-orange-600/20 rounded-full">
                      <Database className="text-orange-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Database</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">MongoDB, SQL</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 transition-all duration-300 hover:shadow-md">
                    <div className="p-2 bg-orange-600/20 rounded-full">
                      <Terminal className="text-orange-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Programming</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">JavaScript, Python, Java</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 transition-all duration-300 hover:shadow-md">
                    <div className="p-2 bg-orange-600/20 rounded-full">
                      <Globe className="text-orange-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Web Dev</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">E-Commerce solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Focus Card */}
          <div className={cardStyles} data-aos="fade-up">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-full ring-2 ring-orange-600/30">
                <Cpu className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Current Focus
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  I&apos;m currently enhancing my skills in full-stack development while working towards building
                  a complete e-commerce solution. When I&apos;m not coding, I enjoy exploring tech trends,
                  collaborating with peers, and continuously expanding my knowledge in this ever-evolving field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border border-orange-200 dark:border-orange-900/50" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <address className="not-italic font-semibold grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-sm transition-all duration-300 hover:shadow-orange-600/20 hover:translate-y-1">
            <div className="p-3 bg-orange-600/10 rounded-full">
              <GraduationCap size={24} className="text-orange-600" />
            </div>
            <span className="text-gray-600 dark:text-gray-300 text-sm">Degree</span>
            <span className="text-orange-600">B.Sc, Computer Science</span>
          </div>
          <Link to="tel:+918610297319" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-sm transition-all duration-300 hover:shadow-orange-600/20 hover:translate-y-1">
            <div className="p-3 bg-orange-600/10 rounded-full">
              <Phone size={24} className="text-orange-600" />
            </div>
            <span className="text-gray-600 dark:text-gray-300 text-sm">Phone</span>
            <span className="text-orange-600">+91 8610297319</span>
          </Link>
          <Link to="mailto:nowfalmmuhammed@gmail.com" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-sm transition-all duration-300 hover:shadow-orange-600/20 hover:translate-y-1">
            <div className="p-3 bg-orange-600/10 rounded-full">
              <Mail size={24} className="text-orange-600" />
            </div>
            <span className="text-gray-600 dark:text-gray-300 text-sm">Email</span>
            <span className="text-orange-600 break-all">nowfalmmuhammed@gmail.com</span>
          </Link>
        </address>
        <div className="flex justify-center mt-5 animate-drift">
          <Link
            to="/nowfalresume.pdf"
            download="Nowfal-Resume.pdf"
            className="w-full sm:w-fit flex items-center justify-center gap-2 px-6 py-3 cursor-pointer bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-md hover:shadow-lg"
          >
            <Download size={18} />
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
