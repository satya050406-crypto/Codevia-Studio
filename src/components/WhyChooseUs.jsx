import React, { useEffect, useRef } from 'react';
import RevealTitle from './RevealTitle';

const WhyChooseUs = () => {
    const sectionRef = useRef(null);

    const reasons = [
        { title: "Fast Delivery", description: "We respect timelines and deliver projects on schedule without compromising quality.", icon: "⚡" },
        { title: "Affordable Pricing", description: "Premium digital solutions at competitive prices that fit your business budget.", icon: "💰" },
        { title: "Modern UI/UX", description: "Stunning, user-friendly designs that provide an exceptional digital experience.", icon: "✨" },
        { title: "Long-term Support", description: "We stay with you after launch to ensure your digital tools keep scaling.", icon: "🤝" }
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px', // 80px vertical scroll trigger offset
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Run animation once
                }
            });
        }, observerOptions);

        const elements = sectionRef.current.querySelectorAll('.reveal-card'); // Only reveal-card now
        elements.forEach(el => observer.observe(el));

        return () => {
            if (sectionRef.current) {
                const currentElements = sectionRef.current.querySelectorAll('.reveal-card');
                currentElements.forEach(el => observer.unobserve(el));
            }
        };
    }, []);

    return (
        <section id="why-choose-us" className="why-section" ref={sectionRef}>
            <div className="container">
                <RevealTitle style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Why Choose <span className="gradient-text">Codevia Studio</span>?
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', fontWeight: 'normal' }}>
                        We combine technical expertise with business strategy to deliver results that matter.
                    </p>
                </RevealTitle>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="reveal-card"
                            style={{
                                padding: '2rem',
                                textAlign: 'center',
                                transitionDelay: `${index * 200}ms` // Staggered delay
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{reason.icon}</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{reason.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
