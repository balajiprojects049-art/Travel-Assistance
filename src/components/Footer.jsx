import { Link } from 'react-router-dom';
import { Globe, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

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
    { Icon: Instagram, url: '#' },
    { Icon: Facebook, url: '#' },
    { Icon: Twitter, url: '#' },
    { Icon: Linkedin, url: '#' },
];

export default function Footer() {
    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0d0d14 0%, #080810 100%)',
            borderTop: '1px solid rgba(201,168,76,0.1)',
            paddingTop: '80px',
        }}>
            <div className="container">
                {/* Top grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: '48px',
                    paddingBottom: '60px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                    {/* Brand Column */}
                    <div>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '20px' }}>
                            <div style={{
                                width: 40, height: 40, borderRadius: '50%',
                                background: 'linear-gradient(135deg,#c9a84c,#e8c97e)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Globe size={20} color="#0a0a0f" strokeWidth={2.5} />
                            </div>
                            <span style={{
                                fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700,
                                color: 'var(--gold-light)',
                            }}>SafeJourney</span>
                        </Link>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '24px', maxWidth: 280 }}>
                            Premium international travel companion services, ensuring your loved ones travel safely across borders with verified, professional guides.
                        </p>

                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                { Icon: Phone, text: '+1 (800) SAFE-JOURNEY' },
                                { Icon: Mail, text: 'hello@safejourney.com' },
                                { Icon: MapPin, text: 'New York, NY 10001 USA' },
                            ].map(({ Icon, text }) => (
                                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                                    <Icon size={14} color="var(--gold)" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                            {socials.map(({ Icon, url }, i) => (
                                <a key={i} href={url}
                                    style={{
                                        width: 36, height: 36, borderRadius: '50%',
                                        border: '1px solid rgba(201,168,76,0.2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--gold)', transition: 'all 0.25s ease',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(201,168,76,0.12)';
                                        e.currentTarget.style.borderColor = 'var(--gold)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
                                    }}
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 style={{
                                fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600,
                                color: 'var(--gold)', marginBottom: '20px', letterSpacing: '0.05em',
                            }}>{title}</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {links.map(({ label, path }) => (
                                    <li key={label}>
                                        <Link to={path} style={{
                                            color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem',
                                            transition: 'color 0.2s ease',
                                        }}
                                            onMouseEnter={e => e.target.style.color = 'var(--gold-light)'}
                                            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                                        >{label}</Link>
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
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        © 2024 SafeJourney International. All rights reserved.
                    </span>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
                            <Link key={t} to="#" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none' }}
                                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                            >{t}</Link>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
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
