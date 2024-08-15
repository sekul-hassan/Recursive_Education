import React from 'react';
import {Container} from "react-bootstrap";

function Dsa(props) {
    return (
        <Container fluid="true" className="text-start text-dark globalSubTitle link-light-3">
            <p className=" mt-2"><strong>Array : </strong>
                একই ডেটা টাইপের একাধিক মান সংরক্ষণের জন্য array ব্যবহার করা হয়। জাভাস্ক্রিপ্টে অ্যারে তৈরির জন্য []
                ব্র্যাকেট ব্যবহার করা হয়।<br/>
                Example : <br/>
              <code>
                  let numbers = [2, 3, 4, 5]; // এখানে [] ব্র্যাকেটের মধ্যে একটি অ্যারে তৈরি করা হয়েছে<br/>
                  অ্যারে তৈরির সময় [] ব্র্যাকেট ব্যবহার করে মানগুলি কমা দ্বারা পৃথক করা হয় এবং অ্যারের মধ্যে সেগুলি রাখা
                  হয়।<br/>
                  এছাড়াও, অ্যারে বিভিন্ন ডেটা টাইপের মান ধারণ করতে পারে : <br/>
                  let mixedArray = [1, 'hello', true, null];<br/>
              </code>
               Example : <br/>
                <code>
                    const cars = [];<br/>
                    cars[0]= "Saab";<br/>
                    cars[1]= "Volvo";<br/>
                    cars[2]= "BMW";<br/>
                </code>
                Example : <br/>
                <code>
                    const cars = new Array("Saab", "Volvo", "BMW");<br/>
                </code>
                Accessing : <br/>
                <code>
                    console.log(cars[0]); <br/>
                    // output saab <br/>
                </code>
                Changing element : <br/>
                <code>
                    cars[0] = "Opel"; <br/>
                </code>
                <code>
                    array.length // return length of array <br/>
                    array.sort() // sort the array <br/>
                    array.push() // মেথডটি একটি array এর শেষে একটি বা একাধিক এলিমেন্ট যোগ করে এবং নতুন array এর length রিটার্ন করে। <br/>
                    pop() মেথডটি একটি array এর শেষ এলিমেন্টটি সরিয়ে ফেলে এবং সেই সরানো এলিমেন্টটি রিটার্ন করে। <br/>

                </code>
            </p>

            <p className=" mt-2">
                <strong>Object : </strong>
                জাভাস্ক্রিপ্টে অবজেক্ট ডিক্লেয়ার করার জন্য &#123;  &#125; ব্র্যাকেট ব্যবহার করা হয়।
                যখন একটি কিছুর একাধিক প্রপার্টি থাকে, তখন আমরা সেই প্রপার্টিগুলি অবজেক্টের ভিতরে ডিক্লেয়ার করি।
                <br/>
               Example :
                <br/>
                <code>
                    let person = &#123;
                    name: 'Alice',
                    age: 30,
                    job: 'Engineer'
                    &#125;;
                </code><br/>
                <span>
                    জাভাস্ক্রিপ্টে new কিওয়ার্ড ব্যবহার করে অবজেক্ট তৈরি করা সম্ভব, তবে এটি কিছুটা ভিন্নভাবে করা হয়। আমরা সাধারণত ক্লাস ব্যবহার করে অবজেক্ট তৈরি করি, কিন্তু new কিওয়ার্ড ব্যবহার করে অবজেক্ট তৈরি করতে চাইলে Object কনস্ট্রাক্টর ব্যবহার করা হয়।
                </span>
                Example : <br/>
               <code>
                   let person = new Object();<br/>
                   person.name = 'Alice';<br/>
                   person.age = 30;<br/>
                   person.job = 'Engineer';<br/>
               </code>
                <span>
                     name, age, এবং job হল অবজেক্টের প্রপার্টি। প্রতিটি প্রপার্টি একটি কিজ (key) এবং তার মান (value) দিয়ে গঠিত।
                </span>
            </p>

            <p className=" mt-2">
                <strong>Object Methods </strong><br/>
                <span> Access : অবজেক্টের প্রপার্টি অ্যাক্সেস করতে ডট নোটেশন ব্যবহার করতে পারেন। এই পদ্ধতিতে, অবজেক্টের নাম এবং প্রপার্টির নামের মধ্যে একটি ডট (.) ব্যবহার করা হয়।</span><br/>
                Example : <br/>
                <code>
                    // ডট নোটেশন ব্যবহার করে প্রপার্টি অ্যাক্সেস করা <br/>
                    console.log(person.name);  // আউটপুট: Alice <br/>
                    console.log(person.age);   // আউটপুট: 30 <br/>
                    console.log(person.job);   // আউটপুট: Engineer <br/>
                </code>

                <span>Delete : আপনি JavaScript-এ একটি অবজেক্টের প্রপার্টি মুছে ফেলতে delete কীওয়ার্ড ব্যবহার করতে পারেন।</span><br/>
                <code>
                    // একটি প্রপার্টি মুছে ফেলা<br/>
                    delete person.age;
                </code>

            </p>

            <p className="mt-2">
                <strong>Display object : </strong> JavaScript-এ অবজেক্ট ডিপ্লে করার জন্য চারটি প্রধান পদ্ধতি ব্যবহার করা
                যেতে পারে <br/>
                <li>Displaying the Object Properties by name</li>
                <code>
                    person.name
                </code>
                <li>Displaying the Object Properties in a Loop</li>
                <code>
                    let text = "";<br/>
                    for (let x in person) &#123;<br/>
                    text += person[x] + " ";<br/>
                    &#125; <br/>
                    console.log(text);
                </code>
                <li>Displaying the Object using Object.values()</li>
                <span>
                    Object.values() ফাংশনটি একটি অবজেক্টের সমস্ত প্রপার্টি মানগুলির একটি অ্যারে প্রদান করে। এটি অবজেক্টের কীগুলির পরিবর্তে মানগুলির অ্যারে রিটার্ন করে।<br/>
                </span>
                <code>
                    let values = Object.values(person); <br/>
                    console.log(values);<br/>
                </code>

                <li>Object.entries()</li>
                <span>
                    Object.entries() ফাংশনটি একটি অবজেক্টের সমস্ত প্রপার্টি এবং তাদের মানের একটি অ্যারে প্রদান করে, যেখানে প্রতিটি উপাদান একটি [key, value] পেয়ার হিসেবে থাকে। <br/>
                </span>
                <code>
                    let person = &#123;<br/>
                    name: 'Alice',<br/>
                    age: 30,<br/>
                    job: 'Engineer'<br/>
                    &#125;;<br/>


                    let entries = Object.entries(person);<br/>

                    console.log(entries);<br/>
                    // আউটপুট: [['name', 'Alice'], ['age', 30], ['job', 'Engineer']] <br/>
                </code>
                <li>Using JSON.stringify()</li>
                <span>
                    JSON.stringify() ফাংশনটি একটি অবজেক্টকে স্ট্রিং ফরম্যাটে রূপান্তরিত করে। এটি সাধারণত অবজেক্টকে JSON ফরম্যাটে রূপান্তরের জন্য ব্যবহৃত হয়, যা পরবর্তীতে সেভ, পাঠানো বা অন্য কোন স্ট্রিং অপারেশন করার জন্য উপকারী। <br/>
                </span>
                <code>
                    let person = &#123;<br/>
                    name: 'Alice',<br/>
                    age: 30,<br/>
                    job: 'Engineer'<br/>
                    &#125;;<br/>

                    let jsonString = JSON.stringify(person);

                    console.log(jsonString);<br/>
                    // আউটপুট <br/>
                    &#123;"name":"Alice","age":30,"job":"Engineer"&#125;

                </code>

            </p>

        </Container>
    );
}

export default Dsa;

