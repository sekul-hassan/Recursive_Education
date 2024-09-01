import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import Footer from "../Components/Footer";
import c from "../Assets/Images/ServicesImg/C.png";
import cpp from "../Assets/Images/ServicesImg/C++.png";
import java from "../Assets/Images/ServicesImg/Java.jpg";
import python from "../Assets/Images/ServicesImg/python.jpg";
import html from "../Assets/Images/ServicesImg/HTML.png";
import css from "../Assets/Images/ServicesImg/css.jpg";
import js from "../Assets/Images/ServicesImg/js.png";
import react from "../Assets/Images/ServicesImg/react.jpg";
import spring from "../Assets/Images/ServicesImg/sprign_boot.png";
import academic from "../Assets/Images/ServicesImg/academic.png";
import ServiceCard from "../Components/ServiceCard";

function ServicePage(props) {

    const serviceList = [
        {logo:c,description:"Learning those from expert.",from:"Sekul hassan and GE Shohidullh"},
        {logo:cpp,description:"Learning those from expert.",from:"Sekul hassan and GE Shohidullh"},
        {logo:java,description:"Learning those from expert.",from:"Sekul hassan"},
        {logo:python,description:"Learning those from expert.",from:"Sekul hassan"},
        {logo:html,description:"Learning those from expert.",from:"GE Shohidullh"},
        {logo:css,description:"Learning those from expert.",from:"GE Shohidullh"},
        {logo:js,description:"Learning those from expert.",from:"SK Shahidul"},
        {logo:react,description:"Learning those from expert.",from:"Sekul hassan"},
        {logo:spring,description:"Learning those from expert.",from:"Sekul hassan"},
        {logo:academic,description:"Learning those from expert.",from:"All are expert"},
    ]

    return (
        <Fragment>
            <TopMenu/>
            <ServiceCard serviceList={serviceList}/>
            <Footer/>
        </Fragment>
    );
}

export default ServicePage;
