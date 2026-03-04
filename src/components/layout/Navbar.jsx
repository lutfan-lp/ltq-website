import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { lembagaInfo } from '../../data'

const navLinks = [
    { to: '/profil', label: 'Profil' },
    { to: '/program', label: 'Program' },
    { to: '/santri', label: 'Santri' },
    { to: '/jadwal', label: 'Jadwal' },
    { to: '/berita', label: 'Berita' },
    { to: '/galeri', label: 'Galeri' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close mobile menu on resize
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 1024) setOpen(false) }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
                        ? 'bg-green-950/97 backdrop-blur-xl shadow-green-lg border-b border-gold-600/20'
                        : 'bg-green-950/80 backdrop-blur-md'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[70px] flex items-center justify-between">
                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ scale: 1.06, rotate: 3 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 shadow-[0_0_20px_rgba(201,168,76,0.4)] group-hover:shadow-[0_0_30px_rgba(201,168,76,0.65)] transition-shadow duration-300"
                        >
                            <img
                                src="/logo-ltq.png"
                                alt="Logo LTQ"
                                className="w-full h-full object-cover"
                                draggable="false"
                            />
                        </motion.div>
                        <div>
                            <p className="font-display text-base text-gold-400 leading-none font-bold tracking-wide">LTQ</p>
                            <p className="text-[10px] text-white/40 tracking-widest uppercase font-bold leading-tight mt-0.5">
                                {lembagaInfo.nama}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `relative px-3.5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 rounded-md
                    ${isActive
                                            ? 'text-gold-400'
                                            : 'text-white/70 hover:text-gold-300 hover:bg-white/5'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {label}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="nav-indicator"
                                                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/kontak"
                            className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 text-green-900 font-bold text-xs px-5 py-2.5 rounded-full tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(201,168,76,0.4)]"
                        >
                            Hubungi Kami
                        </Link>

                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden p-2 text-white/80 hover:text-gold-400 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {open ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                            className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-green-950 border-l border-gold-600/20 flex flex-col lg:hidden"
                        >
                            <div className="flex items-center justify-between px-5 h-[70px] border-b border-gold-600/10">
                                <span className="font-display text-gold-400 text-lg">Menu</span>
                                <button onClick={() => setOpen(false)} className="text-white/60 hover:text-gold-400">
                                    <X size={20} />
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto p-5">
                                <ul className="flex flex-col gap-1">
                                    {navLinks.map(({ to, label }) => (
                                        <li key={to}>
                                            <NavLink
                                                to={to}
                                                onClick={() => setOpen(false)}
                                                className={({ isActive }) =>
                                                    `block px-4 py-3 rounded-lg text-sm font-bold tracking-widest uppercase transition-all duration-200
                          ${isActive
                                                        ? 'bg-gold-600/15 text-gold-400 border border-gold-600/30'
                                                        : 'text-white/60 hover:text-gold-300 hover:bg-white/5'
                                                    }`
                                                }
                                            >
                                                {label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="p-5 border-t border-gold-600/10">
                                <Link
                                    to="/kontak"
                                    onClick={() => setOpen(false)}
                                    className="block text-center bg-gradient-to-r from-gold-600 to-gold-400 text-green-900 font-bold text-sm py-3 rounded-full tracking-wide"
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}