import React, {Fragment} from 'react';
import HomeTopBar from "../Components/HomeTopBar";
import Recent from "../Components/Recent";

function Home(props) {
    return (
        <Fragment>
            <HomeTopBar/>
            <Recent/>
        </Fragment>
    );
}

export default Home;
