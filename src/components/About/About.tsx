import { useState } from "react";
import { Container } from "./styles";
import utasLogo from '../../assets/companies/utas-logo.png'
import aifLogo from '../../assets/companies/aif_agency_logo.jpg'
import proconnectLogo from '../../assets/companies/proconnect_digitla_agency_logo.jpg'

export function About() {

  const [openCollapseIds, setopenCollapseIds] = useState<{[id: number]: boolean}>({1: true, 2: true, 3: true, 4: true})

  const data = [
    {
      id: 1,
      img: utasLogo,
      position: "Front-end developer",
      company: "University of Tashkent for Applied Sciences · Full-time",
      duration: "Jan 2024 - Present · 5 mos",
      location: "Tashkent, Uzbekistan",
      type: "On-site",
      task: "Project overview: The project includes the internal system of the University and monitors the student learning process. It also includes all student features such as attendance, evaluation, documents, class schedules. The project has dynamic permissions on dynamic roles and provides complete control over learning and workflow for the university",
      technologies: "React js, Javascript, Typescript, Html, Sass, Editorjs, Redux Tookit, React-query, Tailwind css, Trello",
      contents: [
        "- Fixed major bugs related to design, functionality and performance, speeding up the project's transition to production.",
        "- Introduced a feature with CRUD operations seamlessly integrated with the backend using React Query",
        "- Worked closely with the backend team to make the API more stable, which makes integration with the frontend smoother.",
        "- Conducted thorough intelligence testing, reported issues and made suggestions for improvement.",
        "- Lead a team of 3 front end developers"
      ]
    },
    {
      id: 2,
      img: aifLogo,
      position: "Front-end developer",
      company: "AIF Agency · Full-time",
      duration: "Dec 2022 - Jan 2024 · 1 yr 2 mos",
      location: "Toshkent, Toshkent, Uzbekistan",
      type: "On-site",
      task: "Project: Platform for online learning center.",
      technologies: "React.js, Next.js, Javascript, Typescript, Html, Sass, Editorjs, Redux Tookit, React-query, Trello",
      contents: [
        "- Authored the project structure and linting configurations",
        "- Integrated rich text editing library",
        "- Proposed new features and actively participated in the project planning",
        "- Worked mainly with NextJS, and Redux Toolkit to develop re-usable",
        "- Integration of payment systems",
        "- Fixed bugs in the application",
        "- Adopted plugins and customized them to project needs",
        "- Lead a team of 3 front end developers",
      ]
    },
    {
      id: 3,
      img: proconnectLogo,
      position: "Front-end developer",
      company: "PROCONNECT Digital Agency llc. · Full-time",
      duration: "May 2022 - Dec 2022 · 8 mos",
      location: "Toshkent, Toshkent, Uzbekistan",
      type: "On-site",
      task: "Project: E-commerce, finding buildings for rent and projects for factory warehouses.",
      technologies: "HTML, CSS, Bootstrap, javaScript, React js",
      contents: [
        "- As a Front End Developer, was responsible for creating UI elements for web applications from scratch",
        "- Analyzed defects using bug Inspection Tools",
        "- Fix existing errors and add new functions from old codes written in HTML CSS JQuery.",
      ]
    },
    {
      id: 4,
      img: undefined,
      position: "Front-end developer",
      company: "Next developers · Full-time",
      duration: "Mar 2021 - Apr 2022 · 1 yr 2 mos",
      location: "Toshkent, Toshkent, Uzbekistan",
      type: "On-site",
      task: "Project: The educational platform application allows you to study online, take a test, and get a driver's license by passing an exam.",
      technologies: "React js, Javascript, Git, Trello, Rest API, CSS, SCSS",
      contents: [
        "- As a Front End Developer, was responsible for creating UI elements for a web application from scratch",
        "- Worked on assessment, attendance, feedback and similar opportunities between mentors and students during training.",
        "- Analyzed defects using error checking tools",
        "- Performed manual functional testing",
        "- Conducted UI tests",
        "- Peer code reviewed",
        "- Participated in discussions about application functionality"
      ]
    }
  ]

  const seeMore = (id: number) => {
    setopenCollapseIds(prev => ({...prev, [id]: !prev[id]}))
  }

  return (
    <Container id="experience">
      <div className="about-text">
        <h2>My experience</h2>
        {
          data?.map((item, index) => (
            <div key={index} style={{border: "1px solid #fff", borderRadius: 10, padding: 20, marginBottom: 15}}>
              <div style={{display: "flex", alignItems: "center", marginBottom: 10, gap: 10}}>

                {item.img ? <img style={{width: 50, background: "#fff"}} src={item.img} alt={item?.img} /> : null}
                <p>{item?.position}</p>
              </div>
              <p style={{fontWeight: 400, fontSize: "14px", opacity: 0.8}}>{item.company}</p>
              <p style={{fontWeight: 400, fontSize: "14px", opacity: 0.8}}>{item.duration}</p>
              <p style={{fontWeight: 400, fontSize: "14px", opacity: 0.8}}>{item.location} · {item.type}</p>

              <div style={{display: openCollapseIds[item.id] ? "flex" : "none", justifyContent: "space-between", alignItems: "center"}}>
                <p style={{fontSize: "14px"}}>...</p>
                <p className="see-more-link" onClick={() => seeMore(item.id)} style={{fontSize: "14px", color: "#fff", cursor: "pointer"}}>... see more</p>
              </div>

              <div style={openCollapseIds[item.id] ? {display: "none"} : {display: "block"}}>
                <p style={{marginBottom:15, marginTop: 15, fontSize: "16px"}}>{item.task}</p>
                {
                  item?.contents?.map((con, i) => (
                    <p key={con} style={{fontSize: "16px"}}>{con}</p>
                  ))
                }
              </div>
              <p style={{marginTop: 15, fontSize: "16px"}}>Technologies: {item.technologies}</p>
            </div>
          ))
        }
      </div>
    </Container>
  )
}




// export function About() {
//   return (
//     <Container id="aboutme">
//       <div className="about-text">
//         <ScrollAnimation animateIn="fadeInLeft">
//           <h2>About me</h2>
//         </ScrollAnimation>
//         <ScrollAnimation animateIn="fadeInLeft" delay={100}>
//           <p style={{marginBottom:"30px"}}>Software engineer with a primary focus on web, and frontend development. I have been working with Javascript and its ecosystem - React js, Redux, Next js, and TypeScript for 3+ years.</p>
//           <p style={{marginBottom:"30px"}}>Besides frontend development, I possess good knowledge of algorithms and data structures. I am a curious, fast learner, an open-minded developer with a passion for working with a friendly team on challenging/interesting projects.</p>
//         </ScrollAnimation>

//       </div>
//       <div className="about-image">
//         <ScrollAnimation animateIn="fadeInRight" delay={100}>
//           <img style={{width:"70%"}} src={portfolioImage} alt="My image" />
//         </ScrollAnimation>
//       </div>
//     </Container>
//   )
// }

