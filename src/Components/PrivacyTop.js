import React from 'react';
import {Container} from "react-bootstrap";

function PrivacyTop(props) {
    return (
        <Container fluid="true" className="privacyTop">
            <div className="privacyTopOverlay">
                <div className="PrivacyTopBarContent">
                    <h4 className="globalTitle text-white">Privacy Policy of <a className="globalTitle text-white text-decoration-none" href="https://www.recursiveeducation.com">Recursive Education</a></h4>
                </div>
            </div>
        </Container>
    );
}

export default PrivacyTop;
