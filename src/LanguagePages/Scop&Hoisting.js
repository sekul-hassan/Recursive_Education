import React from 'react';

function Hoisting() {
    return (
        <div className="p-3">
            <span className="globalSubTitle">Scope (স্কোপ) : </span>
            <span>স্কোপ হলো একটি ভেরিয়েবল বা ফাংশনের পরিসর যেখানে তা দৃশ্যমান এবং ব্যবহার করা যেতে পারে। জাভাস্ক্রিপ্টে মূলত দুই ধরনের স্কোপ থাকে: লেক্সিকাল (বা ব্লক) স্কোপ এবং গ্লোবাল স্কোপ।</span>
            <br/>

            <span className="globalSubTitle">1. Global Scope (গ্লোবাল স্কোপ):</span> <br/>
            <span>যেকোনো ভেরিয়েবল যা গ্লোবাল স্কোপে ডিফাইন করা হয়, তা পুরো প্রোগ্রাম জুড়ে অ্যাক্সেসযোগ্য থাকে।</span>
            <br/>
            <code>
                {`let globalVar = "I am global";`} <br/>
                {`function showGlobal() {`} <br/>
                {`  console.log(globalVar);`} <br/>
                {`}`} <br/>
                {`showGlobal();`} <br/>
                {'// আউটপুট: "I am global"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">2. Local Scope (লোকাল স্কোপ):</span> <br/>
            <span>যেকোনো ভেরিয়েবল যা একটি ফাংশনের মধ্যে ডিফাইন করা হয়, তা শুধুমাত্র সেই ফাংশনের মধ্যে অ্যাক্সেসযোগ্য থাকে।</span>
            <br/>
            <code>
                {`function showLocal() {`} <br/>
                {`  let localVar = "I am local";`} <br/>
                {`  console.log(localVar);`} <br/>
                {`}`} <br/>
                {`showLocal();`} <br/>
                {`console.log(localVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)`} <br/>
                {'// আউটপুট: "I am local"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">3. Block Scope (ব্লক স্কোপ):</span> <br/>
            <span>ES6 থেকে, `let` এবং `const` দ্বারা ডিফাইন করা ভেরিয়েবলগুলো ব্লক স্কোপে থাকে, অর্থাৎ `{}` ব্রেসের মধ্যে সীমাবদ্ধ।</span>
            <br/>
            <code>
                {`function checkBlockScope() {`} <br/>
                {`  if (true) {`} <br/>
                {`    let blockVar = "I am inside block";`} <br/>
                {`    console.log(blockVar);`} <br/>
                {`  }`} <br/>
                {`  console.log(blockVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)`} <br/>
                {`}`} <br/>
                {`checkBlockScope();`} <br/>
                {'// আউটপুট: "I am inside block"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Hoisting (হোস্টিং):</span>
            <span>হোস্টিং হলো একটি জাভাস্ক্রিপ্ট ফিচার যা পরিবর্তনশীল এবং ফাংশন ডিক্লারেশনগুলোকে তাদের স্কোপের শীর্ষে নিয়ে আসে।</span>
            <br/>

            <span className="globalSubTitle">1. Variable Hoisting (ভেরিয়েবল হোস্টিং):</span> <br/>
            <span>যখন একটি ভেরিয়েবল ডিক্লেয়ার করা হয়, তখন জাভাস্ক্রিপ্ট এটি স্কোপের শীর্ষে নিয়ে আসে। তবে, `var` দ্বারা ডিক্লেয়ার করা ভেরিয়েবলগুলোর ক্ষেত্রে কেবল ডিক্লারেশন হোস্টিং হয়, ইনিশিয়ালাইজেশন নয়।</span>
            <br/>
            <code>
                {`console.log(hoistedVar); // আউটপুট হবে: undefined`} <br/>
                {`var hoistedVar = "I am hoisted";`} <br/>
                {`console.log(hoistedVar); // আউটপুট হবে: "I am hoisted"`} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">2. Function Hoisting (ফাংশন হোস্টিং):</span> <br/>
            <span>ফাংশন ডিক্লারেশনগুলো পুরোপুরি হোস্ট করা হয়, অর্থাৎ, ফাংশন কল করার আগে তা ব্যবহার করা সম্ভব।</span>
            <br/>
            <code>
                {`hoistedFunction(); // আউটপুট হবে: "I am hoisted function"`} <br/>
                {`function hoistedFunction() {`} <br/>
                {`  console.log("I am hoisted function");`} <br/>
                {`}`} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">3. Let and Const Hoisting (লেট এবং কনস্ট হোস্টিং):</span> <br/>
            <span>`let` এবং `const` দ্বারা ডিক্লেয়ার করা ভেরিয়েবলগুলোর ক্ষেত্রে হোস্টিং ঘটে, কিন্তু তাদের ব্যবহার `Temporal Dead Zone` (TDZ) দ্বারা সীমাবদ্ধ। এর মানে হলো, তারা ডিক্লেয়ার না হওয়া পর্যন্ত ব্যবহার করা যাবে না।</span>
            <br/>
            <code>
                {`console.log(letVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)`} <br/>
                {`let letVar = "I am let";`} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">4. Example of TDZ:</span> <br/>
            <span>TDZ প্রমাণিত করে যে, `let` এবং `const` ভেরিয়েবল তাদের ডিক্লারেশন লাইনের আগ পর্যন্ত অ্যাক্সেসযোগ্য নয়।</span>
            <br/>
            <code>
                {`function exampleTDZ() {`} <br/>
                {`  console.log(tdVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)`} <br/>
                {`  let tdVar = "I am in TDZ";`} <br/>
                {`}`} <br/>
                {`exampleTDZ();`} <br/>
            </code>
        </div>
    );
}

export default Hoisting;
