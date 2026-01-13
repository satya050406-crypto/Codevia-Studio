import React, { useEffect, useState, useRef } from 'react';

const HackerText = ({ text, className = '' }) => {
    const [displayText, setDisplayText] = useState(text);
    const [hovering, setHovering] = useState(false);
    const intervalRef = useRef(null);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    const scramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        scramble();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]); // Re-run if text changes

    const handleMouseEnter = () => {
        setHovering(true);
        scramble();
    };

    return (
        <span
            className={className}
            onMouseEnter={handleMouseEnter}
            style={{ fontFamily: 'monospace', cursor: 'pointer' }} // Monospace enhances the effect
        >
            {displayText}
        </span>
    );
};

export default HackerText;
