import React from 'react';
import {Button, Card} from "react-bootstrap";

import {Link} from "react-router-dom";

function ProjectCard({project}) {

    const {projectImg,projectLink,projectRoute} = project;
    console.log(project);

    return (
        <Card className="projectBody">
            {projectImg && <img className="projectImg" src={projectImg} alt={projectImg}/>}
            <div className="d-flex projectCardFooter">
                <Button href={projectLink} target="_blank"  variant="light" className="btn-outline-success">Preview</Button>
                <Link to={`/project${projectRoute}`}><Button variant="success" className="btn-outline-light mx-2">Live Code</Button></Link>
            </div>
        </Card>
    );
}

export default ProjectCard;

