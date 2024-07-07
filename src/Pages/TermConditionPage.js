import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import Terms from "../Components/Terms";
import Footer from "../Components/Footer";

function TermConditionPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Terms/>
            <Footer/>
        </Fragment>
    );
}

export default TermConditionPage;
