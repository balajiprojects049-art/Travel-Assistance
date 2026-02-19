import { motion } from 'framer-motion';
import { Check, Zap, Crown, Star, ArrowRight } from 'lucide-react';
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
        color: '#9d9080',
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
        color: '#c9a84c',
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
        color: '#e8c97e',
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
                    >Transparent Pricing</motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontWeight: 600, lineHeight: 1.1,
                            color: 'var(--text-primary)', marginBottom: '24px',
                        }}
                    >
                        Simple, Clear Pricing.<br />
                        <span className="gradient-text">No Hidden Surprises.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}
                    >
                        Every package includes guide service fees and 24/7 support. Flight tickets for the guide are calculated separately based on your specific route.
                    </motion.p>
                </div>
            </section>

            {/* PRICING CARDS */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'start' }}>
                        {plans.map(({ Icon, name, tagline, price, period, highlight, color, features, notIncluded }, i) => (
                            <motion.div
                                key={name}
                                {...fadeUp(i * 0.15)}
                                style={{
                                    borderRadius: '20px',
                                    border: `1px solid ${highlight ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.06)'}`,
                                    background: highlight
                                        ? 'radial-gradient(ellipse at top, rgba(201,168,76,0.1) 0%, rgba(18,18,26,0.9) 60%)'
                                        : 'rgba(255,255,255,0.02)',
                                    backdropFilter: 'blur(16px)',
                                    padding: '44px 36px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                whileHover={{ y: -8, boxShadow: `0 30px 80px ${color}15` }}
                            >
                                {highlight && (
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                                        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                                    }} />
                                )}
                                {highlight && (
                                    <div style={{
                                        position: 'absolute', top: 20, right: 20,
                                        padding: '4px 12px', borderRadius: '50px',
                                        background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)',
                                        color: 'var(--gold)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                                    }}>Most Popular</div>
                                )}

                                <div style={{
                                    width: 52, height: 52, borderRadius: '14px',
                                    background: `${color}12`, border: `1px solid ${color}25`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '20px',
                                }}>
                                    <Icon size={22} color={color} />
                                </div>

                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{name}</div>
                                <div style={{ color: color, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>{tagline}</div>

                                <div style={{ marginBottom: '28px' }}>
                                    <span style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(2.4rem,4vw,3rem)',
                                        fontWeight: 600, color: 'var(--text-primary)',
                                    }}>{price}</span>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginLeft: '6px' }}>{period}</span>
                                </div>

                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', marginBottom: '24px' }}>
                                    {features.map(f => (
                                        <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                                            <div style={{
                                                width: 18, height: 18, borderRadius: '50%',
                                                background: `${color}15`, border: `1px solid ${color}30`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
                                            }}>
                                                <Check size={10} color={color} strokeWidth={3} />
                                            </div>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.5 }}>{f}</span>
                                        </div>
                                    ))}
                                    {notIncluded.map(f => (
                                        <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', opacity: 0.35 }}>
                                            <div style={{
                                                width: 18, height: 18, borderRadius: '50%',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                flexShrink: 0, marginTop: 2,
                                            }} />
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5, textDecoration: 'line-through' }}>{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/booking" className={highlight ? 'btn btn-gold' : 'btn btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>
                                    Book {name} <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEE BREAKDOWN */}
            <section className="section" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--text-primary)' }}>
                            What's Included in <span className="gradient-text">the Price?</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '12px', fontSize: '0.9rem' }}>Full transparency on how our pricing is structured.</p>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {feeBreakdown.map(({ item, desc, note }, i) => (
                            <motion.div
                                key={item}
                                {...fadeUp(i * 0.1)}
                                className="glass-card"
                                style={{
                                    padding: '24px 32px',
                                    display: 'flex', alignItems: 'center',
                                    gap: '24px', flexWrap: 'wrap', justifyContent: 'space-between',
                                }}
                            >
                                <div style={{ flex: '1 1 200px' }}>
                                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{item}</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{desc}</div>
                                </div>
                                <div style={{
                                    padding: '6px 16px', borderRadius: '50px',
                                    border: '1px solid rgba(201,168,76,0.3)',
                                    background: 'rgba(201,168,76,0.06)',
                                    color: 'var(--gold)', fontSize: '0.75rem', whiteSpace: 'nowrap',
                                }}>{note}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NOTE */}
            <section style={{ padding: '60px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeUp()}>
                        <div className="glass-card" style={{ padding: '40px 48px', maxWidth: 700, margin: '0 auto' }}>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>
                                <strong style={{ color: 'var(--gold-light)' }}>Note on Guide Flight Tickets:</strong> The guide's round-trip flight tickets are calculated separately and depend on your specific route, airline, and travel dates. Our team will provide a complete quote including all fees during your consultation call — with no surprises at checkout.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
}
