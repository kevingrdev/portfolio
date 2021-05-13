import 'fontsource-roboto';
import ButtonAppBar from './components/nav';
import Footer from './components/footer';
import FeaturedWorks from './components/featuredWorks';
// import Header from './components/Header';
import Galery from './pages/Galery'
import SwitchTheme from './components/SwitchTheme';
import { ThemeContextProvider } from './context/Theme';
import ProcesLine from './components/procesLine';

import './app.css';
import HeaderApp from './components/HeaderApp';

function App() {
  return (
    <ThemeContextProvider>
      <ButtonAppBar />
      <main className='layout'>
        <SwitchTheme />
        <HeaderApp
          title='Hola, soy Kevin, programador.'
          description='Tengo dos años de experiencia en el mundo de la programación, comence desarrollando en PHP, actualmente mi especialidad es React.js, pero tengo experiencia en el mundo movil y backend. ¡Me gusta aprender tecnologías nuevas!'
          btnText='Colaborar conmigo..'
        />
        <FeaturedWorks />
        <Galery title='Galería de trabajos' />
        <ProcesLine title='¿Trabajamos juntos?' />
      </main>
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
