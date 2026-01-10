import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData, projectsData } from '../data/servicesData';

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    if (!service) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', color: '#fff' }}>
                <h2>Service not found</h2>
                <Link to="/services" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Services</Link>
            </div>
        );
    }

    const serviceProjects = projectsData.filter(p => p.serviceId === serviceId);

    return (
        <div style={{ paddingTop: '120px', background: 'var(--bg-color)', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ marginBottom: '5rem' }} className="animate">
                    <Link to="/services" style={{ color: 'var(--primary-color)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                        ← Back to Services
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '3rem' }}>{service.icon}</span>
                        <h1 style={{ fontSize: '3.5rem' }}><span className="gradient-text">{service.title}</span></h1>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px' }}>
                        {service.description}
                    </p>
                </div>

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
            </div>
        </div>
    );
};

export default ServiceDetailPage;
