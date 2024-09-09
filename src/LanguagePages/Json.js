import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Json() {
        return (
            <div className="p-3">
                    <span className="globalSubTitle">JSON (JavaScript Object Notation) : </span>
                    <div className="globalDescription">
                            JSON হল একটি লাইটওয়েট ডেটা ইন্টারচেঞ্জ ফরম্যাট যা মানুষের দ্বারা পড়তে সহজ এবং মেশিন দ্বারা পার্স করা সহজ। এটি সাধারণত অবজেক্ট এবং অ্যারে হিসেবে ডেটা উপস্থাপন করে।
                    </div>
                    <br />

                    <span className="globalSubTitle">1. JSON Object:</span>
                    <br />
                    <div className="globalDescription">
                            JSON অবজেক্টটি কীগুলোর সাথে মান জোড়া করে ডেটা স্টোর করে। কীগুলো স্ট্রিং হিসেবে এবং মানগুলো যেকোনো ধরনের ডেটা হতে পারে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="json" style={solarizedlight}>
                            {`{
  "name": "John",
  "age": 30,
  "city": "New York"
}`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">2. JSON.stringify():</span>
                    <br />
                    <div className="globalDescription">
                            এই মেথডটি একটি জাভাস্ক্রিপ্ট অবজেক্ট বা অ্যারেকে JSON স্ট্রিং-এ রূপান্তর করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const jsonString = JSON.stringify(person);
console.log(jsonString); // আউটপুট: "{\\"name\\":\\"John\\",\\"age\\":30,\\"city\\":\\"New York\\"}"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">3. JSON.parse():</span>
                    <br />
                    <div className="globalDescription">
                            এই মেথডটি একটি JSON স্ট্রিংকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const jsonString = '{"name":"John","age":30,"city":"New York"}';
const person = JSON.parse(jsonString);
console.log(person); // আউটপুট: { name: "John", age: 30, city: "New York" }`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">4. Nested JSON Objects:</span>
                    <br />
                    <div className="globalDescription">
                            JSON অবজেক্টে অন্যান্য অবজেক্ট বা অ্যারে থাকতে পারে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const user = {
  name: "Jane",
  address: {
    street: "123 Main St",
    city: "Los Angeles"
  },
  hobbies: ["reading", "swimming"]
};

const jsonString = JSON.stringify(user);
console.log(jsonString); // আউটপুট: "{\\"name\\":\\"Jane\\",\\"address\\":{\\"street\\":\\"123 Main St\\",\\"city\\":\\"Los Angeles\\"},\\"hobbies\\":[\\"reading\\",\\"swimming\\"]}"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">5. Handling Errors:</span>
                    <br />
                    <div className="globalDescription">
                            যখন JSON.parse() ব্যবহার করা হয়, তখন যদি স্ট্রিংটি অবৈধ হয় তবে একটি ত্রুটি হতে পারে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`try {
  const invalidJson = '{name:"John",age:30}';
  const parsedData = JSON.parse(invalidJson);
  console.log(parsedData);
} catch (error) {
  console.error("Error parsing JSON:", error); // আউটপুট: "Error parsing JSON: SyntaxError: Unexpected token n in JSON at position 1"
}`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">6. JSON with Arrays:</span>
                    <br />
                    <div className="globalDescription">
                            JSON অ্যারে হিসেবেও ডেটা ধারণ করতে পারে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`const dataArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const jsonString = JSON.stringify(dataArray);
console.log(jsonString); // আউটপুট: "[{\\"name\\":\\"Alice\\",\\"age\\":25},{\\"name\\":\\"Bob\\",\\"age\\":30}]"

const parsedArray = JSON.parse(jsonString);
console.log(parsedArray); // আউটপুট: [ { name: "Alice", age: 25 }, { name: "Bob", age: 30 } ]`}
                    </SyntaxHighlighter>
            </div>
        );
}

export default Json;
