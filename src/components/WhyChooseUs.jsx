import React, { useEffect, useRef } from 'react';
import RevealTitle from './RevealTitle';

const WhyChooseUs = () => {
    const sectionRef = useRef(null);

    const reasons = [
        {
            title: "Fast Delivery",
            description: "We respect timelines and deliver projects on schedule without compromising quality.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#blue-gradient)" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00d2ff" />
                            <stop offset="100%" stopColor="#005f73" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        },
        {
            title: "Affordable Pricing",
            description: "Premium digital solutions at competitive prices that fit your business budget.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5" />
                    <path d="M12 6V18M9 9H13.5C14.3284 9 15 9.67157 15 10.5C15 11.3284 14.3284 12 13.5 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H15" stroke="url(#blue-gradient)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Modern UI/UX",
            description: "Stunning, user-friendly designs that provide an exceptional digital experience.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" strokeWidth="1.5" />
                    <path d="M3 9H21M9 21V9" stroke="url(#blue-gradient)" strokeWidth="1.5" />
                </svg>
            )
        },
        {
            title: "Long-term Support",
            description: "We stay with you after launch to ensure your digital tools keep scaling.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#fff" strokeWidth="1.5" />
                    <path d="M8 12L11 15L16 9" stroke="url(#blue-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "100% Satisfaction",
            description: "We don't just deliver projects; we ensure every client is 100% satisfied with the result.",
            isFeatured: true,
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L8.5 17.5L9.5 13.5L6.5 10.5L10.5 10.25L12 6.5L13.5 10.25L17.5 10.5L14.5 13.5L15.5 17.5L12 15Z" fill="url(#blue-gradient)" stroke="#fff" strokeWidth="1" />
                    <circle cx="12" cy="12" r="10" stroke="url(#blue-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
            )
        }
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
                            className={`reveal-card ${reason.isFeatured ? 'glass' : ''}`}
                            style={{
                                padding: '2rem',
                                textAlign: 'center',
                                transitionDelay: `${index * 200}ms`, // Staggered delay
                                border: reason.isFeatured ? '1px solid var(--primary-color)' : 'none',
                                boxShadow: reason.isFeatured ? '0 0 30px var(--primary-glow)' : 'none',
                                borderRadius: '16px'
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
