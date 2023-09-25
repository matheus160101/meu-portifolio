import './SectionProjetos.css'
import iconHtml from '../../images/icons/icon-html.svg'
import iconCss from '../../images/icons/icon-css.svg'
import iconJava from '../../images/icons/icon-javascript.svg'
import iconType from '../../images/icons/icon-typescript.svg'
import iconBoot from '../../images/icons/icon-bootstrap.svg'
import iconReact from '../../images/icons/icon-react.svg'
import iconFigma from '../../images/icons/icon-figma.svg'
import iconRuby from '../../images/icons/icon-ruby.svg'
import iconSass from '../../images/icons/icon-sass.svg'


export default function SectionProjeto(){
  return(
    <>
      <section id='projetos'>
        <div className="container">
          <div className="project" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1>Projetos</h1>
          <div className="projects" >
            <div className="project-item1">
              <a href="https://onebit-ne6a0dxuo-matheus160101.vercel.app/" target='_blank'>
                <div className="project-onebitx">
                  <h1>OneBitX</h1>
                  <div className="project-images">
                    <img src={iconHtml} alt="" />
                    <img src={iconCss} alt="" />
                    <img src={iconSass} alt="" />
                    <img src={iconJava} alt="" />
                    <img src={iconBoot} alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="project-text">
              <p>OneBitX é um clone da plataforma da SpaceX, o objetivo era aplicar as boas praticas de HTML, CSS, Sass e BootStrap obtidas em aula, o projeto se consite em reproduzir a pagina home e as proximas duas paginas do site da spaceX. </p>
              <div className="project-onebitx-button">
                <a href="https://onebit-ne6a0dxuo-matheus160101.vercel.app/" target='_blank'><button>Site</button></a>
                <a href="https://github.com/matheus160101/onebitX" target='_blank'><button>GitHub</button></a>
                <a href="https://www.linkedin.com/posts/matheus-silveira-4638061b8_estou-feliz-em-compartilhar-este-projeto-activity-7105951360092635137-pJK2?utm_source=share&utm_medium=member_desktop" target='_blank'><button>Post Linkdin</button></a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}