// ==================== LEMBAGA ====================
export const lembagaInfo = {
    nama: 'Lembaga Tahfidhul Qur\'an',
    singkatan: 'LTQ',
    tagline: 'Ngapalaghi Sampe\' Mareh, Nakrer Sampe\' Mateh',
    tahunBerdiri: 2006,
    alamat: 'Jl. Makam Pahlawan Kompleks Pondok Pesantren Annuqayah Latee, Guluk-Guluk, Sumenep, Jawa Timur 69463',
    telepon: '+62 852-3650-4099',
    whatsapp: '6285236504099',
    email: 'pesantren@annuqayahlatee.net',
    jamOperasional: '24 Jam (Senin - Minggu)',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3959.5367681459725!2d113.6700954!3d-7.0635854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9df5a3cb39937%3A0x70785ea727170663!2sPondok%20Pesantren%20Annuqayah%20Latee!5e0!3m2!1sid!2sid!4v1772377984888!5m2!1sid!2sid',
    sosmed: {
        instagram: 'https://www.instagram.com/ppa.latee',
        tiktok: 'https://www.tiktok.com/@alateemedia',
        youtube: 'https://www.youtube.com/@AnnuqayahLatee',
    },
}

export const statsData = [
    { num: 61, label: 'Santri Aktif', suffix: '' },
    { num: 81, label: 'Hafidz Lulus', suffix: '+' },
    { num: 16, label: 'Ustadz & Ustadzah', suffix: '' },
    { num: 18, label: 'Tahun Berdiri', suffix: '+' },
]

// ==================== PROGRAM ====================
export const programData = [
    {
        id: 'tahsin',
        icon: '🎙️',
        title: 'Program Tahsin',
        subtitle: 'Tajwid & Makhraj',
        desc: 'Penyempurnaan bacaan Al-Qur\'an sesuai kaidah tajwid yang benar, makhraj huruf yang tepat, dan pengenalan lagu tilawah yang indah.',
        features: [
            'Belajar hukum tajwid lengkap & mendalam',
            'Latihan makhraj huruf secara intensif',
            'Pengenalan sifat-sifat huruf',
            'Praktik membaca dan melafalkan ayat dengan benar',
            'Melatih kebiasaan menghafal dengan bacaan yang baik',
            'Evaluasi mingguan oleh musyrif',
        ],
        penjab: 'Panitia',
        objek: 'Santri Baru',
        color: 'from-green-800 to-green-600',
    },
    {
        id: 'tahfidz',
        icon: '📖',
        title: 'Program Tahfidz',
        subtitle: '30 Juz Al-Qur\'an',
        desc: 'Program utama menghafal seluruh 30 juz Al-Qur\'an dengan metode Talaqqi dan Muraja\'ah yang terstruktur dan terukur bersama ustadz bersanad.',
        features: [
            'Talaqqi langsung dengan ustadz bersanad',
            'Target hafalan terukur setiap semester',
            'Muraja\'ah harian, mingguan, dan bulanan',
            'Ujian tahfidh secara berkala',
            'Syahadah dan wisuda tahfidh di akhir tahun',
            'Pendampingan intensif one-on-one',
        ],
        penjab: 'Pengurus Tanfiziah',
        objek: 'Semua Santri Aktif',
        color: 'from-green-900 to-green-700',
    },
    {
        id: 'ekstra',
        icon: '⚡',
        title: 'Program Ekstrakurikuler',
        subtitle: 'Pengembagan Minat & Bakat',
        desc: 'Kegiatan untuk melatih kemampuan santri diluar bidang hafalan untuk membentuk karakter dan kepribadian yang seimbang.',
        features: [
            'Kajian kitab kuning (Fiqh, Aqidah, Tasawuf)',
            'Organisasi Santri Tahfidh (ORGASTA)',
            'Ajang penampilan bakat santri',
            'Klub cabang olahraga (futsal, voli, bulu tangkis dan catur)',
            'Forum seni dan sastra (Asy-Syu\'ara\')',
            'Forum mahasiswa LTQ (FORMAL)',
        ],
        penjab: 'Pengurus DOK',
        objek: 'Santri yang memiliki kemauan lebih',
        color: 'from-green-950 to-green-800',
    },
]

// ==================== SANTRI ====================
// Tingkatan Kelas:
//   1 → Juz  1–5   |  2 → Juz  6–10  |  3 → Juz 11–15
//   4 → Juz 16–20  |  5 → Juz 21–25  |  6 → Juz 26–30
//   T → Takhassus  (sudah khatam 30 juz)
//
// Field: id | nama | tingkat ('1'–'6' | 'T') | juz | awalMenghafal

