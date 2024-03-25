import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
import {Col, Container, Row} from "react-bootstrap";
import projects from "../ProjectPages/ProjectConfig";

function ProjectPage(props) {
    return (
       <Fragment>
           <TopMenu/>
           <Container fluid="true" className="mb-3">
               <Row className="mx-0">
                   {
                       projects.map((project,idx)=>(
                           <Col md={4} lg={3} sm={12}>
                               {project.demo && <ProjectCard project={project.demo} />}
                           </Col>
                       ))
                   }
               </Row>
           </Container>
           <Footer/>
       </Fragment>
    );
}

export default ProjectPage;
