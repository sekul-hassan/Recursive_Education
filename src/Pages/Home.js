import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import HomeTopBar from "../Components/HomeTopBar";

function Home(props) {
    return (
        <Fragment>
            <TopMenu/>
            <HomeTopBar/>
        </Fragment>
    );
}

export default Home;
