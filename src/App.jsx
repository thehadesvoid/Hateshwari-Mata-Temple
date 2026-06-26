import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timings from './components/Timings'
import Gallery from './components/Gallery'
import Donation from './components/Donation'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timings />
        <Gallery />
        <Events />
        <Donation />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
