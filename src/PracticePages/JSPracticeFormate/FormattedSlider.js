import React, {Fragment} from 'react';
import Slider from "../../Components/Slider";
import SliderCode from "../../Components/SliderCode";
import {cssCode, htmlCode, jsCode} from "../../Code/SliderCode";
import VideoContextSection from "../../Components/VideoContextSection";

function FormattedSlider(props) {

    const title = "HOW TO MAKE A CAROUSEL";
    const description = "Using HTML CSS & JavaScript";
    const videoLink = "https://youtu.be/gZC4Za8uA3I";


    return (
        <Fragment>
            <Slider />
            <VideoContextSection title={title} description={description} videoLink={videoLink}/>
            <SliderCode htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
        </Fragment>
    );
}

export default FormattedSlider;