import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

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
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setOpen(false); }, [location.pathname]);

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0,
                    zIndex: 1000,
                    padding: scrolled ? '12px 0' : '20px 0',
                    background: scrolled
                        ? 'rgba(10,10,15,0.92)'
                        : 'rgba(10,10,15,0.2)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent',
                    transition: 'all 0.35s ease',
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <div style={{
                            width: 36, height: 36,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg,#c9a84c,#e8c97e)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Globe size={18} color="#0a0a0f" strokeWidth={2.5} />
                        </div>
                        <div>
                            <span style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.25rem', fontWeight: 700,
                                color: 'var(--gold-light)', letterSpacing: '0.04em',
                            }}>SafeJourney</span>
                            <div style={{
                                fontSize: '0.55rem', color: 'var(--text-secondary)',
                                letterSpacing: '0.18em', textTransform: 'uppercase', lineHeight: 1,
                            }}>Int'l Travel Companions</div>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <ul style={{ display: 'flex', gap: '8px', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
                        {navLinks.map(({ path, label }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    style={({ isActive }) => ({
                                        textDecoration: 'none',
                                        padding: '8px 14px',
                                        borderRadius: '50px',
                                        fontSize: '0.8rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.06em',
                                        color: isActive ? 'var(--gold)' : 'var(--text-secondary)',
                                        background: isActive ? 'rgba(201,168,76,0.08)' : 'transparent',
                                        border: isActive ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
                                        transition: 'all 0.25s ease',
                                    })}
                                >{label}</NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Book Now CTA */}
                    <Link to="/booking" className="btn btn-gold desktop-cta" style={{ padding: '10px 24px', fontSize: '0.75rem' }}>
                        Book Now
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(v => !v)}
                        className="mobile-menu-btn"
                        style={{
                            background: 'transparent', border: 'none', cursor: 'pointer',
                            color: 'var(--gold)', display: 'none', padding: '4px',
                        }}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
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
                        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                        style={{
                            position: 'fixed', top: 0, right: 0, bottom: 0, width: '75%', maxWidth: 320,
                            background: 'rgba(12,12,18,0.97)',
                            backdropFilter: 'blur(30px)',
                            borderLeft: '1px solid rgba(201,168,76,0.12)',
                            zIndex: 1100,
                            display: 'flex', flexDirection: 'column',
                            padding: '80px 32px 40px',
                            gap: '6px',
                        }}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            style={{
                                position: 'absolute', top: 20, right: 20,
                                background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--gold)',
                            }}
                        ><X size={22} /></button>

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
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 500,
                                        color: isActive ? 'var(--gold)' : 'var(--text-primary)',
                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    })}
                                >{label}</NavLink>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            style={{ marginTop: 'auto' }}
                        >
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
                        style={{
                            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                            zIndex: 1050,
                        }}
                    />
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
}
