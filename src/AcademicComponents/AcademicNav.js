import React from 'react';
import { Container} from "react-bootstrap";

function AcademicNav(props) {
    return (
        <Container fluid="true" className="mt-1">
            <ul className="hslider mx-0 px-4">
                <li className="mx-0"><a href="#abc">Six</a></li>
                <li className="mx-2"><a href="#abc">Seven</a></li>
                <li className="mx-2"><a href="#abc">Eight</a></li>
                <li className="mx-2"><a href="#abc">Nine</a></li>
                <li className="mx-2"><a href="#abc">Ten</a></li>
                <li className="mx-2"><a href="#abc">Eleven</a></li>
                <li className="mx-0"><a href="#abc">Twelve</a></li>
            </ul>
        </Container>
    );
}

export default AcademicNav;
