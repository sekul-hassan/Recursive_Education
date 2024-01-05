import React from 'react';
import "../Assets/CSS/Accordion.css";
import {Container} from "react-bootstrap";
import {openAccordion} from "../JS/Accordion";

function Accordions(props) {
    return (
        <Container fluid="true" className="text-center">
            <h4 className="title text-dark"><strong>Accordion</strong></h4>
            <div className="accordions">
                <div className="accordion" onClick={()=>{openAccordion("0")}}>
                    <h4 className="globalDescription">Section Item 1</h4>
                    <h4 className="sign">+</h4>
                </div>
                <div className="accordionBody">
                    <p className="globalDescription text-start p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, incidunt
                        laudantium nihil nisi numquam quas tempore voluptatibus. Aperiam consequuntur
                        delectus facilis in, ipsum non quae quaerat qui quidem tempore voluptate?
                    </p>
                </div>
                <div className="accordion" onClick={()=>{openAccordion("1")}}>
                    <h4 className="globalDescription">Section Item 2</h4>
                    <h4 className="sign">+</h4>
                </div>
                <div className="accordionBody ">
                    <p className="globalDescription text-start p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, incidunt
                        laudantium nihil nisi numquam quas tempore voluptatibus. Aperiam consequuntur
                        delectus facilis in, ipsum non quae quaerat qui quidem tempore voluptate?
                    </p>
                </div>
                <div className="accordion" onClick={()=>{openAccordion("2")}}>
                    <h4 className="globalDescription">Section Item 3</h4>
                    <h4 className="sign">+</h4>
                </div>
                <div className="accordionBody ">
                    <p className="globalDescription text-start p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, incidunt
                        laudantium nihil nisi numquam quas tempore voluptatibus. Aperiam consequuntur
                        delectus facilis in, ipsum non quae quaerat qui quidem tempore voluptate?
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default Accordions;
