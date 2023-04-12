import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/aboutMe.css"
import Gif from "../img/Frame2.gif"


function AboutMe()  {   
    return(
        <Container fluid className="AboutMe">
            <Row>
                <Col xl={12} xxl={6}>
                   <div className='about-me-subtext aboutme-quote'>“There is nothing better than sheer determination and the will to be 
                   consistent no matter what side the sun is facing”</div>
                   <div className='about-me-header'> I love to<br/>design softwares<br/><span className="yellow-markup">and write code.</span></div>
                   <div className='about-me-subtext about-me-code-review'>Hire me to review your code!</div>
                </Col>
                <Col xl={12} xxl={6}>
                    <Row>
                        <Col xxl={6} xl={12}>
                            <img src={Gif} className='about-me-gif'/>
                        </Col>
                        <Col className='about-me-brief' xxl={6} xl={12}>
                                <div className='about-me-brief-pos0'>Programmer @Microsoft</div>
                                <div className='about-me-brief-pos1'>Android and React Dev</div>
                                <div className='about-me-brief-pos2'>Supporting Women in Tech</div>
                                <div className='about-me-brief-pos3'>Maintains a Tech Blog</div>
                                <div className='about-me-brief-pos4'>Leisure Runner</div>
                                <div className='about-me-brief-pos5'>Bibliophile</div>
                                <div className='about-me-brief-pos6'>Passionate Traveler</div>
                                <div className='about-me-brief-pos7'>Critical Thinker</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
             
    )
}


export default AboutMe;