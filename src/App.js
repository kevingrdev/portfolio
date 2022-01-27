import './Reset.css'
import './App.css'
import { Presentation } from './components/Presentation'
import { TextSlide } from './components/TextSlide'
import { Portfolio } from './components/Portfolio'
import { Curses } from './components/Curses'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'

function App() {
  return (
    <div className="layout">
      <header className="header">
        <Nav />
        <TextSlide />
        <h2>mi nombre es Kevin</h2>
      </header>
      <main>
        <Presentation />
        <Portfolio />
        <Curses />
      </main>
      <Footer />
    </div>
  )
}

export default App
