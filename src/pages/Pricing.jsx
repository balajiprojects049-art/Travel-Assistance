import { motion } from 'framer-motion';
import { Check, Zap, Crown, Star, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const plans = [
    {
        Icon: Zap,
        name: 'Essential',
        tagline: 'Safe & Simple',
        price: '$299',
        period: 'per journey',
        highlight: false,
        accentColor: 'rgba(74,141,232,0.8)',
        borderColor: 'rgba(26,86,176,0.3)',
        bgGradient: 'linear-gradient(145deg, rgba(10,22,50,0.8) 0%, rgba(4,8,24,0.95) 100%)',
        features: [
            'One professional companion guide',
            'Airport meet & assist (departure)',
            'In-flight check-in calls',
            'Destination arrival assistance',
            'Family SMS updates (3 per journey)',
            'Basic travel insurance coordination',
            'Standard next-day booking',
        ],
        notIncluded: ['Lounge access', 'Priority boarding', 'Dedicated account manager'],
    },
    {
        Icon: Star,
        name: 'Premium',
        tagline: 'Most Popular Choice',
        price: '$549',
        period: 'per journey',
        highlight: true,
        accentColor: '#c8102e',
        borderColor: 'rgba(200,16,46,0.45)',
        bgGradient: 'linear-gradient(145deg, rgba(40,5,15,0.9) 0%, rgba(15,5,20,0.97) 100%)',
        features: [
            'Senior specialist or child-care guide',
            'Full door-to-door accompaniment',
            'Priority check-in & security assistance',
            'Premium airport lounge access',
            'Priority boarding & seat selection',
            'Hourly family WhatsApp/SMS updates',
            'Comprehensive travel insurance',
            '24/7 emergency support hotline',
            '48-hour advance booking',
        ],
        notIncluded: ['Medical-grade support'],
    },
    {
        Icon: Crown,
        name: 'Elite',
        tagline: 'White-Glove Experience',
        price: '$949',
        period: 'per journey',
        highlight: false,
        accentColor: 'rgba(74,141,232,0.8)',
        borderColor: 'rgba(26,86,176,0.3)',
        bgGradient: 'linear-gradient(145deg, rgba(10,22,50,0.8) 0%, rgba(4,8,24,0.95) 100%)',
        features: [
            'Medically trained or ultra-premium guide',
            'Private transfer from home to airport',
            'VIP lounge suite access',
            'Priority immigration fast-track',
            'Real-time live tracking app access',
            'Dedicated 24/7 account manager',
            'Medical documentation & coordination',
            'Post-arrival wellness check (3 days)',
            'Hotel/hospital check-in assistance',
            'Unlimited journey re-planning',
        ],
        notIncluded: [],
    },
];

const feeBreakdown = [
    { item: 'Guide Service Fee', desc: 'Compensation for the professional companion guide', note: 'Included in package price' },
    { item: "Guide's Flight Tickets (Round Trip)", desc: 'Economy/Business return flight for the guide', note: 'Calculated separately based on route' },
    { item: 'Travel Assistance Fees', desc: 'Airport service charges, lounge, transfers, etc.', note: 'Included in Premium & Elite' },
    { item: 'Travel Insurance', desc: 'Comprehensive international travel coverage', note: 'Included from Premium tier' },
];

export default function Pricing() {
    return (
        <motion.div {...PAGE_TRANSITION} className="page-container">

            {/* HERO */}
            <section style={{
                minHeight: '55vh',
                display: 'flex', alignItems: 'center',
                background: 'linear-gradient(155deg, rgba(2,6,16,0.96) 0%, rgba(4,8,26,0.85) 50%, rgba(8,0,16,0.95) 100%), url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2560&auto=format&fit=crop")',
                backgroundSize: 'cover', backgroundPosition: 'center',
                padding: '100px 0 60px',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,176,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gradient-red-h)' }} />

                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <span className="section-eyebrow">Transparent Pricing</span>
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
                        Simple, Clear Pricing.<br />
                        <span style={{
                            background: 'linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>No Hidden Surprises.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.85 }}
                    >
                        Every package includes guide service fees and 24/7 support. Flight tickets for the guide are calculated separately based on your specific route.
                    </motion.p>
                </div>
            </section>

            {/* PRICING CARDS */}
            <section className="section" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px', alignItems: 'start' }}>
                        {plans.map(({ Icon, name, tagline, price, period, highlight, accentColor, borderColor, bgGradient, features, notIncluded }, i) => (
                            <motion.div
                                key={name}
                                {...fadeUp(i * 0.15)}
                                style={{
                                    borderRadius: '12px',
                                    border: `1px solid ${borderColor}`,
                                    background: bgGradient,
                                    backdropFilter: 'blur(20px)',
                                    padding: '48px 36px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transform: highlight ? 'scale(1.03)' : 'scale(1)',
                                    zIndex: highlight ? 2 : 1,
                                }}
                                whileHover={{ y: -8, boxShadow: `0 30px 80px ${accentColor}20` }}
                            >
                                {/* Top accent line */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                                    background: highlight
                                        ? 'linear-gradient(90deg, var(--red), var(--red-bright))'
                                        : 'linear-gradient(90deg, var(--blue), var(--blue-light))',
                                }} />

                                {highlight && (
                                    <div style={{
                                        position: 'absolute', top: 20, right: 20,
                                        padding: '4px 14px', borderRadius: '2px',
                                        background: 'rgba(200,16,46,0.15)', border: '1px solid rgba(200,16,46,0.4)',
                                        color: 'var(--red-light)', fontSize: '0.62rem', letterSpacing: '0.15em',
                                        textTransform: 'uppercase', fontFamily: 'var(--font-royal)',
                                    }}>Most Popular</div>
                                )}

                                {/* Background glow */}
                                <div style={{
                                    position: 'absolute', top: '-30%', right: '-20%',
                                    width: 200, height: 200, borderRadius: '50%',
                                    background: `radial-gradient(circle, ${accentColor}08 0%, transparent 70%)`,
                                    pointerEvents: 'none',
                                }} />

                                <div style={{
                                    width: 54, height: 54, borderRadius: '4px',
                                    background: highlight ? 'rgba(200,16,46,0.12)' : 'rgba(26,86,176,0.12)',
                                    border: `1px solid ${borderColor}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '22px',
                                }}>
                                    <Icon size={22} color={highlight ? 'var(--red)' : 'var(--blue-light)'} />
                                </div>

                                <div style={{ fontFamily: 'var(--font-royal)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '5px', letterSpacing: '0.06em' }}>{name}</div>
                                <div style={{ color: highlight ? 'var(--red)' : 'var(--blue-light)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '28px', fontFamily: 'var(--font-royal)' }}>{tagline}</div>

                                <div style={{ marginBottom: '28px', paddingBottom: '24px', borderBottom: `1px solid ${borderColor}` }}>
                                    <span style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(2.6rem, 4vw, 3.2rem)',
                                        fontWeight: 600, color: 'white',
                                    }}>{price}</span>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginLeft: '8px' }}>{period}</span>
                                </div>

                                <div style={{ marginBottom: '32px' }}>
                                    {features.map(f => (
                                        <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                                            <div style={{
                                                width: 18, height: 18, borderRadius: '2px',
                                                background: highlight ? 'rgba(200,16,46,0.15)' : 'rgba(26,86,176,0.15)',
                                                border: `1px solid ${borderColor}`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
                                            }}>
                                                <Check size={10} color={highlight ? 'var(--red)' : 'var(--blue-light)'} strokeWidth={3} />
                                            </div>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.5 }}>{f}</span>
                                        </div>
                                    ))}
                                    {notIncluded.map(f => (
                                        <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', opacity: 0.3 }}>
                                            <div style={{ width: 18, height: 18, borderRadius: '2px', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0, marginTop: 2 }} />
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5, textDecoration: 'line-through' }}>{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/booking"
                                    className={highlight ? 'btn btn-gold' : 'btn btn-outline'}
                                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.75rem' }}
                                >
                                    Book {name} <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEE BREAKDOWN */}
            <section className="section" style={{ background: 'linear-gradient(180deg, #040a18 0%, #02050f 100%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container-narrow">
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <div className="ornament-divider"><span>Breakdown</span></div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--text-primary)' }}>
                            What's Included in{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>the Price?</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '14px', fontSize: '0.9rem' }}>Full transparency on how our pricing is structured — no surprises.</p>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {feeBreakdown.map(({ item, desc, note }, i) => (
                            <motion.div
                                key={item}
                                {...fadeUp(i * 0.1)}
                                className="glass-card"
                                style={{
                                    padding: '24px 36px',
                                    display: 'flex', alignItems: 'center',
                                    gap: '24px', flexWrap: 'wrap', justifyContent: 'space-between',
                                    borderLeft: `3px solid ${i % 2 === 0 ? 'var(--red)' : 'var(--blue)'}`,
                                    borderRadius: '0 10px 10px 0',
                                }}
                            >
                                <div style={{ flex: '1 1 200px' }}>
                                    <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.95rem', fontWeight: 600, color: 'white', marginBottom: '5px', letterSpacing: '0.03em' }}>{item}</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{desc}</div>
                                </div>
                                <div style={{
                                    padding: '6px 18px', borderRadius: '2px',
                                    border: `1px solid ${i % 2 === 0 ? 'rgba(200,16,46,0.35)' : 'rgba(26,86,176,0.35)'}`,
                                    background: i % 2 === 0 ? 'rgba(200,16,46,0.08)' : 'rgba(26,86,176,0.08)',
                                    color: i % 2 === 0 ? 'var(--red-light)' : 'var(--blue-light)',
                                    fontSize: '0.72rem', whiteSpace: 'nowrap',
                                    fontFamily: 'var(--font-royal)', letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                }}>{note}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Note box */}
                    <motion.div {...fadeUp()} style={{ marginTop: '40px' }}>
                        <div className="glass-card" style={{
                            padding: '32px 40px', borderLeft: '3px solid var(--blue)',
                            borderRadius: '0 10px 10px 0', display: 'flex', alignItems: 'flex-start', gap: '16px',
                        }}>
                            <Phone size={18} color="var(--red)" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.88rem' }}>
                                <strong style={{ color: 'var(--blue-pale)', fontFamily: 'var(--font-royal)', letterSpacing: '0.03em' }}>Note on Guide Flight Tickets: </strong>
                                The guide's round-trip flight tickets are calculated separately and depend on your specific route, airline, and travel dates. Our team will provide a complete quote including all fees during your consultation call — with no surprises at checkout.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
}
