import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/common/PageTransition'
import PageHero from '../components/common/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import { jadwalData } from '../data'

const tagStyles = {
    tahfidz: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tahsin: 'bg-gold-100 text-gold-800 border-gold-300',
    diniyah: 'bg-blue-50 text-blue-700 border-blue-200',
    ibadah: 'bg-purple-50 text-purple-700 border-purple-200',
    ekstra: 'bg-orange-50 text-orange-700 border-orange-200',
}

function JadwalItem({ item, index }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group relative flex items-center gap-5 bg-white rounded-2xl border border-green-100 p-5 hover:border-gold-600/30 hover:shadow-gold hover:bg-gold-50/30 transition-all duration-300 hover:translate-x-1"
        >
            {/* Left: gold accent */}
            <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-gradient-to-b from-gold-600 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Time */}
            <div className="w-24 flex-shrink-0 text-center">
                <p className="font-display text-xl text-green-900 font-bold leading-none">{item.waktu}</p>
                <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-0.5">{item.ket}</p>
            </div>

            {/* Divider dot */}
            <div className="flex-shrink-0 flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-gold-500 bg-gold-100 group-hover:bg-gold-500 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h4 className="font-bold text-green-900 text-sm mb-0.5 leading-tight">{item.kegiatan}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.detail}</p>
            </div>

            {/* Tag */}
            <span className={`flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full border tracking-wider uppercase ${tagStyles[item.tagColor]}`}>
                {item.tag}
            </span>
        </motion.div>
    )
}

export default function JadwalPage() {
    return (
        <PageTransition>
            <PageHero
                title="Jadwal Kegiatan"
                subtitle="Rutinitas terstruktur yang membentuk disiplin dan keistiqomahan santri"
                arabic="إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا"
            />

            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <SectionHeader
                        badge="Jadwal Harian"
                        title="Aktivitas Santri Sehari-hari"
                        desc="Dari qiyamul lail hingga malam — setiap waktu diisi dengan nilai ibadah dan ilmu"
                    />

                    {/* Legend */}
                    <div className="flex flex-wrap items-center gap-3 justify-center mb-10">
                        {Object.entries(tagStyles).map(([key, cls]) => (
                            <span key={key} className={`text-[10px] font-bold px-3 py-1 rounded-full border tracking-widest uppercase ${cls}`}>
                                {key}
                            </span>
                        ))}
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[124px] top-6 bottom-6 w-px bg-gradient-to-b from-gold-600/10 via-gold-600/30 to-gold-600/10 pointer-events-none hidden sm:block" />

                        <div className="space-y-3">
                            {jadwalData.map((item, i) => (
                                <JadwalItem key={i} item={item} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 bg-gold-50 border border-gold-600/20 rounded-2xl p-5 text-center"
                    >
                        <p className="text-xs text-gray-500 leading-relaxed">
                            <span className="font-bold text-green-800">Catatan:</span> Jadwal dapat berubah sewaktu-waktu mengikuti keputusan pengasuh dan kondisi lembaga. Jadwal khusus Ramadhan dan hari libur nasional akan diumumkan terpisah.
                        </p>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    )
}