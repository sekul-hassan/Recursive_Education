import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Number() {
        return (
            <div className="mt-2">
                    <span className="globalSubTitle">Number Operations:</span>
                    <div className="globalDescription">
                            JavaScript-এ Number টাইপের Data নিয়ে বিভিন্ন ধরনের অপারেশন করা যায়।
                    </div>
                    <br />

                    <span className="globalSubTitle">1. Number Properties:</span>
                    <br />
                    <div className="globalDescription">
                            JavaScript-এর Number এর কিছু property আছে, যেমন <code>MAX_VALUE</code>, <code>MIN_VALUE</code>, <code>NaN</code> ইত্যাদি।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(Number.NaN); // Output: NaN (Not a Number)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">2. Number Methods:</span>
                    <br />
                    <div className="globalDescription">
                            JavaScript-এ Number-এর জন্য অনেক গুলো মেথড আছে। নিচে কিছু উল্লেখযোগ্য মেথডের উদাহরণ দেওয়া হলো:
                    </div>
                    <br />

                    <span className="globalSubTitle">toFixed():</span>
                    <br />
                    <div className="globalDescription">
                            এই মেথডটি একটি নম্বরের নির্দিষ্ট সংখ্যক দশমিক স্থান পর্যন্ত কাটে এবং একটি স্ট্রিং রিটার্ন করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let num = 5.6789;
let result = num.toFixed(2);
console.log(result); // Output: "5.68"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">toString():</span>
                    <br />
                    <div className="globalDescription">
                            এই মেথডটি একটি নম্বরকে স্ট্রিং-এ রূপান্তর করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let num = 123;
let str = num.toString();
console.log(str); // Output: "123"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">parseInt() & parseFloat():</span>
                    <br />
                    <div className="globalDescription">
                            এই মেথডগুলো স্ট্রিং থেকে যথাক্রমে ইন্টিজার ও ফ্লোট সংখ্যা বের করতে ব্যবহার করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let intNum = parseInt("123");
let floatNum = parseFloat("12.34");
console.log(intNum); // Output: 123
console.log(floatNum); // Output: 12.34`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">3. BigInt:</span>
                    <br />
                    <div className="globalDescription">
                            JavaScript-এ <code>BigInt</code> হল একটি ডেটা টাইপ যা খুব বড় সংখ্যার সাথে কাজ করতে ব্যবহৃত হয়। এটি <code>n</code> যোগ করে define করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let bigNum = 1234567890123456789012345678901234567890n;
console.log(bigNum); // Output: 1234567890123456789012345678901234567890n
let sum = bigNum + 10n;
console.log(sum); // Output: 1234567890123456789012345678901234567900n`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">4. BigInt vs Number:</span>
                    <br />
                    <div className="globalDescription">
                            BigInt এবং Number এর মধ্যে পার্থক্য হচ্ছে, BigInt অনেক বড় সংখ্যার সাথে কাজ করতে পারে এবং এটি অপ্রয়োজনীয় দশমিক সংখ্যা কাটতে পারে না।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let bigNum = 12345678901234567890n;
let num = 12345678901234567890;
console.log(bigNum); // Output: 12345678901234567890n
console.log(num); // Output: 12345678901234567000 (Precision loss occurs in Number)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">Note:</span>
                    <br />
                    <div className="globalDescription">
                            BigInt এবং Number টাইপের ভ্যালু একসাথে সরাসরি ব্যবহার করা যায় না, এজন্য টাইপ কনভার্সন করতে হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let bigNum = 100n;
let num = 20;
// console.log(bigNum + num); // Error
let result = bigNum + BigInt(num);
console.log(result); // Output: 120n`}
                    </SyntaxHighlighter>
            </div>
        );
}

export default Number;
