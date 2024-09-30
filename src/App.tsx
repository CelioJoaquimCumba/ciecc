import './App.css'
import Navbar from './components/molecules/Navbar'
import TopBar from './components/molecules/TopBar'
import EducationSection from './components/organisms/EducationSection'
import FaqSection from './components/organisms/FaqSection'
import HeroSection from './components/organisms/HeroSection'
import QuoteSection from './components/organisms/QuoteSection'
import ServicesSection from './components/organisms/ServicesSection'
import TestimonySection from './components/organisms/TestimonySection'
import WhoWeAreSection from './components/organisms/WhoWeAreSection'


function App() {

  return (
      <div className='w-screen h-dvh'>
        <Navbar />
        <HeroSection/>
        <QuoteSection />
        <WhoWeAreSection />
        <EducationSection />
        <ServicesSection />
        <TestimonySection />
        <FaqSection />
        <TopBar />
      </div>
  )
}

export default App
