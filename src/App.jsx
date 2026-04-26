// ── App.jsx ──────────────────────────────────────────────────────────────────
// Root component: assembles Navbar + all portfolio sections + Footer.
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Experience  from './components/Experience'
import Projects    from './components/Projects'
import Publication from './components/Publication'
import Skills      from './components/Skills'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publication />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
