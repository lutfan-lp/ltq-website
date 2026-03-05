import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight } from 'lucide-react'
import { statsData } from '../../data'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

function StatItem({ num, label, suffix, delay }) {
    const [ref, inView] = useInView({ triggerOnce: true })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="text-center"
        >
            <p className="font-display text-3xl md:text-4xl text-gold-500 font-bold leading-none">
                {inView ? <CountUp end={num} duration={2} suffix={suffix} /> : '0'}
            </p>
            <p className="text-xs text-white/40 tracking-widest uppercase mt-1.5 font-bold">{label}</p>
        </motion.div>
    )
}

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-green-950 via-[#0f2218] to-green-900 flex items-center justify-center overflow-hidden">
            {/* Diamond pattern background */}
            <div className="absolute inset-0 bg-diamond-dark opacity-80" />

            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(64,145,108,0.12)_0%,transparent_60%)]" />

            {/* Large rotating geometric ornament */}
            <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.045] ornament-spin pointer-events-none hidden xl:block">
                <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#c9a84c" strokeWidth="0.6">
                        <polygon points="150,8 292,80 292,220 150,292 8,220 8,80" />
                        <polygon points="150,25 275,90 275,210 150,275 25,210 25,90" />
                        <polygon points="150,45 258,103 258,197 150,255 42,197 42,103" />
                        <circle cx="150" cy="150" r="80" />
                        <circle cx="150" cy="150" r="100" />
                        <circle cx="150" cy="150" r="120" />
                        <line x1="150" y1="8" x2="150" y2="292" />
                        <line x1="8" y1="150" x2="292" y2="150" />
                        <line x1="43" y1="43" x2="257" y2="257" />
                        <line x1="257" y1="43" x2="43" y2="257" />
                    </g>
                </svg>
            </div>

            {/* Small ornament left */}
            <div className="absolute left-[-40px] bottom-20 w-64 h-64 opacity-[0.04] ornament-spin pointer-events-none hidden lg:block" style={{ animationDirection: 'reverse', animationDuration: '80s' }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#c9a84c" strokeWidth="0.8">
                        <polygon points="100,5 195,52 195,148 100,195 5,148 5,52" />
                        <circle cx="100" cy="100" r="60" />
                        <circle cx="100" cy="100" r="80" />
                    </g>
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20 pb-16">
                {/* Arabic Bismillah */}
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-arabic text-3xl md:text-4xl text-gold-500 mb-2 text-shadow-gold"
                >
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="text-[10px] tracking-[5px] text-gold-600/60 uppercase mb-8"
                >
                    Dengan Nama Allah Yang Maha Pengasih Lagi Maha Penyayang
                </motion.p>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex items-center gap-2 border border-gold-600/30 bg-gold-600/10 text-gold-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                    Lembaga Tahfidhul Qur'an Sejak 2006
                </motion.div>

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
                >
                    Membentuk
                    <span className="block gold-shimmer mt-1">Generasi Hamilul Qur'an</span>
                    <span className="block text-4xl md:text-5xl text-white/80 font-light italic mt-2">Lafdzan, wa Ma'nan, wa 'Amalan</span>
                </motion.h1>

                {/* Desc */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light"
                >
                    Lembaga Khusus yang berada dibawah naungan Pondok Pesantren Annuqayah Latee Guluk-Guluk Sumenep Jawa Timur
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                    className="flex items-center justify-center gap-4 flex-wrap mb-16"
                >
                    <Link to="/profil" className="btn-primary shadow-gold-lg">
                        Lihat Profil Kami
                        <ChevronRight size={16} />
                    </Link>
                    <Link to="/kontak" className="btn-outline">
                        Hubungi Kami
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0 }}
                    className="border-t border-gold-600/15 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-8"
                >
                    {statsData.map((stat, i) => (
                        <StatItem key={stat.label} {...stat} delay={0 + i * 0.1} />
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25"
                style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
            >
                <ArrowDown size={18} />
                <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    )
}