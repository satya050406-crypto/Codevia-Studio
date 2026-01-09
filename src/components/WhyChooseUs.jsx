import React from 'react';

const WhyChooseUs = () => {
    const reasons = [
        { title: "Fast Delivery", description: "We respect timelines and deliver projects on schedule without compromising quality.", icon: "⚡" },
        { title: "Affordable Pricing", description: "Premium digital solutions at competitive prices that fit your business budget.", icon: "💰" },
        { title: "Modern UI/UX", description: "Stunning, user-friendly designs that provide an exceptional digital experience.", icon: "✨" },
        { title: "Long-term Support", description: "We stay with you after launch to ensure your digital tools keep scaling.", icon: "🤝" }
    ];

    return (
        <section id="why-choose-us" className="why-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Why Choose <span className="gradient-text">Codevia Studio</span>?
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        We combine technical expertise with business strategy to deliver results that matter.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {reasons.map((reason, index) => (
                        <div key={index} className="animate" style={{ padding: '2rem', textAlign: 'center' }}>
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
