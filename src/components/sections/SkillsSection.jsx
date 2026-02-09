import './SkillsSection.css';

const SkillsSection = () => {
    const capabilities = [
        {
            category: 'LANGUAGES',
            skills: [
                { name: 'C/C++', level: 92 },
                { name: 'JavaScript/TypeScript', level: 95 },
                { name: 'Python', level: 88 },
                { name: 'SQL', level: 85 },
                { name: 'Rust', level: 78 }
            ]
        },
        {
            category: 'FRAMEWORKS',
            skills: [
                { name: 'React.js', level: 94 },
                { name: 'Node.js/Express', level: 90 },
                { name: 'pandas/NumPy', level: 85 },
                { name: 'Matplotlib', level: 80 }
            ]
        },
        {
            category: 'SYSTEMS & TOOLS',
            skills: [
                { name: 'MongoDB/Atlas', level: 92 },
                { name: 'Docker/Azure', level: 82 },
                { name: 'Firebase/WebSockets', level: 88 },
                { name: 'Git/Github', level: 95 }
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
                        <span className="summary-key">TOTAL_CAPABILITIES</span>
                        <span className="summary-value">12</span>
                    </div>
                    <div className="summary-row">
                        <span className="summary-key">AVG_PROFICIENCY</span>
                        <span className="summary-value">86%</span>
                    </div>
                    <div className="summary-row">
                        <span className="summary-key">SYSTEM_STATUS</span>
                        <span className="summary-value">OPTIMAL</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
