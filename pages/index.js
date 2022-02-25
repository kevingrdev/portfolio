import { Presentation } from 'components/Presentation'
import { TextSlide } from 'components/TextSlide'
import { Portfolio } from 'components/Portfolio'
import { Curses } from 'components/Curses'
import { Footer } from 'components/Footer'
import { Nav } from 'components/Nav'

export default function home() {
  return (
    <main className="layout">
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
    </main>
  )
}
