import React from 'react';
import {Container} from "react-bootstrap";
import "../Assets/CSS/SideNav.css";
import {closeNav, openNav} from "../JS/SideNav";

function SideNavbar(props) {
    return (
        <Container fluid="true">
            <div className="sideNav" id="sideNav">
                <button className="closeBtn" onClick={()=>closeNav()}>&times;</button>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </div>
            <div id="contentArea">
                <h3 className="title text-dark">Side Nav Example</h3>
                <button className="openBtn mb-3" onClick={()=>openNav()}>&#9776; Open</button><br/>
                <strong className="globalDescription">
                    Click on the element below to open the side navigation menu,
                    and push this content to the right. Notice that we add a black
                    see-through background-color to body when the sidenav is opened
                </strong>
            </div>
        </Container>
    );
}

export default SideNavbar;