import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Star, Users, Globe, Award, ChevronDown, CheckCircle, Phone } from 'lucide-react';

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
    { value: '99.8%', label: 'Client Satisfaction' },
];

const highlights = [
    { Icon: Shield, title: 'Verified Companions', desc: 'Every guide is background-checked, licensed, and certified by international medical and safety boards.' },
    { Icon: Globe, title: 'Global Network', desc: 'We operate across 68 countries — from departure to destination, door to door, 365 days a year.' },
    { Icon: Clock, title: '24/7 Support', desc: 'Our round-the-clock emergency support team is always reachable, day or night, anywhere in the world.' },
    { Icon: Award, title: 'White-Glove Service', desc: 'Premium airport lounges, priority boarding, and first-class personal assistance throughout the journey.' },
];

const testimonials = [
    {
        name: 'Margaret Collins',
        origin: 'New York → London',
        text: 'My 82-year-old mother traveled alone for the first time in decades. SafeJourney made it completely stress-free. The guide was incredible — warm, professional, and truly caring.',
        rating: 5,
    },
    {
        name: 'Rajiv Sharma',
        origin: 'Delhi → Toronto',
        text: 'Sending my daughter overseas for university was terrifying. SafeJourney not only got her there safely but made her feel completely at home from day one. Exceptional service.',
        rating: 5,
    },
    {
        name: 'Dr. Amara Mensah',
        origin: 'Accra → Dubai',
        text: 'The medical travel support was outstanding. My father needed special assistance throughout, and the guide handled everything with unmatched professionalism and compassion.',
        rating: 5,
    },
];

