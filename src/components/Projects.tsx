import { projects } from "@/data/siteData";
import IoTIcon from "/public/images/iot.svg";
import KubernetesIcon from "/public/images/kubernetes.svg";
import MLIcon from "/public/images/ML.svg";

const renderTechIcon = (tech: string) => {
  const formatted = tech.toLowerCase();
  if (formatted === "iot") return <IoTIcon className="tech-icon" />;
  if (formatted === "kubernetes") return <KubernetesIcon className="tech-icon" />;
  if (formatted === "ml") return <MLIcon className="tech-icon" />;
  return <i className={`fa-brands fa-${formatted}`}></i>;
};

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fa-regular fa-folder-open folder-icon" />
              <div className="links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fa-brands fa-github" />
                  </a>
                )}
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                    <i className="fa-brands fa-youtube" />
                  </a>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <div className="tech-icon" key={index} title={tech}>
                  {renderTechIcon(tech)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
