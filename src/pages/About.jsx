import { motion } from 'framer-motion';
import { Heart, Eye, Target, Users, Globe, Shield, Award, Star } from 'lucide-react';

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

const timeline = [
    { year: '2012', title: 'Founded in New York', desc: 'SafeJourney was born from a personal experience — our founder\'s grandmother traveled alone and got lost in transit. We vowed to prevent that for every family.' },
    { year: '2014', title: 'First International Network', desc: 'Expanded to 12 countries with 80 certified guides. Introduced our multilingual companion program.' },
    { year: '2017', title: 'Medical Travel Division', desc: 'Launched specialized medical travel support, becoming the first companion service to offer trained medical-journey assistants.' },
    { year: '2020', title: 'Global Operations', desc: 'Despite the pandemic, we served 3,200 families with strict safety protocols. Reached 40 countries.' },
    { year: '2023', title: '68 Countries · 12,400+ Journeys', desc: 'Now the world\'s largest verified travel companion service. Serving seniors, children, students, and medical patients globally.' },
];

const whyUs = [
    { Icon: Shield, title: 'Background Verified', desc: 'Every guide passes international criminal checks, language tests, and first-aid certification.' },
    { Icon: Globe, title: 'Multilingual Guides', desc: 'Guides who speak your language — over 40 languages represented across our global team.' },
    { Icon: Heart, title: 'Compassionate Service', desc: 'We hire guides with hearts, not just credentials. Empathy and patience are our top requirements.' },
    { Icon: Star, title: 'Five-Star Rated', desc: '99.8% of our clients rate us 5 stars. That number means everything to us — and we protect it fiercely.' },
    { Icon: Users, title: 'Family-Like Care', desc: 'Our guides treat travelers like their own family — keeping in touch, anticipating needs, staying calm.' },
    { Icon: Award, title: 'Industry Awards', desc: 'Named Best Travel Companion Service by Global Traveler Magazine three years running (2021–2023).' },
];

export default function About() {
    return (
        <motion.div {...PAGE_TRANSITION} className="page-container">

            {/* ===== HERO ===== */}
            <section style={{
                minHeight: '60vh',
                display: 'flex', alignItems: 'center',
                background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)',
                padding: '100px 0 60px',
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    >
                        <span style={{
                            display: 'inline-block', padding: '6px 18px', borderRadius: '50px',
                            border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.06)',
                            color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em',
                            textTransform: 'uppercase', marginBottom: '28px',
                        }}>Our Story</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontWeight: 600, lineHeight: 1.1, color: 'var(--text-primary)',
                            marginBottom: '24px',
                        }}
                    >
                        Built on a Simple Belief:<br />
                        <span className="gradient-text">No One Should Travel Alone</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}
                    >
                        SafeJourney was founded by travelers, for families. Every decision we make starts with one question: Would we trust this for our own loved ones?
                    </motion.p>
                </div>
            </section>

            {/* ===== MISSION & VISION ===== */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                        {[
                            {
                                Icon: Target,
                                label: 'Our Mission',
                                title: 'Safe Travel for Every Person',
                                text: 'To provide world-class travel companion services that ensure every senior citizen, child, student, and medical patient can cross international borders with complete safety, dignity, and peace of mind.',
                            },
                            {
                                Icon: Eye,
                                label: 'Our Vision',
                                title: 'A World Without Travel Anxiety',
                                text: 'We envision a world where age, language barriers, or physical limitations never stop anyone from reaching a destination safely. A world where every family trusts the journey.',
                            },
                        ].map(({ Icon, label, title, text }, i) => (
                            <motion.div
                                key={label} {...fadeUp(i * 0.15)}
                                className="glass-card"
                                style={{ padding: '48px 40px' }}
                                whileHover={{ y: -6 }}
                            >
                                <div style={{
                                    width: 56, height: 56, borderRadius: '14px',
                                    background: 'rgba(201,168,76,0.08)',
                                    border: '1px solid rgba(201,168,76,0.15)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '24px',
                                }}>
                                    <Icon size={24} color="var(--gold)" />
                                </div>
                                <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>{label}</div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>{title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE ===== */}
            <section className="section" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="container">
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: 'var(--text-primary)' }}>
                            A Decade of <span className="gradient-text">Safe Journeys</span>
                        </h2>
                    </motion.div>

                    <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
                        {/* Vertical line */}
                        <div style={{
                            position: 'absolute', left: '50%', top: 0, bottom: 0,
                            width: 1, background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)',
                            transform: 'translateX(-50%)',
                        }} />

                        {timeline.map(({ year, title, desc }, i) => (
                            <motion.div
                                key={year} {...fadeUp(i * 0.12)}
                                style={{
                                    display: 'flex',
                                    flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                                    gap: '40px', marginBottom: '48px',
                                    alignItems: 'center',
                                }}
                            >
                                <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                                    <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>{year}</div>
                                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>{title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>{desc}</p>
                                </div>

                                {/* Node */}
                                <div style={{
                                    width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                                    background: 'var(--gradient-gold)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.7rem', fontWeight: 700, color: '#0a0a0f',
                                    position: 'relative', zIndex: 1,
                                    boxShadow: '0 0 20px rgba(201,168,76,0.4)',
                                }}>{i + 1}</div>

                                <div style={{ flex: 1 }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="section">
                <div className="container">
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: 'var(--text-primary)' }}>
                            Why Families Choose <span className="gradient-text">SafeJourney</span>
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                        {whyUs.map(({ Icon, title, desc }, i) => (
                            <motion.div
                                key={title} {...fadeUp(i * 0.1)}
                                className="glass-card"
                                style={{ padding: '32px 28px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                                whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.3)' }}
                            >
                                <div style={{
                                    width: 44, height: 44, borderRadius: '10px', flexShrink: 0,
                                    background: 'rgba(201,168,76,0.08)',
                                    border: '1px solid rgba(201,168,76,0.15)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Icon size={20} color="var(--gold)" />
                                </div>
                                <div>
                                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>{title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.7 }}>{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </motion.div>
    );
}
