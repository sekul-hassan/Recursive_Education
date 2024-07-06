import React from 'react';
import {Container} from "react-bootstrap";
import VideoContextSection from "./VideoContextSection";


function ProjectBody({projectDescription}) {
    const { image, videoLink, title, description, githubLink } = projectDescription;

    return (
        <Container fluid="true" className="mb-3">
            {image && <img className="w-100 h-auto" src={image} alt={image}/>}
            <VideoContextSection title={title} description={description} videoLink={videoLink} gitHubLink={githubLink}/>
        </Container>
    );
}

export default ProjectBody;
