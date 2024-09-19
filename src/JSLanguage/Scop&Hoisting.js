import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Hoisting() {
        return (
            <div className="p-3">
                    <span className="globalSubTitle">Scope (স্কোপ) : </span>
                    <div className="globalDescription">
                            স্কোপ হলো একটি ভেরিয়েবল বা ফাংশনের পরিসর যেখানে তা দৃশ্যমান এবং ব্যবহার করা যেতে পারে। জাভাস্ক্রিপ্টে মূলত দুই ধরনের স্কোপ থাকে: লেক্সিকাল (বা ব্লক) স্কোপ এবং গ্লোবাল স্কোপ।
                    </div>
                    <br />

                    <span className="globalSubTitle">1. Global Scope (গ্লোবাল স্কোপ):</span>
                    <br />
                    <div className="globalDescription">
                            যেকোনো ভেরিয়েবল যা গ্লোবাল স্কোপে ডিফাইন করা হয়, তা পুরো প্রোগ্রাম জুড়ে অ্যাক্সেসযোগ্য থাকে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let globalVar = "I am global";
function showGlobal() {
  console.log(globalVar);
}
showGlobal(); // আউটপুট: "I am global"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">2. Local Scope (লোকাল স্কোপ):</span>
                    <br />
                    <div className="globalDescription">
                            যেকোনো ভেরিয়েবল যা একটি ফাংশনের মধ্যে ডিফাইন করা হয়, তা শুধুমাত্র সেই ফাংশনের মধ্যে অ্যাক্সেসযোগ্য থাকে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`function showLocal() {
  let localVar = "I am local";
  console.log(localVar);
}
showLocal();
console.log(localVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">3. Block Scope (ব্লক স্কোপ):</span>
                    <br />
                    <div className="globalDescription">
                            ES6 থেকে, \`let\` এবং \`const\` দ্বারা ডিফাইন করা ভেরিয়েবলগুলো ব্লক স্কোপে থাকে, অর্থাৎ \`{}\` ব্রেসের মধ্যে সীমাবদ্ধ।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`function checkBlockScope() {
  if (true) {
    let blockVar = "I am inside block";
    console.log(blockVar);
  }
  console.log(blockVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)
}
checkBlockScope(); // আউটপুট: "I am inside block"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">Hoisting (হোস্টিং):</span>
                    <div className="globalDescription">
                            হোস্টিং হলো একটি জাভাস্ক্রিপ্ট ফিচার যা পরিবর্তনশীল এবং ফাংশন ডিক্লারেশনগুলোকে তাদের স্কোপের শীর্ষে নিয়ে আসে।
                    </div>
                    <br />

                    <span className="globalSubTitle">1. Variable Hoisting (ভেরিয়েবল হোস্টিং):</span>
                    <br />
                    <div className="globalDescription">
                            যখন একটি ভেরিয়েবল ডিক্লেয়ার করা হয়, তখন জাভাস্ক্রিপ্ট এটি স্কোপের শীর্ষে নিয়ে আসে। তবে, \`var\` দ্বারা ডিক্লেয়ার করা ভেরিয়েবলগুলোর ক্ষেত্রে কেবল ডিক্লারেশন হোস্টিং হয়, ইনিশিয়ালাইজেশন নয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`console.log(hoistedVar); // আউটপুট হবে: undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // আউটপুট হবে: "I am hoisted"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">2. Function Hoisting (ফাংশন হোস্টিং):</span>
                    <br />
                    <div className="globalDescription">
                            ফাংশন ডিক্লারেশনগুলো পুরোপুরি হোস্ট করা হয়, অর্থাৎ, ফাংশন কল করার আগে তা ব্যবহার করা সম্ভব।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`hoistedFunction(); // আউটপুট হবে: "I am hoisted function"
function hoistedFunction() {
  console.log("I am hoisted function");
}`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">3. Let and Const Hoisting (লেট এবং কনস্ট হোস্টিং):</span>
                    <br />
                    <div className="globalDescription">
                            \`let\` এবং \`const\` দ্বারা ডিক্লেয়ার করা ভেরিয়েবলগুলোর ক্ষেত্রে হোস্টিং ঘটে, কিন্তু তাদের ব্যবহার \`Temporal Dead Zone\` (TDZ) দ্বারা সীমাবদ্ধ। এর মানে হলো, তারা ডিক্লেয়ার না হওয়া পর্যন্ত ব্যবহার করা যাবে না।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`console.log(letVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)
let letVar = "I am let";`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">4. Example of TDZ:</span>
                    <br />
                    <div className="globalDescription">
                            TDZ প্রমাণিত করে যে, \`let\` এবং \`const\` ভেরিয়েবল তাদের ডিক্লারেশন লাইনের আগ পর্যন্ত অ্যাক্সেসযোগ্য নয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`function exampleTDZ() {
  console.log(tdVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)
  let tdVar = "I am in TDZ";
}
exampleTDZ();`}
                    </SyntaxHighlighter>
            </div>
        );
}

export default Hoisting;
