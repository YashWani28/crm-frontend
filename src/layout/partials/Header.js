import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import './Header.css'; // Import your custom CSS file for styling

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info">
        <Container>
          <Navbar.Brand href="#home">CRM-Support</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink> 
              <NavLink to="/ticketlists" className="nav-link">Tickets</NavLink>
            </Nav>
            <Nav>
              <NavLink to="/login" className="nav-link">
                <Button variant="outline-danger">Logout</Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