function Testimonial({ item, i }) {
    return (
        <motion.div
            {...fadeUp(i * 0.15)}
            style={{
                padding: '40px 36px',
                flex: '1 1 300px',
                minWidth: 280,
                background: 'rgba(10, 22, 50, 0.7)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Blue accent corner */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: i === 1
                    ? 'linear-gradient(90deg, var(--red), var(--red-bright))'
                    : 'linear-gradient(90deg, var(--blue), var(--blue-light))',
            }} />

            <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                {Array(item.rating).fill(0).map((_, j) => (
                    <Star key={j} size={13} fill="var(--red)" color="var(--red)" />
                ))}
            </div>
            <p style={{
                color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.85,
                marginBottom: '28px', fontStyle: 'italic', fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
            }}>
                "{item.text}"
            </p>
            <div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem', fontFamily: 'var(--font-royal)' }}>{item.name}</div>
                <div style={{ color: 'var(--red)', fontSize: '0.72rem', marginTop: '5px', letterSpacing: '0.1em', fontFamily: 'var(--font-royal)', textTransform: 'uppercase' }}>{item.origin}</div>
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
                background: 'linear-gradient(155deg, rgba(2,6,16,0.95) 0%, rgba(4,8,26,0.88) 40%, rgba(8,0,26,0.92) 70%, rgba(2,6,16,0.98) 100%), url("https://images.unsplash.com/photo-1540339832862-4745ea98b275?q=80&w=2560&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* Deep blue mesh blobs */}
                <div style={{
                    position: 'absolute', width: 700, height: 700,
                    borderRadius: '50%', top: '-15%', right: '-10%',
                    background: 'radial-gradient(circle, rgba(26,86,176,0.12) 0%, transparent 65%)',
                    pointerEvents: 'none', animation: 'float 8s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute', width: 500, height: 500,
                    borderRadius: '50%', bottom: '-5%', left: '-8%',
                    background: 'radial-gradient(circle, rgba(200,16,46,0.09) 0%, transparent 65%)',
                    pointerEvents: 'none', animation: 'float 10s ease-in-out 2s infinite',
                }} />
                <div style={{
                    position: 'absolute', width: 300, height: 300,
                    borderRadius: '50%', top: '40%', left: '15%',
                    background: 'radial-gradient(circle, rgba(26,86,176,0.07) 0%, transparent 65%)',
                    pointerEvents: 'none',
                }} />

                {/* Fine grid overlay */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: `
                        linear-gradient(rgba(26,86,176,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(26,86,176,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: '70px 70px',
                }} />

                {/* Diagonal red accent line */}
                <div style={{
                    position: 'absolute', top: 0, left: '50%',
                    width: '1px', height: '100%',
                    background: 'linear-gradient(180deg, transparent, rgba(200,16,46,0.15), transparent)',
                    pointerEvents: 'none',
                }} />

                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 24px' }}>

                    {/* Eyebrow badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '8px 22px', borderRadius: '2px',
                            border: '1px solid rgba(200,16,46,0.35)',
                            background: 'rgba(200,16,46,0.08)',
                            color: '#ff8899', fontSize: '0.65rem', letterSpacing: '0.25em',
                            textTransform: 'uppercase', marginBottom: '36px',
                            fontFamily: 'var(--font-royal)',
                        }}>
                            <Globe size={11} /> Trusted Globally · 68 Countries
                        </span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
                            fontWeight: 500,
                            lineHeight: 1.06,
                            color: 'var(--text-primary)',
                            marginBottom: '32px',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        We Travel With<br />
                        <span style={{
                            background: 'linear-gradient(135deg, #e83050 0%, #ff6080 50%, #e83050 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Your Loved Ones</span><br />
                        <em style={{ fontWeight: 300, color: 'var(--blue-pale)', fontSize: '0.75em', letterSpacing: '0.02em' }}>
                            Safely Across Borders
                        </em>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{
                            color: 'var(--text-secondary)',
                            fontSize: 'clamp(1rem, 2vw, 1.18rem)',
                            maxWidth: 560, margin: '0 auto 52px',
                            lineHeight: 1.85, fontWeight: 300,
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
                        <Link to="/booking" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '16px 40px' }}>
                            Book a Companion <ArrowRight size={15} />
                        </Link>
                        <Link to="/how-it-works" className="btn btn-outline" style={{ fontSize: '0.78rem', padding: '16px 40px' }}>
                            How It Works
                        </Link>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        style={{
                            display: 'flex', gap: '32px', justifyContent: 'center',
                            flexWrap: 'wrap', marginTop: '52px',
                        }}
                    >
                        {['Background Verified Guides', '24/7 Emergency Support', 'ISO Certified Service'].map((t, i) => (
                            <div key={t} style={{
                                display: 'flex', alignItems: 'center', gap: '7px',
                                color: 'var(--text-secondary)', fontSize: '0.72rem',
                                letterSpacing: '0.06em', fontFamily: 'var(--font-royal)',
                                textTransform: 'uppercase',
                            }}>
                                <CheckCircle size={12} color="var(--red)" />
                                {t}
                            </div>
                        ))}
                    </motion.div>

                    {/* Scroll cue */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                        style={{ marginTop: 70, color: 'var(--text-muted)', display: 'flex', justifyContent: 'center' }}
                    >
                        <ChevronDown size={22} />
                    </motion.div>
                </div>
            </section>

            {/* ===== STATS BAR ===== */}
            <section style={{
                background: 'linear-gradient(90deg, #04081a 0%, #0a1630 50%, #04081a 100%)',
                borderTop: '1px solid rgba(200,16,46,0.2)',
                borderBottom: '1px solid rgba(26,86,176,0.15)',
                padding: '0',
            }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {stats.map(({ value, label }, i) => (
                            <motion.div
                                key={label}
                                {...fadeUp(i * 0.1)}
                                style={{
                                    flex: '1 1 180px', textAlign: 'center',
                                    padding: '40px 24px',
                                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                    position: 'relative',
                                }}
                            >
                                {i === 0 && <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                                    background: 'var(--gradient-red-h)',
                                }} />}
                                <div className="stat-number">{value}</div>
                                <div className="stat-label">{label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HIGHLIGHTS ===== */}
            <section className="section" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '72px' }}>
                        <div className="ornament-divider"><span>Excellence</span></div>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                            fontWeight: 500, color: 'var(--text-primary)', marginBottom: '18px',
                        }}>
                            Why Families{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>Trust Us</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
                            We have built our service on four uncompromising pillars that make us the world's most trusted travel companion service.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                        {highlights.map(({ Icon, title, desc }, i) => (
                            <motion.div
                                key={title}
                                {...fadeUp(i * 0.12)}
                                className="glass-card"
                                style={{ padding: '40px 30px', position: 'relative', overflow: 'hidden' }}
                                whileHover={{ y: -6 }}
                            >
                                {/* Hover top accent */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                                    background: i % 2 === 0
                                        ? 'linear-gradient(90deg, var(--red), transparent)'
                                        : 'linear-gradient(90deg, var(--blue), transparent)',
                                }} />
                                <div style={{
                                    width: 54, height: 54, borderRadius: '4px',
                                    background: i % 2 === 0 ? 'rgba(200,16,46,0.1)' : 'rgba(26,86,176,0.1)',
                                    border: `1px solid ${i % 2 === 0 ? 'rgba(200,16,46,0.25)' : 'rgba(26,86,176,0.25)'}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '22px',
                                }}>
                                    <Icon size={22} color={i % 2 === 0 ? 'var(--red)' : 'var(--blue-light)'} />
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-royal)',
                                    fontSize: '1rem', fontWeight: 600,
                                    color: 'var(--text-primary)', marginBottom: '12px',
                                    letterSpacing: '0.04em',
                                }}>{title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.75 }}>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== JOURNEY STEPS ===== */}
            <section style={{
                padding: '100px 0',
                background: 'linear-gradient(180deg, #040a18 0%, #060d20 100%)',
                borderTop: '1px solid rgba(26,86,176,0.1)',
                borderBottom: '1px solid rgba(200,16,46,0.1)',
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
                    <motion.div {...fadeUp()} style={{ flex: '1 1 400px' }}>
                        <div className="ornament-divider" style={{ justifyContent: 'flex-start', marginBottom: '24px' }}>
                            <span>Our Process</span>
                        </div>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500,
                            color: 'var(--text-primary)', marginBottom: '22px', lineHeight: 1.2,
                        }}>
                            Your Loved One's Journey,<br />
                            <span style={{
                                background: 'linear-gradient(135deg, var(--blue-light) 0%, var(--blue-pale) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>Our Responsibility</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '36px', fontSize: '0.92rem' }}>
                            From the moment they check in at their home airport to the warm handover at their destination — a dedicated, multilingual guide stays by their side. No stress. No confusion. Only peace of mind.
                        </p>
                        <Link to="/how-it-works" className="btn btn-outline">
                            See How It Works <ArrowRight size={15} />
                        </Link>
                    </motion.div>

                    <motion.div {...fadeUp(0.2)} style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {['Home Country Airport Check-In', 'Security & Priority Boarding', 'In-Flight Companion Care', 'Destination Immigration & Customs', 'Verified Safe Handover'].map((step, i) => (
                            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: 36, height: 36, borderRadius: '3px', flexShrink: 0,
                                    background: i === 4
                                        ? 'linear-gradient(135deg, var(--red), var(--red-bright))'
                                        : 'rgba(26,86,176,0.12)',
                                    border: `1px solid ${i === 4 ? 'var(--red)' : 'rgba(26,86,176,0.3)'}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.7rem',
                                    color: i === 4 ? 'white' : 'var(--blue-light)',
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-royal)',
                                    boxShadow: i === 4 ? '0 4px 20px rgba(200,16,46,0.35)' : 'none',
                                }}>{i + 1}</div>
                                <div style={{
                                    flex: 1, padding: '14px 18px', borderRadius: '4px',
                                    background: i === 4 ? 'rgba(200,16,46,0.08)' : 'rgba(26,86,176,0.06)',
                                    border: `1px solid ${i === 4 ? 'rgba(200,16,46,0.25)' : 'rgba(26,86,176,0.12)'}`,
                                    color: i === 4 ? '#ff8fa0' : 'var(--text-secondary)',
                                    fontSize: '0.83rem',
                                    fontFamily: 'var(--font-royal)',
                                    letterSpacing: '0.03em',
                                }}>{step}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="section" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <div className="ornament-divider"><span>Testimonials</span></div>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                            fontWeight: 500, color: 'var(--text-primary)', marginBottom: '16px',
                        }}>
                            What Families{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>Say About Us</span>
                        </h2>
                    </motion.div>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        {testimonials.map((item, i) => <Testimonial key={item.name} item={item} i={i} />)}
                    </div>
                </div>
            </section>

            {/* ===== CONTACT INFO STRIP (like jet-companion) ===== */}
            <section style={{
                background: 'linear-gradient(135deg, #0a1630 0%, #04081a 50%, #0a1630 100%)',
                borderTop: '1px solid rgba(200,16,46,0.2)',
                borderBottom: '1px solid rgba(26,86,176,0.2)',
                padding: '32px 0',
            }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
                        {[
                            { icon: '📍', label: 'Headquarters', value: 'New York, NY 10001 USA' },
                            { icon: '📞', label: 'Emergency Line', value: '+1 800 888 8888' },
                            { icon: '✉️', label: 'Email Us', value: 'ops@safejourney.com' },
                        ].map(({ icon, label, value }) => (
                            <div key={label} style={{
                                display: 'flex', alignItems: 'center', gap: '14px',
                                padding: '14px 28px',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: '4px',
                                background: 'rgba(255,255,255,0.02)',
                            }}>
                                <span style={{ fontSize: '1.1rem' }}>{icon}</span>
                                <div>
                                    <div style={{ fontSize: '0.6rem', color: 'var(--red)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-royal)', marginBottom: '3px' }}>{label}</div>
                                    <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 400 }}>{value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA BANNER ===== */}
            <section style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
                <div className="container">
                    <motion.div
                        {...fadeUp()}
                        style={{
                            padding: '80px 60px',
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #0a1630 0%, #04081a 50%, #0a0020 100%)',
                            border: '1px solid rgba(200,16,46,0.2)',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Decorative corners */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gradient-red-h)' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(26,86,176,0.4), transparent)' }} />

                        {/* Glow blobs */}
                        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
                        <div style={{ position: 'absolute', bottom: '-30%', left: '-10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,176,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div className="section-eyebrow" style={{ marginBottom: '28px' }}>Ready to Book</div>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500,
                                color: 'var(--text-primary)', marginBottom: '18px',
                            }}>
                                Ready to Book a{' '}
                                <span style={{
                                    background: 'linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>Travel Companion?</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 44px', lineHeight: 1.8, fontSize: '0.92rem' }}>
                                Join 12,400+ families who've trusted SafeJourney. Your loved one deserves a safe, dignified, premium journey.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                                <Link to="/booking" className="btn btn-gold" style={{ fontSize: '0.78rem', padding: '16px 40px' }}>
                                    Book Now <ArrowRight size={15} />
                                </Link>
                                <Link to="/pricing" className="btn btn-outline" style={{ fontSize: '0.78rem', padding: '16px 36px' }}>View Pricing</Link>
                                <a href="tel:+18008888888" style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    color: 'var(--blue-pale)', fontSize: '0.75rem',
                                    textDecoration: 'none', letterSpacing: '0.06em',
                                    fontFamily: 'var(--font-royal)',
                                }}>
                                    <Phone size={14} color="var(--red)" /> +1 800 888 8888
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
}
