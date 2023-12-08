import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";

function PracticePage(props) {
    return (
        <Container fluid="true">
            <Row className="m-0">
                <Col md={2} lg={3} sm={1}>
                    <PracticeSideBar/>
                </Col>
                <Col className="practiceRightDiv" md={10} lg={9} sm={11}>

                </Col>
            </Row>
        </Container>
    );
}

export default PracticePage;