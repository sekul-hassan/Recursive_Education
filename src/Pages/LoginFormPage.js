import React from 'react';
import "../Assets/CSS/Login.css";
import {Container} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Footer from "../Components/Footer";
import LoginForm from "../JS/LoginForm";
import SliderCode from "../JS/SliderCode";

function LoginFormPage(props) {
    return (
        <Container fluid="true">
            <div className="practiceSlider">
                <PracticeSideBar/>
            </div>
            <div className="practiceRightPage">
                <LoginForm/>
                <SliderCode/>
                <Footer/>
            </div>
        </Container>
    );
}

export default LoginFormPage;
