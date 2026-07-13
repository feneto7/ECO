import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Differentials } from './components/Differentials'
import { Team } from './components/Team'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Differentials />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
