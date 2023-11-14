import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactPlayer from "react-player";

function Recent(props) {
    return (
        <Fragment>
            <Container fluid="true" className="p-4 text-center">
                <Row>
                    <h3 className="mb-4">Most recent activity</h3>
                    <Col md={6} sm={12} lg={6}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=YLQ6wfqdWDI&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYLQ6wfqdWDI&start_radio=1"
                        controls
                                     width="100%"
                                     height="100%"
                                     style={{borderRadius:"10px"}}
                        />
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad aspernatur commodi cumque deserunt dignissimos dolorem eius exercitationem expedita facere fugit impedit ipsa ipsam ipsum libero maxime nemo nesciunt nobis officiis optio quaerat quibusdam quisquam quo rerum saepe similique soluta, tempore unde velit veritatis voluptas voluptate voluptates. Aut delectus libero pariatur perferendis quasi quod tenetur, vel. Adipisci aspernatur at, commodi corporis doloribus earum eum excepturi exercitationem id illum in iure iusto magni non, nulla odit perferendis perspiciatis possimus provident quos ratione recusandae sequi tempora tenetur velit voluptas, voluptates. Ad commodi cum deserunt ea magni nemo odit omnis quo tenetur.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Recent;