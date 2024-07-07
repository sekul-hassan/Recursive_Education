import React from 'react';
import practiceLists from "../PracticePages/PracticeConfig";
import VideoContextSection from "./VideoContextSection";
import {Container, Row} from "react-bootstrap";

function Recent(props) {
    const topFour = practiceLists[0].slice(-4);

    return (
       <Container fluid="true" className="mt-3">
           <h4 className="globalTitle text-dark text-center mbNeg">Recent Activity</h4>
           <Row className="mx-0">
               {topFour && topFour.map((practice, idx) => (
                   <VideoContextSection videoLink={practice.videoContent.videoLink} gitHubLink={practice.videoContent.gitHubLink} description={practice.videoContent.description} title={practice.videoContent.title}/>
               ))}
           </Row>
       </Container>
    );
}

export default Recent;
