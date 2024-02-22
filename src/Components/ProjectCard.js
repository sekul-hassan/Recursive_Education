import React from 'react';
import {Button, Card} from "react-bootstrap";

import {Link} from "react-router-dom";

function ProjectCard({project}) {

    const {projectImg,projectLink,projectRoute} = project;

    return (
        <Card className="projectBody">
            <img className="projectImg" src={projectImg} alt={projectImg}/>
            <div className="d-flex my-2">
                <Button href={projectLink} target="_blank" className="btn-outline-info">Preview</Button>
                <Link to={projectRoute}><Button className="btn-outline-info mx-4">Live Code</Button></Link>
            </div>
        </Card>
    );
}

export default ProjectCard;

