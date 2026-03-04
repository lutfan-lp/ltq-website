import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/common/PageTransition'
import PageHero from '../components/common/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import { profilData } from '../data'
import { X, ZoomIn, ChevronRight, Users, Crown, Shield, Layers } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Foto orang — tampilkan gambar asli atau inisial jika belum ada */
function PersonPhoto({ foto, nama, size = 'md', gradient = 'from-green-900 to-green-700' }) {
    const [err, setErr] = useState(false)
    const sizeMap = {
        sm: 'w-14 h-14 text-base',
        md: 'w-20 h-20 text-xl',
        lg: 'w-28 h-28 text-2xl',
        xl: 'w-36 h-36 text-3xl',
    }
    const cls = sizeMap[size] || sizeMap.md

    if (foto && !err) {
        return (
            <div className={`${cls} rounded-full overflow-hidden ring-2 ring-gold-500/40 ring-offset-2 ring-offset-transparent flex-shrink-0`}>
                <img src={foto} alt={nama} onError={() => setErr(true)}
                    className="w-full h-full object-cover" loading="lazy" />
            </div>
        )
    }
    return (
        <div className={`${cls} rounded-full bg-gradient-to-br ${gradient}
      flex items-center justify-center flex-shrink-0
      ring-2 ring-gold-500/30 ring-offset-2 ring-offset-white`}>
            <span className="font-display text-gold-400 font-bold leading-none">
                {nama.split(' ').slice(-1)[0][0]}
            </span>
        </div>
    )
}

/** Foto orang versi dark (untuk section gelap) */
function PersonPhotoDark({ foto, nama, size = 'md' }) {
    const [err, setErr] = useState(false)
    const sizeMap = {
        sm: 'w-14 h-14 text-base',
        md: 'w-20 h-20 text-xl',
        lg: 'w-28 h-28 text-2xl',
        xl: 'w-36 h-36 text-3xl',
    }
    const cls = sizeMap[size] || sizeMap.md

    if (foto && !err) {
        return (
            <div className={`${cls} rounded-full overflow-hidden ring-2 ring-gold-500/50 ring-offset-2 ring-offset-green-950 flex-shrink-0`}>
                <img src={foto} alt={nama} onError={() => setErr(true)}
                    className="w-full h-full object-cover" loading="lazy" />
            </div>
        )
    }
    return (
        <div className={`${cls} rounded-full bg-gradient-to-br from-green-800 to-green-900
      border-2 border-gold-600/30 flex items-center justify-center flex-shrink-0`}>
            <span className="font-display text-gold-400 font-bold leading-none">
                {nama.split(' ').slice(-1)[0][0]}
            </span>
        </div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1 — Sejarah
// ─────────────────────────────────────────────────────────────────────────────

const vmTabs = [
    { id: 'visi', label: 'Visi' },
    { id: 'misi', label: 'Misi' },
    { id: 'nilai', label: 'Nilai' },
]

function FotoSejarah({ foto }) {
    const [err, setErr] = useState(false)
    const showReal = foto && !err

    return (
        <div className="relative">
            <div className="relative rounded-2xl aspect-[4/3] overflow-hidden shadow-xl">
                {showReal ? (
                    <img src={foto} alt="Sejarah LTQ" onError={() => setErr(true)}
                        className="w-full h-full object-cover" loading="lazy" />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center">
                        <div className="absolute inset-0 opacity-[0.07]"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.12),transparent_65%)]" />
                        <div className="relative z-10 text-center">
                            <span className="font-arabic text-[6rem] text-gold-500/25 leading-none block">قرآن</span>
                            <div className="flex items-center gap-2 justify-center mt-3">
                                <span className="block w-8 h-px bg-gold-600/30" />
                                <span className="text-[10px] text-gold-600/40 font-bold tracking-widest uppercase">Foto Segera Hadir</span>
                                <span className="block w-8 h-px bg-gold-600/30" />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Offset border ornament */}
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold-600/30 rounded-2xl pointer-events-none" />

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-gold-600 to-gold-400
        text-green-950 rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgba(201,168,76,0.4)] z-10">
                <p className="font-display text-3xl font-bold leading-none">2009</p>
                <p className="text-xs font-bold uppercase tracking-wider mt-1 text-green-900/70">Tahun Berdiri</p>
            </div>

            {/* Guide label */}
            {!showReal && (
                <div className="absolute top-3 right-3 bg-green-950/80 backdrop-blur border border-gold-600/20
          text-gold-400/60 text-[9px] font-bold px-2 py-1 rounded-lg tracking-widest uppercase z-10">
                    📁 public/images/profil/sejarah.jpg
                </div>
            )}
        </div>
    )
}

