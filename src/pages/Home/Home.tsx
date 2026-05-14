import "./Home.css";

function Home() {
  return (
    <section className="home">
      <p className="home-intro">Hello, I’m</p>

      <h1>Masoud Fathi</h1>

      <h2>Software Developer & Data Analytics Student</h2>

      <p className="home-description">
        I build web applications, analyze data, and explore AI solutions.
        My work combines software development, data analytics, and practical problem-solving.
      </p>

      <div className="home-actions">
        <a href="/projects" className="btn btn-primary">
          View Projects
        </a>

        <a href="/contact" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;