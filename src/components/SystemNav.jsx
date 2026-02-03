import { useState, useEffect } from 'react';
import './SystemNav.css';

const SystemNav = ({ currentMode, onModeChange }) => {
    const [isVisible, setIsVisible] = useState(false);

    const modes = [
        { id: 'init', label: 'INIT', address: '0x0000' },
        { id: 'work', label: 'WORK', address: '0x1000' },
        { id: 'skills', label: 'SKILLS', address: '0x2000' },
        { id: 'projects', label: 'PROJECTS', address: '0x3000' },
        { id: 'contact', label: 'CONTACT', address: '0x4000' }
    ];

    useEffect(() => {
        // Show nav after initial load
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className={`system-nav ${isVisible ? 'visible' : ''}`}>
            <div className="nav-container">
                {/* System Monitor Header */}
                <div className="nav-header mono">
                    <span className="nav-title text-accent">SYS_MONITOR</span>
                    <span className="nav-status">
                        <span className="status-indicator"></span>
                        ACTIVE
                    </span>
                </div>

                {/* Mode List */}
                <ul className="mode-list">
                    {modes.map((mode) => (
                        <li key={mode.id}>
                            <button
                                className={`mode-button mono glitch-hover ${currentMode === mode.id ? 'active' : ''}`}
                                onClick={() => onModeChange(mode.id)}
                                aria-label={`Navigate to ${mode.label}`}
                            >
                                <span className="mode-address text-muted">{mode.address}</span>
                                <span className="mode-label">{mode.label}</span>
                                {currentMode === mode.id && (
                                    <span className="mode-indicator"></span>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Memory Usage Indicator (decorative) */}
                <div className="nav-footer mono">
                    <div className="memory-usage">
                        <span className="text-muted">MEM</span>
                        <div className="usage-bar">
                            <div className="usage-fill" style={{ width: '67%' }}></div>
                        </div>
                        <span className="text-muted">67%</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SystemNav;
