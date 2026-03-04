import { useState } from 'react'

/**
 * BeritaImage
 * ───────────
 * Menampilkan foto berita asli jika tersedia,
 * atau placeholder islami elegan jika foto = null / gagal load.
 *
 * Props:
 *   item        – objek berita dari data/index.js
 *   className   – tambahan class untuk wrapper
 *   objectFit   – 'cover' | 'contain' (default: 'cover')
 *   showLabel   – tampilkan label "Foto Segera Hadir" (default: true)
 */
export default function BeritaImage({ item, className = '', objectFit = 'cover', showLabel = true }) {
    const [imgError, setImgError] = useState(false)
    const showReal = item.foto && !imgError

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            {showReal ? (
                <img
                    src={item.foto}
                    alt={item.judul}
                    onError={() => setImgError(true)}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${objectFit === 'cover' ? 'object-cover' : 'object-contain'
                        }`}
                    loading="lazy"
                    decoding="async"
                />
            ) : (
                <Placeholder item={item} showLabel={showLabel} />
            )}
        </div>
    )
}

function Placeholder({ item, showLabel }) {
    return (
        <div className={`absolute inset-0 bg-gradient-to-br ${item.fallbackBg} flex flex-col items-center justify-center`}>
            {/* Diamond pattern */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px',
                }}
            />
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.12),transparent_65%)]" />

            {/* Icon + rings */}
            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="relative">
                    <div className="w-16 h-16 rounded-full border border-gold-600/25 flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full border border-gold-600/15 flex items-center justify-center">
                            <span className="text-3xl leading-none">{item.fallbackIcon}</span>
                        </div>
                    </div>
                </div>
                <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{item.kategori}</span>
            </div>

            {/* Bottom label */}
            {showLabel && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <span className="block w-5 h-px bg-gold-600/25" />
                    <span className="text-[9px] text-gold-600/40 font-bold tracking-widest uppercase whitespace-nowrap">
                        Foto Segera Hadir
                    </span>
                    <span className="block w-5 h-px bg-gold-600/25" />
                </div>
            )}
        </div>
    )
}