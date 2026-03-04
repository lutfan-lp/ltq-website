import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/common/PageTransition'
import PageHero from '../components/common/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import { programData } from '../data'
import { CheckCircle2 } from 'lucide-react'

function ProgramDetail({ program, index }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const isEven = index % 2 === 0

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
        >
            {/* Visual */}
            <div className={!isEven ? 'lg:col-start-2' : ''}>
                <div className={`rounded-2xl bg-gradient-to-br ${program.color} aspect-video flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-diamond-dark opacity-80" />
                    <div className="relative z-10 text-center">
                        <span className="text-7xl block mb-4">{program.icon}</span>
                        <p className="font-display text-2xl text-white">{program.title}</p>
                        <p className="text-gold-400 text-xs tracking-widest uppercase font-bold mt-1">{program.subtitle}</p>
                    </div>
                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-16 h-16 border border-gold-600/20 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 border border-gold-600/15 rounded-full" />
                </div>

                {/* Info chips */}
                <div className="flex gap-4 mt-5">
                    <div className="flex-1 bg-gold-50 border border-gold-600/20 rounded-xl p-4 text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Penanggung Jawab</p>
                        <p className="font-bold text-green-900 text-sm">{program.penjab}</p>
                    </div>
                    <div className="flex-1 bg-gold-50 border border-gold-600/20 rounded-xl p-4 text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Objek Program</p>
                        <p className="font-bold text-green-900 text-sm">{program.objek}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <span className="inline-flex items-center gap-2 bg-gold-100 border border-gold-600/30 text-gold-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                    ✦ {program.subtitle}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-green-900 mb-5 leading-tight">{program.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6 font-light">{program.desc}</p>

                <div className="space-y-3">
                    <p className="text-xs font-bold text-green-800 uppercase tracking-wider mb-3">Materi & Fasilitas:</p>
                    {program.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm leading-relaxed">{f}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function ProgramPage() {
    return (
        <PageTransition>
            <PageHero
                title="Program Kami"
                subtitle="Tiga jalur unggulan untuk membentuk generasi Qur'ani yang komprehensif"
                arabic="وَعَلَّمَكَ مَا لَمْ تَكُن تَعْلَمُ"
            />

            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <SectionHeader
                        badge="Program Unggulan"
                        title="Detail Program LTQ"
                        desc="Setiap program dirancang dengan kurikulum yang matang oleh para ahli"
                    />

                    <div className="space-y-28">
                        {programData.map((p, i) => (
                            <ProgramDetail key={p.id} program={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ / Info tambahan */}
            <section className="py-16 bg-gold-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <h3 className="font-display text-3xl text-green-900 mb-4">Tertarik Bergabung?</h3>
                    <p className="text-gray-500 font-light mb-8">Hubungi kami untuk informasi lebih lanjut seputar pendaftaran, biaya, dan syarat masuk</p>
                    <a
                        href="/kontak"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 text-green-900 font-bold px-7 py-3.5 rounded-full text-sm tracking-wide hover:-translate-y-1 hover:shadow-gold-lg transition-all duration-300"
                    >
                        Daftar Sekarang
                    </a>
                </div>
            </section>
        </PageTransition>
    )
}