function TabContent({ active }) {
    const { visi, misi, nilai } = profilData
    return (
        <AnimatePresence mode="wait">
            {active === 'visi' && (
                <motion.div key="visi" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-gray-600 leading-[1.9] text-sm font-light italic">
                    "{visi}"
                </motion.div>
            )}
            {active === 'misi' && (
                <motion.div key="misi" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <ul className="space-y-2.5">
                        {misi.map((m, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                                <span className="w-5 h-5 rounded-full bg-gold-600/15 text-gold-700 text-[10px] font-bold
                  flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                                {m}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
            {active === 'nilai' && (
                <motion.div key="nilai" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {nilai.map(n => (
                        <div key={n.nama} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gold-600/15">
                            <span className="font-arabic text-xl text-gold-600 flex-shrink-0 leading-none mt-0.5">{n.arab}</span>
                            <div>
                                <p className="font-bold text-green-900 text-sm">{n.nama}</p>
                                <p className="text-gray-400 text-xs leading-relaxed">{n.ket}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2 — Kepengurusan
// ─────────────────────────────────────────────────────────────────────────────

const bagianConfig = [
    { key: 'pelindung', icon: <Shield size={15} />, label: 'Pelindung', cols: 'sm:grid-cols-2', darkHeader: true },
    { key: 'dewanSyuro', icon: <Crown size={15} />, label: 'Dewan Syuro', cols: 'sm:grid-cols-3', darkHeader: false },
    { key: 'tanfiziyah', icon: <Users size={15} />, label: 'Tanfiziyah', cols: 'sm:grid-cols-3', darkHeader: false },
    { key: 'divisi', icon: <Layers size={15} />, label: 'Divisi-Divisi', cols: 'sm:grid-cols-2 lg:grid-cols-3', darkHeader: false },
]

function AnggotaCard({ p, i, dark = false }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className={`rounded-2xl p-5 flex flex-col items-center text-center
        transition-all duration-300 hover:-translate-y-1
        ${dark
                    ? 'bg-white/[0.05] border border-gold-500/25 hover:border-gold-400/50 hover:bg-white/[0.09]'
                    : 'bg-white border border-green-100 hover:shadow-green-lg hover:border-gold-600/20'
                }`}
        >
            {dark
                ? <PersonPhotoDark foto={p.foto} nama={p.nama} size="md" />
                : <PersonPhoto foto={p.foto} nama={p.nama} size="md" />
            }
            <div className="mt-4">
                <h4 className={`font-display text-base leading-snug mb-1 ${dark ? 'text-white' : 'text-green-900'}`}>
                    {p.nama}
                </h4>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${dark ? 'text-gold-400' : 'text-gold-700'}`}>
                    {p.jabatan}
                </p>
                <p className={`text-xs leading-relaxed ${dark ? 'text-white/45' : 'text-gray-400'}`}>
                    {p.ket}
                </p>
            </div>
        </motion.div>
    )
}

function StrukturModal({ foto, onClose }) {
    const [imgErr, setImgErr] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 26 }}
                onClick={e => e.stopPropagation()}
                className="relative w-full max-w-5xl bg-green-950 rounded-2xl overflow-hidden border border-gold-600/20 shadow-2xl"
            >
                {foto && !imgErr ? (
                    <img src={foto} alt="Struktur Organisasi LTQ" onError={() => setImgErr(true)}
                        className="w-full object-contain max-h-[80vh]" />
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                        <span className="text-5xl mb-4 opacity-40">🗂️</span>
                        <p className="text-white/50 text-sm mb-2">Gambar struktur organisasi belum tersedia</p>
                        <code className="text-gold-400/50 text-xs bg-white/5 px-3 py-1.5 rounded-lg">
                            public/images/profil/struktur-organisasi.jpg
                        </code>
                    </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-950/90 to-transparent p-5">
                    <p className="text-white/60 text-xs text-center">Struktur Organisasi LTQ — Periode 2023/2025</p>
                </div>

                <button onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur
            border border-white/15 text-white flex items-center justify-center
            hover:bg-black/70 hover:border-gold-600/40 transition-all">
                    <X size={18} />
                </button>
            </motion.div>
        </motion.div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 3 — Pelaku Sejarah
// ─────────────────────────────────────────────────────────────────────────────

/** Kartu pendiri — ukuran XL untuk pengasuh, LG untuk utusan */
function PendiriCard({ orang, size = 'lg', isCenter = false }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: isCenter ? 30 : 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: isCenter ? 0 : 0.2 }}
            className={`flex flex-col items-center text-center
        ${isCenter ? 'z-10' : 'mt-10 lg:mt-16'}`}
        >
            {/* Crown ornament for center */}
            {isCenter && (
                <div className="mb-3 flex flex-col items-center gap-1">
                    <span className="text-gold-500 text-2xl">♛</span>
                    <span className="block w-px h-6 bg-gradient-to-b from-gold-500 to-transparent" />
                </div>
            )}

            {/* Photo */}
            <div className={`relative ${isCenter ? 'mb-5' : 'mb-4'}`}>
                <div className={`${isCenter ? 'w-36 h-36' : 'w-24 h-24'} rounded-full overflow-hidden
          ring-4 ${isCenter ? 'ring-gold-500/60' : 'ring-gold-600/30'}
          ring-offset-4 ring-offset-green-950 mx-auto`}>
                    <PersonPhotoDark foto={orang.foto} nama={orang.nama}
                        size={isCenter ? 'xl' : 'lg'} />
                </div>
                {isCenter && (
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-gold-600 to-gold-400
            rounded-full flex items-center justify-center shadow-[0_0_16px_rgba(201,168,76,0.6)]">
                        <Crown size={14} className="text-green-950" />
                    </div>
                )}
            </div>

            {/* Text */}
            <div className={`${isCenter ? 'max-w-xs' : 'max-w-[200px]'}`}>
                <h4 className={`font-display text-white leading-snug mb-1
          ${isCenter ? 'text-xl' : 'text-base'}`}>
                    {orang.nama}
                </h4>
                <p className={`text-gold-400 font-bold uppercase tracking-widest mb-3
          ${isCenter ? 'text-xs' : 'text-[10px]'}`}>
                    {orang.peran}
                </p>
                <p className={`text-white/40 leading-relaxed font-light
          ${isCenter ? 'text-sm' : 'text-xs'}`}>
                    {orang.ket}
                </p>
            </div>

            {/* Connector line for utusan */}
            {!isCenter && (
                <div className="hidden lg:block absolute top-[3.5rem] w-[calc(50%-3rem)] h-px bg-gradient-to-r from-gold-600/40 to-transparent
          data-[side=right]:bg-gradient-to-l" />
            )}
        </motion.div>
    )
}

/** Satu baris di timeline ketua */
function KetuaRow({ k, i, isLast }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
    const isActive = k.periode.includes('kini')

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="flex gap-4 relative"
        >
            {/* Timeline line */}
            <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
          border-2 transition-all
          ${isActive
                        ? 'bg-gold-600 border-gold-400 shadow-[0_0_20px_rgba(201,168,76,0.5)]'
                        : 'bg-green-800 border-green-600'
                    }`}>
                    <PersonPhotoDark foto={k.foto} nama={k.nama} size="sm" />
                </div>
                {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-green-600/50 to-transparent mt-1 min-h-[2rem]" />}
            </div>

            {/* Content */}
            <div className={`pb-8 ${isLast ? 'pb-0' : ''} flex-1 min-w-0`}>
                <div className={`rounded-2xl p-4 border transition-all duration-300
          ${isActive
                        ? 'bg-gold-600/10 border-gold-500/40 hover:border-gold-400/60'
                        : 'bg-white/[0.04] border-white/[0.07] hover:border-white/[0.12] hover:bg-white/[0.07]'
                    }`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                        <h4 className={`font-display text-base leading-snug
              ${isActive ? 'text-gold-300' : 'text-white'}`}>
                            {k.nama}
                        </h4>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap flex-shrink-0
              ${isActive
                                ? 'bg-gold-600/20 border-gold-500/50 text-gold-400'
                                : 'bg-white/8 border-white/10 text-white/40'
                            }`}>
                            {k.periode}
                        </span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed">{k.ket}</p>
                    {isActive && (
                        <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-gold-400 uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                            Periode Aktif
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

export default function ProfilPage() {
    const [tab, setTab] = useState('visi')
    const [strukturModal, setStrukturModal] = useState(false)

    const { kepengurusan, pendiri, riwayatKetua, fotoSejarah, fotoStruktur } = profilData

    return (
        <PageTransition>
            <PageHero
                title="Profil Lembaga"
                subtitle="Mengenal lebih dekat Lembaga Tahfidhul Qur'an"
                arabic="اللَّهُمَّ انْفَعْنَا بِمَا عَلَّمْتَنَا"
            />

            {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — SEJARAH & VISI MISI
      ═══════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Kiri: foto */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative pb-6 pr-6"
                    >
                        <FotoSejarah foto={fotoSejarah} />
                    </motion.div>

                    {/* Kanan: teks + tabs */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <span className="inline-flex items-center gap-2 bg-gold-100 border border-gold-600/30
              text-gold-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
                            ✦ Sejarah Kami
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl text-green-900 mb-6 leading-tight">
                            Membangun Generasi<br />
                            <em className="text-green-700">Qur'ani yang Berkarakter</em>
                        </h2>

                        {profilData.sejarah.split('\n\n').map((p, i) => (
                            <p key={i} className="text-gray-500 leading-[1.9] mb-4 font-light text-sm">{p}</p>
                        ))}

                        {/* Tabs visi/misi/nilai */}
                        <div className="mt-8">
                            <div className="flex rounded-xl overflow-hidden border border-green-100 mb-0">
                                {vmTabs.map(t => (
                                    <button key={t.id} onClick={() => setTab(t.id)}
                                        className={`flex-1 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-200
                      ${tab === t.id
                                                ? 'bg-green-900 text-white'
                                                : 'bg-white text-gray-400 hover:text-green-800 hover:bg-green-50'
                                            }`}>
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                            <div className="bg-gold-50 border border-t-0 border-gold-600/15 rounded-b-xl p-5 min-h-[130px]">
                                <TabContent active={tab} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — KEPENGURUSAN
      ═══════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-gradient-to-b from-green-950 to-green-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-diamond-dark opacity-40 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(201,168,76,0.06),transparent)] pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14">
                        <SectionHeader
                            badge="Kepengurusan"
                            title="Struktur Organisasi LTQ"
                            desc="Pengurus yang berdedikasi membimbing dan membangun lembaga"
                            light
                            center={false}
                        />
                        {/* Tombol lihat bagan */}
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => setStrukturModal(true)}
                            className="flex-shrink-0 flex items-center gap-2.5 bg-gold-600/15 border border-gold-500/40
                text-gold-400 hover:bg-gold-600/25 hover:border-gold-400/60 hover:text-gold-300
                px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest
                transition-all duration-200 group whitespace-nowrap self-start sm:self-auto"
                        >
                            <ZoomIn size={14} className="group-hover:scale-110 transition-transform" />
                            Lihat Bagan Struktur
                        </motion.button>
                    </div>

                    {/* 4 bagian kepengurusan */}
                    <div className="space-y-12">
                        {bagianConfig.map(({ key, icon, label, cols }) => {
                            const bagian = kepengurusan[key]
                            return (
                                <div key={key}>
                                    {/* Header bagian */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-xl bg-gold-600/15 border border-gold-600/25
                      flex items-center justify-center text-gold-400 flex-shrink-0">
                                            {icon}
                                        </div>
                                        <h3 className="font-display text-lg text-white">{label}</h3>
                                        <div className="flex-1 h-px bg-gradient-to-r from-gold-600/20 to-transparent" />
                                        <span className="text-xs text-white/25 font-bold">
                                            {bagian.anggota.length} orang
                                        </span>
                                    </div>

                                    {/* Grid anggota */}
                                    <div className={`grid grid-cols-1 ${cols} gap-4`}>
                                        {bagian.anggota.map((p, i) => (
                                            <AnggotaCard key={p.nama} p={p} i={i} dark />
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — PELAKU SEJARAH
      ═══════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-gradient-to-b from-green-900 to-green-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M40 0l40 40-40 40L0 40z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeader
                        badge="Pelaku Sejarah"
                        title="Orang-Orang di Balik LTQ"
                        desc="Para pendiri dan pemimpin yang membangun LTQ dari masa ke masa"
                        light
                    />

                    {/* ── Sub-section A: Para Pendiri ── */}
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-10 justify-center">
                            <span className="block w-12 h-px bg-gold-600/30" />
                            <span className="text-xs font-bold text-gold-500 uppercase tracking-[0.2em]">Para Pendiri</span>
                            <span className="block w-12 h-px bg-gold-600/30" />
                        </div>

                        {/* Layout: tengah (pengasuh) + kiri-kanan bawah (utusan) */}
                        <div className="relative flex flex-col lg:flex-row items-start justify-center gap-0 lg:gap-0">

                            {/* Utusan Kiri */}
                            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:pr-8 lg:mt-20 order-2 lg:order-1">
                                <div className="relative">
                                    {/* Connector line desktop */}
                                    <div className="hidden lg:block absolute top-[3rem] right-0 translate-x-full
                    w-8 h-px bg-gradient-to-r from-gold-600/40 to-transparent" />
                                    <PendiriCard orang={pendiri.utusan[0]} size="lg" isCenter={false} />
                                </div>
                            </div>

                            {/* Pengasuh Tengah */}
                            <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
                                <div className="relative">
                                    {/* Connector lines desktop */}
                                    <div className="hidden lg:block absolute top-[4.5rem] -left-8 w-8 h-px bg-gradient-to-l from-gold-600/40 to-transparent" />
                                    <div className="hidden lg:block absolute top-[4.5rem] -right-8 w-8 h-px bg-gradient-to-r from-gold-600/40 to-transparent" />
                                    <PendiriCard orang={pendiri.pengasuh} size="xl" isCenter={true} />
                                </div>
                            </div>

                            {/* Utusan Kanan */}
                            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start lg:pl-8 lg:mt-20 order-3">
                                <div className="relative">
                                    {/* Connector line desktop */}
                                    <div className="hidden lg:block absolute top-[3rem] left-0 -translate-x-full
                    w-8 h-px bg-gradient-to-l from-gold-600/40 to-transparent" />
                                    <PendiriCard orang={pendiri.utusan[1]} size="lg" isCenter={false} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Sub-section B: Riwayat Ketua ── */}
                    <div>
                        <div className="flex items-center gap-3 mb-10 justify-center">
                            <span className="block w-12 h-px bg-gold-600/30" />
                            <span className="text-xs font-bold text-gold-500 uppercase tracking-[0.2em]">Riwayat Ketua Pengurus</span>
                            <span className="block w-12 h-px bg-gold-600/30" />
                        </div>

                        <div className="max-w-2xl mx-auto">
                            {riwayatKetua.map((k, i) => (
                                <KetuaRow key={k.periode} k={k} i={i} isLast={i === riwayatKetua.length - 1} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Struktur Org Modal */}
            <AnimatePresence>
                {strukturModal && (
                    <StrukturModal foto={fotoStruktur} onClose={() => setStrukturModal(false)} />
                )}
            </AnimatePresence>
        </PageTransition>
    )
}