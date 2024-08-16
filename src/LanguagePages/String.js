import React from 'react';

function String() {
    return (
        <div>
            <span className="globalSubTitle">String Operations : </span>
            <span>JavaScript-এ বিভিন্ন স্ট্রিং অপারেশন করা যায় যা ডাটা ম্যানিপুলেশনে অনেক কাজে আসে।</span>
            <br/>

            <span className="globalSubTitle">1. Length Property:</span> <br/>
            <span>স্ট্রিং এর দৈর্ঘ্য বের করতে `length` প্রপার্টি ব্যবহার করা হয়।</span>
            <br/>
            <code>
                {`let text = "Hello, World!";`} <br/>
                {`console.log(text.length);`} <br/>
                {'// আউটপুট: 13'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">2. String Concatenation:</span> <br/>
            <span>দুইটি বা তার বেশি স্ট্রিং একত্রিত করতে `+` অপারেটর বা `concat()` মেথড ব্যবহার করা হয়।</span>
            <br/>
            <code>
                {`let str1 = "Hello";`} <br/>
                {`let str2 = "World";`} <br/>
                {`let result = str1 + ", " + str2 + "!";`} <br/>
                {`console.log(result);`} <br/>
                {'// আউটপুট: "Hello, World!"'} <br/><br/>

                {`let resultConcat = str1.concat(", ", str2, "!");`} <br/>
                {`console.log(resultConcat);`} <br/>
                {'// আউটপুট: "Hello, World!"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">3. String to UpperCase:</span> <br/>
            <span>স্ট্রিং এর সমস্ত ক্যারেক্টারকে uppercase (বড় হাতের অক্ষর) এ রূপান্তর করতে `toUpperCase()` মেথড ব্যবহার করা হয়।</span>
            <br/>
            <code>
                {`let text = "Hello, World!";`} <br/>
                {`let upperText = text.toUpperCase();`} <br/>
                {`console.log(upperText);`} <br/>
                {'// আউটপুট: "HELLO, WORLD!"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">4. String to LowerCase:</span> <br/>
            <span>স্ট্রিং এর সমস্ত ক্যারেক্টারকে lowercase (ছোট হাতের অক্ষর) এ রূপান্তর করতে `toLowerCase()` মেথড ব্যবহার করা হয়।</span>
            <br/>
            <code>
                {`let text = "Hello, World!";`} <br/>
                {`let lowerText = text.toLowerCase();`} <br/>
                {`console.log(lowerText);`} <br/>
                {'// আউটপুট: "hello, world!"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">5. String Slice:</span> <br/>
            <span>স্ট্রিং এর নির্দিষ্ট অংশ কেটে বের করতে `slice()` মেথড ব্যবহার করা হয়।</span>
            <br/>
            <code>
                {`let text = "Hello, World!";`} <br/>
                {`let slicedText = text.slice(7, 12);`} <br/>
                {`console.log(slicedText);`} <br/>
                {'// আউটপুট: "World"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">6. String Replace:</span> <br/>
            <span>স্ট্রিং এর নির্দিষ্ট অংশকে নতুন স্ট্রিং দিয়ে প্রতিস্থাপন করতে `replace()` মেথড ব্যবহার করা হয়।</span>
            <br/>
            <code>
                {`let text = "Hello, World!";`} <br/>
                {`let newText = text.replace("World", "Universe");`} <br/>
                {`console.log(newText);`} <br/>
                {'// আউটপুট: "Hello, Universe!"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">7. String Split:</span> <br/>
            <span>স্ট্রিং এর অংশগুলোকে আলাদা আলাদা করে array তে পরিণত করতে `split()` মেথড ব্যবহার করা হয়।</span>
            <br/>
            <code>
                {`let text = "Hello, World!";`} <br/>
                {`let arr = text.split(", ");`} <br/>
                {`console.log(arr);`} <br/>
                {'// আউটপুট: ["Hello", "World!"]'} <br/>
            </code>
            <br/>
        </div>
    );
}

export default String;
