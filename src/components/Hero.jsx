import React from 'react';
import { Link } from 'react-router-dom';
import HackerText from './HackerText';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{ paddingTop: '160px', paddingBottom: '120px', textAlign: 'center' }}>
            <div className="hero-bg-glow" />
            <div className="container">
                <div>
                    <div className="glass reveal-card" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '100px',
                        marginBottom: '2rem',
                        border: '1px solid var(--primary-glow)',
                        background: 'rgba(0, 210, 255, 0.05)'
                    }}>
                        <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}>⭐</span>
                        <span style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>100% Client Satisfaction Box</span>
                    </div>
                    <h1 className="hero-headline" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        <HackerText text="Turning Code" /> into <span className="gradient-text"><HackerText text="Growth" /></span>
                    </h1>
                    <p className="hero-text" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontWeight: '400' }}>
                        We build websites, apps and digital solutions that help businesses grow.
                    </p>
                    <div className="hero-cta" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/services" className="btn btn-primary">View Services</Link>
                        <a href="https://wa.me/919211396141" className="btn btn-outline">WhatsApp Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
