import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section" style={{ background: 'var(--surface-color)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem' }}>
                    <div className="animate">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Let's Build Something <span className="gradient-text">Amazing</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                            Ready to take your business to the next level? Reach out to us for a free consultation.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '1.2rem' }}>📧</div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Us</p>
                                    <p style={{ fontWeight: '600' }}>hello@codevia.studio</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '1.2rem' }}>📞</div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Call Us</p>
                                    <p style={{ fontWeight: '600' }}>+1 (234) 567-890</p>
                                </div>
                            </div>
                            <a href="https://wa.me/919211396141" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                                WhatsApp Us Now
                            </a>
                        </div>
                    </div>
                    <div className="glass animate" style={{ padding: '3rem' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none' }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="How can we help?"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'none' }}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
