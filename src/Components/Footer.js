import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube, faInstagram,faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {
    faBriefcase,
    faCode,
    faEnvelope,
    faHome,
    faInfoCircle,
    faLock, faMoneyBill, faPhone, faScroll,
    faTools, faUser
} from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
    return (
        <Container fluid="true" className="p-4">
            <Row>
               <Col className="justify-content-start" lg={4} md={4} sm={12}>
                   <h4 className="globalTitle">Contact</h4>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faYoutube}/> YouTube</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faInstagram}/> Instagram</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faEnvelope}/> E-mail</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faGithub}/> Github</a><br/>
               </Col>
               <Col className="justify-content-start" lg={4} md={4} sm={12}>
                   <h4 className="globalTitle">Important</h4>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faCode}/> Practice</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faBriefcase}/> Projects</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faHome}/> Home</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faInfoCircle}/> About</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faTools}/> Service</a><br/>
               </Col>
               <Col className="justify-content-start" lg={4} md={4} sm={12}>
                   <h4 className="globalTitle">Pages</h4>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faLock}/> Privacy Policy</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faScroll}/> Terms & Condition</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faMoneyBill}/> Refund Policy</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faUser}/> Community Guidelines</a><br/>
                   <a className="contactLink" href=""><FontAwesomeIcon icon={faPhone}/> Contact</a><br/>
               </Col>
            </Row>
        </Container>
    );
}

export default Footer;