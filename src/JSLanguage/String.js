import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function String() {
        return (
            <div className="mt-2">
                    <span className="globalSubTitle">String Operations:</span>
                    <div className="globalDescription">
                            JavaScript-এ বিভিন্ন স্ট্রিং অপারেশন করা যায় যা ডাটা ম্যানিপুলেশনে অনেক কাজে আসে।
                    </div>
                    <br />

                    <span className="globalSubTitle">1. Length Property:</span>
                    <br />
                    <div className="globalDescription">
                            স্ট্রিং এর দৈর্ঘ্য বের করতে <code>length</code> প্রপার্টি ব্যবহার করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let text = "Hello, World!";
console.log(text.length); // Output: 13`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">2. String Concatenation:</span>
                    <br />
                    <div className="globalDescription">
                            দুইটি বা তার বেশি স্ট্রিং একত্রিত করতে <code>+</code> অপারেটর বা <code>concat()</code> মেথড ব্যবহার করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let str1 = "Hello";
let str2 = "World";
let result = str1 + ", " + str2 + "!";
console.log(result); // Output: "Hello, World!"

let resultConcat = str1.concat(", ", str2, "!");
console.log(resultConcat); // Output: "Hello, World!"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">3. String to UpperCase:</span>
                    <br />
                    <div className="globalDescription">
                            স্ট্রিং এর সমস্ত ক্যারেক্টারকে uppercase (বড় হাতের অক্ষর) এ রূপান্তর করতে <code>toUpperCase()</code> মেথড ব্যবহার করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let text = "Hello, World!";
let upperText = text.toUpperCase();
console.log(upperText); // Output: "HELLO, WORLD!"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">4. String to LowerCase:</span>
                    <br />
                    <div className="globalDescription">
                            স্ট্রিং এর সমস্ত ক্যারেক্টারকে lowercase (ছোট হাতের অক্ষর) এ রূপান্তর করতে <code>toLowerCase()</code> মেথড ব্যবহার করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let text = "Hello, World!";
let lowerText = text.toLowerCase();
console.log(lowerText); // Output: "hello, world!"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">5. String Slice:</span>
                    <br />
                    <div className="globalDescription">
                            স্ট্রিং এর নির্দিষ্ট অংশ কেটে বের করতে <code>slice()</code> মেথড ব্যবহার করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let text = "Hello, World!";
let slicedText = text.slice(7, 12);
console.log(slicedText); // Output: "World"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">6. String Replace:</span>
                    <br />
                    <div className="globalDescription">
                            স্ট্রিং এর নির্দিষ্ট অংশকে নতুন স্ট্রিং দিয়ে প্রতিস্থাপন করতে <code>replace()</code> মেথড ব্যবহার করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let text = "Hello, World!";
let newText = text.replace("World", "Universe");
console.log(newText); // Output: "Hello, Universe!"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">7. String Split:</span>
                    <br />
                    <div className="globalDescription">
                            স্ট্রিং এর অংশগুলোকে আলাদা আলাদা করে array তে পরিণত করতে <code>split()</code> মেথড ব্যবহার করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let text = "Hello, World!";
let arr = text.split(", ");
console.log(arr); // Output: ["Hello", "World!"]`}
                    </SyntaxHighlighter>
                    <br />
            </div>
        );
}

export default String;
