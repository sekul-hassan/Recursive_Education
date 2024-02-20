import React, {Fragment} from 'react';
import PracticeSideBar from "../Components/PracticeSideBar";
import Slider from "../Components/Slider";
import SliderCode from "../Components/SliderCode";
import Footer from "../Components/Footer";
import TopMenu from "../Components/TopMenu";
import {cssCode, htmlCode, jsCode} from "../Code/SliderCode";

function SlidePage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <div className="d-flex">
                <div className="practiceSlider">
                    <PracticeSideBar/>
                </div>
                <div className="practiceRightPage">
                    <Slider/>
                    <SliderCode htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}/>
                    <Footer pad={0}/>
                </div>
            </div>
        </Fragment>
    );
}

export default SlidePage;