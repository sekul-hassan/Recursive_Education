import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {} from "web-vitals";

function ShuttleSideNav({projectName,classes,onSelectCurrentClass}) {


    return (
        <Navbar expand={true} className="practiceList">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="show">
                <Nav className="flex-column sidebar">
                    <h4 className="practiceTitle mt-2">{projectName}</h4>
                    {
                        classes && classes.map((link)=>(
                            <Link onClick={()=>onSelectCurrentClass(link)} to={link.link}>{link.value}</Link>
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ShuttleSideNav;

