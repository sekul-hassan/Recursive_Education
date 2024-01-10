import React from 'react';
import {Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube, faInstagram,faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {
    faBriefcase,
    faCode,
    faEnvelope,
    faHome,
    faInfoCircle,
    faLock, faMoneyBill, faScroll,
    faTools, faUser
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Footer({pad}) {

    return (
        <Container fluid="true" className={`p-${pad}`}>
            <div className="footer">
                <div className="justify-content-start m-0 p-0" lg={4} md={4} sm={4}>
                    <h4 className="globalSubTitle">Contact</h4>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faYoutube}/> YouTube</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faInstagram}/> Instagram</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faEnvelope}/> E-mail</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faGithub}/> Github</a><br/>
                </div>
                <div className="justify-content-start m-0 p-0" lg={4} md={4} sm={4}>
                    <h4 className="globalSubTitle">Important</h4>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faCode}/> Practice</a><br/>
                    <a className="contactLink" href="#aa"><FontAwesomeIcon icon={faBriefcase}/> Projects</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faHome}/> Home</a><br/>
                    <Link to="/about" className="contactLink" href="#a"><FontAwesomeIcon icon={faInfoCircle}/> About</Link><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faTools}/> Service</a><br/>
                </div>
                <div className="justify-content-start m-0 p-0" lg={4} md={4} sm={4}>
                    <h4 className="globalSubTitle">Pages</h4>
                    <Link to="/privacy" className="contactLink" href="#a"><FontAwesomeIcon icon={faLock}/> Privacy Policy</Link><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faScroll}/> Terms & Condition</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faMoneyBill}/> Refund Policy</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faUser}/> Community Guidelines</a><br/>
                </div>
            </div>
        </Container>
    );
}

export default Footer;