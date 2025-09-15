import { ExternalLink } from 'lucide-react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

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

const ProjectCard = memo(({ project }: { project: ProjectType }) => {
  // Determine badge color based on category
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'advanced':
        return 'bg-gradient-to-r from-orange-600 to-red-600';
      case 'intermediate':
        return 'bg-gradient-to-r from-amber-500 to-orange-500';
      case 'basic':
      default:
        return 'bg-gradient-to-r from-amber-400 to-orange-400';
    }
  };

  return (
    <div data-aos="fade-up">
      <div className="group relative overflow-hidden rounded-2xl border border-orange-200 dark:border-orange-900/50 bg-white dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        {/* Image container */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            sizes="100"
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Category badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold ${getCategoryColor(project.category)}`}>
            {project.category}
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-orange-600/10 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-4">
              <Link
                to={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 rounded-full w-12 h-12 text-orange-600 hover:bg-orange-600 hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <img
                  src={"/tools/GitHub.svg"}
                  alt={"Git-Hub link"}
                  width={50}
                  height={50}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full"
                />
              </Link>
              <Link
                to={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
              >
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-orange-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex justify-between items-center animate-drift">
            <Link
              to={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-600 transition-colors"
            >
              <img
                src={"/tools/GitHub.svg"}
                alt={"Git-Hub link"}
                width={50}
                height={50}
                loading="lazy"
                className="w-7 dark:invert"
              />
              <span>Code</span>
            </Link>

            <Link
              to={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-md hover:shadow-orange-500/30"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
