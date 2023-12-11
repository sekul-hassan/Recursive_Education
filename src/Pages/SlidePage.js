import React from 'react';
import Footer from "../Components/Footer";
import {Col, Container, Row} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Slider from "../Components/Slider";

function SlidePage(props) {
    return (
        <Container fluid="true">
            <Row className="m-0 p-0">
                <Col className="m-0 p-0" md={2} lg={3} sm={1}>
                    <PracticeSideBar/>
                </Col>
                <Col md={10} lg={9} sm={11} className="slidePage m-0 p-0">
                    <Slider/>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    );
}

export default SlidePage;