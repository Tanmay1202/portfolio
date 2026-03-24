import './AchievementsSection.css';

const AchievementsSection = () => {
    const achievements = [
        {
            id: 'achv_001',
            name: 'Algorithmic Problem Solving',
            status: 'EXECUTED',
            address: '0x20A1',
            description: (
                <>
                    <div className="text-accent mb-2 mono stat-highlight">450+</div>
                    <div>Problems solved across competitive programming platforms including <strong>LeetCode</strong>, <strong>GeeksForGeeks</strong>, and <strong>CodeForces</strong>.</div>
                </>
            ),
            stack: ['Algorithms', 'Optimization', 'Data Structures']
        },
        {
            id: 'achv_002',
            name: 'GDG Hack2Skill',
            status: 'EXECUTED',
            address: '0x20A2',
            description: (
                <>
                    <div className="text-accent mb-2 mono stat-highlight">TOP 105</div>
                    <div>Achieved top 105 ranking in the GDG Hack2Skill hackathon, demonstrating high-performance system building and rapid prototyping skills.</div>
                </>
            ),
            stack: ['Hackathon', 'Rapid Prototyping', 'System Design']
        },
        {
            id: 'achv_003',
            name: 'Academic Core - LPU',
            status: 'VERIFIED',
            address: '0x20A3',
            description: (
                <>
                    <div className="text-accent mb-2 mono stat-highlight">8.06 CGPA</div>
                    <div>B.Tech in Computer Science. Demonstrated strong foundational knowledge and engineering principles.</div>
                </>
            ),
            stack: ['Computer Science', 'Engineering']
        }
    ];

    return (
        <section id="achievements" data-mode="achievements" className="achievements-section bg-grid">
            <div className="container">
                <div className="section-header">
                    <div className="header-label mono text-muted">PERFORMANCE_METRICS</div>
                    <h2 className="header-title mono">Strategic Achievements</h2>
                </div>

                <div className="modules-grid grid grid-3">
                    {achievements.map((achv) => (
                        <div key={achv.id} className="module-card">
                            <div className="module-header mono">
                                <span className="module-id text-accent">{achv.id}</span>
                                <span className="module-address text-muted">{achv.address}</span>
                            </div>

                            <h3 className="module-name mono glitch-hover">{achv.name}</h3>

                            <div className="module-description sans text-ghost">
                                {achv.description}
                            </div>

                            <div className="module-stack mt-auto pt-4">
                                {achv.stack.map((tech, index) => (
                                    <span key={index} className="stack-tag mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="module-status mono">
                                <span className="status-indicator"></span>
                                <span className="text-muted">{achv.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
