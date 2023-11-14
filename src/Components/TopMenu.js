import React, {Fragment, useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function TopMenu(props) {

    const [login,setLogin] = useState(false);

    const loginBtn = ()=>{
        setLogin(!login);
    }
    return (
        <Fragment>
            <Container fluid="true">
                <Navbar className="navBar" fixed = "top" collapseOnSelect expand="sm">
                    <Navbar.Brand href="#home">SEKUL HASSAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav className="nav">
                            <Nav.Link className="navLink" href="#deets">Home</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">About</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">Service</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">Projects</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">Practice</Nav.Link>
                            {
                                !login ? <Nav.Link className="navLink" href="#memes" onClick={loginBtn}>Login</Nav.Link>:<Nav.Link className="navLink" href="#memes" onClick={loginBtn}>Logout</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Fragment>
    );
}

export default TopMenu;
