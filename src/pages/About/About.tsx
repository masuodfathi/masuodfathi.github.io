import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <p className="section-label">About Me</p>

        <h1>Software developer with a growing focus on data and AI</h1>

        <p>
          I am a full-stack developer and data analytics professional based in
          Vancouver, Canada. My background combines software engineering,
          database design, web development, and hands-on analytics projects.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <h2>My Background</h2>

          <p>
            I started my journey in software development by working with
            technologies such as C#, ASP.NET Core, SQL Server, JavaScript, HTML,
            and CSS. Over time, I built full-stack applications, designed
            relational databases, developed APIs, and worked on user-facing web
            interfaces.
          </p>

          <p>
            More recently, I have expanded my focus into data analytics and AI.
            I have worked with Python, R, Excel, SQL, data visualization, machine
            learning concepts, and deep learning experiments. I enjoy projects
            where software development and data analysis come together to solve
            practical problems.
          </p>

          <p>
            My current portfolio reflects this combination: full-stack web
            applications, airport charging analytics, data visualization, and
            image-to-video generation using AI models.
          </p>

          <h2>What I Care About</h2>

          <p>
            I care about building systems that are understandable, maintainable,
            and useful. A good project is not only about writing code; it is also
            about understanding the problem, designing the structure properly,
            explaining the result clearly, and making the final solution usable
            for real people.
          </p>
        </div>

        <aside className="about-sidebar">
          <div className="about-card">
            <h3>Core Focus</h3>
            <ul>
              <li>Full-stack web development</li>
              <li>Data analytics and visualization</li>
              <li>SQL database design</li>
              <li>AI and machine learning projects</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Technical Strengths</h3>
            <ul>
              <li>React and TypeScript</li>
              <li>ASP.NET Core and C#</li>
              <li>Python, R, and SQL</li>
              <li>RESTful API development</li>
              <li>Data cleaning and analysis</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Location</h3>
            <p>Vancouver, Canada</p>
          </div>
        </aside>
      </div>

      <section className="about-timeline">
        <div className="section-header">
          <p className="section-label">Journey</p>
          <h2>How my experience connects</h2>
        </div>

        <div className="timeline-list">
          <div className="timeline-item">
            <span>01</span>
            <div>
              <h3>Software Engineering Foundation</h3>
              <p>
                Built a strong foundation in programming, object-oriented
                development, database design, and full-stack web applications.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>02</span>
            <div>
              <h3>Full-Stack Development Experience</h3>
              <p>
                Worked on web projects using backend, frontend, database, and API
                technologies to build practical software solutions.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>03</span>
            <div>
              <h3>Data Analytics and Visualization</h3>
              <p>
                Applied Python, SQL, R, Excel, and visualization tools to analyze
                datasets and communicate insights clearly.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>04</span>
            <div>
              <h3>AI and Applied Projects</h3>
              <p>
                Explored AI-related projects, including image-to-video
                generation, deep learning workflows, and model evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;