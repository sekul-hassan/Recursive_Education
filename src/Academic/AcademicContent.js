import React from 'react';
import {Container} from "react-bootstrap";
import VideoContextSection from "../Components/VideoContextSection";

function AcademicContent({lecture}) {
    const {title,description,videoLink,pdfLink} = lecture;
    return (
        <Container fluid="true">
            <VideoContextSection title={title} description={description} videoLink={videoLink}/>
            <h4 className="globalDescription">Download PDF : <a href={pdfLink} target="_blank" rel="noreferrer">{pdfLink}</a></h4>
        </Container>
    );
}

export default AcademicContent;
