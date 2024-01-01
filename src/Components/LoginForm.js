import React, {Fragment, useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import Modal from "./Modal";

function LoginForm(props) {

    const [dummyLogin,setDummyLogin] = useState(false);

    const toggleDummyLogin = (e) =>{
        e.preventDefault();
        setDummyLogin(!dummyLogin);
    }

    return (
        <Fragment>
            <Container fluid="true" className="mt-2 text-center">
                <Row className="m-0 p-0">
                    <h4 className="subTitle text-dark">Click This Button</h4>
                    <div>
                        <Button onClick={toggleDummyLogin} className="loginBtn">Login</Button>
                    </div>
                    <Modal toggleDummyLogin={toggleDummyLogin} dummyLogin={dummyLogin}/>
                </Row>
            </Container>
        </Fragment>
    );
}

export default LoginForm;
