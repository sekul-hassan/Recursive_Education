import React from 'react';
import { Container } from "react-bootstrap";

function DCL(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* GRANT Command Example */}
            <h3 className="title mt-3">GRANT Command Example</h3>
            <pre>
                <code>
                    {`GRANT SELECT, INSERT ON employees TO 'username';`}
                </code>
            </pre>
            <p>
                <code>GRANT</code> কমান্ডটি একটি নির্দিষ্ট ব্যবহারকারী বা রোলকে ডাটাবেজে নির্দিষ্ট অনুমতি (privileges) প্রদান করতে ব্যবহার করা হয়। উপরের উদাহরণে, <code>username</code> নামের ব্যবহারকারীকে <code>employees</code> টেবিলের উপর <code>SELECT</code> এবং <code>INSERT</code> অনুমতি প্রদান করা হয়েছে।
            </p>

            {/* REVOKE Command Example */}
            <h3 className="title mt-3">REVOKE Command Example</h3>
            <pre>
                <code>
                    {`REVOKE SELECT, INSERT ON employees FROM 'username';`}
                </code>
            </pre>
            <p>
                <code>REVOKE</code> কমান্ডটি পূর্বে প্রদানকৃত অনুমতিগুলি (privileges) অপসারণ করতে ব্যবহার করা হয়। উপরের উদাহরণে, <code>username</code> নামের ব্যবহারকারী থেকে <code>employees</code> টেবিলের উপর <code>SELECT</code> এবং <code>INSERT</code> অনুমতি অপসারণ করা হয়েছে।
            </p>

            {/* GRANT ALL PRIVILEGES Command Example */}
            <h3 className="title mt-3">GRANT ALL PRIVILEGES Command Example</h3>
            <pre>
                <code>
                    {`GRANT ALL PRIVILEGES ON database_name.* TO 'username';`}
                </code>
            </pre>
            <p>
                <code>GRANT ALL PRIVILEGES</code> কমান্ডটি একটি ব্যবহারকারীকে সম্পূর্ণ অনুমতি প্রদান করতে ব্যবহার করা হয়। উপরের উদাহরণে, <code>username</code> ব্যবহারকারীকে <code>database_name</code> ডাটাবেজের সব টেবিলের উপর সমস্ত অনুমতি প্রদান করা হয়েছে।
            </p>

            {/* REVOKE ALL PRIVILEGES Command Example */}
            <h3 className="title mt-3">REVOKE ALL PRIVILEGES Command Example</h3>
            <pre>
                <code>
                    {`REVOKE ALL PRIVILEGES ON database_name.* FROM 'username';`}
                </code>
            </pre>
            <p>
                <code>REVOKE ALL PRIVILEGES</code> কমান্ডটি পূর্বে প্রদানকৃত সমস্ত অনুমতি অপসারণ করতে ব্যবহার করা হয়। উপরের উদাহরণে, <code>username</code> ব্যবহারকারী থেকে <code>database_name</code> ডাটাবেজের সব টেবিলের উপর সমস্ত অনুমতি অপসারণ করা হয়েছে।
            </p>
        </Container>
    );
}

export default DCL;
