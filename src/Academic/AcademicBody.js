import React, {useState, useEffect, Fragment} from 'react';
import { Col, Container, Row } from "react-bootstrap";
import {useParams} from "react-router-dom";
import academic from "./AcademicConfig";
import AcademicCard from "./AcademicCard";
import TopMenu from "../Components/TopMenu";
import AcademicNav from "./AcademicNav";
import Footer from "../Components/Footer";
import Lecture from "./Lecture";

function AcademicBody(props) {
    const { id, subject } = useParams();
    const [defaultId, setDefaultId] = useState(null);

    useEffect(() => {
        setDefaultId(id || "Six");
    }, [id]);

    const level = academic.find((lev) => defaultId === lev.level);

    const lecture = level && level.bookList.find((lec)=>lec.bookName===subject);

    return (
        <Fragment>
            <TopMenu/>
            <AcademicNav academic={academic}/>
            <Container fluid="true" className="mt_negative_3">
                <Row className="mx-0">
                    {
                        !subject && !lecture && level && level.bookList.map((book, idx) => (
                            <Col md={4} lg={4} sm={12} key={idx}>
                                <AcademicCard book={book} route={level.level} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            {subject && lecture && <Lecture lecture = {lecture.lecture}/>}
            <Footer/>
        </Fragment>
    );
}



export default AcademicBody;
