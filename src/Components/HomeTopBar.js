import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";

function HomeTopBar(props) {
    return (
        <Fragment>
            <Container fluid="true">
                <div  className="homeTopBackground">
                    <div className="homeTopBackgroundOverlay">
                        <div className="topBarContent text-center">
                            <h4 className="text-primary">SEKUL HASSAN</h4>
                            <h5 className="text-dark">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default HomeTopBar;