import React from 'react';
import "../Assets/CSS/SliderCode.css";
import { Col, Container, Row } from "react-bootstrap";



function SliderCode({cssCode, htmlCode, jsCode}) {
    return (
        <Container fluid="true" className="mt-4">
            <Row className="m-0 p-0 sliderCode">
                <Col sm={12} md={4} lg={4} className="m-0 p-0">
                    <h4 className="globalSubTitle">HTML CODE</h4>
                    <h6 className="code globalDescription">
                        {htmlCode}
                    </h6>
                </Col>
                <Col sm={12} md={4} lg={4} className="m-0 p-0">
                    <h4 className="globalSubTitle">CSS CODE</h4>
                    <pre className="code borderXNone globalDescription">{cssCode}</pre>
                </Col>
                <Col sm={12} md={4} lg={4} className="m-0 p-0">
                    <h4 className="globalSubTitle">JS CODE</h4>
                    <h6 className="code globalDescription">
                        {jsCode}
                    </h6>
                </Col>
            </Row>
        </Container>
    );
}

export default SliderCode;
