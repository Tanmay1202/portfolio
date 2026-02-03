import { useState, useEffect } from 'react';
import './SystemLoader.css';

const SystemLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentPhase, setCurrentPhase] = useState('INIT');
    const [logs, setLogs] = useState([]);

    const bootSequence = [
        { phase: 'INIT', message: 'Initializing system...', duration: 300 },
        { phase: 'MEM', message: 'Allocating memory blocks...', duration: 400 },
        { phase: 'PROC', message: 'Loading process modules...', duration: 350 },
        { phase: 'UI', message: 'Rendering interface...', duration: 300 },
        { phase: 'READY', message: 'System ready.', duration: 200 }
    ];

    useEffect(() => {
        let currentProgress = 0;
        let logIndex = 0;

        const runBootSequence = async () => {
            for (const step of bootSequence) {
                setCurrentPhase(step.phase);
                setLogs(prev => [...prev, `[${step.phase}] ${step.message}`]);

                const increment = 100 / bootSequence.length;
                const startProgress = currentProgress;
                const endProgress = Math.min(currentProgress + increment, 100);

                // Animate progress bar
                const steps = 20;
                const progressStep = (endProgress - startProgress) / steps;

                for (let i = 0; i < steps; i++) {
                    await new Promise(resolve => setTimeout(resolve, step.duration / steps));
                    currentProgress += progressStep;
                    setProgress(Math.min(currentProgress, 100));
                }

                logIndex++;
            }

            // Hold at 100% briefly before completing
            await new Promise(resolve => setTimeout(resolve, 300));
            onComplete();
        };

        runBootSequence();
    }, [onComplete]);

    return (
        <div className="system-loader">
            <div className="loader-container">
                {/* System Header */}
                <div className="loader-header">
                    <span className="mono text-accent">SYSTEM_BOOT</span>
                    <span className="mono text-muted">v1.0.0</span>
                </div>

                {/* Boot Logs */}
                <div className="boot-logs">
                    {logs.map((log, index) => (
                        <div key={index} className="log-entry mono">
                            <span className="log-timestamp">{String(index).padStart(3, '0')}</span>
                            <span className="log-message">{log}</span>
                        </div>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="progress-container">
                    <div className="progress-label mono">
                        <span>LOADING</span>
                        <span>{Math.floor(progress)}%</span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="progress-address mono text-muted">
                        0x{Math.floor((progress / 100) * 0xFFFF).toString(16).toUpperCase().padStart(4, '0')}
                    </div>
                </div>

                {/* Status Indicator */}
                <div className="status-indicator mono">
                    <span className="status-dot"></span>
                    <span>{currentPhase}</span>
                </div>
            </div>
        </div>
    );
};

export default SystemLoader;
