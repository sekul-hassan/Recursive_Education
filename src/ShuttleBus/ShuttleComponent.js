import React, {useContext} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactPlayer from "react-player";
import ShuttleContext from "../Context/ShuttleContext";

function ShuttleComponent(props) {

    const {projectDescription} = useContext(ShuttleContext);
    const { image, videoLink, title, description, githubLink } = projectDescription;

    return (
       <Container fluid="true" className="mb-3">
           <img className="w-100 h-auto" src={image} alt={image}/>
           <Row className="mx-0 mt-3">
               <Col md={6} sm={12} lg={6} className="px-0">
                   <ReactPlayer url={videoLink}
                                controls
                                width="100%"
                                height="100%"
                                style={{borderRadius:"10px"}}
                   />
               </Col>
               <Col className="px-0" md={6} sm={12} lg={6}>
                   <div className="px-3">
                       <h4 className="globalTitle">{title}</h4>
                       <h5 className="globalSubTitle">{description}</h5>
                   </div>
               </Col>
               <div className="px-0 mt-2">
                   {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                   <h4 className="globalDescription">Github Link : <a href={githubLink} target="_blank" rel="noreferrer">{githubLink}</a></h4>
               </div>
           </Row>
       </Container>
    );
}

export default ShuttleComponent;
