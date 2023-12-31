import React, {Fragment} from 'react';
import "../Assets/CSS/Login.css";
import {Container} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Footer from "../Components/Footer";
import LoginForm from "../JS/LoginForm";
import SliderCode from "../JS/SliderCode";
import TopMenu from "../Components/TopMenu";

function LoginFormPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Container fluid="true" className="loginOpacity">
                <div className="practiceSlider">
                    <PracticeSideBar/>
                </div>
                <div className="practiceRightPage">
                    <LoginForm/>
                    <SliderCode/>
                    <Footer/>
                </div>
            </Container>
        </Fragment>
    );
}

export default LoginFormPage;
