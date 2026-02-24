import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
    Company: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Guides', path: '/guides' },
        { label: 'How It Works', path: '/how-it-works' },
        { label: 'Careers', path: '/about' },
    ],
    Services: [
        { label: 'Senior Citizen Travel', path: '/services' },
        { label: 'Children Companion', path: '/services' },
        { label: 'Medical Travel', path: '/services' },
        { label: 'Student Assistance', path: '/services' },
    ],
    Support: [
        { label: 'Pricing', path: '/pricing' },
        { label: 'Book a Guide', path: '/booking' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'FAQs', path: '/contact' },
    ],
};

const socials = [
    { Icon: Instagram, url: '#', color: '#c8102e' },
    { Icon: Facebook, url: '#', color: '#1a56b0' },
    { Icon: Twitter, url: '#', color: '#1a56b0' },
    { Icon: Linkedin, url: '#', color: '#1a56b0' },
];

export default function Footer() {
    return (
        <footer style={{
            background: 'linear-gradient(180deg, #04081a 0%, #02050f 100%)',
            borderTop: '3px solid var(--red)',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background glow blobs */}
            <div style={{
                position: 'absolute', top: 0, left: '10%',
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,16,46,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: 0, right: '10%',
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(26,86,176,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Top grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: '48px',
                    paddingBottom: '60px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                    {/* Brand Column */}
                    <div>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '24px' }}>
                            <div style={{
                                width: 44, height: 44,
                                background: 'linear-gradient(135deg, #c8102e, #8b0020)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '3px',
                                boxShadow: '0 4px 20px rgba(200,16,46,0.4)',
                                flexShrink: 0,
                            }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                        fill="white" />
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontFamily: 'var(--font-royal)', fontSize: '1.2rem', fontWeight: 600, color: 'white', letterSpacing: '0.06em' }}>SafeJourney</div>
                                <div style={{ fontSize: '0.48rem', color: 'var(--text-secondary)', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: '2px', fontFamily: 'var(--font-royal)' }}>International Companions</div>
                            </div>
                        </Link>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.85, marginBottom: '28px', maxWidth: 290 }}>
                            Premium international travel companion services, ensuring your loved ones travel safely across borders with verified, professional guides.
                        </p>

                        {/* Accreditation badge */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '8px 16px',
                            border: '1px solid rgba(200,16,46,0.3)',
                            borderRadius: '3px',
                            background: 'rgba(200,16,46,0.06)',
                            marginBottom: '24px',
                        }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', animation: 'pulse-red 2s infinite' }} />
                            <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', letterSpacing: '0.12em', fontFamily: 'var(--font-royal)', textTransform: 'uppercase' }}>
                                IAG Accredited Service
                            </span>
                        </div>

                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                            {[
                                { Icon: Phone, text: '+1 800 888 8888' },
                                { Icon: Mail, text: 'ops@safejourney.com' },
                                { Icon: MapPin, text: 'New York, NY 10001, USA' },
                            ].map(({ Icon, text }) => (
                                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                                    <Icon size={13} color="var(--red)" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {socials.map(({ Icon, url, color }, i) => (
                                <a key={i} href={url}
                                    style={{
                                        width: 36, height: 36, borderRadius: '3px',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--text-secondary)', transition: 'all 0.25s ease',
                                        textDecoration: 'none',
                                        background: 'rgba(255,255,255,0.02)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = i === 0 ? 'rgba(200,16,46,0.15)' : 'rgba(26,86,176,0.15)';
                                        e.currentTarget.style.borderColor = i === 0 ? 'rgba(200,16,46,0.5)' : 'rgba(26,86,176,0.5)';
                                        e.currentTarget.style.color = i === 0 ? 'var(--red)' : 'var(--blue-light)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                    }}
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
                                <div style={{ width: 18, height: 2, background: 'var(--red)', borderRadius: '2px' }} />
                                <h4 style={{
                                    fontFamily: 'var(--font-royal)', fontSize: '0.75rem', fontWeight: 600,
                                    color: 'white', letterSpacing: '0.15em', textTransform: 'uppercase',
                                }}>{title}</h4>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                                {links.map(({ label, path }) => (
                                    <li key={label}>
                                        <Link to={path} style={{
                                            color: 'var(--text-secondary)', textDecoration: 'none',
                                            fontSize: '0.83rem', transition: 'all 0.2s ease',
                                            display: 'flex', alignItems: 'center', gap: '7px',
                                        }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.color = 'white';
                                                e.currentTarget.style.paddingLeft = '6px';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.color = 'var(--text-secondary)';
                                                e.currentTarget.style.paddingLeft = '0';
                                            }}
                                        >
                                            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--red)', flexShrink: 0, opacity: 0.6 }} />
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    padding: '24px 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: '12px',
                }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', letterSpacing: '0.04em' }}>
                        © 2025 SafeJourney International. All rights reserved.
                    </span>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
                            <Link key={t} to="#" style={{
                                color: 'var(--text-muted)', fontSize: '0.73rem', textDecoration: 'none',
                                letterSpacing: '0.04em', transition: 'color 0.2s ease',
                            }}
                                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                            >{t}</Link>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 960px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </footer>
    );
}
