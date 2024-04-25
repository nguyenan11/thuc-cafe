import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/thuc-cafe" className="navbar-brand">Thức Cafe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/thuc-cafe/#/pre-order" className="navlink">Pre Order</Nav.Link>
            <Nav.Link href="/thuc-cafe/#/about-us" className="navlink">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;