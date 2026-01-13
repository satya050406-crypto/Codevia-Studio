import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData, projectsData, seoPackages } from '../data/servicesData';
import RevealTitle from '../components/RevealTitle';

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', color: '#fff' }}>
                <h2>Service not found</h2>
                <Link to="/services" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Services</Link>
            </div>
        );
    }

    const serviceProjects = projectsData.filter(p => p.serviceId === serviceId);
    const isSeoPage = serviceId === 'seo-marketing';

    return (
        <div style={{ paddingTop: '120px', background: 'var(--bg-color)', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ marginBottom: '5rem' }}>
                    <Link to="/services" style={{ color: 'var(--primary-color)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                        ← Back to Services
                    </Link>

                    {isSeoPage ? (
                        <RevealTitle className="seo-header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '3rem' }}>{service.icon}</span>
                                <h1 style={{ fontSize: '3.5rem' }}>
                                    SEO Services That <span className="gradient-text">Drive Results</span>
                                </h1>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px' }}>
                                Choose the plan that fits your business goals. Transparent pricing. Real growth.
                            </p>
                        </RevealTitle>
                    ) : (
                        <div className="animate">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '3rem' }}>{service.icon}</span>
                                <h1 style={{ fontSize: '3.5rem' }}><span className="gradient-text">{service.title}</span></h1>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px' }}>
                                {service.description}
                            </p>
                        </div>
                    )}
                </div>

                {isSeoPage ? (
                    <div style={{ marginBottom: '4rem' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '2rem',
                            alignItems: 'start'
                        }}>
                            {seoPackages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className="glass reveal-card"
                                    style={{
                                        padding: '2rem',
                                        position: 'relative',
                                        border: pkg.recommended ? '1.5px solid var(--primary-color)' : '1px solid var(--glass-border)',
                                        transform: pkg.recommended ? 'scale(1.02)' : 'scale(1)',
                                        transitionDelay: `${index * 150}ms`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    }}
                                >
                                    {pkg.recommended && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            right: '20px',
                                            background: 'var(--primary-color)',
                                            color: '#000',
                                            padding: '4px 12px',
                                            fontSize: '0.8rem',
                                            fontWeight: 'bold',
                                            borderRadius: '20px',
                                            boxShadow: '0 4px 10px rgba(0, 210, 255, 0.4)'
                                        }}>
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: pkg.recommended ? '#fff' : 'var(--text-muted)' }}>
                                        {pkg.title}
                                    </h3>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                                        {pkg.price}
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', flex: 1 }}>
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} style={{ marginBottom: '0.8rem', fontSize: '0.95rem', color: '#ccc', display: 'flex', gap: '0.5rem' }}>
                                                <span style={{ color: 'var(--primary-color)' }}>✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={pkg.button_url} className={`btn ${pkg.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', borderRadius: '8px' }}>
                                        {pkg.button_text}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>{service.title} Projects</h2>
                        {serviceProjects.length > 0 ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                                {serviceProjects.map((project, index) => (
                                    <div key={index} className="glass animate" style={{ overflow: 'hidden', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ height: '240px', overflow: 'hidden' }}>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }}
                                                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                            />
                                        </div>
                                        <div style={{ padding: '2rem', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6' }}>{project.description}</p>
                                            <div style={{ marginTop: 'auto' }}>
                                                <a href={project.button_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                                                    {project.button_text}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="glass" style={{ padding: '4rem', textAlign: 'center' }}>
                                <p style={{ color: 'var(--text-muted)' }}>More projects coming soon for {service.title}.</p>
                                <a href="https://wa.me/919211396141" className="btn btn-outline" style={{ marginTop: '2rem' }}>Inquire for {service.title}</a>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceDetailPage;
