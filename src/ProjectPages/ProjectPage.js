import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import ShuttleSideNav from "../ShuttleBus/ShuttleSideNav";
import Footer from "../Components/Footer";
import ShuttleComponent from "../ShuttleBus/ShuttleComponent";
import ShuttleContext from "../Context/ShuttleContext";
import demoImg from "../Assets/Images/ProjectImg/navbar.png";

function ProjectPage(props) {

    const projectName = "Shuttle";
    const projectLinks = [
        {link:"/shuttle-nav",value:"Project-setup"},
        {link:"/shuttle-nav",value: "Nav"},
        {link:"/shuttle-nav",value: "Home-top"},
        {link:"/shuttle-nav",value: "Footer"},
        {link:"/shuttle-nav",value: "Register"},
        {link:"/shuttle-nav",value: "Login-modal"},
        {link:"/shuttle-nav",value: "Profile"},
        {link:"/shuttle-nav",value: "Routing"},
    ]

    const projectDescription = {
        image:demoImg,
        videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
        title:"HOW TO MAKE A CAROUSEL",
        description:"Using HTML CSS & JavaScript",
        githubLink:"https://github.com/sekul-hassan",
    }


    return (
        <Fragment>
            <TopMenu/>
            <ShuttleContext.Provider value={{projectName,projectLinks,projectDescription}}>
                <div className="d-flex">
                    <div className="practiceSlider">
                        <ShuttleSideNav/>
                    </div>
                    <div className="practiceRightPage">
                        <ShuttleComponent/>
                        <Footer pad={0}/>
                    </div>
                </div>
            </ShuttleContext.Provider>
        </Fragment>
    );
}

export default ProjectPage;