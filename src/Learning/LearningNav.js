import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

function LearningNav({navData}) {
    return (
        <Container fluid="true" className="mt-1">
            <ul className="hslider mx-0 px-2">
                {
                    navData && navData.map((ack,idx)=> (
                        <li className="mx-2"><Link to={`/learn${ack[0].link}`}>{ack[0].value}</Link></li>
                    ))
                }
            </ul>
        </Container>
    );
}

export default LearningNav;

