import React from 'react';
import {Container} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Slider from "../Components/Slider";
import SliderCode from "../JS/SliderCode";
import Footer from "../Components/Footer";

function PracticePage(props) {
    return (
        <Container fluid="true">
            <div className="practiceSlider">
                <PracticeSideBar/>
            </div>
            <div className="practiceRightPage">
                <Slider/>
                <SliderCode/>
                <Footer/>
            </div>
        </Container>
    );
}

export default PracticePage;