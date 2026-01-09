import React from 'react';

const Founder = () => {
    return (
        <section className="founder-section" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background enhancement */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.05) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 0, pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="glass animate" style={{
                    padding: '4rem',
                    border: '1px solid var(--glass-border)',
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>❝</span>
                        <h3 style={{ fontSize: '2rem', lineHeight: '1.4', fontWeight: '300', fontStyle: 'italic', marginBottom: '2rem', color: '#fff' }}>
                            "Technology is not just about writing code; it's about solving real-world problems and driving meaningful growth. At Codevia, we don't just build software — we build legacies."
                        </h3>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                            <span className="gradient-text">Mr. Satya</span>
                        </h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '3px' }}>
                            Founder & CEO, Codevia Studio
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
