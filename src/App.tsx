import './App.css'

// Components
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Services from './components/Services.tsx'
import FAQ from './components/FAQ.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
