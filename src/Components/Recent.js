import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactPlayer from "react-player";

function Recent(props) {
    return (
        <Fragment>
            <Container fluid="true" className="p-4 text-center">
                <Row>
                    <h3 className="globalTitle">Most recent activity</h3>
                    <Col md={6} sm={12} lg={6}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=YLQ6wfqdWDI&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYLQ6wfqdWDI&start_radio=1"
                        controls
                                     width="100%"
                                     height="100%"
                                     style={{borderRadius:"10px"}}
                        />
                    </Col>
                    <Col className="recentRight" md={6} sm={12} lg={6}>
                       <h4 className="globalTitle">How to Make a Carousel</h4>
                        <h5 className="globalSubTitle">Using HTML CSS & JavaScript</h5>

                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Recent;