import 'fontsource-roboto';
import Footer from './components/Footer';
import ProjectsList from './components/ProjectsList/Index';

import SwitchTheme from './components/SwitchTheme';
import { ThemeContextProvider } from './context/Theme';
import ProcesLine from './components/ProcesLine';
import HeaderApp from './components/HeaderApp';

import ListExperience from './components/ListExperienceWork';
import './App.css';
import './Reset.css';

function App() {
  return (
    <ThemeContextProvider>
      <main className='layout'>
        <SwitchTheme/>
        <HeaderApp
          title='Hola, soy Kevin, programador.'
          description='Me especializo en el desarrollo de web con React Js aunque tengo experiencia en Android y Node Js.'
          btnText='Colaborar conmigo...'
        />
        <ListExperience/>
        <ProjectsList />
        <ProcesLine title='¿Trabajamos juntos?' />
      </main>
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
