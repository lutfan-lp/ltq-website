import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, arabic }) {
    return (
        <section className="relative min-h-[40vh] bg-gradient-to-br from-green-950 via-green-900 to-green-800 flex items-center justify-center overflow-hidden pt-20">
            {/* Pattern */}
            <div className="absolute inset-0 bg-diamond-dark opacity-60" />

            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12)_0%,transparent_70%)]" />

            {/* Rotating ornament */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-72 h-72 opacity-5 ornament-spin pointer-events-none hidden md:block">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#c9a84c" strokeWidth="0.8">
                        <polygon points="100,5 195,52 195,148 100,195 5,148 5,52" />
                        <polygon points="100,20 180,60 180,140 100,180 20,140 20,60" />
                        <circle cx="100" cy="100" r="55" />
                        <circle cx="100" cy="100" r="75" />
                        <line x1="100" y1="5" x2="100" y2="195" />
                        <line x1="5" y1="100" x2="195" y2="100" />
                    </g>
                </svg>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative z-10 text-center px-4"
            >
                {arabic && (
                    <p className="font-arabic text-2xl text-gold-500 mb-3 text-shadow-gold">{arabic}</p>
                )}
                <h1 className="font-display text-4xl md:text-6xl text-white mb-4">{title}</h1>
                <div className="flex items-center justify-center gap-3">
                    <span className="block w-12 h-px bg-gradient-to-r from-transparent to-gold-600" />
                    <span className="text-gold-500 text-sm">✦</span>
                    <span className="block w-12 h-px bg-gradient-to-l from-transparent to-gold-600" />
                </div>
                {subtitle && (
                    <p className="mt-4 text-white/60 font-light text-base max-w-md mx-auto">{subtitle}</p>
                )}
            </motion.div>
        </section>
    )
}