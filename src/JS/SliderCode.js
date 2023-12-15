import React from 'react';
import "../Assets/CSS/SliderCode.css";
import {Col, Container, Row} from "react-bootstrap";

function SliderCode(props) {
    return (
        <Container fluid="true" className="mt-4">
            <Row className="m-0 p-0 sliderCode">
               <Col sm={12} md={4} lg={4} className="m-0 p-0">
                   <h4 className="globalSubTitle">HTML CODE</h4>
                   <h6 className="code globalDescription">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, pariatur repellendus! Aliquid architecto, corporis doloremque ipsa magnam nisi soluta. Ab commodi corporis cupiditate ea earum id nam, neque qui repellat.
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque doloribus enim et ipsa, odit quasi sapiente, sed similique tenetur ut veniam voluptatum. A assumenda consequatur eligendi esse explicabo illum sed.
                   </h6>
               </Col>
                <Col sm={12} md={4} lg={4} className="m-0 p-0">
                   <h4 className="globalSubTitle">CSS CODE</h4>
                    <h6 className="code globalDescription">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, pariatur repellendus! Aliquid architecto, corporis doloremque ipsa magnam nisi soluta. Ab commodi corporis cupiditate ea earum id nam, neque qui repellat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque doloribus enim et ipsa, odit quasi sapiente, sed similique tenetur ut veniam voluptatum. A assumenda consequatur eligendi esse explicabo illum sed.
                    </h6>
               </Col>
                <Col sm={12} md={4} lg={4} className="m-0 p-0">
                   <h4 className="globalSubTitle">JS CODE</h4>
                    <h6 className="code globalDescription">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, pariatur repellendus! Aliquid architecto, corporis doloremque ipsa magnam nisi soluta. Ab commodi corporis cupiditate ea earum id nam, neque qui repellat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque doloribus enim et ipsa, odit quasi sapiente, sed similique tenetur ut veniam voluptatum. A assumenda consequatur eligendi esse explicabo illum sed.
                    </h6>
               </Col>
            </Row>
        </Container>
    );
}

export default SliderCode;