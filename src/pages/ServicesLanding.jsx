import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServicesLanding = () => {
    return (
        <div className="services-page" style={{ paddingTop: '120px', background: 'var(--bg-color)', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="animate">
                    <h2 style={{ fontSize: '3.5rem' }}>Our <span className="gradient-text">Services</span></h2>
                    <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0' }}>
                        Choose a service to explore our specialized solutions and relevant projects.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', paddingBottom: '100px' }}>
                    {servicesData.map((service) => (
                        <Link
                            to={`/services/${service.id}`}
                            key={service.id}
                            className="glass animate"
                            style={{ padding: '3rem', textAlign: 'center', textDecoration: 'none', transition: 'var(--transition)' }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{service.description}</p>
                            <div style={{ marginTop: '2rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                                Explore Projects →
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesLanding;
