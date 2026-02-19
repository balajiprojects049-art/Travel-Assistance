import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Languages, Briefcase, Filter } from 'lucide-react';

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

const guides = [
    {
        name: 'Sofia Martinez',
        country: 'Spain → UK · USA · Canada',
        languages: ['English', 'Spanish', 'French'],
        experience: '9 years',
        specialty: 'Senior Citizens',
        rating: 5.0,
        trips: 312,
        bio: 'Former flight attendant turned travel companion. Specializes in elderly care with a warm, nurturing approach that families love.',
        initials: 'SM',
        color: '#c9a84c',
    },
    {
        name: 'Kenji Nakamura',
        country: 'Japan → USA · Australia',
        languages: ['Japanese', 'English', 'Mandarin'],
        experience: '7 years',
        specialty: 'Children',
        rating: 4.9,
        trips: 248,
        bio: 'Certified child protection specialist with a playful approach that makes kids love traveling. Parents trust Kenji completely.',
        initials: 'KN',
        color: '#7ecfde',
    },
    {
        name: 'Dr. Aisha Okonkwo',
        country: 'Nigeria → UK · Germany · UAE',
        languages: ['English', 'French', 'Hausa', 'Yoruba'],
        experience: '11 years',
        specialty: 'Medical Travel',
        rating: 5.0,
        trips: 420,
        bio: 'Registered nurse by background. Dr. Aisha brings clinical precision and extraordinary compassion to every medical journey.',
        initials: 'AO',
        color: '#cf7e7e',
    },
    {
        name: 'Priya Rajan',
        country: 'India → UK · Canada · Australia',
        languages: ['Hindi', 'Tamil', 'English', 'Kannada'],
        experience: '6 years',
        specialty: 'Students',
        rating: 4.9,
        trips: 187,
        bio: 'A former international student herself, Priya understands every anxiety and challenge of studying abroad for the first time.',
        initials: 'PR',
        color: '#9e7ecf',
    },
    {
        name: 'Marco Bianchi',
        country: 'Italy → USA · UAE · Singapore',
        languages: ['Italian', 'English', 'Spanish', 'Arabic'],
        experience: '8 years',
        specialty: 'Senior Citizens',
        rating: 4.8,
        trips: 295,
        bio: 'Marco\'s warmth and patience have made him one of our most requested senior companions. He treats every traveler like family.',
        initials: 'MB',
        color: '#c9a84c',
    },
    {
        name: 'Li Wei Chen',
        country: 'China → UK · Canada · USA',
        languages: ['Mandarin', 'Cantonese', 'English'],
        experience: '5 years',
        specialty: 'Children',
        rating: 4.9,
        trips: 162,
        bio: 'Li Wei holds a degree in child psychology and brings professional insight into making travel smooth and fun for young travelers.',
        initials: 'LC',
        color: '#7ecfde',
    },
    {
        name: 'Fatima Al-Hassan',
        country: 'UAE → UK · USA · France',
        languages: ['Arabic', 'English', 'French'],
        experience: '10 years',
        specialty: 'Medical Travel',
        rating: 5.0,
        trips: 380,
        bio: 'Fatima coordinates seamlessly with hospitals and medical teams in multiple countries, ensuring no detail is overlooked.',
        initials: 'FA',
        color: '#cf7e7e',
    },
    {
        name: 'James Osei',
        country: 'Ghana → UK · Germany · Netherlands',
        languages: ['English', 'Twi', 'French', 'German'],
        experience: '4 years',
        specialty: 'Students',
        rating: 4.8,
        trips: 98,
        bio: 'James specializes in cultural orientation for African students heading to Europe, reducing first-week anxiety dramatically.',
        initials: 'JO',
        color: '#9e7ecf',
    },
];

const specialties = ['All', 'Senior Citizens', 'Children', 'Medical Travel', 'Students'];

const colorMap = {
    'Senior Citizens': '#c9a84c',
    'Children': '#7ecfde',
    'Medical Travel': '#cf7e7e',
    'Students': '#9e7ecf',
};

export default function Guides() {
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All' ? guides : guides.filter(g => g.specialty === filter);

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
                    >430+ Verified Guides Worldwide</motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontWeight: 600, lineHeight: 1.1,
                            color: 'var(--text-primary)', marginBottom: '24px',
                        }}
                    >
                        Meet Our <span className="gradient-text">Professional Companions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}
                    >
                        Every guide is verified, trained, and passionate about safe travel. Choose below to find the perfect match.
                    </motion.p>
                </div>
            </section>

            {/* FILTER */}
            <section className="section-sm">
                <div className="container">
                    <motion.div
                        {...fadeUp()}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
                    >
                        <Filter size={16} color="var(--text-secondary)" />
                        {specialties.map(s => (
                            <button
                                key={s}
                                onClick={() => setFilter(s)}
                                style={{
                                    padding: '9px 22px', borderRadius: '50px',
                                    border: `1px solid ${filter === s ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.06)'}`,
                                    background: filter === s ? 'rgba(201,168,76,0.1)' : 'transparent',
                                    color: filter === s ? 'var(--gold)' : 'var(--text-secondary)',
                                    cursor: 'pointer', fontSize: '0.8rem',
                                    letterSpacing: '0.05em', transition: 'all 0.3s ease',
                                    fontFamily: 'var(--font-body)',
                                }}
                            >{s}</button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* GUIDE CARDS */}
            <section className="section" style={{ paddingTop: '20px' }}>
                <div className="container">
                    <motion.div
                        layout
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}
                    >
                        {filtered.map(({ name, country, languages, experience, specialty, rating, trips, bio, initials, color }, i) => (
                            <motion.div
                                key={name}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, delay: i * 0.05 }}
                                className="glass-card"
                                style={{ padding: '32px 28px', cursor: 'default' }}
                                whileHover={{ y: -8, boxShadow: `0 24px 60px ${color}12` }}
                            >
                                {/* Avatar */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: 60, height: 60, borderRadius: '50%',
                                        background: `radial-gradient(circle, ${color}30, ${color}10)`,
                                        border: `2px solid ${color}40`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                                        fontWeight: 700, color: color,
                                    }}>{initials}</div>

                                    <div>
                                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>{name}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
                                            {Array(Math.floor(rating)).fill(0).map((_, j) => (
                                                <Star key={j} size={11} fill={color} color={color} />
                                            ))}
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginLeft: '4px' }}>{rating} · {trips} trips</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Specialty tag */}
                                <div style={{ marginBottom: '16px' }}>
                                    <span style={{
                                        padding: '4px 12px', borderRadius: '50px',
                                        background: `${color}12`, border: `1px solid ${color}25`,
                                        color: color, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                                    }}>{specialty}</span>
                                </div>

                                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '8px' }}>{country}</div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '20px' }}>{bio}</p>

                                {/* Meta */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                                        <Briefcase size={12} color={color} />
                                        <span>{experience} experience</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                                        <Languages size={12} color={color} style={{ marginTop: 2, flexShrink: 0 }} />
                                        <span>{languages.join(' · ')}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
}
