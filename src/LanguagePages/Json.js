import React from 'react';

function Json() {
    return (
        <div>
            <span className="globalSubTitle">JSON (JavaScript Object Notation) : </span>
            <span>JSON হল একটি লাইটওয়েট ডেটা ইন্টারচেঞ্জ ফরম্যাট যা মানুষের দ্বারা পড়তে সহজ এবং মেশিন দ্বারা পার্স করা সহজ। এটি সাধারণত অবজেক্ট এবং অ্যারে হিসেবে ডেটা উপস্থাপন করে।</span>
            <br/>

            <span className="globalSubTitle">1. JSON Object:</span> <br/>
            <span>JSON অবজেক্টটি কীগুলোর সাথে মান জোড়া করে ডেটা স্টোর করে। কীগুলো স্ট্রিং হিসেবে এবং মানগুলো যেকোনো ধরনের ডেটা হতে পারে।</span>
            <br/>
            <code>
                {`{`} <br/>
                {`  "name": "John",`} <br/>
                {`  "age": 30,`} <br/>
                {`  "city": "New York"`} <br/>
                {`}`} <br/>
                {'// JSON অবজেক্ট'}
            </code>
            <br/>

            <span className="globalSubTitle">2. JSON.stringify():</span> <br/>
            <span>এই মেথডটি একটি জাভাস্ক্রিপ্ট অবজেক্ট বা অ্যারেকে JSON স্ট্রিং-এ রূপান্তর করে।</span>
            <br/>
            <code>
                {`const person = {`} <br/>
                {`  name: "John",`} <br/>
                {`  age: 30,`} <br/>
                {`  city: "New York"`} <br/>
                {`};`} <br/><br/>

                {`const jsonString = JSON.stringify(person);`} <br/>
                {`console.log(jsonString);`} <br/>
                {'// আউটপুট: "{"name":"John","age":30,"city":"New York"}"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">3. JSON.parse():</span> <br/>
            <span>এই মেথডটি একটি JSON স্ট্রিংকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করে।</span>
            <br/>
            <code>
                {`const jsonString = '{"name":"John","age":30,"city":"New York"}';`} <br/>
                {`const person = JSON.parse(jsonString);`} <br/>
                {`console.log(person);`} <br/>
                {'// আউটপুট: { name: "John", age: 30, city: "New York" }'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">4. Nested JSON Objects:</span> <br/>
            <span>JSON অবজেক্টে অন্যান্য অবজেক্ট বা অ্যারে থাকতে পারে।</span>
            <br/>
            <code>
                {`const user = {`} <br/>
                {`  name: "Jane",`} <br/>
                {`  address: {`} <br/>
                {`    street: "123 Main St",`} <br/>
                {`    city: "Los Angeles"`} <br/>
                {`  },`} <br/>
                {`  hobbies: ["reading", "swimming"]`} <br/>
                {`};`} <br/><br/>

                {`const jsonString = JSON.stringify(user);`} <br/>
                {`console.log(jsonString);`} <br/>
                {'// আউটপুট: "{"name":"Jane","address":{"street":"123 Main St","city":"Los Angeles"},"hobbies":["reading","swimming"]}"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">5. Handling Errors:</span> <br/>
            <span>যখন JSON.parse() ব্যবহার করা হয়, তখন যদি স্ট্রিংটি অবৈধ হয় তবে একটি ত্রুটি হতে পারে।</span>
            <br/>
            <code>
                {`try {`} <br/>
                {`  const invalidJson = '{name:"John",age:30}';`} <br/>
                {`  const parsedData = JSON.parse(invalidJson);`} <br/>
                {`  console.log(parsedData);`} <br/>
                {`} catch (error) {`} <br/>
                {`  console.error("Error parsing JSON:", error);`} <br/>
                {`}`} <br/>
                {'// আউটপুট: "Error parsing JSON: SyntaxError: Unexpected token n in JSON at position 1"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">6. JSON with Arrays:</span> <br/>
            <span>JSON অ্যারে হিসেবেও ডেটা ধারণ করতে পারে।</span>
            <br/>
            <code>
                {`const dataArray = [`} <br/>
                {`  { name: "Alice", age: 25 },`} <br/>
                {`  { name: "Bob", age: 30 }`} <br/>
                {`];`} <br/><br/>

                {`const jsonString = JSON.stringify(dataArray);`} <br/>
                {`console.log(jsonString);`} <br/>
                {'// আউটপুট: "[{"name":"Alice","age":25},{"name":"Bob","age":30}]"'} <br/><br/>

                {`const parsedArray = JSON.parse(jsonString);`} <br/>
                {`console.log(parsedArray);`} <br/>
                {'// আউটপুট: [ { name: "Alice", age: 25 }, { name: "Bob", age: 30 } ]'} <br/>
            </code>
        </div>
    );
}

export default Json;
