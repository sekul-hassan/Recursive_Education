import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

function ProjectSideNav({projectName,classes,onSelectCurrentClass}) {


    return (
        <Navbar expand={true} className="practiceList">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="show">
                <Nav className="flex-column sidebar">
                    <h4 className="practiceTitle mt-2">{projectName}</h4>
                    {
                        classes && classes.map((link)=>(
                            <Nav.Link onClick={()=>onSelectCurrentClass(link)}>{link.value}</Nav.Link>
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ProjectSideNav;

