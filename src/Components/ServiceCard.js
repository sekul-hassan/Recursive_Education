import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

function ServiceCard({serviceList}) {
    return (
        <Container fluid="true" className="text-center">
            <Row className="mx-0">
                {
                    serviceList && serviceList.map((service)=>(
                        <Col md={6} lg={4} sm={12} className="mt-3 mb-2">
                            <Card className="p-5 pointer-event">
                                <Card.Img src={service.logo}/>
                                <Card.Body>
                                    <h4 className="globalDescription">{service.description} <strong>{service.from}</strong></h4>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default ServiceCard;
