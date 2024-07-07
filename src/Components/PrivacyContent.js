import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";

function PrivacyContent(props) {
    return (
        <Fragment>
            <Container fluid="true" className="mt-4 mx-1 px-2">
                <h4 className="title text-dark">Privacy Policy</h4>
                <h4 className="globalDescription">Last updated: [12/31/2023]</h4>
                <p className="globalDescription text-warning">
                    [<strong>Recursive Education</strong>], ("WE") operates the [<a
                    href="https://www.recursiveeducation.com/">Recursive Education</a>] website (the "Service").
                    This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service.
                </p>
                <h4 className="globalTitle text-dark mt-4">Information Collection And Use</h4>
                <p className="globalDescription text-warning mt-4">
                    While using our Service, we may ask you to provide us with certain personally
                    identifiable information that can be used to contact or identify you. Personally
                    identifiable information may include, but is not limited to:
                </p>
                <ul className="globalDescription text-warning">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                    <li>Cookies and Usage Data</li>
                </ul>
            </Container>
        </Fragment>
    );
}

export default PrivacyContent;