export const santriData = [
    // ── Takhassus (30 juz) ───────────────────────────────────────
    { id: 1, nama: 'Miftahul Arifin', tingkat: 'T', juz: 30, awalMenghafal: '2017' },
    { id: 2, nama: 'Ali Akbar Nafis', tingkat: 'T', juz: 30, awalMenghafal: '2015' },
    { id: 3, nama: 'Fathorrahman', tingkat: 'T', juz: 30, awalMenghafal: '2017' },
    { id: 4, nama: 'Ahmad Nurhadi', tingkat: 'T', juz: 30, awalMenghafal: '2018' },
    { id: 5, nama: 'Ahmad Fathen Nabil', tingkat: 'T', juz: 30, awalMenghafal: '2017' },
    { id: 6, nama: 'Lutfan Syafiq', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 7, nama: 'Moh. Rizal', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 8, nama: 'Ach. Hariri', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 9, nama: 'Ahmad Ariyanto', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 10, nama: 'Sayyid Ghufron Karim', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 11, nama: 'Moh. Muhyiddin Al-Maulidi', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 12, nama: 'Moh. Jailani', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 13, nama: 'Toriq Ilham', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 14, nama: 'Muhammad Mahfudzi Bahtiar', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 15, nama: 'Ahmad Rizal Mailul \'Aqifin', tingkat: 'T', juz: 30, awalMenghafal: '2023' },
    { id: 16, nama: 'Faizal Arifin', tingkat: 'T', juz: 30, awalMenghafal: '2024' },
    { id: 17, nama: 'Nazhaqi Firdaus Salam', tingkat: 'T', juz: 30, awalMenghafal: '2024' },
    { id: 18, nama: 'Miftah', tingkat: 'T', juz: 30, awalMenghafal: '2024' },
    { id: 19, nama: 'Waridullah', tingkat: 'T', juz: 30, awalMenghafal: '2024' },
    { id: 20, nama: 'Moh. Imron Rosyadi', tingkat: 'T', juz: 30, awalMenghafal: '2020' },
    
    // ── Tingkat 6 (Juz 26–30) ────────────────────────────────────
    { id: 21, nama: 'Hanif Hidayatullah', tingkat: '6', juz: 27, awalMenghafal: '2023' },
    { id: 22, nama: 'Syarif Murtadha', tingkat: '6', juz: 28, awalMenghafal: '2021' },
    
    // ── Tingkat 5 (Juz 21–25) ────────────────────────────────────
    { id: 23, nama: 'Fikri Haikal Farodis', tingkat: '5', juz: 22, awalMenghafal: '2021' },
    
    // ── Tingkat 4 (Juz 16–20) ────────────────────────────────────
    { id: 24, nama: 'Ahmad Fa\'abiel Riyadh Amini', tingkat: '4', juz: 17, awalMenghafal: '2023' },
    { id: 25, nama: 'Rian Maulana', tingkat: '4', juz: 16, awalMenghafal: '2023' },
    { id: 26, nama: 'Chairullana', tingkat: '4', juz: 16, awalMenghafal: '2023' },
    
    // ── Tingkat 3 (Juz 11–15) ────────────────────────────────────
    { id: 27, nama: 'Ali Zainal Abidin', tingkat: '3', juz: 12, awalMenghafal: '2018' },
    { id: 28, nama: 'Moh. Faizal Amrullah', tingkat: '3', juz: 15, awalMenghafal: '2018' },
    { id: 29, nama: 'Ahmad Mudzakkir Dhiya\'ul Haq', tingkat: '3', juz: 14, awalMenghafal: '2018' },
    { id: 30, nama: 'Moh. Avif Ilham', tingkat: '3', juz: 11, awalMenghafal: '2018' },
    { id: 31, nama: 'Ahmad Naufal Saiful Nizar', tingkat: '3', juz: 11, awalMenghafal: '2018' },
    { id: 32, nama: 'M. Wildan Nabil Musthafa Qolbi', tingkat: '3', juz: 12, awalMenghafal: '2022' },
    { id: 33, nama: 'Riyyan Qomary Riko Putra', tingkat: '3', juz: 11, awalMenghafal: '2022' },
    { id: 34, nama: 'Moh. Rijalul Amin', tingkat: '3', juz: 14, awalMenghafal: '2022' },
    { id: 35, nama: 'Zainurrahman', tingkat: '3', juz: 11, awalMenghafal: '2022' },
    { id: 36, nama: 'M Rizqi Akbar Al-Mahroini', tingkat: '5', juz: 23, awalMenghafal: '2022' },
    { id: 37, nama: 'Moh. Aqil Mubarak', tingkat: '3', juz: 11, awalMenghafal: '2022' },
    
    // ── Tingkat 2 (Juz 6–10) ─────────────────────────────────────
    { id: 38, nama: 'Moh. Afdhal', tingkat: '2', juz: 6, awalMenghafal: '2023' },
    { id: 39, nama: 'Miftahul Nizar', tingkat: '2', juz: 8, awalMenghafal: '2023' },
    { id: 40, nama: 'Ahmad Panji Hidayat Nur', tingkat: '2', juz: 9, awalMenghafal: '2022' },
    { id: 41, nama: 'M. Jurfrianto', tingkat: '2', juz: 10, awalMenghafal: '2022' },
    { id: 42, nama: 'Alfin Maulana', tingkat: '2', juz: 9, awalMenghafal: '2022' },
    { id: 43, nama: 'Moh. Hisyam Tijani', tingkat: '2', juz: 7, awalMenghafal: '2022' },
    { id: 44, nama: 'Moh. Wadud', tingkat: '2', juz: 8, awalMenghafal: '2022' },
    { id: 45, nama: 'Fakhril Ali Rahman', tingkat: '2', juz: 8, awalMenghafal: '2022' },
    { id: 46, nama: 'Sulaiman', tingkat: '2', juz: 8, awalMenghafal: '2022' },
    { id: 47, nama: 'Haidar Sayyid Ali Adnan', tingkat: '2', juz: 10, awalMenghafal: '2023' },
    
    // ── Tingkat 1 (Juz 1–5) ──────────────────────────────────────
    { id: 48, nama: 'Roisul Imam', tingkat: '1', juz: 4, awalMenghafal: 'Sep 2022' },
    { id: 49, nama: 'M. Wildan Zainul Muzammil', tingkat: '1', juz: 3, awalMenghafal: 'Sep 2022' },
    { id: 50, nama: 'Prabu Miladi Muhammad Nurdin', tingkat: '1', juz: 5, awalMenghafal: 'Okt 2022' },
    { id: 51, nama: 'Ahmad Madani', tingkat: '1', juz: 3, awalMenghafal: 'Okt 2022' },
    { id: 52, nama: 'Moh. Akmal Mirza Lutfan', tingkat: '1', juz: 3, awalMenghafal: '2022' },
    { id: 53, nama: 'Ahmad Nur Rizqi Ramadhani', tingkat: '1', juz: 3, awalMenghafal: '2022' },
    { id: 54, nama: 'Muhammad Agus', tingkat: '1', juz: 3, awalMenghafal: '2023' },
    { id: 55, nama: 'Abdul Qadir El-Jailani', tingkat: '1', juz: 3, awalMenghafal: '2023' },
    { id: 56, nama: 'Zidan Fatih Rizqi', tingkat: '1', juz: 2, awalMenghafal: '2023' },
    { id: 57, nama: 'Maulana Ahmad Ridha', tingkat: '1', juz: 4, awalMenghafal: '2023' },
    { id: 58, nama: 'Faiqur Rosi', tingkat: '1', juz: 3, awalMenghafal: '2023' },
    { id: 59, nama: 'Febri Andi Pratama', tingkat: '1', juz: 3, awalMenghafal: '2023' },
    { id: 60, nama: 'Sulthan Muhammad Al-Fatih', tingkat: '1', juz: 2, awalMenghafal: '2023' },
    { id: 61, nama: 'Moh. Zaki Alwan', tingkat: '1', juz: 3, awalMenghafal: '2023' },
]

