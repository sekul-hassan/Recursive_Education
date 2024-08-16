import React from 'react';

function Loops() {
    return (
        <div>
            <span className="globalSubTitle">Loops : </span>
            <span>জাভাস্ক্রিপ্টে loops ব্যবহারের মাধ্যমে আমরা একটি কাজকে বারবার নির্দিষ্ট সংখ্যক বার চালাতে পারি।</span>
            <br/><br/>

            <span className="globalSubTitle">for loop</span> <br/>
            <span>for loop সাধারণত নির্দিষ্ট সংখ্যক বার কোড ব্লক চালানোর জন্য ব্যবহৃত হয়।</span>
            <br/>
            <code>
                {`for (let i = 0; i < 5; i++) {`} <br/>
                {`  console.log("Number: " + i);`} <br/>
                {`}`} <br/>
                {'// আউটপুট: "Number: 0", "Number: 1", "Number: 2", "Number: 3", "Number: 4"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">while loop</span> <br/>
            <span>while loop তখন পর্যন্ত কোড ব্লক চালিয়ে যেতে থাকে যতক্ষণ না নির্দিষ্ট শর্তটি সত্য থাকে।</span>
            <br/>
            <code>
                {`let count = 0;`} <br/>
                {`while (count < 5) {`} <br/>
                {`  console.log("Count: " + count);`} <br/>
                {`  count++;`} <br/>
                {`}`} <br/>
                {'// আউটপুট: "Count: 0", "Count: 1", "Count: 2", "Count: 3", "Count: 4"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">do...while loop</span> <br/>
            <span>do...while loop কমপক্ষে একবার কোড ব্লক চালায়, তারপর শর্তটি চেক করে।</span>
            <br/>
            <code>
                {`let count = 0;`} <br/>
                {`do {`} <br/>
                {`  console.log("Count: " + count);`} <br/>
                {`  count++;`} <br/>
                {`} while (count < 5);`} <br/>
                {'// আউটপুট: "Count: 0", "Count: 1", "Count: 2", "Count: 3", "Count: 4"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">for...of loop</span> <br/>
            <span>for...of loop একটি iterable object যেমন array এর প্রতিটি এলিমেন্টের জন্য কোড ব্লক চালায়।</span>
            <br/>
            <code>
                {`let numbers = [10, 20, 30];`} <br/>
                {`for (let number of numbers) {`} <br/>
                {`  console.log("Number: " + number);`} <br/>
                {`}`} <br/>
                {'// আউটপুট: "Number: 10", "Number: 20", "Number: 30"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">for...in loop</span> <br/>
            <span>for...in loop একটি object এর properties গুলোর উপর loop চালায়।</span>
            <br/>
            <code>
                {`let person = {name: "John", age: 30, job: "Developer"};`} <br/>
                {`for (let key in person) {`} <br/>
                {`  console.log(key + ": " + person[key]);`} <br/>
                {`}`} <br/>
                {'// আউটপুট: "name: John", "age: 30", "job: Developer"'} <br/>
            </code>
            <br/>
        </div>
    );
}

export default Loops;
