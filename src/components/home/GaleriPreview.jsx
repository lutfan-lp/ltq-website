import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ZoomIn } from 'lucide-react'
import { galeriData } from '../../data'
import GaleriImage from '../galeri/GaleriImage'
import SectionHeader from '../common/SectionHeader'

export default function GaleriPreview() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

    // Ambil 6 foto pertama untuk preview
    const preview = galeriData.slice(0, 6)

    return (
        <section className="py-24 bg-gold-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeader
                    badge="Galeri"
                    title="Momen Berharga LTQ"
                    desc="Sekilas potret perjalanan menghafal Al-Qur'an bersama keluarga besar LTQ"
                />

                {/* 6-item preview grid */}
                <div ref={ref} className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
                    {preview.map((item, i) => {
                        // item pertama lebih besar
                        const isFeatured = i === 0
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                                className={`group relative rounded-2xl overflow-hidden bg-green-950 cursor-pointer
                  ${isFeatured ? 'col-span-2 row-span-2' : ''}
                  ${isFeatured ? 'aspect-square' : 'aspect-square'}
                `}
                                style={isFeatured ? { gridRow: 'span 2' } : {}}
                            >
                                <GaleriImage item={item} className="absolute inset-0" />

                                <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex flex-col justify-end p-4">
                                    <p className="text-white text-sm font-bold leading-tight">{item.judul}</p>
                                    <p className="text-gold-400 text-[10px] uppercase tracking-wider mt-0.5">{item.kategori}</p>
                                </div>

                                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center
                                opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-250">
                                    <ZoomIn size={13} className="text-white" />
                                </div>

                                <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 group-hover:border-gold-500/40 transition-all duration-300 pointer-events-none" />
                            </motion.div>
                        )
                    })}
                </div>

                <div className="text-center">
                    <Link
                        to="/galeri"
                        className="inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-gold-700 transition-colors duration-200 group"
                    >
                        Lihat Semua Galeri
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}