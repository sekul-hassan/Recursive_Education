import React from 'react';

function AsyncAwait() {
    return (
        <div>
            <span className="globalSubTitle">Async and Await : </span>
            <span>JavaScript-এ async এবং await কীওয়ার্ডগুলো ব্যবহার করে asynchronous কোড আরও সহজে লেখা যায়। এগুলো Promises এর সাথে কাজ করে এবং কোডকে synchronous কোডের মতোই পড়তে সহজ করে তোলে।</span>
            <br/>

            <span className="globalSubTitle">1. Async Function (অ্যাসিঙ্ক ফাংশন)</span> <br/>
            <span>async function এমন একটি ফাংশন যেটি একটি Promise রিটার্ন করে। এটি ব্যবহারের মাধ্যমে আমরা asynchronous কোড লিখতে পারি।</span>
            <br/>
            <code>
                {`async function fetchData() {`} <br/>
                {`    return "Data fetched";`} <br/>
                {`}`} <br/>
                {`fetchData().then(data => console.log(data));`} <br/>
                {'// আউটপুট: "Data fetched"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">2. Await (অ্যাওয়েট)</span> <br/>
            <span>await কীওয়ার্ডটি শুধুমাত্র async function ভিতরে ব্যবহার করা হয়। এটি একটি Promise-এর Result পর্যন্ত অপেক্ষা করে এবং Promise Result হলে তা রিটার্ন করে।</span>
            <br/>
            <code>
                {`async function fetchData() {`} <br/>
                {`    let data = await new Promise(resolve => setTimeout(() => resolve("Data fetched"), 2000));`} <br/>
                {`    console.log(data);`} <br/>
                {`}`} <br/>
                {`fetchData();`} <br/>
                {'// আউটপুট: "Data fetched" (2 সেকেন্ড অপেক্ষা করার পরে)'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">3. Error Handling (এরর হ্যান্ডলিং)</span> <br/>
            <span>অ্যাসিঙ্ক এবং অ্যাওয়েট ব্যবহারের সময় এরর হ্যান্ডলিংও করা যায়। সাধারণত try-catch ব্লক ব্যবহার করে এরর হ্যান্ডলিং করা হয়।</span>
            <br/>
            <code>
                {`async function fetchData() {`} <br/>
                {`    try {`} <br/>
                {`        let data = await new Promise((_, reject) => setTimeout(() => reject("Fetch error"), 2000));`} <br/>
                {`        console.log(data);`} <br/>
                {`    } catch (error) {`} <br/>
                {`        console.log("Error:", error);`} <br/>
                {`    }`} <br/>
                {`}`} <br/>
                {`fetchData();`} <br/>
                {'// আউটপুট: "Error: Fetch error" (2 সেকেন্ড পরে)'} <br/>
            </code>
        </div>
    );
}

export default AsyncAwait;
