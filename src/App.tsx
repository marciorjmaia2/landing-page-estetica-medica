import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ValueProps from './components/ValueProps/ValueProps'
import Procedures from './components/Procedures/Procedures'
import BeforeAfter from './components/BeforeAfter/BeforeAfter'
import About from './components/About/About'
import Faq from './components/Faq/Faq'
import FinalCta from './components/FinalCta/FinalCta'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="landing-app">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Procedures />
        <BeforeAfter />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}