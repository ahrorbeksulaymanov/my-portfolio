import { Container } from "./styles";
import intalim from '../../assets/intalim.png'
import bianchi from '../../assets/bianchi.png'
import arabiya from '../../assets/al-arabiya.png'
import infotian from '../../assets/info-tian.png'
import process from '../../assets/process.png'
import reseption from '../../assets/reseption.png'
import qabul from '../../assets/perfect-qabul.png'
import eutas from '../../assets/eutas.png'
import yoshlar from '../../assets/yoshlar.png'
import topskill from '../../assets/topskill.png'
import easttour from '../../assets/east-tour.png'
import converterbot from '../../assets/converter-bot.png'
import stiTransportation from '../../assets/sti-transportation.png'

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

        <a target='_blank' href='https://topskill.uz/'>
          <div className="project">
            <div className="body">
            <img src={topskill} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Topskill online education platform</h3>
              <p>I created this site and admin dashboard for Topskill</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Antd design</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Next js</li>
                <li>React query</li>
                <li>Web socket</li>
              </ul>
            </footer>
          </div>
        </a>

        <a target='_blank' href='https://qabul.perfectuniversity.uz'>
          <div className="project">
            <div className="body">
            <img src={qabul} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Admission platform for Tashkent Perfect University</h3>
              <p>I created this site and admin dashboard for Tashkent Perfect University</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Antd design</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>React query</li>
              </ul>
            </footer>
          </div>
        </a>
          
        <a target='_blank' href='https://eutas.uz/'>
          <div className="project">
            <div className="body">
            <img src={eutas} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Information system for management of educational processes University of Tashkent for Applied Sciences</h3>
              <p>I work as the main front-end developer on this project</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Antd design</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>React query</li>
              </ul>
            </footer>
          </div>
        </a>

        <a target='_blank' href='https://easttour.uz'>
          <div className="project">
            <div className="body">
            <img src={easttour} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>East Tour is a tourist service agency</h3>
                <p>I work as the main front-end developer on this project</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Antd design</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>React query</li>
              </ul>
            </footer>
          </div>
        </a>

        <a target='_blank' href='https://t.me/fileconverter_uz_bot'>
          <div className="project">
            <div className="body">
            <img src={converterbot} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>File fromat changer telegram bot</h3>
                <p>I created telegram bot with node.js</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </a>

          <a target='_blank' href='https://stitransportation.com/'>
            <div className="project">
              <div className="body">
                <img src={stiTransportation} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>STI Transportation</h3>
                <p>I created this site for an American logistics company</p>
              </div>
              <footer>
              <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                  <li>Antd design</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Next js</li>
                  <li>React query</li>
                  <li>Web socket</li>
                </ul>
              </footer>
            </div>
          </a>

          <a target='_blank' href='https://intalim.uz/'>
            <div className="project">
              <div className="body">
                <img src={intalim} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>InTalim</h3>
                <p>This system is a driving school system. This platform is a great convenience for school administration and for school students. I was involved in the preparation of the front end part of this platform</p>
              </div>
              <footer>
              <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                  <li>Antd design</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>React js</li>
                  <li>Redux</li>
                </ul>
              </footer>
            </div>
          </a>

          <a target='_blank' href='https://bianchiwater.uz'>
          <div className="project">
            <div className="body">
                <img src={bianchi} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Bianchi water</h3>
              <p>This site is for a water filter installation company.</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>JQuery</li>
              </ul>
            </footer>
          </div>
          </a>

          <a target='_blank' href='https://theprocess.uz/'>
          <div className="project">
            <div className="body">
              <img src={process} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Process uz</h3>
              <p>Process LLC is a worldwide operating trading company in nuts, pulses and dried fruit and a supplier to many well known buyers.</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React js</li>
              </ul>
            </footer>
          </div>
          </a>

          <a target='_blank' href='https://al-arabiya.uz'>
          <div className="project">
            <div className="body">
                <img src={arabiya} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Al arabiya</h3>
              <p>This site is for an education center</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>JQuery</li>
              </ul>
            </footer>
          </div>
          </a>
        
          <a target='_blank' href='https://info.tian.uz'>
          <div className="project">
            <div className="body">
              <img src={infotian} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Info tian uz</h3>
              <p>This site helps to find a house, apartment, office. I was involved in the frontend of this site</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
          </a>

          <a target='_blank' href='https://poytaxtyoshlari.uz'>
          <div className="project">
            <div className="body">
                <img src={yoshlar} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Yoshlar agentligi</h3>
              <p>This site is for "Yoshlar agentligi"</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Antd design</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React js</li>
              </ul>
            </footer>
          </div>
          </a>

          <a target='_blank' href='http://reception.tsul.uz/login'>
          <div className="project">
            <div className="body">
            <img src={reseption} style={{width:"100%", borderRadius:"8px"}} alt="" />
                <h3>Reseption TSUL</h3>
              <p>This system is designed for the reception of the Tashkent State University of Law . I was involved in the preparation of the front of this site.</p>
            </div>
            <footer>
            <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Antd design</li>
              </ul>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>React js</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
          </a>
      </div>
    </Container>
  );
}