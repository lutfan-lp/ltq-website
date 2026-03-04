import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/common/PageTransition'
import PageHero from '../components/common/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import { santriData, tingkatanData } from '../data'
import { Search, ChevronLeft, ChevronRight, BookOpen, Users, Star, TrendingUp } from 'lucide-react'

// ── Konstanta ─────────────────────────────────────────────────
const PER_PAGE = 15

// Urutan filter: Semua → T → 6 → 5 → 4 → 3 → 2 → 1
const FILTER_ORDER = ['Semua', 'T', '6', '5', '4', '3', '2', '1']

// ── Progress bar ──────────────────────────────────────────────
function ProgressBar({ juz }) {
    const [ref, inView] = useInView({ triggerOnce: true })
    const pct = Math.round((juz / 30) * 100)
    const color =
        pct === 100 ? 'from-gold-500 to-gold-400' :
            pct >= 70 ? 'from-green-500 to-emerald-400' :
                pct >= 40 ? 'from-teal-500 to-green-400' :
                    'from-sky-500 to-teal-400'

    return (
        <div ref={ref} className="flex items-center gap-2.5 min-w-[130px]">
            <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${pct}%` : 0 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: [0.34, 1.06, 0.64, 1] }}
                    className={`h-full bg-gradient-to-r ${color} rounded-full`}
                />
            </div>
            <span className="text-xs text-white/50 w-9 text-right tabular-nums font-mono">{pct}%</span>
        </div>
    )
}

// ── Badge tingkatan ───────────────────────────────────────────
function TingkatBadge({ tingkat }) {
    const t = tingkatanData[tingkat]
    return (
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1
      rounded-full border tracking-wide whitespace-nowrap ${t.color}`}>
            {tingkat === 'T'
                ? <><Star size={9} className="fill-current" /> {t.label}</>
                : <>{t.label}</>
            }
        </span>
    )
}

// ── Satu baris tabel ──────────────────────────────────────────
function SantriRow({ santri, nomor }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.tr
            ref={ref}
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="border-b border-white/[0.05] hover:bg-gold-600/[0.06] transition-colors duration-150 group"
        >
            {/* No */}
            <td className="px-5 py-3.5 text-white/30 text-sm font-mono tabular-nums w-10">
                {nomor}
            </td>

            {/* Nama */}
            <td className="px-4 py-3.5">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-700 to-green-900
            border border-gold-600/20 flex items-center justify-center
            text-gold-400 text-xs font-bold flex-shrink-0 group-hover:border-gold-500/50 transition-colors">
                        {santri.nama.charAt(0)}
                    </div>
                    <span className="text-white text-sm font-semibold leading-tight">{santri.nama}</span>
                </div>
            </td>

            {/* Tingkat */}
            <td className="px-4 py-3.5">
                <TingkatBadge tingkat={santri.tingkat} />
            </td>

            {/* Juz hafal */}
            <td className="px-4 py-3.5">
                <span className="inline-flex items-center gap-1.5 bg-gold-600/15 border border-gold-600/25
          text-gold-400 text-xs font-bold px-3 py-1 rounded-full">
                    <BookOpen size={10} />
                    {santri.juz} Juz
                </span>
            </td>

            {/* Progress */}
            <td className="px-4 py-3.5">
                <ProgressBar juz={santri.juz} />
            </td>

            {/* Awal Menghafal */}
            <td className="px-4 py-3.5 text-white/40 text-xs whitespace-nowrap font-mono">
                {santri.awalMenghafal}
            </td>
        </motion.tr>
    )
}

// ── Pagination ────────────────────────────────────────────────
function Pagination({ current, total, onChange }) {
    if (total <= 1) return null

    // Hitung halaman yang ditampilkan: selalu tampilkan max 5 page button
    const pages = []
    let start = Math.max(1, current - 2)
    let end = Math.min(total, start + 4)
    if (end - start < 4) start = Math.max(1, end - 4)
    for (let i = start; i <= end; i++) pages.push(i)

    return (
        <div className="flex items-center justify-center gap-1.5 pt-2 pb-1">
            {/* Prev */}
            <button
                onClick={() => onChange(current - 1)}
                disabled={current === 1}
                className="w-9 h-9 rounded-xl border border-gold-600/20 flex items-center justify-center
          text-white/40 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-600/10
          disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
                <ChevronLeft size={16} />
            </button>

            {/* First page + ellipsis */}
            {start > 1 && (
                <>
                    <PageBtn n={1} current={current} onClick={onChange} />
                    {start > 2 && (
                        <span className="w-9 h-9 flex items-center justify-center text-white/25 text-sm">…</span>
                    )}
                </>
            )}

            {/* Page buttons */}
            {pages.map(n => (
                <PageBtn key={n} n={n} current={current} onClick={onChange} />
            ))}

            {/* Last page + ellipsis */}
            {end < total && (
                <>
                    {end < total - 1 && (
                        <span className="w-9 h-9 flex items-center justify-center text-white/25 text-sm">…</span>
                    )}
                    <PageBtn n={total} current={current} onClick={onChange} />
                </>
            )}

            {/* Next */}
            <button
                onClick={() => onChange(current + 1)}
                disabled={current === total}
                className="w-9 h-9 rounded-xl border border-gold-600/20 flex items-center justify-center
          text-white/40 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-600/10
          disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
                <ChevronRight size={16} />
            </button>
        </div>
    )
}

