import { motion } from 'framer-motion';

export default function Loader() {
    return (
        <motion.div
            className="loader-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
            >
                {/* Logo Mark */}
                <motion.div
                    style={{
                        width: 64, height: 64,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    <div className="loader-ring" />
                    <span style={{
                        position: 'absolute',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        color: 'var(--gold)',
                        fontWeight: 600,
                    }}>S</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ textAlign: 'center' }}
                >
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.75rem',
                        fontWeight: 600,
                        color: 'var(--gold-light)',
                        letterSpacing: '0.06em',
                    }}>SafeJourney</h1>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginTop: '4px',
                    }}>International Travel Companions</p>
                </motion.div>

                {/* Animated bar */}
                <motion.div
                    style={{
                        width: 160, height: 1,
                        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                        overflow: 'hidden',
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                />
            </motion.div>
        </motion.div>
    );
}
