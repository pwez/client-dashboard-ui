import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const NavigationBar: React.FC = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Client Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/organizations">Organizations</Nav.Link>
                    <Nav.Link href="/managers">Managers</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
