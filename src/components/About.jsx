import React from 'react';
import RevealTitle from './RevealTitle';

const About = () => {
    return (
        <section id="about" className="about-section" style={{ overflow: 'hidden' }}>
            <div className="container">
                <div className="about-grid">
                    <div>
                        <RevealTitle style={{ marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '2.5rem' }}>
                                We Build The <span className="gradient-text">Future</span> of Digital Business
                            </h2>
                        </RevealTitle>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }} className="animate">
                            Codevia Studio is a premier digital agency dedicated to transforming brands through high-performance technology and stunning design.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }} className="animate">
                            Our mission is to help businesses grow by delivering quality, speed, and modern solutions that stand out in today's competitive landscape.
                        </p>
                    </div>
                    <div className="glass reveal-card" style={{ padding: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)', animation: 'scanline 4s linear infinite' }}></div>
                        <h3 style={{ fontSize: '3.5rem', color: 'var(--primary-color)', marginBottom: '0.1rem', fontWeight: '800' }}>100%</h3>
                        <p style={{ fontSize: '1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600', marginBottom: '1.5rem' }}>Client Satisfaction</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Guaranteed quality and results in every single project.</p>
                        <div style={{ margin: '2rem 0', height: '1px', background: 'var(--glass-border)' }}></div>
                        <h3 style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '0.1rem', fontWeight: '800' }}>24/7</h3>
                        <p style={{ fontSize: '1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600' }}>Premium Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
