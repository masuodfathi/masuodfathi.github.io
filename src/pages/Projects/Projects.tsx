import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-header">
        <p className="section-label">Portfolio</p>
        <h1>Projects</h1>
        <p>
          A selection of projects covering full-stack development, data analytics,
          visualization, and AI experimentation.
        </p>
      </div>

      <div className="projects-page-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;