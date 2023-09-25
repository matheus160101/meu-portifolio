import Header from "./components/Navbar/Header"
import './App.css'
import SectionSobre from "./components/Sobre/SectionSobre"
import SectionHabilidades from "./components/Habilidades/SectionHabilidades"
import SectionProjeto from "./components/Projetos/SectionProjetos"
import SectionContato from "./components/Contato/SectionContato"
import Footer from "./components/Footer/Footer"


export default function App() {

  return (
    <>
      <Header/>
      <SectionSobre/>
      <SectionHabilidades/>
      <SectionProjeto/>
      <SectionContato/>
      <Footer />
    </>
  
  )
}
