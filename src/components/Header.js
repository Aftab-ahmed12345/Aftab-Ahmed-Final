import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Header() {
  return (
    <div> 
      <Navbar expand="lg" className="box">
        <Container style={{ fontStyle: "Time New Roman", marginTop: "5rem" }}>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none', color: "black" }}>
              <h1 style={{ paddingLeft: "10rem" }}>Grace</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ paddingLeft: "20rem", fontSize: "15px" }}>
              <Nav.Link className='ps-2'>
                <Link to={'/'} style={{ textDecoration: 'none', color: "blue" }}>
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link className='ps-2'>
                <Link to={'/about'} style={{ textDecoration: 'none', color: "black" }}>
                  ABOUT
                </Link>
              </Nav.Link>
              <Nav.Link className='ps-2'>
                <Link to={'/contact'} style={{ textDecoration: 'none', color: "black" }}>
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link className='ps-2'>
                <i className="fas fa-user" style={{ color: "black", fontSize: "20px" }}></i>
              </Nav.Link>
              <Nav.Link className='ps-2'>
                <i className="fas fa-shopping-bag" style={{ color: "black", fontSize: "20px" }}></i>
              </Nav.Link>
              <Nav.Link className='ps-2'>
                <i className="fas fa-ellipsis-v" style={{ color: "black", fontSize: "20px" }}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
