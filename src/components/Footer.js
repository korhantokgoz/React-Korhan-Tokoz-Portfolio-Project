import { Col, Row,Container } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import navIcon4 from "../assets/img/nav-icon4.svg"



export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/korhan-tokg%C3%B6z/"><img src={ navIcon1 } /></a>
                            <a href="https://github.com/korhantokgoz"><img src={ navIcon2 } /></a>
                            <a href="https://www.instagram.com/krhn.tkgz/"><img src={ navIcon3 } /></a>
                            <a href="https://twitter.com/KorhanTokgoz"><img src={ navIcon4 } /></a>           
                        </div>
                        <p>CopyRight 2022, All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}