import Foto from '../../images/foto.png'
import './SectionSobre.css'
import MeuCurriculo from '../../documents/MatheusCurriculo.pdf'

export default function SectionSobre(){
  return(
    <>
      <section id='sobre'>
        <div className="container">
          <div className="content" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="content-about">
              <h1>Matheus H. Silveira</h1>
              <p>Desenvolvedor Full-Stack</p>
              <a href={MeuCurriculo} download={MeuCurriculo}><button >Download CV</button></a>
              <a href="#contato"><button>Contato</button></a>
            </div>

            <div className="photograph">
              <a href="https://github.com/matheus160101" target='_blank'><img src={Foto} alt="" /></a>
            </div>
          </div>

          <div className="about" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="about-text">
              <h1>Sobre</h1>
              <p>Prazer me chamo Matheus tenho 22 anos, faço Engenharia de Software, atualmente estou no 2° Periodo da Faculdade,
              sou apaixonado pela area de programação e tecnologia, estou estudando para seguir como Desenvolvedor Full-Stack,
              no momento estou atuando Front-End com as sequintes tecnologias JavaSript, TypeScript, Sass, Bootstrap, React e Ruby . </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}