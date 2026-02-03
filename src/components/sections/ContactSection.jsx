import { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('IDLE');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('EXECUTING');

        // Simulate form submission
        setTimeout(() => {
            setStatus('SUCCESS');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setStatus('IDLE');
            }, 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" data-mode="contact" className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    {/* Left: Interface Info */}
                    <div className="interface-info">
                        <div className="section-header">
                            <div className="header-label mono text-muted">INTERFACE_ENDPOINT</div>
                            <h2 className="header-title mono">Establish Connection</h2>
                        </div>

                        <p className="interface-description sans text-muted">
                            Initialize communication protocol. All messages are processed
                            with high priority and routed to primary handler.
                        </p>

                        <div className="endpoint-details mono">
                            <div className="detail-row">
                                <span className="text-muted">PROTOCOL</span>
                                <span className="text-accent">HTTPS</span>
                            </div>
                            <div className="detail-row">
                                <span className="text-muted">ENDPOINT</span>
                                <span className="text-accent">/api/contact</span>
                            </div>
                            <div className="detail-row">
                                <span className="text-muted">METHOD</span>
                                <span className="text-accent">POST</span>
                            </div>
                            <div className="detail-row">
                                <span className="text-muted">RESPONSE_TIME</span>
                                <span className="text-accent">&lt;24h</span>
                            </div>
                        </div>

                        <div className="social-links mono">
                            <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                                <span className="text-muted">$</span> github
                            </a>
                            <a href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                                <span className="text-muted">$</span> linkedin
                            </a>
                            <a href="mailto:your.email@example.com" className="social-link">
                                <span className="text-muted">$</span> email
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="interface-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label mono text-muted">
                                    NAME
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input mono"
                                    placeholder="Enter identifier"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label mono text-muted">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input mono"
                                    placeholder="user@domain.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label mono text-muted">
                                    MESSAGE
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input form-textarea mono"
                                    placeholder="Enter payload"
                                    rows="6"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="form-submit mono"
                                disabled={status === 'EXECUTING'}
                            >
                                {status === 'IDLE' && '[EXECUTE]'}
                                {status === 'EXECUTING' && '[PROCESSING...]'}
                                {status === 'SUCCESS' && '[SUCCESS]'}
                            </button>

                            {status === 'SUCCESS' && (
                                <div className="status-message mono text-accent">
                                    <span className="status-indicator"></span>
                                    Message transmitted successfully. Exit code: 0x00
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
