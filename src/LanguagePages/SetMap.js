import React from 'react';

function SetMap(props) {
    return (
        <div>
            <span className="globalSubTitle">Set:</span> জাভাস্ক্রিপ্টের Set একটি ডেটা স্ট্রাকচার যা ইউনিক value store করে।<br/>
            <code>
                let numbers = new Set([1, 2, 3, 4]);<br/>
                console.log(numbers); // Set {"{"} 1, 2, 3, 4 {"}"} <br/>
            </code>
            <span className="globalSubTitle">set.add(value): </span> new value add করা।<br/>
            <code>
                let fruits = new Set();<br/>
                fruits.add('apple');<br/>
                fruits.add('banana');<br/>
                console.log(fruits); // Set  {"{"} 'apple', 'banana' {"}"} <br/>
            </code>
            <span className="globalSubTitle">set.delete(value): </span> <br/>
            <code>
                let fruits = new Set(['apple', 'banana', 'cherry']);<br/>
                fruits.delete('banana');<br/>
                console.log(fruits); // Set {"{"}  'apple', 'cherry' {"}"} <br/>

            </code>
            <span className="globalSubTitle">set.has(value): </span><br/>
            <code>
                let numbers = new Set([1, 2, 3, 4]);<br/>
                console.log(numbers.has(3)); // true <br/>
                console.log(numbers.has(5)); // false <br/>
            </code>
            <span className="globalSubTitle">set.clear(): </span><br/>
            <code>
                let numbers = new Set([1, 2, 3, 4]);<br/>
                numbers.clear(); <br/>
                console.log(numbers); // Set {"{ }"} <br/>
            </code>
            <span className="globalSubTitle">set.size(): </span><br/>
            <code>
                let numbers = new Set([1, 2, 3]);<br/>
                console.log(numbers.size); // 3 <br/>
            </code>
            <span className="globalSubTitle">Map: </span>জাভাস্ক্রিপ্টের Map একটি ডেটা স্ট্রাকচার যা key-value pair হিসেবে ডেটা store করে। Map এর মূল বৈশিষ্ট্য হলো key গুলি ইউনিক এবং value যেকোনো ধরনের হতে পারে।<br/>

            <code>
                let map = new Map([['key1', 'value1'], ['key2', 'value2']]);<br/>
                console.log(map); // Map {"{"} 'key1' => 'value1', 'key2' => 'value2' {"}"} <br/>
            </code>

            <span className="globalSubTitle">map.set(): </span> value set. <br/>
            <code>
                let map = new Map();<br/>
                map.set('name', 'Alice');<br/>
                map.set('age', 30);<br/>
                console.log(map); // Map {"{"} 'name' => 'Alice', 'age' => 30 {"}"} <br/>
            </code>

            <span className="globalSubTitle">map.get(key): </span>একটি কী এর জন্য সংশ্লিষ্ট ভ্যালু রিটার্ন করা। <br/>
            <code>
                let map = new Map([['name', 'Alice'], ['age', 30]]);<br/>
                console.log(map.get('name')); // 'Alice' <br/>
                console.log(map.get('age')); // 30 <br/>
            </code>

            <span className="globalSubTitle">map.has(key): </span> <br/>
            <code>
                let map = new Map([['name', 'Alice']]);<br/>
                console.log(map.has('name')); // true <br/>
                console.log(map.has('age')); // false <br/>
            </code>

            <span className="globalSubTitle">map.delete(key): </span> <br/>
            <code>
                let map = new Map([['name', 'Alice'], ['age', 30]]); <br/>
                map.delete('age'); <br/>
                console.log(map); // Map {"{"} 'name' => 'Alice' {"}"} <br/>
            </code>

            <span className="globalSubTitle">map.clear(): </span> <br/>
            <code>
                let map = new Map([['name', 'Alice'], ['age', 30]]); <br/>
                map.clear(); <br/>
                console.log(map); // Map {"{ }"} <br/>
            </code>
             <spab className="globalSubTitle">map.size: </spab><br/>
            <code>
                let map = new Map([['name', 'Alice'], ['age', 30]]); <br/>
                console.log(map.size); // 2 <br/>
            </code>
        </div>
    );
}

export default SetMap;
