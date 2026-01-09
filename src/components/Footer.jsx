import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 0 2rem', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-color)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <div className="logo" style={{ marginBottom: '1.5rem' }}>
                            CODEVIA<span className="gradient-text">STUDIO</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            Turning code into growth since 2024. Premium digital solutions for forward-thinking brands.
                        </p>
                    </div>
                    <div style={{ flex: '1', minWidth: '150px' }}>
                        <h4 style={{ marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div style={{ flex: '1', minWidth: '150px' }}>
                        <h4 style={{ marginBottom: '1.5rem' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>𝕏</a>
                            <a href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📸</a>
                            <a href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>💼</a>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    © 2026 Codevia Studio. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