function PageBtn({ n, current, onClick }) {
    const active = n === current
    return (
        <button
            onClick={() => onClick(n)}
            className={`w-9 h-9 rounded-xl text-sm font-bold transition-all duration-200 border
        ${active
                    ? 'bg-gold-600 text-green-950 border-gold-500 shadow-[0_0_16px_rgba(201,168,76,0.35)]'
                    : 'border-gold-600/20 text-white/50 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-600/10'
                }`}
        >
            {n}
        </button>
    )
}

// ── Halaman utama ─────────────────────────────────────────────
export default function SantriPage() {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('Semua')
    const [page, setPage] = useState(1)

    // Reset ke halaman 1 saat filter/search berubah
    useEffect(() => { setPage(1) }, [search, filter])

    // Data setelah filter & search
    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase()
        return santriData.filter(s => {
            const matchTingkat = filter === 'Semua' || s.tingkat === filter
            const matchSearch = !q || s.nama.toLowerCase().includes(q)
            return matchTingkat && matchSearch
        })
    }, [search, filter])

    // Pagination
    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
    const safePage = Math.min(page, totalPages)
    const pageData = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE)
    const startNo = (safePage - 1) * PER_PAGE + 1

    // Stats cards (selalu dari data penuh, bukan filtered)
    const stats = useMemo(() => ({
        total: santriData.length,
        takhassus: santriData.filter(s => s.tingkat === 'T').length,
        avgJuz: (santriData.reduce((a, b) => a + b.juz, 0) / santriData.length).toFixed(1),
        tertinggi: Math.max(...santriData.map(s => s.juz)),
    }), [])

    return (
        <PageTransition>
            <PageHero
                title="Data Santri"
                subtitle="Transparansi progres hafalan seluruh santri putra aktif LTQ"
                arabic="وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ"
            />

            <section className="py-20 bg-gradient-to-b from-green-950 via-green-950 to-green-900 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-diamond-dark opacity-50 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(201,168,76,0.05),transparent)] pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeader
                        badge="Santri Putra Aktif"
                        title="Data Progres Hafalan"
                        desc="Catatan perjalanan hafalan seluruh santri putra LTQ — transparan dan terukur"
                        light
                    />

                    {/* ── Stats cards ── */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                        {[
                            { icon: <Users size={18} />, label: 'Santri Aktif', val: stats.total, suffix: '' },
                            { icon: <Star size={18} />, label: 'Takhassus', val: stats.takhassus, suffix: '' },
                            { icon: <TrendingUp size={18} />, label: 'Rata-rata Juz', val: stats.avgJuz, suffix: '' },
                            { icon: <BookOpen size={18} />, label: 'Tertinggi', val: stats.tertinggi, suffix: ' Juz' },
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07, duration: 0.45 }}
                                className="bg-white/[0.04] border border-gold-600/20 rounded-2xl p-4 backdrop-blur-sm
                  hover:bg-white/[0.07] hover:border-gold-500/35 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-gold-500/70">{s.icon}</span>
                                    <span className="text-[10px] text-white/25 font-bold uppercase tracking-widest">LTQ</span>
                                </div>
                                <p className="font-display text-2xl text-gold-400 font-bold leading-none mb-1">
                                    {s.val}{s.suffix}
                                </p>
                                <p className="text-xs text-white/35 uppercase tracking-wider">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* ── Toolbar: search + filter tabs ── */}
                    <div className="flex flex-col gap-4 mb-5">

                        {/* Search */}
                        <div className="relative max-w-sm">
                            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Cari nama santri…"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="w-full bg-white/[0.06] border border-gold-600/25 text-white text-sm
                  placeholder-white/30 rounded-xl pl-10 pr-4 py-2.5
                  outline-none focus:border-gold-500/60 focus:bg-white/[0.09]
                  transition-all duration-200"
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30
                    hover:text-white/60 transition-colors text-lg leading-none"
                                >×</button>
                            )}
                        </div>

                        {/* Filter tingkatan — tombol pill horizontal */}
                        <div className="flex flex-wrap gap-2">
                            {FILTER_ORDER.map(key => {
                                const isAll = key === 'Semua'
                                const count = isAll ? santriData.length : santriData.filter(s => s.tingkat === key).length
                                const label = isAll ? 'Semua' : key === 'T' ? 'Takhassus' : `Tingkat ${key}`
                                const rentang = isAll ? '' : tingkatanData[key].rentang
                                const active = filter === key

                                return (
                                    <button
                                        key={key}
                                        onClick={() => setFilter(key)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold
                      tracking-wide transition-all duration-200 border whitespace-nowrap
                      ${active
                                                ? 'bg-gold-600 text-green-950 border-gold-500 shadow-[0_0_16px_rgba(201,168,76,0.3)]'
                                                : 'bg-white/[0.04] border-gold-600/20 text-white/55 hover:text-gold-300 hover:border-gold-500/40 hover:bg-white/[0.08]'
                                            }`}
                                    >
                                        <span>{label}</span>
                                        {rentang && (
                                            <span className={`text-[10px] ${active ? 'text-green-900/60' : 'text-white/25'}`}>
                                                {rentang}
                                            </span>
                                        )}
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold
                      ${active ? 'bg-green-950/25 text-green-900' : 'bg-white/10 text-white/40'}`}>
                                            {count}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* ── Tabel ── */}
                    <div className="bg-white/[0.03] border border-gold-600/15 rounded-2xl overflow-hidden backdrop-blur-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gold-600/10 border-b border-gold-600/20">
                                        {[
                                            { label: '#', w: 'w-10' },
                                            { label: 'Nama Santri', w: '' },
                                            { label: 'Tingkatan', w: 'w-36' },
                                            { label: 'Juz Hafal', w: 'w-28' },
                                            { label: 'Progress', w: 'w-44' },
                                            { label: 'Awal Menghafal', w: 'w-36' },
                                        ].map(({ label, w }) => (
                                            <th key={label}
                                                className={`px-4 py-4 text-left text-[10px] font-bold text-gold-500/80
                          uppercase tracking-[0.12em] whitespace-nowrap ${w}`}>
                                                {label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    <AnimatePresence mode="wait">
                                        {pageData.length === 0 ? (
                                            <motion.tr
                                                key="empty"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <td colSpan={6} className="text-center py-16 text-white/30 text-sm">
                                                    <Search size={22} className="mx-auto mb-2 opacity-30" />
                                                    Tidak ada santri yang cocok dengan pencarian
                                                </td>
                                            </motion.tr>
                                        ) : (
                                            pageData.map((s, i) => (
                                                <SantriRow
                                                    key={s.id}
                                                    santri={s}
                                                    nomor={startNo + i}
                                                />
                                            ))
                                        )}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>

                        {/* ── Footer tabel ── */}
                        <div className="px-5 py-4 bg-white/[0.02] border-t border-gold-600/10
              flex flex-col sm:flex-row items-center justify-between gap-4">

                            {/* Info hasil */}
                            <p className="text-xs text-white/30 order-2 sm:order-1">
                                {filtered.length === 0
                                    ? 'Tidak ada hasil'
                                    : <>
                                        Menampilkan{' '}
                                        <span className="text-gold-500 font-bold">{startNo}–{Math.min(safePage * PER_PAGE, filtered.length)}</span>
                                        {' '}dari{' '}
                                        <span className="text-gold-500 font-bold">{filtered.length}</span>
                                        {' '}santri
                                        {filter !== 'Semua' && (
                                            <span className="text-white/20 ml-1">
                                                · filter: {filter === 'T' ? 'Takhassus' : `Tingkat ${filter}`}
                                            </span>
                                        )}
                                    </>
                                }
                            </p>

                            {/* Pagination */}
                            <div className="order-1 sm:order-2">
                                <Pagination
                                    current={safePage}
                                    total={totalPages}
                                    onChange={setPage}
                                />
                            </div>

                        </div>
                    </div>

                    {/* ── Keterangan tingkatan ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2"
                    >
                        {Object.entries(tingkatanData).map(([key, t]) => (
                            <div
                                key={key}
                                className="flex flex-col items-center gap-1.5 bg-white/[0.03] border border-gold-600/10
                  rounded-xl py-3 px-2 text-center"
                            >
                                <TingkatBadge tingkat={key} />
                                <span className="text-[10px] text-white/30 leading-tight">{t.rentang}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* ── Catatan ── */}
                    <p className="mt-5 text-center text-[11px] text-white/20">
                        Data diperbarui secara berkala oleh pengurus LTQ · Tahun Ajaran 2024/2025
                    </p>
                </div>
            </section>
        </PageTransition>
    )
}