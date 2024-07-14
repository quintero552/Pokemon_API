import { NavLink } from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';

const Menu = () => {
    const ActivadoMenu = ({isActive}) => isActive ? 'menu active' : 'menu'
    
  return (
    <Navbar expand="lg" className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" ><img className="imgPoke" src="../img/pokemon.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={ActivadoMenu}>Home</NavLink>
            <NavLink to="/pokemones" className={ActivadoMenu}>Pokemones</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu