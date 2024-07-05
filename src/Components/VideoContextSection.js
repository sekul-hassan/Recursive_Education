import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactPlayer from "react-player";

function VideoContextSection({title,description,videoLink,gitHubLink}) {
    return (
        <Container fluid="ture">
            <Row className="mx-0">
                <Col md={6} sm={12} lg={6} className="px-0  mt-3 mxHeight">
                    <ReactPlayer url={videoLink} controls width="100%" height="100%" maxHeight="400px" style={{borderRadius:"10px"}}/>
                    <h4 className="globalDescription">Git_Hub : <a href={gitHubLink} target="_blank" className="text-info text-decoration-none"
                           rel="noreferrer"> {gitHubLink}</a></h4>
                </Col>
                <Col className="px-0  mt-3" md={6} sm={12} lg={6}>
                    <div className="px-3">
                        <h4 className="globalTitle">{title}</h4>
                        <h5 className="globalDescription">{description}</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default VideoContextSection;