// Definisi tingkatan kelas
export const tingkatanData = {
    '1': { label: 'Tingkat 1', rentang: 'Juz 1 – 5', minJuz: 1, maxJuz: 5, color: 'bg-sky-50 text-sky-700 border-sky-200' },
    '2': { label: 'Tingkat 2', rentang: 'Juz 6 – 10', minJuz: 6, maxJuz: 10, color: 'bg-teal-50 text-teal-700 border-teal-200' },
    '3': { label: 'Tingkat 3', rentang: 'Juz 11 – 15', minJuz: 11, maxJuz: 15, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    '4': { label: 'Tingkat 4', rentang: 'Juz 16 – 20', minJuz: 16, maxJuz: 20, color: 'bg-green-50 text-green-700 border-green-200' },
    '5': { label: 'Tingkat 5', rentang: 'Juz 21 – 25', minJuz: 21, maxJuz: 25, color: 'bg-lime-50 text-lime-700 border-lime-200' },
    '6': { label: 'Tingkat 6', rentang: 'Juz 26 – 30', minJuz: 26, maxJuz: 30, color: 'bg-amber-50 text-amber-700 border-amber-200' },
    'T': { label: 'Takhassus', rentang: '30 Juz Khatam', minJuz: 30, maxJuz: 30, color: 'bg-gold-100 text-gold-800 border-gold-400' },
}

// ==================== JADWAL ====================
export const jadwalData = [
    { waktu: '03.00', ket: 'WIB', kegiatan: 'Qiyamul Lail & Subuh Berjamaah', detail: 'Shalat tahajjud, witir, dan subuh berjama\'ah di masjid', tag: 'Ibadah', tagColor: 'ibadah' },
    { waktu: '03.00', ket: 'WIB', kegiatan: 'Muraqabah setengah juz', detail: 'Mengaji bersama setengah juz dengan bacaan tartil', tag: 'Tahsin', tagColor: 'tahsin' },
    { waktu: '05.00', ket: 'WIB', kegiatan: 'Setoran Hafalan', detail: 'Setoran hafalan baru kepada pembimbing masing-masing', tag: 'Tahfidz', tagColor: 'tahfidz' },
    { waktu: '07.00', ket: 'WIB', kegiatan: 'Sekolah formal', detail: 'Kegiatan formal bagi yang mendaftarkan diri di satuan pendidikan formal', tag: 'Ekstra', tagColor: 'ekstra' },
    { waktu: '12.30', ket: 'WIB', kegiatan: 'Dzuhur Berjamaah & Istirahat', detail: 'Shalat dzuhur berjama\'ah dilanjutkan makan siang dan istirahat', tag: 'Ibadah', tagColor: 'ibadah' },
    { waktu: '15.30', ket: 'WIB', kegiatan: 'Ashar Berjamaah & Ajian Kitab', detail: 'Minhajul Qowim, Nasho\'ihuddinyah, Hasyiyah al-Bajuri \'ala Matnil Burdah, Tafsir Jalalain, dan Riyadhus Shalihin', tag: 'Diniyah', tagColor: 'diniyah' },
    { waktu: '18.00', ket: 'WIB', kegiatan: 'Maghrib Berjamaah & Bimbingan Al-Qur\'an', detail: 'Tajwid, makhorijul & sifatul huruf, serta kajian ke-Al-Qur\'an-an', tag: 'Tahsin', tagColor: 'tahsin' },
    { waktu: '19.30', ket: 'WIB', kegiatan: 'Isya\' Berjamaah & Kelas Diniyah', detail: 'Sekolah diniyah sesuai dengan jadwal yang telah ditentukan oleh pengurus Madrasah Diniah', tag: 'Diniyah', tagColor: 'diniyah' },
    { waktu: '20.30', ket: 'WIB', kegiatan: 'Program Malam', detail: 'Ten-teten, Organisasi Santri Tahfidh (Orgasta), Kajian Kitab (Attib fi Adabi Hamalatul Qur\'an, Matnul Jazariah, dan Ta\'limul Muta\'allim)', tag: 'Tahfidz', tagColor: 'tahfidz' },
    { waktu: '21.30', ket: 'WIB', kegiatan: 'Belajar Mandiri & Istirahat', detail: 'Waktu belajar mandiri, review catatan, dan istirahat malam', tag: 'Mandiri', tagColor: 'ekstra' },
]

// ==================== BERITA ====================
// ─────────────────────────────────────────────────────────────────────────────
// CARA MENAMBAH / MENGGANTI FOTO BERITA:
//
// 1. Letakkan file gambar di folder: public/images/berita/
//    Rekomendasi ukuran: 1200×630 px (rasio 16:9 ideal untuk thumbnail & hero)
//
// 2. Isi field `foto` dengan path-nya, contoh:
//    foto: '/images/berita/mtq-juara1.jpg'
//
// 3. Jika foto belum ada, isi foto: null → tampil placeholder otomatis.
//
// CARA MENULIS KONTEN ARTIKEL:
//   Field `konten` adalah array of "blok". Tiap blok punya `tipe` dan `isi`:
//
//   { tipe: 'p',     isi: 'Teks paragraf biasa.' }
//   { tipe: 'h3',    isi: 'Sub-judul bagian' }
//   { tipe: 'quote', isi: 'Kutipan penting.', sumber: 'Nama narasumber' }
//   { tipe: 'ul',    isi: ['poin 1', 'poin 2', 'poin 3'] }
//   { tipe: 'img',   foto: '/images/berita/nama.jpg', caption: 'Keterangan foto' }
// ─────────────────────────────────────────────────────────────────────────────

export const beritaKategori = ['Semua', 'Prestasi', 'Pengumuman', 'Kegiatan', 'Informasi']

export const beritaData = [
    {
        id: 1,
        slug: 'santri-ltq-raih-juara-1-mtq-kabupaten-2025',
        kategori: 'Prestasi',
        judul: 'Santri LTQ Raih Juara 1 MTQ Tingkat Kabupaten Tahun 2025',
        ringkasan: 'Alhamdulillah, santri LTQ berhasil meraih juara pertama dalam Musabaqoh Tilawatil Qur\'an tingkat kabupaten tahun 2025, membuktikan kualitas pembinaan yang konsisten selama bertahun-tahun.',
        tanggal: '15 Januari 2025',
        penulis: 'Admin LTQ',
        waktuBaca: '3 menit',
        foto: '/images/berita/juara-mtq.png',           // ← ganti: '/images/berita/mtq-juara1.jpg'
        fallbackIcon: '🏆',
        fallbackBg: 'from-green-900 to-green-700',
        featured: true,
        konten: [
            { tipe: 'p', isi: 'Bismillahirrahmanirrahim. Alhamdulillah, atas izin dan rahmat Allah SWT, santri Lembaga Tahfidhul Qur\'an (LTQ) kembali mengukir prestasi membanggakan di tingkat kabupaten. Pada pelaksanaan Musabaqoh Tilawatil Qur\'an (MTQ) Kabupaten tahun 2025, santri kami berhasil meraih Juara 1 pada cabang Tilawah Al-Qur\'an golongan Remaja Putra.' },
            { tipe: 'p', isi: 'Capaian luar biasa ini merupakan hasil dari dedikasi tanpa henti para santri, bimbingan para ustadz yang bersanad, serta dukungan penuh dari seluruh wali santri dan pengurus lembaga. Tidak ada keberhasilan yang datang tanpa kerja keras dan keistiqomahan dalam berlatih setiap harinya.' },
            { tipe: 'h3', isi: 'Perjalanan Menuju Podium Juara' },
            { tipe: 'p', isi: 'Persiapan untuk kompetisi ini telah dimulai jauh-jauh hari sejak bulan Oktober 2024. Para santri yang terpilih sebagai duta LTQ menjalani latihan intensif setiap hari, mulai dari penyempurnaan makhraj huruf, penguasaan lagu-lagu tilawah (maqam), hingga latihan mental dan teknik tampil di hadapan dewan juri.' },
            { tipe: 'quote', isi: 'Keberhasilan ini bukan milik satu santri saja, tapi milik seluruh keluarga besar LTQ. Semoga menjadi motivasi untuk terus meningkatkan kualitas pembinaan kami.', sumber: 'Ust. Abdul Karim — Kepala Lembaga LTQ' },
            { tipe: 'h3', isi: 'Kategori yang Dilombakan' },
            {
                tipe: 'ul', isi: [
                    'Tilawah Al-Qur\'an Golongan Remaja Putra — Juara 1 🥇',
                    'Tilawah Al-Qur\'an Golongan Remaja Putri — Juara 3 🥉',
                    'Hifdzil Qur\'an 1 Juz Golongan Anak — Harapan 1',
                    'Tartil Qur\'an Golongan Anak Putri — Juara 2 🥈',
                ]
            },
            { tipe: 'p', isi: 'Seluruh peserta dari LTQ berhasil membawa pulang penghargaan, sebuah pencapaian yang sangat membanggakan dan membuktikan bahwa kualitas pembinaan di LTQ terus meningkat dari tahun ke tahun.' },
            { tipe: 'h3', isi: 'Harapan ke Depan' },
            { tipe: 'p', isi: 'Dengan raihan juara 1 di tingkat kabupaten ini, santri LTQ berhak mewakili kabupaten dalam ajang MTQ tingkat Provinsi yang akan digelar beberapa bulan ke depan. Seluruh civitas LTQ optimis dan siap memberikan yang terbaik demi mengharumkan nama lembaga, kabupaten, dan tentunya agama Islam.' },
            { tipe: 'p', isi: 'Kami mengucapkan terima kasih yang sebesar-besarnya kepada seluruh pihak yang telah mendukung dan mendoakan. Semoga Allah SWT senantiasa meridhoi langkah-langkah kita dalam mempelajari dan mengajarkan Al-Qur\'an. Aamiin.' },
        ],
    },
    {
        id: 2,
        slug: 'penerimaan-santri-baru-2025-2026',
        kategori: 'Pengumuman',
        judul: 'Penerimaan Santri Baru Tahun Ajaran 2025/2026 Resmi Dibuka',
        ringkasan: 'LTQ membuka pendaftaran santri baru untuk tahun ajaran 2025/2026. Tersedia program Tahfidz, Tahsin, dan Diniyah. Pendaftaran dibuka mulai 1 Februari hingga 31 Maret 2025.',
        tanggal: '10 Januari 2025',
        penulis: 'Admin LTQ',
        waktuBaca: '4 menit',
        foto: '/images/berita/ramadan.jpeg',           // ← ganti: '/images/berita/psb-2025.jpg'
        fallbackIcon: '📢',
        fallbackBg: 'from-green-800 to-green-600',
        featured: false,
        konten: [
            { tipe: 'p', isi: 'Bismillah. Dengan penuh rasa syukur kepada Allah SWT, Lembaga Tahfidhul Qur\'an (LTQ) dengan bangga mengumumkan pembukaan Penerimaan Santri Baru (PSB) untuk Tahun Ajaran 2025/2026. Kami membuka kesempatan seluas-luasnya bagi putra-putri terbaik bangsa untuk bergabung dan menimba ilmu di lingkungan yang kondusif dan penuh berkah.' },
            { tipe: 'h3', isi: 'Program yang Tersedia' },
            {
                tipe: 'ul', isi: [
                    'Program Tahfidz Al-Qur\'an 30 Juz — durasi 3 hingga 5 tahun',
                    'Program Tahsin & Tajwid — durasi 6 hingga 12 bulan',
                    'Program Diniyah (Ilmu Agama Islam) — durasi 2 hingga 3 tahun',
                    'Program Takhassus (khusus untuk yang sudah hafal sebagian) — fleksibel',
                ]
            },
            { tipe: 'h3', isi: 'Jadwal & Alur Pendaftaran' },
            {
                tipe: 'ul', isi: [
                    'Pembukaan Pendaftaran: 1 Februari 2025',
                    'Penutupan Pendaftaran: 31 Maret 2025',
                    'Tes Seleksi (Baca Qur\'an & Wawancara): 5–10 April 2025',
                    'Pengumuman Hasil Seleksi: 15 April 2025',
                    'Daftar Ulang & Orientasi: 20–25 April 2025',
                    'Awal Masuk Kegiatan Belajar: 1 Mei 2025',
                ]
            },
            { tipe: 'h3', isi: 'Persyaratan Pendaftaran' },
            {
                tipe: 'ul', isi: [
                    'Muslim/Muslimah, usia 7–18 tahun (untuk program reguler)',
                    'Mampu membaca Al-Qur\'an (minimal Iqro\' jilid 3)',
                    'Sehat jasmani dan rohani',
                    'Mendapat persetujuan dan dukungan orang tua/wali',
                    'Bersedia mengikuti seluruh tata tertib dan program lembaga',
                ]
            },
            { tipe: 'quote', isi: 'Kami menyambut setiap calon santri dengan tangan terbuka. Tidak ada yang terlambat untuk memulai perjalanan mulia menghafal Al-Qur\'an.', sumber: 'KH. Ahmad Mustofa — Pengasuh LTQ' },
            { tipe: 'p', isi: 'Untuk informasi lebih lengkap dan formulir pendaftaran, silakan menghubungi kantor sekretariat LTQ pada jam operasional, atau kunjungi langsung di alamat lembaga. Tim kami siap membantu dan menjawab setiap pertanyaan Bapak/Ibu.' },
        ],
    },
    {
        id: 3,
        slug: 'haflah-khotmil-quran-ke-8',
        kategori: 'Kegiatan',
        judul: 'Haflah Khotmil Qur\'an ke-8 LTQ Dihadiri Ratusan Wali Santri',
        ringkasan: 'Haflah Khotmil Qur\'an ke-8 berlangsung meriah dan penuh haru. Sebanyak 8 santri diwisuda sebagai Hafidz/Hafidzah baru, disambut tangis bahagia para orang tua.',
        tanggal: '28 Desember 2024',
        penulis: 'Tim Redaksi LTQ',
        waktuBaca: '5 menit',
        foto: '/images/berita/haflah.jpeg',           // ← ganti: '/images/berita/haflah-khotmil-8.jpg'
        fallbackIcon: '🎓',
        fallbackBg: 'from-green-950 to-green-800',
        featured: false,
        konten: [
            { tipe: 'p', isi: 'Suasana haru dan penuh kebahagiaan menyelimuti Aula Utama Lembaga Tahfidhul Qur\'an (LTQ) pada Sabtu, 28 Desember 2024. Hari itu, LTQ menyelenggarakan Haflah Khotmil Qur\'an ke-8, sebuah momen sakral yang memahkotai perjuangan panjang para santri dalam menghafal 30 juz Al-Qur\'an.' },
            { tipe: 'p', isi: 'Acara yang dihadiri lebih dari 300 wali santri, tokoh masyarakat, dan tamu undangan dari berbagai daerah ini berlangsung khidmat dari pagi hingga sore hari. Tangis haru mewarnai prosesi wisuda ketika delapan santri berjalan menuju podium untuk menerima ijazah hafalan mereka.' },
            { tipe: 'h3', isi: 'Delapan Hafidz & Hafidzah Baru' },
            {
                tipe: 'ul', isi: [
                    'Ahmad Fauzan Al-Hakim — Hafidz 30 Juz (Putra)',
                    'Siti Khadijah Azzahra — Hafidzah 30 Juz (Putri)',
                    'Muhammad Rizki Maulana — Hafidz 30 Juz (Putra)',
                    'Aisyah Nur Hikmah — Hafidzah 30 Juz (Putri)',
                    'Abdurrahman Wahid Hasyim — Hafidz 30 Juz (Putra)',
                    'Fatimah Az-Zahra Husain — Hafidzah 30 Juz (Putri)',
                    'Ibrahim Al-Fatih Ramadhan — Hafidz 30 Juz (Putra)',
                    'Zaid bin Tsabit Anwar — Hafidz 30 Juz (Putra)',
                ]
            },
            { tipe: 'quote', isi: 'Melihat anak saya menerima ijazah hafalan Al-Qur\'an adalah momen paling membahagiakan dalam hidup saya. Terima kasih LTQ, terima kasih para ustadz yang telah membimbing dengan sabar dan penuh kasih.', sumber: 'Bapak Hasyim — Wali Santri' },
            { tipe: 'h3', isi: 'Rangkaian Acara' },
            { tipe: 'p', isi: 'Acara dimulai dengan pembukaan oleh MC, dilanjutkan tilawah Al-Qur\'an oleh para santri berprestasi, sambutan Kepala Lembaga, dan tausiyah dari ulama tamu. Puncak acara adalah prosesi wisuda yang diiringi lantunan shalawat dan doa bersama yang penuh khusyu\'.' },
            { tipe: 'p', isi: 'Acara ditutup dengan jamuan makan siang dan sesi foto bersama antara para wisudawan dengan keluarga, ustadz, dan seluruh civitas LTQ. Momen-momen indah tersebut terabadikan dalam kenangan yang tak terlupakan.' },
        ],
    },
    {
        id: 4,
        slug: 'workshop-metode-tahfidz-ustadz',
        kategori: 'Kegiatan',
        judul: 'Workshop Metode Pembelajaran Tahfidz untuk Para Ustadz LTQ',
        ringkasan: 'LTQ menyelenggarakan workshop intensif untuk meningkatkan kompetensi para pengajar dalam menggunakan metode terbaru pembelajaran tahfidz yang efektif dan menyenangkan.',
        tanggal: '20 Desember 2024',
        penulis: 'Tim Redaksi LTQ',
        waktuBaca: '3 menit',
        foto: '/images/berita/workshop.jpeg',           // ← ganti: '/images/berita/workshop-ustadz.jpg'
        fallbackIcon: '📚',
        fallbackBg: 'from-green-900 to-green-700',
        featured: false,
        konten: [
            { tipe: 'p', isi: 'Dalam rangka meningkatkan kualitas pengajaran dan kompetensi para pendidik, Lembaga Tahfidhul Qur\'an (LTQ) menyelenggarakan Workshop Metode Pembelajaran Tahfidz Al-Qur\'an pada 20 Desember 2024. Kegiatan ini diikuti oleh seluruh ustadz dan ustadzah pengampu program tahfidz, tahsin, maupun diniyah.' },
            { tipe: 'h3', isi: 'Materi Workshop' },
            {
                tipe: 'ul', isi: [
                    'Metode Talaqqi modern berbasis penelitian neurosains',
                    'Teknik muraja\'ah efektif untuk jangka panjang',
                    'Pendekatan psikologi positif dalam membimbing santri',
                    'Penggunaan teknologi pendukung pembelajaran hafalan',
                    'Evaluasi dan pelaporan progres hafalan santri',
                ]
            },
            { tipe: 'p', isi: 'Workshop menghadirkan narasumber berpengalaman dari Lembaga Tahfidz nasional yang telah mencetak ratusan hafidz. Metode-metode yang dibagikan merupakan hasil riset dan pengalaman selama puluhan tahun membimbing para penghafal Al-Qur\'an dari berbagai latar belakang.' },
            { tipe: 'quote', isi: 'Guru yang terus belajar adalah guru yang mampu menghadirkan pembelajaran terbaik. Workshop ini adalah investasi kita untuk para santri.', sumber: 'Ust. Nur Hasyim — Koordinator Tahfidz' },
            { tipe: 'p', isi: 'LTQ berkomitmen untuk terus mengadakan pelatihan dan pengembangan kapasitas bagi seluruh tenaga pengajar secara berkala. Karena kami percaya, kualitas output santri berbanding lurus dengan kualitas para pembimbingnya.' },
        ],
    },
    {
        id: 5,
        slug: 'penyambutan-santri-ltq-di-wisuda-universitas-annuqayah',
        kategori: 'Informasi',
        judul: 'Penyambutan Santri LTQ dalam Wisuda Universitas Annuqayah',
        ringkasan: 'LTQ menyambut para santri yang telah lulus dari Universitas Annuqayah dengan acara khusus yang menghormati pencapaian mereka.',
        tanggal: '10 Oktober 2025',
        penulis: 'Admin LTQ',
        waktuBaca: '4 menit',
        foto: '/images/berita/wisuda-ua.png',
        fallbackIcon: '🌙',
        fallbackBg: 'from-green-800 to-green-600',
        featured: false,
        konten: [
            { tipe: 'p', isi: 'Merupakan acara rutin yang diadakan setiap tahun oleh LTQ untuk menyambut para santri yang telah lulus dari Universitas Annuqayah. Dalam acara ini, 6 santri LTQ yang telah lulus diberi penghargaan dan penyambutan khusus oleh LTQ sebagai bentuk apresiasi atas pencapaian akademik mereka. Selain itu, acara ini untuk menginspirasi para santri LTQ untuk terus berprestasi dan menjaga semangat belajar mereka hingga masa kuliah mereka berakhir.' },
            { tipe: 'h3', isi: 'Santri LTQ yang diwisuda di Universitas Annuqayah dan telah menyandang gelar sarjana' },
            {
                tipe: 'ul', isi: [
                    'Ahmad Fahrian Hidayah, S.Ag. — Lulusan Fakultas Ushuluddin, program studi Ilmu Al-Qur\'an dan Tafsir',
                    'Ahmad Fathen Nabil, S.Ag. — Lulusan Fakultas Ushuluddin, program studi Ilmu Al-Qur\'an dan Tafsir',
                    'Moh. Rizal, S.E. — Lulusan Fakultas Ekonomi, program studi Ekonomi Syariah',
                    'Ahmad Fa\'abiel Riyadh Amini, S.Pd. — Lulusan Fakultas Tarbiyah, program studi Pendidikan Agama Islam',
                    'Miftahul Arifin, S.Pd. — Lulusan Fakultas Tarbiyah, program studi Pendidikan Bahasa Arab',
                    'Fathorrahman, S.Pd. — Lulusan Fakultas Tarbiyah, program studi Pendidikan Bahasa Arab',
                ]
            },
            { tipe: 'h3', isi: 'Partisipasi wali dalam penyambutan ini' },
            { tipe: 'p', isi: 'Wali santri juga turut serta dalam acara penyambutan ini dengan memberikan doa dan motivasi kepada para santri yang telah lulus. Mereka menyampaikan harapan mereka agar para santri dapat terus berkembang dan menjalani hidup dengan nilai-nilai Islam yang baik dan bisa mencapai kesuksesan dalam kehidupan mereka.' },
            { tipe: 'quote', isi: 'Kami sangat bangga dengan pencapaian para santri LTQ yang telah lulus dari Universitas Annuqayah. Semoga mereka terus berkembang dan menjadi contoh bagi santri lainnya.', sumber: 'Ahmad Fathen Nabil, S.Ag.' },
        ],
    },
    {
        id: 6,
        slug: 'studi-banding-ke-yanbu\'ul-qur\'an-kudus',
        kategori: 'Kegiatan',
        judul: 'Studi Banding ke Yanbu\'ul-Qur\'an Kudus',
        ringkasan: 'LTQ mengadakan kegiatan studi banding ke Yanbu\'ul-Qur\'an Kudus untuk memperkaya wawasan dan pengalaman para santri.',
        tanggal: '2 Januari 2025',
        penulis: 'Admin LTQ',
        waktuBaca: '5 menit',
        foto: '/images/berita/studi-banding.jpeg',           // ← ganti: '/images/berita/ramadhan-1446.jpg'
        fallbackIcon: '🏫',
        fallbackBg: 'from-green-800 to-green-600',
        featured: false,
        konten: [
            { tipe: 'p', isi: 'Lembaga Tahfidhul Qur\'an (LTQ) mengadakan kegiatan studi banding ke Yanbu\'ul-Qur\'an Kudus untuk memperkaya wawasan dan pengalaman para santri.' },
            { tipe: 'h3', isi: 'Program Studi Banding' },
            {
                tipe: 'ul', isi: [
                    'Tujuan program studi banding ke Yanbu\'ul-Qur\'an Kudus adalah untuk memberikan pengalaman langsung kepada para santri tentang metode pembelajaran tahfidz yang diterapkan di salah satu lembaga tahfidz terbaik di Indonesia.',
                    'Program ini didampingi langsung oleh ketua pengurus P2AL, serta beberapa pengurus Departemen Pengembangan Bahasa dan Lembaga Khusus.',
                    'Program studi banding ini hanya berfokus pada program tahfidz.',
                    'Diskusi dan sharing session dengan para ustadz di Yanbu\'ul-Qur\'an Kudus untuk menggali lebih dalam tentang metode pembelajaran, manajemen lembaga, dan strategi pembinaan santri.',
                    'Perkenalan dengan lingkungan dan fasilitas di Yanbu\'ul-Qur\'an Kudus, termasuk ruang kelas, asrama, perpustakaan, dan masjid.',
                    'Observasi langsung proses pembelajaran tahfidz di kelas, termasuk metode talaqqi, muraja\'ah, dan evaluasi hafalan santri.',
                    'Sesi tanya jawab dan diskusi dengan para ustadz di Yanbu\'ul-Qur\'an Kudus untuk mendapatkan insight dan inspirasi dalam meningkatkan kualitas pembinaan di LTQ.',
                    'Kegiatan ini diharapkan dapat memberikan motivasi dan inspirasi bagi para santri untuk terus meningkatkan kualitas hafalan dan pemahaman mereka tentang Al-Qur\'an, serta mempererat tali silaturahmi antara LTQ dan Yanbu\'ul-Qur\'an Kudus.'
                ]
            },
            { tipe: 'h3', isi: 'Hasil Studi Banding' },
            { tipe: 'p', isi: 'Hasil dari studi banding ke Yanbu\'ul-Qur\'an Kudus adalah peningkatan wawasan dan pengalaman para santri LTQ, serta semakin eratnya hubungan antara LTQ dan Yanbu\'ul-Qur\'an Kudus dalam upaya meningkatkan kualitas pembinaan tahfidz.' },
            { tipe: 'quote', isi: 'Studi banding ini memberikan inspirasi dan motivasi bagi para santri LTQ untuk terus meningkatkan kualitas hafalan dan pemahaman mereka tentang Al-Qur\'an.', sumber: 'Ustaz Ahmad Fahrian Hidayah — Ketua Pengurus LTQ' },
            { tipe: 'p', isi: 'Alhamdulillah, kegiatan ini telah memberikan dampak positif yang signifikan bagi para santri LTQ.' },
        ],
    },
]

// ==================== GALERI ====================
// ─────────────────────────────────────────────────────────────────────────────
// CARA MENAMBAH / MENGGANTI FOTO:
//
// 1. Letakkan file gambar di folder:  public/images/galeri/
//    Format yang didukung: .jpg  .jpeg  .png  .webp  .avif
//    Rekomendasi ukuran  : minimal 800×600 px, rasio bebas (thumbnail akan crop otomatis)
//
// 2. Isi field `foto` dengan nama file-nya, contoh:
//    foto: '/images/galeri/wisuda-2025.jpg'
//
// 3. Jika foto belum tersedia, kosongkan field `foto` (null) → akan tampil
//    placeholder elegan secara otomatis.
//
// 4. Tambah item baru: salin salah satu objek di bawah, ganti id unik,
//    isi judul, deskripsi, kategori, tanggal, dan foto.
// ─────────────────────────────────────────────────────────────────────────────

export const galeriKategori = ['Semua', 'Wisuda', 'Kegiatan', 'Prestasi', 'Sosial', 'Acara']

export const galeriData = [
    {
        id: 1,
        judul: 'Wisuda Hafidz & Hafidzah ke-8',
        deskripsi: 'Momen penuh haru saat 8 santri diwisuda sebagai Hafidz dan Hafidzah baru di LTQ.',
        kategori: 'Wisuda',
        tanggal: '28 Desember 2024',
        foto: 'images/galeri/hns.jpeg',              // ← ganti: '/images/galeri/wisuda-2024.jpg'
        fallbackIcon: '🕌',
        fallbackBg: 'from-green-900 via-green-800 to-green-700',
    },
    {
        id: 2,
        judul: 'Setoran Hafalan Pagi',
        deskripsi: 'Para santri menyetorkan hafalan baru kepada ustadz di masjid setiap pagi hari.',
        kategori: 'Kegiatan',
        tanggal: '10 Januari 2025',
        foto: 'images/galeri/reuni.jpeg',              // ← ganti: '/images/galeri/setoran-pagi.jpg'
        fallbackIcon: '📖',
        fallbackBg: 'from-green-800 to-green-600',
    },
    {
        id: 3,
        judul: 'Juara 1 MTQ Kabupaten 2025',
        deskripsi: 'Santri LTQ berhasil meraih Juara 1 cabang Tilawah dalam ajang MTQ tingkat kabupaten.',
        kategori: 'Prestasi',
        tanggal: '15 Januari 2025',
        foto: 'images/galeri/juara-mtq.png',
        fallbackIcon: '🏆',
        fallbackBg: 'from-green-950 to-green-800',
    },
    {
        id: 4,
        judul: 'Penerimaan Piala MTQ',
        deskripsi: "Prosesi penerimaan piala dan penghargaan usai Musabaqoh Tilawatil Qur'an.",
        kategori: 'Prestasi',
        tanggal: '15 Januari 2025',
        foto: 'images/galeri/piala.png',
        fallbackIcon: '🥇',
        fallbackBg: 'from-green-900 to-green-700',
    },
    {
        id: 5,
        judul: 'Kelas Diniyah Bersama',
        deskripsi: 'Santri mengikuti kelas diniyah yang membahas kitab fiqh klasik bersama ustadz.',
        kategori: 'Kegiatan',
        tanggal: '5 Januari 2025',
        foto: 'images/galeri/workshop.jpeg',
        fallbackIcon: '📚',
        fallbackBg: 'from-green-800 to-green-700',
    },
    {
        id: 6,
        judul: 'Workshop Metode Tahfidz',
        deskripsi: 'Para ustadz mengikuti workshop intensif metode pembelajaran tahfidz terkini.',
        kategori: 'Kegiatan',
        tanggal: '20 Desember 2024',
        foto: 'images/galeri/mpl.jpeg',
        fallbackIcon: '🎓',
        fallbackBg: 'from-green-900 to-green-800',
    },
    {
        id: 7,
        judul: "Khataman Al-Qur'an Bersama",
        deskripsi: "Acara khataman Al-Qur'an bersama seluruh wali santri yang penuh khidmat dan haru.",
        kategori: 'Kegiatan',
        tanggal: '28 Desember 2024',
        foto: 'images/galeri/penghargaan-santri.jpeg',
        fallbackIcon: '🤲',
        fallbackBg: 'from-green-900 to-green-700',
    },
    {
        id: 8,
        judul: 'Hari Lahir ke-18 LTQ',
        deskripsi: 'Tasyakuran hari lahir LTQ yang ke-18 dengan berbagai kegiatan sosial dan keagamaan.',
        kategori: 'Acara',
        tanggal: '20 Desember 2024',
        foto: 'images/galeri/harlah-18.jpeg',              // ← ganti: '/images/galeri/bakti-sosial.jpg'
        fallbackIcon: '❤️',
        fallbackBg: 'from-green-800 to-green-600',
    },
    {
        id: 9,
        judul: "Haflah Akhir Sanah",
        deskripsi: "Haflah akhir sanah yang meriah dengan penampilan santri dan tausiyah dari pengasuh.",
        kategori: 'Acara',
        tanggal: 'Maret 2025',
        foto: 'images/galeri/has.jpeg',              // ← ganti: '/images/galeri/itikaf-ramadhan.jpg'
        fallbackIcon: '🌙',
        fallbackBg: 'from-green-900 to-green-700',
    },
    {
        id: 10,
        judul: 'Wisuda Tahfidz ke-9',
        deskripsi: 'Kegiatan wisuda tahfidz yang diawali tasmi\' santri sesuai dengan kategori juz.',
        kategori: 'Wisuda',
        tanggal: '12 Januari 2025',
        foto: 'images/galeri/wisuda.jpeg',              // ← ganti: '/images/galeri/olahraga-pagi.jpg'
        fallbackIcon: '⚽',
        fallbackBg: 'from-green-700 to-green-600',
    },
    {
        id: 11,
        judul: 'Tadarus Malam Ramadhan',
        deskripsi: "Santri melantunkan ayat-ayat Al-Qur'an bersama setelah shalat tarawih.",
        kategori: 'Ramadhan',
        tanggal: 'Maret 2025',
        foto: 'images/galeri/tadarus.jpeg',              // ← ganti: '/images/galeri/tadarus-ramadhan.jpg'
        fallbackIcon: '✨',
        fallbackBg: 'from-green-800 to-green-600',
    },
    {
        id: 12,
        judul: 'Malam Nuzulul Qur\'an',
        deskripsi: 'Khatmil Qur\'an serta pengajian yang diisi oleh Kiai Bassyam Syamil.',
        kategori: 'Ramadhan',
        tanggal: 'Februari 2025',
        foto: 'images/galeri/nq.jpeg',              // ← ganti: '/images/galeri/takjil-ramadhan.jpg'
        fallbackIcon: '🌙',
        fallbackBg: 'from-green-700 to-green-800',
    },
]

// ==================== PROFIL ====================
export const profilData = {
    fotoSejarah: '/images/profil/sejarah.jpeg',

    sejarah: `Lembaga Tahfidhul Quran (LTQ) merupakan lembaga Tahfidh, yang berada di bawah naungan Pondok Pesantren Annuqayah Latee, yang menampung para santri yang mempunyai minat kuat untuk menghafalkan al-Quran serta memperbaiki bacaan al-Qurannya. Lembaga ini mendapatkan prioritas tersendiri dari pengurus PP. Annuqayah Latee karena merupakan lembaga yang dicita-citakan oleh pengasuh ,KH. Ahmad Basyir, sejak dahulu; yaitu mewujudkan santri PP. Annuqayah Latee yang hafal al-Quran secara lafdhan wa ma’nan wa amalan.

Menyadari akan pentingnya kepengurusan bagi sebuah lembaga yang dapat mengatur, merencanakan/membentuk program khusus dalam menghafalkan al-Quran, maka dibentuklah susunan kepengurusan di dalam lembaga yang jelas tata-laksana penyelenggaraannya. Maka dari itu, disusunlah Lembar Pedoman Lembaga Tahfidhul Quran sebagai landasan utama aturan jalannya organisasi.`,

    visi: `Melahirkan generasi Qur\'ani.`,

    misi: [
        'Mencetak santri dan menumbuh kembangkan rasa cinta terhadap al-Quran dengan cara menghafal dan mentadabburi isinya.',
        'Mencetak santri yang berwawasan dan bertingkah laku sebagaimana yang dituntun dalam al-Quran.',
        'Mewujudkan santri yang mampu membaca al-Quran secara baik dan benar sesuai kaidah tajwid.',
        'Mewujudkan santri yang hafal al-Quran 30 juz dengan tahqiq.',
    ],

    nilai: [
        { nama: 'Ikhlas', arab: 'إِخْلَاص', ket: 'Mengamalkan segala sesuatu hanya karena Allah SWT semata' },
        { nama: 'Istiqomah', arab: 'إِسْتِقَامَة', ket: 'Konsisten dan tekun dalam menjalani proses menghafal dan muroja\'ah' },
        { nama: 'Amanah', arab: 'أَمَانَة', ket: 'Bertanggung jawab menjaga hafalan sebagai titipan Allah' },
        { nama: 'Tawadhu\'', arab: 'تَوَاضُع', ket: 'Rendah hati dan menghargai sesama dalam majelis ilmu' },
        { nama: 'Ukhuwah', arab: 'أُخُوَّة', ket: 'Persaudaraan Islamiyah yang tulus antar sesama santri' },
    ],

    // ── Struktur organisasi ───────────────────────────────────────
    // fotoStruktur: gambar bagan keseluruhan (landscape)
    fotoStruktur: null,  // ← ganti: '/images/profil/struktur-organisasi.jpg'

    // Kepengurusan dibagi 4 bagian
    kepengurusan: {
        pelindung: {
            label: 'Pelindung',
            warna: 'from-green-950 to-green-900',
            aksen: 'border-gold-500',
            anggota: [
                { nama: 'Ahmad Rofiq, M.Ag.', jabatan: 'Pelindung', ket: 'Ketua Pengurus P2AL', foto: null },
                // { nama: 'KH. Muhammad Tholhah', jabatan: 'Pengasuh II', ket: 'Pengasuh Pesantren, Hafidz 30 Juz', foto: null },
            ],
        },
        dewanSyuro: {
            label: 'Dewan Syuro',
            warna: 'from-green-900 to-green-800',
            aksen: 'border-gold-600',
            anggota: [
                { nama: 'Ali Akbar Nafis, S.Ag.', jabatan: 'Dewan Syuro', ket: '', foto: null },
                { nama: 'Ahmad Nurhadi', jabatan: 'Dewan Syuro', ket: '', foto: null },
                { nama: 'Miftahul Arifin, S.Ag.', jabatan: 'Dewan Syuro', ket: '', foto: null },
                { nama: 'Fathorrahman, S.Ag.', jabatan: 'Dewan Syuro', ket: '', foto: null },
                { nama: 'Lutfan Syafiq', jabatan: 'Dewan Syuro', ket: '', foto: null },
            ],
        },
        tanfiziyah: {
            label: 'Tanfiziyah (Pengurus Harian)',
            warna: 'from-green-800 to-green-700',
            aksen: 'border-gold-600',
            anggota: [
                { nama: 'Ahmad Fathen Nabil, S.Ag.', jabatan: 'Ketua', ket: 'Rayon LTQ', foto: null },
                { nama: 'Rian Maulana', jabatan: 'Sekretaris', ket: 'Rayon LTQ', foto: null },
                { nama: 'A. Fa\'abil Riyadh Amini, S.Pd.', jabatan: 'Bendahara', ket: 'Rayon LTQ', foto: null },
            ],
        },
        divisi: {
            label: 'Divisi-Divisi',
            warna: 'from-green-700 to-green-600',
            aksen: 'border-gold-600',
            anggota: [
                { nama: 'Ach. Hariri', jabatan: 'Mudarasah', ket: 'Koordinator', foto: null },
                { nama: 'Toriq Ilham', jabatan: 'Mudarasah', ket: 'Anggota', foto: null },
                { nama: 'Moh. Muhyiddin Al-Maulidi', jabatan: 'Mudarasah', ket: 'Anggota', foto: null },
                { nama: 'Ahmad Ariyanto', jabatan: 'Keamanan dan Ketertiban', ket: 'Koordinator', foto: null },
                { nama: 'Moh. Rizal, S.E.', jabatan: 'Keamanan dan Ketertiban', ket: 'Anggota', foto: null },
                { nama: 'Hanif Hidayatullah', jabatan: 'Keamanan dan Ketertiban', ket: 'Anggota', foto: null },
                { nama: 'Miftah', jabatan: 'Kebersihan dan Perlengkapan', ket: 'Koordinator', foto: null },
                { nama: 'Moh. Jailani', jabatan: 'Kebersihan dan Perlengkapan', ket: 'Anggota', foto: null },
                { nama: 'Faizal Arifin', jabatan: 'Kebersihan dan Perlengkapan', ket: 'Anggota', foto: null },
            ],
        },
    },

    // ── Pendiri (tata letak: pengasuh di tengah atas, 2 utusan di kiri-kanan bawah) ──
    pendiri: {
        pengasuh: {
            nama: 'KH. Ahmad Basyir Abdullah Sajjad',
            peran: 'Pengasuh & Pendiri',
            ket: 'Ulama kharismatik yang menggagas dan mendirikan LTQ pada tahun 2006 dengan meng-amanah-kan kepada salah satu santri kepercayaan beliau.',
            foto: null,   // ← ganti: '/images/profil/pendiri-pengasuh.jpg'
        },
        utusan: [
            {
                nama: 'Ust. Syamsul Hadi',
                peran: 'Perintis',
                ket: 'Santri kepercayaan yang mendapat amanah untuk mendirikan wadah bagi santri yang mempunyai himmah untuk menghafal Al-Qur\'an.',
                foto: null,   // ← ganti: '/images/profil/pendiri-mujahid.jpg'
            },
            {
                nama: 'Ust. Harun Adiyanto',
                peran: 'Perintis',
                ket: 'Santri senior yang turut serta merintis pondasi Lembag Tahfidhul Qur\'an.',
                foto: null,   // ← ganti: '/images/profil/pendiri-fathurrahman.jpg'
            },
        ],
    },

    // ── Riwayat ketua pengurus dari masa ke masa ──────────────────
    riwayatKetua: [
        { periode: '2006 – 2007', nama: '----------', ket: ' ', foto: null },
        { periode: '2007 – 2008', nama: '----------', ket: ' ', foto: null },
        { periode: '2008 – 2009', nama: '----------', ket: ' ', foto: null },
        { periode: '2009 – 2010', nama: '----------', ket: ' ', foto: null },
        { periode: '2011 – 2012', nama: '----------', ket: ' ', foto: null },
        { periode: '2012 – 2013', nama: '----------', ket: ' ', foto: null },
        { periode: '2013 – 2014', nama: '----------', ket: ' ', foto: null },
        { periode: '2014 – 2015', nama: '----------', ket: ' ', foto: null },
        { periode: '2015 – 2016', nama: '----------', ket: ' ', foto: null },
        { periode: '2016 – 2017', nama: '----------', ket: ' ', foto: null },
        { periode: '2017 – 2018', nama: '----------', ket: ' ', foto: null },
        { periode: '2018 – 2019', nama: '----------', ket: ' ', foto: null },
        { periode: '2019 – 2020', nama: '----------', ket: ' ', foto: null },
        { periode: '2020 – 2021', nama: '----------', ket: ' ', foto: null },
        { periode: '2021 – 2022', nama: '----------', ket: ' ', foto: null },
        { periode: '2022 – 2023', nama: '----------', ket: ' ', foto: null },
        { periode: '2023 – 2024', nama: '----------', ket: ' ', foto: null },
        { periode: '2024 – 2025', nama: '----------', ket: ' ', foto: null },
        { periode: '2025 – kini', nama: '----------', ket: ' ', foto: null },
    ],
}