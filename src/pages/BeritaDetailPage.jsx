import { useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Tag, Share2, ChevronRight } from 'lucide-react'
import PageTransition from '../components/common/PageTransition'
import BeritaImage from '../components/berita/BeritaImage'
import ArtikelKonten from '../components/berita/ArtikelKonten'
import { beritaData, beritaKategori } from '../data'

/* ── Kategori badge colors ── */
const katColors = {
    Prestasi: 'bg-gold-100 text-gold-800 border-gold-300',
    Pengumuman: 'bg-red-50 text-red-700 border-red-200',
    Kegiatan: 'bg-green-50 text-green-700 border-green-200',
    Informasi: 'bg-blue-50 text-blue-700 border-blue-200',
}

/* ── Related article mini card ── */
function RelatedCard({ b }) {
    return (
        <Link
            to={`/berita/${b.slug}`}
            className="group flex gap-4 p-4 rounded-2xl border border-green-100 bg-white hover:border-gold-600/30 hover:shadow-gold transition-all duration-300"
        >
            <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                <BeritaImage item={b} showLabel={false} />
            </div>
            <div className="min-w-0 flex flex-col justify-center">
                <span className={`self-start text-[9px] font-bold px-2 py-0.5 rounded-full border tracking-widest uppercase mb-1.5 ${katColors[b.kategori] || ''}`}>
                    {b.kategori}
                </span>
                <h4 className="text-sm font-bold text-green-900 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                    {b.judul}
                </h4>
                <span className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                    <Calendar size={10} />{b.tanggal}
                </span>
            </div>
        </Link>
    )
}

