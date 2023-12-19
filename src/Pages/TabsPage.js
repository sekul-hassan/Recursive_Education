import React from 'react';
import PracticeSideBar from "../Components/PracticeSideBar";
import SliderCode from "../JS/SliderCode";
import Footer from "../Components/Footer";
import {Container} from "react-bootstrap";
import Tab from "../JS/Tab";

function TabsPage(props) {
    return (
        <Container fluid="true">
            <div className="practiceSlider">
                <PracticeSideBar/>
            </div>
            <div className="practiceRightPage">
                <Tab/>
                <SliderCode/>
                <Footer/>
            </div>
        </Container>
    );
}

export default TabsPage;