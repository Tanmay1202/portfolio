import './WorkSection.css';

const WorkSection = () => {
    const modules = [
        {
            id: 'mod_001',
            name: 'DSA Training - HitBullseye',
            status: 'LOADED',
            address: '0x1A00',
            description: 'Advanced Data Structures & Algorithms training. High-performance code optimization and complexity analysis.',
            stack: ['C++', 'Algorithms', 'Logic Design']
        },
        {
            id: 'mod_002',
            name: 'Academic Core - LPU',
            status: 'LOADED',
            address: '0x1B00',
            description: 'B.Tech in Computer Science (7.94 CGPA). Focus on OS, DBMS, and Network Communication.',
            stack: ['DBMS', 'Computer Networks', 'OS']
        },
        {
            id: 'mod_003',
            name: 'Strategic Achievements',
            status: 'LOADED',
            address: '0x1C00',
            description: 'GDG Hack2Skill Top 105. Solved 400+ algorithmic problems across LeetCode & CodeForces.',
            stack: ['Problem Solving', 'Competitive Programming']
        },
        {
            id: 'mod_004',
            name: 'Network & System Certification',
            status: 'LOADED',
            address: '0x1D00',
            description: 'Certified in P2P Protocols, Local Area Networks, and Fundamentals of Network Communication.',
            stack: ['TCP/IP', 'P2P', 'Security']
        }
    ];

    return (
        <section id="work" data-mode="work" className="work-section bg-grid">
            <div className="container">
                <div className="section-header">
                    <div className="header-label mono text-muted">MODULE_REGISTRY</div>
                    <h2 className="header-title mono">Loaded Modules</h2>
                </div>

                <div className="modules-grid grid grid-2">
                    {modules.map((module) => (
                        <div key={module.id} className="module-card">
                            <div className="module-header mono">
                                <span className="module-id text-accent">{module.id}</span>
                                <span className="module-address text-muted">{module.address}</span>
                            </div>

                            <h3 className="module-name mono glitch-hover">{module.name}</h3>

                            <p className="module-description sans text-muted">
                                {module.description}
                            </p>

                            <div className="module-stack">
                                {module.stack.map((tech, index) => (
                                    <span key={index} className="stack-tag mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="module-status mono">
                                <span className="status-indicator"></span>
                                <span className="text-muted">{module.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
