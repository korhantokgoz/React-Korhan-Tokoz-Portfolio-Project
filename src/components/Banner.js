import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";



export const Banner = () => {

    const [loopNum, setLoopNum ] = useState(0);
    const  [ isDeleting, setIsDeleting ] = useState(false);
    const toRotate = [ "web Developer", "Web Designer ", "UI/UX Designer" ];
    const [ text, setText ] = useState('');
    const [ delta,setDelta ] = useState( 300 - Math.random() * 100);
    const period = 2000;


    useEffect(() => {

        let ticker = setInterval(() => { 

            ticker();


        }, delta)
       

        return () => { clearInterval(ticker)};

    }, [text])

const tick = ()  => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0,  text.length);

    setText(updatedText);

    if (!isDeleting) {
        setDelta(prevDelta => prevDelta/2 )
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);

    } else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1 );
        setDelta(500);
    }
}

    return(
        <section className="banner" id="home">
         <Container>
             <Row className="align-items-center">
                 <Col xs={12} md={6} xl={7} >
                     <span className="tagline">Welcome to my Portfolio</span>
                     <h1>{`Hi I'm Full Stack Developer`}<span className="wrap">{text}</span></h1>
                     <p>I have JavaScript, ReactJS (Redux), PHP,  NodeJS, HTML, CSS, MongoDB, MySQL, Agile/Scrum/Kanban Method skills. I am a supportive and enthusiastic team player, committed to streamlining processes towards clean code principles and solving project problems efficiently.</p>
                         <button onClick={() => console.log('connect')}>Let's Connect</button>
                 </Col>
                 <Col xs={12} md={6} xl={5}>
                     <img src={headerImg} alt="Header Img" />
                 </Col>
             </Row>
         </Container>
        </section>
    )
}

