import { motion } from 'framer-motion';
import { Home, PlaneTakeoff, Users, PlaneLanding, CheckCircle, Phone, FileText, CreditCard, ArrowRight } from 'lucide-react';
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

const journeySteps = [
    {
        Icon: Phone,
        number: '01',
        title: 'Book & Consultation',
        color: '#c9a84c',
        desc: 'Fill in our easy online form with travel details. Our team contacts you within 2 hours to assign the perfect guide for your traveler\'s needs.',
        detail: ['Free 30-min consultation call', 'Guide matched to language & needs', 'All requirements documented'],
    },
    {
        Icon: FileText,
        number: '02',
        title: 'Documentation & Planning',
        color: '#e8c97e',
        desc: 'We handle all documentation — travel itinerary, special assistance requests, airport pre-registrations, and emergency contact setup.',
        detail: ['Travel itinerary created', 'Airport assistance pre-booked', 'Emergency protocol established'],
    },
    {
        Icon: Home,
        number: '03',
        title: 'Home Country Departure',
        color: '#c9a84c',
        desc: 'Your guide meets the traveler at the departure airport, handles check-in, security assistance, and priority boarding — staying by their side at all times.',
        detail: ['Met at departure terminal', 'Check-in & baggage handled', 'Priority security & boarding'],
    },
    {
        Icon: PlaneTakeoff,
        number: '04',
        title: 'In-Flight Companion Care',
        color: '#e8c97e',
        desc: 'The guide sits with or near the traveler throughout the flight, ensuring comfort, meals, medication reminders, and any anxiety support needed.',
        detail: ['Seated together on the flight', 'Meals & medication managed', 'Comfort & calm ensured'],
    },
    {
        Icon: PlaneLanding,
        number: '05',
        title: 'Destination Arrival',
        color: '#c9a84c',
        desc: 'On arrival, the guide navigates immigration, customs, and baggage collection — then safely transports the traveler to the pre-agreed meeting point.',
        detail: ['Immigration & customs handled', 'Baggage collected', 'Transported safely to destination'],
    },
    {
        Icon: CheckCircle,
        number: '06',
        title: 'Safe Handover',
        color: '#e8c97e',
        desc: 'The traveler is personally handed over to the receiving family or individual. A confirmation report is sent to you with photos and arrival confirmation.',
        detail: ['Face-to-face handover verified', 'Digital completion report sent', '24hr follow-up check-in'],
    },
];

const faqs = [
    { q: 'Who can use SafeJourney?', a: 'Our service is designed for senior citizens (60+), unaccompanied minors (5–17), first-time international travelers, and anyone requiring medical or special travel assistance.' },
    { q: 'How far in advance do I need to book?', a: 'We recommend booking at least 7 days before the travel date. However, we do offer emergency bookings with as little as 48 hours notice, subject to guide availability.' },
    { q: 'Are your guides trained for medical situations?', a: 'Yes. All guides hold at minimum a basic first-aid certificate. Our Medical Division guides are trained in advanced care protocols and travel with medical documentation.' },
    { q: 'What happens if there is a flight delay or cancellation?', a: 'Your guide stays with the traveler throughout any disruption — rebooking flights, arranging lounge access, and keeping you informed every step of the way.' },
];

export default function HowItWorks() {
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
                    >The Journey, Explained</motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontWeight: 600, lineHeight: 1.1,
                            color: 'var(--text-primary)', marginBottom: '24px',
                        }}
                    >
                        From Your Front Door<br />
                        <span className="gradient-text">To Safe Arrival</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}
                    >
                        A seamless, six-step process designed so your loved one is never alone, never confused, and always cared for.
                    </motion.p>
                </div>
            </section>

            {/* FLOW INDICATOR */}
            <section className="section-sm">
                <div className="container">
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '0', flexWrap: 'wrap', overflowX: 'auto',
                    }}>
                        {['Home Country', 'Airport Check-In', 'In-Flight', 'Arrival', 'Safe Handover'].map((label, i, arr) => (
                            <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
                                <motion.div
                                    {...fadeUp(i * 0.1)}
                                    style={{
                                        padding: '10px 20px', borderRadius: '50px',
                                        border: '1px solid rgba(201,168,76,0.3)',
                                        background: i === arr.length - 1 ? 'rgba(201,168,76,0.12)' : 'transparent',
                                        color: i === arr.length - 1 ? 'var(--gold)' : 'var(--text-secondary)',
                                        fontSize: '0.8rem', whiteSpace: 'nowrap', letterSpacing: '0.05em',
                                    }}
                                >{label}</motion.div>
                                {i < arr.length - 1 && (
                                    <ArrowRight size={14} color="rgba(201,168,76,0.3)" style={{ margin: '0 4px' }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STEPS GRID */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
                        {journeySteps.map(({ Icon, number, title, desc, detail, color }, i) => (
                            <motion.div
                                key={title}
                                {...fadeUp(i * 0.1)}
                                className="glass-card"
                                style={{ padding: '40px 32px', position: 'relative', overflow: 'hidden' }}
                                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(201,168,76,0.08)' }}
                            >
                                {/* Step number watermark */}
                                <div style={{
                                    position: 'absolute', top: 16, right: 20,
                                    fontFamily: 'var(--font-display)', fontSize: '4rem',
                                    fontWeight: 700, color: 'rgba(201,168,76,0.05)',
                                    lineHeight: 1, userSelect: 'none',
                                }}>{number}</div>

                                <div style={{
                                    width: 56, height: 56, borderRadius: '14px',
                                    background: 'rgba(201,168,76,0.08)',
                                    border: '1px solid rgba(201,168,76,0.15)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '20px',
                                }}>
                                    <Icon size={24} color={color} />
                                </div>

                                <div style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Step {number}</div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>{title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>

                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {detail.map(d => (
                                        <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <section className="section" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
                    <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <div className="gold-divider" style={{ margin: '0 auto 20px' }} />
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--text-primary)' }}>
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {faqs.map(({ q, a }, i) => (
                            <motion.div
                                key={q} {...fadeUp(i * 0.1)}
                                className="glass-card"
                                style={{ padding: '28px 32px' }}
                            >
                                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--gold-light)', marginBottom: '10px' }}>{q}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeUp()}>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                            Ready to <span className="gradient-text">Start the Journey?</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '36px' }}>Book your companion in under 5 minutes.</p>
                        <Link to="/booking" className="btn btn-gold">Book a Guide Now <ArrowRight size={16} /></Link>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
}
