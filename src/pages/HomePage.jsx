import PageTransition from '../components/common/PageTransition'
import HeroSection from '../components/home/HeroSection'
import ProgramPreview from '../components/home/ProgramPreview'
import BeritaPreview from '../components/home/BeritaPreview'
import QuoteSection from '../components/home/QuoteSection'
import GaleriPreview from '../components/home/GaleriPreview'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
    return (
        <PageTransition>
            <HeroSection />
            <ProgramPreview />
            <QuoteSection />
            <BeritaPreview />
            <GaleriPreview />
            <CTASection />
        </PageTransition>
    )
}