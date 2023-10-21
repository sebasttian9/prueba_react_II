import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { CarritoContext } from '../Context/CarritoContext';
import './Header.css'
import img from '../../assets/pizzaFondo.jpg'

const Header = () => {

    const {pizzas,data,setData,totalCarro}  = useContext(CarritoContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "pending");


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand > <NavLink to="/" className='precioTotal'>   <img src={img} width={'60px'} alt="" srcset="" />  Pizzeria Mamma mia ! </NavLink></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
        {/* <NavLink className={ setActiveClass } to="/">Home</NavLink> */}
        <NavLink className="precioTotal" to="/carrito">$ {totalCarro()}</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header