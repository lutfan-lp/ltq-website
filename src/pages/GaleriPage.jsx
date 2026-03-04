import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/common/PageTransition'
import PageHero from '../components/common/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import GaleriImage from '../components/galeri/GaleriImage'
import GaleriLightbox from '../components/galeri/GaleriLightbox'
import { galeriData, galeriKategori } from '../data'
import { Images, ZoomIn } from 'lucide-react'

/* ── Single card ───────────────────────────────────────────── */
function GaleriCard({ item, indexInFiltered, onOpen }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

    return (
        <motion.article
            ref={ref}
            layout
            initial={{ opacity: 0, scale: 0.93 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.93 }}
            exit={{ opacity: 0, scale: 0.93 }}
            transition={{ duration: 0.45, delay: (indexInFiltered % 8) * 0.055, ease: 'easeOut' }}
            onClick={() => onOpen(indexInFiltered)}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-green-950"
        >
            {/* Thumbnail */}
            <GaleriImage item={item} className="absolute inset-0" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-350
                      flex flex-col justify-end p-4">
                <p className="text-white text-sm font-bold leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.judul}
                </p>
                <p className="text-gold-400 text-[10px] uppercase tracking-wider mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">
                    {item.kategori} · {item.tanggal}
                </p>
            </div>

            {/* Zoom icon pill */}
            <div className="absolute top-3 right-3
                      flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/10
                      text-white/70 text-[10px] font-bold px-2.5 py-1.5 rounded-full
                      opacity-0 group-hover:opacity-100
                      scale-90 group-hover:scale-100
                      transition-all duration-250">
                <ZoomIn size={11} />
                Buka
            </div>

            {/* Gold border on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-300 pointer-events-none" />
        </motion.article>
    )
}

/* ── Page ──────────────────────────────────────────────────── */
export default function GaleriPage() {
    const [aktifKategori, setAktifKategori] = useState('Semua')
    const [lightboxIndex, setLightboxIndex] = useState(null)

    const filtered = useMemo(() =>
        aktifKategori === 'Semua'
            ? galeriData
            : galeriData.filter(g => g.kategori === aktifKategori),
        [aktifKategori]
    )

    const totalFoto = galeriData.length
    const adaFoto = galeriData.filter(g => g.foto).length
    const belumFoto = totalFoto - adaFoto

    return (
        <PageTransition>
            <PageHero
                title="Galeri Kegiatan"
                subtitle="Mengabadikan setiap momen berharga dalam perjalanan menghafal Al-Qur'an"
                arabic="فَاذْكُرُونِي أَذْكُرْكُمْ"
            />

            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeader
                        badge="Galeri Foto"
                        title="Momen Berharga LTQ"
                        desc="Setiap foto menyimpan kenangan indah dalam perjalanan menghafal Al-Qur'an bersama"
                    />

                    {/* Info strip */}
                    <div className="flex flex-wrap items-center justify-center gap-5 mb-10">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Images size={16} className="text-gold-600" />
                            <span><strong className="text-green-900">{totalFoto}</strong> total foto</span>
                        </div>
                        <span className="text-gray-200">·</span>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            <span className="text-gray-500"><strong className="text-green-700">{adaFoto}</strong> foto tersedia</span>
                        </div>
                        {belumFoto > 0 && (
                            <>
                                <span className="text-gray-200">·</span>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                                    <span className="text-gray-400"><strong className="text-gold-700">{belumFoto}</strong> segera hadir</span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Filter tabs */}
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {galeriKategori.map(k => {
                            const count = k === 'Semua'
                                ? galeriData.length
                                : galeriData.filter(g => g.kategori === k).length
                            return (
                                <button
                                    key={k}
                                    onClick={() => { setAktifKategori(k); setLightboxIndex(null) }}
                                    className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 border ${aktifKategori === k
                                        ? 'bg-green-900 text-white border-green-900 shadow-green'
                                        : 'bg-white text-gray-500 border-green-100 hover:border-green-300 hover:text-green-800'
                                        }`}
                                >
                                    {k}
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${aktifKategori === k ? 'bg-white/20 text-white' : 'bg-green-50 text-green-600'
                                        }`}>
                                        {count}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Grid */}
                    <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((item, i) => (
                                <GaleriCard
                                    key={item.id}
                                    item={item}
                                    indexInFiltered={i}
                                    onOpen={setLightboxIndex}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filtered.length === 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                            <p className="text-4xl mb-3">📷</p>
                            <p className="text-gray-400 text-sm">Belum ada foto dalam kategori ini.</p>
                        </motion.div>
                    )}

                    {/* Panduan upload */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-14 bg-gradient-to-br from-green-950 to-green-900 rounded-2xl p-7 border border-gold-600/15"
                    >
                        
                    </motion.div> */}
                </div>
            </section>

            {/* Lightbox */}
            <GaleriLightbox
                items={filtered}
                index={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
                onChange={setLightboxIndex}
            />
        </PageTransition>
    )
}