import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Slider from "../Components/Slider";
import SliderCode from "../Components/SliderCode";
import Footer from "../Components/Footer";
import TopMenu from "../Components/TopMenu";
import {cssCode, htmlCode, jsCode} from "../Code/TabsCode";

function PracticePage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Container fluid="true">
                <div className="practiceSlider">
                    <PracticeSideBar/>
                </div>
                <div className="practiceRightPage">
                    <Slider/>
                    <SliderCode htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}/>
                    <Footer pad={0}/>
                </div>
            </Container>
        </Fragment>
    );
}

export default PracticePage;