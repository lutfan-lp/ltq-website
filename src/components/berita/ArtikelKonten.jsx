import { motion } from 'framer-motion'
import BeritaImage from './BeritaImage'

/**
 * ArtikelKonten
 * ─────────────
 * Merender array `konten` dari data berita menjadi tampilan artikel
 * yang indah — paragraf, sub-judul, quote, list, dan gambar inline.
 */
export default function ArtikelKonten({ konten }) {
    if (!konten || konten.length === 0) return null

    return (
        <div className="artikel-body space-y-6">
            {konten.map((blok, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                >
                    <Blok blok={blok} />
                </motion.div>
            ))}
        </div>
    )
}

function Blok({ blok }) {
    switch (blok.tipe) {

        case 'p':
            return (
                <p className="text-gray-600 leading-[1.95] text-[15px] font-light">
                    {blok.isi}
                </p>
            )

        case 'h3':
            return (
                <div className="pt-4">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="w-1 h-6 rounded-full bg-gradient-to-b from-gold-600 to-gold-400 flex-shrink-0" />
                        <h3 className="font-display text-xl text-green-900">{blok.isi}</h3>
                    </div>
                    {/* thin gold line */}
                    <div className="h-px bg-gradient-to-r from-gold-600/20 via-gold-600/10 to-transparent ml-4" />
                </div>
            )

        case 'quote':
            return (
                <blockquote className="relative my-8 pl-6 border-l-4 border-gold-500 bg-gradient-to-r from-gold-50 to-transparent rounded-r-xl py-5 pr-6">
                    {/* decorative open-quote */}
                    <span className="absolute -top-2 left-4 text-5xl text-gold-400/30 font-serif leading-none select-none">
                        ❝
                    </span>
                    <p className="relative text-green-900 text-base leading-relaxed font-medium italic mb-3">
                        "{blok.isi}"
                    </p>
                    {blok.sumber && (
                        <footer className="flex items-center gap-2">
                            <span className="block w-8 h-px bg-gold-500" />
                            <cite className="not-italic text-xs font-bold text-gold-700 tracking-wide">
                                {blok.sumber}
                            </cite>
                        </footer>
                    )}
                </blockquote>
            )

        case 'ul':
            return (
                <ul className="space-y-2.5 pl-1">
                    {blok.isi.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-gold-700 text-[9px] font-bold">{i + 1}</span>
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            )

        case 'img':
            return (
                <figure className="my-8 rounded-2xl overflow-hidden border border-green-100 shadow-green">
                    <div className="relative aspect-video bg-green-950">
                        {blok.foto ? (
                            <img
                                src={blok.foto}
                                alt={blok.caption || ''}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl opacity-30">🖼️</span>
                            </div>
                        )}
                    </div>
                    {blok.caption && (
                        <figcaption className="px-4 py-2.5 bg-green-950/5 text-center text-xs text-gray-400 italic border-t border-green-50">
                            {blok.caption}
                        </figcaption>
                    )}
                </figure>
            )

        default:
            return null
    }
}