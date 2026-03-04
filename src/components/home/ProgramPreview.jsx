import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import { programData } from '../../data'
import SectionHeader from '../common/SectionHeader'

function ProgramCard({ program, index }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
            className="group relative bg-white rounded-2xl border border-green-100 overflow-hidden hover:-translate-y-2 hover:shadow-green-lg transition-all duration-400 cursor-pointer"
        >
            {/* Header */}
            <div className={`bg-gradient-to-br ${program.color} p-7 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-diamond-dark opacity-60" />
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gold-600/10" />

                <div className="relative z-10">
                    <span className="text-4xl mb-3 block">{program.icon}</span>
                    <h3 className="font-display text-xl text-white mb-0.5">{program.title}</h3>
                    <p className="text-xs text-gold-400 tracking-widest uppercase font-bold">{program.subtitle}</p>
                </div>

                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
            </div>

            {/* Body */}
            <div className="p-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-5 font-light">{program.desc}</p>

                <ul className="space-y-2 mb-6">
                    {program.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-500">
                            <span className="text-gold-600 mt-0.5 flex-shrink-0 text-[10px]">✦</span>
                            {f}
                        </li>
                    ))}
                </ul>

                {/* Meta */}
                <div className="flex items-center gap-3 pt-4 border-t border-green-50">
                    {/* <div className="flex-1">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Durasi</p>
                        <p className="text-xs font-bold text-green-800">{program.duration}</p>
                    </div> */}
                    <div className="flex-1">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Objek</p>
                        <p className="text-xs font-bold text-green-800">{program.objek}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function ProgramPreview() {
    return (
        <section className="py-24 bg-gold-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeader
                    badge="Program Kami"
                    title="Program Unggulan LTQ"
                    desc="Secara garis besar terdapat tiga jalur program yang dirancang untuk memenuhi kebutuhan dan kemampuan setiap santri"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {programData.map((p, i) => (
                        <ProgramCard key={p.id} program={p} index={i} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/program"
                        className="inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-gold-700 transition-colors duration-200 group"
                    >
                        Lihat Detail Semua Program
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}