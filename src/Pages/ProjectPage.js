import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
import {Col, Container, Row} from "react-bootstrap";
import shuttleProject from "../Assets/Images/ProjectImg/need2.png"
import ncpcProject from "../Assets/Images/ProjectImg/ncpc_site.png"

function ProjectPage(props) {

    const projects = [
        {projectImg:shuttleProject,projectLink:"https://shuttle.recursiveeducation.com/",projectRoute:"/shuttle-project"},
        {projectImg:ncpcProject,projectLink:"https://pc.cse.juniv.edu/",projectRoute:"/ncpc-project"},
    ]

    return (
       <Fragment>
           <TopMenu/>
           <Container fluid="true" className="mt-3">
               <Row className="mx-0">
                   {
                       projects.map((project)=>(
                           <Col md={4} lg={3} sm={12}>
                               <ProjectCard project={project}/>
                           </Col>
                       ))
                   }
               </Row>
           </Container>
           <Footer pad={4}/>
       </Fragment>
    );
}

export default ProjectPage;
