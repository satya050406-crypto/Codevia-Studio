import React, { useState } from 'react';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "CBS TAX | Financial Services",
            category: "Web Development",
            image: "/cbs-tax.png",
            description: "A comprehensive taxation and financial management platform for business clients."
        },
        {
            title: "CBS Logistics Tracking",
            category: "Web Development",
            image: "/cbs-logistics.png",
            description: "Advanced shipment tracking system with real-time updates and logistics management."
        },
        {
            title: "CBS Business Suite",
            category: "Web Development",
            image: "/website.png",
            description: "Integrated admin panel and management tools for streamlined business operations."
        },
        {
            title: "Fintech Pro App",
            category: "App Development",
            image: "/app.png",
            description: "Modern banking experience with high-security features and intuitive UI."
        },
        {
            title: "SEO Analytics Pro",
            category: "SEO & Marketing",
            image: "/marketing.png",
            description: "Data-driven marketing dashboard for deep SEO analysis and organic growth tracking."
        },
        {
            title: "Brand Identity: CBS",
            category: "Branding",
            image: "/branding.png",
            description: "Complete branding and visual identity design for a technical business firm."
        }
    ];

    const categories = ['All', 'Web Development', 'App Development', 'SEO & Marketing', 'Branding'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    // Render Web Development Detail View
    if (filter === 'Web Development') {
        return (
            <section id="portfolio" className="portfolio-section" style={{ minHeight: '100vh', background: 'var(--bg-color)', paddingTop: '120px' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem' }} className="animate">
                                <span className="gradient-text">Web Development</span> Showcase
                            </h2>
                            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Our finest web-based digital solutions.</p>
                        </div>
                        <button onClick={() => setFilter('All')} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>←</span> Back to All
                        </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
                        {filteredProjects.map((project, index) => (
                            <div key={index} className="glass animate" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '3rem', padding: '3rem', alignItems: 'center' }}>
                                <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>{project.description}</p>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <a href="https://wa.me/919211396141" className="btn btn-primary">Inquire Now</a>
                                        <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                                            Completed Project
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="portfolio" className="portfolio-section" style={{ background: 'var(--surface-color)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }} className="animate">
                    Our <span className="gradient-text">Portfolio</span>
                </h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }} className="animate">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                            style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="glass animate" style={{ overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                            <div style={{ height: '220px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <p style={{ color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                    {project.category}
                                </p>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
