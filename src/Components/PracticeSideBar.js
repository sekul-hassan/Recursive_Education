import React, { Fragment } from 'react';
import '../Assets/CSS/SideBar.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

function PracticeSideBar({ practiceLists , onSelectLecture }) {

    return (
        <Fragment>
            <Navbar expand={true} className="practiceList">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="show">
                    <Nav className="flex-column sidebar">
                        {practiceLists.map((practiceList, index) => (
                            <Fragment key={index}>
                                {practiceList.map((item, subIndex) => (
                                    <Fragment key={subIndex}>
                                        {subIndex === 0 ? (
                                            <h4 className="practiceTitle mt-2">{item.value}</h4>
                                        ) : (
                                            <Link onClick={()=>{onSelectLecture(item)}} to={item.link}>{item.value}</Link>
                                        )}
                                    </Fragment>
                                ))}
                            </Fragment>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default PracticeSideBar;
