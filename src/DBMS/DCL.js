import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function DCL(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* GRANT Command Example */}
            <h3 className="title mt-3">GRANT Command Example</h3>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`GRANT SELECT, INSERT ON employees TO 'username';`}
            </SyntaxHighlighter>
            <div className="globalDescription">
                <code>GRANT</code> কমান্ডটি একটি নির্দিষ্ট ব্যবহারকারী বা রোলকে ডাটাবেজে নির্দিষ্ট অনুমতি (privileges) প্রদান করতে ব্যবহার করা হয়। উপরের উদাহরণে, <code>username</code> নামের ব্যবহারকারীকে <code>employees</code> টেবিলের উপর <code>SELECT</code> এবং <code>INSERT</code> অনুমতি প্রদান করা হয়েছে।
            </div>

            {/* REVOKE Command Example */}
            <h3 className="title mt-3">REVOKE Command Example</h3>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`REVOKE SELECT, INSERT ON employees FROM 'username';`}
            </SyntaxHighlighter>
            <div className="globalDescription">
                <code>REVOKE</code> কমান্ডটি পূর্বে প্রদানকৃত অনুমতিগুলি (privileges) অপসারণ করতে ব্যবহার করা হয়। উপরের উদাহরণে, <code>username</code> নামের ব্যবহারকারী থেকে <code>employees</code> টেবিলের উপর <code>SELECT</code> এবং <code>INSERT</code> অনুমতি অপসারণ করা হয়েছে।
            </div>

            {/* GRANT ALL PRIVILEGES Command Example */}
            <h3 className="title mt-3">GRANT ALL PRIVILEGES Command Example</h3>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`GRANT ALL PRIVILEGES ON database_name.* TO 'username';`}
            </SyntaxHighlighter>
            <div className="globalDescription">
                <code>GRANT ALL PRIVILEGES</code> কমান্ডটি একটি ব্যবহারকারীকে সম্পূর্ণ অনুমতি প্রদান করতে ব্যবহার করা হয়। উপরের উদাহরণে, <code>username</code> ব্যবহারকারীকে <code>database_name</code> ডাটাবেজের সব টেবিলের উপর সমস্ত অনুমতি প্রদান করা হয়েছে।
            </div>

            {/* REVOKE ALL PRIVILEGES Command Example */}
            <h3 className="title mt-3">REVOKE ALL PRIVILEGES Command Example</h3>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`REVOKE ALL PRIVILEGES ON database_name.* FROM 'username';`}
            </SyntaxHighlighter>
            <div className="globalDescription">
                <code>REVOKE ALL PRIVILEGES</code> কমান্ডটি পূর্বে প্রদানকৃত সমস্ত অনুমতি অপসারণ করতে ব্যবহার করা হয়। উপরের উদাহরণে, <code>username</code> ব্যবহারকারী থেকে <code>database_name</code> ডাটাবেজের সব টেবিলের উপর সমস্ত অনুমতি অপসারণ করা হয়েছে।
            </div>
        </Container>
    );
}

export default DCL;
