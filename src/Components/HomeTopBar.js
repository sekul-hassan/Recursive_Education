import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";

function HomeTopBar(props) {
    return (
        <Fragment>
            <Container fluid="true" className="homeTopBackground">
                <Row>
                    <Col>
                        <div className="homeTopBackgroundOverlay">
                            <div className="topBarContent">
                              <HomeCarousel/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default HomeTopBar;