import React from 'react';
import { Container } from "react-bootstrap";

function Dsa(props) {
    return (
        <Container fluid="true" className="text-start text-dark globalSubTitle link-light-3">
            <p className="mt-2">
                <strong>Array:</strong> একই ডেটা টাইপের একাধিক মান সংরক্ষণের জন্য array ব্যবহার করা হয়।
                জাভাস্ক্রিপ্টে অ্যারে তৈরির জন্য [] ব্র্যাকেট ব্যবহার করা হয়।
                <br />
                Example:
                <br />
                <code>
                    let numbers = [2, 3, 4, 5]; // এখানে [] ব্র্যাকেটের মধ্যে একটি অ্যারে তৈরি করা হয়েছে<br />
                    অ্যারে তৈরির সময় [] ব্র্যাকেট ব্যবহার করে মানগুলি কমা দ্বারা পৃথক করা হয় এবং অ্যারের মধ্যে সেগুলি রাখা হয়।
                    <br />
                    এছাড়াও, অ্যারে বিভিন্ন ডেটা টাইপের মান ধারণ করতে পারে:
                    <br />
                    let mixedArray = [1, 'hello', true, null];
                </code>
                <br />
                Example:
                <br />
                <code>
                    const cars = [];
                    <br />
                    cars[0] = "Saab";
                    <br />
                    cars[1] = "Volvo";
                    <br />
                    cars[2] = "BMW";
                </code>
                <br />
                Example:
                <br />
                <code>
                    const cars = new Array("Saab", "Volvo", "BMW");
                </code>
                <br />
                Accessing:
                <br />
                <code>
                    console.log(cars[0]); // output saab
                </code>
                <br />
                Changing element:
                <br />
                <code>
                    cars[0] = "Opel";
                </code>
                <br />
                Array methods:
                <br />
                <code>
                    array.length // return length of array
                    <br />
                    let fruits = ['apple', 'banana', 'mango'];
                    <br />
                    console.log(fruits.length); // আউটপুট: 3
                    <br />
                    array.toString() // মেথডটি array কে একটি string এ রূপান্তর করে, যেখানে প্রতিটি এলিমেন্ট কমা দিয়ে আলাদা করা থাকে।
                    <br />
                    let fruits = ['apple', 'banana', 'mango'];
                    <br />
                    console.log(fruits.toString()); // আউটপুট: 'apple,banana,mango'
                    <br />
                    array.at() মেথডটি array এর নির্দিষ্ট পজিশনের এলিমেন্ট রিটার্ন করে। পজিটিভ এবং নেগেটিভ উভয় ইনডেক্স ব্যবহার করা যায়। নেগেটিভ ইনডেক্স array এর শেষ থেকে গোনা হয়।
                    <br />
                    let fruits = ['apple', 'banana', 'mango'];
                    <br />
                    console.log(fruits.at(1)); // আউটপুট: 'banana'
                    <br />
                    console.log(fruits.at(-1)); // আউটপুট: 'mango'
                    <br />
                    array.join() মেথডটি array এর সব এলিমেন্টগুলিকে একটি string এ রূপান্তর করে এবং একটি নির্দিষ্ট separator (যেমন, কমা, স্পেস) ব্যবহার করে তাদের সংযুক্ত করে।
                    <br />
                    let fruits = ['apple', 'banana', 'mango'];
                    <br />
                    console.log(fruits.join(', ')); // আউটপুট: 'apple, banana, mango'
                    <br />
                    console.log(fruits.join(' - ')); // আউটপুট: 'apple - banana - mango'
                    <br />
                    array.push() // মেথডটি একটি array এর শেষে একটি বা একাধিক এলিমেন্ট যোগ করে এবং নতুন array এর length রিটার্ন করে।
                    <br />
                    let fruits = ['apple', 'banana'];
                    <br />
                    fruits.push('mango');
                    <br />
                    console.log(fruits); // আউটপুট: ['apple', 'banana', 'mango']
                    <br />
                    let newLength = fruits.push('orange');
                    <br />
                    console.log(newLength); // আউটপুট: 4
                    <br />
                    array.pop() মেথডটি একটি array এর শেষ এলিমেন্টটি সরিয়ে ফেলে এবং সেই সরানো এলিমেন্টটি রিটার্ন করে।
                    <br />
                    let fruits = ['apple', 'banana', 'mango'];
                    <br />
                    let lastFruit = fruits.pop();
                    <br />
                    console.log(lastFruit); // আউটপুট: 'mango'
                    <br />
                    console.log(fruits); // আউটপুট: ['apple', 'banana']
                </code>
                <br />
                Search methods:
                <br />
                <code>
                    <li>indexOf(): Array এর মধ্যে নির্দিষ্ট এলিমেন্টের প্রথম occurrence এর index রিটার্ন করে।</li>
                    <p>
                        let fruits = ['apple', 'banana', 'mango', 'banana'];
                        <br />
                        let index = fruits.indexOf('banana');
                        <br />
                        console.log(index); // আউটপুট: 1
                        <br />
                        let notFoundIndex = fruits.indexOf('orange');
                        <br />
                        console.log(notFoundIndex); // আউটপুট: -1
                    </p>
                    <li>includes(): Array এর মধ্যে নির্দিষ্ট এলিমেন্ট আছে কিনা তা true বা false রিটার্ন করে।</li>
                    <p>
                        let fruits = ['apple', 'banana', 'mango'];
                        <br />
                        let hasBanana = fruits.includes('banana');
                        <br />
                        console.log(hasBanana); // আউটপুট: true
                        <br />
                        let hasOrange = fruits.includes('orange');
                        <br />
                        console.log(hasOrange); // আউটপুট: false
                    </p>
                    <li>find(): Array এর মধ্যে নির্দিষ্ট condition পূরণ করা প্রথম এলিমেন্ট রিটার্ন করে। যদি কোন এলিমেন্ট না পাওয়া যায়, এটি undefined রিটার্ন করে।</li>
                    <p>
                        let numbers = [5, 12, 8, 130, 44];
                        <br />
                        let found = numbers.find(element => element > 10);
                        <br />
                        console.log(found); // আউটপুট: 12
                    </p>
                    <li>findIndex(): Array এর মধ্যে নির্দিষ্ট condition পূরণ করা প্রথম এলিমেন্টের index রিটার্ন করে। যদি কোন এলিমেন্ট না পাওয়া যায়, এটি -1 রিটার্ন করে।</li>
                    <p>
                        let numbers = [5, 12, 8, 130, 44];
                        <br />
                        let foundIndex = numbers.findIndex(element => element > 10);
                        <br />
                        console.log(foundIndex); // আউটপুট: 1
                    </p>
                </code>
                <br />
                Sort methods:
                <br />
                <code>
                    <li>sort(): Array এর এলিমেন্টগুলোকে alphabetically বা numerically sort করে।</li>
                    <p>
                        let fruits = ['mango', 'apple', 'banana'];
                        <br />
                        fruits.sort();
                        <br />
                        console.log(fruits); // আউটপুট: ['apple', 'banana', 'mango']
                        <br />
                        let numbers = [40, 100, 1, 5, 25, 10];
                        <br />
                        numbers.sort();
                        <br />
                        console.log(numbers); // আউটপুট: [1, 5, 10, 25, 40, 100]
                    </p>
                    <li>reverse(): Array এর এলিমেন্টগুলোকে উল্টে দেয়, অর্থাৎ শেষ থেকে শুরু পর্যন্ত।</li>
                    <p>
                        let fruits = ['mango', 'apple', 'banana'];
                        <br />
                        fruits.reverse();
                        <br />
                        console.log(fruits); // আউটপুট: ['banana', 'apple', 'mango']
                    </p>
                </code>
                <br />
                Iteration methods:
                <br />
                <code>
                    <li>forEach() মেথডটি array এর প্রতিটি এলিমেন্টের জন্য একটি ফাংশন কল করে। এটি কোন value রিটার্ন করে না, শুধু প্রতিটি এলিমেন্টের উপর কাজ করে।</li>
                    <p>
                        let fruits = ['apple', 'banana', 'mango'];
                        <br />
                        fruits.forEach(fruit => console.log(fruit)); // আউটপুট:
                        <br />
                        "// 'apple'"<br />
                        "// 'banana'"
                        <br />
                        "// 'mango'"
                    </p>
                    <li>map(): Array এর প্রতিটি এলিমেন্টের জন্য একটি ফাংশন চালিয়ে একটি নতুন array রিটার্ন করে।</li>
                    <p>
                        let numbers = [1, 2, 3, 4];
                        <br />
                        let doubled = numbers.map(num => num * 2);
                        <br />
                        console.log(doubled); // আউটপুট: [2, 4, 6, 8]
                    </p>
                    <li>filter(): Array এর প্রতিটি এলিমেন্টের জন্য একটি condition পরীক্ষা করে এবং condition পূরণ করা এলিমেন্টগুলোকে নিয়ে একটি নতুন array তৈরি করে।</li>
                    <p>
                        let numbers = [1, 2, 3, 4, 5];
                        <br />
                        let even = numbers.filter(num => num % 2 === 0);
                        <br />
                        console.log(even); // আউটপুট: [2, 4]
                    </p>
                    <li>reduce(): Array এর সব এলিমেন্টগুলিকে একটি single value তে রূপান্তর করে। এটি accumulator এবং current value নামক দুটি প্যারামিটার গ্রহণ করে।</li>
                    <p>
                        let numbers = [1, 2, 3, 4];
                        <br />
                        let sum = numbers.reduce((acc, current) => acc + current, 0);
                        <br />
                        console.log(sum); // আউটপুট: 10
                    </p>
                </code>
            </p>
        </Container>
    );
}

export default Dsa;
