import React from 'react';
import TopMenu from "../Components/TopMenu";
import AboutTop from "../Components/AboutTop";
import About from "../Components/About";
import Footer from "../Components/Footer";

function AboutPage(props) {
    return (
        <div>
            <TopMenu/>
            <AboutTop/>
            <About/>
            <Footer/>
        </div>
    );
}

export default AboutPage;