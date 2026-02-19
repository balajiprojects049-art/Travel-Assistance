import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, MapPin, Calendar, Phone, FileText, CheckCircle, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const PAGE_TRANSITION = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
};

const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
    'United Arab Emirates', 'India', 'Japan', 'Singapore', 'China', 'South Africa',
    'Nigeria', 'Brazil', 'Spain', 'Italy', 'Netherlands', 'Ghana', 'Kenya', 'Pakistan',
];

const steps = [
    { id: 1, label: 'Traveler Info', Icon: User },
    { id: 2, label: 'Journey Details', Icon: MapPin },
    { id: 3, label: 'Travel Date', Icon: Calendar },
    { id: 4, label: 'Emergency', Icon: Phone },
    { id: 5, label: 'Confirmation', Icon: CheckCircle },
];

const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: '10px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--text-primary)', fontSize: '0.9rem',
    fontFamily: 'var(--font-body)',
    outline: 'none', transition: 'border-color 0.25s ease',
};

const labelStyle = {
    display: 'block', color: 'var(--text-secondary)',
    fontSize: '0.78rem', letterSpacing: '0.08em',
    textTransform: 'uppercase', marginBottom: '8px',
};

function FieldGroup({ label, children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>{label}</label>
            {children}
        </div>
    );
}

const WHATSAPP_NUMBER = '919949185581'; // +91 99491 85581

