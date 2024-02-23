import React, { Fragment, useState } from 'react';
import TopMenu from "../Components/TopMenu";
import PracticeSideBar from "../Components/PracticeSideBar";
import Footer from "../Components/Footer";
import ReactSetup from "../ReactComponents/ReactSetup";
import FormattedSlider from "./JSPracticeFormate/FormattedSlider";
import FormattedLoginForm from "./JSPracticeFormate/FormattedLoginForm";
import FormattedTabs from "./JSPracticeFormate/FormattedTabs";
import FormattedAccordion from "./JSPracticeFormate/FormattedAccordion";
import FormattedSideNav from "./JSPracticeFormate/FormattedSideNav";
import FormattedSlideGallery from "./JSPracticeFormate/FormattedSlideGallery";

function JSPractice(props) {
    const practiceLists = [
        [
            { id: 0, link: "/Javascript", value: "Javascript" },
            { id: 1, link: "/javascript", value: "Slider" },
            { id: 2, link: "/javascript", value: "Login Form" },
            { id: 3, link: "/javascript", value: "Tabs" },
            { id: 4, link: "/javascript", value: "Accordion" },
            { id: 5, link: "/javascript", value: "Side Nav" },
            { id: 6, link: "/javascript", value: "Slide Gallery" },
        ],
        [
            { id: 0, link: "Javascript", value: "React" },
            { id: 7, link: "/javascript", value: "Setup" },
        ],
    ]

    const [lecture, setLecture] = useState(practiceLists[0][1]);

    const onSelectLecture = (lecture) => {
        setLecture(lecture);
    }

    return (
        <Fragment>
            <TopMenu />
            <div className="d-flex">
                <div className="practiceSlider">
                    <PracticeSideBar practiceLists={practiceLists} onSelectLecture={onSelectLecture} />
                </div>
                <div className="practiceRightPage">
                    {lecture.id === 1 && (
                        <FormattedSlider/>
                    )}
                    {lecture.id === 2 && (
                       <FormattedLoginForm/>
                    )}
                    {lecture.id === 3 && (
                       <FormattedTabs/>
                    )}
                    {lecture.id === 4 && (
                       <FormattedAccordion/>
                    )}
                    {lecture.id === 5 && (
                       <FormattedSideNav/>
                    )}
                    {lecture.id === 6 && (
                       FormattedSlideGallery
                    )}
                    {lecture.id === 7 && (
                        <ReactSetup />
                    )}
                </div>
            </div>
            <Footer pad={0} />
        </Fragment>
    );
}

export default JSPractice;
