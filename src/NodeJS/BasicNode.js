import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function BasicNode() {
    return (
        <div className="globalDescription">
            <span className="globalSubTitle">Introduction to Node.js:</span>
            <span>Node.js হল একটি ওপেন সোর্স, cross-platform runtime environment, যা server-side এবং networking applications ডেভেলপ করতে ব্যবহৃত হয়। এটি Google-এর V8 JavaScript engine এর উপর ভিত্তি করে কাজ করে, এবং জাভাস্ক্রিপ্ট ব্যবহার করে সার্ভার-সাইড স্ক্রিপ্টিং এর সুবিধা প্রদান করে।</span>
            <br/><br/>

            <span className="globalSubTitle">Features of Node.js:</span>
            <span>Node.js এর কিছু গুরুত্বপূর্ণ ফিচারগুলো হল:</span>
            <br/>
            <ul>
                <li><b>Asynchronous and Event-Driven:</b> Node.js asynchronous অর্থাৎ non-blocking I/O operations সাপোর্ট করে, যা performance enhance করে।</li>
                <li><b>Single-Threaded:</b> Node.js single-threaded হলেও, এটি concurrent requests handle করতে পারে event loop এর মাধ্যমে।</li>
                <li><b>Scalability:</b> Node.js applications খুব সহজেই horizontal scaling করা যায়।</li>
                <li><b>Cross-Platform:</b> Node.js Windows, Linux, এবং macOS সহ বিভিন্ন platform এ চলতে পারে।</li>
            </ul>
            <br/>

            <span className="globalSubTitle">Setting Up Node.js:</span>
            <span>Node.js সেট আপ করতে প্রথমে official Node.js website থেকে installer ডাউনলোড করতে হবে। ইনস্টলেশনের পরে, terminal এ <code>node -v</code> এবং <code>npm -v</code> কমান্ড ব্যবহার করে node এবং npm এর version চেক করতে পারবেন।</span>
            <br/><br/>

            <span className="globalSubTitle">Creating a Basic Node.js Server:</span>
            <span>নিচের কোডটি একটি basic Node.js server তৈরি করে যা HTTP request handle করে:</span>
            <br/>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
`}
            </SyntaxHighlighter>
            <br />
            <span>এই কোডটি একটি HTTP server তৈরি করে যা port 3000 এ listen করে এবং "Hello, World!" মেসেজ রেসপন্স হিসেবে পাঠায়।</span>
            <br/><br/>

            <span className="globalSubTitle">Conclusion:</span>
            <span>Node.js একটি powerful tool server-side applications ডেভেলপমেন্ট এর জন্য। এর asynchronous এবং event-driven architecture এর কারণে এটি high performance এবং scalable applications তৈরি করতে সহায়ক।</span>
            <br/>
        </div>
    );
}

export default BasicNode;
