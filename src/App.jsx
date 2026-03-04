import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ProfilPage from './pages/ProfilPage'
import ProgramPage from './pages/ProgramPage'
import SantriPage from './pages/SantriPage'
import JadwalPage from './pages/JadwalPage'
import BeritaPage from './pages/BeritaPage'
import BeritaDetailPage from './pages/BeritaDetailPage'
import GaleriPage from './pages/GaleriPage'
import KontakPage from './pages/KontakPage'
import ScrollToTop from './components/common/ScrollToTop'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/santri" element={<SantriPage />} />
        <Route path="/jadwal" element={<JadwalPage />} />
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/berita/:slug" element={<BeritaDetailPage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/kontak" element={<KontakPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  )
}