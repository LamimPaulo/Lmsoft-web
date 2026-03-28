import { Navbar, Hero, Services, TechGrid, Process, FAQ, About, Contact, CTA, Footer } from '@/components'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <TechGrid />
        <Process />
        <FAQ />
        <About />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
