import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";
import TypeWriting from "./TypeWriting";

function HomeTopBar(props) {
    const text1 = "Empower your educational journey with Recursive Education – your go-to hub for web and education consulting. We simplify the complex, providing targeted solutions to enhance your online presence and elevate learning experiences. Navigate the digital realm effortlessly with our expert guidance and redefine education for a brighter tomorrow.";

    return (
        <Fragment>
            <Container fluid="true">
                <div  className="homeTopBackground">
                    <div className="homeTopBackgroundOverlay">
                        <div className="topBarContent text-center">
                            <h4 className="globalTitle text-white  mt-4"><TypeWriting
                                text={'Welcome to Recursive Education'} speed={200}/></h4>
                            <h3 className="globalTitle mt-3">Explore yourself</h3>
                            <h5 className="globalDescription text-white text-center mt-2">
                                {text1}
                            </h5>
                            <h2 className="globalTitle">Do project and learn react</h2>
                            <h1 className="globalTitle text-white mt-3"><TypeWriting text={'Coding is nothing but fun'}/></h1>
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default HomeTopBar;