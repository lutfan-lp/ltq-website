import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function QuoteSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <section className="relative py-24 bg-gradient-to-br from-green-950 via-green-900 to-green-950 overflow-hidden">
            <div className="absolute inset-0 bg-diamond-dark" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-3xl mx-auto px-4 text-center"
            >
                <span className="text-gold-600/50 text-3xl">❝</span>
                <p className="font-arabic text-3xl md:text-4xl text-gold-500 my-4 leading-relaxed text-shadow-gold">
                    إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ
                </p>
                <p className="text-white/50 text-base italic font-light mb-3">
                    "Sesungguhnya Al-Qur'an ini memberi petunjuk kepada (jalan) yang lebih lurus"
                </p>
                <p className="text-gold-600/60 text-xs font-bold tracking-widest uppercase">— QS. Al-Isra': 9</p>

                {/* Ornament divider */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <span className="block h-px w-20 bg-gradient-to-r from-transparent to-gold-600/40" />
                    <span className="text-gold-600/40 text-lg">✦</span>
                    <span className="block h-px w-20 bg-gradient-to-l from-transparent to-gold-600/40" />
                </div>
            </motion.div>
        </section>
    )
}