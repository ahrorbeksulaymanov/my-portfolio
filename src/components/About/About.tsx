import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import portfolioImage from "../../assets/me.png";


export function About() {
  return (
    <Container id="aboutme">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p style={{marginBottom:"30px"}}>My name is Ahror, I am a programmer with a passion for programming. I am passionate about providing solutions to the problems people face in their lives. I improved my skills as a Front-End programmer</p>
          <p style={{marginBottom:"30px"}}>I develop websites and applications using HTML, CSS, Bootstrap, Ant Design, JavaScript, JQuery, React js, Redux, Next js and TypeScript. I am familiar with designing models that will help me. With each project they put in, I am constantly improving myself</p>
          <p style={{marginBottom:"30px"}}>I am a selfless person who strives for my dreams, hardworking and results-oriented, I always strive to achieve my best version</p>
          <p>I have more than 2 years of experience in this field, during which time I have worked in several companies and gained experience</p>
        </ScrollAnimation>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={100}>
          <img style={{width:"70%"}} src={portfolioImage} alt="My image" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
