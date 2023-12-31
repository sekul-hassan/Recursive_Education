import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import PrivacyTop from "../Components/PrivacyTop";
import Footer from "../Components/Footer";
import PrivacyContent from "../Components/PrivacyContent";

function Privacy(props) {
    return (
        <Fragment>
            <TopMenu/>
            <PrivacyTop/>
            <PrivacyContent/>
            <Footer pad={4}/>
        </Fragment>
    );
}

export default Privacy;