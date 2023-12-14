import React from 'react';
import "../Assets/CSS/SliderCode.css";
import {Col, Container, Row} from "react-bootstrap";

function SliderCode(props) {
    return (
        <Container>
            <Row className="m-0 p-0 sliderCode">
               <Col sm={12} md={4} lg={4}>
                   <h4>HTML CODE</h4>
                   <h6>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, pariatur repellendus! Aliquid architecto, corporis doloremque ipsa magnam nisi soluta. Ab commodi corporis cupiditate ea earum id nam, neque qui repellat.
                   </h6>
               </Col>
               <Col sm={12} md={4} lg={4}>

               </Col>
               <Col sm={12} md={4} lg={4}>

               </Col>
            </Row>
        </Container>
    );
}

export default SliderCode;