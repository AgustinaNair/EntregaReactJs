import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {useCategory} from "../../hooks/useCategory"

const NavBar = () => {

    const {category} = useCategory()
    return(
      <div>
        <Navbar data-bs-theme="dark"className="navBarConteiner">
          <Container>
            <Link to ='/' className='colorBlanco'> Garbarino </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Categorias" id="basic-nav-dropdown" className='colorBlanco'>
                  {category.map((item, index) => {
                      return(
                        <NavDropdown.Item key ={index}>
                          <Link to={`/category/${item}`}>{item}</Link>
                        </NavDropdown.Item>
                      )
                    })}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <CartWidget/>
          </Container>
        </Navbar>
        <div className='textItem'>GARBARINO</div>
      </div>
        
    )
}
export default NavBar;