import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import ShuttleSideNav from "../ShuttleBus/ShuttleSideNav";
import Footer from "../Components/Footer";
import NavComponent from "../ShuttleBus/NavComponent";

function ShuttleProject(props) {
    return (
        <Fragment>
            <TopMenu/>
            <div className="d-flex">
                <div className="practiceSlider">
                    <ShuttleSideNav/>
                </div>
                <div className="practiceRightPage">
                    <NavComponent/>
                    <Footer pad={0}/>
                </div>
            </div>
        </Fragment>
    );
}

export default ShuttleProject;