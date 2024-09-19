import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Condition() {
        return (
            <div className="mt-2">
                    <span className="globalSubTitle">Condition:</span>
                    <div className="globalDescription">
                            জাভাস্ক্রিপ্টে শর্ত বা condition ব্যবহারের মাধ্যমে আমরা একটি নির্দিষ্ট শর্ত পূরণ হলে নির্দিষ্ট কাজ করতে পারি।
                    </div>
                    <br />

                    <span className="globalSubTitle">if(condition)</span>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
// Output: "You are eligible to vote."`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">if-else</span>
                    <br />
                    <div className="globalDescription">
                            যদি শর্তটি সত্য হয়, তাহলে একটি কোড ব্লক চালানো হবে, আর যদি মিথ্যা হয়, তাহলে অন্য কোড ব্লকটি চালানো হবে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let age = 16;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
// Output: "You are not eligible to vote."`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">else if</span>
                    <br />
                    <div className="globalDescription">
                            যদি একটি শর্ত মিথ্যা হয়, তাহলে পরবর্তী শর্তগুলো পরীক্ষা করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output: "Grade: B"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">ternary operator (?:)</span>
                    <br />
                    <div className="globalDescription">
                            এক লাইনে শর্ত এবং দুটি সম্ভাব্য ফলাফলের মধ্যে একটিকে বাছাই করা যায়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);
// Output: "Eligible to vote"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">switch statement</span>
                    <br />
                    <div className="globalDescription">
                            একাধিক শর্তের মধ্যে একটি ম্যাচ খুঁজে পাওয়া এবং সেই অনুযায়ী কোড চালানো যায়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let day = 3;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: "Tuesday"`}
                    </SyntaxHighlighter>
                    <br />
            </div>
        );
}

export default Condition;
