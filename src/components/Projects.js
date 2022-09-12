import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";
import projImg7 from "../assets/img/project7.png";
import projImg8 from "../assets/img/project8.png";
import projImg9 from "../assets/img/project9.png";
import TrackVisibility from 'react-on-screen';





export const Projects = () => {

    const projects = [
        {
            title: "The London Institute Of Social Studies",
            description: "Design & Development",
            imgUrl: projImg1,
            url: "https://hr.thelondoninstitute.org.uk/"
            
        },
        {
            title: "Bicamps",
            description: "Design & Development",
            imgUrl: projImg2,
            url: "https://www.bicamps.com/"
        },
        {
            title: "Furniture Home",  
            description: "Design & Development",
            imgUrl: projImg3,
            url: "https://tokgoz-home.netlify.app/"
        },
        {
            title: "Travel Agency",
            description: "Design & Development",
            imgUrl: projImg4,
            url: "https://tokgoz-travel-agency.netlify.app/"
        },
        {
            title: "Restaurant Menu",
            description: "Design & Development",
            imgUrl: projImg5,
            url:"https://korhantokgoz.github.io/Tokgoz-Restaurant-Menu-Project/"
        },
        {
            title: "Simple Calculator",
            description: "Design & Development",
            imgUrl: projImg6,
            url:"https://korhantokgoz.github.io/Simple-Calculator-JS-HTML-CSS-Project/"
        },
        {
            title: "Accardion Project",
            description: "Design & Development",
            imgUrl: projImg7,
            url:"https://korhantokgoz.github.io/Accordion-Project/"
        },
        {
            title: "Birthday Reminder",
            description: "Design & Development",
            imgUrl: projImg8,
            url:"https://korhantokgoz.github.io/Birthday-Reminder-Project/"
        },
        {
          title: "Stripe Submenus",
          description: "Design & Development",
          imgUrl: projImg9,
          url:"https://korhantokgoz.github.io/React-Stripe-Submenus-Project/"
      },
    ];

    return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Table</Nav.Link>
                        </Nav.Item>
                        
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
    }