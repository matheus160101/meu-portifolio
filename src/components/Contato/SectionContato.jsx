import './SectionContato.css'
import iconEmail from '../../images/icons/icon-email.png'
import iconTelefone from '../../images/icons/icon-telefone.png'
import iconLinkedin from '../../images/icons/icon-linkedin.svg'
import iconGitHub from '../../images/icons/icon-github.svg'



export default function SectionContato(){
  return(
    <>
      <section id="contato">
        <div className="container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1>Contato</h1>
          <div className="contact">
            <a href="mailto:matheus_henriquecwb@hotmail.com" target='_blank'>
              <div className="contact-box">
                <div className="contact-img"><img src={iconEmail} alt="" /></div>
                <h1>Email</h1>
                <p>matheus_henriquecwb@hotmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/41998285501" target='_blank'>
              <div className="contact-box">
                <div className="contact-img"><img src={iconTelefone} alt="" /></div>
                <h1>Telefone</h1>
                <p>41 99828-5501</p>
              </div>
            </a>

            <a href="https://github.com/matheus160101" target='_blank'>
              <div className="contact-box">
                <div className="contact-img"><img src={iconGitHub} alt="" /></div>
                <h1>Github</h1>
                <p>@matheus160101</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/matheus-silveira-4638061b8/" target='_blank'>
              <div className="contact-box">
                <div className="contact-img"><img src={iconLinkedin} alt="" /></div>
                <h1>Linkedin</h1>
                <p>Matheus Silveira</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}