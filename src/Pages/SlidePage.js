import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Slider from "../Components/Slider";
import SliderCode from "../JS/SliderCode";

function SlidePage(props) {
    return (
        <Container fluid="true">
            <Row className="m-0 p-0">
                <Col className="m-0 p-0" md={2} lg={3} sm={1}>
                    <PracticeSideBar/>
                </Col>
                <Col md={10} lg={9} sm={11} className="">
                    <Slider/>
                    <SliderCode/>
                </Col>
            </Row>
        </Container>
    );
}

export default SlidePage;