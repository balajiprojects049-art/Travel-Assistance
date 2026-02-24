import { motion } from 'framer-motion';
import { Heart, Baby, GraduationCap, Stethoscope, ArrowRight, Check } from 'lucide-react';
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

const services = [
    {
        Icon: Heart,
        tag: 'Most Requested',
        title: 'Senior Citizen Travel Assistance',
        subtitle: 'For travelers aged 60 and above',
        desc: 'Our most in-demand service. We ensure elderly travelers are met at departure, assisted through every step, kept comfortable during flight, and warmly handed over on arrival.',
        features: [
            'Wheelchair & mobility assistance',
            'Medication management throughout flight',
            'Premium lounge access included',
            'Dietary needs coordinated with airline',
            'Family updates at every major step',
            'Fully trained senior-care specialist guides',
        ],
        accentColor: '#c8102e',
    },
    {
        Icon: Baby,
        tag: 'Child Safe Certified',
        title: 'Children Travel Companion',
        subtitle: 'For unaccompanied minors aged 5–17',
        desc: 'Sending your child abroad can feel daunting. Our certified child-care companions make it a safe, even exciting adventure — with constant communication to parents.',
        features: [
            'DBS-checked child protection certified guides',
            'Fun, engaging travel experience for kids',
            'Meals, snacks & comfort handled',
            'Hourly parent notifications via app',
            'Zero-transfer guarantee (no missed connections)',
            'Destination family/school handover confirmation',
        ],
        accentColor: '#1a56b0',
    },
    {
        Icon: GraduationCap,
        tag: 'Student Focused',
        title: 'Student International Travel Help',
        subtitle: 'For first-time overseas students',
        desc: 'Navigate a new country for the first time with confidence. Our student packages include arrival orientation, SIM card setup, accommodation check-in, and more.',
        features: [
            'University liaison coordination',
            'Arrival city orientation included',
            'SIM card & transport card setup',
            'First-week check-in wellness calls',
            'Accommodation & campus handover',
            'Cultural adjustment introduction',
        ],
        accentColor: '#c8102e',
    },
    {
        Icon: Stethoscope,
        tag: 'Specialist Medical Care',
        title: 'Medical Travel Support',
        subtitle: 'For patients requiring special medical care',
        desc: 'Traveling for treatment is already stressful. Our medically trained companions coordinate with airlines, hospitals, and insurance to ensure a seamless, dignified journey.',
        features: [
            'Medically trained guide with first-aid cert',
            'Hospital pre-arrival coordination',
            'Travel insurance documentation support',
            'Pharmacy & prescription management',
            'Wheelchair & stretcher arrangement',
            'Post-treatment return journey planned',
        ],
        accentColor: '#1a56b0',
    },
];

