import React from 'react';

function Array(props) {
    return (
        <div className="mt-2">
            <span className="globalSubTitle">Array:</span> একই ডেটা টাইপের একাধিক মান সংরক্ষণের জন্য array ব্যবহার করা হয়।
            জাভাস্ক্রিপ্টে অ্যারে তৈরির জন্য [] ব্র্যাকেট ব্যবহার করা হয়।
            <br/>
            Example:
            <br/>
            <code>
                let numbers = [2, 3, 4, 5]; // এখানে [] ব্র্যাকেটের মধ্যে একটি অ্যারে তৈরি করা হয়েছে<br/>
                অ্যারে তৈরির সময় [] ব্র্যাকেট ব্যবহার করে মানগুলি কমা দ্বারা পৃথক করা হয় এবং অ্যারের মধ্যে সেগুলি
                রাখা হয়।
                <br/>
                এছাড়াও, অ্যারে বিভিন্ন ডেটা টাইপের মান ধারণ করতে পারে:
                <br/>
                let mixedArray = [1, 'hello', true, null];
            </code>
            <br/>
            Example:
            <br/>
            <code>
                const cars = [];
                <br/>
                cars[0] = "Saab";
                <br/>
                cars[1] = "Volvo";
                <br/>
                cars[2] = "BMW";
            </code>
            <br/>
            Example:
            <br/>
            <code>
                const cars = new Array("Saab", "Volvo", "BMW");
            </code>
            <br/>
            Accessing:
            <br/>
            <code>
                console.log(cars[0]); // output saab
            </code>
            <br/>
            Changing element:
            <br/>
            <code>
                cars[0] = "Opel";
            </code>
            <br/>
            Array methods:
            <br/>
            <div> array.length // return length of array</div>
            <code>
                let fruits = ['apple', 'banana', 'mango'];
                <br/>
                console.log(fruits.length); // আউটপুট: 3
                <br/>
            </code>
            <div> array.toString() // মেথডটি array কে একটি string এ রূপান্তর করে, যেখানে প্রতিটি এলিমেন্ট কমা দিয়ে আলাদা
                করা থাকে।
            </div>
            <code>
                let fruits = ['apple', 'banana', 'mango'];
                <br/>
                console.log(fruits.toString()); // আউটপুট: 'apple,banana,mango'
                <br/>
            </code>
            <div> array.at() মেথডটি array এর নির্দিষ্ট পজিশনের এলিমেন্ট রিটার্ন করে। পজিটিভ এবং নেগেটিভ উভয় ইনডেক্স
                ব্যবহার করা যায়। নেগেটিভ ইনডেক্স array এর শেষ থেকে গোনা হয়।
            </div>
            <code>
                let fruits = ['apple', 'banana', 'mango'];
                <br/>
                console.log(fruits.at(1)); // আউটপুট: 'banana'
                <br/>
                console.log(fruits.at(-1)); // আউটপুট: 'mango'
            </code>
            <div>
                array.join() মেথডটি array এর সব এলিমেন্টগুলিকে একটি string এ রূপান্তর করে এবং একটি নির্দিষ্ট
                separator (যেমন, কমা, স্পেস) ব্যবহার করে তাদের সংযুক্ত করে।
            </div>
            <code>
                let fruits = ['apple', 'banana', 'mango'];
                <br/>
                console.log(fruits.join(', ')); // আউটপুট: 'apple, banana, mango'
                <br/>
                console.log(fruits.join(' - ')); // আউটপুট: 'apple - banana - mango'
            </code>
            <div>
                array.push() // মেথডটি একটি array এর শেষে একটি বা একাধিক এলিমেন্ট যোগ করে এবং নতুন array এর length
                রিটার্ন করে।
            </div>
            <code>
                let fruits = ['apple', 'banana'];
                <br/>
                fruits.push('mango');
                <br/>
                console.log(fruits); // আউটপুট: ['apple', 'banana', 'mango']
                <br/>
                let newLength = fruits.push('orange');
                <br/>
                console.log(newLength); // আউটপুট: 4
            </code>
            <div>
                array.pop() মেথডটি একটি array এর শেষ এলিমেন্টটি সরিয়ে ফেলে এবং সেই সরানো এলিমেন্টটি রিটার্ন করে।
            </div>
            <code>
                let fruits = ['apple', 'banana', 'mango'];
                <br/>
                let lastFruit = fruits.pop();
                <br/>
                console.log(lastFruit); // আউটপুট: 'mango'
                <br/>
                console.log(fruits); // আউটপুট: ['apple', 'banana']
            </code>
            <br/>
            Search methods:
            <br/>
            <div>
                <li>indexOf(): Array এর মধ্যে নির্দিষ্ট এলিমেন্টের প্রথম occurrence এর index রিটার্ন করে।</li>
            </div>
            <code>
                let fruits = ['apple', 'banana', 'mango', 'banana'];
                <br/>
                let index = fruits.indexOf('banana');
                <br/>
                console.log(index); // আউটপুট: 1
                <br/>
                let notFoundIndex = fruits.indexOf('orange');
                <br/>
                console.log(notFoundIndex); // আউটপুট: -1
            </code>
            <li>includes(): Array এর মধ্যে নির্দিষ্ট এলিমেন্ট আছে কিনা তা true বা false রিটার্ন করে।</li>
            <code>
                let fruits = ['apple', 'banana', 'mango'];
                <br/>
                let hasBanana = fruits.includes('banana');
                <br/>
                console.log(hasBanana); // আউটপুট: true
                <br/>
                let hasOrange = fruits.includes('orange');
                <br/>
                console.log(hasOrange); // আউটপুট: false
            </code>
            <li>find(): Array এর মধ্যে নির্দিষ্ট condition পূরণ করা প্রথম এলিমেন্ট রিটার্ন করে। যদি কোন এলিমেন্ট
                না পাওয়া যায়, এটি undefined রিটার্ন করে।
            </li>
            <code>
                let numbers = [5, 12, 8, 130, 44];
                <br/>
                let found = numbers.find(element => element > 10);
                <br/>
                console.log(found); // আউটপুট: 12
            </code>
            <li>findIndex(): Array এর মধ্যে নির্দিষ্ট condition পূরণ করা প্রথম এলিমেন্টের index রিটার্ন করে। যদি
                কোন এলিমেন্ট না পাওয়া যায়, এটি -1 রিটার্ন করে।
            </li>
            <code>
                let numbers = [5, 12, 8, 130, 44];
                <br/>
                let foundIndex = numbers.findIndex(element => element > 10);
                <br/>
                console.log(foundIndex); // আউটপুট: 1
            </code>

            <li>array.shift(): অ্যারের প্রথম উপাদানটি মুছে ফেলে এবং সেই মুছে ফেলা উপাদানটি রিটার্ন করে।</li>
            <code>
                let fruits = ['apple', 'banana', 'cherry'];<br/>
                let firstFruit = fruits.shift();<br/>
                console.log(firstFruit); // 'apple'<br/>
                console.log(fruits); // ['banana', 'cherry'] <br/>
            </code>

            <li>array.unshift(): রের শুরুতে এক বা একাধিক উপাদান add করে এবং নতুন অ্যারের length return করে।</li>
            <code>
                let numbers = [2, 3, 4];<br/>
                numbers.unshift(0, 1);<br/>
                console.log(numbers); // [0, 1, 2, 3, 4] <br/>
            </code>

            <li>delete array[index]: অ্যারের একটি উপাদান মুছে ফেলে, কিন্তু অ্যারে তে একটি Hole রেখে দেয় (অর্থাৎ, উপাদানগুলি সরানো হয় না এবং অ্যারের দৈর্ঘ্য পরিবর্তিত হয় না)।</li>

            <li>array.splice(): একটি নির্দিষ্ট ইনডেক্সে উপাদান যোগ করা বা মুছে ফেলা।</li>
            <code>
                let array = [1, 2, 3, 4, 5];<br/>
                array.splice(2, 2, 'a', 'b');<br/>
                console.log(array); // [1, 2, 'a', 'b', 5];<br/>
            </code>
            <li>array.slice(): অ্যারের একটি অংশের একটি part কপি করে নতুন অ্যারেতে রিটার্ন করে।</li>
            <code>
                let array = [1, 2, 3, 4, 5];<br/>
                let newArray = array.slice(1, 4);<br/>
                console.log(newArray); // [2, 3, 4] <br/>
            </code>
            <div> Sort methods:</div>
            <li>sort(): Array এর এলিমেন্টগুলোকে alphabetically বা numerically sort করে।</li>
            <code>
                let fruits = ['mango', 'apple', 'banana'];
                <br/>
                fruits.sort();
                <br/>
                console.log(fruits); // আউটপুট: ['apple', 'banana', 'mango']
                <br/>
                let numbers = [40, 100, 1, 5, 25, 10];
                <br/>
                numbers.sort();
                <br/>
                console.log(numbers); // আউটপুট: [1, 5, 10, 25, 40, 100]
            </code>
            <li>reverse(): Array এর এলিমেন্টগুলোকে উল্টে দেয়, অর্থাৎ শেষ থেকে শুরু পর্যন্ত।</li>
            <code>
                let fruits = ['mango', 'apple', 'banana'];
                <br/>
                fruits.reverse();
                <br/>
                console.log(fruits); // আউটপুট: ['banana', 'apple', 'mango']
            </code>
            <br/>
            Iteration methods:
            <br/>
            <li>forEach() মেথডটি array এর প্রতিটি এলিমেন্টের জন্য একটি ফাংশন কল করে। এটি কোন value রিটার্ন করে
                না, শুধু প্রতিটি এলিমেন্টের উপর কাজ করে।
            </li>
            <code>

                let fruits = ['apple', 'banana', 'mango'];
                <br/>
                fruits.forEach(fruit => console.log(fruit)); // আউটপুট:
                <br/>
                "// 'apple'"<br/>
                "// 'banana'"
                <br/>
                "// 'mango'"
            </code>
            <li>map(): Array এর প্রতিটি এলিমেন্টের জন্য একটি ফাংশন চালিয়ে একটি নতুন array রিটার্ন করে।</li>
            <code>
                let numbers = [1, 2, 3, 4];
                <br/>
                let doubled = numbers.map(num => num * 2);
                <br/>
                console.log(doubled); // আউটপুট: [2, 4, 6, 8]
            </code>
            <li>filter(): Array এর প্রতিটি এলিমেন্টের জন্য একটি condition পরীক্ষা করে এবং condition পূরণ করা
                এলিমেন্টগুলোকে নিয়ে একটি নতুন array তৈরি করে।
            </li>
            <code>
                let numbers = [1, 2, 3, 4, 5];
                <br/>
                let even = numbers.filter(num => num % 2 === 0);
                <br/>
                console.log(even); // আউটপুট: [2, 4]
            </code>
            <li>reduce(): Array এর সব এলিমেন্টগুলিকে একটি single value তে রূপান্তর করে। এটি accumulator এবং
                current value নামক দুটি প্যারামিটার গ্রহণ করে।
            </li>
            <code>
                let numbers = [1, 2, 3, 4];
                <br/>
                let sum = numbers.reduce((acc, current) => acc + current, 0);
                <br/>
                console.log(sum); // আউটপুট: 10
            </code>
        </div>
    );
}

export default Array;

