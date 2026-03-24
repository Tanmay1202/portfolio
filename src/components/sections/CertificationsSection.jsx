import './CertificationsSection.css';

const CertificationsSection = () => {
    const certifications = [
        {
            id: 'cert_001',
            name: 'DSA Training - HitBullseye',
            status: 'VERIFIED',
            address: '0x10A1',
            date: "Jul' 2025",
            description: (
                <ul className="cert-list">
                    <li>Completed an extensive Data Structures and Algorithms training program, enhancing problem-solving, algorithmic thinking, and code optimization skills through regular coding contests and data-driven challenges.</li>
                    <li>Strengthened skills in C++ and data structures by solving complex problems and writing optimized, efficient code in competitive programming settings.</li>
                    <li>Analyzed time and space complexity to design optimal algorithmic solutions in competitive programming.</li>
                </ul>
            ),
            stack: ['C++', 'Algorithms', 'Optimization'],
            link: '#'
        },
        {
            id: 'cert_002',
            name: 'Peer to Peer Protocols and Local Area Networks',
            status: 'VERIFIED',
            address: '0x10A2',
            date: "Coursera",
            description: 'Certified in Peer to Peer Protocols and Local Area Networks communication structures.',
            stack: ['Networking', 'P2P', 'LAN'],
            link: '#'
        },
        {
            id: 'cert_003',
            name: 'Fundamentals of Network Communication',
            status: 'VERIFIED',
            address: '0x10A3',
            date: "Coursera",
            description: 'Comprehensive certification covering the foundations of network architecture and data transmission paradigms.',
            stack: ['TCP/IP', 'Networking'],
            link: '#'
        },
        {
            id: 'cert_004',
            name: 'Computer Programming',
            status: 'VERIFIED',
            address: '0x10A4',
            date: "IAMNEO",
            description: 'Certified proficiency in core computer programming logic and architectural concepts.',
            stack: ['Programming', 'Logic'],
            link: '#'
        }
    ];

    return (
        <section id="certifications" data-mode="certifications" className="certifications-section bg-grid">
            <div className="container">
                <div className="section-header">
                    <div className="header-label mono text-muted">SECURITY_CLEARANCE</div>
                    <h2 className="header-title mono">Certifications & Training</h2>
                </div>

                <div className="modules-grid grid grid-2">
                    {certifications.map((cert) => (
                        <a href={cert.link} target="_blank" rel="noreferrer" key={cert.id} className="module-card">
                            <div className="module-header mono">
                                <span className="module-id text-accent">{cert.id}</span>
                                <span className="module-address text-muted">{cert.address}</span>
                            </div>

                            <h3 className="module-name mono glitch-hover">
                                {cert.name}
                                <span className="cert-date text-muted text-sm mono block mt-1">{cert.date}</span>
                            </h3>

                            <div className="module-description sans text-ghost">
                                {cert.description}
                            </div>

                            <div className="module-stack mt-auto pt-4">
                                {cert.stack.map((tech, index) => (
                                    <span key={index} className="stack-tag mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="module-status mono">
                                <span className="status-indicator"></span>
                                <span className="text-muted">{cert.status}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
