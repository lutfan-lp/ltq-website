import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/common/PageTransition'
import PageHero from '../components/common/PageHero'
import { santriData, tingkatanData, aturanAkademik } from '../data'
import {
    Lock, User, Eye, EyeOff, ShieldCheck, LogOut, MapPin, Calendar,
    GraduationCap, BookOpen, TrendingUp, ChevronDown, AlertCircle,
    CheckCircle2, Info, Award, ArrowUpRight,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const HAL_PER_JUZ = aturanAkademik.halamanPerJuz       // 20
const TARGET_JUZ = aturanAkademik.targetJuzPerSemester // 3
const TARGET_HAL = TARGET_JUZ * HAL_PER_JUZ            // 60

/** Hilangkan spasi & lowercase — untuk pencocokan username */
const normalisasi = (str) => str.replace(/\s+/g, '').toLowerCase()

/**
 * Konversi (juz, halaman) → total halaman kumulatif.
 *
 * PENTING: Tradisi pesantren ini memulai hafalan dari JUZ 30 terlebih dahulu,
 * baru lanjut Juz 1, 2, 3, ... hingga Juz 29. Karena itu Juz 30 selalu berada
 * di URUTAN PALING AWAL (bukan paling akhir), sehingga dipetakan ke posisi 0 —
 * bukan ke posisi 30 seperti penomoran juz absolut biasa.
 */
const urutanJuz = (juz) => (juz === 30 ? 0 : juz)
const keHalamanKum = (juz, halaman) => urutanJuz(juz) * HAL_PER_JUZ + halaman

/** Format "X Juz Y Halaman" dari total halaman */
function formatJuzHalaman(totalHalaman) {
    const juz = Math.floor(totalHalaman / HAL_PER_JUZ)
    const hal = totalHalaman % HAL_PER_JUZ
    if (juz === 0) return `${hal} Halaman`
    if (hal === 0) return `${juz} Juz`
    return `${juz} Juz ${hal} Halaman`
}

const statusConfig = {
    ziyadah: { label: 'Ziyadah', ket: 'Sedang menghafal', color: 'bg-sky-50 text-sky-700 border-sky-200' },
    takhassus: { label: 'Takhassus', ket: 'Khatam 30 Juz', color: 'bg-gold-100 text-gold-800 border-gold-400' },
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGIN PANEL
// ─────────────────────────────────────────────────────────────────────────────

function LoginPanel({ onSuccess }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPw, setShowPw] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        if (!username.trim() || !password.trim()) {
            setError('Username dan password wajib diisi.')
            return
        }

        setLoading(true)
        // Simulasi delay pencarian agar terasa natural
        setTimeout(() => {
            const inputUser = normalisasi(username)
            const found = santriData.find(s => normalisasi(s.nama) === inputUser)

            if (!found) {
                setError('Username tidak ditemukan. Pastikan nama lengkap santri ditulis tanpa spasi.')
                setLoading(false)
                return
            }
            if (found.tanggalLahir !== password.trim()) {
                setError('Password salah. Gunakan format tanggal lahir: TAHUN-BULAN-TANGGAL.')
                setLoading(false)
                return
            }

            setLoading(false)
            onSuccess(found)
        }, 500)
    }

    return (
        <section className="py-20 bg-gradient-to-b from-green-950 via-green-950 to-green-900 relative overflow-hidden min-h-[80vh] flex items-center">
            <div className="absolute inset-0 bg-diamond-dark opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(201,168,76,0.07),transparent)] pointer-events-none" />

            <div className="relative z-10 max-w-md mx-auto px-4 sm:px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="bg-white/[0.04] border border-gold-600/20 rounded-3xl p-7 sm:p-9 backdrop-blur-sm shadow-2xl"
                >
                    {/* Icon header */}
                    <div className="flex flex-col items-center text-center mb-7">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(201,168,76,0.35)]">
                            <ShieldCheck size={28} className="text-green-950" />
                        </div>
                        <h1 className="font-display text-2xl text-white mb-2">Pemantauan Hafalan Santri</h1>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Khusus untuk wali santri — masukkan kredensial untuk melihat perkembangan hafalan putra Anda
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Username */}
                        <div>
                            <label className="block text-xs font-bold text-gold-400/80 uppercase tracking-widest mb-2">
                                Username
                            </label>
                            <div className="relative">
                                <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder="NamaLengkapSantriTanpaSpasi"
                                    className="w-full bg-white/[0.06] border border-gold-600/25 text-white text-sm
                    placeholder-white/25 rounded-xl pl-11 pr-4 py-3
                    outline-none focus:border-gold-500/60 focus:bg-white/[0.09]
                    transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs font-bold text-gold-400/80 uppercase tracking-widest mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                <input
                                    type={showPw ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="2010-05-17"
                                    className="w-full bg-white/[0.06] border border-gold-600/25 text-white text-sm
                    placeholder-white/25 rounded-xl pl-11 pr-11 py-3
                    outline-none focus:border-gold-500/60 focus:bg-white/[0.09]
                    transition-all duration-200"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPw(!showPw)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-gold-400 transition-colors"
                                >
                                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>
                            <p className="text-[11px] text-white/25 mt-1.5 ml-1">Format: tahun-bulan-tanggal lahir santri</p>
                        </div>

                        {/* Error */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3"
                                >
                                    <AlertCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-red-300 leading-relaxed">{error}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-green-950 font-bold
                text-sm py-3.5 rounded-xl tracking-wide transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.4)]
                disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0
                flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-green-950/30 border-t-green-950 rounded-full animate-spin" />
                                    Memeriksa...
                                </>
                            ) : (
                                <>Masuk</>
                            )}
                        </button>
                    </form>

                    {/* Info panel */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-start gap-2.5 text-white/35">
                            <Info size={14} className="flex-shrink-0 mt-0.5 text-gold-500/60" />
                            <p className="text-[11px] leading-relaxed">
                                <strong className="text-white/50">Username</strong> = nama lengkap santri tanpa spasi.{' '}
                                <strong className="text-white/50">Password</strong> = tanggal lahir santri (format: TAHUN-BULAN-TANGGAL).
                                Lupa kredensial? Hubungi pengurus LTQ.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// DASHBOARD — komponen kecil
// ─────────────────────────────────────────────────────────────────────────────

function Avatar({ nama, size = 'md' }) {
    const cls = size === 'lg' ? 'w-20 h-20 text-2xl' : 'w-14 h-14 text-lg'
    return (
        <div className={`${cls} rounded-full bg-gradient-to-br from-green-700 to-green-900
      border-2 border-gold-600/30 flex items-center justify-center flex-shrink-0`}>
            <span className="font-display text-gold-400 font-bold leading-none">
                {nama.charAt(0)}
            </span>
        </div>
    )
}

function BiodataCard({ santri }) {
    const st = statusConfig[santri.status]
    const tingkatInfo = tingkatanData[santri.tingkat]

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/[0.04] border border-gold-600/20 rounded-2xl p-6"
        >
            <div className="flex items-center gap-4 mb-6">
                <Avatar nama={santri.nama} size="lg" />
                <div className="min-w-0">
                    <h2 className="font-display text-xl text-white leading-snug mb-1.5">{santri.nama}</h2>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1
            rounded-full border tracking-wide ${st.color}`}>
                        {santri.status === 'takhassus' && <Award size={10} />}
                        {st.label}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <InfoRow icon={<MapPin size={13} />} label="Alamat" value={santri.alamat} />
                <InfoRow icon={<Calendar size={13} />} label="Tahun Masuk" value={santri.tahunMasuk} />
                <InfoRow icon={<GraduationCap size={13} />} label="Tingkatan"
                    value={santri.status === 'takhassus' ? 'Takhassus (30 Juz)' : `${tingkatInfo.label} (${tingkatInfo.rentang})`} />
                <InfoRow icon={<BookOpen size={13} />} label="Total Hafalan Saat Ini"
                    value={`${santri.status === 'takhassus' ? 30 : santri.juz} Juz`} />
            </div>
        </motion.div>
    )
}

function InfoRow({ icon, label, value }) {
    const kosong = value === null || value === undefined || value === ''
    return (
        <div className="bg-white/[0.03] rounded-xl p-3.5 border border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-gold-500/70 mb-1.5">
                {icon}
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{label}</span>
            </div>
            <p className={`text-sm font-medium leading-snug ${kosong ? 'text-white/25 italic' : 'text-white'}`}>
                {kosong ? 'Belum tersedia' : value}
            </p>
        </div>
    )
}

function FilterBar({ periodeList, filterPeriode, setFilterPeriode, filterSemester, setFilterSemester }) {
    return (
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Periode dropdown */}
            <div className="relative flex-1">
                <label className="block text-[10px] font-bold text-gold-500/70 uppercase tracking-widest mb-1.5">
                    Periode
                </label>
                <div className="relative">
                    <select
                        value={filterPeriode}
                        onChange={e => setFilterPeriode(e.target.value)}
                        className="w-full appearance-none bg-white/[0.05] border border-gold-600/25 text-white text-sm
              rounded-xl pl-4 pr-10 py-2.5 outline-none focus:border-gold-500/60
              transition-all duration-200 cursor-pointer"
                    >
                        <option value="Semua Periode" className="bg-green-950">Semua Periode</option>
                        {periodeList.map(p => (
                            <option key={p} value={p} className="bg-green-950">{p}</option>
                        ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                </div>
            </div>

            {/* Semester buttons */}
            <div className="flex-1">
                <label className="block text-[10px] font-bold text-gold-500/70 uppercase tracking-widest mb-1.5">
                    Semester
                </label>
                <div className="flex gap-2">
                    {['Semua', 'Ganjil', 'Genap'].map(s => (
                        <button
                            key={s}
                            onClick={() => setFilterSemester(s)}
                            className={`flex-1 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 border
                ${filterSemester === s
                                    ? 'bg-gold-600 text-green-950 border-gold-500'
                                    : 'bg-white/[0.04] border-gold-600/20 text-white/50 hover:text-gold-300 hover:border-gold-500/40'
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

/** Satu baris rekap semester */
function SemesterRow({ r, isLast }) {
    const awalKum = keHalamanKum(r.awalJuz, r.awalHalaman)
    const akhirKum = keHalamanKum(r.akhirJuz, r.akhirHalaman)
    const diperoleh = akhirKum - awalKum
    const tercapai = diperoleh >= TARGET_HAL

    return (
        <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-5 rounded-2xl border transition-all duration-200
        ${isLast ? 'bg-gold-600/[0.07] border-gold-500/30' : 'bg-white/[0.03] border-white/[0.07]'}`}
        >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{r.periode}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white/50 tracking-wide">
                        Semester {r.semester}
                    </span>
                </div>
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full border
          ${tercapai
                        ? 'bg-green-500/15 border-green-500/30 text-green-400'
                        : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                    }`}>
                    {tercapai ? <CheckCircle2 size={10} /> : <AlertCircle size={10} />}
                    {tercapai ? 'Target Tercapai' : 'Di Bawah Target'}
                </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Awal Hafalan</p>
                    <p className="text-sm font-bold text-white/70">Juz {r.awalJuz}{r.awalHalaman > 0 ? `:${r.awalHalaman}` : ''}</p>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <ArrowUpRight size={16} className="text-gold-500" />
                </div>
                <div className="text-center">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Akhir Hafalan</p>
                    <p className="text-sm font-bold text-gold-300">Juz {r.akhirJuz}{r.akhirHalaman > 0 ? `:${r.akhirHalaman}` : ''}</p>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-white/40">Total diperoleh semester ini</span>
                <span className="text-sm font-bold text-gold-400">{formatJuzHalaman(diperoleh)}</span>
            </div>
        </motion.div>
    )
}

function RingkasanCard({ filtered }) {
    if (filtered.length === 0) return null

    const awalPertama = filtered[0]
    const akhirTerakhir = filtered[filtered.length - 1]
    const totalAwalKum = keHalamanKum(awalPertama.awalJuz, awalPertama.awalHalaman)
    const totalAkhirKum = keHalamanKum(akhirTerakhir.akhirJuz, akhirTerakhir.akhirHalaman)
    const totalDiperoleh = totalAkhirKum - totalAwalKum

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-3 mb-6"
        >
            <div className="bg-white/[0.04] border border-gold-600/15 rounded-2xl p-4 text-center">
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1.5">Awal Hafalan</p>
                <p className="font-display text-lg text-white font-bold">
                    Juz {awalPertama.awalJuz}{awalPertama.awalHalaman > 0 ? `:${awalPertama.awalHalaman}` : ''}
                </p>
            </div>
            <div className="bg-white/[0.04] border border-gold-600/15 rounded-2xl p-4 text-center">
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1.5">Akhir Hafalan</p>
                <p className="font-display text-lg text-gold-300 font-bold">
                    Juz {akhirTerakhir.akhirJuz}{akhirTerakhir.akhirHalaman > 0 ? `:${akhirTerakhir.akhirHalaman}` : ''}
                </p>
            </div>
            <div className="bg-gold-600/10 border border-gold-500/30 rounded-2xl p-4 text-center">
                <p className="text-[10px] text-gold-400/70 uppercase tracking-widest mb-1.5">Total Diperoleh</p>
                <p className="font-display text-lg text-gold-400 font-bold">{formatJuzHalaman(totalDiperoleh)}</p>
            </div>
        </motion.div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// DASHBOARD — utama
// ─────────────────────────────────────────────────────────────────────────────

function Dashboard({ santri, onLogout }) {
    const riwayat = santri.riwayatSemester || []
    const adaRiwayat = riwayat.length > 0

    // Daftar periode unik, urutan terbaru → terlama
    const periodeList = useMemo(() => {
        const unik = [...new Set(riwayat.map(r => r.periode))]
        return unik.slice().reverse()
    }, [riwayat])

    // Default: periode & semester TERAKHIR (paling baru) — jika ada riwayat
    const terakhir = adaRiwayat ? riwayat[riwayat.length - 1] : null
    const [filterPeriode, setFilterPeriode] = useState(terakhir?.periode ?? 'Semua Periode')
    const [filterSemester, setFilterSemester] = useState(terakhir?.semester ?? 'Semua')

    const filtered = useMemo(() => {
        return riwayat.filter(r =>
            (filterPeriode === 'Semua Periode' || r.periode === filterPeriode) &&
            (filterSemester === 'Semua' || r.semester === filterSemester)
        )
    }, [riwayat, filterPeriode, filterSemester])

    return (
        <section className="py-20 bg-gradient-to-b from-green-950 via-green-950 to-green-900 relative overflow-hidden min-h-screen">
            <div className="absolute inset-0 bg-diamond-dark opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">

                {/* Header bar */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-xs text-gold-500/70 font-bold uppercase tracking-widest mb-1">Dashboard Wali Santri</p>
                        <h1 className="font-display text-2xl text-white">Perkembangan Hafalan</h1>
                    </div>
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-2 text-xs font-bold text-white/50 hover:text-red-400
              border border-white/10 hover:border-red-500/30 px-4 py-2.5 rounded-xl transition-all duration-200"
                    >
                        <LogOut size={13} />
                        Keluar
                    </button>
                </div>

                {/* Biodata */}
                <div className="mb-8">
                    <BiodataCard santri={santri} />
                </div>

                {/* Target info banner */}
                <div className="flex items-start gap-3 bg-blue-500/[0.06] border border-blue-500/20 rounded-2xl p-4 mb-8">
                    <Info size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-200/70 leading-relaxed">
                        Target minimal pencapaian hafalan santri adalah{' '}
                        <strong className="text-blue-200">{TARGET_JUZ} Juz ({TARGET_HAL} halaman) per semester</strong>{' '}
                        (1 semester = 6 bulan, 1 Juz = {HAL_PER_JUZ} halaman).
                    </p>
                </div>

                {!adaRiwayat ? (
                    /* Santri sudah Khatam sebelum periode pencatatan dimulai */
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-14 bg-gold-600/[0.07] border border-gold-500/25 rounded-2xl"
                    >
                        <Award size={32} className="mx-auto mb-3 text-gold-400" />
                        <h3 className="font-display text-lg text-gold-300 mb-2">Sudah Khatam 30 Juz</h3>
                        <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
                            Santri telah menyelesaikan hafalan 30 Juz (Khotim) sebelum periode pencatatan
                            semester ini dimulai, sehingga rincian per-semester tidak tersedia.
                        </p>
                    </motion.div>
                ) : (
                    <>
                        {/* Rekap section */}
                        <div className="mb-3">
                            <h3 className="font-display text-lg text-white mb-1">Rekapitulasi Hafalan</h3>
                            <p className="text-white/30 text-xs">
                                Periode aktif saat ini: <span className="text-gold-400 font-bold">{aturanAkademik.periodeAktif}</span>,
                                Semester <span className="text-gold-400 font-bold">{aturanAkademik.semesterAktif}</span>
                            </p>
                        </div>

                        <FilterBar
                            periodeList={periodeList}
                            filterPeriode={filterPeriode}
                            setFilterPeriode={setFilterPeriode}
                            filterSemester={filterSemester}
                            setFilterSemester={setFilterSemester}
                        />

                        {filtered.length > 1 && <RingkasanCard filtered={filtered} />}

                        <AnimatePresence mode="wait">
                            {filtered.length === 0 ? (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-16 bg-white/[0.02] border border-white/[0.06] rounded-2xl"
                                >
                                    <BookOpen size={28} className="mx-auto mb-3 text-white/15" />
                                    <p className="text-white/30 text-sm">Tidak ada data hafalan pada filter yang dipilih.</p>
                                </motion.div>
                            ) : (
                                <motion.div key="list" className="space-y-3">
                                    {filtered.slice().reverse().map((r, i) => (
                                        <SemesterRow key={`${r.periode}-${r.semester}`} r={r} isLast={i === 0} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}

                {/* Footer note */}
                <p className="mt-8 text-center text-[11px] text-white/20">
                    Data hafalan diperbarui oleh pengurus LTQ setiap akhir semester
                </p>
            </div>
        </section>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function SantriPage() {
    const [loggedIn, setLoggedIn] = useState(null)

    return (
        <PageTransition>
            {!loggedIn && (
                <PageHero
                    title="Pemantauan Santri"
                    subtitle="Akses khusus wali santri untuk memantau perkembangan hafalan putranya"
                    arabic="وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
                />
            )}

            {loggedIn
                ? <Dashboard santri={loggedIn} onLogout={() => setLoggedIn(null)} />
                : <LoginPanel onSuccess={setLoggedIn} />
            }
        </PageTransition>
    )
}