export default function Booking() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        travelerName: '', travelerAge: '', travelerType: '',
        fromCountry: '', toCountry: '', packageType: '',
        travelDate: '', returnDate: '', flexibility: '',
        emergencyName: '', emergencyPhone: '', emergencyRelation: '',
        specialNotes: '', agreeTerms: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const update = (field, value) => setForm(p => ({ ...p, [field]: value }));

    const handleFocus = e => { e.target.style.borderColor = 'rgba(201,168,76,0.5)'; };
    const handleBlur = e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; };

    const sendToWhatsApp = () => {
        const lines = [
            '🌍 *NEW BOOKING REQUEST — SafeJourney*',
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '',
            '👤 *TRAVELER DETAILS*',
            `• Name       : ${form.travelerName || 'Not provided'}`,
            `• Age        : ${form.travelerAge || 'Not provided'}`,
            `• Type       : ${form.travelerType || 'Not provided'}`,
            '',
            '✈️ *JOURNEY DETAILS*',
            `• From       : ${form.fromCountry || 'Not provided'}`,
            `• To         : ${form.toCountry || 'Not provided'}`,
            `• Package    : ${form.packageType || 'Not provided'}`,
            '',
            '📅 *TRAVEL DATES*',
            `• Travel Date: ${form.travelDate || 'Not provided'}`,
            `• Return Date: ${form.returnDate || 'Not specified'}`,
            `• Flexibility: ${form.flexibility || 'Not specified'}`,
            '',
            '🚨 *EMERGENCY CONTACT*',
            `• Name       : ${form.emergencyName || 'Not provided'}`,
            `• Relation   : ${form.emergencyRelation || 'Not provided'}`,
            `• Phone      : ${form.emergencyPhone || 'Not provided'}`,
            '',
            ...(form.specialNotes ? [
                '📝 *SPECIAL NOTES*',
                form.specialNotes,
                '',
            ] : []),
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            '_Please reply to confirm the booking and provide a quote._',
        ];

        const message = lines.join('\n');
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setSubmitted(true);
    };

    const stepsContent = {
        1: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <FieldGroup label="Traveler's Full Name">
                    <input style={inputStyle} value={form.travelerName} onChange={e => update('travelerName', e.target.value)}
                        onFocus={handleFocus} onBlur={handleBlur} placeholder="e.g. Margaret Collins" />
                </FieldGroup>
                <FieldGroup label="Traveler's Age">
                    <input style={inputStyle} type="number" value={form.travelerAge} onChange={e => update('travelerAge', e.target.value)}
                        onFocus={handleFocus} onBlur={handleBlur} placeholder="e.g. 74" />
                </FieldGroup>
                <div style={{ gridColumn: '1/-1' }}>
                    <FieldGroup label="Traveler Type">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                            {['Senior Citizen (60+)', 'Child / Minor (5-17)', 'First-Time Traveler', 'Medical Patient'].map(t => (
                                <button
                                    key={t}
                                    onClick={() => update('travelerType', t)}
                                    style={{
                                        padding: '14px 16px', borderRadius: '10px',
                                        border: `1px solid ${form.travelerType === t ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.06)'}`,
                                        background: form.travelerType === t ? 'rgba(201,168,76,0.1)' : 'transparent',
                                        color: form.travelerType === t ? 'var(--gold)' : 'var(--text-secondary)',
                                        cursor: 'pointer', fontSize: '0.82rem',
                                        textAlign: 'left', transition: 'all 0.25s ease',
                                        fontFamily: 'var(--font-body)',
                                    }}
                                >{t}</button>
                            ))}
                        </div>
                    </FieldGroup>
                </div>
            </div>
        ),
        2: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <FieldGroup label="From Country">
                    <select style={{ ...inputStyle, cursor: 'pointer' }}
                        value={form.fromCountry} onChange={e => update('fromCountry', e.target.value)}
                        onFocus={handleFocus} onBlur={handleBlur}
                    >
                        <option value="">Select departure country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </FieldGroup>
                <FieldGroup label="To Country">
                    <select style={{ ...inputStyle, cursor: 'pointer' }}
                        value={form.toCountry} onChange={e => update('toCountry', e.target.value)}
                        onFocus={handleFocus} onBlur={handleBlur}
                    >
                        <option value="">Select destination country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </FieldGroup>
                <div style={{ gridColumn: '1/-1' }}>
                    <FieldGroup label="Service Package">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                            {[
                                { name: 'Essential', price: '$299' },
                                { name: 'Premium', price: '$549' },
                                { name: 'Elite', price: '$949' },
                            ].map(({ name, price }) => (
                                <button
                                    key={name}
                                    onClick={() => update('packageType', name)}
                                    style={{
                                        padding: '18px 16px', borderRadius: '10px',
                                        border: `1px solid ${form.packageType === name ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.06)'}`,
                                        background: form.packageType === name ? 'rgba(201,168,76,0.1)' : 'transparent',
                                        color: form.packageType === name ? 'var(--gold)' : 'var(--text-secondary)',
                                        cursor: 'pointer', textAlign: 'center', transition: 'all 0.25s ease',
                                        fontFamily: 'var(--font-body)',
                                    }}
                                >
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px', color: form.packageType === name ? 'var(--gold-light)' : 'var(--text-primary)' }}>{name}</div>
                                    <div style={{ fontSize: '0.75rem' }}>{price}</div>
                                </button>
                            ))}
                        </div>
                    </FieldGroup>
                </div>
            </div>
        ),
        3: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <FieldGroup label="Travel Date">
                    <input type="date" style={inputStyle} value={form.travelDate} onChange={e => update('travelDate', e.target.value)}
                        onFocus={handleFocus} onBlur={handleBlur} />
                </FieldGroup>
                <FieldGroup label="Return Date (Optional)">
                    <input type="date" style={inputStyle} value={form.returnDate} onChange={e => update('returnDate', e.target.value)}
                        onFocus={handleFocus} onBlur={handleBlur} />
                </FieldGroup>
                <div style={{ gridColumn: '1/-1' }}>
                    <FieldGroup label="Date Flexibility">
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {['Fixed Dates', '±1 Day Flexible', '±3 Days Flexible', 'Very Flexible'].map(f => (
                                <button key={f} onClick={() => update('flexibility', f)} style={{
                                    padding: '10px 18px', borderRadius: '50px',
                                    border: `1px solid ${form.flexibility === f ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.06)'}`,
                                    background: form.flexibility === f ? 'rgba(201,168,76,0.1)' : 'transparent',
                                    color: form.flexibility === f ? 'var(--gold)' : 'var(--text-secondary)',
                                    cursor: 'pointer', fontSize: '0.8rem', transition: 'all 0.25s ease',
                                    fontFamily: 'var(--font-body)',
                                }}>{f}</button>
                            ))}
                        </div>
                    </FieldGroup>
                </div>
            </div>
        ),
        4: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <FieldGroup label="Emergency Contact Name">
                    <input style={inputStyle} value={form.emergencyName} onChange={e => update('emergencyName', e.target.value)}
                        onFocus={handleFocus} onBlur={handleBlur} placeholder="Full name" />
                </FieldGroup>
                <FieldGroup label="Relationship to Traveler">
                    <input style={inputStyle} value={form.emergencyRelation} onChange={e => update('emergencyRelation', e.target.value)}
                        onFocus={handleFocus} onBlur={handleBlur} placeholder="e.g. Daughter, Son" />
                </FieldGroup>
                <div style={{ gridColumn: '1/-1' }}>
                    <FieldGroup label="Emergency Phone Number">
                        <input style={inputStyle} type="tel" value={form.emergencyPhone} onChange={e => update('emergencyPhone', e.target.value)}
                            onFocus={handleFocus} onBlur={handleBlur} placeholder="+1 (555) 000-0000" />
                    </FieldGroup>
                </div>
                <div style={{ gridColumn: '1/-1' }}>
                    <FieldGroup label="Special Assistance Notes">
                        <textarea
                            style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
                            value={form.specialNotes} onChange={e => update('specialNotes', e.target.value)}
                            onFocus={handleFocus} onBlur={handleBlur}
                            placeholder="Any medical conditions, dietary requirements, mobility needs, languages spoken, or special requests..."
                        />
                    </FieldGroup>
                </div>
            </div>
        ),
        5: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '8px' }}>Please review your booking summary:</div>
                {[
                    { label: 'Traveler', value: `${form.travelerName || '—'}, Age ${form.travelerAge || '—'} (${form.travelerType || '—'})` },
                    { label: 'Route', value: `${form.fromCountry || '—'} → ${form.toCountry || '—'}` },
                    { label: 'Package', value: form.packageType || '—' },
                    { label: 'Travel Date', value: form.travelDate || '—' },
                    { label: 'Emergency Contact', value: `${form.emergencyName || '—'} (${form.emergencyRelation || '—'}) · ${form.emergencyPhone || '—'}` },
                    ...(form.specialNotes ? [{ label: 'Special Notes', value: form.specialNotes }] : []),
                ].map(({ label, value }) => (
                    <div key={label} className="glass-card" style={{ padding: '16px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{ color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: 120, paddingTop: 2 }}>{label}</div>
                        <div style={{ color: 'var(--text-primary)', fontSize: '0.88rem' }}>{value}</div>
                    </div>
                ))}
                <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
                    <input type="checkbox" checked={form.agreeTerms} onChange={e => update('agreeTerms', e.target.checked)}
                        style={{ accentColor: 'var(--gold)', width: 16, height: 16 }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                        I agree to SafeJourney's <Link to="#" style={{ color: 'var(--gold)' }}>Terms of Service</Link> and understand that a consultant will contact me within 2 hours to confirm the booking and pricing.
                    </span>
                </label>
            </div>
        ),
    };

    if (submitted) {
        return (
            <motion.div {...PAGE_TRANSITION} className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 80px)' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card"
                    style={{ padding: '72px 64px', textAlign: 'center', maxWidth: 560 }}
                >
                    <div style={{
                        width: 72, height: 72, borderRadius: '50%',
                        background: 'rgba(201,168,76,0.1)',
                        border: '2px solid rgba(201,168,76,0.4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 28px',
                    }}>
                        <CheckCircle size={32} color="var(--gold)" />
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                        Booking Request Received!
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '12px' }}>
                        Thank you, <strong style={{ color: 'var(--gold-light)' }}>{form.emergencyName || 'there'}</strong>! Your booking details have been sent directly to our WhatsApp.
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '36px' }}>
                        If WhatsApp didn't open automatically, please message us at <strong style={{ color: 'var(--gold)' }}>+91 99491 85581</strong>. Our team will confirm your guide and quote within 2 hours.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href={`https://wa.me/919949185581`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-gold"
                        >
                            Open WhatsApp <ArrowRight size={16} />
                        </a>
                        <Link to="/" className="btn btn-outline">Return Home</Link>
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div {...PAGE_TRANSITION} className="page-container">

            {/* HEADER */}
            <section style={{
                padding: '100px 0 60px',
                background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)',
                textAlign: 'center',
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}
                    >
                        Book Your <span className="gradient-text">Travel Companion</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: 480, margin: '0 auto' }}
                    >
                        Complete the form below. Our team will call you within 2 hours to confirm.
                    </motion.p>
                </div>
            </section>

            {/* PROGRESS STEPS */}
            <div className="container" style={{ maxWidth: 800, marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
                    <div style={{
                        position: 'absolute', top: '50%', left: 0, right: 0, height: 1,
                        background: 'rgba(255,255,255,0.06)', transform: 'translateY(-50%)', zIndex: 0,
                    }} />
                    <div style={{
                        position: 'absolute', top: '50%', left: 0, height: 1, zIndex: 1,
                        width: `${((step - 1) / (steps.length - 1)) * 100}%`,
                        background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                        transform: 'translateY(-50%)',
                        transition: 'width 0.5s ease',
                    }} />
                    {steps.map(({ id, label, Icon }) => (
                        <div key={id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 2 }}>
                            <div style={{
                                width: 40, height: 40, borderRadius: '50%',
                                background: step >= id ? 'var(--gradient-gold)' : 'rgba(255,255,255,0.04)',
                                border: step >= id ? 'none' : '1px solid rgba(255,255,255,0.08)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: step >= id ? '0 0 20px rgba(201,168,76,0.3)' : 'none',
                            }}>
                                <Icon size={16} color={step >= id ? '#0a0a0f' : 'var(--text-muted)'} strokeWidth={step >= id ? 2.5 : 1.5} />
                            </div>
                            <div style={{
                                fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                                color: step >= id ? 'var(--gold)' : 'var(--text-muted)',
                                transition: 'color 0.3s ease', whiteSpace: 'nowrap',
                            }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FORM */}
            <section style={{ padding: '0 0 100px' }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="glass-card" style={{ padding: '48px' }}>
                        <div style={{ marginBottom: '32px' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '6px' }}>Step {step} of {steps.length}</div>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--text-primary)' }}>{steps[step - 1].label}</div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {stepsContent[step]}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', gap: '12px' }}>
                            {step > 1 ? (
                                <button onClick={() => setStep(s => s - 1)} className="btn btn-outline" style={{ gap: '8px' }}>
                                    <ChevronLeft size={16} /> Back
                                </button>
                            ) : <div />}

                            {step < steps.length ? (
                                <button onClick={() => setStep(s => s + 1)} className="btn btn-gold">
                                    Continue <ChevronRight size={16} />
                                </button>
                            ) : (
                                <button
                                    disabled={!form.agreeTerms}
                                    onClick={sendToWhatsApp}
                                    className="btn btn-gold"
                                    style={{ opacity: form.agreeTerms ? 1 : 0.4, cursor: form.agreeTerms ? 'pointer' : 'not-allowed' }}
                                >
                                    Send via WhatsApp <CheckCircle size={16} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </motion.div>
    );
}
