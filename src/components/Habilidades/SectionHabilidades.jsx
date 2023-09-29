import iconHtml from '../../images/icons/icon-html.svg'
import iconCss from '../../images/icons/icon-css.svg'
import iconJava from '../../images/icons/icon-javascript.svg'
import iconType from '../../images/icons/icon-typescript.svg'
import iconBoot from '../../images/icons/icon-bootstrap.svg'
import iconReact from '../../images/icons/icon-react.svg'
import iconFigma from '../../images/icons/icon-figma.svg'
import iconRuby from '../../images/icons/icon-ruby.svg'
import iconSass from '../../images/icons/icon-sass.svg'
import './SectionHabilidades.css'


export default function SectionHabilidades(){
  return(
    <>
      <section id='habilidades'>
        <div className="container" >
          <div className="skills" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1>Habilidades</h1>
            <div className="skills-application" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className='skills-box'>
                <p>HTML</p>
                <img src={iconHtml} alt="" />
              </div>

              <div className='skills-box'>
                <p>CSS</p>
                <img src={iconCss} alt="" />
              </div>

              <div className='skills-box'>
                <p>JavaScript</p>
                <img src={iconJava} alt="" />
              </div>

              <div className='skills-box'>
                <p>TypeScript</p>
                <img src={iconType} alt="" />
              </div>

              <div className='skills-box'>
                <p>React</p>
                <img src={iconReact} alt="" />
              </div>

              <div className='skills-box'>
                <p>Ruby</p>
                <img src={iconRuby} alt="" />
              </div>

              <div className='skills-box'>
                <p>BootStrap</p>
                <img src={iconBoot} alt="" />
              </div>

              <div className='skills-box'>
                <p>Sass</p>
                <img src={iconSass} alt="" />
              </div>

              <div className='skills-box'>
                <p>Figma</p>
                <img src={iconFigma} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}