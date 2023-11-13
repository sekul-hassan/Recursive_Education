import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function HomeTopBar(props) {
    return (
        <Fragment>
            <Container fluid="true" className="homeTopBackground">
                <Row>
                    <Col>
                        <div className="homeTopBackgroundOverlay">
                            <div className="topBarContent">
                                <h4>hii there have a slider</h4>
                                <h4>Slider is boom boom</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default HomeTopBar;