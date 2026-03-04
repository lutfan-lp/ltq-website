import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/common/PageTransition'
import PageHero from '../components/common/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import BeritaImage from '../components/berita/BeritaImage'
import { beritaData, beritaKategori } from '../data'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'

/* ── Kategori badge colors ── */
const katColors = {
    Prestasi: 'bg-gold-100 text-gold-800 border-gold-300',
    Pengumuman: 'bg-red-50 text-red-700 border-red-200',
    Kegiatan: 'bg-green-50 text-green-700 border-green-200',
    Informasi: 'bg-blue-50 text-blue-700 border-blue-200',
}

/* ── Featured card (large) ── */
function FeaturedCard({ b }) {
    return (
        <Link
            to={`/berita/${b.slug}`}
            className="group block bg-white rounded-2xl border border-green-100 overflow-hidden hover:-translate-y-1 hover:shadow-green-lg transition-all duration-400"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <BeritaImage item={b} />
                {/* Category pill */}
                <span className={`absolute top-4 left-4 z-10 text-[10px] font-bold px-3 py-1 rounded-full border tracking-widest uppercase ${katColors[b.kategori] || ''}`}>
                    {b.kategori}
                </span>
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Body */}
            <div className="p-6">
                <h2 className="font-display text-2xl text-green-900 leading-tight mb-3 group-hover:text-green-700 transition-colors">
                    {b.judul}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-5 line-clamp-3">{b.ringkasan}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5"><Calendar size={11} className="text-gold-600" />{b.tanggal}</span>
                        <span className="flex items-center gap-1.5"><User size={11} className="text-gold-600" />{b.penulis}</span>
                        <span className="flex items-center gap-1.5"><Clock size={11} className="text-gold-600" />{b.waktuBaca}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-green-700 group-hover:text-gold-700 transition-colors">
                        Baca <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </div>
        </Link>
    )
}

/* ── Regular card ── */
function BeritaCard({ b, index }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
        >
            <Link
                to={`/berita/${b.slug}`}
                className="group block bg-white rounded-2xl border border-green-100 overflow-hidden hover:-translate-y-1 hover:shadow-green-lg transition-all duration-400 h-full"
            >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                    <BeritaImage item={b} />
                    <span className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-0.5 rounded-full border tracking-widest uppercase ${katColors[b.kategori] || ''}`}>
                        {b.kategori}
                    </span>
                </div>

                {/* Body */}
                <div className="p-5">
                    <h3 className="font-display text-lg text-green-900 leading-snug mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                        {b.judul}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-4 line-clamp-2">{b.ringkasan}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-green-50">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1"><Calendar size={10} className="text-gold-600" />{b.tanggal}</span>
                            <span className="flex items-center gap-1"><Clock size={10} className="text-gold-600" />{b.waktuBaca}</span>
                        </div>
                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

/* ── Page ── */
export default function BeritaPage() {
    const [searchParams] = useSearchParams()
    const initKat = searchParams.get('kategori') || 'Semua'
    const [aktif, setAktif] = useState(initKat)

    const filtered = useMemo(() =>
        aktif === 'Semua' ? beritaData : beritaData.filter(b => b.kategori === aktif),
        [aktif]
    )

    const featured = filtered.find(b => b.featured) || filtered[0]
    const rest = filtered.filter(b => b.id !== featured?.id)

    return (
        <PageTransition>
            <PageHero
                title="Berita & Pengumuman"
                subtitle="Informasi terbaru seputar kegiatan, prestasi, dan pengumuman resmi LTQ"
                arabic="فَبَشِّرْ عِبَادِ الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ"
            />

            <section className="py-24 bg-gold-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeader
                        badge="Informasi Terkini"
                        title="Semua Berita LTQ"
                        desc="Tetap terhubung dengan perkembangan terbaru dari lembaga"
                    />

                    {/* Filter tabs */}
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        {beritaKategori.map(k => {
                            const count = k === 'Semua' ? beritaData.length : beritaData.filter(b => b.kategori === k).length
                            return (
                                <button
                                    key={k}
                                    onClick={() => setAktif(k)}
                                    className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 border ${aktif === k
                                            ? 'bg-green-900 text-white border-green-900 shadow-green'
                                            : 'bg-white text-gray-500 border-green-100 hover:border-green-300 hover:text-green-800'
                                        }`}
                                >
                                    {k}
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${aktif === k ? 'bg-white/20 text-white' : 'bg-green-50 text-green-600'
                                        }`}>
                                        {count}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={aktif}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Featured */}
                            {featured && (
                                <div className="mb-8">
                                    <FeaturedCard b={featured} />
                                </div>
                            )}

                            {/* Grid */}
                            {rest.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {rest.map((b, i) => (
                                        <BeritaCard key={b.id} b={b} index={i} />
                                    ))}
                                </div>
                            )}

                            {/* Empty state */}
                            {filtered.length === 0 && (
                                <div className="text-center py-16">
                                    <p className="text-4xl mb-3">📰</p>
                                    <p className="text-gray-400 text-sm">Belum ada berita dalam kategori ini.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </PageTransition>
    )
}