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
          <div className="project" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1>Projetos</h1>
            <div className="projects" >
              <div className="project-itens" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='project-item1'>
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
                <div className="project-text1">
                  <p>OneBitX é um clone da plataforma da SpaceX, o objetivo era aplicar as boas praticas de HTML, CSS, Sass e BootStrap obtidas em aula, o projeto se consite em reproduzir a pagina home e as proximas duas paginas do site da spaceX. </p>
                  <div className="project-onebitx-button">
                    <a href="https://onebit-ne6a0dxuo-matheus160101.vercel.app/" target='_blank'><button>Site</button></a>
                    <a href="https://github.com/matheus160101/onebitX" target='_blank'><button>GitHub</button></a>
                  </div>
                </div>
              </div>
              <div className="project-itens" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='project-item2'>
                  <a href="https://calculadora-ruby-five.vercel.app/" target='_blank'>
                    <div className="project-onebitx1">
                      <h1>Calculadora</h1>
                      <div className="project-images">
                        <img src={iconHtml} alt="" />
                        <img src={iconCss} alt="" />
                        <img src={iconJava} alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="project-text2">
                  <p>Projeto Calculadora realizado para treinar as boas praticas de HTML, CSS e JavaScript, o projeto consiste em uma calculadora com todas as logicas de soma, subtração, multiplicação, divisão, porcetagem e um botão que muda a cor do thema (dark/light).  </p>
                  <div className="project-onebitx-button">
                    <a href="https://calculadora-ruby-five.vercel.app/" target='_blank'><button>Site</button></a>
                    <a href="https://github.com/matheus160101/Calculadora" target='_blank'><button>GitHub</button></a>
                  </div>
                </div>
              </div>

              <div className="project-itens" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='project-item3'>
                  <a href="https://explore-lab-01-delta.vercel.app/" target='_blank'>
                    <div className="project-onebitx2">
                      <h1>Rocketpay</h1>
                      <div className="project-images">
                        <img src={iconHtml} alt="" />
                        <img src={iconCss} alt="" />
                        <img src={iconJava} alt="" />
                        <img src={iconFigma} alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="project-text3">
                  <p>Projeto realizado para mostrar a simulação de preenchimento de cartão ao inserir os dados para compras, atualizando o layout do cartão, bandeira e os dados adicionados. Utilizando as boas praticas de HTML, CSS, JavaScript, SVG e Figma</p>
                  <div className="project-onebitx-button">
                    <a href="https://explore-lab-01-delta.vercel.app/" target='_blank'><button>Site</button></a>
                    <a href="https://github.com/matheus160101/explore-lab" target='_blank'><button>GitHub</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}