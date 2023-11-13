import React, {Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function TopMenu(props) {
    return (
        <Fragment>
            <Container fluid="true" className="navBar">
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">SEKUL HASSAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav className="nav">
                            <Nav.Link className="navLink" href="#deets">Home</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">About</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">Service</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Fragment>
    );
}

export default TopMenu;
