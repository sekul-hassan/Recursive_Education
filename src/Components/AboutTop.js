import React from 'react';
import {Container} from "react-bootstrap";
function AboutTop(props) {
    return (
        <Container fluid="true" className="aboutTop">
            <div className="privacyTopOverlay">
               <div className="PrivacyTopBarContent">
                   <h4 className="title">Who We Are..?</h4>
               </div>
            </div>
        </Container>
    );
}

export default AboutTop;