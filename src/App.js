import 'fontsource-roboto'
import Footer from './components/Footer'

import ListProjects from './components/ListProjects'
import SwitchTheme from './components/SwitchTheme'
import Header from './components/Header'
import ListCurses from './components/ListCurses'
import AdditionalInfo from './components/AdditionalInfo'

import { ThemeContextProvider } from './context/Theme'
import { analytics } from './config/firebase'
import './App.css'
import './Reset.css'

function App() {
  return (
    <ThemeContextProvider>
      <main className="layout">
        <SwitchTheme />
        <Header
          title="Front end &#128187;"
          description="Desarrollo interfaces web para miles de usuarios ya que participo creación de e-comers para grandes empresas. Soy un apasionado por las tecnologías particularmente por React."
        />
        <ListProjects />
        <ListCurses />
        <AdditionalInfo />
      </main>
      <Footer />
    </ThemeContextProvider>
  )
}

export default App
