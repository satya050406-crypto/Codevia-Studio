import React, { useEffect, useRef } from 'react';

const RevealTitle = ({ children, className = '', style = {} }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.3
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`reveal-title ${className}`} style={style}>
            {children}
        </div>
    );
};

export default RevealTitle;
