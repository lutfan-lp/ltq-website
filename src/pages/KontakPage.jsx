import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/common/PageTransition'
import PageHero from '../components/common/PageHero'
import { lembagaInfo } from '../data'
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Youtube, Icon } from 'lucide-react'

function ContactCard({ icon, title, content, link, delay }) {
    const [ref, inView] = useInView({ triggerOnce: true })
    const Tag = link ? 'a' : 'div'
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay }}
        >
            <Tag
                href={link}
                target={link ? '_blank' : undefined}
                rel={link ? 'noopener noreferrer' : undefined}
                className={`flex items-start gap-4 p-5 bg-white rounded-2xl border border-green-100 transition-all duration-300 ${link ? 'hover:border-gold-600/30 hover:shadow-gold hover:-translate-y-0.5 cursor-pointer' : ''}`}
            >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center flex-shrink-0 shadow-green">
                    <span className="text-gold-400">{icon}</span>
                </div>
                <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gold-600 mb-1">{title}</p>
                    <p className="text-green-900 text-sm font-medium leading-relaxed">{content}</p>
                </div>
            </Tag>
        </motion.div>
    )
}

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

export default function KontakPage() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <PageTransition>
            <PageHero
                title="Hubungi Kami"
                subtitle="Kami siap menjawab pertanyaan Anda seputar program dan pendaftaran"
                arabic="وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ"
            />

            <section className="py-24 bg-gold-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* Left: info */}
                        <div className="lg:col-span-2 space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8"
                            >
                                <span className="inline-flex items-center gap-2 bg-gold-100 border border-gold-600/30 text-gold-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                                    ✦ Kontak Kami
                                </span>
                                <h2 className="font-display text-3xl text-green-900 mb-3 leading-tight">
                                    Mari Terhubung<br />
                                    <em>Bersama Kami</em>
                                </h2>
                                <p className="text-gray-500 text-sm font-light leading-relaxed">
                                    Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda mendapatkan informasi lengkap tentang program dan pendaftaran.
                                </p>
                            </motion.div>

                            <ContactCard
                                icon={<MapPin size={18} />}
                                title="Alamat Kami"
                                content={lembagaInfo.alamat}
                                delay={0.1}
                            />
                            <ContactCard
                                icon={<Phone size={18} />}
                                title="Telepon"
                                content={lembagaInfo.telepon}
                                link={`tel:${lembagaInfo.telepon.replace(/\s/g, '')}`}
                                delay={0.15}
                            />
                            <ContactCard
                                icon={<MessageCircle size={18} />}
                                title="WhatsApp"
                                content="Chat langsung via WhatsApp"
                                link={`https://wa.me/${lembagaInfo.whatsapp}`}
                                delay={0.2}
                            />
                            <ContactCard
                                icon={<Mail size={18} />}
                                title="Email"
                                content={lembagaInfo.email}
                                link={`mailto:${lembagaInfo.email}`}
                                delay={0.25}
                            />
                            <ContactCard
                                icon={<Clock size={18} />}
                                title="Jam Operasional"
                                content={lembagaInfo.jamOperasional}
                                delay={0.3}
                            />

                            {/* Social media */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-4"
                            >
                                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-3">Ikuti Kami</p>
                                <div className="flex gap-3">
                                    {[
                                        { icon: <Instagram size={18} />, href: lembagaInfo.sosmed.instagram, label: 'Instagram' },
                                        { icon: <TikTokIcon size={18} />, href: lembagaInfo.sosmed.tiktok, label: 'TikTok' },
                                        { icon: <Youtube size={18} />, href: lembagaInfo.sosmed.youtube, label: 'YouTube' },
                                    ].map(({ icon, href, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="w-11 h-11 rounded-xl border border-green-200 bg-white flex items-center justify-center text-green-700 hover:bg-green-900 hover:text-gold-400 hover:border-green-900 transition-all duration-300"
                                        >
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Map */}
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3 flex flex-col gap-5"
                        >
                            {/* Map embed */}
                            <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden border border-green-200 shadow-green">
                                <iframe
                                    src={lembagaInfo.mapEmbed}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '400px', filter: 'saturate(0.85)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokasi LTQ"
                                />
                            </div>

                            {/* Quick action cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href={`https://wa.me/${lembagaInfo.whatsapp}?text=Assalamu'alaikum, saya ingin bertanya mengenai program LTQ`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-xl text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                                >
                                    <MessageCircle size={18} />
                                    Chat WhatsApp
                                </a>
                                <a
                                    href={`mailto:${lembagaInfo.email}`}
                                    className="flex items-center justify-center gap-2 bg-green-900 text-white font-bold py-4 rounded-xl text-sm hover:-translate-y-0.5 hover:shadow-green transition-all duration-300"
                                >
                                    <Mail size={18} />
                                    Kirim Email
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Directions note */}
            <section className="py-12 bg-white">
                <div className="max-w-xl mx-auto px-4 text-center">
                    <div className="bg-gold-50 border border-gold-600/20 rounded-2xl p-6">
                        <p className="font-arabic text-2xl text-gold-600 mb-2">أَهْلاً وَسَهْلاً</p>
                        <p className="text-green-900 font-bold mb-1">Selamat Datang di LTQ</p>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                            Kami menyambut setiap tamu dan calon santri dengan tangan terbuka. Silakan kunjungi kami langsung atau hubungi via saluran yang tersedia.
                        </p>
                    </div>
                </div>
            </section>
        </PageTransition>
    )
}