import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Slider from "../Components/Slider";

function PracticePage(props) {
    return (
        <Container fluid="true">
            <Row className="m-0 p-0">
                <Col md={2} lg={3} sm={1} className="m-0 p-0">
                    <PracticeSideBar/>
                </Col>
                <Col md={10} lg={9} sm={11} className="slidePage">
                    <Slider/>
                </Col>
            </Row>
        </Container>
    );
}

export default PracticePage;