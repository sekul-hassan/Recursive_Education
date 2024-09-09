import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Array(props) {
    return (
        <div className="mt-2">
            <span className="globalSubTitle">Array:</span> একই ডেটা টাইপের একাধিক মান সংরক্ষণের জন্য array ব্যবহার করা হয়।
            জাভাস্ক্রিপ্টে অ্যারে তৈরির জন্য [] ব্র্যাকেট ব্যবহার করা হয়।
            <br />
            Example:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = [2, 3, 4, 5]; // এখানে [] ব্র্যাকেটের মধ্যে একটি অ্যারে তৈরি করা হয়েছে
// অ্যারে তৈরির সময় [] ব্র্যাকেট ব্যবহার করে মানগুলি কমা দ্বারা পৃথক করা হয় এবং অ্যারের মধ্যে সেগুলি রাখা হয়।

// এছাড়াও, অ্যারে বিভিন্ন ডেটা টাইপের মান ধারণ করতে পারে:
let mixedArray = [1, 'hello', true, null];`}
            </SyntaxHighlighter>
            <br />
            Example:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";`}
            </SyntaxHighlighter>
            <br />
            Example:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`const cars = new Array("Saab", "Volvo", "BMW");`}
            </SyntaxHighlighter>
            <br />
            Accessing:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`console.log(cars[0]); // output: Saab`}
            </SyntaxHighlighter>
            <br />
            Changing element:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`cars[0] = "Opel";`}
            </SyntaxHighlighter>
            <br />
            Array methods:
            <br />
            <div>array.length // return length of array</div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana', 'mango'];
console.log(fruits.length); // আউটপুট: 3`}
            </SyntaxHighlighter>
            <div>
                array.toString() // মেথডটি array কে একটি string এ রূপান্তর করে, যেখানে প্রতিটি এলিমেন্ট কমা দিয়ে আলাদা করা থাকে।
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana', 'mango'];
console.log(fruits.toString()); // আউটপুট: 'apple,banana,mango'`}
            </SyntaxHighlighter>
            <div>
                array.at() // মেথডটি array এর নির্দিষ্ট পজিশনের এলিমেন্ট রিটার্ন করে। পজিটিভ এবং নেগেটিভ উভয় ইনডেক্স ব্যবহার করা যায়। নেগেটিভ ইনডেক্স array এর শেষ থেকে গোনা হয়।
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana', 'mango'];
console.log(fruits.at(1)); // আউটপুট: 'banana'
console.log(fruits.at(-1)); // আউটপুট: 'mango'`}
            </SyntaxHighlighter>
            <div>
                array.join() // মেথডটি array এর সব এলিমেন্টগুলিকে একটি string এ রূপান্তর করে এবং একটি নির্দিষ্ট separator (যেমন, কমা, স্পেস) ব্যবহার করে তাদের সংযুক্ত করে।
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana', 'mango'];
console.log(fruits.join(', ')); // আউটপুট: 'apple, banana, mango'
console.log(fruits.join(' - ')); // আউটপুট: 'apple - banana - mango'`}
            </SyntaxHighlighter>
            <div>
                array.push() // মেথডটি একটি array এর শেষে একটি বা একাধিক এলিমেন্ট যোগ করে এবং নতুন array এর length রিটার্ন করে।
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana'];
fruits.push('mango');
console.log(fruits); // আউটপুট: ['apple', 'banana', 'mango']
let newLength = fruits.push('orange');
console.log(newLength); // আউটপুট: 4`}
            </SyntaxHighlighter>
            <div>
                array.pop() // মেথডটি একটি array এর শেষ এলিমেন্টটি সরিয়ে ফেলে এবং সেই সরানো এলিমেন্টটি রিটার্ন করে।
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana', 'mango'];
let lastFruit = fruits.pop();
console.log(lastFruit); // আউটপুট: 'mango'
console.log(fruits); // আউটপুট: ['apple', 'banana']`}
            </SyntaxHighlighter>
            <br />
            Search methods:
            <br />
            <div>
                <li>indexOf() // Array এর মধ্যে নির্দিষ্ট এলিমেন্টের প্রথম occurrence এর index রিটার্ন করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana', 'mango', 'banana'];
let index = fruits.indexOf('banana');
console.log(index); // আউটপুট: 1
let notFoundIndex = fruits.indexOf('orange');
console.log(notFoundIndex); // আউটপুট: -1`}
            </SyntaxHighlighter>
            <div>
                <li>includes() // Array এর মধ্যে নির্দিষ্ট এলিমেন্ট আছে কিনা তা true বা false রিটার্ন করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana', 'mango'];
