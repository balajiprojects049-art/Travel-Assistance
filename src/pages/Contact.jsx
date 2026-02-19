import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const PAGE_TRANSITION = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
};

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const contactCards = [
    { Icon: Phone, title: 'Call Us', value: '+1 (800) 723-3586', sub: 'Available 24/7 for bookings & emergencies', color: '#c9a84c' },
    { Icon: Mail, title: 'Email Us', value: 'hello@safejourney.com', sub: 'We respond within 2 hours', color: '#7ecfde' },
    { Icon: MapPin, title: 'Head Office', value: '350 Fifth Avenue, New York, NY 10001', sub: 'By appointment only', color: '#9e7ecf' },
    { Icon: Clock, title: 'Response Time', value: 'Under 2 Hours', sub: 'For all booking enquiries', color: '#cf7e7e' },
];

const socials = [
    { Icon: Instagram, label: 'Instagram', url: '#', color: '#c9a84c' },
    { Icon: Facebook, label: 'Facebook', url: '#', color: '#7ecfde' },
    { Icon: Twitter, label: 'Twitter / X', url: '#', color: '#9e7ecf' },
    { Icon: Linkedin, label: 'LinkedIn', url: '#', color: '#cf7e7e' },
];

const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: '10px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--text-primary)', fontSize: '0.9rem',
    fontFamily: 'var(--font-body)', outline: 'none',
    transition: 'border-color 0.25s ease',
};

const labelStyle = {
    display: 'block', color: 'var(--text-secondary)',
    fontSize: '0.75rem', letterSpacing: '0.08em',
    textTransform: 'uppercase', marginBottom: '8px',
};

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const update = (f, v) => setForm(p => ({ ...p, [f]: v }));
    const handleFocus = e => { e.target.style.borderColor = 'rgba(201,168,76,0.5)'; };
    const handleBlur = e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; };

    return (
        <motion.div {...PAGE_TRANSITION} className="page-container">

            {/* HERO */}
            <section style={{
                minHeight: '50vh',
                display: 'flex', alignItems: 'center',
                background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)',
                padding: '100px 0 60px',
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.span
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-block', padding: '6px 18px', borderRadius: '50px',
                            border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.06)',
                            color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em',
                            textTransform: 'uppercase', marginBottom: '28px',
                        }}
                    >We're Here to Help</motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontWeight: 600, lineHeight: 1.1,
                            color: 'var(--text-primary)', marginBottom: '24px',
                        }}
                    >
                        Get in Touch<br />
                        <span className="gradient-text">With Our Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}
                    >
                        Whether you have a question, need a custom quote, or want to discuss a special requirement — we're here 24/7.
                    </motion.p>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="section-sm">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                        {contactCards.map(({ Icon, title, value, sub, color }, i) => (
                            <motion.div
                                key={title} {...fadeUp(i * 0.1)}
                                className="glass-card"
                                style={{ padding: '28px 24px', textAlign: 'center' }}
                                whileHover={{ y: -6, boxShadow: `0 20px 50px ${color}12` }}
                            >
                                <div style={{
                                    width: 50, height: 50, borderRadius: '12px',
                                    background: `${color}12`, border: `1px solid ${color}25`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 16px',
                                }}>
                                    <Icon size={20} color={color} />
                                </div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>{title}</div>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px', lineHeight: 1.3 }}>{value}</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM + SIDE */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '48px', alignItems: 'start' }}>

                        {/* Left side */}
                        <motion.div {...fadeUp()}>
                            <div className="gold-divider" style={{ marginBottom: 20 }} />
                            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                                Send Us a <span className="gradient-text">Message</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '40px', fontSize: '0.9rem' }}>
                                Our team monitors messages around the clock. For booking enquiries, we aim to respond within 2 hours with a full consultation.
                            </p>

                            {/* Social Media */}
                            <div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>Follow Our Journey</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {socials.map(({ Icon, label, url, color }) => (
                                        <a key={label} href={url} style={{
                                            display: 'flex', alignItems: 'center', gap: '14px',
                                            padding: '14px 18px', borderRadius: '10px',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            background: 'rgba(255,255,255,0.02)',
                                            textDecoration: 'none', transition: 'all 0.25s ease',
                                        }}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}30`; e.currentTarget.style.background = `${color}06`; }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                                        >
                                            <div style={{
                                                width: 36, height: 36, borderRadius: '8px',
                                                background: `${color}12`, border: `1px solid ${color}20`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <Icon size={16} color={color} />
                                            </div>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right — Form */}
                        <motion.div {...fadeUp(0.15)}>
                            {sent ? (
                                <div className="glass-card" style={{ padding: '60px 40px', textAlign: 'center' }}>
                                    <div style={{
                                        width: 64, height: 64, borderRadius: '50%',
                                        background: 'rgba(201,168,76,0.1)', border: '2px solid rgba(201,168,76,0.4)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 20px',
                                    }}>
                                        <CheckCircle size={28} color="var(--gold)" />
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Message Sent!</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We'll get back to you within 2 hours. Thank you!</p>
                                </div>
                            ) : (
                                <form className="glass-card" style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                                    onSubmit={e => { e.preventDefault(); setSent(true); }}>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                        <div>
                                            <label style={labelStyle}>Your Name</label>
                                            <input style={inputStyle} value={form.name} onChange={e => update('name', e.target.value)}
                                                onFocus={handleFocus} onBlur={handleBlur} placeholder="Full name" required />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Email Address</label>
                                            <input type="email" style={inputStyle} value={form.email} onChange={e => update('email', e.target.value)}
                                                onFocus={handleFocus} onBlur={handleBlur} placeholder="you@example.com" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Subject</label>
                                        <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.subject} onChange={e => update('subject', e.target.value)} required>
                                            <option value="">Select a topic...</option>
                                            <option>Booking Enquiry</option>
                                            <option>Custom Quote Request</option>
                                            <option>Guide Information</option>
                                            <option>Existing Booking Support</option>
                                            <option>Business Partnership</option>
                                            <option>General Question</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Message</label>
                                        <textarea
                                            style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }}
                                            value={form.message} onChange={e => update('message', e.target.value)}
                                            onFocus={handleFocus} onBlur={handleBlur}
                                            placeholder="Tell us about your travel needs, any special requirements, or questions you have..."
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>
                                        Send Message <Send size={15} />
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MAP EMBED PLACEHOLDER */}
            <section style={{ padding: '0 0 100px' }}>
                <div className="container">
                    <motion.div
                        {...fadeUp()}
                        style={{
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            overflow: 'hidden',
                            height: 340,
                            background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(12,12,18,0.9) 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column', gap: '16px',
                        }}
                    >
                        <MapPin size={40} color="rgba(201,168,76,0.3)" />
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text-secondary)' }}>350 Fifth Avenue, New York, NY 10001</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Head Office · By Appointment Only</div>
                    </motion.div>
                </div>
            </section>

            <style>{`
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns: 1fr 1.3fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </motion.div>
    );
}
