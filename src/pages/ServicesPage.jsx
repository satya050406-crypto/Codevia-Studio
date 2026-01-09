import React from 'react';

const ServicesPage = () => {
    const services = [
        {
            title: "Website Development",
            description: "We build high-performance, responsive websites that are optimized for conversions. From corporate portals to specialized web applications like CBS Tax, we deliver quality at speed.",
            details: ["Custom UI/UX Design", "React & Next.js Development", "E-commerce Solutions", "Admin Panels & CRM"],
            icon: "🌐"
        },
        {
            title: "App Development",
            description: "Seamless mobile experiences for Android and iOS. We focus on performance, security, and intuitive user interfaces to help your business reach customers on any device.",
            details: ["Cross-platform Apps", "Native Android Apps", "UI/UX for Mobile", "API Integrations"],
            icon: "📱"
        },
        {
            title: "SEO & Digital Marketing",
            description: "Boost your organic reach and stay ahead of the competition. Our data-driven strategies ensure your business is visible to the right audience through search engine optimization.",
            details: ["Technical SEO", "On-page Optimization", "Keyword Research", "Local SEO Strategies"],
            icon: "🚀"
        },
        {
            title: "Posters & Creatives",
            description: "Stand out with stunning visuals. We design professional social media posters, branding materials, and digital creatives that capture your brand's essence.",
            details: ["Social Media Graphics", "Brand Identity Design", "Graphic Posters", "Marketing Creatives"],
            icon: "🎨"
        }
    ];

    return (
        <div className="services-page" style={{ paddingTop: '120px', background: 'var(--bg-color)', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="animate">
                    <h2 style={{ fontSize: '3.5rem' }}>Our <span className="gradient-text">Services</span></h2>
                    <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0' }}>
                        Empowering businesses with cutting-edge digital transformation and strategic growth solutions.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', paddingBottom: '100px' }}>
                    {services.map((service, index) => (
                        <div key={index} className="glass animate" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3rem', padding: '4rem', alignItems: 'start' }}>
                            <div style={{ fontSize: '5rem' }}>{service.icon}</div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                                    {service.description}
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                    {service.details.map((detail, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontSize: '1rem' }}>
                                            <span style={{ color: 'var(--primary-color)' }}>✓</span>
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
