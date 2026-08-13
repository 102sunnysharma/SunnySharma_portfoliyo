import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";

function Hero({ info }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">{info.greeting}</p>
          <h1 className="hero-title">{info.title}</h1>
          <p className="hero-subtitle">{info.subtitle}</p>
          <p className="hero-description">{info.description}</p>
          <div className="hero-buttons">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              {info.primaryButton}
            </button>
            <a
              className="btn btn-secondary"
              href={info.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload /> {info.secondaryButton}
            </a>
          </div>
          <div className="hero-social">
            <a
              href={info.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={info.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href={`mailto:${info.social.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src={info.profileImage}
              alt="Professional"
              className="profile-img"
            />
            <div className="image-decoration" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about">
          <FaChevronDown />
        </a>
      </div>
    </section>
  );
}

export default Hero;
