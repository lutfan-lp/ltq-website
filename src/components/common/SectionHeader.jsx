import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeader({ badge, title, desc, light = false, center = true }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`mb-14 ${center ? 'text-center' : ''}`}
        >
            {badge && (
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border ${light
                        ? 'bg-gold-600/15 border-gold-500/30 text-gold-400'
                        : 'bg-gold-100 border-gold-600/30 text-gold-800'
                    }`}>
                    <span className="text-gold-600">✦</span>
                    {badge}
                </span>
            )}

            <h2 className={`font-display text-4xl md:text-5xl leading-tight mb-4 ${light ? 'text-white' : 'text-green-900'
                }`}>
                {title}
            </h2>

            {/* Gold divider */}
            <div className={`flex items-center gap-3 my-5 ${center ? 'justify-center' : ''}`}>
                <span className={`block w-14 h-px bg-gradient-to-r from-transparent to-gold-600`} />
                <span className="text-gold-600 text-xs">✦</span>
                <span className={`block w-14 h-px bg-gradient-to-l from-transparent to-gold-600`} />
            </div>

            {desc && (
                <p className={`text-base leading-relaxed max-w-xl font-light ${center ? 'mx-auto' : ''
                    } ${light ? 'text-white/60' : 'text-gray-500'}`}>
                    {desc}
                </p>
            )}
        </motion.div>
    )
}