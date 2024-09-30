import './App.css'
import Navbar from './components/molecules/Navbar'
import EducationSection from './components/organisms/EducationSection'
import FaqSection from './components/organisms/FaqSection'
import HeroSection from './components/organisms/HeroSection'
import QuoteSection from './components/organisms/QuoteSection'
import ServicesSection from './components/organisms/ServicesSection'
import TestimonySection from './components/organisms/TestimonySection'
import WhoWeAreSection from './components/organisms/WhoWeAreSection'
import Footer from './components/molecules/Footer'


function App() {

  return (
      <div className='w-screen h-dvh bg-white'>
        <Navbar />
        <HeroSection/>
        <QuoteSection />
        <WhoWeAreSection />
        <EducationSection />
        <ServicesSection />
        <TestimonySection />
        <FaqSection />
        <Footer />
      </div>
  )
}

export default App
