import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="project-details-page">
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-details-page">
      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="project-details-header">
        <p className="section-label">{project.category}</p>
        <h1>{project.title}</h1>
        <h2>{project.subtitle}</h2>
        <p>{project.longDescription}</p>
      </div>

      <div className="project-details-grid">
        <div className="project-details-main">
          <h3>Project Highlights</h3>

          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <aside className="project-details-sidebar">
          <div className="details-box">
            <h3>Role</h3>
            <p>{project.role}</p>
          </div>

          <div className="details-box">
            <h3>Technologies</h3>

            <div className="details-tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="details-box">
            <h3>Links</h3>

            <div className="details-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
              )}

              {!project.liveUrl && !project.githubUrl && (
                <p>Links will be added soon.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ProjectDetails;