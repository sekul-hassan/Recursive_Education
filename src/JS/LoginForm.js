import React, {Fragment} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import Modal from "../Pages/Modal";

function LoginForm(props) {
    return (
        <Fragment>
            <Container fluid="true" className="mt-2 text-center">
                <Row className="m-0 p-0">
                    <h4 className="subTitle text-dark">Click This Button</h4>
                    <div>
                        <Button className="loginBtn">Login</Button>
                    </div>
                    <Modal/>
                </Row>
            </Container>
        </Fragment>
    );
}

export default LoginForm;
