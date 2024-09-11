import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Learn(props) {
    return (
        <Container fluid="true" className=" svgContainer">
            <svg className="svgBlock1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#77B1D2"
                    fillOpacity="1"
                    d="M0,64L48,96C96,128,192,192,288,213.3C384,235,480,213,576,170.7C672,128,768,64,864,48C960,32,1056,64,1152,90.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <Row className="svgRow mt-3">
                <Col sm={12} md={12} lg={6} className="text-center ">
                    <Button as={Link} to={"/learn/Javascript"} variant="outline-success" className="w-75 mt-2 title">Learn Javascript</Button>
                    <Button as={Link} to={"/javascript"} variant="outline-success" className="w-75 mt-2 title">Practice DOM</Button>
                    <Button as={Link} to={"/learn/nodeJs"} variant="outline-success" className="w-75 mt-2 title">Learn nodeJS</Button>
                    <Button as={Link} to={"/project/Portfolio"} variant="outline-success" className="w-75 mt-2 title">Create Portfolio Project</Button>
                </Col>
                <Col sm={12} md={12} lg={6} className="text-center">
                    <Button as={Link} to={"/learn/cpp"} variant="outline-success" className="w-75 mt-2 title">Learn CPP</Button>
                    <Button as={Link} to={"/learn/cpp/cppDsa"} variant="outline-success" className="w-75 mt-2 title">Learn DSA</Button>
                    <Button as={Link} to={"/learn/dbms"} variant="outline-success" className="w-75 mt-2 title">Learn DBMS</Button>
                    <Button as={Link} to={"/learn/sequelize"} variant="outline-success" className="w-75 mt-2 title">Learn Sequelize</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Learn;
