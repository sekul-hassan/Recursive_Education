import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import HomeTopBar from "../Components/HomeTopBar";
import Recent from "../Components/Recent";

function Home(props) {
    return (
        <Fragment>
            <TopMenu/>
            <HomeTopBar/>
            <Recent/>
        </Fragment>
    );
}

export default Home;
