import React, {useContext} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import ShuttleContext from "../Context/ShuttleContext";

function ShuttleSideNav(props) {

    const {projectName,projectLinks} = useContext(ShuttleContext)
    return (
        <Navbar expand={true} className="practiceList">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="show">
                <Nav className="flex-column sidebar">
                    <h4 className="practiceTitle mt-2">{projectName}</h4>
                    {
                        projectLinks && projectLinks.map((link)=>(
                            <Link to={link.link}>{link.value}</Link>
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ShuttleSideNav;

