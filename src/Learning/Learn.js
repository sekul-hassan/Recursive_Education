import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import AcademicNav from "../Academic/AcademicNav";
import learningConfig from "./LearningConfig";

function Learn(props) {
    return (
        <Fragment>
            <TopMenu/>
            <AcademicNav academic={learningConfig}/>
        </Fragment>
    );
}

export default Learn;
