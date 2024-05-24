import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Me from "../../assets/mee.png"
import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi 👋</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <h1 style={{fontSize:"50px"}}>Ahror Sulaymanov</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={120}>
          <h3>Front-end developer | JavaScript | React js | Next js | Tailwind</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={130}>
          <p className="small-resume">Software engineer with a primary focus on web, and frontend development. <br /> I have been working with Javascript and its ecosystem - React js, Redux, Next js, and TypeScript for 3+ years.</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={150}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0}>
          <img src={Me} alt="Ilustração"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}