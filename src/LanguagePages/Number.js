import React from 'react';

function Number() {
    return (
        <div>
            <span className="globalSubTitle">Number Operations : </span>
            <span>JavaScript-এ Number টাইপের Data নিয়ে বিভিন্ন ধরনের অপারেশন করা যায়।</span>
            <br/>

            <span className="globalSubTitle">1. Number Properties : </span> <br/>
            <span>JavaScript-এর Number এর কিছু property আছে, যেমন `MAX_VALUE`, `MIN_VALUE`, `NaN` ইত্যাদি।</span>
            <br/>
            <code>
                {`console.log(Number.MAX_VALUE);`} <br/>
                {'// আউটপুট: 1.7976931348623157e+308'} <br/><br/>

                {`console.log(Number.MIN_VALUE);`} <br/>
                {'// আউটপুট: 5e-324'} <br/><br/>

                {`console.log(Number.NaN);`} <br/>
                {'// আউটপুট: NaN (Not a Number)'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">2. Number Methods :</span> <br/>
            <span>JavaScript-এ Number-এর জন্য অনেক গুলো মেথড আছে। নিচে কিছু উল্লেখযোগ্য মেথডের উদাহরণ দেওয়া হলো : </span>
            <br/>

            <span className="globalSubTitle">toFixed() :</span> <br/>
            <span>এই মেথডটি একটি নম্বরের নির্দিষ্ট সংখ্যক দশমিক স্থান পর্যন্ত কাটে এবং একটি স্ট্রিং রিটার্ন করে।</span>
            <br/>
            <code>
                {`let num = 5.6789;`} <br/>
                {`let result = num.toFixed(2);`} <br/>
                {`console.log(result);`} <br/>
                {'// আউটপুট: "5.68"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">toString():</span> <br/>
            <span>এই মেথডটি একটি নম্বরকে স্ট্রিং-এ রূপান্তর করে।</span>
            <br/>
            <code>
                {`let num = 123;`} <br/>
                {`let str = num.toString();`} <br/>
                {`console.log(str);`} <br/>
                {'// আউটপুট: "123"'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">parseInt() & parseFloat():</span> <br/>
            <span>এই মেথডগুলো স্ট্রিং থেকে যথাক্রমে ইন্টিজার ও ফ্লোট সংখ্যা বের করতে ব্যবহার করা হয়।</span>
            <br/>
            <code>
                {`let intNum = parseInt("123");`} <br/>
                {`let floatNum = parseFloat("12.34");`} <br/>
                {`console.log(intNum);`} <br/>
                {'// আউটপুট: 123'} <br/><br/>

                {`console.log(floatNum);`} <br/>
                {'// আউটপুট: 12.34'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">3. BigInt:</span> <br/>
            <span>JavaScript-এ `BigInt` হল একটি ডেটা টাইপ যা খুব বড় সংখ্যার সাথে কাজ করতে ব্যবহৃত হয়। এটি `n` যোগ করে define করা হয়।</span>
            <br/>
            <code>
                {`let bigNum = 1234567890123456789012345678901234567890n;`} <br/>
                {`console.log(bigNum);`} <br/>
                {'// আউটপুট: 1234567890123456789012345678901234567890n'} <br/><br/>

                {`let sum = bigNum + 10n;`} <br/>
                {`console.log(sum);`} <br/>
                {'// আউটপুট: 1234567890123456789012345678901234567900n'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">4. BigInt vs Number:</span> <br/>
            <span>BigInt এবং Number এর মধ্যে পার্থক্য হচ্ছে, BigInt অনেক বড় সংখ্যার সাথে কাজ করতে পারে এবং এটি অপ্রয়োজনীয় দশমিক সংখ্যা কাটতে পারে না।</span>
            <br/>
            <code>
                {`let bigNum = 12345678901234567890n;`} <br/>
                {`let num = 12345678901234567890;`} <br/>
                {`console.log(bigNum);`} <br/>
                {'// আউটপুট: 12345678901234567890n'} <br/><br/>

                {`console.log(num);`} <br/>
                {'// আউটপুট: 12345678901234567000 (Precision loss occurs in Number)'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Note:</span> <br/>
            <span>BigInt এবং Number টাইপের ভ্যালু একসাথে সরাসরি ব্যবহার করা যায় না, এজন্য টাইপ কনভার্সন করতে হয়।</span>
            <br/>
            <code>
                {`let bigNum = 100n;`} <br/>
                {`let num = 20;`} <br/>
                {`// console.log(bigNum + num); // Error`} <br/><br/>

                {`let result = bigNum + BigInt(num);`} <br/>
                {`console.log(result);`} <br/>
                {'// আউটপুট: 120n'} <br/>
            </code>
        </div>
    );
}

export default Number;
