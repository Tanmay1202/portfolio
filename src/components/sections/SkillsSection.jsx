import './SkillsSection.css';

const SkillsSection = () => {
    const capabilities = [
        {
            category: 'LANGUAGES',
            skills: [
                { name: 'JavaScript/TypeScript', level: 95 },
                { name: 'Python', level: 88 },
                { name: 'Go', level: 82 },
                { name: 'Rust', level: 75 }
            ]
        },
        {
            category: 'FRAMEWORKS',
            skills: [
                { name: 'React/Next.js', level: 92 },
                { name: 'Node.js', level: 90 },
                { name: 'FastAPI', level: 85 },
                { name: 'Kubernetes', level: 80 }
            ]
        },
        {
            category: 'SYSTEMS',
            skills: [
                { name: 'PostgreSQL', level: 88 },
                { name: 'Redis', level: 85 },
                { name: 'Docker', level: 92 },
                { name: 'AWS/GCP', level: 87 }
            ]
        }
    ];

    return (
        <section id="skills" data-mode="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <div className="header-label mono text-muted">SYSTEM_CAPABILITIES</div>
                    <h2 className="header-title mono">Resource Allocation</h2>
                </div>

                <div className="capabilities-grid">
                    {capabilities.map((category, index) => (
                        <div key={index} className="capability-group">
                            <h3 className="category-title mono text-accent">
                                {category.category}
                            </h3>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-header mono">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level text-muted">{skill.level}%</span>
                                        </div>

                                        <div className="skill-bar">
                                            <div
                                                className="skill-fill"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* System Resources Summary */}
                <div className="resources-summary mono">
                    <div className="summary-row">
                        <span className="text-muted">TOTAL_CAPABILITIES</span>
                        <span className="text-accent">12</span>
                    </div>
                    <div className="summary-row">
                        <span className="text-muted">AVG_PROFICIENCY</span>
                        <span className="text-accent">86%</span>
                    </div>
                    <div className="summary-row">
                        <span className="text-muted">SYSTEM_STATUS</span>
                        <span className="text-accent">OPTIMAL</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
