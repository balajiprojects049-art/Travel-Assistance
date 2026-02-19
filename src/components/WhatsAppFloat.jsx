import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WHATSAPP_NUMBER = '919949185581'; // +91 99491 85581

const AUTO_MESSAGE =
    `Hello SafeJourney! 👋\n\nI'm interested in your International Travel Companion Service.\n\nPlease help me with more details about:\n• Guide availability & pricing\n• Services for my travel needs\n• How to book a companion\n\nThank you!`;

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(AUTO_MESSAGE)}`;

export default function WhatsAppFloat() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [showBubble, setShowBubble] = useState(false);
    const [pulse, setPulse] = useState(true);

    // Show chat bubble after 4 seconds
    useEffect(() => {
        const t1 = setTimeout(() => setShowBubble(true), 4000);
        // Stop pulsing after 8 seconds
        const t2 = setTimeout(() => setPulse(false), 8000);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <>
            {/* Chat Bubble Popup */}
            <AnimatePresence>
                {showBubble && (
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        style={{
                            position: 'fixed',
                            bottom: 92,
                            right: 28,
                            zIndex: 9998,
                            maxWidth: 260,
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setShowBubble(false)}
                            aria-label="Close chat bubble"
                            style={{
                                position: 'absolute',
                                top: -10, right: -10,
                                width: 22, height: 22,
                                borderRadius: '50%',
                                background: 'rgba(30,30,40,0.95)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: '#9d9080',
                                padding: 0,
                            }}
                        >
                            <X size={12} />
                        </button>

                        {/* Bubble body */}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <div
                                style={{
                                    background: 'rgba(18,18,28,0.96)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(37,211,102,0.25)',
                                    borderRadius: '16px 16px 4px 16px',
                                    padding: '14px 18px',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(37,211,102,0.08)',
                                    cursor: 'pointer',
                                    transition: 'border-color 0.25s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,211,102,0.5)'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(37,211,102,0.25)'}
                            >
                                {/* Agent info row */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    {/* Avatar */}
                                    <div style={{
                                        width: 36, height: 36, borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #25d366, #128c7e)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                        fontSize: '1rem',
                                    }}>🌍</div>
                                    <div>
                                        <div style={{ color: '#f0ebe0', fontSize: '0.82rem', fontWeight: 600, lineHeight: 1.2 }}>SafeJourney</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                                            <span style={{
                                                width: 7, height: 7, borderRadius: '50%',
                                                background: '#25d366', display: 'inline-block',
                                            }} />
                                            <span style={{ color: '#25d366', fontSize: '0.68rem', letterSpacing: '0.04em' }}>Online · Typically replies instantly</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div style={{
                                    background: 'rgba(37,211,102,0.07)',
                                    border: '1px solid rgba(37,211,102,0.1)',
                                    borderRadius: '10px 10px 10px 2px',
                                    padding: '10px 13px',
                                }}>
                                    <p style={{
                                        color: '#c8c0b4', fontSize: '0.8rem',
                                        lineHeight: 1.6, margin: 0,
                                    }}>
                                        👋 Hi there! Need a travel companion for your loved one?<br />
                                        <span style={{ color: '#f0ebe0', fontWeight: 500 }}>Chat with us on WhatsApp</span> — we reply instantly!
                                    </p>
                                </div>

                                {/* CTA */}
                                <div style={{
                                    marginTop: '10px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                                    padding: '8px 0 2px',
                                    color: '#25d366', fontSize: '0.75rem', fontWeight: 600,
                                    letterSpacing: '0.05em',
                                }}>
                                    <WhatsAppIcon size={13} />
                                    Tap to chat now
                                </div>
                            </div>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 1.2 }}
                style={{
                    position: 'fixed',
                    bottom: 28,
                    right: 28,
                    zIndex: 9999,
                }}
            >
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Chat on WhatsApp"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    style={{ display: 'block', position: 'relative' }}
                >
                    {/* Pulse rings */}
                    {pulse && (
                        <>
                            <span style={{
                                position: 'absolute', inset: -6,
                                borderRadius: '50%',
                                border: '2px solid rgba(37,211,102,0.4)',
                                animation: 'wa-pulse 2s ease-out infinite',
                            }} />
                            <span style={{
                                position: 'absolute', inset: -12,
                                borderRadius: '50%',
                                border: '2px solid rgba(37,211,102,0.2)',
                                animation: 'wa-pulse 2s ease-out 0.4s infinite',
                            }} />
                        </>
                    )}

                    {/* Main button */}
                    <motion.div
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setShowBubble(false)}
                        style={{
                            width: 58, height: 58,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)',
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                    >
                        <WhatsAppIcon size={28} color="#fff" />
                    </motion.div>

                    {/* Tooltip */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 8 }}
                                transition={{ duration: 0.18 }}
                                style={{
                                    position: 'absolute',
                                    right: 70, top: '50%', transform: 'translateY(-50%)',
                                    background: 'rgba(10,10,15,0.92)',
                                    border: '1px solid rgba(37,211,102,0.2)',
                                    borderRadius: '8px',
                                    padding: '7px 14px',
                                    whiteSpace: 'nowrap',
                                    color: '#f0ebe0',
                                    fontSize: '0.78rem',
                                    pointerEvents: 'none',
                                    backdropFilter: 'blur(12px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                }}
                            >
                                Chat on WhatsApp
                                {/* Arrow */}
                                <div style={{
                                    position: 'absolute', right: -5, top: '50%', transform: 'translateY(-50%)',
                                    width: 0, height: 0,
                                    borderTop: '5px solid transparent',
                                    borderBottom: '5px solid transparent',
                                    borderLeft: '5px solid rgba(37,211,102,0.3)',
                                }} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </a>
            </motion.div>

            <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
        </>
    );
}

/* Official WhatsApp brand icon */
function WhatsAppIcon({ size = 24, color = '#fff' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size} height={size}
            fill={color}
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
    );
}
