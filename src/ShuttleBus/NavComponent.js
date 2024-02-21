import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import navImg from "../Assets/Images/ProjectImg/navbar.png";
import ReactPlayer from "react-player";

function NavComponent(props) {
    return (
       <Container fluid="true" className="mb-3">
           <img className="w-100 h-auto" src={navImg} alt={navImg}/>
           <Row className="mx-0 mt-3">
               <Col md={6} sm={12} lg={6} className="px-0">
                   <ReactPlayer url="https://www.youtube.com/watch?v=gZC4Za8uA3I"
                                controls
                                width="100%"
                                height="100%"
                                style={{borderRadius:"10px"}}
                   />
               </Col>
               <Col className="px-0" md={6} sm={12} lg={6}>
                   <div className="px-3">
                       <h4 className="globalTitle">How to Make a Carousel</h4>
                       <h5 className="globalSubTitle">Using HTML CSS & JavaScript</h5>
                   </div>
               </Col>
               <div className="px-0 mt-2">
                   {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                   <h4 className="globalDescription">Github Link : <a href="https://github.com" target="_blank" rel="noreferrer">https://github.com/abc/kjksf</a></h4>
               </div>
           </Row>
       </Container>
    );
}

export default NavComponent;
