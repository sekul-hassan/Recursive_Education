import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import {Container} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import SliderCode from "../Components/SliderCode";
import {cssCode, htmlCode, jsCode} from "../Code/SideNavCode";
import Footer from "../Components/Footer";
import SlideGallery from "../Components/SlideGallery";

function SlideGalleryPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Container fluid="true">
                <div className="practiceSlider">
                    <PracticeSideBar/>
                </div>
                <div className="practiceRightPage">
                    <SlideGallery/>
                    <SliderCode htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}/>
                    <Footer pad={0}/>
                </div>
            </Container>
        </Fragment>
    );
}

export default SlideGalleryPage;