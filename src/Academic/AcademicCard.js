import React, {Fragment} from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function AcademicCard({book,route}) {

    return (
       <Fragment>
           {
               book && (
                   <Link to={`/academic/${route}/${book.bookName}`}>
                       <Card className="mt-3">
                           <Card.Img src={book.bookImag} className="w-100 h-auto"/>
                       </Card>
                   </Link>
               )
           }
       </Fragment>
    );
}

export default AcademicCard;
