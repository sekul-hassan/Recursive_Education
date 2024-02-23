import React, {Fragment, useState} from 'react';
import {
    classes,
    projectDescription,
    projectName,
    shuttleFooterDescription,
    shuttleHomeTopDescription,
    shuttleLoginDescription,
    shuttleProfileDescription,
    shuttleRegisterDescription,
    shuttleRouteDescription
} from "../ShuttleBus/ShuttleConfig";
import TopMenu from "../Components/TopMenu";
import ShuttleSideNav from "../ShuttleBus/ShuttleSideNav";
import ReactSetup from "../ReactComponents/ReactSetup";
import ShuttleCommonComponent from "../ShuttleBus/shuttleCommonComponent";
import Footer from "../Components/Footer";

function NcPcProject(props) {
    const[activeClass,setActiveClass] = useState(classes[0]);
    const onSelectCurrentClass = (cls)=>{
        console.log(cls);
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
                   <div className="ml-3">
                       <Footer pad={0}/>
                   </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NcPcProject;
