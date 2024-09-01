import React, { Fragment, useState } from 'react';
import "../Assets/CSS/Tabs.css";
import "../Assets/CSS/Login.css";
import TopMenu from "../Components/TopMenu";
import PracticeSideBar from "../Components/PracticeSideBar";
import Footer from "../Components/Footer";
import practiceLists from "../PracticePages/PracticeConfig";
import PracticeFormat from "../PracticePages/PracticeFormat";
import LearningNav from "./LearningNav";
import learningConfig from "./LearningConfig";


function Learn(props) {

    const [lecture, setLecture] = useState(practiceLists[0][1]);

    const onSelectLecture = (lecture) => {
        setLecture(lecture);
    }

    return (
        <Fragment>
            <TopMenu/>
            <LearningNav navData={learningConfig}/>
            <div className="d-flex">
                <div className="practiceSlider">
                    <PracticeSideBar practiceLists={practiceLists} onSelectLecture={onSelectLecture}/>
                </div>
                <div className="practiceRightPage">
                    {
                        lecture && (
                            <PracticeFormat
                                Component={lecture.component}
                                code={lecture.code}
                            />
                        )
                    }

                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default Learn;
