import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setHidden(false);
        const handleMouseLeave = () => setHidden(true);

        window.addEventListener('mousemove', updatePosition);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15), transparent 70%)',
                transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
                pointerEvents: 'none',
                zIndex: 9999,
                opacity: hidden ? 0 : 1,
                transition: 'opacity 0.3s ease',
                mixBlendMode: 'screen',
                willChange: 'transform' // Performance optimization
            }}
        />
    );
};

export default MouseFollower;
