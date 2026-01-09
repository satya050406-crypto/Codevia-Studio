import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{ paddingTop: '160px', paddingBottom: '120px', textAlign: 'center' }}>
            <div className="container">
                <div className="animate">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        Turning Code into <span className="gradient-text">Growth</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontWeight: '400' }}>
                        We build websites, apps and digital solutions that help businesses grow.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/services" className="btn btn-primary">View Services</Link>
                        <a href="https://wa.me/919211396141" className="btn btn-outline">WhatsApp Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
