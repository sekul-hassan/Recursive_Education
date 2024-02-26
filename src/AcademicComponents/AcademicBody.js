import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AcademicCard from "./AcademicCard";
import academicImg from "../Assets/Images/Academic/nctb_six.jpg";

function AcademicBody(props) {

    const AcademicCardDescription = [
        {image:academicImg ,route:"/six"},
        {image:academicImg ,route:"/six"},
        {image:academicImg ,route:"/six"},
        {image:academicImg ,route:"/six"},
        {image:academicImg ,route:"/six"},
        {image:academicImg ,route:"/six"},
    ]

    return (
        <Container fluid="ture" className="mt_negative_3">
            <Row className="mx-0">
                {
                    AcademicCardDescription && AcademicCardDescription.map((des)=>(
                        <Col md={4} lg={4} sm={12}>
                            <AcademicCard description={des}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default AcademicBody;

