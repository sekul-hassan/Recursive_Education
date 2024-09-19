const jsLanguageConfig = {
    basic:[
        {
            title:"Javascript : " ,
            description:"জাভাস্ক্রিপ্ট হচ্ছে একটি প্রোগ্রামিং Language ।"
        },
        {
            title:"Note : " ,
            description:"জাভাস্ক্রিপ্ট আর জাভা এক নয়। জাভা সম্পূর্ণরূপে অবজেক্ট ওরিয়েন্টেড, আর জাভাস্ক্রিপ্ট ফাংশনাল এবং অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং দুটোই মেইনটেইন করে। এক সময় জাভাস্ক্রিপ্ট শুধু ব্রাউজারে রান হতো, এখন জাভাস্ক্রিপ্ট ব্রাউজার এবং সার্ভার উভয় জায়গায়ই রান করে।",
        },
        {
            title:"Variable : " ,
            description: " জাভাস্ক্রিপ্টে চারভাবে ভেরিয়েবল ডিক্লেয়ার করা যায় ",
            minTitle: [
                {title:"Variable"},
                {title: "Using var"},
                {title: "Using let"},
                {title: "Using const"},
            ]
        },
        {
            title:"Where run JS : " ,
            description: "জাভাস্ক্রিপ্ট দুটি জায়গায় রান করানো যায় :",
            minTitle:[
                {
                    title: "Browser : ",
                    description:"ব্রাউজারে রান করাতে চাইলে, <script> ট্যাগের ভিতরে জাভাস্ক্রিপ্ট কোড লিখতে হয়। এখানে জাভাস্ক্রিপ্ট শুধুমাত্র HTML এবং CSS কে ম্যানিপুলেট করতে ব্যবহার করা হয়। তাই যেটিকে আপনি ম্যানিপুলেট করতে চান, সেটাকে আগে ধরতে হবে (যেমন: document.querySelector() বা getElementById() এর মাধ্যমে) এবং তারপর সেটাতে কাজ করতে হবে।",

                },
                {
                    title: "Server : ",
                    description: "সার্ভারে রান করানোর জন্য, অন্য যেকোনো প্রোগ্রামিং ভাষার মতোই একটি কম্পাইলার বা রানটাইম প্রয়োজন হয়। উদাহরণস্বরূপ, Node.js ব্যবহার করে জাভাস্ক্রিপ্ট সার্ভারে রান করানো যায়।"
                },
            ],
        },
        {
            title:"Output :  " ,
            description: "জাভাস্ক্রিপ্টে আউটপুট দেখানোর জন্য আমরা চারটি ভিন্ন ফাংশন ব্যবহার করতে পারি ।",
            minTitle: [
                {
                    title: "console.log() : ",
                    description: "এটি সবচেয়ে বেশি ব্যবহৃত হয় এবং কনসোলের ভিতরে আউটপুট দেখায়। সাধারণত ডিবাগিং এর জন্য ব্যবহার করা হয়।",
                },
                {
                    title: "alert() : ",
                    description: "এটি একটি পপ-আপ অ্যালার্ট বক্স প্রদর্শন করে যা ব্যবহারকারীর কাছে মেসেজ দেখায়।",
                },
                {
                    title: "document.write() : ",
                    description: "এটি পেজের ভিতরে সরাসরি HTML কন্টেন্ট যোগ করতে ব্যবহৃত হয়। সাধারণত, ডেভেলপাররা এটি খুব বেশি ব্যবহার করে না, কারণ এটি পুরো পেজের কন্টেন্টকে পরিবর্তন করতে পারে।",
                },
                {
                    title: "innerHTML বা textContent : ",
                    description: "এটি HTML এলিমেন্টের ভিতরে কন্টেন্ট আপডেট করতে ব্যবহৃত হয়।",
                }
            ]
        },
        {
            title:"Comment : ",
            description: "জাভাস্ক্রিপ্টে দুটি উপায়ে কমেন্ট লেখা যায়",
            minTitle: [
                {
                    title: "Single line : ",
                    description: "এটি এক লাইনের কমেন্ট লেখার জন্য ব্যবহৃত হয়। // দিয়ে শুরু হয়।",
                },
                {
                    title: "Multiple line : ",
                    description: "একাধিক লাইনের কমেন্ট লেখার জন্য ব্যবহৃত হয়। /* দিয়ে শুরু হয় এবং */ দিয়ে শেষ হয়।",
                },
            ]
        },
        {
            title:"Operator : ",
            description: "Math করার জন্য আমরা যে অপারেটরগুলি ব্যবহার করি <+ , - , * , / , < , > , = >",
        },
        {
            title: "Assignment : ",
            description: "জাভাস্ক্রিপ্টে assignment বলতে একটি ভেরিয়েবলে মান নির্ধারণ বা অ্যাসাইন করার প্রক্রিয়াকে বুঝায়। এটি সাধারণত = অপারেটরের মাধ্যমে করা হয়।" +
                "\nlet x = 10; // এখানে 'x' ভেরিয়েবলে '10' মান অ্যাসাইন করা হচ্ছে।",
        },
        {
            title: "Data types : ",
            description: "জাভাস্ক্রিপ্টে মোট ৮ ধরনের ডেটা টাইপ রয়েছে ",
        },
        {
            title: " Primitive Types (প্রিমিটিভ টাইপস)",
            minTitle: [
                {
                    title: "String : ",
                    description: "String: টেক্সট ডেটা যেমন \"Hello, World!\"",
                },
                {
                    title: "Number : ",
                    description: "Number: সংখ্যা (ইন্টিজার বা ফ্লোট) যেমন 42, 3.14",
                },
                {
                    title: "BigInt : ",
                    description: "BigInt: বড় সংখ্যার জন্য ব্যবহৃত হয় যেমন 1234567890123456789012345678901234567890n",
                },
                {
                    title: "Boolean : ",
                    description: "Boolean: সত্য (true) বা মিথ্যা (false)",
                },
                {
                    title: "Undefined : ",
                    description: "Undefined: একটি ভেরিয়েবল যে কোনো মান পায়নি তা নির্দেশ করে",
                },
                {
                    title: "Null : ",
                    description: "Null: একটি আসল নাল মান নির্দেশ করে, সাধারণত অনুপস্থিত বা অজ্ঞাত ডেটার জন্য ব্যবহৃত হয়",
                },
                {
                    title: "Symbol : ",
                    description: "Symbol: ইউনিক আইডেন্টিফায়ার তৈরি করতে ব্যবহৃত হয় (ES6 থেকে এসেছে) যেমন Symbol('description')",
                },
                {
                    title: "Object : ",
                    description: "Object: অবজেক্ট ডেটা টাইপ বিভিন্ন প্রোপার্টি ও মেথড ধারণ করে",
                }
            ],
        },
        {
            title: " Complex Type (কমপ্লেক্স টাইপ) : ",
            minTitle: [
                {
                    title: "Array : ",
                    description: " একাধিক ভ্যালু স্টোর করার জন্য ব্যবহৃত হয়, উদাহরণস্বরূপ [1, 2, 3]",
                },
                {
                    title: "Function : ",
                    description: "কার্য সম্পাদনের জন্য ব্যবহৃত হয়, উদাহরণস্বরূপ\n" +
                        "function myFunction()"
                }
            ]
        },
        {
            title: "Function : ",
            description: "একটি নির্দিষ্ট কাজ সম্পন্ন করার জন্য যে কোড ব্লকটি ব্যবহার করা হয়, সেটিকে function বলে। জাভাস্ক্রিপ্টে ফাংশন তৈরি করতে আমরা সাধারণত () (পারেনথেসিস) ব্র্যাকেটের ভিতরে যে কোড লিখি, তা ফাংশনের অংশ হিসেবে বিবেচিত হয়।\n" +
                "function functionName(parameters)\n" +
                "জাভাস্ক্রিপ্টে ফাংশন কল করার সময় যে মানগুলি পাঠানো হয়, সেগুলিকে arguments (অ্যাগুমেন্টস) বলা হয়। আর ফাংশন সংজ্ঞায়িত করার সময় যেসব মান গ্রহণের জন্য প্যারামিটার নির্ধারণ করা হয়, সেগুলিকে parameters (প্যারামিটারস) বলা হয়।"
        },
        //// Tags
        {
            tags:[
                "Javascript ",
                "JS ",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip"}
    ]
}

export default jsLanguageConfig;

