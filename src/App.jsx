import { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative min-h-screen bg-bg text-paper">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <Navbar />

      <main className="relative z-10">
        <Hero isLoaded={!loading} />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}
