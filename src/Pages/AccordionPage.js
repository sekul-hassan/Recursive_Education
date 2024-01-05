import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import {Container} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import SliderCode from "../Components/SliderCode";
import {cssCode, htmlCode, jsCode} from "../Code/AccordionCode";
import Footer from "../Components/Footer";
import Accordions from "../Components/Accordion";

function AccordionPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Container fluid="true" className="loginOpacity">
                <div className="practiceSlider">
                    <PracticeSideBar/>
                </div>
                <div className="practiceRightPage">
                    <Accordions/>
                    <SliderCode htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}/>
                    <Footer/>
                </div>
            </Container>
        </Fragment>
    );
}

export default AccordionPage;