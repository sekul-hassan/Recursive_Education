import React, {Fragment} from 'react';
import ProjectSideNav from "../Components/ProjectSideNav";
import AcademicContent from "../Academic/AcademicContent";
import learningConfig from "./LearningConfig";

function LearnBody(props) {
    return (
        <Fragment>
            <div className="d-flex">
                <div className="practiceSlider">
                    <ProjectSideNav classes={learningConfig[0].lecture} />
                </div>
                <div className="practiceRightPage mx-0">
                    {/*<AcademicContent />*/}
                </div>
            </div>
        </Fragment>
    );
}

export default LearnBody;
