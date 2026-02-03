import { useState } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const processes = [
        {
            id: 'proc_001',
            name: 'Distributed Cache System',
            timestamp: '2024.Q4',
            status: 'EXIT_SUCCESS',
            exitCode: '0x00',
            output: 'Built Redis-compatible cache with 99.99% uptime. Reduced latency by 60%.',
            metrics: {
                performance: '+60% faster',
                reliability: '99.99% uptime',
                scale: '1M+ ops/sec'
            },
            stack: ['Go', 'Redis', 'Docker']
        },
        {
            id: 'proc_002',
            name: 'ML Pipeline Orchestrator',
            timestamp: '2024.Q3',
            status: 'EXIT_SUCCESS',
            exitCode: '0x00',
            output: 'Automated ML model training and deployment. Cut release time by 75%.',
            metrics: {
                automation: '100% automated',
                speed: '75% faster deploys',
                accuracy: '98.5% model accuracy'
            },
            stack: ['Python', 'Kubernetes', 'TensorFlow']
        },
        {
            id: 'proc_003',
            name: 'Real-Time Monitoring Dashboard',
            timestamp: '2024.Q2',
            status: 'EXIT_SUCCESS',
            exitCode: '0x00',
            output: 'WebSocket-based dashboard with sub-second data refresh. Handles 10K concurrent users.',
            metrics: {
                latency: '<100ms updates',
                concurrent: '10K users',
                uptime: '99.95%'
            },
            stack: ['React', 'WebSocket', 'InfluxDB']
        }
    ];

    return (
        <section id="projects" data-mode="projects" className="projects-section bg-grid">
            <div className="container">
                <div className="section-header">
                    <div className="header-label mono text-muted">PROCESS_TRACE</div>
                    <h2 className="header-title mono">Execution History</h2>
                </div>

                <div className="process-timeline">
                    {processes.map((process) => (
                        <div
                            key={process.id}
                            className="process-entry"
                            onClick={() => setSelectedProject(process)}
                        >
                            <div className="process-marker"></div>

                            <div className="process-content">
                                <div className="process-header mono">
                                    <span className="process-id text-accent">{process.id}</span>
                                    <span className="process-timestamp text-muted">{process.timestamp}</span>
                                </div>

                                <h3 className="process-name mono glitch-hover">{process.name}</h3>

                                <div className="process-status mono">
                                    <span className="status-code text-accent">{process.exitCode}</span>
                                    <span className="status-text text-muted">{process.status}</span>
                                </div>

                                <p className="process-output sans text-muted">
                                    {process.output}
                                </p>

                                <div className="process-stack">
                                    {process.stack.map((tech, index) => (
                                        <span key={index} className="stack-tag mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Detail Modal */}
                {selectedProject && (
                    <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header mono">
                                <span className="text-accent">{selectedProject.id}</span>
                                <button
                                    className="modal-close mono"
                                    onClick={() => setSelectedProject(null)}
                                    aria-label="Close modal"
                                >
                                    [ESC]
                                </button>
                            </div>

                            <h3 className="modal-title mono">{selectedProject.name}</h3>

                            <div className="modal-metrics mono">
                                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                                    <div key={key} className="metric-row">
                                        <span className="text-muted">{key.toUpperCase()}</span>
                                        <span className="text-accent">{value}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="modal-output sans">{selectedProject.output}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
