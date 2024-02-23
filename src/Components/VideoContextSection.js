import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactPlayer from "react-player";

function VideoContextSection({title,description,videoLink}) {
    return (
        <Container fluid="ture">
            <Row className="mx-0 mt-3">
                <Col md={6} sm={12} lg={6} className="px-0">
                    <ReactPlayer url={videoLink} controls width="100%" height="100%" style={{borderRadius:"10px"}}/>
                </Col>
                <Col className="px-0" md={6} sm={12} lg={6}>
                    <div className="px-3">
                        <h4 className="globalTitle">{title}</h4>
                        <h5 className="globalSubTitle">{description}</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default VideoContextSection;
