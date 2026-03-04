import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'
import { beritaData } from '../../data'
import BeritaImage from '../berita/BeritaImage'
import SectionHeader from '../common/SectionHeader'

const katColors = {
    Prestasi: 'bg-gold-100/80 text-gold-800 border-gold-300/60',
    Pengumuman: 'bg-red-50/80 text-red-700 border-red-200/60',
    Kegiatan: 'bg-green-50/80 text-green-700 border-green-200/60',
    Informasi: 'bg-blue-50/80 text-blue-700 border-blue-200/60',
}

export default function BeritaPreview() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const featured = beritaData[0]
    const rest = beritaData.slice(1, 4)

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeader
                    badge="Informasi"
                    title="Berita & Pengumuman"
                    desc="Informasi terbaru seputar kegiatan dan pengumuman resmi dari LTQ"
                />

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
                    {/* Featured large card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <Link
                            to={`/berita/${featured.slug}`}
                            className="group block bg-white rounded-2xl border border-green-100 overflow-hidden hover:shadow-green-lg hover:-translate-y-1 transition-all duration-400 h-full"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <BeritaImage item={featured} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                <span className={`absolute top-4 left-4 z-10 text-[10px] font-bold px-3 py-1 rounded-full border tracking-widest uppercase ${katColors[featured.kategori] || ''}`}>
                                    {featured.kategori}
                                </span>
                            </div>
                            {/* Body */}
                            <div className="p-6">
                                <h3 className="font-display text-xl text-green-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">
                                    {featured.judul}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light line-clamp-2">{featured.ringkasan}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-xs text-gray-400">
                                        <span className="flex items-center gap-1.5"><Calendar size={11} className="text-gold-600" />{featured.tanggal}</span>
                                        <span className="flex items-center gap-1.5"><User size={11} className="text-gold-600" />{featured.penulis}</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs font-bold text-green-700 group-hover:text-gold-700 transition-colors">
                                        Baca <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Sidebar mini cards */}
                    <div className="lg:col-span-2 flex flex-col gap-3">
                        {rest.map((b, i) => (
                            <motion.div
                                key={b.id}
                                initial={{ opacity: 0, x: 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Link
                                    to={`/berita/${b.slug}`}
                                    className="group flex gap-4 bg-white rounded-xl border border-green-100 p-3.5 hover:border-gold-600/30 hover:bg-gold-50/40 hover:shadow-gold transition-all duration-300"
                                >
                                    {/* Thumb */}
                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                        <BeritaImage item={b} showLabel={false} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-[9px] font-bold tracking-wider uppercase text-green-600">{b.kategori}</span>
                                        <h4 className="text-sm font-bold text-green-900 leading-tight mt-0.5 mb-1 group-hover:text-green-700 transition-colors line-clamp-2">
                                            {b.judul}
                                        </h4>
                                        <span className="text-xs text-gray-400 flex items-center gap-1">
                                            <Calendar size={9} />{b.tanggal}
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        to="/berita"
                        className="inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-gold-700 transition-colors duration-200 group"
                    >
                        Lihat Semua Berita & Pengumuman
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}