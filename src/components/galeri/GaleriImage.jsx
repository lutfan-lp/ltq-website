import { useState } from 'react'

/**
 * GaleriImage
 * -----------
 * Menampilkan foto asli jika ada (field `foto` diisi),
 * atau placeholder islami elegan jika foto belum tersedia (foto = null).
 *
 * Props:
 *  item        – objek galeri dari data/index.js
 *  className   – class tambahan untuk wrapper <div>
 *  objectFit   – 'cover' | 'contain' (default: 'cover')
 */
export default function GaleriImage({ item, className = '', objectFit = 'cover' }) {
    const [imgError, setImgError] = useState(false)
    const showReal = item.foto && !imgError

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            {showReal ? (
                /* ── Real photo ── */
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
                /* ── Elegant placeholder ── */
                <Placeholder item={item} />
            )}
        </div>
    )
}

function Placeholder({ item }) {
    return (
        <div className={`absolute inset-0 bg-gradient-to-br ${item.fallbackBg} flex flex-col items-center justify-center`}>
            {/* Islamic pattern overlay */}
            <div className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.1),transparent_70%)]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-2 p-4 text-center">
                {/* Decorative ring */}
                <div className="relative mb-1">
                    <div className="w-14 h-14 rounded-full border border-gold-600/30 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border border-gold-600/20 flex items-center justify-center">
                            <span className="text-2xl leading-none">{item.fallbackIcon}</span>
                        </div>
                    </div>
                </div>

                {/* Label */}
                <p className="text-white/50 text-[10px] font-bold tracking-widest uppercase leading-tight">
                    {item.kategori}
                </p>
            </div>

            {/* Bottom indicator */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                <span className="block w-4 h-px bg-gold-600/30" />
                <span className="text-[8px] text-gold-600/40 font-bold tracking-widest uppercase whitespace-nowrap">Foto Segera Hadir</span>
                <span className="block w-4 h-px bg-gold-600/30" />
            </div>
        </div>
    )
}