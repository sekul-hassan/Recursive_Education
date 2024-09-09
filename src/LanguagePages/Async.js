import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function AsyncAwait() {
        return (
            <div className="p-3">
                    <span className="globalSubTitle">Async and Await : </span>
                    <div className="globalDescription">
                            JavaScript-এ async এবং await কীওয়ার্ডগুলো ব্যবহার করে asynchronous কোড আরও সহজে লেখা যায়। এগুলো Promises এর সাথে কাজ করে এবং কোডকে synchronous কোডের মতোই পড়তে সহজ করে তোলে।
                    </div>
                    <br />

                    <span className="globalSubTitle">1. Async Function (অ্যাসিঙ্ক ফাংশন)</span>
                    <br />
                    <div className="globalDescription">
                            async function এমন একটি ফাংশন যেটি একটি Promise রিটার্ন করে। এটি ব্যবহারের মাধ্যমে আমরা asynchronous কোড লিখতে পারি।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`async function fetchData() {
    return "Data fetched";
}
fetchData().then(data => console.log(data)); // আউটপুট: "Data fetched"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">2. Await (অ্যাওয়েট)</span>
                    <br />
                    <div className="globalDescription">
                            await কীওয়ার্ডটি শুধুমাত্র async function ভিতরে ব্যবহার করা হয়। এটি একটি Promise-এর Result পর্যন্ত অপেক্ষা করে এবং Promise Result হলে তা রিটার্ন করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`async function fetchData() {
    let data = await new Promise(resolve => setTimeout(() => resolve("Data fetched"), 2000));
    console.log(data);
}
fetchData(); // আউটপুট: "Data fetched" (2 সেকেন্ড অপেক্ষা করার পরে)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">3. Error Handling (এরর হ্যান্ডলিং)</span>
                    <br />
                    <div className="globalDescription">
                            অ্যাসিঙ্ক এবং অ্যাওয়েট ব্যবহারের সময় এরর হ্যান্ডলিংও করা যায়। সাধারণত try-catch ব্লক ব্যবহার করে এরর হ্যান্ডলিং করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`async function fetchData() {
    try {
        let data = await new Promise((_, reject) => setTimeout(() => reject("Fetch error"), 2000));
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}
fetchData(); // আউটপুট: "Error: Fetch error" (2 সেকেন্ড পরে)`}
                    </SyntaxHighlighter>
            </div>
        );
}

export default AsyncAwait;
