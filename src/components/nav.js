
import Container from 'react-bootstrap/Container';
import "../styles/navbar.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavbarComponent()  {   
    return(
        <Navbar className="navbar" fixed="top" collapseOnSelect expand="lg" bg="none" variant="dark">
        <Container fluid>
            <Navbar.Brand className="navHeader" href="#home">PORTFOLIO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">  </Nav>
                <Nav>
                  <Nav.Link className="navLinks" href="">Mentorship</Nav.Link>
                  <Nav.Link className="navLinks" href="">Partnership</Nav.Link>
                  <Nav.Link className="navLinks" href="">Blog</Nav.Link>
                  <Nav.Link className="navLinks" href="">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarComponent;