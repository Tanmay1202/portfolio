import './WorkSection.css';

const WorkSection = () => {
    const modules = [
        {
            id: 'mod_001',
            name: 'E-Commerce Platform',
            status: 'LOADED',
            address: '0x1A00',
            description: 'High-performance distributed system handling 10M+ transactions',
            stack: ['React', 'Node.js', 'PostgreSQL', 'Redis']
        },
        {
            id: 'mod_002',
            name: 'Real-Time Analytics Engine',
            status: 'LOADED',
            address: '0x1B00',
            description: 'Low-latency data processing pipeline with sub-100ms response',
            stack: ['Go', 'Kafka', 'ClickHouse', 'gRPC']
        },
        {
            id: 'mod_003',
            name: 'Infrastructure Automation',
            status: 'LOADED',
            address: '0x1C00',
            description: 'Kubernetes-based deployment system with zero-downtime releases',
            stack: ['Terraform', 'Kubernetes', 'Docker', 'ArgoCD']
        },
        {
            id: 'mod_004',
            name: 'API Gateway',
            status: 'LOADED',
            address: '0x1D00',
            description: 'Scalable gateway handling 50K RPS with intelligent routing',
            stack: ['Rust', 'NGINX', 'Consul', 'Prometheus']
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
