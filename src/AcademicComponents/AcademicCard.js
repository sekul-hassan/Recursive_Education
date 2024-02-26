import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function AcademicCard({description}) {
    const {image,route} = description;
    return (
        <Link to={route}>
            <Card className="mt-3">
                <Card.Img src={image} className="w-100 h-auto"/>
            </Card>
        </Link>
    );
}

export default AcademicCard;
