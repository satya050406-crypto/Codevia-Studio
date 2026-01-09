import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Website Development",
            description: "Business websites, portfolios, and high-performance admin panels tailored to your needs.",
            icon: "🌐"
        },
        {
            title: "App Development",
            description: "Custom Android and iOS apps, business applications, and seamless API integrations.",
            icon: "📱"
        },
        {
            title: "SEO & Marketing",
            description: "Google ranking, local SEO, and digital marketing strategies to boost your online presence.",
            icon: "🚀"
        },
        {
            title: "Posters & Creatives",
            description: "Professional social media posters, branding designs, and graphics that capture attention.",
            icon: "🎨"
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }} className="animate">
                    Our <span className="gradient-text">Services</span>
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <div key={index} className="glass animate" style={{ padding: '2.5rem', transition: 'var(--transition)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
