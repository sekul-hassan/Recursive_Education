import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";

function HomeTopBar(props) {
    return (
        <Fragment>
            <Container fluid="true">
                <div  className="homeTopBackground">
                    <div className="homeTopBackgroundOverlay">
                        <div className="topBarContent text-center">
                            <h4 className="globalTitle text-white mt-4">Welcome to Recursive Education</h4>
                            <h5 className="globalDescription text-white mt-4">
                                "Empower your educational journey with Recursive Education – your go-to hub for web and education consulting. We simplify the complex, providing targeted solutions to enhance your online presence and elevate learning experiences. Navigate the digital realm effortlessly with our expert guidance and redefine education for a brighter tomorrow."
                            </h5>
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default HomeTopBar;