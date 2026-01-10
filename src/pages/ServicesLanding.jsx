import React, { useState } from 'react';
import { projectsData, seoPackages, socialMediaCreatives } from '../data/servicesData';
import { Link } from 'react-router-dom';

const ServicesLanding = () => {
    const [activeTab, setActiveTab] = useState('website-development');
    const [selectedCreative, setSelectedCreative] = useState(null);

    const tabs = [
        { id: 'website-development', label: 'Web Development' },
        { id: 'app-development', label: 'App Development' },
        { id: 'seo-marketing', label: 'SEO Services' },
        { id: 'creative-services', label: 'Social Media Creatives' }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'seo-marketing':
                return (
                    <div className="animate" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                        {seoPackages.map((pkg, index) => (
                            <div key={index} className="glass" style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', border: index === 1 ? '2px solid var(--primary-color)' : '1px solid var(--glass-border)' }}>
                                {index === 1 && <div style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Most Popular</div>}
                                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{pkg.title}</h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-main)' }}>{pkg.price}</div>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{pkg.description}</p>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left', flex: 1 }}>
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                                            <span style={{ color: 'var(--primary-color)', marginRight: '10px' }}>✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={pkg.button_url} className={`btn ${index === 1 ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                                    {pkg.button_text}
                                </Link>
                            </div>
                        ))}
                    </div>
                );

            case 'creative-services':
                return (
                    <div className="animate" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {socialMediaCreatives.map((creative, index) => (
                            <div
                                key={index}
                                className="glass"
                                style={{ overflow: 'hidden', padding: 0, cursor: 'pointer', transition: 'var(--transition)' }}
                                onClick={() => setSelectedCreative(creative)}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                                    <img
                                        src={creative.creative_image}
                                        alt={creative.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                    />
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--primary-color)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>{creative.category}</div>
                                        <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>{creative.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            default: // Web & App Development
                const projects = projectsData.filter(p => p.serviceId === activeTab);
                return (
                    <div className="animate" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {projects.length > 0 ? projects.map((project, index) => (
                            <div key={index} className="glass" style={{ overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '220px', overflow: 'hidden' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }}
                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '2rem', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: '1', lineHeight: '1.6' }}>{project.description}</p>
                                    <a
                                        href={project.button_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ textAlign: 'center', marginTop: 'auto' }}
                                    >
                                        {project.button_text}
                                    </a>
                                </div>
                            </div>
                        )) : (
                            <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '4rem', color: 'var(--text-muted)' }}>
                                <p>No projects found in this category yet. New projects launching soon!</p>
                            </div>
                        )}
                    </div>
                );
        }
    };

    return (
        <div className="services-page" style={{ paddingTop: '120px', background: 'var(--bg-color)', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate">
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our <span className="gradient-text">Services</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                        Discover our comprehensive solutions tailored for your growth.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="tabs-container" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '4rem',
                    flexWrap: 'wrap'
                }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                border: 'none',
                                background: activeTab === tab.id ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.05)',
                                color: '#fff',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                boxShadow: activeTab === tab.id ? '0 4px 15px rgba(var(--primary-rgb), 0.4)' : 'none'
                            }}
                            onMouseOver={(e) => {
                                if (activeTab !== tab.id) e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseOut={(e) => {
                                if (activeTab !== tab.id) e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div style={{ paddingBottom: '100px', minHeight: '400px' }}>
                    {renderContent()}
                </div>
            </div>

            {/* Creative Detail Modal */}
            {selectedCreative && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem'
                    }}
                    onClick={() => setSelectedCreative(null)} // Close on background click
                >
                    <div
                        className="glass"
                        style={{
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            padding: '0',
                            display: 'grid',
                            gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 400px)',
                            gap: '0',
                            borderRadius: '20px',
                            position: 'relative',
                            animation: 'fadeIn 0.3s ease'
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent close on content click
                    >
                        <button
                            onClick={() => setSelectedCreative(null)}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'rgba(0,0,0,0.5)',
                                border: 'none',
                                color: '#fff',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            ×
                        </button>

                        <div style={{ background: '#000' }}>
                            <img
                                src={selectedCreative.creative_image}
                                alt={selectedCreative.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    display: 'block'
                                }}
                            />
                        </div>

                        <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: 'auto' }}>
                                <span style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {selectedCreative.category}
                                </span>
                                <h2 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>{selectedCreative.title}</h2>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    {selectedCreative.description}
                                </p>
                            </div>

                            <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    Posted on {selectedCreative.posted_date}
                                </span>
                                <button
                                    onClick={() => setSelectedCreative(null)}
                                    className="btn btn-outline"
                                    style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                                >
                                    Back to Gallery
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>
                {`
                    @media (max-width: 768px) {
                        .glass[style*="grid-template-columns: minmax(300px, 1fr) minmax(300px, 400px)"] {
                            grid-template-columns: 1fr !important;
                        }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                `}
            </style>
        </div>
    );
};

export default ServicesLanding;
