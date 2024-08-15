import React from 'react';

function Javascript(props) {
    return (
        <div className="text-start  link-light-3">
            <div><span className="globalSubTitle">Javascript : </span>জাভাস্ক্রিপ্ট
                হচ্ছে একটি প্রোগ্রামিং Language ।
            </div>

            <divv><span className="globalSubTitle text-dark">Note
                : </span>জাভাস্ক্রিপ্ট আর জাভা এক নয়। জাভা সম্পূর্ণরূপে অবজেক্ট ওরিয়েন্টেড, আর জাভাস্ক্রিপ্ট ফাংশনাল
                এবং অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং দুটোই মেইনটেইন করে। এক সময় জাভাস্ক্রিপ্ট শুধু ব্রাউজারে রান হতো,
                এখন জাভাস্ক্রিপ্ট ব্রাউজার এবং সার্ভার উভয় জায়গায়ই রান করে। </divv>

            <div><span className="globalSubTitle text-dark">Variable : </span>জাভাস্ক্রিপ্টে
                চারভাবে ভেরিয়েবল ডিক্লেয়ার করা যায় : </div>
            <ol>
                <li>Automatically</li>
                <li>Using <span className="text-primary">var</span></li>
                <li>Using <span className="text-primary">let</span></li>
                <li>Using <span className="text-primary">const</span></li>
            </ol>

            <divv><span className="globalSubTitle text-dark">Where run JS
                : </span> জাভাস্ক্রিপ্ট দুটি জায়গায় রান করানো যায় : </divv>
            <ol>
                <li><v> Browser : ব্রাউজারে রান করাতে চাইলে,<span> &lt;script&gt;</span>ট্যাগের ভিতরে জাভাস্ক্রিপ্ট
                    কোড
                    লিখতে হয়।</v>
                    <div>
                        <span>Concept :</span> এখানে জাভাস্ক্রিপ্ট শুধুমাত্র HTML এবং CSS কে ম্যানিপুলেট করতে
                        ব্যবহার করা হয়। তাই যেটিকে
                        আপনি ম্যানিপুলেট করতে চান, সেটাকে আগে ধরতে হবে (যেমন: document.querySelector() বা
                        getElementById() এর
                        মাধ্যমে) এবং তারপর সেটাতে কাজ করতে হবে।
                    </div>
                </li>
                <li>
                    <span>Server : </span>সার্ভারে রান করানোর জন্য, অন্য যেকোনো প্রোগ্রামিং ভাষার মতোই একটি
                    কম্পাইলার বা রানটাইম প্রয়োজন হয়। উদাহরণস্বরূপ, Node.js ব্যবহার করে জাভাস্ক্রিপ্ট সার্ভারে রান
                    করানো যায়।
                </li>
            </ol>

            <div className=" text-dark mt-3"><span className="globalSubTitle text-dark">Output : </span>
                জাভাস্ক্রিপ্টে আউটপুট দেখানোর জন্য আমরা চারটি ভিন্ন ফাংশন ব্যবহার করতে পারি :
            </div>
            <ol>
                <li>
                    <div>
                        <span>console.log() : </span>এটি সবচেয়ে বেশি ব্যবহৃত হয় এবং কনসোলের ভিতরে আউটপুট দেখায়।
                        সাধারণত ডিবাগিং এর জন্য ব্যবহার করা হয়।
                    </div>
                </li>
                <li>
                    <div>
                        <span>alert() : </span> এটি একটি পপ-আপ অ্যালার্ট বক্স প্রদর্শন করে যা ব্যবহারকারীর কাছে
                        মেসেজ দেখায়।
                    </div>
                </li>
                <li>
                    <div>
                        <span> document.write() : </span> এটি পেজের ভিতরে সরাসরি HTML কন্টেন্ট যোগ করতে ব্যবহৃত হয়।
                        সাধারণত, ডেভেলপাররা এটি খুব বেশি ব্যবহার করে না, কারণ এটি পুরো পেজের কন্টেন্টকে পরিবর্তন করতে
                        পারে।
                    </div>
                </li>
                <li>
                    <dv>
                        <span> innerHTML বা textContent : </span> এটি HTML এলিমেন্টের ভিতরে কন্টেন্ট আপডেট করতে
                        ব্যবহৃত হয়। </dv>
                </li>
            </ol>

            <divv className=" text-dark mt-3"><span className="globalSubTitle text-dark">Comment : </span>জাভাস্ক্রিপ্টে
                দুটি উপায়ে কমেন্ট লেখা যায় : </divv>
            <ol>
                <li>Single line :
                    <div>
                        এটি এক লাইনের কমেন্ট লেখার জন্য ব্যবহৃত হয়। // দিয়ে শুরু হয়।
                    </div>
                </li>
                <li>Multiple line :
                    <div>
                        একাধিক লাইনের কমেন্ট লেখার জন্য ব্যবহৃত হয়। /* দিয়ে শুরু হয় এবং */ দিয়ে শেষ হয়।
                    </div>
                </li>
            </ol>

            <div className=" text-dark mt-3">
                <span className="globalSubTitle text-dark">Operator : </span>
                Math করার জন্য আমরা যে অপারেটরগুলি ব্যবহার করি
                <span> &lt;+ , - , * , / , &lt; , &gt; , = &gt; </span>
            </div>


            <div className=" text-dark mt-3"><span className="globalSubTitle text-dark">Assignment : </span>
                জাভাস্ক্রিপ্টে assignment বলতে একটি ভেরিয়েবলে মান নির্ধারণ বা অ্যাসাইন করার প্রক্রিয়াকে বুঝায়। এটি সাধারণত = অপারেটরের মাধ্যমে করা হয়।<br/>
                let x = 10; // এখানে 'x' ভেরিয়েবলে '10' মান অ্যাসাইন করা হচ্ছে।

            </div>
            <div className=" text-dark mt-3"><span className="globalSubTitle text-dark">Data types : </span>
                জাভাস্ক্রিপ্টে মোট ৮ ধরনের ডেটা টাইপ রয়েছে : <br/>
                <div className="link-light-3">1. Primitive Types (প্রিমিটিভ টাইপস) : <br/>
                    <li>String: টেক্সট ডেটা যেমন "Hello, World!"</li>
                    <li>Number: সংখ্যা (ইন্টিজার বা ফ্লোট) যেমন 42, 3.14</li>
                    <li>BigInt: বড় সংখ্যার জন্য ব্যবহৃত হয় যেমন 1234567890123456789012345678901234567890n</li>
                    <li>Boolean: সত্য (true) বা মিথ্যা (false)</li>
                    <li>Undefined: একটি ভেরিয়েবল যে কোনো মান পায়নি তা নির্দেশ করে</li>
                    <li>Null: একটি আসল নাল মান নির্দেশ করে, সাধারণত অনুপস্থিত বা অজ্ঞাত ডেটার জন্য ব্যবহৃত হয়</li>
                    <li>Symbol: ইউনিক আইডেন্টিফায়ার তৈরি করতে ব্যবহৃত হয় (ES6 থেকে এসেছে) যেমন Symbol('description')</li>
                    <li>Object: অবজেক্ট ডেটা টাইপ বিভিন্ন প্রোপার্টি ও মেথড ধারণ করে</li>
                </div>
                <div className="link-light-3">2. Complex Type (কমপ্লেক্স টাইপ) : <br/>
                    <li>Array: একাধিক ভ্যালু স্টোর করার জন্য ব্যবহৃত হয়, উদাহরণস্বরূপ [1, 2, 3]</li>
                    <li>Function: কার্য সম্পাদনের জন্য ব্যবহৃত হয়, উদাহরণস্বরূপ  <br/>function myFunction() { /* code */ }</li>
                </div>
            </div>

            <div className=" text-dark mt-3 link-light-3"><span className="globalSubTitle text-dark">Function : </span>
                একটি নির্দিষ্ট কাজ সম্পন্ন করার জন্য যে কোড ব্লকটি ব্যবহার করা হয়, সেটিকে function বলে। জাভাস্ক্রিপ্টে ফাংশন তৈরি করতে আমরা সাধারণত () (পারেনথেসিস) ব্র্যাকেটের ভিতরে যে কোড লিখি, তা ফাংশনের অংশ হিসেবে বিবেচিত হয়।<br/>
                <span> function functionName(parameters) {
                    // কোড যা কাজ সম্পন্ন করে
                }
                </span>
                <div>
                    জাভাস্ক্রিপ্টে ফাংশন কল করার সময় যে মানগুলি পাঠানো হয়, সেগুলিকে arguments (অ্যাগুমেন্টস) বলা হয়। আর ফাংশন সংজ্ঞায়িত করার সময় যেসব মান গ্রহণের জন্য প্যারামিটার নির্ধারণ করা হয়, সেগুলিকে parameters (প্যারামিটারস) বলা হয়।
                </div>
            </div>
        </div>
    );
}

export default Javascript;
