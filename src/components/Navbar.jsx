import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ navLinks, activeSection, onLinkClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    onLinkClick(id);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="#home">
            @Sunnysharma<span className="accent">.</span>
          </a>
        </div>
        <button
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="hamburger" />
        </button>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`} id="nav-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
