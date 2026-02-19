import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Star, Users, Globe, Award, ChevronDown } from 'lucide-react';

const PAGE_TRANSITION = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: 'easeInOut' },
};

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const stats = [
    { value: '12,400+', label: 'Safe Journeys Completed' },
    { value: '68', label: 'Countries Served' },
    { value: '430+', label: 'Professional Guides' },
    { value: '99.8%', label: 'Customer Satisfaction' },
];

const highlights = [
    { Icon: Shield, title: 'Verified Companions', desc: 'Every guide is background-checked, licensed, and certified internationally.' },
    { Icon: Globe, title: 'Global Network', desc: 'We operate across 68 countries — from departure to destination, door to door.' },
    { Icon: Clock, title: '24/7 Support', desc: 'Round-the-clock emergency support team always reachable for peace of mind.' },
    { Icon: Award, title: 'Luxury Experience', desc: 'Premium airport lounges, priority boarding, and white-glove assistance included.' },
];

const testimonials = [
    {
        name: 'Margaret Collins',
        origin: 'New York → London',
        text: 'My 82-year-old mother traveled alone for the first time in decades. SafeJourney made it completely stress-free. The guide was incredible — warm, professional, and caring.',
        rating: 5,
    },
    {
        name: 'Rajiv Sharma',
        origin: 'Delhi → Toronto',
        text: 'Sending my daughter overseas for university was terrifying. SafeJourney not only got her there safely but made her feel completely at home from day one.',
        rating: 5,
    },
    {
        name: 'Dr. Amara Mensah',
        origin: 'Accra → Dubai',
        text: 'The medical travel support was outstanding. My father needed special assistance throughout, and the guide handled everything with professionalism and compassion.',
        rating: 5,
    },
];

function Testimonial({ item, i }) {
    return (
        <motion.div
            {...fadeUp(i * 0.15)}
            className="glass-card"
            style={{ padding: '36px', flex: '1 1 300px', minWidth: 280 }}
        >
            <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                {Array(item.rating).fill(0).map((_, j) => (
                    <Star key={j} size={14} fill="var(--gold)" color="var(--gold)" />
                ))}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic' }}>
                "{item.text}"
            </p>
            <div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{item.name}</div>
                <div style={{ color: 'var(--gold)', fontSize: '0.75rem', marginTop: '4px', letterSpacing: '0.06em' }}>{item.origin}</div>
            </div>
        </motion.div>
    );
}

