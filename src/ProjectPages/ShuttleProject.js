import React, {Fragment, useState} from 'react';
import TopMenu from "../Components/TopMenu";
import ShuttleSideNav from "../ShuttleBus/ShuttleSideNav";
import Footer from "../Components/Footer";
import ShuttleCommonComponent from "../ShuttleBus/shuttleCommonComponent";
import ReactSetup from "../ReactComponents/ReactSetup";
import {
    shuttleHomeTopDescription,
    classes,
    projectDescription,
    projectName,
    shuttleFooterDescription,
    shuttleRegisterDescription,
    shuttleLoginDescription,
    shuttleProfileDescription,
    shuttleRouteDescription
} from "../ShuttleBus/ShuttleConfig";

function ShuttleProject(props) {
    const[activeClass,setActiveClass] = useState(classes[0]);

    const onSelectCurrentClass = (cls)=>{
        setActiveClass(cls);
    }

    return (
        <Fragment>
            <TopMenu/>
            <div className="d-flex">
                <div className="practiceSlider">
                    <ShuttleSideNav classes={classes} onSelectCurrentClass={onSelectCurrentClass} projectName={projectName}/>
                </div>
                <div className="practiceRightPage">

                    {
                        activeClass.id === 1 ? <ReactSetup/> :
                            activeClass.id === 2 ? <ShuttleCommonComponent projectDescription={projectDescription}/> :
                                activeClass.id === 3 ?
                                    <ShuttleCommonComponent projectDescription={shuttleHomeTopDescription}/> :
                                    activeClass.id === 4 ?
                                        <ShuttleCommonComponent projectDescription={shuttleFooterDescription}/> :
                                        activeClass.id === 5 ?
                                            <ShuttleCommonComponent projectDescription={shuttleRegisterDescription}/> :
                                            activeClass.id === 6 ?
                                                <ShuttleCommonComponent projectDescription={shuttleLoginDescription}/> :
                                                activeClass.id === 7 ? <ShuttleCommonComponent
                                                        projectDescription={shuttleProfileDescription}/> :
                                                    activeClass.id === 8 ? <ShuttleCommonComponent
                                                        projectDescription={shuttleRouteDescription}/> : ""
                    }
                    <Footer pad={0}/>
                </div>
            </div>
        </Fragment>
    );
}

export default ShuttleProject;