import React from 'react';
import {Container} from "react-bootstrap";

function Refund(props) {
    return (
        <Container fluid="true" className="mt-4 mx-1 px-2">
            <h4 className="globalTitle text-dark">Refund Policy</h4>
            <h4 className="title">Introduction</h4>
            <p className="globalDescription">
                At <strong>Recursive Education</strong>, we strive to provide high-quality educational content and
                services. We understand that there may be circumstances where a refund is necessary. This Refund Policy
                outlines the conditions under which refunds will be provided.
            </p>

            <h4 className="title">Eligibility for Refunds</h4>
            <p className="globalDescription">
                Refunds are available under the following conditions:
            </p>
            <h4 className="title">1. Courses and Subscriptions</h4>
            <ul>
                <li className="globalDescription">
                    <strong> Cancellation within 7 Days:</strong> If you are not satisfied with a course or subscription
                    purchased from Recursive Education, you may request a refund within 7 days of purchase. To be
                    eligible, the request must be made within this period, and the course content must not be more than
                    20% completed.
                </li>
                <li className="globalDescription">
                    <strong>Technical Issues:</strong> If you experience technical issues that prevent you from
                    accessing the course or subscription content, and we are unable to resolve these issues within a
                    reasonable time, you may be eligible for a refund.
                </li>
            </ul>

            <h4 className="title">2. Workshops and Live Events</h4>
            <ul>
                <li className="globalDescription">
                    <strong>Cancellation by Recursive Education:</strong> If a workshop or live event is canceled by
                    Recursive Education, you will receive a full refund.
                </li>
                <li className="globalDescription">
                    <strong>Cancellation by Participant:</strong> If you need to cancel your registration for a workshop
                    or live event, you must do so at least 48 hours before the scheduled start time to receive a full
                    refund. Cancellations made less than 48 hours before the event will not be eligible for a refund.
                </li>
            </ul>

            <h4 className="title">Non-Refundable Items</h4>
            <p className="globalDescription">
                The following items are non-refundable:
            </p>
            <ul>
                <li className="globalDescription">Digital downloads and materials that have been accessed or
                    downloaded.
                </li>
                <li className="globalDescription">Services that have already been delivered or commenced.</li>
                <li className="globalDescription">Donations and contributions.</li>
            </ul>

            <h4 className="title">How to Request a Refund</h4>
            <p className="globalDescription">To request a refund, please follow these steps:</p>
            <ol>
                <li className="globalDescription"><strong>Contact Us:</strong> Email us at [your email address] with the
                    subject line "Refund Request."
                </li>
                <li className="globalDescription"><strong>Provide Details:</strong> Include your order number, the
                    reason for the refund request, and any relevant details or documentation.
                </li>
                <li className="globalDescription"><strong>Review Process:</strong> Our team will review your request and
                    respond within 5-7 business days. We may request additional information to process your refund.
                </li>
            </ol>

            <h4 className="title">Refund Process</h4>
            <p className="globalDescription">
                If your refund request is approved, we will process the refund to your original method of payment.
                Please note that it may take additional time for the refund to appear on your account statement,
                depending on your bank or payment provider.
            </p>
            <h4 className="title">Changes to the Refund Policy</h4>
            <p className="globalDescription">
                <strong>Recursive Education</strong> reserves the right to modify this Refund Policy at any time. Any
                changes will be posted on this page, and the updated policy will apply to all purchases made after the
                changes are posted.
            </p>

            <h4 className="title">Contact Us</h4>
            <ul>
                <li>Email: sekulhassan301@gmail.com</li>
                <li>Address: Savar, Dhaka , Jahangirnagar University.</li>
            </ul>

        </Container>
    );
}

export default Refund;
