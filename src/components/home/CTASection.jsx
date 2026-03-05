import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, ArrowRight } from 'lucide-react'
import { lembagaInfo } from '../../data'

export default function CTASection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
    return (
        <section className="py-24 bg-white">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-4 text-center"
            >
                <span className="inline-flex items-center gap-2 bg-gold-100 border border-gold-600/30 text-gold-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                    ✦ Motto Kami
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-green-900 mb-5 leading-tight">
                    Ngapalaghi Sampe' Mareh<br />
                    <span className="italic text-green-700">Nakrer Sampe' Mateh </span>
                </h2>
                <p className="text-gray-400 text-lg font-light mb-10 max-w-lg mx-auto leading-relaxed">
                    من قرء القرأن وعمل بما فیہ ألبس اللہ تعالی والداہ تاجا ؠوم القؠامة
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <Link to="/kontak" className="btn-primary">
                        Hubungi Kami Sekarang
                        <ArrowRight size={16} />
                    </Link>
                    <a
                        href={`https://wa.me/${lembagaInfo.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-green-200 text-green-800 font-bold px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-green-50 hover:border-green-300 transition-all duration-300"
                    >
                        <Phone size={15} />
                        WhatsApp Langsung
                    </a>
                </div>
            </motion.div>
        </section>
    )
}