/* ── Page ── */
export default function BeritaDetailPage() {
    const { slug } = useParams()
    const navigate = useNavigate()

    const artikel = useMemo(() => beritaData.find(b => b.slug === slug), [slug])
    const idx = useMemo(() => beritaData.findIndex(b => b.slug === slug), [slug])
    const prev = idx > 0 ? beritaData[idx - 1] : null
    const next = idx < beritaData.length - 1 ? beritaData[idx + 1] : null
    const related = useMemo(() =>
        beritaData.filter(b => b.slug !== slug && b.kategori === artikel?.kategori).slice(0, 3),
        [slug, artikel]
    )
    const others = useMemo(() =>
        beritaData.filter(b => b.slug !== slug).slice(0, 4),
        [slug]
    )

    /* 404 */
    if (!artikel) {
        return (
            <PageTransition>
                <div className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 text-center px-4">
                    <span className="text-6xl mb-4">📰</span>
                    <h1 className="font-display text-3xl text-green-900 mb-3">Berita Tidak Ditemukan</h1>
                    <p className="text-gray-400 mb-8">Artikel yang Anda cari tidak tersedia atau sudah dipindahkan.</p>
                    <Link to="/berita" className="btn-primary">← Kembali ke Daftar Berita</Link>
                </div>
            </PageTransition>
        )
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: artikel.judul, url: window.location.href })
        } else {
            navigator.clipboard.writeText(window.location.href)
            alert('Link berhasil disalin!')
        }
    }

    return (
        <PageTransition>
            {/* ── Hero image ── */}
            <div className="relative w-full h-[45vh] md:h-[55vh] bg-green-950 mt-[70px] overflow-hidden">
                <BeritaImage item={artikel} showLabel={false} />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-950/40 to-transparent" />

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-6 left-0 right-0 px-4 sm:px-6"
                >
                    <div className="max-w-4xl mx-auto">
                        <nav className="flex items-center gap-1.5 text-xs text-white/50">
                            <Link to="/" className="hover:text-gold-400 transition-colors">Beranda</Link>
                            <ChevronRight size={12} />
                            <Link to="/berita" className="hover:text-gold-400 transition-colors">Berita</Link>
                            <ChevronRight size={12} />
                            <span className="text-white/30 truncate max-w-[200px]">{artikel.judul}</span>
                        </nav>
                    </div>
                </motion.div>

                {/* Title overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-8"
                >
                    <div className="max-w-4xl mx-auto">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 rounded-full border tracking-widest uppercase mb-4 ${katColors[artikel.kategori] || ''}`}>
                            <Tag size={9} />
                            {artikel.kategori}
                        </span>
                        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-white leading-tight max-w-3xl">
                            {artikel.judul}
                        </h1>
                    </div>
                </motion.div>
            </div>

            {/* ── Main content ── */}
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* ── Article body ── */}
                        <article className="flex-1 min-w-0">
                            {/* Meta bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-green-100"
                            >
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1.5">
                                        <User size={13} className="text-gold-600" />
                                        {artikel.penulis}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={13} className="text-gold-600" />
                                        {artikel.tanggal}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={13} className="text-gold-600" />
                                        {artikel.waktuBaca} baca
                                    </span>
                                </div>

                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 text-xs font-bold text-green-700 border border-green-200 px-3 py-1.5 rounded-full hover:bg-green-50 hover:border-green-300 transition-all duration-200"
                                >
                                    <Share2 size={13} />
                                    Bagikan
                                </button>
                            </motion.div>

                            {/* Ringkasan / lead */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                                className="text-base text-green-800 leading-relaxed font-medium mb-8 p-5 bg-gold-50 rounded-2xl border border-gold-600/15"
                            >
                                {artikel.ringkasan}
                            </motion.p>

                            {/* Article content blocks */}
                            <ArtikelKonten konten={artikel.konten} />

                            {/* ── Panduan menambah foto ── */}
                            {/* {!artikel.foto && (
                                <div className="mt-10 p-5 bg-green-950 rounded-2xl border border-gold-600/15 text-sm">
                                    <p className="text-gold-400 font-bold text-xs uppercase tracking-widest mb-2">📁 Cara Menambah Foto Berita</p>
                                    <p className="text-white/45 text-xs leading-relaxed">
                                        Letakkan file gambar di{' '}
                                        <code className="bg-white/10 text-gold-300 px-1.5 py-0.5 rounded font-mono">public/images/berita/</code>
                                        , lalu ubah{' '}
                                        <code className="bg-white/10 text-gold-300 px-1.5 py-0.5 rounded font-mono">foto: null</code>
                                        {' '}menjadi{' '}
                                        <code className="bg-white/10 text-gold-300 px-1.5 py-0.5 rounded font-mono">foto: '/images/berita/nama-file.jpg'</code>
                                        {' '}di <code className="bg-white/10 text-gold-300 px-1.5 py-0.5 rounded font-mono">src/data/index.js</code>.
                                    </p>
                                </div>
                            )} */}

                            {/* ── Prev / Next navigation ── */}
                            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-green-100">
                                {prev ? (
                                    <Link
                                        to={`/berita/${prev.slug}`}
                                        className="group flex items-start gap-3 p-4 rounded-2xl border border-green-100 hover:border-gold-600/30 hover:shadow-gold transition-all duration-300"
                                    >
                                        <div className="w-8 h-8 rounded-full border border-green-200 flex items-center justify-center flex-shrink-0 group-hover:bg-green-900 group-hover:border-green-900 group-hover:text-white transition-all duration-200 text-green-600">
                                            <ArrowLeft size={15} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Sebelumnya</p>
                                            <p className="text-sm font-bold text-green-900 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                                                {prev.judul}
                                            </p>
                                        </div>
                                    </Link>
                                ) : <div />}

                                {next ? (
                                    <Link
                                        to={`/berita/${next.slug}`}
                                        className="group flex items-start gap-3 p-4 rounded-2xl border border-green-100 hover:border-gold-600/30 hover:shadow-gold transition-all duration-300 sm:flex-row-reverse sm:text-right"
                                    >
                                        <div className="w-8 h-8 rounded-full border border-green-200 flex items-center justify-center flex-shrink-0 group-hover:bg-green-900 group-hover:border-green-900 group-hover:text-white transition-all duration-200 text-green-600">
                                            <ArrowRight size={15} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Selanjutnya</p>
                                            <p className="text-sm font-bold text-green-900 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                                                {next.judul}
                                            </p>
                                        </div>
                                    </Link>
                                ) : <div />}
                            </div>
                        </article>

                        {/* ── Sidebar ── */}
                        <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-8">

                            {/* Back button */}
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-sm font-bold text-green-700 hover:text-gold-700 transition-colors group"
                            >
                                <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                                Kembali
                            </button>

                            {/* Related articles */}
                            {(related.length > 0 || others.length > 0) && (
                                <div>
                                    <h3 className="text-xs font-bold text-green-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="block w-4 h-px bg-gold-500" />
                                        {related.length > 0 ? 'Artikel Serupa' : 'Artikel Lainnya'}
                                    </h3>
                                    <div className="space-y-3">
                                        {(related.length > 0 ? related : others).map(b => (
                                            <RelatedCard key={b.id} b={b} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Category list */}
                            <div>
                                <h3 className="text-xs font-bold text-green-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="block w-4 h-px bg-gold-500" />
                                    Kategori
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {beritaKategori.filter(k => k !== 'Semua').map(k => {
                                        const count = beritaData.filter(b => b.kategori === k).length
                                        return (
                                            <Link
                                                key={k}
                                                to={`/berita?kategori=${k}`}
                                                className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-green-100 bg-white hover:border-gold-600/30 hover:bg-gold-50 transition-all duration-200 group"
                                            >
                                                <span className="text-sm text-green-800 font-medium group-hover:text-green-700">{k}</span>
                                                <span className="text-xs font-bold text-gold-700 bg-gold-100 px-2 py-0.5 rounded-full">{count}</span>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-br from-green-950 to-green-900 rounded-2xl p-5 border border-gold-600/15 text-center">
                                <p className="font-arabic text-xl text-gold-500 mb-2">وَعَلَّمَكَ مَا لَمْ تَكُن تَعْلَمُ</p>
                                <p className="text-white/40 text-xs italic mb-4 leading-relaxed">
                                    "Dan Dia mengajarkan kepadamu apa yang tidak kamu ketahui"
                                </p>
                                <Link
                                    to="/kontak"
                                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gold-600 to-gold-400 text-green-900 font-bold text-xs px-5 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-gold transition-all duration-300"
                                >
                                    Daftar Sekarang
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}