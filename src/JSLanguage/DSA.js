import React from 'react';
import { Container } from "react-bootstrap";
import Array from "./Array";
import Object from "./Object";

function Dsa(props) {
    return (
        <Container fluid="true" className="text-start text-dark globalSubTitle link-light-3">
            <Array/>
            <Object/>
        </Container>
    );
}

export default Dsa;
