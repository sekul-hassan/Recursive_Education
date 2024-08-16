import React from 'react';

function Bitwise() {
    return (
        <div>
            <span className="globalSubTitle">Bitwise Operators (বিটওয়াইজ অপারেটর) : </span>
            <span>বিটওয়াইজ অপারেটরগুলো সংখ্যার বিটের উপর কাজ করে। জাভাস্ক্রিপ্টে বিভিন্ন বিটওয়াইজ অপারেটর ব্যবহার করা হয়:</span>
            <br/>

            <span className="globalSubTitle">1. AND (বিটওয়াইজ এন্ড) - &amp;</span> <br/>
            <span>এই অপারেটরটি দুইটি বিটের মধ্যে একটি বিটওয়াইজ এন্ড অপারেশন করে।</span>
            <br/>
            <code>
                {`let a = 5; // বিট: 0101`} <br/>
                {`let b = 3; // বিট: 0011`} <br/>
                {`let result = a & b;`} <br/>
                {`console.log(result);`} <br/>
                {/* 'আউটপুট: 1 (বিট: 0001)' */}
            </code>
            <br/>

            <span className="globalSubTitle">2. OR (বিটওয়াইজ অর) - |</span> <br/>
            <span>এই অপারেটরটি দুইটি বিটের মধ্যে একটি বিটওয়াইজ অর অপারেশন করে।</span>
            <br/>
            <code>
                {`let a = 5; // বিট: 0101`} <br/>
                {`let b = 3; // বিট: 0011`} <br/>
                {`let result = a | b;`} <br/>
                {`console.log(result);`} <br/>
                {/* 'আউটপুট: 7 (বিট: 0111)' */}
            </code>
            <br/>

            <span className="globalSubTitle">3. XOR (বিটওয়াইজ এক্সওআর) - ^</span> <br/>
            <span>এই অপারেটরটি দুইটি বিটের মধ্যে একটি বিটওয়াইজ এক্সওআর অপারেশন করে।</span>
            <br/>
            <code>
                {`let a = 5; // বিট: 0101`} <br/>
                {`let b = 3; // বিট: 0011`} <br/>
                {`let result = a ^ b;`} <br/>
                {`console.log(result);`} <br/>
                {/* 'আউটপুট: 6 (বিট: 0110)' */}
            </code>
            <br/>

            <span className="globalSubTitle">4. NOT (বিটওয়াইজ নট) - ~</span> <br/>
            <span>এই অপারেটরটি একটি বিটের প্রতিটি বিটের উল্টো করে দেয়।</span>
            <br/>
            <code>
                {`let a = 5; // বিট: 0101`} <br/>
                {`let result = ~a;`} <br/>
                {`console.log(result);`} <br/>
                {/* 'আউটপুট: -6 (বিট: 1010)' */}
            </code>
            <br/>

            <span className="globalSubTitle">5. Left Shift (বিটওয়াইজ লেফট শিফট) - {"<<"} </span> <br/>
            <span>এই অপারেটরটি বিটগুলোকে বাম দিকে সরিয়ে দেয়।</span>
            <br/>
            <code>
                {`let a = 5; // বিট: 00000101`} <br/>
                {`let result = a << 2;`} <br/>
                {`console.log(result);`} <br/>
                {/* 'আউটপুট: 20 (বিট: 00010100)' */}
            </code>
            <br/>

            <span className="globalSubTitle">6. Right Shift (বিটওয়াইজ রাইট শিফট) - >></span> <br/>
            <span>এই অপারেটরটি বিটগুলোকে ডান দিকে সরিয়ে দেয়।</span>
            <br/>
            <code>
                {`let a = 20; // বিট: 00010100`} <br/>
                {`let result = a >> 2;`} <br/>
                {`console.log(result);`} <br/>
                {/* 'আউটপুট: 5 (বিট: 00000101)' */}
            </code>
            <br/>

            <span className="globalSubTitle">7. Unsigned Right Shift (বিটওয়াইজ আনসাইনড রাইট শিফট) - >>></span> <br/>
            <span>এই অপারেটরটি সাইন বিটকে উপেক্ষা করে বিটগুলোকে ডান দিকে সরিয়ে দেয়।</span>
            <br/>
            <code>
                {`let a = -20; // বিট: 11101100`} <br/>
                {`let result = a >>> 2;`} <br/>
                {`console.log(result);`} <br/>
                {/* 'আউটপুট: 1073741819' */}
            </code>
        </div>
    );
}

export default Bitwise;
