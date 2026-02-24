import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/services', label: 'Services' },
    { path: '/guides', label: 'Our Guides' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setOpen(false); }, [location.pathname]);

    return (
        <>
            {/* Royal top red bar */}
            <div className="royal-top-bar" />

            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                    position: 'fixed', top: 3, left: 0, right: 0,
                    zIndex: 1000,
                    padding: scrolled ? '10px 0' : '16px 0',
                    background: scrolled
                        ? 'rgba(4,10,24,0.97)'
                        : 'rgba(4,10,24,0.35)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderBottom: scrolled
                        ? '1px solid rgba(200,16,46,0.2)'
                        : '1px solid rgba(255,255,255,0.06)',
                    transition: 'all 0.4s ease',
                    boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5)' : 'none',
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        {/* Emblem */}
                        <div style={{
                            width: 42, height: 42,
                            background: 'linear-gradient(135deg, #c8102e, #8b0020)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            borderRadius: '3px',
                            boxShadow: '0 4px 16px rgba(200,16,46,0.4)',
                            flexShrink: 0,
                        }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                    fill="white" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <div>
                            <div style={{
                                fontFamily: 'var(--font-royal)',
                                fontSize: '1.15rem', fontWeight: 600,
                                color: '#f0f4ff', letterSpacing: '0.06em',
                                lineHeight: 1.1,
                            }}>SafeJourney</div>
                            <div style={{
                                fontSize: '0.5rem', color: 'var(--text-secondary)',
                                letterSpacing: '0.22em', textTransform: 'uppercase',
                                lineHeight: 1, marginTop: '2px',
                                fontFamily: 'var(--font-royal)',
                            }}>International Companions</div>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <ul style={{ display: 'flex', gap: '4px', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
                        {navLinks.map(({ path, label }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    style={({ isActive }) => ({
                                        textDecoration: 'none',
                                        padding: '9px 15px',
                                        borderRadius: '3px',
                                        fontSize: '0.75rem',
                                        fontWeight: 400,
                                        letterSpacing: '0.07em',
                                        textTransform: 'uppercase',
                                        color: isActive ? '#ffffff' : 'var(--text-secondary)',
                                        background: isActive ? 'rgba(200,16,46,0.15)' : 'transparent',
                                        borderBottom: isActive ? '2px solid var(--red)' : '2px solid transparent',
                                        transition: 'all 0.25s ease',
                                        fontFamily: 'var(--font-body)',
                                    })}
                                    onMouseEnter={e => {
                                        if (!e.currentTarget.classList.contains('active')) {
                                            e.currentTarget.style.color = '#ffffff';
                                            e.currentTarget.style.borderBottomColor = 'rgba(200,16,46,0.5)';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (!e.currentTarget.getAttribute('aria-current')) {
                                            e.currentTarget.style.color = 'var(--text-secondary)';
                                            e.currentTarget.style.borderBottomColor = 'transparent';
                                        }
                                    }}
                                >{label}</NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* CTA + Phone */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-cta">
                        <a href="tel:+18008888888" style={{
                            display: 'flex', alignItems: 'center', gap: '7px',
                            color: 'var(--blue-pale)', fontSize: '0.72rem',
                            textDecoration: 'none', letterSpacing: '0.05em',
                            fontFamily: 'var(--font-royal)',
                        }}>
                            <Phone size={13} color="var(--red)" />
                            +1 800 888 8888
                        </a>
                        <Link to="/booking" className="btn btn-gold" style={{ padding: '10px 22px', fontSize: '0.7rem' }}>
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(v => !v)}
                        className="mobile-menu-btn"
                        style={{
                            background: 'transparent', border: '1px solid rgba(200,16,46,0.3)',
                            cursor: 'pointer', color: 'var(--red)', display: 'none',
                            padding: '8px', borderRadius: '3px',
                        }}
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                        style={{
                            position: 'fixed', top: 0, right: 0, bottom: 0, width: '80%', maxWidth: 340,
                            background: 'rgba(4,10,24,0.98)',
                            backdropFilter: 'blur(30px)',
                            borderLeft: '1px solid rgba(200,16,46,0.2)',
                            zIndex: 1100,
                            display: 'flex', flexDirection: 'column',
                            padding: '90px 36px 48px',
                            gap: '4px',
                        }}
                    >
                        {/* Decorative top line */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gradient-red-h)' }} />

                        <button
                            onClick={() => setOpen(false)}
                            style={{
                                position: 'absolute', top: 24, right: 24,
                                background: 'rgba(200,16,46,0.1)', border: '1px solid rgba(200,16,46,0.3)',
                                cursor: 'pointer', color: 'var(--red)', padding: '8px', borderRadius: '3px',
                            }}
                        ><X size={18} /></button>

                        {/* Logo in drawer */}
                        <div style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                            <div style={{ fontFamily: 'var(--font-royal)', fontSize: '1rem', color: 'white', letterSpacing: '0.06em' }}>SafeJourney</div>
                            <div style={{ fontSize: '0.5rem', color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '3px', fontFamily: 'var(--font-royal)' }}>International Companions</div>
                        </div>

                        {navLinks.map(({ path, label }, i) => (
                            <motion.div
                                key={path}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <NavLink
                                    to={path}
                                    style={({ isActive }) => ({
                                        display: 'block',
                                        textDecoration: 'none',
                                        padding: '14px 0',
                                        fontSize: '0.85rem',
                                        fontFamily: 'var(--font-royal)',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        fontWeight: 500,
                                        color: isActive ? 'var(--red-light)' : 'var(--text-primary)',
                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                        borderLeft: isActive ? '3px solid var(--red)' : '3px solid transparent',
                                        paddingLeft: '12px',
                                    })}
                                >{label}</NavLink>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}
                        >
                            <a href="tel:+18008888888" style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                color: 'var(--blue-pale)', fontSize: '0.78rem',
                                textDecoration: 'none', letterSpacing: '0.05em',
                                fontFamily: 'var(--font-royal)',
                                padding: '10px 0',
                            }}>
                                <Phone size={14} color="var(--red)" />
                                +1 800 888 8888
                            </a>
                            <Link to="/booking" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                                Book Now
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1050 }}
                    />
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 960px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
}
