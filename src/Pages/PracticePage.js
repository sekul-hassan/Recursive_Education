import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";

function PracticePage(props) {
    return (
        <Container fluid="true">
            <Row className="m-0">
                <Col md={2} lg={2} sm={2}>
                    <PracticeSideBar/>
                </Col>
                <Col className="practiceRightDiv" md={10} lg={10} sm={10}>
                    <Slider/>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    );
}

export default PracticePage;