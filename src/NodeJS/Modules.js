import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function Modules(props) {
        return (
            <div>
                    <span className="globalSubTitle">Node.js Modules :</span> <br/>
                    <span>Node.js এ অনেক বিল্ট-ইন মডিউল রয়েছে যা আপনার অ্যাপ্লিকেশনের বিভিন্ন কাজ সম্পাদনে সাহায্য করে। নিচে কিছু গুরুত্বপূর্ণ মডিউল এবং তাদের ব্যবহারের উদাহরণ দেওয়া হলো:</span>
                    <br/><br/>

                    <span className="globalSubTitle">1. fs (File System):</span> <br/>
                    <span>এই মডিউলটি ফাইল এবং ডিরেক্টরি পরিচালনা করতে ব্যবহৃত হয়।</span>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});`}
                    </SyntaxHighlighter>


                    <span className="globalSubTitle">2. http:</span> <br/>
                    <span>এই মডিউলটি HTTP সার্ভার তৈরি করতে ব্যবহৃত হয়।</span>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});`}
                    </SyntaxHighlighter>

                    <span className="globalSubTitle">3. path:</span> <br/>
                    <span>ফাইল এবং ডিরেক্টরির path পরিচালনা করার জন্য এই মডিউলটি ব্যবহৃত হয়।</span>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const path = require('path');
const filePath = path.join('/home/user', 'docs', 'file.txt');
console.log(filePath);`}
                    </SyntaxHighlighter>


                    <span className="globalSubTitle">4. os:</span> <br/>
                    <span>সিস্টেমের তথ্য পেতে এই মডিউলটি ব্যবহৃত হয়।</span>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const os = require('os');
console.log('OS platform:', os.platform());
console.log('OS release:', os.release());`}
                    </SyntaxHighlighter>

                    <span className="globalSubTitle">5. url:</span> <br/>
                    <span>URL এর অংশগুলো পার্স করতে এই মডিউলটি ব্যবহৃত হয়।</span>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const url = require('url');
const myURL = new URL('https://example.com/path?name=abc');
console.log(myURL.hostname);`}
                    </SyntaxHighlighter>


                    <span className="globalSubTitle">6. events:</span> <br/>
                    <span>ইভেন্ট ইমিটার তৈরি করতে এই মডিউলটি ব্যবহৃত হয়।</span>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {
    console.log('An event occurred!');
});
myEmitter.emit('event');`}
                    </SyntaxHighlighter>

                    <span className="globalSubTitle">7. formidable:</span> <br/>
                    <span>এই মডিউলটি ফাইল আপলোড এবং ফর্ম ডাটা পার্স করতে ব্যবহৃত হয়।</span>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const formidable = require('formidable');
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('File uploaded successfully');
            res.end();
        });
    }
});
server.listen(8080);`}
                    </SyntaxHighlighter>

                    <span className="globalSubTitle">8. crypto:</span> <br/>
                    <span>এই মডিউলটি ক্রিপ্টোগ্রাফি সংক্রান্ত কাজ যেমন ডেটা এনক্রিপশন এবং ডিক্রিপশন করতে ব্যবহৃত হয়।</span>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const crypto = require('crypto');
const secret = 'mySecret';
const hash = crypto.createHmac('sha256', secret)
    .update('Hello World')
    .digest('hex');
console.log(hash);`}
                    </SyntaxHighlighter>


                    <span className="globalSubTitle">9. util:</span> <br/>
                    <span>এই মডিউলটি বিভিন্ন ইউটিলিটি ফাংশন প্রদান করে, যেমন callback-based ফাংশনকে promise-based ফাংশনে রূপান্তর করা।</span>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
readFile('example.txt', 'utf8').then(data => {
    console.log(data);
}).catch(err => {
    console.error(err);
});`}
                    </SyntaxHighlighter>

            </div>
        );
}

export default Modules;
