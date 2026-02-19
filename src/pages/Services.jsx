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
        tag: 'Most Popular',
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
        color: '#c9a84c',
        gradient: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.02) 100%)',
    },
    {
        Icon: Baby,
        tag: 'Child Safe',
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
        color: '#7ecfde',
        gradient: 'linear-gradient(135deg, rgba(126,207,222,0.10) 0%, rgba(126,207,222,0.01) 100%)',
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
        color: '#9e7ecf',
        gradient: 'linear-gradient(135deg, rgba(158,126,207,0.10) 0%, rgba(158,126,207,0.01) 100%)',
    },
    {
        Icon: Stethoscope,
        tag: 'Specialist Care',
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
        color: '#cf7e7e',
        gradient: 'linear-gradient(135deg, rgba(207,126,126,0.10) 0%, rgba(207,126,126,0.01) 100%)',
    },
];

export default function Services() {
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
                    >What We Offer</motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontWeight: 600, lineHeight: 1.1,
                            color: 'var(--text-primary)', marginBottom: '24px',
                        }}
                    >
                        Services Tailored to<br />
                        <span className="gradient-text">Every Traveler's Need</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}
                    >
                        Whether it's a grandparent visiting family, a child going to school, or a patient seeking treatment — we have a dedicated service package for them.
                    </motion.p>
                </div>
            </section>

            {/* SERVICE CARDS */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                        {services.map(({ Icon, tag, title, subtitle, desc, features, color, gradient }, i) => (
                            <motion.div
                                key={title}
                                {...fadeUp(i * 0.1)}
                                style={{
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    background: gradient,
                                    backdropFilter: 'blur(12px)',
                                    overflow: 'hidden',
                                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                }}
                                whileHover={{
                                    borderColor: `${color}40`,
                                    boxShadow: `0 20px 60px ${color}10`,
                                    y: -4,
                                }}
                            >
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: i % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr',
                                    minHeight: 280,
                                }}>
                                    {/* Icon Side */}
                                    <div
                                        style={{
                                            order: i % 2 === 0 ? 0 : 1,
                                            background: `radial-gradient(circle at center, ${color}12 0%, transparent 70%)`,
                                            borderRight: i % 2 === 0 ? `1px solid rgba(255,255,255,0.04)` : 'none',
                                            borderLeft: i % 2 !== 0 ? `1px solid rgba(255,255,255,0.04)` : 'none',
                                            display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', justifyContent: 'center',
                                            padding: '48px 40px', gap: '20px',
                                        }}
                                    >
                                        <div style={{
                                            width: 80, height: 80, borderRadius: '20px',
                                            background: `${color}15`,
                                            border: `1px solid ${color}30`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <Icon size={36} color={color} />
                                        </div>
                                        <span style={{
                                            padding: '5px 14px', borderRadius: '50px',
                                            background: `${color}15`, border: `1px solid ${color}30`,
                                            color: color, fontSize: '0.7rem', letterSpacing: '0.12em',
                                            textTransform: 'uppercase', fontWeight: 600,
                                        }}>{tag}</span>
                                    </div>

                                    {/* Content Side */}
                                    <div style={{ padding: '48px 48px', order: i % 2 === 0 ? 1 : 0 }}>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '8px' }}>{subtitle}</div>
                                        <h3 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: 'clamp(1.4rem,3vw,1.8rem)',
                                            fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px',
                                        }}>{title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '28px' }}>{desc}</p>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '32px' }}>
                                            {features.map(f => (
                                                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                                    <Check size={14} color={color} style={{ marginTop: 3, flexShrink: 0 }} />
                                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link to="/booking" style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                                            padding: '11px 24px', borderRadius: '50px',
                                            border: `1px solid ${color}40`, color: color,
                                            textDecoration: 'none', fontSize: '0.8rem',
                                            letterSpacing: '0.06em', textTransform: 'uppercase',
                                            background: `${color}08`,
                                            transition: 'all 0.25s ease',
                                        }}
                                            onMouseEnter={e => { e.currentTarget.style.background = `${color}18`; e.currentTarget.style.borderColor = color; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = `${color}08`; e.currentTarget.style.borderColor = `${color}40`; }}
                                        >
                                            Book This Service <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section style={{ padding: '60px 0 100px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeUp()}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1rem' }}>
                            Not sure which service fits? Our team will help you choose.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-outline">Talk to Us</Link>
                            <Link to="/pricing" className="btn btn-gold">See Pricing <ArrowRight size={16} /></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </motion.div>
    );
}
