import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Slider from "../Components/Slider";
import SliderCode from "../JS/SliderCode";

function PracticePage(props) {
    return (
        <Container fluid="true">
            <Row className="m-0 p-0">
                <Col md={1} lg={1} sm={1} className="m-0 p-0">
                    <PracticeSideBar/>
                </Col>
                <Col md={11} lg={11} sm={11} className="m-0 p-0">
                    <Slider/>
                    <SliderCode/>
                </Col>
            </Row>
        </Container>
    );
}

export default PracticePage;