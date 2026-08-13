import { FaCode, FaLightbulb, FaUsers } from "react-icons/fa";

const iconMap = {
  cleanCode: FaCode,
  problemSolving: FaLightbulb,
  teamPlayer: FaUsers,
};

function About({ info, highlights, statCards }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            {info.paragraphs.map((paragraph) => (
              <p className="about-description" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="about-highlights">
              {highlights.map((item) => {
                const Icon = iconMap[item.icon] || FaCode;
                return (
                  <div className="highlight-item" key={item.title}>
                    <Icon className="icon" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-stats">
            {statCards.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <stat.Icon className="icon" />
                <h3 className="stat-number">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
