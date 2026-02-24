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
    { year: '2012', title: 'Founded in New York', desc: "SafeJourney was born from a personal experience — our founder's grandmother traveled alone and got lost in transit. We vowed to prevent that for every family." },
    { year: '2014', title: 'First International Network', desc: 'Expanded to 12 countries with 80 certified guides. Introduced our multilingual companion program across Europe and Asia.' },
    { year: '2017', title: 'Medical Travel Division', desc: 'Launched specialized medical travel support, becoming the first companion service to offer trained medical-journey assistants.' },
    { year: '2020', title: 'Global Operations', desc: 'Despite the pandemic, we served 3,200 families with strict safety protocols. Reached 40 countries with zero safety incidents.' },
    { year: '2023', title: '68 Countries · 12,400+ Journeys', desc: "Now the world's largest verified travel companion service. Serving seniors, children, students, and medical patients globally." },
];

const whyUs = [
    { Icon: Shield, title: 'Background Verified', desc: 'Every guide passes international criminal checks, language tests, and first-aid certification before joining our network.' },
    { Icon: Globe, title: 'Multilingual Guides', desc: 'Guides who speak your language — over 40 languages represented across our global team of dedicated professionals.' },
    { Icon: Heart, title: 'Compassionate Service', desc: 'We hire guides with hearts, not just credentials. Empathy and patience are our top requirements above all else.' },
    { Icon: Star, title: 'Five-Star Rated', desc: '99.8% of our clients rate us 5 stars. That number means everything to us — and we protect it fiercely every day.' },
    { Icon: Users, title: 'Family-Like Care', desc: 'Our guides treat travelers like their own family — keeping in touch, anticipating needs, and staying calm under pressure.' },
    { Icon: Award, title: 'Industry Awards', desc: 'Named Best Travel Companion Service by Global Traveler Magazine three years running (2021–2023). A recognized benchmark.' },
];

