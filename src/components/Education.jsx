function Education({ timeline }) {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}
                {item.tags?.length > 0 && (
                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span
                        className="timeline-tag"
                        key={`${item.title}-${tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {item.points?.length > 0 && (
                  <ul className="certification-list">
                    {item.points.map((point) => (
                      <li key={`${item.title}-${point}`}>
                        <span className="cert-icon">✓</span> {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
