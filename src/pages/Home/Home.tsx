import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import "./Home.css";

function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-intro">Hello, I’m</p>

          <h1>Masoud Fathi</h1>

          <h2>Full-Stack Developer & Data Analytics Professional</h2>

          <p className="home-description">
            I build web applications, analyze data, and explore AI solutions.
            My work combines software development, data analytics, database
            design, and practical problem-solving.
          </p>

          <div className="home-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-header">
          <p className="section-label">About</p>
          <h2>Turning technical ideas into practical solutions</h2>
        </div>

        <p className="section-description">
          I have experience in full-stack development, SQL database design,
          RESTful APIs, data analytics, and AI-related projects. I enjoy working
          on projects that connect real business problems with clean technical
          solutions.
        </p>
      </section>

      <section className="home-section">
        <div className="section-header">
          <p className="section-label">Skills</p>
          <h2>Technologies I work with</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, TypeScript, JavaScript, HTML, CSS, Figma</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>ASP.NET Core, Node.js, RESTful APIs, C#</p>
          </div>

          <div className="skill-card">
            <h3>Data</h3>
            <p>SQL, Python, R, Excel, Pandas, data visualization</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>GitHub, VS Code, Visual Studio, Power BI, Colab</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-header project-header">
          <div>
            <p className="section-label">Projects</p>
            <h2>Featured work</h2>
          </div>

          <Link to="/projects" className="view-all-link">
            View all projects →
          </Link>
        </div>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="home-section home-cta">
        <p className="section-label">Contact</p>
        <h2>Interested in working together?</h2>
        <p>
          I am open to opportunities in software development, data analytics,
          and AI-related projects.
        </p>

        <Link to="/contact" className="btn btn-primary">
          Get in Touch
        </Link>
      </section>
    </>
  );
}

export default Home;