export default function About() {
    return (
        <motion.div {...PAGE_TRANSITION} className="page-container">

            {/* HERO */}
            <section style={{
                minHeight: '60vh',
                display: 'flex', alignItems: 'center',
                background: 'linear-gradient(155deg, rgba(2,6,16,0.95) 0%, rgba(4,8,26,0.85) 50%, rgba(8,0,16,0.92) 100%), url("https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?q=80&w=2560&auto=format&fit=crop")',
                backgroundSize: 'cover', backgroundPosition: 'center',
                padding: '100px 0 60px',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,176,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gradient-red-h)' }} />
                {/* Fine grid */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: 'linear-gradient(rgba(26,86,176,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,176,0.03) 1px, transparent 1px)',
                    backgroundSize: '70px 70px',
                }} />

                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <span className="section-eyebrow">Our Story</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
                            fontWeight: 500, lineHeight: 1.08,
                            color: 'var(--text-primary)', marginBottom: '28px',
                        }}
                    >
                        Built on a Simple Belief:<br />
                        <span style={{
                            background: 'linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>No One Should Travel Alone</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.85 }}
                    >
                        SafeJourney was founded by travelers, for families. Every decision we make starts with one question: Would we trust this for our own loved ones?
                    </motion.p>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="section" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                        {[
                            {
                                Icon: Target,
                                label: 'Our Mission',
                                title: 'Safe Travel for Every Person',
                                text: 'To provide world-class travel companion services that ensure every senior citizen, child, student, and medical patient can cross international borders with complete safety, dignity, and peace of mind.',
                                isRed: true,
                            },
                            {
                                Icon: Eye,
                                label: 'Our Vision',
                                title: 'A World Without Travel Anxiety',
                                text: 'We envision a world where age, language barriers, or physical limitations never stop anyone from reaching a destination safely. A world where every family trusts the journey.',
                                isRed: false,
                            },
                        ].map(({ Icon, label, title, text, isRed }, i) => (
                            <motion.div
                                key={label} {...fadeUp(i * 0.15)}
                                className="glass-card"
                                style={{ padding: '52px 44px', position: 'relative', overflow: 'hidden' }}
                                whileHover={{ y: -6 }}
                            >
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                                    background: isRed
                                        ? 'linear-gradient(90deg, var(--red), transparent)'
                                        : 'linear-gradient(90deg, var(--blue), transparent)',
                                }} />
                                <div style={{
                                    width: 58, height: 58, borderRadius: '4px',
                                    background: isRed ? 'rgba(200,16,46,0.1)' : 'rgba(26,86,176,0.1)',
                                    border: `1px solid ${isRed ? 'rgba(200,16,46,0.25)' : 'rgba(26,86,176,0.25)'}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '28px',
                                }}>
                                    <Icon size={26} color={isRed ? 'var(--red)' : 'var(--blue-light)'} />
                                </div>
                                <div style={{
                                    fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '12px',
                                    color: isRed ? 'var(--red)' : 'var(--blue-light)',
                                    fontFamily: 'var(--font-royal)',
                                }}>{label}</div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '18px' }}>{title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.88rem' }}>{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="section" style={{ background: 'linear-gradient(180deg, #040a18 0%, #02050f 100%)', borderTop: '1px solid rgba(200,16,46,0.12)', borderBottom: '1px solid rgba(26,86,176,0.12)' }}>
                <div className="container">
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '72px' }}>
                        <div className="ornament-divider"><span>Our Journey</span></div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--text-primary)' }}>
                            A Decade of{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--blue-light) 0%, var(--blue-pale) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>Safe Journeys</span>
                        </h2>
                    </motion.div>

                    <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
                        {/* Vertical line */}
                        <div style={{
                            position: 'absolute', left: '50%', top: 0, bottom: 0,
                            width: '1px',
                            background: 'linear-gradient(180deg, transparent, rgba(200,16,46,0.3) 20%, rgba(26,86,176,0.3) 80%, transparent)',
                            transform: 'translateX(-50%)',
                        }} />

                        {timeline.map(({ year, title, desc }, i) => (
                            <motion.div
                                key={year} {...fadeUp(i * 0.12)}
                                style={{
                                    display: 'flex',
                                    flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                                    gap: '40px', marginBottom: '52px',
                                    alignItems: 'center',
                                }}
                            >
                                <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                                    <div style={{
                                        fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                                        marginBottom: '8px', fontFamily: 'var(--font-royal)',
                                        color: i % 2 === 0 ? 'var(--red)' : 'var(--blue-light)',
                                    }}>{year}</div>
                                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '10px' }}>{title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.75 }}>{desc}</p>
                                </div>

                                {/* Node */}
                                <div style={{
                                    width: 44, height: 44, borderRadius: '4px', flexShrink: 0,
                                    background: i % 2 === 0
                                        ? 'linear-gradient(135deg, var(--red), var(--red-bright))'
                                        : 'linear-gradient(135deg, var(--blue), var(--blue-bright))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.75rem', fontWeight: 700, color: 'white',
                                    position: 'relative', zIndex: 1,
                                    boxShadow: i % 2 === 0
                                        ? '0 0 24px rgba(200,16,46,0.45)'
                                        : '0 0 24px rgba(26,86,176,0.45)',
                                    fontFamily: 'var(--font-royal)',
                                }}>{i + 1}</div>

                                <div style={{ flex: 1 }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="section" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '72px' }}>
                        <div className="ornament-divider"><span>Our Pillars</span></div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--text-primary)' }}>
                            Why Families Choose{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>SafeJourney</span>
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                        {whyUs.map(({ Icon, title, desc }, i) => (
                            <motion.div
                                key={title} {...fadeUp(i * 0.1)}
                                className="glass-card"
                                style={{ padding: '32px 28px', display: 'flex', gap: '18px', alignItems: 'flex-start', position: 'relative', overflow: 'hidden' }}
                                whileHover={{ y: -4 }}
                            >
                                <div style={{
                                    position: 'absolute', bottom: 0, right: 0, width: 80, height: 80, borderRadius: '50%',
                                    background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(200,16,46,0.05)' : 'rgba(26,86,176,0.05)'} 0%, transparent 70%)`,
                                }} />
                                <div style={{
                                    width: 46, height: 46, borderRadius: '4px', flexShrink: 0,
                                    background: i % 2 === 0 ? 'rgba(200,16,46,0.1)' : 'rgba(26,86,176,0.1)',
                                    border: `1px solid ${i % 2 === 0 ? 'rgba(200,16,46,0.2)' : 'rgba(26,86,176,0.2)'}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Icon size={20} color={i % 2 === 0 ? 'var(--red)' : 'var(--blue-light)'} />
                                </div>
                                <div>
                                    <h4 style={{ fontFamily: 'var(--font-royal)', fontSize: '0.9rem', fontWeight: 600, color: 'white', marginBottom: '10px', letterSpacing: '0.04em' }}>{title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.75 }}>{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </motion.div>
    );
}
