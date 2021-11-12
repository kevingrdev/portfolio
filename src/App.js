import "fontsource-roboto";
import Footer from "./components/Footer.jsx";

import ListProjects from "./components/ListProjects.jsx";
import SwitchTheme from "./components/SwitchTheme.jsx";
import Header from "./components/Header.jsx";
import ListCurses from "./components/ListCurses";

import { ThemeContextProvider } from "./context/Theme";

import "./App.css";
import "./Reset.css";

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
      </main>
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