let hasBanana = fruits.includes('banana');
console.log(hasBanana); // আউটপুট: true
let hasOrange = fruits.includes('orange');
console.log(hasOrange); // আউটপুট: false`}
            </SyntaxHighlighter>
            <div>
                <li>find() // Array এর মধ্যে নির্দিষ্ট condition পূরণ করা প্রথম এলিমেন্ট রিটার্ন করে। যদি কোন এলিমেন্ট না পাওয়া যায়, এটি undefined রিটার্ন করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(element => element > 10);
console.log(found); // আউটপুট: 12`}
            </SyntaxHighlighter>
            <div>
                <li>findIndex() // Array এর মধ্যে নির্দিষ্ট condition পূরণ করা প্রথম এলিমেন্টের index রিটার্ন করে। যদি কোন এলিমেন্ট না পাওয়া যায়, এটি -1 রিটার্ন করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = [5, 12, 8, 130, 44];
let foundIndex = numbers.findIndex(element => element > 10);
console.log(foundIndex); // আউটপুট: 1`}
            </SyntaxHighlighter>
            <div>
                <li>array.shift() // অ্যারের প্রথম উপাদানটি মুছে ফেলে এবং সেই মুছে ফেলা উপাদানটি রিটার্ন করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana', 'cherry'];
let firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana', 'cherry']`}
            </SyntaxHighlighter>
            <div>
                <li>array.unshift() // অ্যারের শুরুতে এক বা একাধিক উপাদান add করে এবং নতুন অ্যারের length return করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = [2, 3, 4];
numbers.unshift(0, 1);
console.log(numbers); // [0, 1, 2, 3, 4]`}
            </SyntaxHighlighter>
            <div>
                <li>delete array[index] // অ্যারের একটি উপাদান মুছে ফেলে, কিন্তু অ্যারে তে একটি Hole রেখে দেয় (অর্থাৎ, উপাদানগুলি সরানো হয় না এবং অ্যারের দৈর্ঘ্য পরিবর্তিত হয় না)।</li>
            </div>
            <div>
                <li>array.splice() // একটি নির্দিষ্ট ইনডেক্সে উপাদান যোগ করা বা মুছে ফেলা।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let array = [1, 2, 3, 4, 5];
array.splice(2, 2, 'a', 'b');
console.log(array); // [1, 2, 'a', 'b', 5]`}
            </SyntaxHighlighter>
            <div>
                <li>array.slice() // অ্যারের একটি অংশের একটি part কপি করে নতুন অ্যারেতে রিটার্ন করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let array = [1, 2, 3, 4, 5];
let newArray = array.slice(1, 4);
console.log(newArray); // [2, 3, 4]`}
            </SyntaxHighlighter>
            <div>Sort methods:</div>
            <div>
                <li>sort() // Array এর এলিমেন্টগুলোকে alphabetically বা numerically sort করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['mango', 'apple', 'banana'];
fruits.sort();
console.log(fruits); // আউটপুট: ['apple', 'banana', 'mango']
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // আউটপুট: [1, 5, 10, 25, 40, 100]`}
            </SyntaxHighlighter>
            <div>
                <li>reverse() // Array এর এলিমেন্টগুলোকে উল্টে দেয়, অর্থাৎ শেষ থেকে শুরু পর্যন্ত।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['mango', 'apple', 'banana'];
fruits.reverse();
console.log(fruits); // আউটপুট: ['banana', 'apple', 'mango']`}
            </SyntaxHighlighter>
            <br />
            Iteration methods:
            <br />
            <div>
                <li>forEach() // মেথডটি array এর প্রতিটি এলিমেন্টের জন্য একটি ফাংশন কল করে। এটি কোন value রিটার্ন করে না, শুধু প্রতিটি এলিমেন্টের উপর কাজ করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let fruits = ['apple', 'banana', 'mango'];
fruits.forEach(fruit => console.log(fruit)); // আউটপুট:
'// apple'
'// banana'
'// mango'`}
            </SyntaxHighlighter>
            <div>
                <li>map() // Array এর প্রতিটি এলিমেন্টের জন্য একটি ফাংশন চালিয়ে একটি নতুন array রিটার্ন করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // আউটপুট: [2, 4, 6, 8]`}
            </SyntaxHighlighter>
            <div>
                <li>filter() // Array এর প্রতিটি এলিমেন্টের জন্য একটি condition পরীক্ষা করে এবং condition পূরণ করা এলিমেন্টগুলোকে নিয়ে একটি নতুন array তৈরি করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // আউটপুট: [2, 4]`}
            </SyntaxHighlighter>
            <div>
                <li>reduce() // Array এর সব এলিমেন্টগুলিকে একটি single value তে রূপান্তর করে। এটি accumulator এবং current value নামক দুটি প্যারামিটার গ্রহণ করে।</li>
            </div>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // আউটপুট: 10`}
            </SyntaxHighlighter>
        </div>
    );
}

export default Array;
