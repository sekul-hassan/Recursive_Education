import React from 'react';
import {Container} from "react-bootstrap";
import VideoContextSection from "./VideoContextSection";


function ProjectBody({projectDescription}) {
    const { image, videoLink, title, description, githubLink } = projectDescription;

    return (
        <Container fluid="true" className="mb-3">
            {image && <img className="w-100 h-auto" src={image} alt={image}/>}
            <VideoContextSection title={title} description={description} videoLink={videoLink}/>
            <div className="px-0 mt-2">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <h4 className="globalDescription">Github Link : <a href={githubLink} target="_blank" rel="noreferrer">{githubLink}</a></h4>
            </div>
        </Container>
    );
}

export default ProjectBody;
