import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const Header = () => {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "pending");


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">IMG PIZZA -- Pizzeria Mamma mia ! </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
        {/* <NavLink className={ setActiveClass } to="/">Home</NavLink> */}
        <NavLink className={ setActiveClass } to="/personajes">Carrito</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header