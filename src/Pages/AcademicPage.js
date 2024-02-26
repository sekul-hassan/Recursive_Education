import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import AcademicNav from "../AcademicComponents/AcademicNav";
import Footer from "../Components/Footer";
import AcademicBody from "../AcademicComponents/AcademicBody";

function AcademicPage(props) {

    return (
        <Fragment>
            <TopMenu/>
            <AcademicNav/>
            <AcademicBody/>
            <Footer/>
        </Fragment>
    );
}

export default AcademicPage;

