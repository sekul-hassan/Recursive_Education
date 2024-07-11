import React from 'react';
import ShowMoreText from "react-show-more-text";
import {Col, Container, Row} from "react-bootstrap";
import ReactPlayer from "react-player";

function VideoContextSection({title, description, videoLink, gitHubLink}) {
    return (
        <Container fluid="true" className="mbNeg">
            <Row className="mx-0">
                <Col md={6} sm={12} lg={6} className="px-0 mt-3 mxHeight">
                    <ReactPlayer
                        url={videoLink}
                        controls
                        width="100%"
                        height="100%"
                        style={{borderRadius: "10px"}}
                    />
                </Col>
                <Col className="px-0 mt-3" md={6} sm={12} lg={6}>
                    <div className="px-md-3 px-lg-3 px-sm-0">
                        <strong><h4 className="globalSubTitle text-dark">{title}</h4></strong>
                        <strong><h5 className="globalDescription">
                            <ShowMoreText
                                lines={6}
                                more="Show more"
                                less="Show less"
                                className="content-css"
                                anchorClass="showMore"
                                expanded={false}
                                width={null}
                                truncatedEndingComponent={"... "}
                            >
                                {description}
                            </ShowMoreText>
                        </h5></strong>
                    </div>
                </Col>
            </Row>
            <Row className="mx-0 overflow-x-hidden">
                <h4 className="globalDescription overflow-x-hidden px-0">
                    GitHub:
                    <a href={gitHubLink} target="_blank" className="text-info text-decoration-none" rel="noreferrer">
                        {gitHubLink}
                    </a>
                </h4>
                <h4 className="globalDescription overflow-x-hidden px-0">
                    YouTube:
                    <a href="https://www.youtube.com/@RecursiveEducation-Friends" target="_blank" className="text-info text-decoration-none" rel="noreferrer">
                        https://www.youtube.com/@RecursiveEducation-Friends
                    </a>
                </h4>
                <h4 className="globalDescription overflow-x-hidden px-0">
                    Facebook:
                    <a href="https://www.facebook.com/groups/453076464106268" target="_blank" className="text-info text-decoration-none" rel="noreferrer">
                        https://www.facebook.com/groups/453076464106268
                    </a>
                </h4>
            </Row>
        </Container>
    );
}

export default VideoContextSection;
