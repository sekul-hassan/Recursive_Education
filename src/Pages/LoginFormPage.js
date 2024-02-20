import React, {Fragment} from 'react';
import "../Assets/CSS/Login.css";
import {Container} from "react-bootstrap";
import PracticeSideBar from "../Components/PracticeSideBar";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";
import SliderCode from "../Components/SliderCode";
import TopMenu from "../Components/TopMenu";
import {cssCode, htmlCode, jsCode} from "../Code/LiginCode";

function LoginFormPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Container fluid="true" className="d-flex">
                <div className="practiceSlider">
                    <PracticeSideBar/>
                </div>
                <div className="practiceRightPage">
                    <LoginForm/>
                    <SliderCode htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}/>
                    <Footer/>
                </div>
            </Container>
        </Fragment>
    );
}

export default LoginFormPage;
