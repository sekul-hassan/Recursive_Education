import React from 'react';
import {Container} from "react-bootstrap";

function Terms(props) {
    return (
        <Container fluid="true" className="mt-4 mx-1 px-2">
            <h4 className="globalTitle">Introduction</h4>
            <p className="globalDescription">
                Welcome to Recursive Education. These Terms and Conditions govern your use of our website located
                at <strong><a
                href="https://recursiveeducation.com">https://recursiveeducation.com</a></strong> and any related
                services
                provided by Recursive Education. By accessing or using our website, you agree to comply with and be
                bound by these terms. If you do not agree with any part of these terms, you are prohibited from using
                our website and services.
            </p>

            <h4 className="globalTitle">Acceptance of Terms</h4>
            <p className="globalDescription">
                By using <strong>Recursive Education's</strong> website, you affirm that you are at least 18 years old
                or have parental
                or guardian consent to use our website. You also agree to comply with all applicable laws and
                regulations.
            </p>

            <h4 className="globalTitle">Changes to Terms</h4>
            <p className="globalDescription">
                <strong>Recursive Education</strong> reserves the right to modify or replace these Terms and Conditions
                at any time. We will notify you of any changes by posting the new terms on our website. Your continued
                use of the website after any such changes constitutes your acceptance of the new Terms and Conditions.
            </p>

            <h4 className="globalTitle">Use of the Website</h4>
            <h4 className="globalSubTitle">1. License</h4>
            <p className="globalDescription">
                <strong>Recursive Education</strong> grants you a limited, non-exclusive, non-transferable, and
                revocable license to access and use our website for personal, non-commercial purposes. You must not use
                the website for any unlawful or prohibited purpose.
            </p>
            <h4 className="globalSubTitle">2. User Conduct</h4>
            <p className="globalDescription">You agree not to:</p>
            <ul>
                <li>Violate any applicable laws or regulations.</li>
                <li>Infringe the intellectual property rights of others.</li>
                <li>Transmit any harmful or disruptive code.</li>
                <li>Use the website in any way that could damage, disable, overburden, or impair the website.</li>
                <li>Collect or store personal data about other users without their consent.</li>
            </ul>

            <h4 className="globalSubTitle">3. User Conduct</h4>
            <p className="globalDescription">
                All content on the Recursive Education website, including text, graphics, logos, images, videos, and
                software, is the property of <strong>Recursive Education</strong> or its content suppliers and is
                protected by copyright, trademark, and other intellectual property laws. You may not reproduce,
                distribute, or create derivative works from any content on our website without prior written permission.
            </p>

            <h4 className="globalSubTitle">Contact Us</h4>
            <ul>
                <li>Email: sekulhassan301@gmail.com</li>
                <li>Address: Savar, Dhaka , Jahangirnagar University.</li>
            </ul>

        </Container>
    );
}

export default Terms;
