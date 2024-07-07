import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import Refund from "../Components/Refund";
import Footer from "../Components/Footer";

function RefundPage(props) {
    return (
       <Fragment>
           <TopMenu/>
           <Refund/>
           <Footer/>
       </Fragment>
    );
}

export default RefundPage;
