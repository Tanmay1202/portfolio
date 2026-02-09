import { useState } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const processes = [
        {
            id: 'proc_001',
            name: 'AgrimEducation',
            timestamp: '2026.Q1',
            status: 'EXIT_SUCCESS',
            exitCode: '0x00',
            output: 'Engineered high-performance React/Vite app with 1.1s LCP and 98+ Lighthouse score. Developed full-stack RESTful API with Node.js/SQLite.',
            metrics: {
                performance: '98+ Lighthouse',
                lcp: '1.1s (Ultra Fast)',
                endpoints: '14+ REST APIs'
            },
            stack: ['React', 'Node.js', 'Tailwind', 'SQLite'],
            links: {
                github: 'https://github.com/Tanmay1202',
                live: 'https://www.agrimeducation.com'
            }
        },
        {
            id: 'proc_002',
            name: 'MacnManage',
            timestamp: '2025.Q4',
            status: 'EXIT_SUCCESS',
            exitCode: '0x00',
            output: 'Production-grade Resource Management (MERN). Features Bento Grid dashboard and Cmd+K global search.',
            metrics: {
                efficiency: '-40% Latency',
                latency: 'Sub-100ms',
                consistency: '99% Data Sync'
            },
            stack: ['MongoDB', 'Express', 'React', 'Node.js'],
            links: {
                github: 'https://github.com/Tanmay1202'
            }
        },
        {
            id: 'proc_003',
            name: 'EnviRon: AI Waste Manager',
            timestamp: '2025.Q3',
            status: 'EXIT_SUCCESS',
            exitCode: '0x00',
            output: 'Full-stack AI platform for sustainable waste management. Features Google Cloud Vision for classification, Gemini-powered Eco-Chatbot, and gamified impact tracking.',
            metrics: {
                classification: 'Real-time AI Vision',
                impact: 'Eco-Tree Progression',
                integration: 'Google Maps & Gemini'
            },
            stack: ['React', 'Node.js', 'Google Cloud Vision', 'Gemini API', 'Supabase', 'Tailwind'],
            links: {
                github: 'https://github.com/Tanmay1202',
                live: 'https://environ-frontend.vercel.app/'
            }
        }
    ];

    return (
        <section id="projects" data-mode="projects" className="projects-section bg-grid">
            <div className="container">
                <div className="section-header">
                    <div className="header-label mono text-muted">PROCESS_TRACE</div>
                    <h2 className="header-title mono">Execution History</h2>
                </div>

                <div className="process-grid">
                    {processes.map((process) => (
                        <div
                            key={process.id}
                            className="process-entry"
                            onClick={() => setSelectedProject(process)}
                        >

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
                                        <span className="metric-key">{key.toUpperCase()}</span>
                                        <span className="metric-value">{value}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="modal-output sans">{selectedProject.output}</p>

                            <div className="modal-links mono">
                                {selectedProject.links?.github && (
                                    <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                                        [GITHUB_REPO]
                                    </a>
                                )}
                                {selectedProject.links?.live && (
                                    <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer" className="modal-link text-accent">
                                        [LIVE_DEMO]
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
