import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function ShuttleSideNav(props) {
    return (
        <Navbar expand={true} className="practiceList">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="show">
                <Nav className="flex-column sidebar">
                    <h4 className="practiceTitle mt-2">Shuttle</h4>
                    <Link to="/shuttle-nav">Project setup</Link>
                    <Link to="/shuttle-nav">Nav</Link>
                    <Link to="/tabs">Home-top</Link>
                    <Link to="/accordion">Footer</Link>
                    <Link to="/sideNav">Register</Link>
                    <Link to="/slideGallery">Login-modal</Link>
                    <Link to="/slideGallery">Profile</Link>
                    <Link to="/slideGallery">Routing</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ShuttleSideNav;

