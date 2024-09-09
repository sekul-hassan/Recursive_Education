import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
function SetMap(props) {
    return (
        <div className="mt-2">
            <span className="globalSubTitle">Set:</span>
            <div className="globalDescription">
                জাভাস্ক্রিপ্টের Set একটি ডেটা স্ট্রাকচার যা ইউনিক value store করে।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = new Set([1, 2, 3, 4]);
console.log(numbers); // Set {1, 2, 3, 4}`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">set.add(value): </span>
            <div className="globalDescription">
                নতুন value add করা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = new Set();
fruits.add('apple');
fruits.add('banana');
console.log(fruits); // Set {'apple', 'banana'}`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">set.delete(value): </span>
            <div className="globalDescription">
                একটি নির্দিষ্ট value মুছে ফেলা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = new Set(['apple', 'banana', 'cherry']);
fruits.delete('banana');
console.log(fruits); // Set {'apple', 'cherry'}`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">set.has(value): </span>
            <div className="globalDescription">
                একটি value Set এ উপস্থিত আছে কিনা পরীক্ষা করা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = new Set([1, 2, 3, 4]);
console.log(numbers.has(3)); // true
console.log(numbers.has(5)); // false`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">set.clear(): </span>
            <div className="globalDescription">
                Set এর সব এলিমেন্ট মুছে ফেলা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = new Set([1, 2, 3, 4]);
numbers.clear();
console.log(numbers); // Set {}`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">set.size: </span>
            <div className="globalDescription">
                Set এর মধ্যে মোট এলিমেন্ট সংখ্যা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = new Set([1, 2, 3]);
console.log(numbers.size); // 3`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">Map: </span>
            <div className="globalDescription">
                জাভাস্ক্রিপ্টের Map একটি ডেটা স্ট্রাকচার যা key-value pair হিসেবে ডেটা store করে। Map এর মূল বৈশিষ্ট্য হলো key গুলি ইউনিক এবং value যেকোনো ধরনের হতে পারে।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map); // Map {'key1' => 'value1', 'key2' => 'value2'}`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">map.set(key, value): </span>
            <div className="globalDescription">
                নতুন key-value pair set করা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map); // Map {'name' => 'Alice', 'age' => 30}`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">map.get(key): </span>
            <div className="globalDescription">
                একটি কী এর জন্য সংশ্লিষ্ট value রিটার্ন করা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let map = new Map([['name', 'Alice'], ['age', 30]]);
console.log(map.get('name')); // 'Alice'
console.log(map.get('age')); // 30`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">map.has(key): </span>
            <div className="globalDescription">
                একটি key Map এ উপস্থিত আছে কিনা পরীক্ষা করা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let map = new Map([['name', 'Alice']]);
console.log(map.has('name')); // true
console.log(map.has('age')); // false`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">map.delete(key): </span>
            <div className="globalDescription">
                একটি নির্দিষ্ট key-value pair মুছে ফেলা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let map = new Map([['name', 'Alice'], ['age', 30]]);
map.delete('age');
console.log(map); // Map {'name' => 'Alice'}`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">map.clear(): </span>
            <div className="globalDescription">
                Map এর সব key-value pair মুছে ফেলা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let map = new Map([['name', 'Alice'], ['age', 30]]);
map.clear();
console.log(map); // Map {}`}
            </SyntaxHighlighter>
            <br />
            <span className="globalSubTitle">map.size: </span>
            <div className="globalDescription">
                Map এর মধ্যে মোট key-value pair সংখ্যা।
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let map = new Map([['name', 'Alice'], ['age', 30]]);
console.log(map.size); // 2`}
            </SyntaxHighlighter>
        </div>
    );
}

export default SetMap;
