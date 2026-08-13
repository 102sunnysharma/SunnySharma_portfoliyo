function Skills({ categories }) {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Know</span>
          <h2 className="section-title">My Skills</h2>
        </div>
        <div className="skills-grid">
          {categories.map((category) => (
            <div className="skill-category" key={category.title}>
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
