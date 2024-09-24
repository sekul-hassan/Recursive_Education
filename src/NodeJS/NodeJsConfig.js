
const NodeJsConfig = {
    intro:[
        {
            title: "Introduction to Node.js",
            description: "Node.js হল একটি ওপেন সোর্স, cross-platform runtime environment, যা server-side এবং networking applications ডেভেলপ করতে ব্যবহৃত হয়। এটি Google-এর V8 JavaScript engine এর উপর ভিত্তি করে কাজ করে, এবং জাভাস্ক্রিপ্ট ব্যবহার করে সার্ভার-সাইড স্ক্রিপ্টিং এর সুবিধা প্রদান করে।",
        },
        {
            title: "Features of Node.js",
            description: "Node.js এর কিছু গুরুত্বপূর্ণ ফিচারগুলো হল:",
            minTitle: [
                {
                    title: "Asynchronous and Event-Driven",
                    description: "Node.js asynchronous অর্থাৎ non-blocking I/O operations সাপোর্ট করে, যা performance enhance করে।"
                },
                {
                    title: "Single-Threaded",
                    description: "Node.js single-threaded হলেও, এটি concurrent requests handle করতে পারে event loop এর মাধ্যমে।"
                },
                {
                    title: "Scalability",
                    description: "Node.js applications খুব সহজেই horizontal scaling করা যায়।"
                },
                {
                    title: "Cross-Platform",
                    description: "Node.js Windows, Linux, এবং macOS সহ বিভিন্ন platform এ চলতে পারে।"
                },
            ]
        },
        {
            title: "Setting Up Node.js",
            description: "Node.js সেট আপ করতে প্রথমে official Node.js website থেকে installer ডাউনলোড করতে হবে। ইনস্টলেশনের পরে, terminal এ node -v এবং npm -v কমান্ড ব্যবহার করে node এবং npm এর version চেক করতে পারবেন।"
        },
        {
            title: "Creating a Basic Node.js Server",
            description: "নিচের কোডটি একটি basic Node.js server তৈরি করে যা HTTP request handle করে:",
            code: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello, World!');\n});\n\nserver.listen(3000, () => {\n    console.log('Server running at http://localhost:3000/');\n});",
        },
        {
            description: " codeExplanation: \"এই কোডটি একটি HTTP server তৈরি করে যা port 3000 এ listen করে এবং 'Hello, World!' মেসেজ রেসপন্স হিসেবে পাঠায়।\""
        },
        {
            title: "Conclusion",
            description: "Node.js একটি powerful tool server-side applications ডেভেলপমেন্ট এর জন্য। এর asynchronous এবং event-driven architecture এর কারণে এটি high performance এবং scalable applications তৈরি করতে সহায়ক।"
        }
    ],
    modules:[
        {
            title: "Node.js Modules",
            description: "Node.js এ অনেক বিল্ট-ইন মডিউল রয়েছে যা আপনার অ্যাপ্লিকেশনের বিভিন্ন কাজ সম্পাদনে সাহায্য করে। নিচে কিছু গুরুত্বপূর্ণ মডিউল এবং তাদের ব্যবহারের উদাহরণ দেওয়া হলো:",
            minTitle: [
                {
                    title: "fs (File System)",
                    description: "এই মডিউলটি ফাইল এবং ডিরেক্টরি পরিচালনা করতে ব্যবহৃত হয়।",
                    code: "const fs = require('fs');\nfs.readFile('example.txt', 'utf8', (err, data) => {\n    if (err) throw err;\n    console.log(data);\n});"
                },
                {
                    title: "http",
                    description: "এই মডিউলটি HTTP সার্ভার তৈরি করতে ব্যবহৃত হয়।",
                    code: "const http = require('http');\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello World');\n});\nserver.listen(3000, '127.0.0.1', () => {\n    console.log('Server running at http://127.0.0.1:3000/');\n});"
                },
                {
                    title: "path",
                    description: "ফাইল এবং ডিরেক্টরির path পরিচালনা করার জন্য এই মডিউলটি ব্যবহৃত হয়।",
                    code: "const path = require('path');\nconst filePath = path.join('/home/user', 'docs', 'file.txt');\nconsole.log(filePath);"
                },
                {
                    title: "os",
                    description: "সিস্টেমের তথ্য পেতে এই মডিউলটি ব্যবহৃত হয়।",
                    code: "const os = require('os');\nconsole.log('OS platform:', os.platform());\nconsole.log('OS release:', os.release());"
                },
                {
                    title: "url",
                    description: "URL এর অংশগুলো পার্স করতে এই মডিউলটি ব্যবহৃত হয়।",
                    code: "const url = require('url');\nconst myURL = new URL('https://example.com/path?name=abc');\nconsole.log(myURL.hostname);"
                },
                {
                    title: "events",
                    description: "ইভেন্ট ইমিটার তৈরি করতে এই মডিউলটি ব্যবহৃত হয়।",
                    code: "const EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\nmyEmitter.on('event', () => {\n    console.log('An event occurred!');\n});\nmyEmitter.emit('event');"
                },
                {
                    title: "formidable",
                    description: "এই মডিউলটি ফাইল আপলোড এবং ফর্ম ডাটা পার্স করতে ব্যবহৃত হয়।",
                    code: "const formidable = require('formidable');\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {\n        const form = new formidable.IncomingForm();\n        form.parse(req, (err, fields, files) => {\n            res.writeHead(200, {'Content-Type': 'text/plain'});\n            res.write('File uploaded successfully');\n            res.end();\n        });\n    }\n});\nserver.listen(8080);"
                },
                {
                    title: "crypto",
                    description: "এই মডিউলটি ক্রিপ্টোগ্রাফি সংক্রান্ত কাজ যেমন ডেটা এনক্রিপশন এবং ডিক্রিপশন করতে ব্যবহৃত হয়।",
                    code: "const crypto = require('crypto');\nconst secret = 'mySecret';\nconst hash = crypto.createHmac('sha256', secret)\n    .update('Hello World')\n    .digest('hex');\nconsole.log(hash);"
                },
                {
                    title: "util",
                    description: "এই মডিউলটি বিভিন্ন ইউটিলিটি ফাংশন প্রদান করে, যেমন callback-based ফাংশনকে promise-based ফাংশনে রূপান্তর করা।",
                    code: "const util = require('util');\nconst fs = require('fs');\nconst readFile = util.promisify(fs.readFile);\nreadFile('example.txt', 'utf8').then(data => {\n    console.log(data);\n}).catch(err => {\n    console.error(err);\n});"
                }
            ]
        }
    ],
    email:[
        {
            title: "Email Concept",
            description: "Email communication হলো একটি গুরুত্বপূর্ণ অংশ যে কোন modern web application এর। Node.js এ email পাঠানোর জন্য অনেক module রয়েছে। এর মধ্যে অন্যতম জনপ্রিয় হলো Nodemailer, যেটি ব্যবহার করে আপনি SMTP protocol এর মাধ্যমে email পাঠাতে পারেন।",
            minTitle: [
                {
                    title: "Nodemailer Setup",
                    description: "Nodemailer setup করার জন্য প্রথমে module টি install করতে হবে:\nnpm install nodemailer"
                },
                {
                    title: "Basic Usage Example",
                    description: "নিচে একটি basic Nodemailer setup এর example দেওয়া হলো:",
                    code: "const nodemailer = require('nodemailer');\n\nlet transporter = nodemailer.createTransport({\n    service: 'gmail',\n    auth: {\n        user: 'your-email@gmail.com',\n        pass: 'your-password'\n    }\n});\n\nlet mailOptions = {\n    from: 'your-email@gmail.com',\n    to: 'recipient-email@gmail.com',\n    subject: 'Test Email',\n    text: 'This is a test email sent from Node.js!'\n};\n\ntransporter.sendMail(mailOptions, function(error, info){\n    if (error) {\n        console.log(error);\n    } else {\n        console.log('Email sent: ' + info.response);\n    }\n});"
                },
                {
                    title: "Sending HTML Emails",
                    description: "Nodemailer ব্যবহার করে আপনি HTML content সহ ইমেলও পাঠাতে পারেন:",
                    code: "let mailOptions = {\n    from: 'your-email@gmail.com',\n    to: 'recipient-email@gmail.com',\n    subject: 'Test Email',\n    html: '<h1>This is a test email sent from Node.js!</h1>'\n};"
                },
                {
                    title: "Attachments",
                    description: "Nodemailer ব্যবহার করে ইমেলের সাথে file attachments ও পাঠানো যায়:",
                    code: "let mailOptions = {\n    from: 'your-email@gmail.com',\n    to: 'recipient-email@gmail.com',\n    subject: 'Test Email with Attachment',\n    text: 'Please find the attachment below.',\n    attachments: [\n        {   \n            filename: 'text1.txt',\n            path: './text1.txt'\n        }\n    ]\n};"
                },
                {
                    title: "Security Considerations",
                    description: "SMTP server এর credentials এবং sensitive information গুলো environment variables এর মধ্যে রাখতে হবে। যেমন:",
                    code: "const nodemailer = require('nodemailer');\n\nlet transporter = nodemailer.createTransport({\n    service: 'gmail',\n    auth: {\n        user: process.env.EMAIL_USER,\n        pass: process.env.EMAIL_PASS\n    }\n});"
                }
            ]
        }

    ]
}

export default NodeJsConfig;