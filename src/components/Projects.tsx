import projectData from "./data.json";
import IoTIcon from "/public/images/iot.svg";
import KubernetesIcon from "/public/images/kubernetes.svg";
import MLIcon from "/public/images/ml.svg";
import Image from "next/image";

const Projects = () => {
  // Function to render the appropriate icon for a technology
  const renderTechIcon = (tech: string) => {
    const formattedTech = tech.toLowerCase();

    // Check for custom SVGs first
    if (formattedTech === "iot") {
      return <IoTIcon className="tech-icon" />;
    }
    if (formattedTech === "kubernetes") {
      return <KubernetesIcon className="tech-icon" />;
    }
    if (formattedTech === "ml") {
      return <MLIcon className="tech-icon" />;
    }

    // Fallback to Font Awesome icons
    return <i className={`fa-brands fa-${formattedTech}`}></i>;
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-header">
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="small-icons">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github github-icon"></i>
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-youtube youtube-icon"></i>
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
      {/* GitHub Contributions Section */}
      <br></br>
      <br></br>
      <div className="github-contributions-text">
        <h2>GitHub Contributions</h2>
        <p>
          Working in a corporate environment keeps me busy contributing to our
          protected enterprise GitHub repositories.<br></br>For a more accurate
          reflection of my activity and contributions, here is my private
          enterprise GitHub profile:
        </p>
        <div className="github-contributions-images">
          <Image
            src="/images/darkGHCont.png"
            alt="GitHub Contributions Dark Mode"
            width={800}
            height={400}
            className="github-contributions-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
