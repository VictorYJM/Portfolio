import { projectsData } from "../../data/projectsData";
import ProjectCard from "../common/ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="py-20 background-change">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-12 text-change font-pixelate">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-quinary-sub to-quinary-main">
                        My Projects
                    </span>
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;