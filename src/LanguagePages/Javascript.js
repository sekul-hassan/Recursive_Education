import React from 'react';
import {Container} from "react-bootstrap";

function Javascript(props) {
    return (
        <Container fluid="true" className="text-start globalSubTitle link-light-3">
            <h4 className="globalSubTitle text-dark mt-2"><strong className="title text-dark">Javascript : </strong>জাভাস্ক্রিপ্ট
                হচ্ছে একটি প্রোগ্রামিং Language । </h4>

            <h4 className="globalSubTitle link-light-3 text-dark mt-3"><strong className="title text-dark">Note
                : </strong>জাভাস্ক্রিপ্ট আর জাভা এক নয়। জাভা সম্পূর্ণরূপে অবজেক্ট ওরিয়েন্টেড, আর জাভাস্ক্রিপ্ট ফাংশনাল
                এবং অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং দুটোই মেইনটেইন করে। এক সময় জাভাস্ক্রিপ্ট শুধু ব্রাউজারে রান হতো,
                এখন জাভাস্ক্রিপ্ট ব্রাউজার এবং সার্ভার উভয় জায়গায়ই রান করে। </h4>

            <h4 className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Variable : </strong>জাভাস্ক্রিপ্টে
                চারভাবে ভেরিয়েবল ডিক্লেয়ার করা যায় : </h4>
            <ol>
                <li>Automatically</li>
                <li>Using <span className="text-primary">var</span></li>
                <li>Using <span className="text-primary">let</span></li>
                <li>Using <span className="text-primary">const</span></li>
            </ol>

            <h4 className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Where run JS
                : </strong> জাভাস্ক্রিপ্ট দুটি জায়গায় রান করানো যায় : </h4>
            <ol>
                <li><p> Browser : ব্রাউজারে রান করাতে চাইলে,<strong> &lt;script&gt;</strong>ট্যাগের ভিতরে জাভাস্ক্রিপ্ট
                    কোড
                    লিখতে হয়।</p>
                    <p>
                        <strong>Concept :</strong> এখানে জাভাস্ক্রিপ্ট শুধুমাত্র HTML এবং CSS কে ম্যানিপুলেট করতে
                        ব্যবহার করা হয়। তাই যেটিকে
                        আপনি ম্যানিপুলেট করতে চান, সেটাকে আগে ধরতে হবে (যেমন: document.querySelector() বা
                        getElementById() এর
                        মাধ্যমে) এবং তারপর সেটাতে কাজ করতে হবে।
                    </p>
                </li>
                <li>
                    <strong>Server : </strong>সার্ভারে রান করানোর জন্য, অন্য যেকোনো প্রোগ্রামিং ভাষার মতোই একটি
                    কম্পাইলার বা রানটাইম প্রয়োজন হয়। উদাহরণস্বরূপ, Node.js ব্যবহার করে জাভাস্ক্রিপ্ট সার্ভারে রান
                    করানো যায়।
                </li>
            </ol>

            <h4 className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Output : </strong>
                জাভাস্ক্রিপ্টে আউটপুট দেখানোর জন্য আমরা চারটি ভিন্ন ফাংশন ব্যবহার করতে পারি :
            </h4>
            <ol>
                <li>
                    <p>
                        <strong>console.log() : </strong>এটি সবচেয়ে বেশি ব্যবহৃত হয় এবং কনসোলের ভিতরে আউটপুট দেখায়।
                        সাধারণত ডিবাগিং এর জন্য ব্যবহার করা হয়।
                    </p>
                </li>
                <li>
                    <p>
                        <strong>alert() : </strong> এটি একটি পপ-আপ অ্যালার্ট বক্স প্রদর্শন করে যা ব্যবহারকারীর কাছে
                        মেসেজ দেখায়।
                    </p>
                </li>
                <li>
                    <p>
                        <strong> document.write() : </strong> এটি পেজের ভিতরে সরাসরি HTML কন্টেন্ট যোগ করতে ব্যবহৃত হয়।
                        সাধারণত, ডেভেলপাররা এটি খুব বেশি ব্যবহার করে না, কারণ এটি পুরো পেজের কন্টেন্টকে পরিবর্তন করতে
                        পারে।
                    </p>
                </li>
                <li>
                    <p>
                        <strong> innerHTML বা textContent : </strong> এটি HTML এলিমেন্টের ভিতরে কন্টেন্ট আপডেট করতে
                        ব্যবহৃত হয়। </p>
                </li>
            </ol>

            <h4 className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Comment : </strong>জাভাস্ক্রিপ্টে
                দুটি উপায়ে কমেন্ট লেখা যায় : </h4>
            <ol>
                <li>Single line :
                    <p>
                        এটি এক লাইনের কমেন্ট লেখার জন্য ব্যবহৃত হয়। // দিয়ে শুরু হয়।
                    </p>
                </li>
                <li>Multiple line :
                    <p>
                        একাধিক লাইনের কমেন্ট লেখার জন্য ব্যবহৃত হয়। /* দিয়ে শুরু হয় এবং */ দিয়ে শেষ হয়।
                    </p>
                </li>
            </ol>

            <h4 className="globalSubTitle text-dark mt-3">
                <strong className="title text-dark">Operator : </strong>
                Math করার জন্য আমরা যে অপারেটরগুলি ব্যবহার করি
                <strong> &lt;+ , - , * , / , &lt; , &gt; , = &gt; </strong>
            </h4>


            <p className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Assignment : </strong>
                জাভাস্ক্রিপ্টে assignment বলতে একটি ভেরিয়েবলে মান নির্ধারণ বা অ্যাসাইন করার প্রক্রিয়াকে বুঝায়। এটি সাধারণত = অপারেটরের মাধ্যমে করা হয়।<br/>
                let x = 10; // এখানে 'x' ভেরিয়েবলে '10' মান অ্যাসাইন করা হচ্ছে।

            </p>
            <h4 className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Data types : </strong>
                জাভাস্ক্রিপ্টে মোট ৮ ধরনের ডেটা টাইপ রয়েছে : <br/>
                <p className="link-light-3">1. Primitive Types (প্রিমিটিভ টাইপস) : <br/>
                    <li>String: টেক্সট ডেটা যেমন "Hello, World!"</li>
                    <li>Number: সংখ্যা (ইন্টিজার বা ফ্লোট) যেমন 42, 3.14</li>
                    <li>BigInt: বড় সংখ্যার জন্য ব্যবহৃত হয় যেমন 1234567890123456789012345678901234567890n</li>
                    <li>Boolean: সত্য (true) বা মিথ্যা (false)</li>
                    <li>Undefined: একটি ভেরিয়েবল যে কোনো মান পায়নি তা নির্দেশ করে</li>
                    <li>Null: একটি আসল নাল মান নির্দেশ করে, সাধারণত অনুপস্থিত বা অজ্ঞাত ডেটার জন্য ব্যবহৃত হয়</li>
                    <li>Symbol: ইউনিক আইডেন্টিফায়ার তৈরি করতে ব্যবহৃত হয় (ES6 থেকে এসেছে) যেমন Symbol('description')</li>
                    <li>Object: অবজেক্ট ডেটা টাইপ বিভিন্ন প্রোপার্টি ও মেথড ধারণ করে</li>
                </p>
                <p className="link-light-3">2. Complex Type (কমপ্লেক্স টাইপ) : <br/>
                    <li>Array: একাধিক ভ্যালু স্টোর করার জন্য ব্যবহৃত হয়, উদাহরণস্বরূপ [1, 2, 3]</li>
                    <li>Function: কার্য সম্পাদনের জন্য ব্যবহৃত হয়, উদাহরণস্বরূপ  <br/>function myFunction() { /* code */ }</li>
                </p>
            </h4>

            <h4 className="globalSubTitle text-dark mt-3 link-light-3"><strong className="title text-dark">Function : </strong>
                একটি নির্দিষ্ট কাজ সম্পন্ন করার জন্য যে কোড ব্লকটি ব্যবহার করা হয়, সেটিকে function বলে। জাভাস্ক্রিপ্টে ফাংশন তৈরি করতে আমরা সাধারণত () (পারেনথেসিস) ব্র্যাকেটের ভিতরে যে কোড লিখি, তা ফাংশনের অংশ হিসেবে বিবেচিত হয়।<br/>
                <span> function functionName(parameters) {
                    // কোড যা কাজ সম্পন্ন করে
                }
                </span>
                <p>
                    জাভাস্ক্রিপ্টে ফাংশন কল করার সময় যে মানগুলি পাঠানো হয়, সেগুলিকে arguments (অ্যাগুমেন্টস) বলা হয়। আর ফাংশন সংজ্ঞায়িত করার সময় যেসব মান গ্রহণের জন্য প্যারামিটার নির্ধারণ করা হয়, সেগুলিকে parameters (প্যারামিটারস) বলা হয়।
                </p>
            </h4>
            <h4 className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Javascript : </strong> </h4>
            <h4 className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Javascript : </strong> </h4>
            <h4 className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Javascript : </strong> </h4>
            <h4 className="globalSubTitle text-dark mt-3"><strong className="title text-dark">Javascript : </strong> </h4>
        </Container>
    );
}

export default Javascript;
