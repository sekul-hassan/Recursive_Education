import React, {Fragment} from 'react';
import VideoContextSection from "./VideoContextSection";
import {Container, Row} from "react-bootstrap";
import projects from "../ProjectPages/ProjectConfig";

function Recent(props) {
    const topFour = projects[0].classes.slice(2,4);

    return (
       <Container fluid="true" className="mt-3">
           <h4 className="globalTitle text-dark text-center mbNeg">Recent Activity</h4>
           <Row className="mx-0">
               {topFour && topFour.map((practice, idx) => (
                   <Fragment>
                       {
                           practice.videoContent ? (
                               <VideoContextSection videoLink={practice.videoContent.videoLink} gitHubLink={practice.videoContent.gitHubLink} description={practice.videoContent.description} title={practice.videoContent.title}/>
                           ):(
                               <VideoContextSection videoLink={practice.lecture.videoLink} gitHubLink={practice.lecture.githubLink} description={practice.lecture.description} title={practice.lecture.title}/>
                           )
                       }

                   </Fragment>
               ))}
           </Row>
       </Container>
    );
}

export default Recent;
