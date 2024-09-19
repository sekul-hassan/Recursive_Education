import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Bitwise() {
        return (
            <div className="mt-2">
                    <span className="globalSubTitle">Bitwise Operators (বিটওয়াইজ অপারেটর): </span>
                    <div className="globalDescription">
                            বিটওয়াইজ অপারেটরগুলো সংখ্যার বিটের উপর কাজ করে। জাভাস্ক্রিপ্টে বিভিন্ন বিটওয়াইজ অপারেটর ব্যবহার করা হয়:
                    </div>
                    <br />

                    <span className="globalSubTitle">1. AND (বিটওয়াইজ এন্ড) - &amp;</span>
                    <br />
                    <div className="globalDescription">
                            এই অপারেটরটি দুইটি বিটের মধ্যে একটি বিটওয়াইজ এন্ড অপারেশন করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let a = 5; // বিট: 0101
let b = 3; // বিট: 0011
let result = a & b;
console.log(result);
// Output: 1 (বিট: 0001)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">2. OR (বিটওয়াইজ অর) - |</span>
                    <br />
                    <div className="globalDescription">
                            এই অপারেটরটি দুইটি বিটের মধ্যে একটি বিটওয়াইজ অর অপারেশন করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let a = 5; // বিট: 0101
let b = 3; // বিট: 0011
let result = a | b;
console.log(result);
// Output: 7 (বিট: 0111)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">3. XOR (বিটওয়াইজ এক্সওআর) - ^</span>
                    <br />
                    <div className="globalDescription">
                            এই অপারেটরটি দুইটি বিটের মধ্যে একটি বিটওয়াইজ এক্সওআর অপারেশন করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let a = 5; // বিট: 0101
let b = 3; // বিট: 0011
let result = a ^ b;
console.log(result);
// Output: 6 (বিট: 0110)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">4. NOT (বিটওয়াইজ নট) - ~</span>
                    <br />
                    <div className="globalDescription">
                            এই অপারেটরটি একটি বিটের প্রতিটি বিটের উল্টো করে দেয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let a = 5; // বিট: 0101
let result = ~a;
console.log(result);
// Output: -6 (বিট: 1010)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">5. Left Shift (বিটওয়াইজ লেফট শিফট) - {"<<"}</span>
                    <br />
                    <div className="globalDescription">
                            এই অপারেটরটি বিটগুলোকে বাম দিকে সরিয়ে দেয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let a = 5; // বিট: 00000101
let result = a << 2;
console.log(result);
// Output: 20 (বিট: 00010100)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">6. Right Shift (বিটওয়াইজ রাইট শিফট) - >></span>
                    <br />
                    <div className="globalDescription">
                            এই অপারেটরটি বিটগুলোকে ডান দিকে সরিয়ে দেয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let a = 20; // বিট: 00010100
let result = a >> 2;
console.log(result);
// Output: 5 (বিট: 00000101)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">7. Unsigned Right Shift (বিটওয়াইজ আনসাইনড রাইট শিফট) - >>></span>
                    <br />
                    <div className="globalDescription">
                            এই অপারেটরটি সাইন বিটকে উপেক্ষা করে বিটগুলোকে ডান দিকে সরিয়ে দেয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let a = -20; // বিট: 11101100
let result = a >>> 2;
console.log(result);
// Output: 1073741819`}
                    </SyntaxHighlighter>
                    <br />
            </div>
        );
}

export default Bitwise;
