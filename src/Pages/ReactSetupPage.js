import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import {Container} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";

import Footer from "../Components/Footer";
import ReactSetup from "../ReactComponents/ReactSetup";

function ReactSetupPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Container fluid="true" className="d-flex">
                <div className="practiceSlider">
                    <PracticeSideBar/>
                </div>
                <div className="practiceRightPage">
                    <ReactSetup/>
                    <Footer pad={0}/>
                </div>
            </Container>
        </Fragment>
    );
}

export default ReactSetupPage;