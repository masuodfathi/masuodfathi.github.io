import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <p className="project-card-subtitle">{project.subtitle}</p>

      <h3>{project.title}</h3>

      <p className="project-card-description">{project.description}</p>

      <div className="project-card-tech-list">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-card-links">
        <Link to={`/projects/${project.id}`}>View Details</Link>

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}

        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;