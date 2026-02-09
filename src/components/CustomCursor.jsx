import { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let rafId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const updateCursor = () => {
            const ease = 0.15;
            cursorX += (mouseX - cursorX) * ease;
            cursorY += (mouseY - cursorY) * ease;

            setPosition({ x: cursorX, y: cursorY });
            rafId = requestAnimationFrame(updateCursor);
        };

        const onMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('button') || target.closest('a') || target.classList.contains('interactive');
            setIsHovering(!!isClickable);

            if (isClickable) {
                const rect = target.getBoundingClientRect();
                // Future enhancement: magnetic pull towards center of rect if needed
            }
        };

        const onMouseDown = () => setIsMouseDown(true);
        const onMouseUp = () => setIsMouseDown(false);

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        rafId = requestAnimationFrame(updateCursor);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isMouseDown ? 'mousedown' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div className="cursor-block"></div>
            <div className="cursor-dot"></div>
            {isHovering && <div className="cursor-label mono text-accent">SELECT</div>}
        </div>
    );
};

export default CustomCursor;
