import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react'
import { lembagaInfo } from '../../data'

const navGroups = [
    {
        title: 'Lembaga',
        links: [
            { to: '/profil', label: 'Profil & Sejarah' },
            { to: '/program', label: 'Program Kami' },
            { to: '/jadwal', label: 'Jadwal Kegiatan' },
            { to: '/galeri', label: 'Galeri Foto' },
        ],
    },
    {
        title: 'Informasi',
        links: [
            { to: '/santri', label: 'Data Santri' },
            { to: '/berita', label: 'Berita & Pengumuman' },
            { to: '/kontak', label: 'Hubungi Kami' },
        ],
    },
]

// tiktok icon
const TikTokIcon = (props) => (
    <svg
        xmlns="http://www.w3.org"
        viewBox="-5 0 35 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a6 6 0 0 0 5 5" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-green-950 border-t border-gold-600/10">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                                <span className="font-arabic text-2xl text-green-900">ق</span>
                            </div>
                            <div>
                                <p className="font-display text-xl text-gold-400 font-bold">LTQ</p>
                                <p className="text-xs text-white/40 tracking-widest uppercase">{lembagaInfo.nama}</p>
                            </div>
                        </Link>

                        <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-sm font-light">
                            Bersama kami, perjalanan menghafal Al-Qur'an menjadi lebih bermakna. Kami berkomitmen mencetak generasi Qur'ani yang berilmu dan berakhlak mulia.
                        </p>

                        {/* Arabic quote */}
                        <div className="border border-gold-600/20 rounded-xl p-4 bg-gold-600/5 mb-6">
                            <p className="font-arabic text-xl text-gold-500 text-right mb-1">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
                            <p className="text-xs text-white/35 italic">"Sebaik-baik kalian adalah yang belajar Al-Qur'an dan mengajarkannya" (HR. Bukhari)</p>
                        </div>

                        {/* Social media */}
                        <div className="flex items-center gap-3">
                            {[
                                { icon: <Instagram size={16} />, href: lembagaInfo.sosmed.instagram, label: 'Instagram' },
                                { icon: <TikTokIcon size={16} />, href: lembagaInfo.sosmed.tiktok, label: 'TikTok' },
                                { icon: <Youtube size={16} />, href: lembagaInfo.sosmed.youtube, label: 'YouTube' },
                            ].map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-gold-600/25 bg-gold-600/8 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-600/15 transition-all duration-300"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav groups */}
                    {navGroups.map(({ title, links }) => (
                        <div key={title}>
                            <h4 className="text-xs font-bold tracking-widest uppercase text-gold-600 mb-5">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map(({ to, label }) => (
                                    <li key={to}>
                                        <Link
                                            to={to}
                                            className="text-sm text-white/40 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-px bg-gold-600 group-hover:w-4 transition-all duration-300" />
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact info strip */}
                <div className="mt-12 pt-8 border-t border-gold-600/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        { icon: <MapPin size={14} />, text: lembagaInfo.alamat },
                        { icon: <Phone size={14} />, text: lembagaInfo.telepon },
                        { icon: <Mail size={14} />, text: lembagaInfo.email },
                        { icon: <Clock size={14} />, text: lembagaInfo.jamOperasional },
                    ].map(({ icon, text }, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-white/35">
                            <span className="text-gold-600 mt-0.5 flex-shrink-0">{icon}</span>
                            <span className="text-xs leading-relaxed">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gold-600/8 bg-green-950/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-white/25">
                        © {new Date().getFullYear()} Lembaga Tahfidhul Qur'an (LTQ). Hak Cipta Dilindungi.
                    </p>
                    <p className="text-xs text-white/20">
                        Made for the sake 🙏 of devotion (Gopek Kun)
                    </p>
                </div>
            </div>
        </footer>
    )
}