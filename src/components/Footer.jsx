import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer({ links }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              SunnySharma<span className="accent">.</span>
            </h3>
            <p>Building innovative solutions through code and creativity.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a
                href="https://github.com/102sunnysharma"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sunny-sharma-a1a253399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:102sunnysharma@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sunny Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
