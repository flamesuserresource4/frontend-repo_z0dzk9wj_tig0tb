import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_-10%),rgba(168,85,247,0.08),transparent_40%], [radial-gradient(900px_circle_at_90%_-10%),rgba(99,102,241,0.08),transparent_40%]"></div>

      <div className="relative">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Work />
        <CTA />
        <footer className="py-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} reverseBits — Crafted in India</footer>
      </div>
    </div>
  )
}

export default App
