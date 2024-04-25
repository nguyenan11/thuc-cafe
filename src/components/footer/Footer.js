import React from 'react';
import './Footer.css';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Nav className="justify-content-center Footer">
        <Nav.Item>
          <Nav.Link href="https://www.instagram.com/trasua11seattle/"><i class="fa-brands fa-square-instagram fa-beat-fade fa-xl"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin fa-fade fa-xl"></i></Nav.Link>
        </Nav.Item>
      </Nav>
  );
}

export default Footer;