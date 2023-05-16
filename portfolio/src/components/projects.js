import React from "react";

function Projects() {
  const projects = [
    {
      name: "Hungee! App",
      image: "",
      github: "",
      liveUrl: "",
      technologies: [""],
    },
    {
      name: "",
      image: "",
      github: "",
      liveUrl: "",
      technologies: [""],
    },
    {
        name: "",
        image: "",
        github: "",
        liveUrl: "",
        technologies: [""],
      },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </a>
            <div className="project-text-overlay">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="project-name"
                  style={{ fontSize: "1rem", marginBottom: "0.5rem" }}
                >
                  {project.name}
                </div>
              </a>
              <div className="project-technologies">
                {project.technologies.map((technology, index) => (
                  <span key={index}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;