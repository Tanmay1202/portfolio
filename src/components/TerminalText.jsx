import { useState, useEffect } from 'react';

const TerminalText = ({ text, delay = 50, className = "" }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [index, text, delay]);

    return (
        <span className={`${className} terminal-text`}>
            {displayedText}
            {index < text.length && <span className="terminal-cursor">_</span>}
        </span>
    );
};

export default TerminalText;
