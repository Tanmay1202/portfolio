import TerminalText from '../TerminalText';
import './IntroSection.css';

const IntroSection = () => {
    return (
        <section id="init" data-mode="init" className="intro-section">
            <div className="container">
                <div className="intro-content">
                    {/* System Identity */}
                    <div className="system-identity">
                        <div className="identity-label mono text-muted">PROCESS_NAME</div>
                        <h1 className="identity-name mono">
                            <span className="text-accent">$</span> <TerminalText text="Tanmay Singh" delay={150} />
                        </h1>
                    </div>

                    {/* System Capability */}
                    <div className="system-capability">
                        <div className="capability-label mono text-muted">CAPABILITY</div>
                        <h2 className="capability-title sans">
                            Full Stack Developer / Software Engineer
                        </h2>
                    </div>

                    {/* System Info */}
                    <div className="system-info mono">
                        <div className="info-row">
                            <span className="info-key text-muted">STATUS</span>
                            <span className="info-value">
                                <span className="status-dot"></span>
                                OPERATIONAL
                            </span>
                        </div>
                        <div className="info-row">
                            <span className="info-key text-muted">LOCATION</span>
                            <span className="info-value">Haryana, India</span>
                        </div>
                        <div className="info-row">
                            <span className="info-key text-muted">UPTIME</span>
                            <span className="info-value">Since 2023 (Production Ready)</span>
                        </div>
                    </div>

                    {/* System Description */}
                    <div className="system-description animate-flush">
                        <p className="sans text-muted">
                            Engineering high-performance web applications and algorithmic solutions.
                            Specializing in the MERN stack, React/Vite optimizations, and building
                            scalable systems with surgical precision and 98+ Lighthouse performance.
                        </p>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator mono">
                        <span className="text-muted">SCROLL</span>
                        <div className="scroll-line"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
