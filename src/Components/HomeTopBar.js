import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";

function HomeTopBar(props) {
    return (
        <Fragment>
            <Container fluid="true">
                <div  className="homeTopBackground">
                    <div className="homeTopBackgroundOverlay">
                        <div className="topBarContent">
                            <HomeCarousel/>
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default HomeTopBar;