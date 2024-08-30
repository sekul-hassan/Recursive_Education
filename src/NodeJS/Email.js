import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function Email(props) {
    return (
        <div>
            <span className="globalSubTitle">Email Concept:</span> <br />
            <span>Email communication হলো একটি গুরুত্বপূর্ণ অংশ যে কোন modern web application এর। Node.js এ email পাঠানোর জন্য অনেক module রয়েছে। এর মধ্যে অন্যতম জনপ্রিয় হলো Nodemailer, যেটি ব্যবহার করে আপনি SMTP protocol এর মাধ্যমে email পাঠাতে পারেন।</span>
            <br /><br />

            <span className="globalSubTitle">Nodemailer Setup:</span> <br />
            <span>Nodemailer setup করার জন্য প্রথমে module টি install করতে হবে:</span>
            <br />
            <SyntaxHighlighter language="bash" style={solarizedlight}>
                {`npm install nodemailer`}
            </SyntaxHighlighter>
            <br /><br />

            <span className="globalSubTitle">Basic Usage Example:</span> <br />
            <span>নিচে একটি basic Nodemailer setup এর example দেওয়া হলো:</span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
    }
});

let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// এই কোডের মাধ্যমে আপনি একটি ইমেল পাঠাতে পারবেন Node.js থেকে
`}
            </SyntaxHighlighter>
            <br /><br />

            <span className="globalSubTitle">Explanation:</span> <br />
            <span>
                এখানে, আমরা Nodemailer module টি import করে একটি transporter তৈরি করেছি যা Gmail service ব্যবহার করে।
                এরপর mailOptions object এ ইমেল এর বিভিন্ন options (যেমন: from, to, subject, text) নির্ধারণ করেছি।
                সবশেষে, transporter.sendMail() ফাংশনটি ব্যবহার করে ইমেল পাঠানো হয়েছে।
            </span>
            <br /><br />

            <span className="globalSubTitle">Sending HTML Emails:</span> <br />
            <span>Nodemailer ব্যবহার করে আপনি HTML content সহ ইমেলও পাঠাতে পারেন:</span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: 'Test Email',
    html: '<h1>This is a test email sent from Node.js!</h1>'
};`}
            </SyntaxHighlighter>
            <br /><br />

            <span className="globalSubTitle">Attachments:</span> <br />
            <span>Nodemailer ব্যবহার করে ইমেলের সাথে file attachments ও পাঠানো যায়:</span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: 'Test Email with Attachment',
    text: 'Please find the attachment below.',
    attachments: [
        {   
            filename: 'text1.txt',
            path: './text1.txt'
        }
    ]
};`}
            </SyntaxHighlighter>
            <br /><br />

            <span className="globalSubTitle">Security Considerations:</span> <br />
            <span>SMTP server এর credentials এবং sensitive information গুলো environment variables এর মধ্যে রাখতে হবে। যেমন:</span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Environment variables ব্যবহার করে credentials নিরাপদ রাখা হয়
`}
            </SyntaxHighlighter>
        </div>
    );
}

export default Email;
