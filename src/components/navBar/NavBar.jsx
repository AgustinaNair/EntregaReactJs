import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return(
        <Navbar data-bs-theme="dark"className="navBarConteiner">
      <Container>
        <Navbar.Brand href="#home" className='colorBlanco'> <img className='logotipo' src="https://www.monsterenergy.com/img/home/monster-logo.png" alt="logotipo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='colorBlanco'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='colorBlanco'>Nosotros</Nav.Link>
            <NavDropdown title="Tiendas" id="basic-nav-dropdown" className='colorBlanco'>
              <NavDropdown.Item href="#action/3.1">Palermo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Belgrano</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Caballito</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Recoletas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    )
}
export default NavBar;