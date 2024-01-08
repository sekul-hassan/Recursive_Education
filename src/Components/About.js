import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import sekul from "../Assets/Images/sekul2.JPG";
import shohidullah from "../Assets/Images/shohidulla1.JPG";
import sueab from "../Assets/Images/sueab1.JPG";
import moto from "../Assets/Images/moto1.JPG";
import sk from "../Assets/Images/sk1.JPG";
import rana from "../Assets/Images/rana1.JPG";
import shamim from "../Assets/Images/shamem1.JPG";
function About(props) {
    return (
        <Container fluid="true" className="p-2 text-center">
            <Row className="mx-0">
               <Col className="aboutCard" lg={4} md={6} sm={12}>
                  <Card>
                      <Card.Body className="p-0">
                          <img className="aboutImg" src={sekul} alt=""/>
                          <Card.Title> <h4 className="title text-dark"><strong>Sekul Hassan</strong></h4></Card.Title>
                          <Card.Text>
                              <h4 className="globalDescription">CSE(JU) CEO of <strong><a href="https://reursiveeducation.com"> Recursive Education</a></strong></h4>
                              <h4 className="globalDescription">Hi i am <strong className="globalSubTitles">sekul hassan </strong>expert on software development</h4>
                          </Card.Text>
                      </Card.Body>
                  </Card>
               </Col>

                <Col className="aboutCard" lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Body className="p-0">
                            <img className="aboutImg" src={shohidullah} alt=""/>
                            <Card.Title> <h4 className="title text-dark"><strong>Sekul Hassan</strong></h4></Card.Title>
                            <Card.Text className="text-center mt-1">

                                <h4 className="globalDescription">CSE(JU) CEO of <strong><a href="https://reursiveeducation.com"> Recursive Education</a></strong></h4>
                                <h4 className="globalDescription">Hi i am <strong className="globalSubTitles">sekul hassan </strong>expert on software development</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="aboutCard" lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Body className="p-0">
                            <img className="aboutImg" src={sueab} alt=""/>
                            <Card.Title> <h4 className="title text-dark"><strong>Sekul Hassan</strong></h4></Card.Title>
                            <Card.Text className="text-center mt-1">

                                <h4 className="globalDescription">CSE(JU) CEO of <strong><a href="https://reursiveeducation.com"> Recursive Education</a></strong></h4>
                                <h4 className="globalDescription">Hi i am <strong className="globalSubTitles">sekul hassan </strong>expert on software development</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="aboutCard" lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Body className="p-0">
                            <img className="aboutImg" src={sk} alt=""/>
                            <Card.Title> <h4 className="title text-dark"><strong>Sekul Hassan</strong></h4></Card.Title>
                            <Card.Text className="text-center mt-1">

                                <h4 className="globalDescription">CSE(JU) CEO of <strong><a href="https://reursiveeducation.com"> Recursive Education</a></strong></h4>
                                <h4 className="globalDescription">Hi i am <strong className="globalSubTitles">sekul hassan </strong>expert on software development</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="aboutCard" lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Body className="p-0">
                            <img className="aboutImg" src={moto} alt=""/>
                            <Card.Title> <h4 className="title text-dark"><strong>Sekul Hassan</strong></h4></Card.Title>
                            <Card.Text className="text-center mt-1">

                                <h4 className="globalDescription">CSE(JU) CEO of <strong><a href="https://reursiveeducation.com"> Recursive Education</a></strong></h4>
                                <h4 className="globalDescription">Hi i am <strong className="globalSubTitles">sekul hassan </strong>expert on software development</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="aboutCard" lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Body className="p-0">
                            <img className="aboutImg" src={shamim} alt=""/>
                            <Card.Title> <h4 className="title text-dark"><strong>Sekul Hassan</strong></h4></Card.Title>
                            <Card.Text className="text-center mt-1">

                                <h4 className="globalDescription">CSE(JU) CEO of <strong><a href="https://reursiveeducation.com"> Recursive Education</a></strong></h4>
                                <h4 className="globalDescription">Hi i am <strong className="globalSubTitles">sekul hassan </strong>expert on software development</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="aboutCard" lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Body className="p-0">
                            <img className="aboutImg" src={rana} alt=""/>
                            <Card.Title> <h4 className="title text-dark"><strong>Sekul Hassan</strong></h4></Card.Title>
                            <Card.Text className="text-center mt-1">

                                <h4 className="globalDescription">CSE(JU) CEO of <strong><a href="https://reursiveeducation.com"> Recursive Education</a></strong></h4>
                                <h4 className="globalDescription">Hi i am <strong className="globalSubTitles">sekul hassan </strong>expert on software development</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
