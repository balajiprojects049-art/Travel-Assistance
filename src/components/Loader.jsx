import { motion } from 'framer-motion';

export default function Loader() {
    return (
        <div className="loader-overlay">
            {/* Background blobs */}
            <div style={{
                position: 'absolute', top: '20%', right: '20%',
                width: 300, height: 300, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,16,46,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '20%', left: '20%',
                width: 300, height: 300, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(26,86,176,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Logo + Ring */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', position: 'relative', zIndex: 1 }}
            >
                {/* Emblem */}
                <div style={{
                    width: 72, height: 72,
                    background: 'linear-gradient(135deg, #c8102e, #8b0020)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '6px',
                    boxShadow: '0 8px 40px rgba(200,16,46,0.45)',
                    position: 'relative',
                }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill="white" />
                    </svg>
                    {/* Spinning ring around emblem */}
                    <div className="loader-ring" style={{
                        position: 'absolute',
                        inset: '-14px',
                        width: 'calc(100% + 28px)',
                        height: 'calc(100% + 28px)',
                        borderRadius: '50%',
                    }} />
                </div>

                {/* Brand name */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        fontFamily: 'var(--font-royal)',
                        fontSize: '1.4rem', fontWeight: 600,
                        color: 'white', letterSpacing: '0.12em',
                        marginBottom: '6px',
                    }}>SAFEJOURNEY</div>
                    <div style={{
                        fontSize: '0.55rem', color: 'var(--text-secondary)',
                        letterSpacing: '0.28em', textTransform: 'uppercase',
                        fontFamily: 'var(--font-royal)',
                    }}>International Travel Companions</div>
                </div>

                {/* Loading bar */}
                <div style={{
                    width: 180, height: 2,
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                }}>
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
                        style={{
                            height: '100%',
                            width: '60%',
                            background: 'linear-gradient(90deg, transparent, var(--red), var(--blue-light), transparent)',
                            borderRadius: '2px',
                        }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        fontSize: '0.62rem', color: 'var(--text-muted)',
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                        fontFamily: 'var(--font-royal)',
                    }}
                >
                    Preparing your experience...
                </motion.div>
            </motion.div>
        </div>
    );
}
