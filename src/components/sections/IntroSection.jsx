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
                            <span className="text-accent">$</span> <TerminalText text="YOUR_NAME" delay={150} />
                        </h1>
                    </div>

                    {/* System Capability */}
                    <div className="system-capability">
                        <div className="capability-label mono text-muted">CAPABILITY</div>
                        <h2 className="capability-title sans">
                            Software Engineer / System Architect
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
                            <span className="info-value">Your City, Country</span>
                        </div>
                        <div className="info-row">
                            <span className="info-key text-muted">UPTIME</span>
                            <span className="info-value">X years in production</span>
                        </div>
                    </div>

                    {/* System Description */}
                    <div className="system-description animate-flush">
                        <p className="sans text-muted">
                            Building high-performance systems with surgical precision.
                            Specializing in low-level optimizations, distributed architectures,
                            and interfaces that feel inevitable.
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