export default function Home() {
    return (
        <motion.div {...PAGE_TRANSITION} style={{ minHeight: '100vh' }}>

            {/* ===== HERO ===== */}
            <section style={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
                background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201,168,76,0.06) 0%, transparent 60%), var(--bg-dark)',
            }}>
                {/* Decorative orbs */}
                <div style={{
                    position: 'absolute', width: 600, height: 600,
                    borderRadius: '50%', top: '-20%', right: '-15%',
                    background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', width: 400, height: 400,
                    borderRadius: '50%', bottom: '5%', left: '-10%',
                    background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />

                {/* Animated grid lines */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
                    backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }} />

                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '6px 18px', borderRadius: '50px',
                            border: '1px solid rgba(201,168,76,0.3)',
                            background: 'rgba(201,168,76,0.06)',
                            color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em',
                            textTransform: 'uppercase', marginBottom: '32px',
                        }}>
                            <Globe size={12} /> Trusted Globally · 68 Countries
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                            fontWeight: 600,
                            lineHeight: 1.1,
                            color: 'var(--text-primary)',
                            marginBottom: '28px',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        We Travel With<br />
                        <span className="gradient-text">Your Loved Ones</span><br />
                        <em style={{ fontWeight: 300 }}>Safely Across Borders</em>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{
                            color: 'var(--text-secondary)',
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            maxWidth: 580, margin: '0 auto 48px',
                            lineHeight: 1.8,
                        }}
                    >
                        Premium travel companions for senior citizens, children, and first-time international travelers.
                        Your loved ones are in expert hands — every step of the journey.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <Link to="/booking" className="btn btn-gold">
                            Book a Companion <ArrowRight size={16} />
                        </Link>
                        <Link to="/how-it-works" className="btn btn-outline">
                            Explore Service
                        </Link>
                    </motion.div>

                    {/* Scroll cue */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                        style={{ marginTop: 64, color: 'var(--text-muted)' }}
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className="section-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', justifyContent: 'center' }}>
                        {stats.map(({ value, label }, i) => (
                            <motion.div
                                key={label}
                                {...fadeUp(i * 0.1)}
                                style={{
                                    flex: '1 1 180px', textAlign: 'center',
                                    padding: '24px 20px',
                                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                }}
                            >
                                <div style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                    fontWeight: 600,
                                    background: 'var(--gradient-gold)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '6px',
                                }}>{value}</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.08em' }}>{label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HIGHLIGHTS ===== */}
            <section className="section">
                <div className="container">
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                            Why Families <span className="gradient-text">Trust Us</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto' }}>
                            We've built our service on four uncompromising pillars that make us the world's most trusted travel companion service.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                        {highlights.map(({ Icon, title, desc }, i) => (
                            <motion.div
                                key={title}
                                {...fadeUp(i * 0.12)}
                                className="glass-card"
                                style={{ padding: '36px 28px' }}
                                whileHover={{ y: -6 }}
                            >
                                <div style={{
                                    width: 52, height: 52, borderRadius: '12px',
                                    background: 'rgba(201,168,76,0.08)',
                                    border: '1px solid rgba(201,168,76,0.15)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '20px',
                                }}>
                                    <Icon size={22} color="var(--gold)" />
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>{title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== JOURNEY STRIP ===== */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 50%, rgba(201,168,76,0.04) 100%)',
                borderTop: '1px solid rgba(201,168,76,0.08)',
                borderBottom: '1px solid rgba(201,168,76,0.08)',
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '64px', flexWrap: 'wrap' }}>
                    <motion.div {...fadeUp()} style={{ flex: '1 1 400px' }}>
                        <div className="gold-divider" style={{ marginBottom: 20 }} />
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: 1.2 }}>
                            Your Loved One's Journey,<br />
                            <span className="gradient-text">Our Responsibility</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px' }}>
                            From the moment they check in at their home airport to the warm handover at the destination — a dedicated, multilingual guide stays by their side. No stress. No confusion. No worries.
                        </p>
                        <Link to="/how-it-works" className="btn btn-outline">
                            See How It Works <ArrowRight size={16} />
                        </Link>
                    </motion.div>

                    <motion.div {...fadeUp(0.2)} style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {['Home Country Airport Check-In', 'Security & Priority Boarding', 'In-Flight Companion Care', 'Destination Immigration & Customs', 'Verified Safe Handover'].map((step, i) => (
                            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                                    background: i === 4 ? 'var(--gradient-gold)' : 'transparent',
                                    border: '1px solid rgba(201,168,76,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600,
                                }}>{i + 1}</div>
                                <div style={{
                                    flex: 1, padding: '12px 16px', borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    color: i === 4 ? 'var(--gold-light)' : 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                }}>{step}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="section">
                <div className="container">
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                            What Families <span className="gradient-text">Say About Us</span>
                        </h2>
                    </motion.div>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        {testimonials.map((item, i) => <Testimonial key={item.name} item={item} i={i} />)}
                    </div>
                </div>
            </section>

            {/* ===== CTA BANNER ===== */}
            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <motion.div
                        {...fadeUp()}
                        style={{
                            padding: '80px 60px',
                            borderRadius: '24px',
                            background: 'radial-gradient(ellipse 70% 80% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 60%)',
                            border: '1px solid rgba(201,168,76,0.15)',
                            textAlign: 'center',
                        }}
                    >
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                            Ready to Book a <span className="gradient-text">Travel Companion?</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
                            Join 12,400+ families who've trusted SafeJourney. Your loved one deserves a safe, dignified journey.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/booking" className="btn btn-gold">
                                Book Now <ArrowRight size={16} />
                            </Link>
                            <Link to="/pricing" className="btn btn-outline">View Pricing</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
}
