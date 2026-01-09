import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="animate">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            We Build The <span className="gradient-text">Future</span> of Digital Business
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Codevia Studio is a premier digital agency dedicated to transforming brands through high-performance technology and stunning design.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Our mission is to help businesses grow by delivering quality, speed, and modern solutions that stand out in today's competitive landscape.
                        </p>
                    </div>
                    <div className="glass animate" style={{ padding: '3rem', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>100%</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Client Satisfaction</p>
                        <div style={{ margin: '2rem 0', height: '1px', background: 'var(--glass-border)' }}></div>
                        <h3 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>24/7</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Expert Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
