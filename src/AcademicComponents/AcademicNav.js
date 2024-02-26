import React from 'react';
import { Container} from "react-bootstrap";

function AcademicNav(props) {
    return (
        <Container fluid="true" className="mt-1">
            <ul className="hslider mx-0 px-4">
                <li className="mx-0"><a href="">Six</a></li>
                <li className="mx-2"><a href="">Seven</a></li>
                <li className="mx-2"><a href="">Eight</a></li>
                <li className="mx-2"><a href="">Nine</a></li>
                <li className="mx-2"><a href="">Ten</a></li>
                <li className="mx-2"><a href="">Eleven</a></li>
                <li className="mx-0"><a href="">Twelve</a></li>
            </ul>
        </Container>
    );
}

export default AcademicNav;
