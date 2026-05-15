import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <p className="section-label">Contact</p>

        <h1>Let’s connect</h1>

        <p>
          I am open to opportunities in software development, data analytics,
          and AI-related projects. Feel free to reach out if you want to discuss
          a role, collaboration, project, or technical opportunity.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-main-card">
          <h2>Get in touch</h2>

          <p>
            The best way to contact me is by email or LinkedIn. I usually prefer
            clear and direct communication, especially for professional
            opportunities, project discussions, and technical roles.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:masuod.fathi@gmail.com"
              className="btn btn-primary"
            >
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/masoud-fathi88/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="contact-info">
          <div className="contact-info-card">
            <h3>Email</h3>
            <a href="mailto:masuod.fathi@gmail.com">
              masuod.fathi@gmail.com
            </a>
          </div>

          <div className="contact-info-card">
            <h3>GitHub</h3>
            <a
              href="https://github.com/masuodfathi"
              target="_blank"
              rel="noreferrer"
            >
              github.com/masuodfathi
            </a>
          </div>

          <div className="contact-info-card">
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/masoud-fathi88/"
              target="_blank"
              rel="noreferrer"
            >
             linkedin.com/in/masoud-fathi88/
            </a>
          </div>

          <div className="contact-info-card">
            <h3>Location</h3>
            <p>Vancouver, Canada</p>
          </div>
        </aside>
      </div>

      <section className="contact-note">
        <p className="section-label">Availability</p>

        <h2>Open to professional opportunities</h2>

        <p>
          I am interested in roles that combine software development, data
          analytics, database systems, dashboards, automation, and applied AI.
        </p>
      </section>
    </section>
  );
}

export default Contact;