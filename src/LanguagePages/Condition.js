import React from 'react';

function Condition() {
    return (
        <div>
            <span className="globalSubTitle">Condition : </span>
            <span>জাভাস্ক্রিপ্টে শর্ত বা condition ব্যবহারের মাধ্যমে আমরা একটি নির্দিষ্ট শর্ত পূরণ হলে নির্দিষ্ট কাজ করতে পারি।</span>
            <br/><br/>

            <span className="globalSubTitle">if(condition)</span> <br/>
            <code>
                {`let age = 18;`} <br/>
                {`if (age >= 18) {`} <br/>
                {`  console.log("You are eligible to vote.");`} <br/>
                {`}`} <br/>
                {'// আউটপুট: "You are eligible to vote."'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">if-else</span> <br/>
            <span>যদি শর্তটি সত্য হয়, তাহলে একটি কোড ব্লক চালানো হবে, আর যদি মিথ্যা হয়, তাহলে অন্য কোড ব্লকটি চালানো হবে।</span>
            <br/>
            <code>
                {`let age = 16;`} <br/>
                {`if (age >= 18) {`} <br/>
                {`  console.log("You are eligible to vote.");`} <br/>
                {`} else {`} <br/>
                {`  console.log("You are not eligible to vote.");`} <br/>
                {`}`} <br/>
                {'// আউটপুট: "You are not eligible to vote."'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">else if</span> <br/>
            <span>যদি একটি শর্ত মিথ্যা হয়, তাহলে পরবর্তী শর্তগুলো পরীক্ষা করা হয়।</span>
            <br/>
            <code>
                {`let score = 85;`} <br/>
                {`if (score >= 90) {`} <br/>
                {`  console.log("Grade: A");`} <br/>
                {`} else if (score >= 80) {`} <br/>
                {`  console.log("Grade: B");`} <br/>
                {`} else if (score >= 70) {`} <br/>
                {`  console.log("Grade: C");`} <br/>
                {`} else {`} <br/>
                {`  console.log("Grade: F");`} <br/>
                {`}`} <br/>
                {'// আউটপুট: "Grade: B"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">ternary operator (?:)</span> <br/>
            <span>এক লাইনে শর্ত এবং দুটি সম্ভাব্য ফলাফলের মধ্যে একটিকে বাছাই করা যায়।</span>
            <br/>
            <code>
                {`let age = 18;`} <br/>
                {`let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";`} <br/>
                {`console.log(eligibility);`} <br/>
                {'// আউটপুট: "Eligible to vote"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">switch statement</span> <br/>
            <span>একাধিক শর্তের মধ্যে একটি ম্যাচ খুঁজে পাওয়া এবং সেই অনুযায়ী কোড চালানো যায়।</span>
            <br/>
            <code>
                {`let day = 3;`} <br/>
                {`switch (day) {`} <br/>
                {`  case 1:`} <br/>
                {`    console.log("Sunday");`} <br/>
                {`    break;`} <br/>
                {`  case 2:`} <br/>
                {`    console.log("Monday");`} <br/>
                {`    break;`} <br/>
                {`  case 3:`} <br/>
                {`    console.log("Tuesday");`} <br/>
                {`    break;`} <br/>
                {`  default:`} <br/>
                {`    console.log("Invalid day");`} <br/>
                {`}`} <br/>
                {'// আউটপুট: "Tuesday"'} <br/>
            </code>
            <br/>
        </div>
    );
}

export default Condition;
