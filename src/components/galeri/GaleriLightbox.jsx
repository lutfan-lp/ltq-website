import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react'
import GaleriImage from './GaleriImage'

/**
 * GaleriLightbox
 * ──────────────
 * Props:
 *   items    – array galeriData yang sedang ditampilkan (sudah difilter)
 *   index    – index item yang aktif, atau null jika tertutup
 *   onClose  – fn() tutup lightbox
 *   onChange – fn(newIndex) navigasi item
 */
export default function GaleriLightbox({ items, index, onClose, onChange }) {
    const isOpen = index !== null && index >= 0
    const item = isOpen ? items[index] : null
    const hasPrev = isOpen && index > 0
    const hasNext = isOpen && index < items.length - 1

    const goPrev = useCallback(() => { if (hasPrev) onChange(index - 1) }, [hasPrev, index, onChange])
    const goNext = useCallback(() => { if (hasNext) onChange(index + 1) }, [hasNext, index, onChange])

    /* Keyboard navigation */
    useEffect(() => {
        if (!isOpen) return
        const handler = (e) => {
            if (e.key === 'ArrowLeft') goPrev()
            if (e.key === 'ArrowRight') goNext()
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [isOpen, goPrev, goNext, onClose])

    /* Lock body scroll saat terbuka */
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && item && (
                <motion.div
                    key="lightbox-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[300] bg-black/92 backdrop-blur-xl flex items-center justify-center"
                    onClick={onClose}
                >
                    {/* ── Container ── */}
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 10 }}
                        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                        onClick={e => e.stopPropagation()}
                        className="relative w-full max-w-4xl mx-4 flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
                    >
                        {/* ── Image panel ── */}
                        <div className="relative flex-1 bg-green-950 aspect-[4/3] lg:aspect-auto lg:min-h-[480px] group">
                            <GaleriImage item={item} className="absolute inset-0" />

                            {/* Gradient bottom fade for info on mobile */}
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent lg:hidden" />

                            {/* ── Prev button ── */}
                            <AnimatePresence>
                                {hasPrev && (
                                    <motion.button
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        onClick={(e) => { e.stopPropagation(); goPrev() }}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-black/60 hover:border-gold-600/40 hover:text-gold-400 transition-all duration-200 z-10"
                                        aria-label="Foto sebelumnya"
                                    >
                                        <ChevronLeft size={20} />
                                    </motion.button>
                                )}
                            </AnimatePresence>

                            {/* ── Next button ── */}
                            <AnimatePresence>
                                {hasNext && (
                                    <motion.button
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        onClick={(e) => { e.stopPropagation(); goNext() }}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-black/60 hover:border-gold-600/40 hover:text-gold-400 transition-all duration-200 z-10"
                                        aria-label="Foto berikutnya"
                                    >
                                        <ChevronRight size={20} />
                                    </motion.button>
                                )}
                            </AnimatePresence>

                            {/* ── Counter ── */}
                            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-bold px-3 py-1.5 rounded-full">
                                {index + 1} / {items.length}
                            </div>
                        </div>

                        {/* ── Info panel ── */}
                        <div className="w-full lg:w-72 xl:w-80 bg-green-950 border-t lg:border-t-0 lg:border-l border-gold-600/15 flex flex-col">
                            {/* Header info */}
                            <div className="p-6 border-b border-gold-600/10 flex-1">
                                {/* Category badge */}
                                <span className="inline-flex items-center gap-1.5 bg-gold-600/15 border border-gold-600/25 text-gold-400 text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4">
                                    <Tag size={9} />
                                    {item.kategori}
                                </span>

                                {/* Title */}
                                <h3 className="font-display text-xl text-white leading-snug mb-3">
                                    {item.judul}
                                </h3>

                                {/* Description */}
                                {item.deskripsi && (
                                    <p className="text-white/50 text-sm leading-relaxed font-light">
                                        {item.deskripsi}
                                    </p>
                                )}

                                {/* Date */}
                                {item.tanggal && (
                                    <div className="flex items-center gap-2 mt-4 text-white/35 text-xs">
                                        <Calendar size={12} className="text-gold-600" />
                                        {item.tanggal}
                                    </div>
                                )}
                            </div>

                            {/* Thumbnail strip */}
                            <div className="p-4 border-t border-gold-600/10">
                                <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-3">
                                    Foto lainnya
                                </p>
                                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                                    {items.map((thumb, i) => (
                                        <button
                                            key={thumb.id}
                                            onClick={(e) => { e.stopPropagation(); onChange(i) }}
                                            className={`relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === index
                                                    ? 'border-gold-500 scale-105'
                                                    : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'
                                                }`}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${thumb.fallbackBg}`} />
                                            {thumb.foto ? (
                                                <img
                                                    src={thumb.foto}
                                                    alt={thumb.judul}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-lg">
                                                    {thumb.fallbackIcon}
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Close button ── */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 text-white/80 flex items-center justify-center hover:bg-black/70 hover:text-white hover:border-gold-600/30 transition-all duration-200 z-20"
                            aria-label="Tutup"
                        >
                            <X size={18} />
                        </button>
                    </motion.div>

                    {/* ── Keyboard hint ── */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-none">
                        <kbd className="bg-white/8 border border-white/10 text-white/30 text-[10px] px-2 py-0.5 rounded font-mono">←</kbd>
                        <span className="text-white/20 text-[10px]">navigasi</span>
                        <kbd className="bg-white/8 border border-white/10 text-white/30 text-[10px] px-2 py-0.5 rounded font-mono">→</kbd>
                        <span className="mx-2 text-white/10">·</span>
                        <kbd className="bg-white/8 border border-white/10 text-white/30 text-[10px] px-2 py-0.5 rounded font-mono">Esc</kbd>
                        <span className="text-white/20 text-[10px]">tutup</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}