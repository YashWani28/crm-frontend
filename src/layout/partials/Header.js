import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

export const Header = () => {
    return (
        <div >

            <Navbar collapseOnSelect expand="lg"  bg="info">
                <Container>
                    <Navbar.Brand href="#home">Support</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Dashboard</Nav.Link>
                            <Nav.Link href="#pricing">Tickets</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="outline-danger">Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
