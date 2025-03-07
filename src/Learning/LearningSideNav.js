import React, {Fragment} from 'react';
import {Link, useParams} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

function LearningSideNav({ practiceLists , onSelectLecture }) {

    const{language} = useParams();
    const selectedLanguage = language || "javascript";

    return (
        <Fragment>
            <Navbar expand={true} className="practiceList">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="show">
                    <Nav className="flex-column sidebar">
                        {practiceLists.map((item, subIndex) => (
                            <Link
                                onClick={() => { onSelectLecture(item.lecture) }}
                                to={`/learn/${selectedLanguage}${item.link}`}>
                                {item.value}
                            </Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>

    );
}

export default LearningSideNav;

