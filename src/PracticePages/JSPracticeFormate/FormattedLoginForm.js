import React, {Fragment} from 'react';
import LoginForm from "../../Components/LoginForm";
import VideoContextSection from "../../Components/VideoContextSection";
import SliderCode from "../../Components/SliderCode";
import {cssCode, htmlCode, jsCode} from "../../Code/TabsCode";

function FormattedLoginForm(props) {
    const title = "HOW TO MAKE A CAROUSEL";
    const description = "Using HTML CSS & JavaScript";
    const videoLink = "https://youtu.be/gZC4Za8uA3I";


    return (
        <Fragment>
            <LoginForm />
            <VideoContextSection title={title} description={description} videoLink={videoLink}/>
            <SliderCode htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
        </Fragment>
    );
}

export default FormattedLoginForm;