export default function Services() {
    return (
        <motion.div {...PAGE_TRANSITION} className="page-container">

            {/* HERO */}
            <section style={{
                minHeight: '55vh',
                display: 'flex', alignItems: 'center',
                background: 'linear-gradient(155deg, rgba(2,6,16,0.96) 0%, rgba(4,8,26,0.85) 50%, rgba(8,0,16,0.95) 100%), url("https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2560&auto=format&fit=crop")',
                backgroundSize: 'cover', backgroundPosition: 'center',
                padding: '100px 0 60px',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,176,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gradient-red-h)' }} />

                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <span className="section-eyebrow">What We Offer</span>
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
                        Services Tailored to<br />
                        <span style={{
                            background: 'linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Every Traveler's Need</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.85 }}
                    >
                        Whether it's a grandparent visiting family, a child going to school, or a patient seeking treatment — we have a dedicated service package for them.
                    </motion.p>
                </div>
            </section>

            {/* SERVICE CARDS */}
            <section className="section" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {services.map(({ Icon, tag, title, subtitle, desc, features, accentColor }, i) => (
                            <motion.div
                                key={title}
                                {...fadeUp(i * 0.08)}
                                style={{
                                    borderRadius: '12px',
                                    border: `1px solid rgba(255,255,255,0.07)`,
                                    background: 'linear-gradient(145deg, rgba(10,22,50,0.8) 0%, rgba(4,8,24,0.95) 100%)',
                                    backdropFilter: 'blur(16px)',
                                    overflow: 'hidden',
                                    transition: 'all 0.35s ease',
                                    position: 'relative',
                                }}
                                whileHover={{
                                    borderColor: `${accentColor}35`,
                                    boxShadow: `0 20px 60px ${accentColor}12`,
                                    y: -4,
                                }}
                            >
                                {/* Top accent line */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                                    background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                                }} />

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: i % 2 === 0 ? '280px 1fr' : '1fr 280px',
                                    minHeight: 280,
                                }}>
                                    {/* Icon Side */}
                                    <div style={{
                                        order: i % 2 === 0 ? 0 : 1,
                                        background: `radial-gradient(circle at center, ${accentColor}10 0%, transparent 70%)`,
                                        borderRight: i % 2 === 0 ? `1px solid rgba(255,255,255,0.05)` : 'none',
                                        borderLeft: i % 2 !== 0 ? `1px solid rgba(255,255,255,0.05)` : 'none',
                                        display: 'flex', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                        padding: '48px 40px', gap: '20px',
                                    }}>
                                        <div style={{
                                            width: 84, height: 84, borderRadius: '8px',
                                            background: `${accentColor}12`,
                                            border: `1px solid ${accentColor}30`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            boxShadow: `0 8px 32px ${accentColor}15`,
                                        }}>
                                            <Icon size={36} color={accentColor} />
                                        </div>
                                        <span style={{
                                            padding: '6px 16px', borderRadius: '2px',
                                            background: `${accentColor}12`, border: `1px solid ${accentColor}30`,
                                            color: accentColor, fontSize: '0.65rem', letterSpacing: '0.16em',
                                            textTransform: 'uppercase', fontWeight: 600,
                                            fontFamily: 'var(--font-royal)',
                                        }}>{tag}</span>
                                    </div>

                                    {/* Content Side */}
                                    <div style={{ padding: '48px 52px', order: i % 2 === 0 ? 1 : 0 }}>
                                        <div style={{
                                            fontSize: '0.7rem', letterSpacing: '0.18em', marginBottom: '10px',
                                            color: 'var(--text-muted)', textTransform: 'uppercase',
                                            fontFamily: 'var(--font-royal)',
                                        }}>{subtitle}</div>
                                        <h3 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                            fontWeight: 500, color: 'var(--text-primary)', marginBottom: '18px',
                                        }}>{title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.85, marginBottom: '28px' }}>{desc}</p>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px', marginBottom: '32px' }}>
                                            {features.map(f => (
                                                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                                    <Check size={13} color={accentColor} style={{ marginTop: 3, flexShrink: 0 }} />
                                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link to="/booking" style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                                            padding: '12px 26px', borderRadius: '3px',
                                            border: `1px solid ${accentColor}40`, color: accentColor,
                                            textDecoration: 'none', fontSize: '0.75rem',
                                            letterSpacing: '0.12em', textTransform: 'uppercase',
                                            background: `${accentColor}08`,
                                            transition: 'all 0.25s ease',
                                            fontFamily: 'var(--font-royal)',
                                        }}
                                            onMouseEnter={e => { e.currentTarget.style.background = `${accentColor}18`; e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = `${accentColor}08`; e.currentTarget.style.borderColor = `${accentColor}40`; e.currentTarget.style.transform = 'none'; }}
                                        >
                                            Book This Service <ArrowRight size={13} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section style={{ padding: '60px 0 100px', background: 'linear-gradient(180deg, #040a18 0%, #020610 100%)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeUp()}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '1rem' }}>
                            Not sure which service fits? Our team will help you choose.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-outline">Talk to Us</Link>
                            <Link to="/pricing" className="btn btn-gold">See Pricing <ArrowRight size={15} /></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .service-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </motion.div>
    );
}
