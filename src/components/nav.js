
import Container from 'react-bootstrap/Container';
import "../styles/navbar.css"
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function NavbarComponent()  {   
    return(
        <div className='navbar-parent-container'>
            <Row className="navbar">
                <Col xxl={3}>@thetravellingprogrammer</Col>
                <Col xxl={3}></Col>
                <Col className='nav-link' xxl={3}>
                    <span className='nav-link-text'>1:1 MENTORING</span>
                </Col>
                <Col className='nav-link' xxl={3}>
                    <span className='nav-link-text'>COLLABORATE</span>
                </Col>
            </Row>
        </div>
        
    )
}

export default NavbarComponent;