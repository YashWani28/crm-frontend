import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link,Navigate,NavLink,useNavigate } from 'react-router-dom';
import './Header.css'; // Import your custom CSS file for styling
import { logoutUser } from '../../api/userApi';
import { isTokenExpired } from '../../utils/decodeToken';



export const Header = () => {
  const navigate=useNavigate();
  const logout = async()=>{
    alert("You have been logged out.");
    if(!isTokenExpired(sessionStorage.getItem("CRM_accessJWT"))){
      await logoutUser();

    }
    sessionStorage.removeItem('CRM_accessJWT');
    localStorage.removeItem('CRM_refreshJWT');
    navigate('/login');
  }
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
              <NavLink  className="nav-link">
                <Button variant="outline-danger" onClick={logout}>Logout</Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

