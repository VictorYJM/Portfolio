import { FaGithub } from "react-icons/fa";
import type { Project } from "../../data/projectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-lg overflow-hidden background-change border border-gray-300 dark:border-gray-700 shadow-lg transition-transform transform hover:-translate-y-2">
      <img src={project.image} alt={`Screenshot do projeto ${project.title}`} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h3 className="text-2xl font-bold font-pixelate text-change mb-2">{project.title}</h3>
        <p className="text-change/80 mb-4 h-24">{project.description}</p>

        {/* Tags de Tecnologia */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="bg-primary-sub/20 text-primary-sub text-xs font-bold px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="cta-button-secondary inline-flex items-center gap-2 text-sm underline text-blue-500">
            <FaGithub />
            Full Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;