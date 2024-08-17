import React from 'react';
import { Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function AcademicNav({academic}) {

    return (
        <Container fluid="true" className="mt-1">
            <ul className="hslider mx-0 px-2">
                {
                    academic && academic.map((ack,idx)=> (
                        <li className="mx-2"><Link to={`/academic/${ack.level}`}>{ack.level}</Link></li>
                    ))
                }
            </ul>
        </Container>
    );
}

export default AcademicNav;
