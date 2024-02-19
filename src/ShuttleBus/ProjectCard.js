import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import project1 from "../Assets/Images/ProjectImg/need2.png"

function ProjectCard(props) {
    return (
        <Container fluid="true" className="mt-3">
            <Row className="mx-0">
                <Col md={4} lg={3} sm={12}>
                    <Card className="projectBody">
                        <img className="projectImg" src={project1} alt={project1}/>
                       <div className="d-flex my-2">
                           <Button className="btn-outline-info">Preview</Button>
                           <Button className="btn-outline-info mx-4">Live Code</Button>
                       </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectCard;

