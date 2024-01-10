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
            <Footer pad={3}/>
        </div>
    );
}

export default AboutPage;