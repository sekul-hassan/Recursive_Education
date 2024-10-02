
const learningJsonConfig = {
    javascript: [
        {
            id: 0,
            value: "Basic",
            link: "/basic",
            lecture: [
                {
                    title: "Javascript : ",
                    description: "জাভাস্ক্রিপ্ট হচ্ছে একটি প্রোগ্রামিং Language ।"
                },
                {
                    title: "Note : ",
                    description: "জাভাস্ক্রিপ্ট আর জাভা কিন্তু এক নয়। জাভা সম্পূর্ণরূপে অবজেক্ট ওরিয়েন্টেড, আর জাভাস্ক্রিপ্ট ফাংশনাল এবং অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং দুটোই মেইনটেইন করে। এক সময় জাভাস্ক্রিপ্ট শুধু ব্রাউজারে রান হতো, এখন জাভাস্ক্রিপ্ট ব্রাউজার এবং সার্ভার উভয় জায়গায়ই রান করে।",
                },
                {
                    title: "Variable : ",
                    description: " জাভাস্ক্রিপ্টে চারভাবে ভেরিয়েবল ডিক্লেয়ার করা যায় ।",
                    minTitle: [
                        {title: "Using var"},
                        {title: "Using let"},
                        {title: "Using const"},
                        {title: "Default"},
                    ]
                },
                {
                    title: "Where JS is Run ..? : ",
                    description: "জাভাস্ক্রিপ্ট দুটি জায়গায় রান করানো যায় ।",
                    minTitle: [
                        {
                            title: "Browser : ",
                            description: "ব্রাউজারে রান করাতে চাইলে, <script> ট্যাগের ভিতরে জাভাস্ক্রিপ্ট কোড লিখতে হয়। এখানে জাভাস্ক্রিপ্ট শুধুমাত্র HTML এবং CSS কে ম্যানিপুলেট করতে ব্যবহার করা হয়। তাই যেটিকে আপনি ম্যানিপুলেট করতে চান, সেটাকে আগে ধরতে হবে (যেমন: document.querySelector() বা getElementById() এর মাধ্যমে) এবং তারপর সেটাতে কাজ করতে হবে ।",

                        },
                        {
                            title: "Server : ",
                            description: "সার্ভারে রান করানোর জন্য, অন্য যেকোনো প্রোগ্রামিং ভাষার মতোই একটি কম্পাইলার বা রানটাইম প্রয়োজন হয়। উদাহরণস্বরূপ, Node.js ব্যবহার করে জাভাস্ক্রিপ্ট সার্ভারে রান করানো যায়।"
                        },
                    ],
                },
                {
                    title: "Output :  ",
                    description: "জাভাস্ক্রিপ্টে আউটপুট দেখানোর জন্য আমরা চারটি ভিন্ন ফাংশন ব্যবহার করতে পারি ।",
                    minTitle: [
                        {
                            title: "console.log() ",
                            description: "এটি সবচেয়ে বেশি ব্যবহৃত হয় এবং কনসোলের ভিতরে আউটপুট দেখায়। সাধারণত ডিবাগিং এর জন্য ব্যবহার করা হয় ।",
                        },
                        {
                            title: "alert() ",
                            description: "এটি একটি পপ-আপ অ্যালার্ট বক্স প্রদর্শন করে যা ব্যবহারকারীর কাছে মেসেজ দেখায় ।",
                        },
                        {
                            title: "document.write() ",
                            description: "এটি পেজের ভিতরে সরাসরি HTML কন্টেন্ট যোগ করতে ব্যবহৃত হয়। সাধারণত, ডেভেলপাররা এটি খুব বেশি ব্যবহার করে না, কারণ এটি পুরো পেজের কন্টেন্টকে পরিবর্তন করতে পারে ।",
                        },
                        {
                            title: "innerHTML বা textContent ",
                            description: "এটি HTML এলিমেন্টের ভিতরে কন্টেন্ট আপডেট করতে ব্যবহৃত হয় ।",
                        }
                    ]
                },
                {
                    title: "Comment : ",
                    description: "জাভাস্ক্রিপ্টে দুটি উপায়ে কমেন্ট লেখা যায় ।",
                    minTitle: [
                        {
                            title: "Single line : ",
                            description: "এটি এক লাইনের কমেন্ট লেখার জন্য ব্যবহৃত হয়। // দিয়ে শুরু হয় ।",
                        },
                        {
                            title: "Multiple line : ",
                            description: "একাধিক লাইনের কমেন্ট লেখার জন্য ব্যবহৃত হয়। /* দিয়ে শুরু হয় এবং */ দিয়ে শেষ হয় ।",
                        },
                    ]
                },
                {
                    title: "Operator : ",
                    description: "Math করার জন্য আমরা যে অপারেটরগুলি ব্যবহার করি <+ , - , * , / , < , > , = >",
                },
                {
                    title: "Assignment : ",
                    description: "জাভাস্ক্রিপ্টে assignment বলতে একটি ভেরিয়েবলে মান নির্ধারণ বা অ্যাসাইন করার প্রক্রিয়াকে বুঝায়। এটি সাধারণত = অপারেটরের মাধ্যমে করা হয় ।" +
                        "\nlet x = 10; // এখানে 'x' ভেরিয়েবলে '10' মান অ্যাসাইন করা হচ্ছে ।",
                },
                {
                    title: "Data types : ",
                    description: "জাভাস্ক্রিপ্টে মোট ৮ ধরনের ডেটা টাইপ রয়েছে ।",
                },
                {
                    title: " Primitive Types (প্রিমিটিভ টাইপস)",
                    minTitle: [
                        {
                            title: "String ",
                            description: "String: টেক্সট ডেটা যেমন \"Hello, World!\"",
                        },
                        {
                            title: "Number ",
                            description: "Number: সংখ্যা (ইন্টিজার বা ফ্লোট) যেমন 42, 3.14",
                        },
                        {
                            title: "BigInt ",
                            description: "BigInt: বড় সংখ্যার জন্য ব্যবহৃত হয় যেমন 1234567890123456789012345678901234567890n",
                        },
                        {
                            title: "Boolean ",
                            description: "Boolean: সত্য (true) বা মিথ্যা (false)",
                        },
                        {
                            title: "Undefined ",
                            description: "Undefined: একটি ভেরিয়েবল যে কোনো মান পায়নি তা নির্দেশ করে ।",
                        },
                        {
                            title: "Null  ",
                            description: "Null: Empty নির্দেশ করে, সাধারণত absence or unknown ডেটার জন্য ব্যবহৃত হয় ।",
                        },
                        {
                            title: "Symbol  ",
                            description: "Symbol: ইউনিক আইডেন্টিফায়ার তৈরি করতে ব্যবহৃত হয় (ES6 থেকে এসেছে) যেমন Symbol('description') ।",
                        },
                        {
                            title: "Object ",
                            description: "Object: অবজেক্ট ডেটা টাইপ বিভিন্ন প্রোপার্টি ও মেথড ধারণ করে ।",
                        }
                    ],
                },
                {
                    title: " Complex Type (কমপ্লেক্স টাইপ) ",
                    minTitle: [
                        {
                            title: "Array ",
                            description: " একাধিক ভ্যালু স্টোর করার জন্য ব্যবহৃত হয়, উদাহরণস্বরূপ [1, 2, 3] ।",
                        },
                        {
                            title: "Function ",
                            description: "কার্য সম্পাদনের জন্য ব্যবহৃত হয়, উদাহরণস্বরূপ\n" +
                                "function myFunction() ।"
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
                    tags: [
                        "Javascript ",
                        "JS ",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/basic"},
            ]
        },
        {
            id: 1,
            value: "Array",
            link: "/array",
            lecture: [
                {
                    title: "Array : ",
                    description: " একই ডেটা টাইপের একাধিক মান সংরক্ষণের জন্য array ব্যবহার করা হয়। জাভাস্ক্রিপ্টে অ্যারে তৈরির জন্য [] ব্র্যাকেট ব্যবহার করা হয়।",
                    example: [
                        {
                            code: "let numbers = [2, 3, 4, 5]; // এখানে [] ব্র্যাকেটের মধ্যে একটি অ্যারে তৈরি করা হয়েছে\n" +
                                "// অ্যারে তৈরির সময় [] ব্র্যাকেট ব্যবহার করে মানগুলি কমা দ্বারা পৃথক করা হয় এবং অ্যারের মধ্যে সেগুলি রাখা হয়।\n" +
                                "\n" +
                                "// এছাড়াও, অ্যারে বিভিন্ন ডেটা টাইপের মান ধারণ করতে পারে:\n" +
                                "let mixedArray = [1, 'hello', true, null];"
                        },
                        {
                            code: "const cars = [];\n" +
                                "cars[0] = \"Saab\";\n" +
                                "cars[1] = \"Volvo\";\n" +
                                "cars[2] = \"BMW\";"
                        }
                    ],
                },
                {
                    title: "Array methods ",
                    minTitle: [
                        {
                            title: "array.length ",
                            description: "// return length of array",
                            code: "let fruits = ['apple', 'banana', 'mango'];\n" +
                                "console.log(fruits.length); // আউটপুট: 3",
                        },
                        {
                            title: "array.toString() ",
                            description: "// মেথডটি array কে একটি string এ রূপান্তর করে, যেখানে প্রতিটি এলিমেন্ট কমা দিয়ে আলাদা করা থাকে।",
                            code: "let fruits = ['apple', 'banana', 'mango'];\n" +
                                "console.log(fruits.toString()); // আউটপুট: apple,banana,mango",
                        },
                        {
                            title: "array.at() ",
                            description: "// মেথডটি array এর নির্দিষ্ট পজিশনের এলিমেন্ট রিটার্ন করে। পজিটিভ এবং নেগেটিভ উভয় ইনডেক্স ব্যবহার করা যায়। নেগেটিভ ইনডেক্স array এর শেষ থেকে গোনা হয়।",
                            code: "let fruits = ['apple', 'banana', 'mango'];\n" +
                                "console.log(fruits.at(1)); // আউটপুট: 'banana'\n" +
                                "console.log(fruits.at(-1)); // আউটপুট: 'mango'",
                        },
                        {
                            title: "array.join()",
                            description: "// মেথডটি array এর সব এলিমেন্টগুলিকে একটি string এ রূপান্তর করে এবং একটি নির্দিষ্ট separator (যেমন, কমা, স্পেস) ব্যবহার করে তাদের সংযুক্ত করে।",
                            code: "let fruits = ['apple', 'banana', 'mango'];\n" +
                                "console.log(fruits.join(', ')); // আউটপুট: 'apple, banana, mango'\n" +
                                "console.log(fruits.join(' - ')); // আউটপুট: 'apple - banana - mango'",
                        },
                        {
                            title: "array.push() ",
                            description: "// মেথডটি একটি array এর শেষে একটি বা একাধিক এলিমেন্ট যোগ করে এবং নতুন array এর length রিটার্ন করে।",
                            code: "let fruits = ['apple', 'banana'];\n" +
                                "fruits.push('mango');\n" +
                                "console.log(fruits); // আউটপুট: ['apple', 'banana', 'mango']\n" +
                                "let newLength = fruits.push('orange');\n" +
                                "console.log(newLength); // আউটপুট: 4",
                        },
                        {
                            title: "array.pop()  ",
                            description: "// মেথডটি একটি array এর শেষ এলিমেন্টটি সরিয়ে ফেলে এবং সেই সরানো এলিমেন্টটি রিটার্ন করে।",
                            code: "let fruits = ['apple', 'banana', 'mango'];\n" +
                                "let lastFruit = fruits.pop();\n" +
                                "console.log(lastFruit); // আউটপুট: 'mango'\n" +
                                "console.log(fruits); // আউটপুট: ['apple', 'banana']",
                        },
                    ]
                },
                {
                    title: "Search methods ",
                    minTitle: [
                        {
                            title: "indexOf() ",
                            description: "// Array এর মধ্যে নির্দিষ্ট এলিমেন্টের প্রথম occurrence এর index রিটার্ন করে।",
                            code: "let fruits = ['apple', 'banana', 'mango', 'banana'];\n" +
                                "let index = fruits.indexOf('banana');\n" +
                                "console.log(index); // আউটপুট: 1\n" +
                                "let notFoundIndex = fruits.indexOf('orange');\n" +
                                "console.log(notFoundIndex); // আউটপুট: -1"
                        },
                        {
                            title: "array.includes() ",
                            description: "// Array এর মধ্যে নির্দিষ্ট এলিমেন্ট আছে কিনা তা true বা false রিটার্ন করে।",
                            code: "let fruits = ['apple', 'banana', 'mango'];\n" +
                                "let hasBanana = fruits.includes('banana');\n" +
                                "console.log(hasBanana); // আউটপুট: true\n" +
                                "let hasOrange = fruits.includes('orange');\n" +
                                "console.log(hasOrange); // আউটপুট: false"
                        },
                        {
                            title: "array.find()  ",
                            description: "// Array এর মধ্যে নির্দিষ্ট condition পূরণ করা প্রথম এলিমেন্ট রিটার্ন করে। যদি কোন এলিমেন্ট না পাওয়া যায়, এটি undefined রিটার্ন করে।",
                            code: "let numbers = [5, 12, 8, 130, 44];\n" +
                                "let found = numbers.find(element => element > 10);\n" +
                                "console.log(found); // আউটপুট: 12"
                        },
                        {
                            title: "array.findIndex() ",
                            description: " // Array এর মধ্যে নির্দিষ্ট condition পূরণ করা প্রথম এলিমেন্টের index রিটার্ন করে। যদি কোন এলিমেন্ট না পাওয়া যায়, এটি -1 রিটার্ন করে।",
                            code: "let numbers = [5, 12, 8, 130, 44];\n" +
                                "let foundIndex = numbers.findIndex(element => element > 10);\n" +
                                "console.log(foundIndex); // আউটপুট: 1"
                        },
                        {
                            title: "array.shift() ",
                            description: "// অ্যারের প্রথম উপাদানটি মুছে ফেলে এবং সেই মুছে ফেলা উপাদানটি রিটার্ন করে।",
                            code: "let fruits = ['apple', 'banana', 'cherry'];\n" +
                                "let firstFruit = fruits.shift();\n" +
                                "console.log(firstFruit); // 'apple'\n" +
                                "console.log(fruits); // ['banana', 'cherry']"
                        },
                        {
                            title: "array.unshift() ",
                            description: "// অ্যারের শুরুতে এক বা একাধিক উপাদান add করে এবং নতুন অ্যারের length return করে।",
                            code: "let numbers = [2, 3, 4];\n" +
                                "numbers.unshift(0, 1);\n" +
                                "console.log(numbers); // [0, 1, 2, 3, 4]"
                        },
                        {
                            title: "delete array[index] ",
                            description: "// অ্যারের একটি উপাদান মুছে ফেলে, কিন্তু অ্যারে তে একটি Hole রেখে দেয় (অর্থাৎ, উপাদানগুলি সরানো হয় না এবং অ্যারের দৈর্ঘ্য পরিবর্তিত হয় না)।",
                            code: "let myArray = [1, 2, 3, 4, 5];\n" +
                                "\n" +
                                "// Deleting the element at index 2\n" +
                                "delete myArray[2];\n" +
                                "\n" +
                                "console.log(myArray);  // Output: [1, 2, empty, 4, 5]\n" +
                                "console.log(myArray.length);  // Output: 5\n"
                        },
                        {
                            title: "array.splice() ",
                            description: "// একটি নির্দিষ্ট ইনডেক্সে উপাদান যোগ করা বা মুছে ফেলা।",
                            code: "let array = [1, 2, 3, 4, 5];\n" +
                                "array.splice(2, 2, 'a', 'b');\n" +
                                "console.log(array); // [1, 2, 'a', 'b', 5]"
                        },
                    ]
                },
                {
                    title: "Sort methods ",
                    minTitle: [
                        {
                            title: "array.sort() ",
                            description: "// Array এর এলিমেন্টগুলোকে alphabetically বা numerically sort করে।",
                            code: "let fruits = ['mango', 'apple', 'banana'];\n" +
                                "fruits.sort();\n" +
                                "console.log(fruits); // আউটপুট: ['apple', 'banana', 'mango']\n" +
                                "let numbers = [40, 100, 1, 5, 25, 10];\n" +
                                "numbers.sort();\n" +
                                "console.log(numbers); // আউটপুট: [1, 5, 10, 25, 40, 100]"
                        },
                        {
                            title: "array.reverse() ",
                            description: "// Array এর এলিমেন্টগুলোকে উল্টে দেয়, অর্থাৎ শেষ থেকে শুরু পর্যন্ত।",
                            code: "let fruits = ['mango', 'apple', 'banana'];\n" +
                                "fruits.reverse();\n" +
                                "console.log(fruits); // আউটপুট: ['banana', 'apple', 'mango']"
                        },
                    ]
                },
                {
                    title: "Iteration methods ",
                    minTitle: [
                        {
                            title: "array.forEach() ",
                            description: "// মেথডটি array এর প্রতিটি এলিমেন্টের জন্য একটি ফাংশন কল করে। এটি কোন value রিটার্ন করে না, শুধু প্রতিটি এলিমেন্টের উপর কাজ করে।",
                            code: "let fruits = ['apple', 'banana', 'mango'];\n" +
                                "fruits.forEach(fruit => console.log(fruit)); // আউটপুট:\n" +
                                "'// apple'\n" +
                                "'// banana'\n" +
                                "'// mango'"
                        },
                        {
                            title: "array.map() ",
                            description: "// Array এর প্রতিটি এলিমেন্টের জন্য একটি ফাংশন চালিয়ে একটি নতুন array রিটার্ন করে।",
                            code: "let numbers = [1, 2, 3, 4];\n" +
                                "let doubled = numbers.map(num => num * 2);\n" +
                                "console.log(doubled); // আউটপুট: [2, 4, 6, 8]"
                        },
                        {
                            title: "array.filter() ",
                            description: "// Array এর প্রতিটি এলিমেন্টের জন্য একটি condition পরীক্ষা করে এবং condition পূরণ করা এলিমেন্টগুলোকে নিয়ে একটি নতুন array তৈরি করে।",
                            code: "let fruits = ['apple', 'banana', 'mango'];\n" +
                                "fruits.forEach(fruit => console.log(fruit)); // আউটপুট:\n" +
                                "'// apple'\n" +
                                "'// banana'\n" +
                                "'// mango'"
                        },
                        {
                            title: "array.reduce() ",
                            description: "// Array এর সব এলিমেন্টগুলিকে একটি single value তে রূপান্তর করে। এটি accumulator এবং current value নামক দুটি প্যারামিটার গ্রহণ করে।",
                            code: "let numbers = [1, 2, 3, 4];\n" +
                                "let sum = numbers.reduce((acc, current) => acc + current, 0);\n" +
                                "console.log(sum); // আউটপুট: 10"
                        },
                    ]
                },
                {
                    tags: [
                        "Javascript ",
                        "array",
                        "DSA",
                        "JS ",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/array"},
            ]
        },
        {
            id: 3,
            value: "Set&Map",
            link: "/set&map",
            lecture: [
                {
                    title: "Set : ",
                    description: "জাভাস্ক্রিপ্টের Set একটি ডেটা স্ট্রাকচার যা ইউনিক value store করে। ",
                    example: [
                        {
                            code: "let numbers = new Set([1, 2, 3, 4]);\n" +
                                "console.log(numbers); // Set {1, 2, 3, 4}"
                        },
                    ]
                },
                {
                    title: "Set Methods ",
                    minTitle: [
                        {
                            title: "set.add(value) ",
                            description: " নতুন value add করা।",
                            code: "let fruits = new Set();\n" +
                                "fruits.add('apple');\n" +
                                "fruits.add('banana');\n" +
                                "console.log(fruits); // Set {'apple', 'banana'}"
                        },

                        {
                            title: "set.delete(value) ",
                            description: "একটি নির্দিষ্ট value মুছে ফেলা।",
                            code: "let fruits = new Set(['apple', 'banana', 'cherry']);\n" +
                                "fruits.delete('banana');\n" +
                                "console.log(fruits); // Set {'apple', 'cherry'}"
                        },
                        {
                            title: "set.has(value) ",
                            description: "একটি value Set এ উপস্থিত আছে কিনা পরীক্ষা করা। ",
                            code: "let numbers = new Set([1, 2, 3, 4]);\n" +
                                "console.log(numbers.has(3)); // true\n" +
                                "console.log(numbers.has(5)); // false"
                        },
                        {
                            title: "set.size ",
                            description: "Set এর মধ্যে মোট এলিমেন্ট সংখ্যা।",
                            code: "let numbers = new Set([1, 2, 3]);\n" +
                                "console.log(numbers.size); // 3"
                        },
                    ]
                },
                {
                    title: "Map Methods ",
                    minTitle: [
                        {
                            title: "map.set(key, value)",
                            description: "নতুন key-value pair set করা।",
                            code: "let map = new Map();\n" +
                                "map.set('name', 'Alice');\n" +
                                "map.set('age', 30);\n" +
                                "console.log(map); // Map {'name' => 'Alice', 'age' => 30}"
                        },
                        {
                            title: "map.get(key)",
                            description: "একটি কী এর জন্য সংশ্লিষ্ট value রিটার্ন করা।",
                            code: "let map = new Map([['name', 'Alice'], ['age', 30]]);\n" +
                                "console.log(map.get('name')); // 'Alice'\n" +
                                "console.log(map.get('age')); // 30"
                        },
                        {
                            title: "map.has(key)",
                            description: "একটি key Map এ উপস্থিত আছে কিনা পরীক্ষা করা।",
                            code: "let map = new Map([['name', 'Alice']]);\n" +
                                "console.log(map.has('name')); // true\n" +
                                "console.log(map.has('age')); // false"
                        },
                        {
                            title: "map.delete(key)",
                            description: "একটি নির্দিষ্ট key-value pair মুছে ফেলা।",
                            code: "let map = new Map([['name', 'Alice'], ['age', 30]]);\n" +
                                "map.delete('age');\n" +
                                "console.log(map); // Map {'name' => 'Alice'}"
                        },
                        {
                            title: "map.clear()",
                            description: "Map এর সব key-value pair মুছে ফেলা।",
                            code: "let map = new Map([['name', 'Alice'], ['age', 30]]);\n" +
                                "map.clear();\n" +
                                "console.log(map); // Map {}"
                        },
                        {
                            title: "map.size",
                            description: "Map এর মধ্যে মোট key-value pair সংখ্যা।",
                            code: "let map = new Map([['name', 'Alice'], ['age', 30]]);\n" +
                                "console.log(map.size); // 2"
                        }
                    ]
                },
                {
                    tags: [
                        "Javascript ",
                        "DSA ",
                        "Set Map ",
                        "JS ",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/set&map"},
            ]
        },
        {
            id: 4,
            value: "Object",
            link: "/object",
            lecture: [
                {
                    title: "Object : ",
                    description: " জাভাস্ক্রিপ্টে object হল একটি data structure যা key-value pair আকারে তথ্য সংরক্ষণ করে। প্রতিটি key কে property বলা হয় এবং তার corresponding value কে বলা হয় value।\n",
                    example: [
                        {
                            code: "const person = {\n" +
                                "    firstName: \"John\",\n" +
                                "    lastName: \"Doe\",\n" +
                                "    age: 30,\n" +
                                "    address: {\n" +
                                "        city: \"New York\",\n" +
                                "        zipCode: 10001\n" +
                                "    }\n" +
                                "};"
                        },
                    ],
                    minTitle: [
                        {
                            title: "Accessing Object Properties ",
                            code: "console.log(person.firstName); // Output: John\n" +
                                "console.log(person[\"lastName\"]); // Output: Doe"
                        },
                        {
                            title: "Modifying Object Properties ",
                            code: "person.age = 31;\n" +
                                "console.log(person.age); // Output: 31"
                        },
                        {
                            title: "Adding New Properties ",
                            code: "person.email = \"john.doe@example.com\";\n" +
                                "console.log(person.email); // Output: john.doe@example.com"
                        }, {

                            title: "Object Methods ",
                            code: "const person = {\n" +
                                "    firstName: \"John\",\n" +
                                "    lastName: \"Doe\",\n" +
                                "    fullName: function() {\n" +
                                "        return this.firstName + \" \" + this.lastName;\n" +
                                "    }\n" +
                                "};\n" +
                                "console.log(person.fullName()); // Output: John Doe"
                        },
                        {

                            title: "Looping Through Object Properties:",
                            code: "for (let key in person) {\n" +
                                "    console.log(key + \": \" + person[key]);\n" +
                                "}"
                        },
                    ]
                },
                {
                    title: "Example Output ",
                    code: "firstName: John\n" +
                        "lastName: Doe\n" +
                        "age: 31\n" +
                        "email: john.doe@example.com"
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "Object",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/object"}
            ]
        },
        {
            id: 4,
            value: "Number",
            link: "/number",
            lecture: [
                {
                    title: " Number Operations : ",
                    description: "JavaScript-এ Number টাইপের Data নিয়ে বিভিন্ন ধরনের অপারেশন করা যায়। ",
                },
                {
                    title: " Number Properties : ",
                    description: "JavaScript-এর Number এর কিছু property আছে, যেমন MAX_VALUE, MIN_VALUE, NaN ইত্যাদি।",
                    code: "console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308\n" +
                        "console.log(Number.MIN_VALUE); // Output: 5e-324\n" +
                        "console.log(Number.NaN); // Output: NaN (Not a Number)"
                },
                {
                    title: "Number Methods : ",
                    description: "JavaScript-এ Number-এর জন্য অনেক গুলো মেথড আছে। নিচে কিছু উল্লেখযোগ্য মেথডের উদাহরণ দেওয়া হলো : ",
                    minTitle: [
                        {
                            title: "toFixed() ",
                            description: "এই মেথডটি একটি নম্বরের নির্দিষ্ট সংখ্যক দশমিক স্থান পর্যন্ত কাটে এবং একটি স্ট্রিং রিটার্ন করে।",
                            code: "let num = 5.6789;\n" +
                                "let result = num.toFixed(2);\n" +
                                "console.log(result); // Output: \"5.68\""
                        },
                        {
                            title: "toString() ",
                            description: "এই মেথডটি একটি নম্বরকে স্ট্রিং-এ রূপান্তর করে।",
                            code: "let num = 123;\n" +
                                "let str = num.toString();\n" +
                                "console.log(str); // Output: \"123\""
                        },
                        {
                            title: "parseInt() & parseFloat() ",
                            description: "এই মেথডগুলো স্ট্রিং থেকে যথাক্রমে ইন্টিজার ও ফ্লোট সংখ্যা বের করতে ব্যবহার করা হয়।",
                            code: "let intNum = parseInt(\"123\");\n" +
                                "let floatNum = parseFloat(\"12.34\");\n" +
                                "console.log(intNum); // Output: 123\n" +
                                "console.log(floatNum); // Output: 12.34"
                        },
                    ]
                },
                {
                    title: "BigInt vs Number : ",
                    description: "BigInt এবং Number এর মধ্যে পার্থক্য হচ্ছে, BigInt অনেক বড় সংখ্যার সাথে কাজ করতে পারে এবং এটি অপ্রয়োজনীয় দশমিক সংখ্যা কাটতে পারে না।",
                    code: "let bigNum = 12345678901234567890n;\n" +
                        "let num = 12345678901234567890;\n" +
                        "console.log(bigNum); // Output: 12345678901234567890n\n" +
                        "console.log(num); // Output: 12345678901234567000 (Precision loss occurs in Number)",
                },
                {
                    title: "Note : ",
                    description: "BigInt এবং Number টাইপের ভ্যালু একসাথে সরাসরি ব্যবহার করা যায় না, এজন্য টাইপ কনভার্সন করতে হয়।",
                    code: "let bigNum = 100n;\n" +
                        "let num = 20;\n" +
                        "// console.log(bigNum + num); // Error\n" +
                        "let result = bigNum + BigInt(num);\n" +
                        "console.log(result); // Output: 120n"
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "Number",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/number"}
            ]
        },
        {
            id: 5,
            value: "String",
            link: "/string",
            lecture: [
                {
                    title: "String Operations : ",
                    description: " JavaScript-এ বিভিন্ন স্ট্রিং অপারেশন করা যায় যা ডাটা ম্যানিপুলেশনে অনেক কাজে আসে।"
                },
                {
                    title: "String Methods ",
                    minTitle: [
                        {
                            title: "Length Property ",
                            description: " স্ট্রিং এর দৈর্ঘ্য বের করতে length প্রপার্টি ব্যবহার করা হয়। ",
                            code: "let text = \"Hello, World!\";\n" +
                                "console.log(text.length); // Output: 13"
                        },
                        {
                            title: " String Concatenation ",
                            description: "দুইটি বা তার বেশি স্ট্রিং একত্রিত করতে + অপারেটর বা concat() মেথড ব্যবহার করা হয়।",
                            code: "let str1 = \"Hello\";\n" +
                                "let str2 = \"World\";\n" +
                                "let result = str1 + \", \" + str2 + \"!\";\n" +
                                "console.log(result); // Output: \"Hello, World!\"\n" +
                                "\n" +
                                "let resultConcat = str1.concat(\", \", str2, \"!\");\n" +
                                "console.log(resultConcat); // Output: \"Hello, World!\""
                        },
                        {
                            title: "String to UpperCase ",
                            description: "স্ট্রিং এর সমস্ত ক্যারেক্টারকে uppercase (বড় হাতের অক্ষর) এ রূপান্তর করতে toUpperCase() মেথড ব্যবহার করা হয়।",
                            code: "let text = \"Hello, World!\";\n" +
                                "let upperText = text.toUpperCase();\n" +
                                "console.log(upperText); // Output: \"HELLO, WORLD!\""
                        },
                        {
                            title: "String to LowerCase ",
                            description: "স্ট্রিং এর সমস্ত ক্যারেক্টারকে lowercase (ছোট হাতের অক্ষর) এ রূপান্তর করতে toLowerCase() মেথড ব্যবহার করা হয়।",
                            code: "let text = \"Hello, World!\";\n" +
                                "let lowerText = text.toLowerCase();\n" +
                                "console.log(lowerText); // Output: \"hello, world!\""
                        },
                        {
                            title: "String Slice ",
                            description: "স্ট্রিং এর নির্দিষ্ট অংশ কেটে বের করতে slice() মেথড ব্যবহার করা হয়।",
                            code: "let text = \"Hello, World!\";\n" +
                                "let slicedText = text.slice(7, 12);\n" +
                                "console.log(slicedText); // Output: \"World\""
                        },
                        {
                            title: "String Replace ",
                            description: "স্ট্রিং এর নির্দিষ্ট অংশকে নতুন স্ট্রিং দিয়ে প্রতিস্থাপন করতে replace() মেথড ব্যবহার করা হয়।",
                            code: "let text = \"Hello, World!\";\n" +
                                "let newText = text.replace(\"World\", \"Universe\");\n" +
                                "console.log(newText); // Output: \"Hello, Universe!\""
                        },
                        {
                            title: "String Split ",
                            description: "স্ট্রিং এর অংশগুলোকে আলাদা আলাদা করে array তে পরিণত করতে split() মেথড ব্যবহার করা হয়।",
                            code: "let text = \"Hello, World!\";\n" +
                                "let arr = text.split(\", \");\n" +
                                "console.log(arr); // Output: [\"Hello\", \"World!\"]"
                        }
                    ]
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "String",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/string"}
            ]
        },
        {
            id: 6,
            value: "Condition",
            link: "/condition",
            lecture: [
                {
                    title: "Condition : ",
                    description: "জাভাস্ক্রিপ্টে শর্ত বা condition ব্যবহারের মাধ্যমে আমরা একটি নির্দিষ্ট শর্ত পূরণ হলে নির্দিষ্ট কাজ করতে পারি।",
                    minTitle: [
                        {
                            title: "if(condition) ",
                            description: "যদি শর্তটি সত্য হয়, তাহলে একটি কোড ব্লক চালানো হবে, আর যদি মিথ্যা হয়, তাহলে অন্য কোড ব্লকটি চালানো হবে।",
                            code: "let age = 18;\n" +
                                "if (age >= 18) {\n" +
                                "  console.log(\"You are eligible to vote.\");\n" +
                                "}\n" +
                                "// Output: \"You are eligible to vote.\""
                        },
                        {
                            title: "else",
                            code: "let age = 16;\n" +
                                "if (age >= 18) {\n" +
                                "  console.log(\"You are eligible to vote.\");\n" +
                                "} else {\n" +
                                "  console.log(\"You are not eligible to vote.\");\n" +
                                "}\n" +
                                "// Output: \"You are not eligible to vote.\""
                        },
                        {
                            title: "else if(condition) ",
                            description: "যদি একটি শর্ত মিথ্যা হয়, তাহলে পরবর্তী শর্তগুলো পরীক্ষা করা হয়।",
                            code: "let score = 85;\n" +
                                "if (score >= 90) {\n" +
                                "  console.log(\"Grade: A\");\n" +
                                "} else if (score >= 80) {\n" +
                                "  console.log(\"Grade: B\");\n" +
                                "} else if (score >= 70) {\n" +
                                "  console.log(\"Grade: C\");\n" +
                                "} else {\n" +
                                "  console.log(\"Grade: F\");\n" +
                                "}\n" +
                                "// Output: \"Grade: B\""
                        },
                        {
                            title: "ternary operator ? ",
                            description: "এক লাইনে শর্ত এবং দুটি সম্ভাব্য ফলাফলের মধ্যে একটিকে বাছাই করা যায়।",
                            code: "let age = 18;\n" +
                                "let eligibility = (age >= 18) ? \"Eligible to vote\" : \"Not eligible to vote\";\n" +
                                "console.log(eligibility);\n" +
                                "// Output: \"Eligible to vote\""
                        },
                        {
                            title: "switch statement",
                            description: "একাধিক শর্তের মধ্যে একটি ম্যাচ খুঁজে পাওয়া এবং সেই অনুযায়ী কোড চালানো যায়।",
                            code: "let day = 3;\n" +
                                "switch (day) {\n" +
                                "  case 1:\n" +
                                "    console.log(\"Sunday\");\n" +
                                "    break;\n" +
                                "  case 2:\n" +
                                "    console.log(\"Monday\");\n" +
                                "    break;\n" +
                                "  case 3:\n" +
                                "    console.log(\"Tuesday\");\n" +
                                "    break;\n" +
                                "  default:\n" +
                                "    console.log(\"Invalid day\");\n" +
                                "}\n" +
                                "// Output: \"Tuesday\""
                        }
                    ]
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "Condition",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/condition"}
            ]
        },
        {
            id: 7,
            value: "Loop",
            link: "/loop",
            lecture: [
                {
                    title: "Loop : ",
                    description: "জাভাস্ক্রিপ্টে loops ব্যবহারের মাধ্যমে আমরা একটি কাজকে বারবার নির্দিষ্ট সংখ্যক বার চালাতে পারি।",
                    minTitle: [
                        {
                            title: "for loop ",
                            description: "for loop সাধারণত নির্দিষ্ট সংখ্যক বার কোড ব্লক চালানোর জন্য ব্যবহৃত হয়।",
                            code: "for (let i = 0; i < 5; i++) {\n" +
                                "  console.log(\"Number: \" + i);\n" +
                                "}\n" +
                                "// Output: \"Number: 0\", \"Number: 1\", \"Number: 2\", \"Number: 3\", \"Number: 4\""
                        },
                        {
                            title: "while loop ",
                            description: "while loop তখন পর্যন্ত কোড ব্লক চালিয়ে যেতে থাকে যতক্ষণ না নির্দিষ্ট শর্তটি সত্য থাকে।",
                            code: "let count = 0;\n" +
                                "while (count < 5) {\n" +
                                "  console.log(\"Count: \" + count);\n" +
                                "  count++;\n" +
                                "}\n" +
                                "// Output: \"Count: 0\", \"Count: 1\", \"Count: 2\", \"Count: 3\", \"Count: 4\""
                        },
                        {
                            title: "do while loop ",
                            description: "do...while loop কমপক্ষে একবার কোড ব্লক চালায়, তারপর শর্তটি চেক করে।",
                            code: "let count = 0;\n" +
                                "do {\n" +
                                "  console.log(\"Count: \" + count);\n" +
                                "  count++;\n" +
                                "} while (count < 5);\n" +
                                "// Output: \"Count: 0\", \"Count: 1\", \"Count: 2\", \"Count: 3\", \"Count: 4\""
                        },
                        {
                            title: "for of loop",
                            description: "for...of loop একটি iterable object যেমন array এর প্রতিটি এলিমেন্টের জন্য কোড ব্লক চালায়।",
                            code: "let numbers = [10, 20, 30];\n" +
                                "for (let number of numbers) {\n" +
                                "  console.log(\"Number: \" + number);\n" +
                                "}\n" +
                                "// Output: \"Number: 10\", \"Number: 20\", \"Number: 30\""
                        },
                        {
                            title: "for in loop ",
                            description: "for in loop একটি object এর properties গুলোর উপর loop চালায়।",
                            code: "let person = {name: \"John\", age: 30, job: \"Developer\"};\n" +
                                "for (let key in person) {\n" +
                                "  console.log(key + \": \" + person[key]);\n" +
                                "}\n" +
                                "// Output: \"name: John\", \"age: 30\", \"job: Developer\""
                        },
                    ],
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "Loop",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/loop"}
            ]
        },
        {
            id: 8,
            value: "Bitwise",
            link: "/bitwise",
            lecture: [
                {
                    title: "Bitwise Operators (বিটওয়াইজ অপারেটর) : ",
                    description: "বিটওয়াইজ অপারেটরগুলো সংখ্যার বিটের উপর কাজ করে। জাভাস্ক্রিপ্টে বিভিন্ন বিটওয়াইজ অপারেটর ব্যবহার করা হয় ",
                    minTitle: [
                        {
                            title: "AND (বিটওয়াইজ এন্ড) & ",
                            description: "এই অপারেটরটি দুইটি বিটের মধ্যে একটি বিটওয়াইজ এন্ড অপারেশন করে।",
                            code: "let a = 5; // বিট: 0101\n" +
                                "let b = 3; // বিট: 0011\n" +
                                "let result = a & b;\n" +
                                "console.log(result);\n" +
                                "// Output: 1 (বিট: 0001)"
                        },
                        {
                            title: "OR (বিটওয়াইজ অর) | ",
                            description: "এই অপারেটরটি দুইটি বিটের মধ্যে একটি বিটওয়াইজ অর অপারেশন করে।",
                            code: "let a = 5; // বিট: 0101\n" +
                                "let b = 3; // বিট: 0011\n" +
                                "let result = a | b;\n" +
                                "console.log(result);\n" +
                                "// Output: 7 (বিট: 0111)"
                        },
                        {
                            title: " XOR (বিটওয়াইজ এক্সওআর) ^ ",
                            description: "এই অপারেটরটি দুইটি বিটের মধ্যে একটি বিটওয়াইজ এক্সওআর অপারেশন করে।",
                            code: "let a = 5; // বিট: 0101\n" +
                                "let b = 3; // বিট: 0011\n" +
                                "let result = a ^ b;\n" +
                                "console.log(result);\n" +
                                "// Output: 6 (বিট: 0110)"
                        },
                        {
                            title: "NOT (বিটওয়াইজ নট) ~ ",
                            description: "এই অপারেটরটি একটি বিটের প্রতিটি বিটের উল্টো করে দেয়।",
                            code: "let a = 5; // বিট: 0101\n" +
                                "let result = ~a;\n" +
                                "console.log(result);\n" +
                                "// Output: -6 (বিট: 1010)"
                        },
                        {
                            title: " Left Shift (বিটওয়াইজ লেফট শিফট) << ",
                            description: "এই অপারেটরটি বিটগুলোকে বাম দিকে সরিয়ে দেয়।",
                            code: "let a = 5; // বিট: 00000101\n" +
                                "let result = a << 2;\n" +
                                "console.log(result);\n" +
                                "// Output: 20 (বিট: 00010100)"
                        },
                        {
                            title: " Right Shift (বিটওয়াইজ রাইট শিফট) >> ",
                            description: "এই অপারেটরটি বিটগুলোকে ডান দিকে সরিয়ে দেয়।",
                            code: "let a = 20; // বিট: 00010100\n" +
                                "let result = a >> 2;\n" +
                                "console.log(result);\n" +
                                "// Output: 5 (বিট: 00000101)"
                        },
                        {
                            title: "Unsigned Right Shift (বিটওয়াইজ আনসাইনড রাইট শিফট) >>> ",
                            description: "এই অপারেটরটি সাইন বিটকে উপেক্ষা করে বিটগুলোকে ডান দিকে সরিয়ে দেয়।",
                            code: "let a = -20; // বিট: 11101100\n" +
                                "let result = a >>> 2;\n" +
                                "console.log(result);\n" +
                                "// Output: 1073741819"
                        }
                    ]
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "Bitwise",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/bitwise"}
            ]
        },
        {
            id: 9,
            value: "Events",
            link: "/events",
            lecture: [
                {
                    title: "JavaScript Events : ",
                    description: "জাভাস্ক্রিপ্ট ইভেন্ট হল কোনো নির্দিষ্ট ঘটনার প্রতিক্রিয়া জানাতে ব্যবহৃত একটি উপায়। উদাহরণস্বরূপ, একটি বাটন ক্লিক করলে, একটি ইমেজ লোড হলে, বা একটি কীবোর্ড কী চাপলে একটি ইভেন্ট ঘটে।",
                    minTitle: [
                        {
                            title: "Click Event ",
                            description: "Click ইভেন্ট তখন ঘটে যখন User কোনো HTML এলিমেন্টের উপর ক্লিক করে।",
                            code: "<button onclick=\"alert('Button clicked!')\">Click Me</button>\n" +
                                "// Output: \"Button clicked!\" (বাটন ক্লিক করার পর একটি এলার্ট দেখাবে)"

                        },
                        {
                            title: "Mouseover Event ",
                            description: "Mouseover ইভেন্ট তখন ঘটে যখন ব্যবহারকারী মাউস কার্সর কোনো HTML এলিমেন্টের উপর নিয়ে যায়।",
                            code: "<div onmouseover=\"console.log('Mouse over!')\">Hover over me</div>\n" +
                                "// Output: \"Mouse over!\" (এলিমেন্টের উপর মাউস নিয়ে গেলে কনসোলে লগ হবে)"
                        },
                        {
                            title: "Keydown Event ",
                            description: "Keydown ইভেন্ট তখন ঘটে যখন ব্যবহারকারী কোনো কীবোর্ড কী চাপেন।",
                            code: "<input type=\"text\" onkeydown=\"console.log('Key pressed!')\"/>\n" +
                                "                // Output: \"Key pressed!\" (কীবোর্ডের কোনো কী চাপলে কনসোলে লগ হবে)"
                        },
                        {
                            title: "Change Event ",
                            description: "Change ইভেন্ট তখন ঘটে যখন একটি ইনপুট ফিল্ডের মান পরিবর্তন করা হয়।",
                            code: "<input type=\"text\" onchange=\"console.log('Input changed!')\"/>\n" +
                                "                // Output: \"Input changed!\" (ইনপুটের মান পরিবর্তিত হলে কনসোলে লগ হবে)",
                        },
                        {
                            title: "Submit Event ",
                            description: "Submit ইভেন্ট তখন ঘটে যখন একটি ফর্ম সাবমিট করা হয়।",
                            code: "<form onsubmit=\"console.log('Form submitted!')\">\n" +
                                "  <button type=\"submit\">Submit</button>\n" +
                                "</form>\n" +
                                "// Output: \"Form submitted!\" (ফর্ম সাবমিট করলে কনসোলে লগ হবে)"
                        },
                        {
                            title: "Load Event ",
                            description: "Load ইভেন্ট তখন ঘটে যখন একটি পৃষ্ঠা বা ইমেজ সম্পূর্ণভাবে লোড হয়।",
                            code: "<body onload=\"console.log('Page fully loaded!')\">\n" +
                                "// Output: \"Page fully loaded!\" (পেজ পুরোপুরি লোড হলে কনসোলে লগ হবে)"
                        }
                    ]
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "Events",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/events"}
            ]
        },
        {
            id: 10,
            value: "DOM",
            link: "/dom",
            lecture: [
                {
                    title: "JavaScript DOM : ",
                    description: "DOM বা Document Object Model হল একটি ওয়েব পেজের structure। DOM এর মাধ্যমে জাভাস্ক্রিপ্ট একটি ওয়েব পেজের HTML এবং CSS এর সাথে ইন্টার‍্যাক্ট করতে পারে, যেমন এলিমেন্ট পরিবর্তন, অ্যাড করা বা মুছে ফেলা।",
                    minTitle: [
                        {
                            title: "Accessing Elements ",
                            description: "DOM এর মাধ্যমে HTML এলিমেন্টগুলোকে অ্যাক্সেস করতে নিচের মেথডগুলো ব্যবহার করা হয় ",
                            code: "document.getElementById('elementId'); // একটি নির্দিষ্ট ID সম্বলিত এলিমেন্ট অ্যাক্সেস করতে\n" +
                                "document.getElementsByClassName('className'); // একটি নির্দিষ্ট className সম্বলিত এলিমেন্টের লিস্ট অ্যাক্সেস করতে\n" +
                                "document.getElementsByTagName('tagName'); // একটি নির্দিষ্ট ট্যাগ নাম সম্বলিত এলিমেন্টের লিস্ট অ্যাক্সেস করতে\n" +
                                "document.querySelector('.className'); // CSS সিলেক্টর ব্যবহার করে প্রথম মিলে যাওয়া এলিমেন্ট অ্যাক্সেস করতে\n" +
                                "document.querySelectorAll('.className'); // CSS সিলেক্টর ব্যবহার করে সব মিলে যাওয়া এলিমেন্টের লিস্ট অ্যাক্সেস করতে"
                        },
                        {
                            title: "Changing Content ",
                            description: "DOM এর মাধ্যমে HTML এলিমেন্টের কন্টেন্ট পরিবর্তন করা যায় ",
                            code: "document.getElementById('elementId').innerHTML = 'New Content'; // একটি নির্দিষ্ট এলিমেন্টের ভিতরের HTML কন্টেন্ট পরিবর্তন করতে\n" +
                                "document.getElementById('elementId').textContent = 'New Text'; // একটি নির্দিষ্ট এলিমেন্টের ভিতরের টেক্সট কন্টেন্ট পরিবর্তন করতে"
                        },
                        {
                            title: "Changing Styles ",
                            description: "DOM এর মাধ্যমে HTML এলিমেন্টের স্টাইল পরিবর্তন করা যায় ",
                            code: "document.getElementById('elementId').style.color = 'red'; // একটি নির্দিষ্ট এলিমেন্টের টেক্সটের রং পরিবর্তন করতে\n" +
                                "document.getElementById('elementId').style.backgroundColor = 'yellow'; // একটি নির্দিষ্ট এলিমেন্টের ব্যাকগ্রাউন্ড রং পরিবর্তন করতে",
                        },
                        {
                            title: "Adding/Removing Elements ",
                            description: "DOM এর মাধ্যমে HTML এলিমেন্ট অ্যাড বা রিমুভ করা যায় ",
                            code: "let newElement = document.createElement('div'); // নতুন একটি div এলিমেন্ট তৈরি করা\n" +
                                "newElement.textContent = 'New Element'; // এলিমেন্টের কন্টেন্ট সেট করা\n" +
                                "document.body.appendChild(newElement); // নতুন এলিমেন্ট পেজে অ্যাড করা\n" +
                                "\n" +
                                "let element = document.getElementById('elementId'); // একটি নির্দিষ্ট এলিমেন্ট অ্যাক্সেস করা\n" +
                                "element.parentNode.removeChild(element); // এলিমেন্ট পেজ থেকে রিমুভ করা"
                        },
                        {
                            title: "Event Handling ",
                            description: "DOM এর মাধ্যমে ইভেন্ট হ্যান্ডলিং করতে পারা যায় ",
                            code: "document.getElementById('elementId').addEventListener('click', function() {\n" +
                                "  alert('Element clicked!');\n" +
                                "}); // একটি এলিমেন্টে ক্লিক ইভেন্ট হ্যান্ডলার যোগ করা"
                        },
                        {
                            title: "Traversing the DOM ",
                            description: "DOM এর মাধ্যমে এলিমেন্টের পেরেন্ট, চাইল্ড এবং সিবলিং অ্যাক্সেস করা যায় ",
                            code: "let parentElement = document.getElementById('elementId').parentNode; // একটি এলিমেন্টের পেরেন্ট নোড অ্যাক্সেস করা\n" +
                                "let childElements = document.getElementById('elementId').children; // একটি এলিমেন্টের চাইল্ড নোডগুলো অ্যাক্সেস করা\n" +
                                "let nextSibling = document.getElementById('elementId').nextElementSibling; // একটি এলিমেন্টের পরবর্তী সিবলিং অ্যাক্সেস করা"
                        }
                    ]
                },

            ],
        },
        {
            id: 11,
            value: "Scope&Hoisting",
            link: "/scope&hoisting",
            lecture: [
                {
                    title: "Scope (স্কোপ) : ",
                    description: "স্কোপ হলো একটি ভেরিয়েবল বা ফাংশনের পরিসর যেখানে তা দৃশ্যমান এবং ব্যবহার করা যেতে পারে। জাভাস্ক্রিপ্টে মূলত দুই ধরনের স্কোপ থাকে: লেক্সিকাল (বা ব্লক) স্কোপ এবং গ্লোবাল স্কোপ।",
                    minTitle: [
                        {
                            title: " Global Scope (গ্লোবাল স্কোপ) ",
                            description: "যেকোনো ভেরিয়েবল যা গ্লোবাল স্কোপে ডিফাইন করা হয়, তা পুরো প্রোগ্রাম জুড়ে অ্যাক্সেসযোগ্য থাকে।",
                            code: "let globalVar = \"I am global\";\n" +
                                "function showGlobal() {\n" +
                                "  console.log(globalVar);\n" +
                                "}\n" +
                                "showGlobal(); // আউটপুট: \"I am global\""
                        },
                        {
                            title: " Local Scope (লোকাল স্কোপ) ",
                            description: "যেকোনো ভেরিয়েবল যা একটি ফাংশনের মধ্যে ডিফাইন করা হয়, তা শুধুমাত্র সেই ফাংশনের মধ্যে অ্যাক্সেসযোগ্য থাকে।",
                            code: "function showLocal() {\n" +
                                "  let localVar = \"I am local\";\n" +
                                "  console.log(localVar);\n" +
                                "}\n" +
                                "showLocal();\n" +
                                "console.log(localVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)"
                        },
                        {
                            title: "Block Scope (ব্লক স্কোপ) ",
                            description: "ES6 থেকে, let এবং const দ্বারা ডিফাইন করা ভেরিয়েবলগুলো ব্লক স্কোপে থাকে, অর্থাৎ {} ব্রেসের মধ্যে সীমাবদ্ধ।",
                            code: "function checkBlockScope() {\n" +
                                "  if (true) {\n" +
                                "    let blockVar = \"I am inside block\";\n" +
                                "    console.log(blockVar);\n" +
                                "  }\n" +
                                "  console.log(blockVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)\n" +
                                "}\n" +
                                "checkBlockScope(); // আউটপুট: \"I am inside block\"\n"
                        }
                    ],
                },
                {
                    title: "Hoisting (হোস্টিং) : ",
                    description: "হোস্টিং হলো একটি জাভাস্ক্রিপ্ট ফিচার যা পরিবর্তনশীল এবং ফাংশন ডিক্লারেশনগুলোকে তাদের স্কোপের শীর্ষে নিয়ে আসে।",
                    minTitle: [
                        {
                            title: "Variable Hoisting (ভেরিয়েবল হোস্টিং) ",
                            description: "যখন একটি ভেরিয়েবল ডিক্লেয়ার করা হয়, তখন জাভাস্ক্রিপ্ট এটি স্কোপের শীর্ষে নিয়ে আসে। তবে, \\`var\\` দ্বারা ডিক্লেয়ার করা ভেরিয়েবলগুলোর ক্ষেত্রে কেবল ডিক্লারেশন হোস্টিং হয়, ইনিশিয়ালাইজেশন নয়।",
                            code: "console.log(hoistedVar); // আউটপুট হবে: undefined\n" +
                                "var hoistedVar = \"I am hoisted\";\n" +
                                "console.log(hoistedVar); // আউটপুট হবে: \"I am hoisted\""
                        },
                        {
                            title: "Function Hoisting (ফাংশন হোস্টিং) ",
                            description: "ফাংশন ডিক্লারেশনগুলো পুরোপুরি হোস্ট করা হয়, অর্থাৎ, ফাংশন কল করার আগে তা ব্যবহার করা সম্ভব।",
                            code: "hoistedFunction(); // আউটপুট হবে: \"I am hoisted function\"\n" +
                                "function hoistedFunction() {\n" +
                                "  console.log(\"I am hoisted function\");\n" +
                                "}"
                        },
                        {
                            title: "Let and Const Hoisting (লেট এবং কনস্ট হোস্টিং) ",
                            description: "let এবং const দ্বারা ডিক্লেয়ার করা ভেরিয়েবলগুলোর ক্ষেত্রে হোস্টিং ঘটে, কিন্তু তাদের ব্যবহার Temporal Dead Zone (TDZ) দ্বারা সীমাবদ্ধ। এর মানে হলো, তারা ডিক্লেয়ার না হওয়া পর্যন্ত ব্যবহার করা যাবে না।",
                            code: "console.log(letVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)\n" +
                                "let letVar = \"I am let\";"
                        },
                        {
                            title: "Example of TDZ ",
                            description: "TDZ প্রমাণিত করে যে, let এবং const ভেরিয়েবল তাদের ডিক্লারেশন লাইনের আগ পর্যন্ত অ্যাক্সেসযোগ্য নয়।",
                            code: "function exampleTDZ() {\n" +
                                "  console.log(tdVar); // এর আউটপুট হবে একটি ত্রুটি (ReferenceError)\n" +
                                "  let tdVar = \"I am in TDZ\";\n" +
                                "}\n" +
                                "exampleTDZ();"
                        }
                    ]
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "Scope & Hoisting",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/scope&histing"}
            ]
        },
        {
            id: 12,
            value: "Async",
            link: "/async",
            lecture: [
                {
                    title: "Async and Await : ",
                    description: "JavaScript-এ async এবং await কীওয়ার্ডগুলো ব্যবহার করে asynchronous কোড আরও সহজে লেখা যায়। এগুলো Promises এর সাথে কাজ করে এবং কোডকে synchronous কোডের মতোই পড়তে সহজ করে তোলে।",
                    minTitle: [
                        {
                            title: "Async Function (অ্যাসিঙ্ক ফাংশন) ",
                            description: "async function এমন একটি ফাংশন যেটি একটি Promise রিটার্ন করে। এটি ব্যবহারের মাধ্যমে আমরা asynchronous কোড লিখতে পারি।\n",
                            code: "async function fetchData() {\n" +
                                "    return \"Data fetched\";\n" +
                                "}\n" +
                                "fetchData().then(data => console.log(data)); // আউটপুট: Data fetched"
                        },
                        {
                            title: " Await (অ্যাওয়েট) ",
                            description: "await কীওয়ার্ডটি শুধুমাত্র async function ভিতরে ব্যবহার করা হয়। এটি একটি Promise-এর Result পর্যন্ত অপেক্ষা করে এবং Promise Result হলে তা রিটার্ন করে।",
                            code: "async function fetchData() {\n" +
                                "    let data = await new Promise(resolve => setTimeout(() => resolve(\"Data fetched\"), 2000));\n" +
                                "    console.log(data);\n" +
                                "}\n" +
                                "fetchData(); // আউটপুট: \"Data fetched\" (2 সেকেন্ড অপেক্ষা করার পরে)"
                        },
                        {
                            title: "Error Handling (এরর হ্যান্ডলিং) ",
                            description: "অ্যাসিঙ্ক এবং অ্যাওয়েট ব্যবহারের সময় এরর হ্যান্ডলিংও করা যায়। সাধারণত try-catch ব্লক ব্যবহার করে এরর হ্যান্ডলিং করা হয়।",
                            code: "async function fetchData() {\n" +
                                "    try {\n" +
                                "        let data = await new Promise((_, reject) => setTimeout(() => reject(\"Fetch error\"), 2000));\n" +
                                "        console.log(data);\n" +
                                "    } catch (error) {\n" +
                                "        console.log(\"Error:\", error);\n" +
                                "    }\n" +
                                "}\n" +
                                "fetchData(); // আউটপুট: \"Error: Fetch error\" (2 সেকেন্ড পরে)"
                        }
                    ]
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "Async Await",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/scope&histing"}
            ],

        },
        {
            id: 13,
            value: "Json",
            link: "/json",
            lecture: [
                {
                    title: "JSON (JavaScript Object Notation) ",
                    description: "JSON হল একটি লাইটওয়েট ডেটা ইন্টারচেঞ্জ ফরম্যাট যা মানুষের দ্বারা পড়তে সহজ এবং মেশিন দ্বারা পার্স করা সহজ। এটি সাধারণত অবজেক্ট এবং অ্যারে হিসেবে ডেটা উপস্থাপন করে।",
                    minTitle: [
                        {
                            title: "JSON Object : ",
                            description: "JSON অবজেক্টটি কীগুলোর সাথে মান জোড়া করে ডেটা স্টোর করে। কীগুলো স্ট্রিং হিসেবে এবং মানগুলো যেকোনো ধরনের ডেটা হতে পারে।",
                            code: "{\n" +
                                "  \"name\": \"John\",\n" +
                                "  \"age\": 30,\n" +
                                "  \"city\": \"New York\"\n" +
                                "}"
                        },
                        {
                            title: " JSON.stringify() ",
                            description: "এই মেথডটি একটি জাভাস্ক্রিপ্ট অবজেক্ট বা অ্যারেকে JSON স্ট্রিং-এ রূপান্তর করে।",
                            code: "const person = {\n" +
                                "  name: \"John\",\n" +
                                "  age: 30,\n" +
                                "  city: \"New York\"\n" +
                                "};\n" +
                                "\n" +
                                "const jsonString = JSON.stringify(person);\n" +
                                "console.log(jsonString); // আউটপুট {\"name\":\"John\",\"age\":30,\"city\":\"New York\"} "
                        },
                        {
                            title: "JSON.parse() ",
                            description: "এই মেথডটি একটি JSON স্ট্রিংকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করে।",
                            code: "const jsonString = '{\"name\":\"John\",\"age\":30,\"city\":\"New York\"}';\n" +
                                "const person = JSON.parse(jsonString);\n" +
                                "console.log(person); // আউটপুট: { name: \"John\", age: 30, city: \"New York\" }"
                        },
                        {
                            title: "Nested JSON Objects ",
                            description: "JSON অবজেক্টে অন্যান্য অবজেক্ট বা অ্যারে থাকতে পারে।",
                            code: "const user = {\n" +
                                "  name: \"Jane\",\n" +
                                "  address: {\n" +
                                "    street: \"123 Main St\",\n" +
                                "    city: \"Los Angeles\"\n" +
                                "  },\n" +
                                "  hobbies: [\"reading\", \"swimming\"]\n" +
                                "};\n" +
                                "\n" +
                                "const jsonString = JSON.stringify(user);\n" +
                                "console.log(jsonString); // আউটপুট: {\"name\":\"Jane\",\"address\":{\"street\":\"123 Main St\",\"city\":\"Los Angeles\"},\"hobbies\":[\"reading\",\"swimming\"]}"
                        },
                        {
                            title: " Handling Errors ",
                            description: "যখন JSON.parse() ব্যবহার করা হয়, তখন যদি স্ট্রিংটি অবৈধ হয় তবে একটি ত্রুটি হতে পারে।",
                            code: "try {\n" +
                                "  const invalidJson = '{name:\"John\",age:30}';\n" +
                                "  const parsedData = JSON.parse(invalidJson);\n" +
                                "  console.log(parsedData);\n" +
                                "} catch (error) {\n" +
                                "  console.error(\"Error parsing JSON:\", error); // " +
                                "আউটপুট: \"Error parsing JSON: SyntaxError: Unexpected token n in JSON at position 1\"\n" +
                                "}"
                        },
                        {
                            title: "JSON with Arrays ",
                            description: "JSON অ্যারে হিসেবেও ডেটা ধারণ করতে পারে।",
                            code: "const dataArray = [\n" +
                                "    { name: \"Alice\", age: 25 },\n" +
                                "    { name: \"Bob\", age: 30 }\n" +
                                "  ];\n" +
                                "  \n" +
                                "  const jsonString = JSON.stringify(dataArray);\n" +
                                "  console.log(jsonString); // আউটপুট: [{\"name\":\"Alice\",\"age\":25},{\"name\":\"Bob\",\"age\":30}]\n" +
                                "  \n" +
                                "  const parsedArray = JSON.parse(jsonString);\n" +
                                "  console.log(parsedArray); // আউটপুট : [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 } ]"

                        }
                    ]
                },
                {
                    tags: [
                        "Javascript ",
                        "JS ",
                        "DSA",
                        "JSON",
                        "NodeJs ",
                        "Programming ",
                        "Web Development ",
                    ]
                },
                {linkTag: "/learn/Javascrip/json"}
            ]
        },
    ],

    dbms:[
        {
            id: 0,
            value: "Basic",
            link: "/link",
            lecture: [
                {
                    title: "Introduction of DBMS (Database Management System) – ",
                    description: "Database Management System (DBMS) হচ্ছে একটি software system যা data কে একটি structured manner এ manage এবং organize করার জন্য design করা হয়েছে।\n" +
                        "DBMS data store এবং retrieve করার জন্য convenient and efficient manner offer করে।"
                },
                {
                    title: "Key Features of DBMS – ",
                    minTitle:[
                        {
                            title: "Data modeling : ",
                            description:"একটি DBMS data model create এবং modify করার জন্য tools প্রদান করে, যা database এ data এর structure এবং relationships define করে।"
                        },
                        {
                            title: "Data storage and retrieval : ",
                            description:" DBMS database থেকে data store এবং retrieve করার জন্য দায়ী, এবং data search এবং query করার জন্য বিভিন্ন পদ্ধতি প্রদান করে।"
                        },
                        {
                            title: "Concurrency control : ",
                            description: "DBMS concurrency control mechanisms প্রদান করে, যা নিশ্চিত করে যে multiple users data access করতে পারবে conflicting ছাড়া।"
                        },
                        {
                            title: "Data integrity and security : ",
                            description: " DBMS data integrity এবং security constraints enforce করার জন্য tools প্রদান করে, যেমন data এর values এর উপর constraints এবং access control যা নির্দিষ্ট করে কে data access করতে পারবে।"
                        },
                        {
                            title: "Backup and recovery : ",
                            description: "DBMS system failure এর ক্ষেত্রে data backup এবং recovery করার জন্য mechanisms প্রদান করে।"
                        },
                    ]
                },
                {
                    title: "Types of DBMS – ",
                    description: "DBMS দুটি প্রধান শ্রেণীতে বিভক্ত করা যায়: Relational Database Management System (RDBMS) এবং Non-Relational Database Management System (NoSQL বা Non-SQL)।",
                    minTitle: [
                        {
                            title: "RDBMS : ",
                            description: " Data টেবিলের আকারে সংগঠিত হয় এবং প্রতিটি টেবিলের একটি নির্দিষ্ট সংখ্যা row এবং column থাকে। Data primary এবং foreign keys এর মাধ্যমে একে অপরের সাথে সম্পর্কিত থাকে।"
                        },
                        {
                            title: "NoSQL : ",
                            description: "Data key-value pairs, documents, graphs, বা column-based আকারে সংগঠিত হয়। এগুলি large-scale, high-performance scenarios handle করার জন্য design করা হয়েছে।"
                        }
                    ]
                },
                {
                    title: "Database Languages – ",
                    description: "Database languages প্রধানত চারটি ভাগে বিভক্ত : ",
                    minTitle: [
                        {title: "Data Definition Language (DDL)."},
                        {title: "Data Manipulation Language (DML)."},
                        {title: "Data Control Language (DCL)."},
                        {title: "Transactional Control Language (TCL)."},
                    ]
                },
                {
                    title: "Data Definition Language (DDL) – ",
                    description: "DDL হচ্ছে Data Definition Language এর সংক্ষিপ্ত রূপ, যা database schemas এবং data কিভাবে database এ থাকা উচিত তা নির্দেশ করে।",
                    minTitle: [
                        {
                            title: "CREATE : ",
                            description: " একটি database এবং এর objects (table, index, views, store procedure, function, triggers) তৈরি করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "ALTER : ",
                            description: "বিদ্যমান database এর structure পরিবর্তন করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "DROP : ",
                            description: "database থেকে objects delete করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "TRUNCATE : ",
                            description: " একটি table থেকে সব record remove করতে এবং সকল space মুক্ত করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "COMMENT : ",
                            description: "data dictionary তে মন্তব্য যোগ করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "RENAME : ",
                            description: "একটি object এর নাম পরিবর্তন করতে ব্যবহৃত হয়।"
                        },
                    ]
                },
                {
                    title: "Data Manipulation Language (DML) –",
                    description: "DML হচ্ছে Data Manipulation Language এর সংক্ষিপ্ত রূপ, যা data manipulation এর জন্য ব্যবহৃত হয় এবং সাধারণ SQL statements যেমন SELECT, INSERT, UPDATE, DELETE ইত্যাদি অন্তর্ভুক্ত করে।",
                    minTitle: [
                        {
                            title: "SELECT :",
                            description: "database থেকে data retrieve করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "INSERT :",
                            description: "একটি table এ data insert করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "UPDATE :",
                            description: "একটি table এ বিদ্যমান data update করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "DELETE :",
                            description: "একটি table থেকে সমস্ত records delete করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "MERGE:",
                            description: "UPSERT operation (insert or update) করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "CALL :",
                            description: "একটি PL/SQL বা Java subprogram call করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "EXPLAIN PLAN :",
                            description: "data access path এর ব্যাখ্যা করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "LOCK TABLE :",
                            description: "concurrency control এর জন্য ব্যবহৃত হয়।"
                        }
                    ]
                },
                {
                    title: "Data Control Language (DCL) –",
                    description: "DCL হচ্ছে Data Control Language এর সংক্ষিপ্ত রূপ, যা database এ access specify করতে ব্যবহৃত হয়।",
                    minTitle: [
                        {
                            title: "GRANT :",
                            description: "একটি user কে DML commands (SELECT, INSERT, DELETE, ইত্যাদি) চালানোর permission প্রদান করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "REVOKE :",
                            description: "একটি user এর permission বাতিল করতে ব্যবহৃত হয়।"
                        }
                    ]
                },
                {
                    title: "Data Control Language (DCL) –",
                    description: "DCL হচ্ছে Data Control Language এর সংক্ষিপ্ত রূপ, যা database এ access specify করতে ব্যবহৃত হয়।",
                    minTitle: [
                        {
                            title: "GRANT :",
                            description: "একটি user কে DML commands (SELECT, INSERT, DELETE, ইত্যাদি) চালানোর permission প্রদান করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "REVOKE :",
                            description: "একটি user এর permission বাতিল করতে ব্যবহৃত হয়।"
                        }
                    ]
                },
                {
                    title: "Transactional Control Language (TCL) –",
                    description: "TCL হচ্ছে Transactional Control Language এর সংক্ষিপ্ত রূপ, যা সমস্ত ধরনের transactional data এবং সকল transactions পরিচালনা করে।",
                    minTitle: [
                        {
                            title: "ROLLBACK :",
                            description: "database এ করা পরিবর্তনগুলো বাতিল বা undo করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "COMMIT :",
                            description: "database এ করা পরিবর্তনগুলো save করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "SAVEPOINT :",
                            description: "database এ data অস্থায়ীভাবে save করতে ব্যবহৃত হয়।"
                        }
                    ]
                },
                {
                    title: "Data Query Language (DQL) –",
                    description: "DQL হচ্ছে Data Manipulation Language এর একটি subset। DQL এর প্রধান command হল SELECT statement, যা একটি table থেকে data retrieve করতে ব্যবহৃত হয় table এর কোন পরিবর্তন ছাড়াই।"
                },
                {
                    title: "Applications of DBMS –",
                    description: "DBMS এর প্রধান applications হল :",
                    minTitle: [
                        {
                            title: "Enterprise Information :",
                            description: "Sales, accounting, human resources, manufacturing, online retailers।"
                        },
                        {
                            title: "Banking and Finance Sector :",
                            description: "Banks এ customer details, accounts, loans, banking transactions, credit card transactions management।"
                        },
                        {
                            title: "University :",
                            description: "ছাত্রদের course enrollment information, grades, staff roles management।"
                        },
                        {
                            title: "Airlines :",
                            description: "Reservations এবং schedules management।"
                        },
                        {
                            title: "Telecommunications :",
                            description: "Prepaid এবং postpaid bills management।"
                        }
                    ]
                },
                {
                    title: "Paradigm Shift from File System to DBMS –",
                    description: "File System manages data using files on a hard disk. DBMS এর দিকে shift করার প্রধান কারণগুলি হল:",
                    minTitle: [
                        {
                            title: "Redundancy of Data :",
                            description: "File systems এ data redundancy দেখা যায় যেখানে একই data বিভিন্ন স্থানে কপি করা হয়। DBMS data redundancy হ্রাস করতে সাহায্য করে।"
                        },
                        {
                            title: "Inconsistency of Data :",
                            description: "File systems এ data inconsistency দেখা যায় যেখানে একই data এর একাধিক কপি একে অপরের সাথে মেলে না। DBMS data consistency বজায় রাখতে সাহায্য করে।"
                        },
                        {
                            title: "Difficult Data Access :",
                            description: "File systems এ data access করতে user কে file এর exact location জানতে হয়। DBMS সহজ data access প্রদান করে।"
                        },
                        {
                            title: "Unauthorized Access :",
                            description: "File systems unauthorized data access এর ঝুঁকি তৈরি করে। DBMS data security বাড়াতে সাহায্য করে।"
                        },
                        {
                            title: "No Concurrent Access :",
                            description: "File systems এ multiple users একই data একসাথে access করতে পারে না। DBMS concurrent data access করতে সহায়তা করে।"
                        },
                        {
                            title: "No Backup and Recovery :",
                            description: "File systems এ data এর কোন backup এবং recovery ব্যবস্থা নেই। DBMS backup এবং recovery management প্রদান করে।"
                        }
                    ]
                },
                {
                    title: "Advantages of DBMS –",
                    description: "DBMS এর সুবিধাগুলি অন্তর্ভুক্ত :",
                    minTitle: [
                        {
                            title: "Data Organization :",
                            description: "DBMS data structured ভাবে organize এবং store করতে সাহায্য করে, যা প্রয়োজন অনুযায়ী data retrieve এবং query করতে সহজ করে তোলে।"
                        },
                        {
                            title: "Data Integrity :",
                            description: "DBMS data integrity constraints enforce করতে সাহায্য করে, যেমন data এর values এর উপর constraints এবং access control যা নির্দিষ্ট করে কে data access করতে পারবে।"
                        },
                        {
                            title: "Concurrent Access :",
                            description: "DBMS concurrent data access control করতে সহায়তা করে, যাতে multiple users একই data access করতে পারে conflicting ছাড়া।"
                        },
                        {
                            title: "Data Security :",
                            description: "DBMS data security management করতে tools প্রদান করে, যেমন data access control এবং sensitive data encryption।"
                        },
                        {
                            title: "Backup and Recovery :",
                            description: "DBMS system failure এর ক্ষেত্রে data backup এবং recovery mechanisms প্রদান করে।"
                        },
                        {
                            title: "Data Sharing :",
                            description: "DBMS multiple users কে একই data access এবং share করতে দেয়, যা collaborative work environment এ কার্যকর হতে পারে।"
                        }
                    ]
                },
                {
                    title: "Disadvantages of DBMS –",
                    description: "DBMS এর কিছু অসুবিধা অন্তর্ভুক্ত :",
                    minTitle: [
                        {
                            title: "Complexity :",
                            description: "DBMS set up এবং maintain করা জটিল হতে পারে, যা specialized knowledge এবং skills প্রয়োজন।"
                        },
                        {
                            title: "Performance Overhead :",
                            description: "DBMS ব্যবহারে performance overhead তৈরি হতে পারে, বিশেষ করে high levels of concurrency প্রয়োজন হলে।"
                        },
                        {
                            title: "Scalability :",
                            description: "DBMS ব্যবহার করা application এর scalability সীমিত করতে পারে, কারণ এটি data consistency নিশ্চিত করতে locking এবং অন্যান্য synchronization mechanisms ব্যবহার করতে হয়।"
                        },
                        {
                            title: "Cost :",
                            description: "একটি DBMS কেনা, maintain করা এবং upgrade করার খরচ উচ্চ হতে পারে, বিশেষ করে large বা complex systems এর ক্ষেত্রে।"
                        },
                        {
                            title: "Limited Use Cases :",
                            description: "সব use cases DBMS এর জন্য উপযুক্ত নয়; কিছু সমাধানগুলিতে high reliability, consistency বা security প্রয়োজন নেই এবং অন্য ধরনের data storage দ্বারা ভালভাবে serve করা যেতে পারে।"
                        }
                    ]
                },
            ],
        },
        {
            id: 1,
            value: "Keys",
            link: "/keys",
            lecture: [
                {
                    title: "Database Keys এর পরিচিতি : ",
                    description: "Database keys বিভিন্ন টেবিলের মধ্যে সম্পর্ক স্থাপন এবং ডেটার নির্ভুলতা নিশ্চিত করতে ব্যবহৃত হয়। এখানে বিভিন্ন ধরনের কিই আলোচনা করা হলো:",
                    minTitle: [
                        {
                            title: "Primary Key : ",
                            description: "Primary key হল একটি টেবিলের মধ্যে একটি ইউনিক কলাম বা কলামের সেট যা প্রতিটি রেকর্ডকে অনন্যভাবে চিহ্নিত করে। একটি টেবিলের মধ্যে একটিই primary key থাকতে পারে.",
                            code: "CREATE TABLE Users (\n    UserID INT PRIMARY KEY,\n    UserName VARCHAR(255) NOT NULL\n);"
                        },
                        {
                            title: "Foreign Key : ",
                            description: "Foreign key হল একটি কলাম বা কলামের সেট যা অন্য একটি টেবিলের primary key কে reference করে। এটি টেবিলের মধ্যে সম্পর্ক স্থাপন করতে ব্যবহৃত হয়.",
                            code: "CREATE TABLE Orders (\n    OrderID INT PRIMARY KEY,\n    UserID INT,\n    FOREIGN KEY (UserID) REFERENCES Users(UserID)\n);"
                        },
                        {
                            title: "Unique Key : ",
                            description: "Unique key হল একটি কলাম বা কলামের সেট যা একটি টেবিলের মধ্যে ইউনিক ভ্যালু নিশ্চিত করে। Primary key এর মতই, কিন্তু একটি টেবিলের মধ্যে একাধিক unique key থাকতে পারে.",
                            code: "CREATE TABLE Employees (\n    EmployeeID INT PRIMARY KEY,\n    Email VARCHAR(255) UNIQUE NOT NULL\n);"
                        },
                        {
                            title: "Composite Key : ",
                            description: "Composite key হল দুটি বা তার অধিক কলামের সমন্বয় যা মিলে একটি রেকর্ডকে ইউনিকভাবে চিহ্নিত করে। এটি তখন ব্যবহৃত হয় যখন একটি একক কলাম যথেষ্ট নয়.",
                            code: "CREATE TABLE CourseEnrollments (\n    StudentID INT,\n    CourseID INT,\n    EnrollmentDate DATE,\n    PRIMARY KEY (StudentID, CourseID)\n);"
                        },
                        {
                            title: "Candidate Key : ",
                            description: "Candidate key হল টেবিলের সব সম্ভাব্য primary key গুলির মধ্যে একটি। এটি একটি বা একাধিক কলামের সমন্বয় হতে পারে যা টেবিলের প্রতিটি রেকর্ডকে ইউনিকভাবে চিহ্নিত করতে পারে.",
                            code: "CREATE TABLE Students (\n    StudentID INT PRIMARY KEY,\n    SSN VARCHAR(11) UNIQUE NOT NULL\n);"
                        },
                        {
                            title: "Alternate Key : ",
                            description: "Alternate key হল candidate key গুলির মধ্যে যেগুলি primary key হিসেবে নির্বাচিত হয়নি। এটি টেবিলের অন্যান্য ইউনিক কন্ডিশনগুলি নিশ্চিত করে.",
                            code: "CREATE TABLE Products (\n    ProductID INT PRIMARY KEY,\n    SKU VARCHAR(255) UNIQUE NOT NULL\n);"
                        }
                    ]
                }
            ],
        },
        {
            id: 2,
            value: "DDL",
            link: "/ddl",
            lecture: [
                {
                    title: "CREATE TABLE Command Example: ",
                    description: "CREATE TABLE কমান্ডটি ডাটাবেজে একটি নতুন টেবিল তৈরির জন্য ব্যবহার করা হয়। উপরের উদাহরণে একটি employees নামের টেবিল তৈরি করা হয়েছে, যেখানে চারটি কলাম আছে: id, name, department, এবং salary। id কলামটি integer এবং এটিকে primary key হিসাবে সেট করা হয়েছে, যা টেবিলের প্রতিটি row কে uniquely identify করে। name কলামটি একটি string, যার max length 100 characters এবং এটি empty থাকতে পারবে না। department কলামটি একটি string, যার max length 50 characters এবং এটি empty থাকতে পারে। salary কলামটি একটি দশমিক সংখ্যা, যা max length 10 characters পর্যন্ত হতে পারে, যার মধ্যে 2টি সংখ্যা দশমিকের পরে থাকতে পারে, এবং এটি খালি থাকতে পারে।",
                    code: "CREATE TABLE employees (\n" +
                        "    id INT PRIMARY KEY,\n" +
                        "    name VARCHAR(100) NOT NULL,\n" +
                        "    department VARCHAR(50),\n" +
                        "    salary DECIMAL(10, 2)\n" +
                        ");"
                },

                {
                    title: "CREATE TABLE with AUTO_INCREMENT Primary Key : ",
                    description: "CREATE TABLE কমান্ডটি একটি নতুন টেবিল তৈরি করতে ব্যবহৃত হয়, যেখানে AUTO_INCREMENT কলামটি প্রতিটি নতুন রেকর্ডের জন্য স্বয়ংক্রিয়ভাবে একটি অনন্য সংখ্যা তৈরি করে। উপরের উদাহরণে products নামের একটি টেবিল তৈরি করা হয়েছে যেখানে product_id কলামটি একটি AUTO_INCREMENT integer এবং primary key হিসেবে সেট করা হয়েছে।",
                    code: "CREATE TABLE products (\n" +
                        "    product_id INT PRIMARY KEY AUTO_INCREMENT,\n" +
                        "    product_name VARCHAR(100) NOT NULL,\n" +
                        "    price DECIMAL(10, 2) NOT NULL\n" +
                        ");"
                },

                {
                    title: "ALTER TABLE Command Example : ",
                    description: "ALTER TABLE কমান্ডটি বিদ্যমান একটি টেবিলের কাঠামো পরিবর্তন করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলের মধ্যে একটি নতুন email কলাম যোগ করা হয়েছে, যা VARCHAR(255) টাইপের।",
                    code: "ALTER TABLE employees\n" +
                        "ADD email VARCHAR(255);"
                },

                {
                    title: "DROP TABLE Command Example : ",
                    description: "DROP TABLE কমান্ডটি একটি টেবিলকে স্থায়ীভাবে ডাটাবেজ থেকে মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলটি মুছে ফেলা হয়েছে।",
                    code: "DROP TABLE employees;"
                },

                {
                    title: "TRUNCATE TABLE Command Example : ",
                    description: "TRUNCATE TABLE কমান্ডটি টেবিলের সমস্ত রেকর্ড মুছে ফেলার জন্য ব্যবহার করা হয়, তবে টেবিলের কাঠামো বজায় থাকে। উপরের উদাহরণে employees টেবিলের সমস্ত রেকর্ড মুছে ফেলা হয়েছে, কিন্তু টেবিলের কাঠামো অপরিবর্তিত থাকে।",
                    code: "TRUNCATE TABLE employees;"
                },

                {
                    title: "COMMENT ON TABLE Command Example : ",
                    description: "COMMENT ON TABLE কমান্ডটি একটি টেবিলের জন্য মন্তব্য যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলের উদ্দেশ্য সম্পর্কে একটি মন্তব্য যোগ করা হয়েছে।",
                    code: "COMMENT ON TABLE employees IS 'Table to store employee details';"
                },

                {
                    title: "RENAME TABLE Command Example : ",
                    description: "RENAME TABLE কমান্ডটি একটি টেবিলের নাম পরিবর্তন করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলটির নাম পরিবর্তন করে staff রাখা হয়েছে。",
                    code: "ALTER TABLE employees RENAME TO staff;"
                }
            ],
        },
        {
            id: 3,
            value: "DML",
            link: "/dml",
            lecture: [
                {
                    title: "INSERT INTO Command Example",
                    description: "INSERT INTO কমান্ডটি একটি টেবিলে নতুন রেকর্ড যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলে নির্দিষ্ট মানগুলি সহ একটি রেকর্ড যোগ করা হয়েছে।",
                    code: "INSERT INTO employees (id, name, department, salary)\nVALUES (1, 'John Doe', 'HR', 50000.00);"
                },
                {
                    title: "UPDATE Command Example",
                    description: "UPDATE কমান্ডটি একটি টেবিলের বিদ্যমান রেকর্ডগুলির তথ্য পরিবর্তন করতে ব্যবহার করা হয়। উপরের উদাহরণে id = 1 এর জন্য salary আপডেট করা হয়েছে 55000.00 এ।",
                    code: "UPDATE employees\nSET salary = 55000.00\nWHERE id = 1;"
                },
                {
                    title: "DELETE Command Example",
                    description: "DELETE কমান্ডটি একটি টেবিল থেকে নির্দিষ্ট রেকর্ড মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে id = 1 রেকর্ডটি employees টেবিল থেকে মুছে ফেলা হয়েছে।",
                    code: "DELETE FROM employees\nWHERE id = 1;"
                },
                {
                    title: "SELECT Command Example",
                    description: "SELECT কমান্ডটি একটি টেবিল থেকে রেকর্ডগুলি পুনরুদ্ধার করতে ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলের সমস্ত রেকর্ড নির্বাচন করা হয়েছে।",
                    code: "SELECT * FROM employees;"
                },
                {
                    title: "INSERT INTO with SELECT Command Example",
                    description: "INSERT INTO কমান্ডের সাথে SELECT ব্যবহার করা হয় ডেটা এক টেবিল থেকে আরেক টেবিলে কপি করতে। উপরের উদাহরণে, employees টেবিলের HR বিভাগের সমস্ত রেকর্ড employees_backup টেবিলে কপি করা হয়েছে।",
                    code: "INSERT INTO employees_backup (id, name, department, salary)\nSELECT id, name, department, salary\nFROM employees\nWHERE department = 'HR';"
                },
                {
                    title: "UPSERT (MERGE) Command Example",
                    description: "UPSERT বা MERGE কমান্ডটি ডাটাবেজে রেকর্ড আপডেট বা যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে, যদি id = 1 এর জন্য রেকর্ড বিদ্যমান থাকে তবে এটি আপডেট করা হবে; অন্যথায় একটি নতুন রেকর্ড যোগ করা হবে।",
                    code: "MERGE INTO employees AS target\nUSING (VALUES (1, 'John Doe', 'HR', 55000.00)) AS source (id, name, department, salary)\nON target.id = source.id\nWHEN MATCHED THEN\n    UPDATE SET salary = source.salary\nWHEN NOT MATCHED THEN\n    INSERT (id, name, department, salary)\n    VALUES (source.id, source.name, source.department, source.salary);"
                },
                {
                    title: "TRUNCATE Command Example",
                    description: "TRUNCATE কমান্ডটি একটি টেবিলের সমস্ত রেকর্ড দ্রুত মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে, employees টেবিলের সমস্ত রেকর্ড মুছে ফেলা হয়েছে, তবে টেবিলের কাঠামো বজায় থাকে।",
                    code: "TRUNCATE TABLE employees;"
                },
                {
                    title: "DELETE with JOIN Command Example",
                    description: "DELETE কমান্ডটি JOIN এর মাধ্যমে ব্যবহার করা যেতে পারে নির্দিষ্ট শর্তের উপর ভিত্তি করে রেকর্ড মুছে ফেলার জন্য। উপরের উদাহরণে, New York লোকেশনের সমস্ত department এর সাথে সম্পর্কিত employees টেবিলের রেকর্ডগুলি মুছে ফেলা হয়েছে।",
                    code: "DELETE e\nFROM employees e\nJOIN departments d ON e.department = d.name\nWHERE d.location = 'New York';"
                }
            ],
        },
        {
            id: 5,
            value: "TCL",
            link: "/tcl",
            lecture: [
                {
                    title: "ACID Properties of Transactions ",
                    minTitle: [
                        {
                            title: "Atomicity",
                            description: "Atomicity নিশ্চিত করে যে একটি ট্রানজেকশনের সমস্ত অপারেশন একত্রে সম্পন্ন হয়। যদি ট্রানজেকশনের কোন অংশ ব্যর্থ হয়, তবে পুরো ট্রানজেকশন রোলব্যাক হয়ে যায়, ফলে ডেটাবেস অপরিবর্তিত থাকে।"
                        },
                        {
                            title: "Consistency",
                            description: "Consistency নিশ্চিত করে যে একটি ট্রানজেকশন ডেটাবেসকে একটি সঠিক অবস্থান থেকে অন্য সঠিক অবস্থায় নিয়ে আসে। ট্রানজেকশন শেষ হলে, ডেটাবেস অবশ্যই সঙ্গতিপূর্ণ অবস্থায় থাকবে।"
                        },
                        {
                            title: "Isolation",
                            description: "Isolation নিশ্চিত করে যে একটি ট্রানজেকশনের অপারেশনগুলি অন্যান্য সমকালীন ট্রানজেকশনগুলির অপারেশন থেকে পৃথক থাকে। একটি ট্রানজেকশন সম্পন্ন না হওয়া পর্যন্ত অন্য ট্রানজেকশনগুলির অপারেশন তার উপর প্রভাব ফেলতে পারে না।"
                        },
                        {
                            title: "Durability",
                            description: "Durability নিশ্চিত করে যে একবার একটি ট্রানজেকশন কমিট হয়ে গেলে, তার পরিবর্তনগুলি স্থায়ী হয় এবং সিস্টেম ব্যর্থতার ঘটনাতেও হারিয়ে যাবে না।"
                        }
                    ]
                },
                {
                    title: "Basic Transaction with INSERT and COMMIT",
                    description: "একটি নতুন ট্রানজেকশন শুরু করে। INSERT INTO বিবৃতিটি একটি নতুন কর্মচারী রেকর্ড যোগ করে এবং COMMIT সমস্ত পরিবর্তন সংরক্ষণ করে।",
                    code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (1, 'Alice Smith', 'Engineering', 75000.00);\nCOMMIT;"
                },
                {
                    title: "Transaction with INSERT and ROLLBACK",
                    description: "ROLLBACK ট্রানজেকশনের সময় করা সমস্ত পরিবর্তন বাতিল করে, তাই ইনসার্ট করা রেকর্ডটি সংরক্ষিত হয় না।",
                    code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (2, 'Bob Johnson', 'Sales', 70000.00);\nROLLBACK;"
                },
                {
                    title: "Transaction with Multiple INSERTS",
                    description: "একাধিক রেকর্ড `employees` টেবিলের মধ্যে ইনসার্ট করা হয়েছে এবং COMMIT নিশ্চিত করে যে সমস্ত রেকর্ড সংরক্ষিত হয়।",
                    code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (3, 'Carol White', 'HR', 60000.00);\nINSERT INTO employees (id, name, department, salary) \nVALUES (4, 'David Green', 'Finance', 72000.00);\nCOMMIT;"
                },
                {
                    title: "Transaction with UPDATE and ROLLBACK",
                    description: "এই ট্রানজেকশন একটি কর্মচারীর বেতন আপডেট করে কিন্তু ROLLBACK ট্রানজেকশনের পরিবর্তনগুলি বাতিল করে, তাই কোন আপডেট সংরক্ষিত হয় না।",
                    code: "BEGIN TRANSACTION;\nUPDATE employees \nSET salary = 78000.00 \nWHERE id = 1;\nROLLBACK;"
                },
                {
                    title: "Transaction with SAVEPOINT",
                    description: "এই ট্রানজেকশন একটি সেভপয়েন্ট সেট করে এবং পরে সেই সেভপয়েন্টে ফিরে যায়, আপডেটটি রোলব্যাক করে কিন্তু প্রাথমিক ইনসার্ট রেখে দেয়।",
                    code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (5, 'Emma Davis', 'Marketing', 80000.00);\nSAVEPOINT savepoint1;\nUPDATE employees \nSET salary = 85000.00 \nWHERE id = 5;\nROLLBACK TO SAVEPOINT savepoint1;\nCOMMIT;"
                },
                {
                    title: "Transaction with SET TRANSACTION READ ONLY",
                    description: "এই ট্রানজেকশনটি পড়া-মাত্র মোডে সেট করা হয়েছে, শুধুমাত্র পড়ার অপারেশনগুলি অনুমোদিত। লেখার চেষ্টা করলে ত্রুটি হবে।",
                    code: "BEGIN TRANSACTION;\nSET TRANSACTION READ ONLY;\n-- Read operations only\nCOMMIT;"
                },
                {
                    title: "Transaction with SET TRANSACTION READ WRITE",
                    description: "এই ট্রানজেকশনটি পড়া এবং লেখার উভয় অপারেশনই অনুমোদিত। এটি ডেটা পরিবর্তন করতে সক্ষম করে।",
                    code: "BEGIN TRANSACTION;\nSET TRANSACTION READ WRITE;\n-- Read and write operations\nCOMMIT;"
                },
                {
                    title: "Transaction with Nested Transactions",
                    description: "এই উদাহরণে একটি প্যারেন্ট ট্রানজেকশন এবং একটি নেস্টেড চাইল্ড ট্রানজেকশন রয়েছে। উভয় ট্রানজেকশনই কমিট করতে হয় সব পরিবর্তন সংরক্ষণ করতে।",
                    code: "BEGIN TRANSACTION;\n-- Parent transaction\nBEGIN TRANSACTION;\n-- Child transaction operations\nCOMMIT;\n-- Parent transaction continues\nCOMMIT;"
                },
                {
                    title: "Transaction with Multiple ROLLBACKS",
                    description: "এই ট্রানজেকশনটি একাধিক রোলব্যাক অন্তর্ভুক্ত করে। একটি রেকর্ড ইনসার্ট করা হয়, একটি ডিলিট অপারেশন করা হয়, কিন্তু ডিলিট অপারেশন সেভপয়েন্টে ফিরে যায়, প্রাথমিক ইনসার্ট রেখে দেয়।",
                    code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (6, 'George Wilson', 'IT', 95000.00);\nSAVEPOINT sp1;\nDELETE FROM employees \nWHERE id = 6;\nROLLBACK TO SAVEPOINT sp1;\nCOMMIT;"
                },
                {
                    title: "Transaction with SET TRANSACTION ISOLATION LEVEL",
                    description: "এই ট্রানজেকশনটি আইসোলেশন স্তরকে SERIALIZABLE এ সেট করে, সসঙ্গত ট্রানজেকশনগুলির জন্য সর্বোচ্চ স্তরের আইসোলেশন নিশ্চিত করে।",
                    code: "BEGIN TRANSACTION;\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n-- Operations with SERIALIZABLE isolation\nCOMMIT;"
                }
            ],
        },
        {
            id: 6,
            value: "DCL",
            link: "/dcl",
            lecture: [
                {
                    title: "GRANT Command Example",
                    description: "GRANT কমান্ডটি একটি নির্দিষ্ট ব্যবহারকারী বা রোলকে ডাটাবেজে নির্দিষ্ট অনুমতি (privileges) প্রদান করতে ব্যবহার করা হয়। উপরের উদাহরণে, 'username' নামের ব্যবহারকারীকে employees টেবিলের উপর SELECT এবং INSERT অনুমতি প্রদান করা হয়েছে।",
                    code: "GRANT SELECT, INSERT ON employees TO 'username';"
                },
                {
                    title: "REVOKE Command Example",
                    description: "REVOKE কমান্ডটি পূর্বে প্রদানকৃত অনুমতিগুলি (privileges) অপসারণ করতে ব্যবহার করা হয়। উপরের উদাহরণে, 'username' নামের ব্যবহারকারী থেকে employees টেবিলের উপর SELECT এবং INSERT অনুমতি অপসারণ করা হয়েছে।",
                    code: "REVOKE SELECT, INSERT ON employees FROM 'username';"
                },
                {
                    title: "GRANT ALL PRIVILEGES Command Example",
                    description: "GRANT ALL PRIVILEGES কমান্ডটি একটি ব্যবহারকারীকে সম্পূর্ণ অনুমতি প্রদান করতে ব্যবহার করা হয়। উপরের উদাহরণে, 'username' ব্যবহারকারীকে database_name ডাটাবেজের সব টেবিলের উপর সমস্ত অনুমতি প্রদান করা হয়েছে।",
                    code: "GRANT ALL PRIVILEGES ON database_name.* TO 'username';"
                },
                {
                    title: "REVOKE ALL PRIVILEGES Command Example",
                    description: "REVOKE ALL PRIVILEGES কমান্ডটি পূর্বে প্রদানকৃত সমস্ত অনুমতি অপসারণ করতে ব্যবহার করা হয়। উপরের উদাহরণে, 'username' ব্যবহারকারী থেকে database_name ডাটাবেজের সব টেবিলের উপর সমস্ত অনুমতি অপসারণ করা হয়েছে।",
                    code: "REVOKE ALL PRIVILEGES ON database_name.* FROM 'username';"
                }

            ]
        },

    ],

    nodeJs: [
        {
            id: 0,
            value: "Basic",
            link: "/basic",
            lecture: [
                {
                    title: "Introduction to Node.js : ",
                    description: "Node.js হল একটি ওপেন সোর্স, cross-platform runtime environment, যা server-side এবং networking applications ডেভেলপ করতে ব্যবহৃত হয়। এটি Google-এর V8 JavaScript engine এর উপর ভিত্তি করে কাজ করে, এবং জাভাস্ক্রিপ্ট ব্যবহার করে সার্ভার-সাইড স্ক্রিপ্টিং এর সুবিধা প্রদান করে।",
                },
                {
                    title: "Features of Node.js : ",
                    description: "Node.js এর কিছু গুরুত্বপূর্ণ ফিচারগুলো হল -",
                    minTitle: [
                        {
                            title: "Asynchronous and Event-Driven",
                            description: "Node.js asynchronous অর্থাৎ non-blocking I/O operations সাপোর্ট করে, যা performance enhance করে।"
                        },
                        {
                            title: "Single-Threaded",
                            description: "Node.js single-threaded হলেও, এটি concurrent requests handle করতে পারে event loop এর মাধ্যমে।"
                        },
                        {
                            title: "Scalability",
                            description: "Node.js applications খুব সহজেই horizontal scaling করা যায়।"
                        },
                        {
                            title: "Cross-Platform",
                            description: "Node.js Windows, Linux, এবং macOS সহ বিভিন্ন platform এ চলতে পারে।"
                        },
                    ]
                },
                {
                    title: "Setting Up Node.js : ",
                    description: "Node.js সেট আপ করতে প্রথমে official Node.js website থেকে installer ডাউনলোড করতে হবে। ইনস্টলেশনের পরে, terminal এ node -v এবং npm -v কমান্ড ব্যবহার করে node এবং npm এর version চেক করতে পারবেন।"
                },
                {
                    title: "Creating a Basic Node.js Server : ",
                    description: "নিচের কোডটি একটি basic Node.js server তৈরি করে যা HTTP request handle করে:",
                    code: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello, World!');\n});\n\nserver.listen(3000, () => {\n    console.log('Server running at http://localhost:3000/');\n});",
                    descriptionCode : " codeExplanation : \"এই কোডটি একটি HTTP server তৈরি করে যা port 3000 এ listen করে এবং 'Hello, World!' মেসেজ রেসপন্স হিসেবে পাঠায়।\"",
                },
                {
                    title: "Conclusion : ",
                    description: "Node.js একটি powerful tool server-side applications ডেভেলপমেন্ট এর জন্য। এর asynchronous এবং event-driven architecture এর কারণে এটি high performance এবং scalable applications তৈরি করতে সহায়ক।"
                }
            ],
        },
        {
            id: 1,
            value: "Modules",
            link: "/modules",
            lecture: [
                {
                    title: "Node.js Modules : ",
                    description: "Node.js এ অনেক বিল্ট-ইন মডিউল রয়েছে যা আপনার অ্যাপ্লিকেশনের বিভিন্ন কাজ সম্পাদনে সাহায্য করে। নিচে কিছু গুরুত্বপূর্ণ মডিউল এবং তাদের ব্যবহারের উদাহরণ দেওয়া হলো:",
                    minTitle: [
                        {
                            title: "fs (File System)",
                            description: "এই মডিউলটি ফাইল এবং ডিরেক্টরি পরিচালনা করতে ব্যবহৃত হয়।",
                            code: "const fs = require('fs');\nfs.readFile('example.txt', 'utf8', (err, data) => {\n    if (err) throw err;\n    console.log(data);\n});"
                        },
                        {
                            title: "http",
                            description: "এই মডিউলটি HTTP সার্ভার তৈরি করতে ব্যবহৃত হয়।",
                            code: "const http = require('http');\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello World');\n});\nserver.listen(3000, '127.0.0.1', () => {\n    console.log('Server running at http://127.0.0.1:3000/');\n});"
                        },
                        {
                            title: "path",
                            description: "ফাইল এবং ডিরেক্টরির path পরিচালনা করার জন্য এই মডিউলটি ব্যবহৃত হয়।",
                            code: "const path = require('path');\nconst filePath = path.join('/home/user', 'docs', 'file.txt');\nconsole.log(filePath);"
                        },
                        {
                            title: "os",
                            description: "সিস্টেমের তথ্য পেতে এই মডিউলটি ব্যবহৃত হয়।",
                            code: "const os = require('os');\nconsole.log('OS platform:', os.platform());\nconsole.log('OS release:', os.release());"
                        },
                        {
                            title: "url",
                            description: "URL এর অংশগুলো পার্স করতে এই মডিউলটি ব্যবহৃত হয়।",
                            code: "const url = require('url');\nconst myURL = new URL('https://example.com/path?name=abc');\nconsole.log(myURL.hostname);"
                        },
                        {
                            title: "events",
                            description: "ইভেন্ট ইমিটার তৈরি করতে এই মডিউলটি ব্যবহৃত হয়।",
                            code: "const EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\nmyEmitter.on('event', () => {\n    console.log('An event occurred!');\n});\nmyEmitter.emit('event');"
                        },
                        {
                            title: "formidable",
                            description: "এই মডিউলটি ফাইল আপলোড এবং ফর্ম ডাটা পার্স করতে ব্যবহৃত হয়।",
                            code: "const formidable = require('formidable');\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {\n        const form = new formidable.IncomingForm();\n        form.parse(req, (err, fields, files) => {\n            res.writeHead(200, {'Content-Type': 'text/plain'});\n            res.write('File uploaded successfully');\n            res.end();\n        });\n    }\n});\nserver.listen(8080);"
                        },
                        {
                            title: "crypto",
                            description: "এই মডিউলটি ক্রিপ্টোগ্রাফি সংক্রান্ত কাজ যেমন ডেটা এনক্রিপশন এবং ডিক্রিপশন করতে ব্যবহৃত হয়।",
                            code: "const crypto = require('crypto');\nconst secret = 'mySecret';\nconst hash = crypto.createHmac('sha256', secret)\n    .update('Hello World')\n    .digest('hex');\nconsole.log(hash);"
                        },
                        {
                            title: "util",
                            description: "এই মডিউলটি বিভিন্ন ইউটিলিটি ফাংশন প্রদান করে, যেমন callback-based ফাংশনকে promise-based ফাংশনে রূপান্তর করা।",
                            code: "const util = require('util');\nconst fs = require('fs');\nconst readFile = util.promisify(fs.readFile);\nreadFile('example.txt', 'utf8').then(data => {\n    console.log(data);\n}).catch(err => {\n    console.error(err);\n});"
                        }
                    ]
                }
            ],
        },
        {
            id: 0,
            value: "Email",
            link: "/eamil",
            lecture: [
                {
                    title: "Email Concept : ",
                    description: "Email communication হলো একটি গুরুত্বপূর্ণ অংশ যে কোন modern web application এর। Node.js এ email পাঠানোর জন্য অনেক module রয়েছে। এর মধ্যে অন্যতম জনপ্রিয় হলো Nodemailer, যেটি ব্যবহার করে আপনি SMTP protocol এর মাধ্যমে email পাঠাতে পারেন।",
                    minTitle: [
                        {
                            title: "Nodemailer Setup",
                            description: "Nodemailer setup করার জন্য প্রথমে module টি install করতে হবে:\nnpm install nodemailer"
                        },
                        {
                            title: "Basic Usage Example",
                            description: "নিচে একটি basic Nodemailer setup এর example দেওয়া হলো:",
                            code: "const nodemailer = require('nodemailer');\n\nlet transporter = nodemailer.createTransport({\n    service: 'gmail',\n    auth: {\n        user: 'your-email@gmail.com',\n        pass: 'your-password'\n    }\n});\n\nlet mailOptions = {\n    from: 'your-email@gmail.com',\n    to: 'recipient-email@gmail.com',\n    subject: 'Test Email',\n    text: 'This is a test email sent from Node.js!'\n};\n\ntransporter.sendMail(mailOptions, function(error, info){\n    if (error) {\n        console.log(error);\n    } else {\n        console.log('Email sent: ' + info.response);\n    }\n});"
                        },
                        {
                            title: "Sending HTML Emails",
                            description: "Nodemailer ব্যবহার করে আপনি HTML content সহ ইমেলও পাঠাতে পারেন:",
                            code: "let mailOptions = {\n    from: 'your-email@gmail.com',\n    to: 'recipient-email@gmail.com',\n    subject: 'Test Email',\n    html: '<h1>This is a test email sent from Node.js!</h1>'\n};"
                        },
                        {
                            title: "Attachments",
                            description: "Nodemailer ব্যবহার করে ইমেলের সাথে file attachments ও পাঠানো যায়:",
                            code: "let mailOptions = {\n    from: 'your-email@gmail.com',\n    to: 'recipient-email@gmail.com',\n    subject: 'Test Email with Attachment',\n    text: 'Please find the attachment below.',\n    attachments: [\n        {   \n            filename: 'text1.txt',\n            path: './text1.txt'\n        }\n    ]\n};"
                        },
                        {
                            title: "Security Considerations",
                            description: "SMTP server এর credentials এবং sensitive information গুলো environment variables এর মধ্যে রাখতে হবে। যেমন:",
                            code: "const nodemailer = require('nodemailer');\n\nlet transporter = nodemailer.createTransport({\n    service: 'gmail',\n    auth: {\n        user: process.env.EMAIL_USER,\n        pass: process.env.EMAIL_PASS\n    }\n});"
                        }
                    ]
                }

            ]
        },
    ],

    sequelize: [
        {
            id: 0,
            value: "Basic",
            link: "/basic",
            lecture: [
                {
                    title: "Introduction to Sequelize : ",
                    description: "Sequelize হল একটি promise-based ORM (Object-Relational Mapping) library যা Node.js এর সাথে ব্যবহৃত হয়। এটি বিভিন্ন SQL databases যেমন PostgreSQL, MySQL, MariaDB, SQLite, এবং Microsoft SQL Server এর সাথে কাজ করতে সাহায্য করে।",
                    minTitle: [
                        {
                            title: "Setting Up Sequelize",
                            description: "Sequelize এবং একটি SQL database এর সাথে যোগাযোগ করার জন্য প্রথমে Sequelize package এবং database driver install করতে হবে:",
                            code: "npm install sequelize sequelize-cli\nnpm install pg pg-hstore        // PostgreSQL এর জন্য\nnpm install mysql2             // MySQL এর জন্য\nnpm install sqlite3            // SQLite এর জন্য\nnpm install tedious            // Microsoft SQL Server এর জন্য"
                        },
                        {
                            title: "Basic Configuration",
                            description: "Sequelize সেটআপ করার জন্য একটি configuration file তৈরি করতে হবে। নিচে একটি basic configuration example দেওয়া হলো:",
                            code: "const { Sequelize } = require('sequelize');\n\n// PostgreSQL database connection example\nconst sequelize = new Sequelize('database_name', 'username', 'password', {\n    host: 'localhost',\n    dialect: 'postgres',\n});\n\n(async () => {\n    try {\n        await sequelize.authenticate();\n        console.log('Connection has been established successfully.');\n    } catch (error) {\n        console.error('Unable to connect to the database:', error);\n    }\n})();"
                        },
                        {
                            title: "Defining Models",
                            description: "Sequelize এ models define করতে হবে। Models represent database tables। নিচে একটি basic model example দেওয়া হলো:",
                            code: "const { DataTypes } = require('sequelize');\nconst sequelize = require('./path_to_your_sequelize_instance');\n\n// User model example\nconst User = sequelize.define('User', {\n    name: {\n        type: DataTypes.STRING,\n        allowNull: false\n    },\n    email: {\n        type: DataTypes.STRING,\n        allowNull: false,\n        unique: true\n    }\n});\n\n// Sync model with the database\n(async () => {\n    await sequelize.sync({ force: true });\n    console.log(\"The table for the User model was just created!\");\n})();"
                        },
                    ]
                },
                {
                    title: "Basic CRUD Operations",
                    description: "নিচে CRUD operations এর basic examples দেওয়া হলো:",
                    minTitle: [
                        {
                            title: "Create",
                            code: "(async () => {\n    await User.create({\n        name: 'John Doe',\n        email: 'john.doe@example.com'\n    });\n})();"
                        },
                        {
                            title: "Read",
                            code: "(async () => {\n    const users = await User.findAll();\n    console.log(users);\n})();"
                        },
                        {
                            title: "Update",
                            code: "(async () => {\n    await User.update({ name: 'Jane Doe' }, {\n        where: {\n            email: 'john.doe@example.com'\n        }\n    });\n})();"
                        },
                        {
                            title: "Delete",
                            code: "(async () => {\n    await User.destroy({\n        where: {\n            email: 'john.doe@example.com'\n        }\n    });\n})();"
                        }
                    ]
                },
                {
                    title: "Conclusion",
                    description: "Sequelize একটি powerful ORM যা SQL databases এর সাথে interaction কে সহজ এবং flexible করে তোলে। এটি complex queries এর সাথে কাজ করতে এবং data management করতে সাহায্য করে।"
                }
            ],
        },
        {
            id: 1,
            value: "Sync",
            link: "/sync",
            lecture: [
                {
                    title: "Sequelize `sync` Method : ",
                    description: "Sequelize-এর `sync` মেথড ব্যবহৃত হয় মডেলগুলির পরিবর্তন ডাটাবেসে আপডেট করতে। এখানে দুইটি প্রধান অপশন থাকে: `force` এবং `alter`।",
                    minTitle: [
                        {
                            title: "sync({ force: true })",
                            description: "force: true ব্যবহার করলে, Sequelize ডাটাবেসের টেবিলগুলোকে সম্পূর্ণভাবে পুনর্গঠিত করবে। এর মানে, বর্তমান টেবিলগুলো মুছে ফেলবে এবং পুনরায় তৈরি করবে।",
                            code: "sequelize.sync({ force: true })\n    .then(() => {\n        console.log('Database & tables created!');\n    });"
                        },
                        {
                            title: "sync({ alter: true })",
                            description: "alter: true ব্যবহার করলে, Sequelize বিদ্যমান টেবিলগুলির স্ট্রাকচারকে আপডেট করবে, কিন্তু টেবিলগুলির মধ্যে বিদ্যমান ডেটা রক্ষা করবে। এটি টেবিলের স্কিমা পরিবর্তন করে, যেমন নতুন কলাম যোগ করা বা কলামের ধরন পরিবর্তন করা, তবে ডেটা মুছে ফেলবে না।",
                            code: "sequelize.sync({ alter: true })\n    .then(() => {\n        console.log('Database & tables updated!');\n    });"
                        }
                    ]
                },
                {
                    title: "Summary",
                    description: " `force: true` : সমস্ত টেবিল মুছে ফেলবে এবং পুনরায় তৈরি করবে, তাই সকল বিদ্যমান ডেটা মুছে যাবে। `alter: true`  টেবিলগুলির স্কিমা আপডেট করবে, ডেটা রক্ষা করবে।"
                }
            ],
        },
        {
            id: 2,
            value: "Association",
            link: "/association",
            lecture: [
                {
                    title: "Introduction to Sequelize Associations : ",
                    description: "Sequelize Association বলতে বোঝায় বিভিন্ন মডেলের (তথা টেবিলের) মধ্যে সম্পর্ক স্থাপন। এই সম্পর্কগুলি ডাটাবেসে বিভিন্ন ধরনের রেকর্ডের মধ্যে সম্পর্ক পরিচালনার জন্য ব্যবহৃত হয়। Sequelize বিভিন্ন ধরনের।\n" +
                        "Sequelize বিভিন্ন ধরনের অ্যাসোসিয়েশন সাপোর্ট করে, যা বিভিন্ন টেবিলের মধ্যে সম্পর্ক স্থাপন করতে সাহায্য করে। এখানে প্রধান ধরনের অ্যাসোসিয়েশন গুলি দেওয়া হলো \n" +
                        "এই উদাহরণে, প্রতিটি `User` এর একটি `Profile` থাকবে, এবং প্রতিটি `Profile` এক `User` এর সাথে সম্পর্কিত।\n",
                    minTitle:[
                        {
                            title:"One-to-One Association ",
                            description: "One-to-One অ্যাসোসিয়েশন মানে এক মডেলের একটি রেকর্ড অন্য মডেলের একটি রেকর্ডের সাথে সম্পর্কিত।",
                            code:"const { Sequelize, DataTypes } = require('sequelize');\n" +
                                "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                                "  host: 'localhost',\n" +
                                "  dialect: 'mysql'\n" +
                                "});\n" +
                                "\n" +
                                "// Define User model\n" +
                                "const User = sequelize.define('User', {\n" +
                                "  name: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Define Profile model\n" +
                                "const Profile = sequelize.define('Profile', {\n" +
                                "  bio: {\n" +
                                "    type: DataTypes.TEXT\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// One-to-One Association\n" +
                                "User.hasOne(Profile);\n" +
                                "Profile.belongsTo(User);\n" +
                                "\n" +
                                "// Synchronize models\n" +
                                "sequelize.sync({ force: true });"
                        },
                        {
                            title: " One-to-Many Association ",
                            description: "One-to-Many অ্যাসোসিয়েশন মানে এক মডেলের একটি রেকর্ড একাধিক রেকর্ডের সাথে সম্পর্কিত। \n" +
                                "এখানে, এক `User` অনেকগুলো `Post` তৈরি করতে পারে, এবং প্রতিটি `Post` এক `User` এর সাথে সম্পর্কিত।\n",
                            code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                                "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                                "  host: 'localhost',\n" +
                                "  dialect: 'mysql'\n" +
                                "});\n" +
                                "\n" +
                                "// Define User model\n" +
                                "const User = sequelize.define('User', {\n" +
                                "  name: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Define Post model\n" +
                                "const Post = sequelize.define('Post', {\n" +
                                "  title: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  },\n" +
                                "  content: {\n" +
                                "    type: DataTypes.TEXT\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// One-to-Many Association\n" +
                                "User.hasMany(Post);\n" +
                                "Post.belongsTo(User);\n" +
                                "\n" +
                                "// Synchronize models\n" +
                                "sequelize.sync({ force: true });"
                        },
                        {
                            title: " Many-to-Many Association(N:N) ",
                            description: "Many-to-Many অ্যাসোসিয়েশন মানে একাধিক রেকর্ড এক মডেলে একাধিক রেকর্ডের সাথে সম্পর্কিত। \n" +
                                "এই উদাহরণে, অনেক `Student` অনেকগুলো `Course` এ ভর্তি হতে পারে এবং প্রতিটি `Course` এ অনেক `Student` থাকতে পারে। `StudentCourses` টেবিলটি এই many-to-many সম্পর্ক পরিচালনা করে।",
                            code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                                "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                                "  host: 'localhost',\n" +
                                "  dialect: 'mysql'\n" +
                                "});\n" +
                                "\n" +
                                "// Define Student model\n" +
                                "const Student = sequelize.define('Student', {\n" +
                                "  name: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Define Course model\n" +
                                "const Course = sequelize.define('Course', {\n" +
                                "  title: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Many-to-Many Association\n" +
                                "Student.belongsToMany(Course, { through: 'StudentCourses' });\n" +
                                "Course.belongsToMany(Student, { through: 'StudentCourses' });\n" +
                                "\n" +
                                "// Synchronize models\n" +
                                "sequelize.sync({ force: true });\n"
                        },
                        {
                            title: "Multiple Associations ",
                            description: "Sequelize একাধিক ধরনের অ্যাসোসিয়েশন একসাথে ব্যবহার করতে দেয়। এটি আরও জটিল পরিস্থিতিতে উপকারী। \n" +
                                "এখানে, `Author` এর অনেকগুলো `Books` থাকতে পারে, এবং `Publisher` এর অনেকগুলো `Books` থাকতে পারে many-to-many সম্পর্কের মাধ্যমে। `PublisherBooks` টেবিলটি এই many-to-many সম্পর্ক পরিচালনা করে।",
                            code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                                "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                                "  host: 'localhost',\n" +
                                "  dialect: 'mysql'\n" +
                                "});\n" +
                                "\n" +
                                "// Define Author model\n" +
                                "const Author = sequelize.define('Author', {\n" +
                                "  name: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Define Book model\n" +
                                "const Book = sequelize.define('Book', {\n" +
                                "  title: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Define Publisher model\n" +
                                "const Publisher = sequelize.define('Publisher', {\n" +
                                "  name: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Associations\n" +
                                "Author.hasMany(Book); // One-to-Many\n" +
                                "Book.belongsTo(Author); // One-to-Many\n" +
                                "\n" +
                                "Publisher.belongsToMany(Book, { through: 'PublisherBooks' }); // Many-to-Many\n" +
                                "Book.belongsToMany(Publisher, { through: 'PublisherBooks' }); // Many-to-Many\n" +
                                "\n" +
                                "// Synchronize models\n" +
                                "sequelize.sync({ force: true });"
                        }
                    ]
                }
            ],
        },
        {
            id: 3,
            value: "Eager",
            link: "/eager",
            lecture: [
                {
                    title: "Introduction to Eager Loading : ",
                    description: "Eager Loading হল একটি প্রযুক্তি যা আপনাকে আপনার ডাটাবেসের সাথে সম্পর্কিত অন্যান্য টেবিলের ডেটা একসাথে লোড করতে দেয়। Sequelize-এ, এটি আপনাকে নেভিগেট এবং সম্পর্কিত ডেটা সহ মূল ডেটা একসাথে নিয়ে আসতে সাহায্য করে।",
                },
                {
                    title: "Why Use Eager Loading? : ",
                    description: "Eager Loading ব্যবহার করার মাধ্যমে, আপনি একাধিক ডেটাবেস কল করতে বাধ্য হওয়া এড়াতে পারেন, যা পারফরম্যান্স উন্নত করতে সহায়ক। এটি একবারে সম্পর্কিত ডেটা লোড করতে সাহায্য করে, যা আপনার অ্যাপ্লিকেশনের লোডিং সময় কমায়।",
                },
                {
                    title: "Example of Eager Loading in Sequelize : ",
                    description: "ধরুন, আপনার একটি `User` মডেল এবং একটি `Post` মডেল আছে, যেখানে এক `User` এর একাধিক `Post` থাকতে পারে। Eager Loading ব্যবহার করে আপনি একটি `User` এর সাথে সম্পর্কিত সমস্ত `Post` একসাথে লোড করতে পারেন।",
                    code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                        "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                        "  host: 'localhost',\n" +
                        "  dialect: 'mysql'\n" +
                        "});\n" +
                        "\n" +
                        "// Define User model\n" +
                        "const User = sequelize.define('User', {\n" +
                        "  name: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Post model\n" +
                        "const Post = sequelize.define('Post', {\n" +
                        "  title: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  },\n" +
                        "  content: {\n" +
                        "    type: DataTypes.TEXT\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define One-to-Many Association\n" +
                        "User.hasMany(Post);\n" +
                        "Post.belongsTo(User);\n" +
                        "\n" +
                        "// Eager Loading Example\n" +
                        "User.findAll({\n" +
                        "  include: Post // This will eager load all posts related to each user\n" +
                        "}).then(users => {\n" +
                        "  console.log(JSON.stringify(users, null, 2));\n" +
                        "});"
                },
                {
                    description: "এই কোডটি একটি `User` মডেল থেকে সমস্ত ব্যবহারকারী এবং তাদের সংশ্লিষ্ট `Post` গুলি একসাথে লোড করে। `include` অপশনটি Eager Loading সক্ষম করে এবং সম্পর্কিত ডেটা একসাথে রিটার্ন করে।"
                },
                {
                    title: "Summary : ",
                    description: "Eager Loading এটি সম্পর্কিত ডেটা একসাথে লোড করার একটি পদ্ধতি যা ডাটাবেস কল সংখ্যা কমায় এবং পারফরম্যান্স উন্নত করতে সাহায্য করে।"
                },
            ],
        },
        {
            id: 4,
            value: "Association Scope",
            link: "/associationScope",
            lecture: [
                {
                    title: "Introduction to Association Scopes : ",
                    description: "Sequelize associations allow you to define relationships between models, such as one-to-one, one-to-many, and many-to-many. Scopes in Sequelize help to define and manage query constraints based on these associations.",
                },
                {
                    minTitle:[
                        {
                            title: "Scope with One-to-One Association ",
                            description: "In a one-to-one association, you might want to scope your queries to include or exclude related records. Scopes can help manage this efficiently.",
                            code:"const { Sequelize, DataTypes } = require('sequelize');\n" +
                                "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                                "  host: 'localhost',\n" +
                                "  dialect: 'mysql'\n" +
                                "});\n" +
                                "\n" +
                                "// Define User model\n" +
                                "const User = sequelize.define('User', {\n" +
                                "  name: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Define Profile model\n" +
                                "const Profile = sequelize.define('Profile', {\n" +
                                "  bio: {\n" +
                                "    type: DataTypes.TEXT\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// One-to-One Association\n" +
                                "User.hasOne(Profile);\n" +
                                "Profile.belongsTo(User);\n" +
                                "\n" +
                                "// Scoping to include associated Profile\n" +
                                "User.scope('withProfile', {\n" +
                                "  include: [{ model: Profile }]\n" +
                                "});\n" +
                                "\n" +
                                "// Synchronize models\n" +
                                "sequelize.sync({ force: true }).then(() => {\n" +
                                "  console.log('Database & tables created!');\n" +
                                "});",
                            descriptionCode: "এখানে `User` মডেলের জন্য একটি scope `withProfile` তৈরি করা হয়েছে যা `Profile` মডেলকে অন্তর্ভুক্ত করে। এটি `User` মডেলের সঙ্গে সম্পর্কিত `Profile` ডেটা সহ কুয়েরি করতে সাহায্য করবে।",
                        },
                        {
                            title: "Scope with One-to-Many Association ",
                            description: "In a one-to-many association, you might want to scope queries to only include records that have a certain number of related records.",
                            code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                                "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                                "  host: 'localhost',\n" +
                                "  dialect: 'mysql'\n" +
                                "});\n" +
                                "\n" +
                                "// Define User model\n" +
                                "const User = sequelize.define('User', {\n" +
                                "  name: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Define Post model\n" +
                                "const Post = sequelize.define('Post', {\n" +
                                "  title: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// One-to-Many Association\n" +
                                "User.hasMany(Post);\n" +
                                "Post.belongsTo(User);\n" +
                                "\n" +
                                "// Scoping to include only users with at least one post\n" +
                                "User.scope('withPosts', {\n" +
                                "  include: [{ model: Post }]\n" +
                                "});\n" +
                                "\n" +
                                "// Synchronize models\n" +
                                "sequelize.sync({ force: true }).then(() => {\n" +
                                "  console.log('Database & tables created!');\n" +
                                "});",
                            descriptionCode: "এখানে `User` মডেলের জন্য `withPosts` নামে একটি scope তৈরি করা হয়েছে যা `Post` মডেলকে অন্তর্ভুক্ত করে। এটি কুয়েরি করার সময় শুধুমাত্র সেই `User` রেকর্ডগুলো অন্তর্ভুক্ত করবে যাদের এক বা একাধিক `Post` আছে।"
                        },
                        {
                            title: "Scope with Many-to-Many Association ",
                            description: "In a many-to-many association, you might want to scope queries to include records that are associated through a junction table.",
                            code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                                "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                                "  host: 'localhost',\n" +
                                "  dialect: 'mysql'\n" +
                                "});\n" +
                                "\n" +
                                "// Define Student model\n" +
                                "const Student = sequelize.define('Student', {\n" +
                                "  name: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Define Course model\n" +
                                "const Course = sequelize.define('Course', {\n" +
                                "  title: {\n" +
                                "    type: DataTypes.STRING,\n" +
                                "    allowNull: false\n" +
                                "  }\n" +
                                "});\n" +
                                "\n" +
                                "// Many-to-Many Association\n" +
                                "Student.belongsToMany(Course, { through: 'StudentCourses' });\n" +
                                "Course.belongsToMany(Student, { through: 'StudentCourses' });\n" +
                                "\n" +
                                "// Scoping to include courses for a specific student\n" +
                                "Student.scope('withCourses', {\n" +
                                "  include: [{ model: Course, through: { attributes: [] } }]\n" +
                                "});\n" +
                                "\n" +
                                "// Synchronize models\n" +
                                "sequelize.sync({ force: true }).then(() => {\n" +
                                "  console.log('Database & tables created!');\n" +
                                "});",
                            descriptionCode: "এখানে `Student` মডেলের জন্য `withCourses` নামে একটি scope তৈরি করা হয়েছে যা `Course` মডেলকে অন্তর্ভুক্ত করে। এই scope টি `Student` মডেলের সাথে সম্পর্কিত `Course` গুলোর তথ্যও প্রদান করবে।",
                        },
                    ],
                },
                {
                    title: "Summary : ",
                    description: "Association Scopes Scopes in Sequelize help manage and filter queries based on associations between models. You can use scopes to include associated records or filter results based on related data."
                }
            ],
        },
        {
            id: 5,
            value: "Polymorphic Associations",
            link: "/polymorphicAssociations",
            lecture: [
                {
                    title: "Polymorphic Associations : ",
                    description: "Polymorphic associations একটি মডেলকে একাধিক অন্যান্য মডেলের সাথে একক অ্যাসোসিয়েশনের মাধ্যমে যুক্ত করার সুযোগ দেয়। এটি বিশেষভাবে উপকারী যখন আপনি বিভিন্ন মডেলের মধ্যে নমনীয় সম্পর্ক তৈরি করতে চান, কিন্তু একাধিক অ্যাসোসিয়েশন সংজ্ঞায়িত করার প্রয়োজন হয় না।"
                },
                {
                    title: "Example of Polymorphic Associations : ",
                    description: "ধরুন আপনার কাছে একটি `Comment` মডেল আছে যা বিভিন্ন মডেলের সাথে সম্পর্কিত হতে পারে, যেমন `Post` এবং `Photo`। আলাদা আলাদা অ্যাসোসিয়েশন তৈরি করার পরিবর্তে, polymorphic associations ব্যবহার করে এটি পরিচালনা করা যায়।",
                    code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                        "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                        "  host: 'localhost',\n" +
                        "  dialect: 'mysql'\n" +
                        "});\n" +
                        "\n" +
                        "// Define Post model\n" +
                        "const Post = sequelize.define('Post', {\n" +
                        "  title: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Photo model\n" +
                        "const Photo = sequelize.define('Photo', {\n" +
                        "  url: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Comment model\n" +
                        "const Comment = sequelize.define('Comment', {\n" +
                        "  content: {\n" +
                        "    type: DataTypes.TEXT,\n" +
                        "    allowNull: false\n" +
                        "  },\n" +
                        "  commentableType: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  },\n" +
                        "  commentableId: {\n" +
                        "    type: DataTypes.INTEGER,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Polymorphic Associations\n" +
                        "Post.hasMany(Comment, { foreignKey: 'commentableId', constraints: false });\n" +
                        "Photo.hasMany(Comment, { foreignKey: 'commentableId', constraints: false });\n" +
                        "Comment.belongsTo(Post, { foreignKey: 'commentableId', constraints: false, scope: { commentableType: 'Post' } });\n" +
                        "Comment.belongsTo(Photo, { foreignKey: 'commentableId', constraints: false, scope: { commentableType: 'Photo' } });\n" +
                        "\n" +
                        "// Synchronize models\n" +
                        "sequelize.sync({ force: true }).then(() => {\n" +
                        "  console.log('Database & tables created!');\n" +
                        "});",
                },
                {
                    description: "এই উদাহরণে : ",
                    minTitle:[
                        {description: "Post এবং Photo মডেলগুলির অনেকগুলি Comment রেকর্ড থাকতে পারে।"},
                        {description: "Comment মডেলে `commentableType` এবং `commentableId` ফিল্ড রয়েছে যা সম্পর্কিত মডেলের টাইপ এবং ID সংরক্ষণ করে।"},
                        {description: "Comment.belongsTo(Post) এবং Comment.belongsTo(Photo) polymorphic association সংজ্ঞায়িত করে যেখানে `scope` নির্দেশ করে কোন মডেলটির সাথে কমেন্ট যুক্ত হবে।"},
                    ]
                },
                {
                    title: "ব্যবহার : ",
                    description: "Polymorphic associations বিশেষভাবে উপকারী যখন আপনি একটি মডেল (যেমন `Comment`) কে একাধিক অন্যান্য মডেলের (যেমন `Post`, `Photo`) সাথে সম্পর্কিত করতে চান, একাধিক অ্যাসোসিয়েশন তৈরি না করেই।"
                },
                {
                    title: "Polymorphic Associations কোয়েরি করা : ",
                    description: "Polymorphic associations কোয়েরি করার জন্য, আপনাকে আপনার কোয়েরিতে সম্পর্কিত মডেলের টাইপ নির্ধারণ করতে হবে। উদাহরণস্বরূপ, একটি `Post` সম্পর্কিত কমেন্টগুলি খুঁজতে হলে, `commentableType` এবং `commentableId` দ্বারা ফিল্টার করতে হবে।\n",
                    code: "Comment.findAll({\n" +
                        "  where: {\n" +
                        "    commentableType: 'Post',\n" +
                        "    commentableId: 1\n" +
                        "  }\n" +
                        "}).then(comments => {\n" +
                        "  console.log(comments);\n" +
                        "});",
                    descriptionCode:"এই কোয়েরিটি সব কমেন্ট ফিরিয়ে আনে যা `Post` মডেলের সাথে সম্পর্কিত এবং `commentableId` হল `1`।"
                }
            ],
        },
    ],

    cpp: [
        {
            id: 0,
            value: "Basic",
            link: "/basic",
            lecture: [
                {
                    title:"Introduction to C++ : ",
                    description:"C++ একটি Powerful এবং Versatile প্রোগ্রামিং Language, যা Bjarne Stroustrup দ্বারা C ভাষার একটি এক্সটেনশন হিসেবে তৈরি করা হয়েছে। এটি procedural এবং object-oriented programming উভয়কেই সমর্থন করে, যা software development, game development এবং system/application software এর ক্ষেত্রে বহুল ব্যবহৃত হয়।",
                },
                {
                    title: "Basic Syntax ",
                    minTitle:[
                        {
                            title: "Print Hello, World!",
                            code:"#include <iostream>\n" +
                                "using namespace std;\n" +
                                "\n" +
                                "int main() {\n" +
                                "    cout << \"Hello, World!\"; // Prints Hello, World! to the console\n" +
                                "    return 0;\n" +
                                "}",
                            descriptionCode:"উপরের উদাহরণে, #include iostream একটি প্রি-প্রসেসর ডিরেক্টিভ, যা standard input-output stream লাইব্রেরি ইনক্লুড করে। main() ফাংশনটি প্রতিটি C++ প্রোগ্রামের এন্ট্রিপয়েন্ট। cout ব্যবহার করে কনসোলে ডেটা আউটপুট করা হয় এবং // ব্যবহার করে সিঙ্গেল-লাইন কমেন্ট তৈরি করা হয়।",
                        },
                        {
                            title: "Comments in C++",
                            code: "// This is a single-line comment\n" +
                                "/* This is a \n" +
                                "   multi-line comment */",
                            descriptionCode: "C++ প্রোগ্রামে, // দিয়ে সিঙ্গেল-লাইন কমেন্ট এবং /* ... */ দিয়ে মাল্টি-লাইন কমেন্ট তৈরি করা হয়। কমেন্টগুলি কোডের মধ্যে নোট যোগ করতে এবং কোড ব্যাখ্যা করতে ব্যবহৃত হয়, যা প্রোগ্রামের কার্যকারিতা প্রভাবিত করে না।"
                        },
                        {
                            title: "Output in C++ ",
                            code: "#include <iostream>\n" +
                                "using namespace std;\n" +
                                "\n" +
                                "int main() {\n" +
                                "    cout << \"This is an output << endl;\n" +
                                "    return 0;\n" +
                                "}",
                            descriptionCode: "C++ এ, cout ব্যবহার করে আউটপুট প্রদর্শন করা হয়। উপরের উদাহরণে, cout এবং endl ব্যবহার করে স্ক্রিনে \"This is an output প্রদর্শিত হবে। endl একটি নিউ লাইন তৈরি করে।"
                        },
                        {
                            title: "Variables in C++ ",
                            code: "#include <iostream>\n" +
                                "using namespace std;\n" +
                                "\n" +
                                "int main() {\n" +
                                "    int myNumber = 10; // Integer variable\n" +
                                "    double myFloat = 5.99; // Floating-point variable\n" +
                                "    char myLetter = 'A'; // Character variable\n" +
                                "\n" +
                                "    cout << \"Integer: \" << myNumber << endl;\n" +
                                "    cout << \"Floating-point: \" << myFloat << endl;\n" +
                                "    cout << \"Character: \" << myLetter << endl;\n" +
                                "\n" +
                                "    return 0;\n" +
                                "}",
                            descriptionCode: "C++ এ, ভেরিয়েবলগুলি বিভিন্ন ধরনের ডেটা সংরক্ষণ করতে ব্যবহৃত হয়। উদাহরণস্বরূপ, int একটি পূর্ণসংখ্যা সংরক্ষণ করে, double দশমিক সংখ্যা সংরক্ষণ করে এবং char একটি অক্ষর সংরক্ষণ করে। উপরের উদাহরণে, myNumber, myFloat, এবং myLetter যথাক্রমে একটি পূর্ণসংখ্যা, দশমিক সংখ্যা, এবং একটি অক্ষর সংরক্ষণ করে এবং cout ব্যবহার করে এগুলি কনসোলে প্রদর্শিত হয়।"
                        },
                        {
                            title: "User Input ",
                            code: "#include <iostream>\n" +
                                "using namespace std;\n" +
                                "\n" +
                                "int main() {\n" +
                                "    string userName;\n" +
                                "    cout << \"Enter your name: \";\n" +
                                "    cin >> userName;\n" +
                                "    cout << \"Hello, \" << userName << \"!\" << endl;\n" +
                                "    return 0;\n" +
                                "}",
                            descriptionCode: "C++-এ user input নেওয়ার জন্য cin function ব্যবহার করা হয়। উপরের উদাহরণে, userName variable-এ user-এর নাম পড়া হয়েছে এবং cout এর মাধ্যমে স্বাগতম বার্তা প্রদর্শন করা হয়েছে।"
                        },
                    ],
                },
                {
                    title: "Introduction to C++ Data Types : ",
                    description: "C++-এ বিভিন্ন ধরনের ডেটা সংরক্ষণ করতে বিভিন্ন প্রকারের ডেটা টাইপ ব্যবহৃত হয়। প্রতিটি ডেটা টাইপ নির্দিষ্ট ধরনের ডেটা সংরক্ষণ করতে সাহায্য করে এবং তাদের নিজস্ব বৈশিষ্ট্য থাকে।",
                    minTitle: [
                        {
                            title: "Integer",
                            code: "int age = 25;",
                            descriptionCode: "int ডেটা টাইপ পূর্ণসংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়। যেমন, age ভেরিয়েবল একটি পূর্ণসংখ্যা 25 সংরক্ষণ করছে।"
                        },
                        {
                            title: "Float",
                            code: "float height = 5.9;",
                            descriptionCode: "float ডেটা টাইপ দশমিক সংখ্যা সংরক্ষণ করে। উদাহরণস্বরূপ, height ভেরিয়েবল 5.9 একটি floating-point সংখ্যা সংরক্ষণ করছে।"
                        },
                        {
                            title: "Double",
                            code: "double pi = 3.14159;",
                            descriptionCode: "double ডেটা টাইপ আরও বেশি দশমিক সংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়। এটি float থেকে বেশি precision প্রদান করে। উদাহরণস্বরূপ, pi ভেরিয়েবল 3.14159 একটি double precision সংখ্যা সংরক্ষণ করছে।"
                        },
                        {
                            title: "Char",
                            code: "char grade = 'A';",
                            descriptionCode: "char ডেটা টাইপ একক অক্ষর সংরক্ষণ করতে ব্যবহৃত হয়। যেমন, grade ভেরিয়েবল 'A' একটি চরিত্র সংরক্ষণ করছে।"
                        },
                        {
                            title: "String",
                            code: "string name = 'Alice';",
                            descriptionCode: "string ডেটা টাইপ একটি বা একাধিক অক্ষরের একটি সিকোয়েন্স সংরক্ষণ করতে ব্যবহৃত হয়। উদাহরণস্বরূপ, name ভেরিয়েবল 'Alice' একটি string সংরক্ষণ করছে।"
                        },
                        {
                            title: "Boolean",
                            code: "bool isAdult = true;",
                            descriptionCode: "bool ডেটা টাইপ দুটি মান নিতে পারে: true অথবা false। যেমন, isAdult ভেরিয়েবল true মান সংরক্ষণ করছে।"
                        },
                        {
                            title: "Void",
                            code: "void display() { // Function does not return any value }",
                            descriptionCode: "void ডেটা টাইপ কোনও মান সংরক্ষণ করে না এবং এটি সাধারণত ফাংশনের রিটার্ন টাইপ হিসেবে ব্যবহৃত হয় যখন ফাংশন কোন মান রিটার্ন করে না।"
                        },
                        {
                            title: "Unsigned Types",
                            code: "unsigned int positiveNumber = 100;",
                            descriptionCode: "unsigned ডেটা টাইপ শুধুমাত্র ধনাত্মক সংখ্যা সংরক্ষণ করতে ব্যবহৃত হয় এবং int ডেটা টাইপের সাথে ব্যবহৃত হয় যা ঋণাত্মক সংখ্যা ধারণ করতে পারে।"
                        },
                        {
                            title: "Long",
                            code: "long largeNumber = 100000;",
                            descriptionCode: "long ডেটা টাইপ বড় আকারের পূর্ণসংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়। এটি int থেকে বড় পরিসরের সংখ্যা ধারণ করতে সক্ষম।"
                        },
                        {
                            title: "Long Long",
                            code: "long long veryLargeNumber = 10000000000;",
                            descriptionCode: "long long ডেটা টাইপ অত্যন্ত বড় পূর্ণসংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়, যা long থেকে বড় পরিসরের সংখ্যা ধারণ করতে পারে।"
                        }

                    ]
                },
                {
                    title: "Operators : ",
                    description: "Arithmetic Operators ",
                    code: "int sum = 5 + 3;  // Addition\n" +
                        "int diff = 5 - 3;  // Subtraction\n" +
                        "int prod = 5 * 3;  // Multiplication\n" +
                        "float quo = 5.0 / 3.0;  // Division",
                    descriptionCode: "Arithmetic operators ব্যবহার করে গাণিতিক কাজ করা হয়। উদাহরণস্বরূপ, + যোগের জন্য, - বিয়োগের জন্য, * গুণের জন্য, এবং / ভাগের জন্য ব্যবহৃত হয়।",
                },
                {
                    title: "Introduction to C++ Strings : ",
                    description: "C++-এ স্ট্রিং হ্যান্ডল করার জন্য প্রধানত তিনটি ধরনের স্ট্রিং ব্যবহৃত হয়: C স্টাইল স্ট্রিং, C++ স্ট্রিং, এবং স্ট্রিং লিটারেল। এই স্ট্রিং টাইপগুলি বিভিন্ন পরিস্থিতিতে ব্যবহৃত হয় এবং বিভিন্ন বৈশিষ্ট্য প্রদান করে।",
                    minTitle: [
                        {
                            title: "C-Style Strings",
                            code: "#include <iostream>\n\nint main() {\n    const char* cString = \"Hello, World!\";\n    std::cout << \"C-Style String: \" << cString << std::endl;\n    return 0;\n}",
                            descriptionCode: "C-Style স্ট্রিং হলো ক্যারেক্টার অ্যারে যা একটি null টার্মিনেটর ('\\0') দিয়ে শেষ হয়। উপরের উদাহরণে, cString একটি C-Style স্ট্রিং যা 'Hello, World!' ধারণ করে এবং এটি std::cout ব্যবহার করে আউটপুট করা হয়েছে।"
                        },
                        {
                            title: "C++ String Class",
                            code: "#include <iostream>\n#include <string>\n\nint main() {\n    std::string cppString = \"Hello, C++!\";\n    std::cout << \"C++ String: \" << cppString << std::endl;\n    return 0;\n}",
                            descriptionCode: "C++ স্ট্রিং ক্লাস std::string ব্যবহার করে স্ট্রিং হ্যান্ডল করা হয়। এটি একটি ডাইনামিক সাইজ স্ট্রিং যা বিভিন্ন ফাংশন প্রদান করে যেমন স্ট্রিং কনক্যাটেনেশন, সাবস্ট্রিং এক্সট্রাকশন, এবং আরো।"
                        },
                        {
                            title: "String Literals",
                            code: "#include <iostream>\n\nint main() {\n    std::cout << \"String Literal: \" << \"Hello, World!\" << std::endl;\n    return 0;\n}",
                            descriptionCode: "স্ট্রিং লিটারেল হল সোজা স্ট্রিং যা ডাবল কোটস (\"\") এর মধ্যে থাকে। এটি একটি কনস্ট্যান্ট স্ট্রিং যা কোডে সরাসরি ব্যবহার করা হয়।"
                        },
                    ]
                },
                {
                    title: "Basic String Operations",
                    code: "#include <iostream>\n#include <string>\n\nint main() {\n    std::string str1 = \"Hello\";\n    std::string str2 = \"World\";\n    \n    // Concatenation\n    std::string str3 = str1 + \" \" + str2;\n    \n    // Length\n    size_t length = str3.length();\n    \n    // Substring\n    std::string substr = str3.substr(6, 5);\n\n    std::cout << \"Concatenated String: \" << str3 << std::endl;\n    std::cout << \"Length: \" << length << std::endl;\n    std::cout << \"Substring: \" << substr << std::endl;\n\n    return 0;\n}",
                    descriptionCode: "C++ স্ট্রিং ক্লাসের মাধ্যমে বিভিন্ন মৌলিক অপারেশন সম্পাদন করা যায়। উদাহরণস্বরূপ, স্ট্রিং কনক্যাটেনেশন, স্ট্রিং লেন্থ নির্ধারণ, এবং সাবস্ট্রিং এক্সট্রাকশন করা হয়েছে।",
                    minTitle: [
                        {
                            title: "String Comparison",
                            code: "#include <iostream>\n#include <string>\n\nint main() {\n    std::string str1 = \"apple\";\n    std::string str2 = \"banana\";\n    \n    if (str1 < str2) {\n        std::cout << \"str1 is less than str2\" << std::endl;\n    } else {\n        std::cout << \"str1 is not less than str2\" << std::endl;\n    }\n\n    return 0;\n}",
                            descriptionCode: "C++ স্ট্রিং তুলনা অপারেটরগুলির সাহায্যে করা হয়, যেমন <, <=, >, এবং >=। উদাহরণস্বরূপ, str1 < str2 দ্বারা স্ট্রিং তুলনা করা হয়েছে।"
                        },
                        {
                            title: "String Iteration",
                            code: "#include <iostream>\n#include <string>\n\nint main() {\n    std::string str = \"Hello\";\n    \n    for (char c : str) {\n        std::cout << c << \" \";\n    }\n    std::cout << std::endl;\n\n    return 0;\n}",
                            descriptionCode: "স্ট্রিংয়ের প্রতিটি অক্ষর ইটারেট করতে রেঞ্জ-বেসড for লুপ ব্যবহার করা যেতে পারে।"
                        },
                    ]
                },
                {
                    title: "Introduction to C++ Math Functions : ",
                    description: "C++-এ গাণিতিক অপারেশন করার জন্য বিভিন্ন ফাংশন সরবরাহ করা হয় যা cmath হেডার ফাইলের অন্তর্গত।",
                    minTitle: [
                        {
                            title: "Absolute Value",
                            code: "#include <iostream>\n#include <cmath>\n\nint main() {\n    int number = -10;\n    std::cout << \"Absolute Value: \" << std::abs(number) << std::endl;\n    return 0;\n}",
                            descriptionCode: "std::abs() ফাংশন একটি সংখ্যা থেকে তার ধনাত্মক মান প্রদান করে।"
                        },
                        {
                            title: "Power Function",
                            code: "#include <iostream>\n#include <cmath>\n\nint main() {\n    double base = 2.0;\n    double exponent = 3.0;\n    std::cout << \"Power: \" << std::pow(base, exponent) << std::endl;\n    return 0;\n}",
                            descriptionCode: "std::pow() ফাংশন একটি সংখ্যা এবং একটি এক্সপোনেন্ট নিয়ে সেই সংখ্যার পাওয়ার বের করে।"
                        },
                        {
                            title: "Square Root",
                            code: "#include <iostream>\n#include <cmath>\n\nint main() {\n    double number = 16.0;\n    std::cout << \"Square Root: \" << std::sqrt(number) << std::endl;\n    return 0;\n}",
                            descriptionCode: "std::sqrt() ফাংশন একটি সংখ্যা থেকে তার স্কয়ার রুট বের করে।"
                        },
                        {
                            title: "Exponential Function",
                            code: "#include <iostream>\n#include <cmath>\n\nint main() {\n    double number = 2.0;\n    std::cout << \"Exponential: \" << std::exp(number) << std::endl;\n    return 0;\n}",
                            descriptionCode: "std::exp() ফাংশন একটি সংখ্যা থেকে e এর পাওয়ার বের করে।"
                        },
                        {
                            title: "Logarithm Function",
                            code: "#include <iostream>\n#include <cmath>\n\nint main() {\n    double number = 100.0;\n    std::cout << \"Logarithm: \" << std::log10(number) << std::endl;\n    return 0;\n}",
                            descriptionCode: "std::log10() ফাংশন একটি সংখ্যার বেস 10 লগারিদম বের করে।"
                        },
                        {
                            title: "Trigonometric Functions",
                            code: "#include <iostream>\n#include <cmath>\n\nint main() {\n    double angle = 45.0;\n    std::cout << \"Sine: \" << std::sin(angle * M_PI / 180.0) << std::endl;\n    std::cout << \"Cosine: \" << std::cos(angle * M_PI / 180.0) << std::endl;\n    std::cout << \"Tangent: \" << std::tan(angle * M_PI / 180.0) << std::endl;\n    return 0;\n}",
                            descriptionCode: "std::sin(), std::cos(), এবং std::tan() ফাংশনগুলি একটি কোণ থেকে যথাক্রমে সাইন, কসাইন, এবং ট্যানজেন্ট বের করে।"
                        },
                    ]
                },
                {
                    title: "Booleans",
                    code: "bool isTrue = true;\nbool isFalse = false;",
                    descriptionCode: "bool data type দুটি মান নিতে পারে: true অথবা false। এখানে, isTrue এবং isFalse দুটি boolean ভেরিয়েবল।"
                },
                {
                    title: "Conditionals",
                    code: "if (age > 18) {\n    cout << \"Adult\";\n} else {\n    cout << \"Not an adult\";\n}",
                    descriptionCode: "if statement ব্যবহার করে condition চেক করা হয়। উদাহরণস্বরূপ, age ভেরিয়েবলের মান যদি 18 এর বেশি হয় তবে \"Adult\" আউটপুট হবে।",
                    minTitle: [
                        {
                            title: "Conditionals",
                            code: "if (age > 18) {\n    cout << \"Adult\";\n} else {\n    cout << \"Not an adult\";\n}",
                            descriptionCode: "if statement ব্যবহার করে condition চেক করা হয়। উদাহরণস্বরূপ, age ভেরিয়েবলের মান যদি 18 এর বেশি হয় তবে \"Adult\" আউটপুট হবে।"
                        },
                        {
                            title: "Switch",
                            code: "switch (grade) {\n    case 'A':\n        cout << \"Excellent\";\n        break;\n    case 'B':\n        cout << \"Good\";\n        break;\n    default:\n        cout << \"Needs Improvement\";\n}",
                            descriptionCode: "switch statement একাধিক possible values চেক করতে ব্যবহৃত হয়।"
                        },
                        {
                            title: "Nested If-Else",
                            code: "int age = 20;\nif (age > 18) {\n    if (age < 30) {\n        cout << \"Young adult\";\n    } else {\n        cout << \"Adult\";\n    }\n} else {\n    cout << \"Not an adult\";\n}",
                            descriptionCode: "nested if-else statement এর মাধ্যমে একটি condition এর ভিতরে আরেকটি condition চেক করা যায়। এখানে, যদি age 18 এর বেশি হয়, তাহলে age 30 এর কম হলে 'Young adult' এবং না হলে 'Adult' প্রদর্শিত হবে।"
                        },
                        {
                            title: "Else-If",
                            code: "int score = 85;\nif (score >= 90) {\n    cout << \"A+\";\n} else if (score >= 80) {\n    cout << \"A\";\n} else {\n    cout << \"Needs Improvement\";\n}",
                            descriptionCode: "else-if statement ব্যবহার করে একাধিক conditions চেক করা যায়। এখানে, score যদি 90 বা তার বেশি হয় তাহলে 'A+', 80 বা তার বেশি হলে 'A', এবং না হলে 'Needs Improvement' প্রদর্শিত হবে।"
                        }

                    ]
                },
                {
                    title: "Loop ",
                    minTitle: [
                        {
                            title: "For Loop",
                            code: "for (int i = 0; i < 5; i++) {\n    cout << i << endl;\n}",
                            descriptionCode: "for loop ব্যবহার করে একটি নির্দিষ্ট সংখ্যা পর্যন্ত পুনরাবৃত্তি করা যায়।"
                        },
                        {
                            title: "While Loop",
                            code: "int i = 0;\nwhile (i < 5) {\n    cout << i << \" \";\n    i++;\n}",
                            descriptionCode: "while loop একটি condition এর সত্যতা যাচাই করে iteration চালায়। এখানে, loop তখন পর্যন্ত চলবে যতক্ষণ i 5 এর কম থাকে।"
                        },
                        {
                            title: "Do While Loop",
                            code: "int i = 0;\ndo {\n    cout << i << \" \";\n    i++;\n} while (i < 5);",
                            descriptionCode: "do-while loop কমপক্ষে একবার iteration চালায় এবং পরে condition চেক করে। এখানে, loop একবার চলবে এবং পরে i 5 এর কম কিনা তা যাচাই করবে।"
                        },
                        {
                            title: "Break",
                            code: "for (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        break;\n    }\n    cout << i << \" \";\n}",
                            descriptionCode: "break statement loop বা switch-case থেকে বেরিয়ে আসতে ব্যবহৃত হয়। উদাহরণস্বরূপ, loop 5 পৌঁছানোর পর বন্ধ হয়ে যাবে।"
                        },
                        {
                            title: "Continue",
                            code: "for (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        continue;\n    }\n    cout << i << \" \";\n}",
                            descriptionCode: "continue statement iteration-এর একটি নির্দিষ্ট অংশ এড়িয়ে যায় এবং loop এর পরবর্তী iteration শুরু করে। এখানে, i যদি 5 হয়, তবে সেই iteration বাদ দিয়ে পরবর্তী iteration শুরু হবে।"
                        }

                    ]
                }
            ],
        },
        {
            id: 1,
            value: "Advance",
            link: "/advance",
            lecture: [
                {
                    title: "Introduction to Advanced C++ Concepts : ",
                    description: "C++-এ কিছু উন্নত ধারণা যেমন Arrays, Enums, এবং Pointers গুরুত্বপূর্ণ ভূমিকা পালন করে। এই ধারণাগুলি প্রোগ্রামিংয়ের ক্ষেত্রে আরও উন্নত এবং দক্ষ কোড লেখার জন্য ব্যবহৃত হয়।",
                },
                {
                    title: "Arrays in C++ ",
                    minTitle: [
                        {
                            title: "Basic Array",
                            code: "#include <iostream>\n\nint main() {\n    int numbers[5] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; ++i) {\n        std::cout << \"Element at index \" << i << \": \" << numbers[i] << std::endl;\n    }\n    return 0;\n}",
                            descriptionCode: "উপরের উদাহরণে, int numbers[5] একটি Integer Array যা পাঁচটি ইন্টিজার মান ধারণ করে। লুপের মাধ্যমে Array এর প্রতিটি উপাদান অ্যাক্সেস করা হয়েছে।"
                        },
                        {
                            title: "Multi-Dimensional Array",
                            code: "#include <iostream>\n\nint main() {\n    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    for (int i = 0; i < 2; ++i) {\n        for (int j = 0; j < 3; ++j) {\n            std::cout << \"Element at [\" << i << \"][\" << j << \"]: \" << matrix[i][j] << std::endl;\n        }\n    }\n    return 0;\n}",
                            descriptionCode: "এই উদাহরণে, একটি 2x3 মেট্রিক্স Array ঘোষণা করা হয়েছে এবং একটি nested loop ব্যবহার করে প্রতিটি উপাদান প্রদর্শন করা হয়েছে।"
                        },
                        {
                            title: "Array with Functions",
                            code: "#include <iostream>\n\nvoid printArray(int arr[], int size) {\n    for (int i = 0; i < size; ++i) {\n        std::cout << arr[i] << \" \";\n    }\n    std::cout << std::endl;\n}\n\nint main() {\n    int numbers[] = {10, 20, 30, 40, 50};\n    printArray(numbers, 5);\n    return 0;\n}",
                            descriptionCode: "এই উদাহরণে, একটি Array কে একটি ফাংশনের মাধ্যমে প্রিন্ট করা হয়েছে। printArray ফাংশন Array এবং তার আকার নিয়ে কাজ করে এবং Array এর সমস্ত উপাদান প্রদর্শন করে।"
                        },
                    ],
                },
                {
                    title: "Enums in C++",
                    minTitle:[
                        {
                            title: "Basic Enum",
                            code: "#include <iostream>\n\nenum Color {\n    RED,\n    GREEN,\n    BLUE\n};\n\nint main() {\n    Color myColor = GREEN;\n    if (myColor == GREEN) {\n        std::cout << \"Color is Green\" << std::endl;\n    }\n    return 0;\n}",
                            descriptionCode: "এখানে একটি Enum Color তৈরি করা হয়েছে যা বিভিন্ন রঙের মান ধারণ করে। myColor কে GREEN হিসেবে সেট করা হয়েছে এবং শর্ত চেক করা হয়েছে।"
                        },
                        {
                            title: "Enum with Custom Values",
                            code: "#include <iostream>\n\nenum Day {\n    SUNDAY = 1,\n    MONDAY,\n    TUESDAY,\n    WEDNESDAY,\n    THURSDAY,\n    FRIDAY,\n    SATURDAY\n};\n\nint main() {\n    Day today = FRIDAY;\n    std::cout << \"Day number: \" << today << std::endl;\n    return 0;\n}",
                            descriptionCode: "এখানে Day Enum এর মানগুলি কাস্টম ভ্যালু দ্বারা সেট করা হয়েছে। today কে FRIDAY হিসেবে সেট করা হয়েছে এবং মান প্রদর্শন করা হয়েছে।"
                        },
                        {
                            title: "Enum with Underlying Type",
                            code: "#include <iostream>\n\nenum class Status : int {\n    OK = 0,\n    WARNING = 1,\n    ERROR = 2\n};\n\nint main() {\n    Status currentStatus = ERROR;\n    std::cout << \"Status code: \" << static_cast<int>(currentStatus) << std::endl;\n    return 0;\n}",
                            descriptionCode: "এখানে একটি Scoped Enum (enum class) ব্যবহার করা হয়েছে যা int টাইপের সাথে সম্পর্কিত। currentStatus কে ERROR হিসেবে সেট করা হয়েছে এবং তার মান প্রদর্শন করা হয়েছে।"
                        },
                    ]
                },
                {
                    title: "Pointers in C++ ",
                    minTitle: [
                        {
                            title: "Basic Pointer",
                            code: "#include <iostream>\n\nint main() {\n    int value = 10;\n    int* ptr = &value; // Pointer to an integer\n    std::cout << \"Value: \" << value << std::endl;\n    std::cout << \"Pointer Address: \" << ptr << std::endl;\n    std::cout << \"Pointer Value: \" << *ptr << std::endl;\n    return 0;\n}",
                            descriptionCode: "এখানে value ভেরিয়েবলের অ্যাড্রেস একটি পয়েন্টার দ্বারা ধারণ করা হয়েছে। *ptr দ্বারা পয়েন্টারটি নির্দেশিত মান অ্যাক্সেস করা হয়েছে।"
                        },
                        {
                            title: "Pointer to Array",
                            code: "#include <iostream>\n\nint main() {\n    int numbers[] = {10, 20, 30, 40, 50};\n    int* ptr = numbers; // Pointer to the first element of the array\n    for (int i = 0; i < 5; ++i) {\n        std::cout << \"Element at index \" << i << \": \" << *(ptr + i) << std::endl;\n    }\n    return 0;\n}",
                            descriptionCode: "এখানে একটি Array এর প্রথম উপাদানে পয়েন্টার সেট করা হয়েছে। *(ptr + i) ব্যবহার করে Array এর প্রতিটি উপাদান অ্যাক্সেস করা হয়েছে।"
                        },
                        {
                            title: "Pointer and Dynamic Memory Allocation",
                            code: "#include <iostream>\n\nint main() {\n    int* ptr = new int(5); // Dynamic memory allocation\n    std::cout << \"Dynamically allocated value: \" << *ptr << std::endl;\n    delete ptr; // Deallocating memory\n    return 0;\n}",
                            descriptionCode: "এখানে new অপারেটর দ্বারা ডাইনামিক মেমরি অ্যালোকেশন করা হয়েছে এবং delete দ্বারা মেমরি মুক্ত করা হয়েছে। *ptr দ্বারা ডাইনামিকভাবে বরাদ্দকৃত মান অ্যাক্সেস করা হয়েছে।"
                        }
                    ]
                },
            ],
        },
        {
            id: 2,
            value: "Function",
            link: "/function",
            lecture: [
                {
                    title: "Function and Parameters : ",
                    description: "C++ এ বিভিন্ন প্রকারের ফাংশন প্যারামিটার ব্যবহৃত হয়, যার মধ্যে আছে Basic Parameters, Default Parameters, Return Values, Pass by Reference, Pass by Array এবং Function Overloading।",

                },
                {
                    title: "Basic Parameters ",
                    minTitle: [
                        {
                            title: "Basic Parameter",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid printNumber(int num) {\n    cout << \"Number: \" << num << endl;\n}\n\nint main() {\n    printNumber(5);\n    return 0;\n}",
                            descriptionCode: "এখানে printNumber ফাংশন একটি একক প্যারামিটার num গ্রহণ করে। num এর মান main() ফাংশনে printNumber(5) কল করার মাধ্যমে প্রদর্শিত হয়।"
                        },
                        {
                            title: "Multiple Parameters",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid addNumbers(int a, int b) {\n    cout << \"Sum: \" << (a + b) << endl;\n}\n\nint main() {\n    addNumbers(3, 4);\n    return 0;\n}",
                            descriptionCode: "এখানে addNumbers ফাংশন দুটি প্যারামিটার a এবং b গ্রহণ করে। main() ফাংশনে addNumbers(3, 4) কল করার মাধ্যমে দুটি সংখ্যার যোগফল প্রদর্শিত হয়।"
                        },
                        {
                            title: "Default Value",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid greet(string name = \"Guest\") {\n    cout << \"Hello, \" << name << \"!\" << endl;\n}\n\nint main() {\n    greet();\n    greet(\"Alice\");\n    return 0;\n}",
                            descriptionCode: "এখানে greet ফাংশনে name প্যারামিটার একটি ডিফল্ট মান \"Guest\" পায়। যদি কোন নাম প্রদান না করা হয়, তবে \"Hello, Guest!\" প্রদর্শিত হবে, অন্যথায় প্রদত্ত নামের সাথে সাদর অভ্যর্থনা করা হবে।"
                        },
                        {
                            title: "Default Parameter with Multiple Arguments",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid display(int x, int y = 10) {\n    cout << \"x: \" << x << \", y: \" << y << endl;\n}\n\nint main() {\n    display(5);\n    display(5, 15);\n    return 0;\n}",
                            descriptionCode: "এখানে display ফাংশনে y প্যারামিটার একটি ডিফল্ট মান 10 পায়। display(5) কল করলে y এর মান 10 হবে, এবং display(5, 15) কল করলে y এর মান 15 হবে।"
                        },
                        {
                            title: "Basic Return",
                            code: "#include <iostream>\nusing namespace std;\n\nint square(int num) {\n    return num * num;\n}\n\nint main() {\n    cout << \"Square of 4: \" << square(4) << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে square ফাংশন একটি পূর্ণসংখ্যার বর্গফল গণনা করে এবং return করে। main() ফাংশনে square(4) কল করে 4 এর বর্গফল 16 প্রদর্শিত হয়।"
                        },
                        {
                            title: "Returning Multiple Values",
                            code: "#include <iostream>\nusing namespace std;\n\npair<int, int> getMinMax(int a, int b) {\n    return make_pair(min(a, b), max(a, b));\n}\n\nint main() {\n    auto result = getMinMax(5, 10);\n    cout << \"Min: \" << result.first << \", Max: \" << result.second << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে getMinMax ফাংশন একটি pair ব্যবহার করে দুইটি মান ফেরত দেয়। main() ফাংশনে getMinMax(5, 10) কল করে সর্বনিম্ন এবং সর্বোচ্চ মান প্রদর্শিত হয়।"
                        },
                        {
                            title: "Modifying Values",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid increment(int &num) {\n    num++;\n}\n\nint main() {\n    int x = 5;\n    increment(x);\n    cout << \"Incremented value: \" << x << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে increment ফাংশন একটি প্যারামিটারকে রেফারেন্স হিসেবে গ্রহণ করে এবং তার মান বাড়িয়ে দেয়। x এর মান increment(x) কল করার পর 6 হয়ে যায়।"
                        },
                        {
                            title: "Swapping Values",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 1, y = 2;\n    swap(x, y);\n    cout << \"Swapped values: x = \" << x << \", y = \" << y << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে swap ফাংশন দুটি পূর্ণসংখ্যার মান বিনিময় করে। swap(x, y) কল করার পর x এবং y এর মান স্ব্যাপ হয়ে যায়।"
                        },
                        {
                            title: "Modifying Array Elements",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid fillArray(int arr[], int size) {\n    for (int i = 0; i < size; ++i) {\n        arr[i] = i + 1;\n    }\n}\n\nint main() {\n    int myArray[5];\n    fillArray(myArray, 5);\n    for (int i = 0; i < 5; ++i) {\n        cout << myArray[i] << \" \";\n    }\n    return 0;\n}",
                            descriptionCode: "এখানে fillArray ফাংশন একটি Array এর সব উপাদান পূর্ণ করে। myArray এ 1 থেকে 5 পর্যন্ত সংখ্যা সেট করা হয় এবং পরে তা প্রদর্শিত হয়।"
                        },
                        {
                            title: "Array Sum",
                            code: "#include <iostream>\nusing namespace std;\n\nint arraySum(int arr[], int size) {\n    int sum = 0;\n    for (int i = 0; i < size; ++i) {\n        sum += arr[i];\n    }\n    return sum;\n}\n\nint main() {\n    int myArray[] = {1, 2, 3, 4, 5};\n    cout << \"Sum of array elements: \" << arraySum(myArray, 5) << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে arraySum ফাংশন একটি Array এর উপাদানগুলির যোগফল গণনা করে। arraySum(myArray, 5) কল করার পর Array এর উপাদানগুলির যোগফল প্রদর্শিত হয়।"
                        },

                        {
                            title: "Overloading with Different Number of Parameters",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid print(int i) {\n    cout << \"Integer: \" << i << endl;\n}\n\nvoid print(double d) {\n    cout << \"Double: \" << d << endl;\n}\n\nint main() {\n    print(5);        // Calls print(int)\n    print(5.99);     // Calls print(double)\n    return 0;\n}",
                            descriptionCode: "এখানে print ফাংশন দুটি ভার্সনে ওভারলোড করা হয়েছে: একটি পূর্ণসংখ্যা এবং একটি ডাবল টাইপের প্যারামিটার গ্রহণ করে। print(5) কল করলে পূর্ণসংখ্যার ভার্সন এবং print(5.99) কল করলে ডাবল টাইপের ভার্সন কল হবে।"
                        },
                        {
                            title: "Overloading with Different Parameter Types",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid display(int a, double b) {\n    cout << \"Integer: \" << a << \", Double: \" << b << endl;\n}\n\nvoid display(double a, int b) {\n    cout << \"Double: \" << a << \", Integer: \" << b << endl;\n}\n\nint main() {\n    display(5, 4.5);     // Calls display(int, double)\n    display(4.5, 5);     // Calls display(double, int)\n    return 0;\n}",
                            descriptionCode: "এখানে display ফাংশন বিভিন্ন প্রকারের প্যারামিটার টাইপ সহ ওভারলোড করা হয়েছে। দুটি আলাদা প্যারামিটার অর্ডার ব্যবহার করে display() কল করা যায়।"
                        }
                    ]
                },
            ],
        },
        {
            id: 3,
            value: "Recursion",
            link: "/recursion",
            lecture: [
                {
                    title: "Introduction to Recursion : ",
                    description: "Recursion একটি প্রোগ্রামিং কৌশল যেখানে একটি ফাংশন নিজেকে কল করে। এটি সমস্যাগুলির পুনরাবৃত্তি সমাধানের জন্য ব্যবহার করা হয়। একটি রিকার্সিভ ফাংশন সাধারণত একটি বেস কেস এবং একটি রিকার্সিভ কেস থাকে।",
                    minTitle: [
                        {
                            title: "Factorial Calculation ",
                            code: "#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    cout << \"Factorial of 5: \" << factorial(5) << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে factorial ফাংশনটি একটি পূর্ণসংখ্যার ফ্যাক্টরিয়াল হিসাব করতে রিকার্সন ব্যবহার করা হয়েছে। factorial(5) কল করলে ফলস্বরূপ 120 হবে, কারণ 5 * 4 * 3 * 2 * 1।"
                        },
                        {
                            title: "Fibonacci Series",
                            code: "#include <iostream>\nusing namespace std;\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nint main() {\n    for (int i = 0; i < 10; i++) {\n        cout << fibonacci(i) << \" \";\n    }\n    return 0;\n}",
                            descriptionCode: "এখানে fibonacci ফাংশনটি ফিবোনাচ্চি সিকোয়েন্সের সদস্যদের হিসাব করতে রিকার্সন ব্যবহার করা হয়েছে। সিকোয়েন্স শুরু হয় 0, 1, 1, 2, 3, 5, 8, 13...।"
                        },
                        {
                            title: "Sum of Array Elements",
                            code: "#include <iostream>\nusing namespace std;\n\nint sumArray(int arr[], int size) {\n    if (size <= 0) return 0;\n    return sumArray(arr, size - 1) + arr[size - 1];\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    cout << \"Sum of array elements: \" << sumArray(arr, 5) << endl;\n    return 0;\n}",
                            descriptionCode: "sumArray ফাংশনটি একটি অ্যারের উপাদানগুলির যোগফল হিসাব করতে রিকার্সন ব্যবহার করে। এখানে arr[] এর সকল উপাদানের যোগফল বের করা হয়েছে।"
                        },
                        {
                            title: "Reverse a String",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid reverseString(string str) {\n    if (str.empty()) return;\n    reverseString(str.substr(1));\n    cout << str[0];\n}\n\nint main() {\n    string str = \"Recursion\";\n    reverseString(str);\n    cout << endl;\n    return 0;\n}",
                            descriptionCode: "reverseString ফাংশনটি একটি স্ট্রিংকে রিকার্সিভভাবে উল্টে দেয়। str.substr(1) ব্যবহার করে স্ট্রিংটির প্রথম চরিত্র বাদ দিয়ে পুনরায় কল করা হয়।"
                        },
                        {
                            title: "Binary Search",
                            code: "#include <iostream>\nusing namespace std;\n\nint binarySearch(int arr[], int left, int right, int target) {\n    if (left > right) return -1;\n    int mid = left + (right - left) / 2;\n\n    if (arr[mid] == target) return mid;\n    if (arr[mid] > target) return binarySearch(arr, left, mid - 1, target);\n    return binarySearch(arr, mid + 1, right, target);\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};\n    int target = 5;\n    int result = binarySearch(arr, 0, 8, target);\n    cout << \"Element found at index: \" << result << endl;\n    return 0;\n}",
                            descriptionCode: "binarySearch ফাংশনটি একটি সাজানো অ্যারেতে একটি উপাদান খুঁজে পেতে রিকার্সন ব্যবহার করে। এটি ডিভিড এন্ড কনকার কৌশল ব্যবহার করে।"
                        },
                        {
                            title: "Calculate Power",
                            code: "#include <iostream>\nusing namespace std;\n\nint power(int base, int exp) {\n    if (exp == 0) return 1;\n    return base * power(base, exp - 1);\n}\n\nint main() {\n    cout << \"2^3 = \" << power(2, 3) << endl;\n    return 0;\n}",
                            descriptionCode: "power ফাংশনটি একটি সংখ্যা এবং তার শক্তি রিকার্সিভভাবে হিসাব করে। এখানে 2^3 এর মান 8 হবে।"
                        },
                        {
                            title: "GCD (Greatest Common Divisor)",
                            code: "#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    cout << \"GCD of 48 and 18 is: \" << gcd(48, 18) << endl;\n    return 0;\n}",
                            descriptionCode: "gcd ফাংশনটি দুইটি সংখ্যার গনিষ্ঠ সাধারণ গুণক (GCD) রিকার্সিভভাবে হিসাব করে। এখানে 48 এবং 18 এর GCD হবে 6।"
                        },
                        {
                            title: "Print Natural Numbers",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid printNaturalNumbers(int n) {\n    if (n <= 0) return;\n    printNaturalNumbers(n - 1);\n    cout << n << \" \";\n}\n\nint main() {\n    printNaturalNumbers(5);\n    cout << endl;\n    return 0;\n}",
                            descriptionCode: "printNaturalNumbers ফাংশনটি একটি প্রাকৃতিক সংখ্যা পর্যন্ত রিকার্সিভভাবে সংখ্যাগুলি প্রিন্ট করে। এখানে 5 পর্যন্ত সংখ্যা প্রিন্ট করা হবে।"
                        },
                        {
                            title: "Tower of Hanoi",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid towerOfHanoi(int n, char from, char to, char aux) {\n    if (n == 1) {\n        cout << \"Move disk 1 from \" << from << \" to \" << to << endl;\n        return;\n    }\n    towerOfHanoi(n - 1, from, aux, to);\n    cout << \"Move disk \" << n << \" from \" << from << \" to \" << to << endl;\n    towerOfHanoi(n - 1, aux, to, from);\n}\n\nint main() {\n    towerOfHanoi(3, 'A', 'C', 'B');\n    return 0;\n}",
                            descriptionCode: "towerOfHanoi ফাংশনটি টাওয়ার অফ হানয় সমস্যার সমাধান করতে রিকার্সন ব্যবহার করে। এখানে 3 টি ডিস্কের জন্য স্টেপগুলি প্রিন্ট করা হয়।"
                        },
                        {
                            title: "Sum of Digits",
                            code: "#include <iostream>\nusing namespace std;\n\nint sumOfDigits(int num) {\n    if (num == 0) return 0;\n    return num % 10 + sumOfDigits(num / 10);\n}\n\nint main() {\n    cout << \"Sum of digits of 1234: \" << sumOfDigits(1234) << endl;\n    return 0;\n}",
                            descriptionCode: "sumOfDigits ফাংশনটি একটি সংখ্যার ডিজিটগুলির যোগফল রিকার্সিভভাবে হিসাব করে। এখানে 1234 সংখ্যার ডিজিটগুলির যোগফল 10 হবে।"
                        },
                        {
                            title: "Power Set",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid powerSet(string str, string current, int index) {\n    if (index == str.size()) {\n        cout << current << \" \";\n        return;\n    }\n    powerSet(str, current, index + 1);\n    powerSet(str, current + str[index], index + 1);\n}\n\nint main() {\n    string str = \"abc\";\n    powerSet(str, \"\", 0);\n    cout << endl;\n    return 0;\n}",
                            descriptionCode: "powerSet ফাংশনটি একটি স্ট্রিংয়ের সকল সম্ভাব্য সাবসেট রিকার্সিভভাবে তৈরি করে। এখানে স্ট্রিং 'abc' এর সকল সাবসেট প্রিন্ট হবে।"
                        },
                        {
                            title: "Permutations of a String",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid permute(string str, int l, int r) {\n    if (l == r) {\n        cout << str << \" \";\n        return;\n    }\n    for (int i = l; i <= r; i++) {\n        swap(str[l], str[i]);\n        permute(str, l + 1, r);\n        swap(str[l], str[i]); // backtrack\n    }\n}\n\nint main() {\n    string str = \"abc\";\n    permute(str, 0, str.size() - 1);\n    cout << endl;\n    return 0;\n}\n",
                            descriptionCode: "permute ফাংশনটি একটি স্ট্রিংয়ের সকল পারমুটেশন বের করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, \"abc\" এর পারমুটেশন হবে \"abc\", \"acb\", \"bac\", \"bca\", \"cab\", \"cba\"।"
                        },
                        {
                            title: "Flatten Nested Lists",
                            code: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid flatten(vector<vector<int>>& nested, vector<int>& result, int index) {\n    if (index == nested.size()) return;\n    for (int num : nested[index]) {\n        result.push_back(num);\n    }\n    flatten(nested, result, index + 1);\n}\n\nint main() {\n    vector<vector<int>> nested = {{1, 2}, {3, 4}, {5, 6}};\n    vector<int> result;\n    flatten(nested, result, 0);\n    for (int num : result) cout << num << \" \";\n    cout << endl;\n    return 0;\n}\n",
                            descriptionCode: "flatten ফাংশনটি নেস্টেড লিস্টগুলিকে একটি একক লিস্টে রিকার্সিভভাবে রূপান্তর করে। উদাহরণস্বরূপ, {1, 2}, {3, 4}, {5, 6} কে {1, 2, 3, 4, 5, 6} এ রূপান্তরিত করবে।"
                        },
                        {
                            title: "Generate All Subsets",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid generateSubsets(string str, string current, int index) {\n    if (index == str.size()) {\n        cout << current << \" \";\n        return;\n    }\n    generateSubsets(str, current, index + 1);\n    generateSubsets(str, current + str[index], index + 1);\n}\n\nint main() {\n    string str = \"xyz\";\n    generateSubsets(str, \"\", 0);\n    cout << endl;\n    return 0;\n}\n",
                            descriptionCode: "generateSubsets ফাংশনটি একটি স্ট্রিংয়ের সকল সম্ভাব্য উপসেট বের করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, \"xyz\" এর উপসেট হবে \"\", \"x\", \"y\", \"z\", \"xy\", \"xz\", \"yz\", \"xyz\"।"
                        },
                        {
                            title: "Merge Sort",
                            code: "#include <iostream>\nusing namespace std;\n\nvoid merge(int arr[], int l, int m, int r) {\n    int n1 = m - l + 1;\n    int n2 = r - m;\n\n    int* L = new int[n1];\n    int* R = new int[n2];\n\n    for (int i = 0; i < n1; i++) L[i] = arr[l + i];\n    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];\n\n    int i = 0, j = 0, k = l;\n    while (i < n1 && j < n2) {\n        if (L[i] <= R[j]) arr[k++] = L[i++];\n        else arr[k++] = R[j++];\n    }\n\n    while (i < n1) arr[k++] = L[i++];\n    while (j < n2) arr[k++] = R[j++];\n\n    delete[] L;\n    delete[] R;\n}\n\nvoid mergeSort(int arr[], int l, int r) {\n    if (l < r) {\n        int m = l + (r - l) / 2;\n\n        mergeSort(arr, l, m);\n        mergeSort(arr, m + 1, r);\n\n        merge(arr, l, m, r);\n    }\n}\n\nint main() {\n    int arr[] = {12, 11, 13, 5, 6, 7};\n    int arr_size = sizeof(arr) / sizeof(arr[0]);\n\n    mergeSort(arr, 0, arr_size - 1);\n\n    cout << \"Sorted array: \";\n    for (int i = 0; i < arr_size; i++) cout << arr[i] << \" \";\n    cout << endl;\n    return 0;\n}\n",
                            descriptionCode: "mergeSort ফাংশনটি একটি অ্যারেকে মের্জ সোর্ড অ্যালগরিদম ব্যবহার করে সাজাতে রিকার্সন ব্যবহার করে। এটি অ্যারেটিকে ছোট ছোট অংশে ভাগ করে এবং সেগুলিকে সাজিয়ে একত্রিত করে।"
                        },
                        {
                            title: "Quick Sort",
                            code: "#include <iostream>\nusing namespace std;\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = (low - 1);\n\n    for (int j = low; j < high; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            swap(arr[i], arr[j]);\n        }\n    }\n\n    swap(arr[i + 1], arr[high]);\n    return (i + 1);\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n\nint main() {\n    int arr[] = {10, 7, 8, 9, 1, 5};\n    int arr_size = sizeof(arr) / sizeof(arr[0]);\n\n    quickSort(arr, 0, arr_size - 1);\n\n    cout << \"Sorted array: \";\n    for (int i = 0; i < arr_size; i++) cout << arr[i] << \" \";\n    cout << endl;\n    return 0;\n}\n",
                            descriptionCode: "quickSort ফাংশনটি একটি অ্যারেকে কুইক সোর্ড অ্যালগরিদম ব্যবহার করে সাজাতে রিকার্সন ব্যবহার করে। এটি একটি পিভট উপাদান নির্বাচন করে এবং কমপক্ষে এবং বেশী উপাদানগুলির সাথে বিভক্ত করে।"
                        },
                        {
                            title: "Count Ways to Climb Stairs",
                            code: "#include <iostream>\nusing namespace std;\n\nint countWays(int n) {\n    if (n <= 1) return 1;\n    return countWays(n - 1) + countWays(n - 2);\n}\n\nint main() {\n    int n = 5;\n    cout << \"Number of ways to climb \" << n << \" stairs: \" << countWays(n) << endl;\n    return 0;\n}\n",
                            descriptionCode: "countWays ফাংশনটি সিঁড়ি উঠতে সম্ভাব্য উপায়গুলি গননা করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, 5 ধাপের জন্য সংখ্যা হবে 8।"
                        },
                        {
                            title: "Maximum Depth of Binary Tree",
                            code: "#include <iostream>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};\n\nint maxDepth(TreeNode* root) {\n    if (root == nullptr) return 0;\n    return 1 + max(maxDepth(root->left), maxDepth(root->right));\n}\n\nint main() {\n    TreeNode* root = new TreeNode(1);\n    root->left = new TreeNode(2);\n    root->right = new TreeNode(3);\n    root->left->left = new TreeNode(4);\n    root->left->right = new TreeNode(5);\n\n    cout << \"Maximum depth of the tree: \" << maxDepth(root) << endl;\n    return 0;\n}\n",
                            descriptionCode: "maxDepth ফাংশনটি একটি বাইনারি ট্রির সর্বাধিক গভীরতা নির্ণয় করতে রিকার্সন ব্যবহার করে। এটি গাছের মূল থেকে নিচের দিকে যাবার সময় গভীরতা গননা করে।"
                        },
                        {
                            title: "Find the N-th Fibonacci Number",
                            code: "#include <iostream>\nusing namespace std;\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nint main() {\n    int n = 10;\n    cout << \"Fibonacci number at position \" << n << \": \" << fibonacci(n) << endl;\n    return 0;\n}\n",
                            descriptionCode: "fibonacci ফাংশনটি n-তম ফিবোনাচ্চি সংখ্যা নির্ণয় করতে রিকার্সন ব্যবহার করে। উদাহরণস্বরূপ, 10 তম ফিবোনাচ্চি সংখ্যা 55।"
                        },
                        {
                            title: "Validate Binary Search Tree",
                            code: "#include <iostream>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};\n\nbool isValidBST(TreeNode* root, long minVal = LONG_MIN, long maxVal = LONG_MAX) {\n    if (root == nullptr) return true;\n    if (root->val <= minVal || root->val >= maxVal) return false;\n    return isValidBST(root->left, minVal, root->val) && isValidBST(root->right, root->val, maxVal);\n}\n\nint main() {\n    TreeNode* root = new TreeNode(2);\n    root->left = new TreeNode(1);\n    root->right = new TreeNode(3);\n\n    cout << (isValidBST(root) ? \"Valid BST\" : \"Invalid BST\") << endl;\n    return 0;\n}\n",
                            descriptionCode: "isValidBST ফাংশনটি একটি বাইনারি সার্চ ট্রি বৈধ কিনা তা নির্ধারণ করতে রিকার্সন ব্যবহার করে। এটি নোডের মানগুলির সীমা পরীক্ষা করে।"
                        }
                    ],
                },
            ],
        },
        {
            id: 4,
            value: "DSA",
            link: "/dsa",
            lecture: [
                {
                    title: "Introduction to Data Structures in C++ : ",
                    descriptionCode: "C++ এ বিভিন্ন ধরনের ডেটা স্ট্রাকচার আছে যা তথ্য সংরক্ষণ এবং পরিচালনার জন্য ব্যবহৃত হয়। এই কম্পোনেন্টে আমরা বিভিন্ন ডেটা স্ট্রাকচার যেমন ভেক্টর, লিস্ট, স্ট্যাক, কিউ, ডিকিউ, সেট এবং ম্যাপের সাথে পরিচিত হবো এবং প্রতিটির জন্য উদাহরণ প্রদান করবো।",
                },
                {
                    title: "Vector : ",
                    minTitle: [
                        {
                            title: "Basic Vector Operations",
                            code: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> vec = {1, 2, 3, 4, 5};\n    vec.push_back(6); // Add element at the end\n    vec.pop_back();   // Remove the last element\n\n    for (int num : vec) {\n        cout << num << \" \";\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে vector ব্যবহার করে একটি সংখ্যা ভেক্টর তৈরি করা হয়েছে। push_back এবং pop_back ফাংশনের মাধ্যমে উপাদান যোগ এবং মুছে ফেলা হয়েছে।"
                        },
                        {
                            title: "Iterating Through Vector",
                            code: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> vec = {10, 20, 30, 40, 50};\n\n    for (auto it = vec.begin(); it != vec.end(); ++it) {\n        cout << *it << \" \";\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে vector এর উপাদানগুলি begin এবং end ইটারেটর ব্যবহার করে প্রদর্শন করা হয়েছে।"
                        },
                        {
                            title: "Using Vector of Objects",
                            code: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Person {\npublic:\n    Person(string n) : name(n) {}\n    void display() const {\n        cout << \"Name: \" << name << endl;\n    }\nprivate:\n    string name;\n};\n\nint main() {\n    vector<Person> people;\n    people.push_back(Person(\"Alice\"));\n    people.push_back(Person(\"Bob\"));\n\n    for (const auto& person : people) {\n        person.display();\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে Person ক্লাসের একটি vector তৈরি করা হয়েছে। push_back ফাংশনের মাধ্যমে অবজেক্ট যোগ করা হয়েছে এবং display মেথড ব্যবহার করে উপস্থাপন করা হয়েছে।"
                        },
                    ]
                },
                {
                    title: "Stack ",
                    minTitle: [
                        {
                            title: "Basic Stack Operations",
                            code: "#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    stack<int> stk;\n    stk.push(1); // Push element onto the stack\n    stk.push(2);\n    stk.push(3);\n\n    while (!stk.empty()) {\n        cout << stk.top() << \" \";\n        stk.pop(); // Pop element from the stack\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে stack ব্যবহার করে কিছু উপাদান স্ট্যাকের উপরে পুশ করা হয়েছে এবং পরে pop ফাংশনের মাধ্যমে মুছে ফেলা হয়েছে।"
                        },
                        {
                            title: "Stack of Strings",
                            code: "#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    stack<string> stk;\n    stk.push(\"Hello\");\n    stk.push(\"World\");\n\n    while (!stk.empty()) {\n        cout << stk.top() << \" \";\n        stk.pop();\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে stack এর উপাদান হিসেবে স্ট্রিং ব্যবহার করা হয়েছে। স্ট্রিং উপাদানগুলি পুশ এবং পপ করা হয়েছে।"
                        },
                        {
                            title: "Checking Stack Size",
                            code: "#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    stack<int> stk;\n    stk.push(10);\n    stk.push(20);\n    stk.push(30);\n\n    cout << \"Stack size: \" << stk.size() << endl;\n    stk.pop();\n    cout << \"Stack size after pop: \" << stk.size() << endl;\n    return 0;\n}\n",
                            descriptionCode: "এখানে stack এর আকার size ফাংশন ব্যবহার করে প্রদর্শন করা হয়েছে এবং পরে একটি উপাদান মুছে ফেলা হয়েছে।"
                        },
                    ]
                },
                {
                    title: "Queue ",
                    minTitle: [
                        {
                            title: "Basic Queue Operations",
                            code: "#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    queue<int> q;\n    q.push(1); // Add element to the queue\n    q.push(2);\n    q.push(3);\n\n    while (!q.empty()) {\n        cout << q.front() << \" \"; // Get the front element\n        q.pop(); // Remove the front element\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে queue ব্যবহার করে কিছু উপাদান কিউতে যোগ করা হয়েছে এবং pop ফাংশনের মাধ্যমে মুছে ফেলা হয়েছে।"
                        },
                        {
                            title: "Queue of Doubles",
                            code: "#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    queue<double> q;\n    q.push(1.1);\n    q.push(2.2);\n    q.push(3.3);\n\n    while (!q.empty()) {\n        cout << q.front() << \" \";\n        q.pop();\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে queue এর উপাদান হিসেবে ডাবল ব্যবহার করা হয়েছে। কিউতে উপাদান যোগ এবং মুছে ফেলা হয়েছে।"
                        },
                        {
                            title: "Queue Size and Front Element",
                            code: "#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    queue<int> q;\n    q.push(10);\n    q.push(20);\n\n    cout << \"Front element: \" << q.front() << endl;\n    cout << \"Queue size: \" << q.size() << endl;\n    q.pop();\n    cout << \"Queue size after pop: \" << q.size() << endl;\n    return 0;\n}\n",
                            descriptionCode: "এখানে queue এর আকার size ফাংশন ব্যবহার করে প্রদর্শন করা হয়েছে এবং পরে একটি উপাদান মুছে ফেলা হয়েছে।"
                        },
                    ]
                },
                {
                    title: "Basic List Operations",
                    code: "#include <iostream>\n#include <list>\nusing namespace std;\n\nint main() {\n    list<int> myList = {1, 2, 3, 4};\n    myList.push_back(5); // Add element to the end\n    myList.push_front(0); // Add element to the front\n\n    for (int num : myList) {\n        cout << num << \" \";\n    }\n    return 0;\n}\n",
                    descriptionCode: "এখানে list ব্যবহার করে একটি সংখ্যা তালিকা তৈরি করা হয়েছে। push_back এবং push_front ফাংশনের মাধ্যমে উপাদান যোগ করা হয়েছে।"
                },
                {
                    title: "List Iterator",
                    code: "#include <iostream>\n#include <list>\nusing namespace std;\n\nint main() {\n    list<int> myList = {10, 20, 30, 40};\n\n    for (auto it = myList.begin(); it != myList.end(); ++it) {\n        cout << *it << \" \";\n    }\n    return 0;\n}\n",
                    descriptionCode: "এখানে list এর উপাদানগুলি ইটারেটর ব্যবহার করে প্রদর্শন করা হয়েছে।"
                },
                {
                    title: "Removing Elements from List",
                    code: "#include <iostream>\n#include <list>\nusing namespace std;\n\nint main() {\n    list<int> myList = {10, 20, 30, 40};\n    myList.pop_back(); // Remove last element\n    myList.pop_front(); // Remove first element\n\n    for (int num : myList) {\n        cout << num << \" \";\n    }\n    return 0;\n}\n",
                    descriptionCode: "এখানে list থেকে pop_back এবং pop_front ফাংশনের মাধ্যমে উপাদান মুছে ফেলা হয়েছে।"
                },
                {
                    title: "Basic Deque Operations",
                    code: "#include <iostream>\n#include <deque>\nusing namespace std;\n\nint main() {\n    deque<int> dq;\n    dq.push_back(1); // Add element to the end\n    dq.push_front(0); // Add element to the front\n\n    for (int num : dq) {\n        cout << num << \" \";\n    }\n    return 0;\n}\n",
                    descriptionCode: "এখানে deque ব্যবহার করে কিছু উপাদান সামনে এবং পিছনে যোগ করা হয়েছে এবং প্রদর্শন করা হয়েছে।"
                },
                {
                    title: "Deque Operations",
                    code: "#include <iostream>\n#include <deque>\nusing namespace std;\n\nint main() {\n    deque<int> dq = {1, 2, 3, 4};\n    dq.pop_back(); // Remove last element\n    dq.pop_front(); // Remove first element\n\n    for (int num : dq) {\n        cout << num << \" \";\n    }\n    return 0;\n}\n",
                    descriptionCode: "এখানে deque থেকে pop_back এবং pop_front ফাংশনের মাধ্যমে উপাদান মুছে ফেলা হয়েছে।"
                },
                {
                    title: "Deque with Strings",
                    code: "#include <iostream>\n#include <deque>\nusing namespace std;\n\nint main() {\n    deque<string> dq;\n    dq.push_back(\"Hello\");\n    dq.push_front(\"World\");\n\n    while (!dq.empty()) {\n        cout << dq.front() << \" \";\n        dq.pop_front();\n    }\n    return 0;\n}\n",
                    descriptionCode: "এখানে deque এর উপাদান হিসেবে স্ট্রিং ব্যবহার করা হয়েছে এবং এগুলি সামনে থেকে মুছে ফেলা হয়েছে।"
                },
                {
                    title: "Set ",
                    minTitle: [
                        {
                            title: "Basic Set Operations",
                            code: "#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    set<int> mySet = {1, 2, 3, 4, 5};\n    mySet.insert(6); // Add element\n    mySet.erase(3);  // Remove element\n\n    for (int num : mySet) {\n        cout << num << \" \";\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে set ব্যবহার করে কিছু উপাদান যোগ এবং মুছে ফেলা হয়েছে। set স্বতন্ত্র উপাদান ধারণ করে।"
                        },
                        {
                            title: "Checking Set Size",
                            code: "#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    set<int> mySet = {1, 2, 3};\n    cout << \"Set size: \" << mySet.size() << endl;\n    mySet.insert(4);\n    cout << \"Set size after insert: \" << mySet.size() << endl;\n    return 0;\n}\n",
                            descriptionCode: "এখানে set এর আকার size ফাংশন ব্যবহার করে প্রদর্শন করা হয়েছে এবং একটি উপাদান যোগ করার পরে আকার পরীক্ষা করা হয়েছে।"
                        },
                        {
                            title: "Set with Custom Objects",
                            code: "#include <iostream>\n#include <set>\n#include <string>\nusing namespace std;\n\nclass Person {\npublic:\n    Person(string n) : name(n) {}\n    bool operator<(const Person& p) const {\n        return name < p.name;\n    }\nprivate:\n    string name;\n};\n\nint main() {\n    set<Person> people;\n    people.insert(Person(\"Alice\"));\n    people.insert(Person(\"Bob\"));\n\n    for (const auto& person : people) {\n        cout << person.name << \" \";\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে একটি কাস্টম অবজেক্টের set তৈরি করা হয়েছে এবং সেটির উপাদানগুলি প্রদর্শন করা হয়েছে।"
                        },
                    ]
                },
                {
                    title: "Map ",
                    minTitle: [
                        {
                            title: "Basic Map Operations",
                            code: "#include <iostream>\n#include <map>\nusing namespace std;\n\nint main() {\n    map<string, int> myMap;\n    myMap[\"A\"] = 1;\n    myMap[\"B\"] = 2;\n\n    for (const auto& pair : myMap) {\n        cout << pair.first << \": \" << pair.second << endl;\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে map ব্যবহার করে কিছু কিপেয়ার যোগ করা হয়েছে এবং তাদের মান প্রদর্শন করা হয়েছে।"
                        },
                        {
                            title: "Accessing Map Elements",
                            code: "#include <iostream>\n#include <map>\nusing namespace std;\n\nint main() {\n    map<string, int> myMap = { {\"A\", 1}, {\"B\", 2}, {\"C\", 3} };\n    cout << \"Value of B: \" << myMap[\"B\"] << endl;\n    return 0;\n}\n",
                            descriptionCode: "এখানে map এর উপাদান অ্যাক্সেস করা হয়েছে তাদের কী ব্যবহার করে।"
                        },
                        {
                            title: "Iterating Through Map",
                            code: "#include <iostream>\n#include <map>\nusing namespace std;\n\nint main() {\n    map<string, int> myMap = { {\"X\", 10}, {\"Y\", 20} };\n\n    for (const auto& pair : myMap) {\n        cout << pair.first << \": \" << pair.second << endl;\n    }\n    return 0;\n}\n",
                            descriptionCode: "এখানে map এর উপাদানগুলি ইটারেটর ব্যবহার করে প্রদর্শন করা হয়েছে।"
                        }
                    ]
                }
            ],
        },
        {
            id: 5,
            value: "OOP",
            link: "/oop",
            lecture: [
                {
                    title: "Basic OOP Concepts : ",
                    description: "Object-Oriented Programming (OOP) একটি প্রোগ্রামিং কৌশল যেখানে 'অবজেক্ট' এবং 'ক্লাস' এর মাধ্যমে কোড সংগঠিত করা হয়। OOP এর মূল ধারণাগুলি হল Encapsulation, Inheritance, Polymorphism, এবং Abstraction。",
                    minTitle: [
                        {
                            title: "Class and Object",
                            code: "#include <iostream>\nusing namespace std;\n\n// Define a class\nclass Car {\npublic:\n    string brand;\n    string model;\n    int year;\n\n    void displayInfo() {\n        cout << \"Brand: \" << brand << \", Model: \" << model << \", Year: \" << year << endl;\n    }\n};\n\nint main() {\n    // Create an object of the class\n    Car myCar;\n    myCar.brand = \"Toyota\";\n    myCar.model = \"Corolla\";\n    myCar.year = 2020;\n\n    myCar.displayInfo(); // Display car info\n    return 0;\n}",
                            descriptionCode: "এখানে Car ক্লাসটি একটি brand, model, এবং year ফিল্ড সহ একটি গাড়ির তথ্য ধারণ করে। displayInfo মেথডটি গাড়ির তথ্য প্রদর্শন করে। myCar অবজেক্টটি এই ক্লাসের একটি ইনস্ট্যান্স এবং এর মাধ্যমে গাড়ির তথ্য সেট এবং প্রদর্শন করা হয়েছে।"
                        },
                        {
                            title: "Class Method",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Calculator {\npublic:\n    int add(int a, int b) {\n        return a + b;\n    }\n\n    int subtract(int a, int b) {\n        return a - b;\n    }\n};\n\nint main() {\n    Calculator calc;\n    cout << \"Addition: \" << calc.add(5, 3) << endl;\n    cout << \"Subtraction: \" << calc.subtract(5, 3) << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে Calculator ক্লাসটি add এবং subtract নামক দুটি মেথড ধারণ করে। এই মেথডগুলি দুটি সংখ্যা যোগ এবং বিয়োগ করতে ব্যবহৃত হয়। calc অবজেক্টের মাধ্যমে এই মেথডগুলি কল করা হয়েছে।"
                        },
                        {
                            title: "Constructor",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Rectangle {\npublic:\n    int width, height;\n\n    // Constructor\n    Rectangle(int w, int h) : width(w), height(h) {}\n\n    int area() {\n        return width * height;\n    }\n};\n\nint main() {\n    Rectangle rect(10, 5);\n    cout << \"Area of rectangle: \" << rect.area() << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে Rectangle ক্লাসটি একটি কনস্ট্রাক্টর ধারণ করে যা width এবং height ইনিশিয়ালাইজ করে। area মেথডটি আয়তনের হিসাব করে। rect অবজেক্ট তৈরি করার সময় কনস্ট্রাক্টরের মাধ্যমে আয়তক্ষেত্রের আকার সেট করা হয়েছে।"
                        },
                        {
                            title: "Access Modifiers",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\npublic:\n    void setName(string n) {\n        name = n;\n    }\n    \n    void displayName() {\n        cout << \"Name: \" << name << endl;\n    }\n};\n\nint main() {\n    Person person;\n    person.setName(\"Alice\");\n    person.displayName();\n    return 0;\n}",
                            descriptionCode: "এখানে Person ক্লাসের name ভেরিয়েবলটি private হিসেবে সেট করা হয়েছে, যার মানে এটি ক্লাসের বাইরে থেকে অ্যাক্সেস করা যাবে না। setName এবং displayName মেথডগুলি name পরিবর্তন এবং প্রদর্শন করতে ব্যবহৃত হয়।"
                        }
                    ]
                }
            ],
        },
        {
            id: 6,
            value: "Encapsulation",
            link: "/encapsulation",
            lecture: [
                {
                    title: "Introduction to Encapsulation : ",
                    description: "Encapsulation একটি OOP কৌশল যা Data hide এবং controlled অ্যাক্সেসের মাধ্যমে অবজেক্টের অভ্যন্তরীণ অবস্থান রক্ষা করে। এটি ক্লাসের ডেটা মেম্বার এবং মেথডগুলি প্রাইভেট করে রাখে এবং পাবলিক মেথডগুলির মাধ্যমে এক্সেসের অনুমতি দেয়।",
                    minTitle: [
                        {
                            title: "Basic Encapsulation",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Account {\nprivate:\n    double balance;\n\npublic:\n    void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n\n    double getBalance() {\n        return balance;\n    }\n};\n\nint main() {\n    Account acc;\n    acc.deposit(1000);\n    cout << \"Balance: $\" << acc.getBalance() << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে Account ক্লাসের balance ভেরিয়েবলটি private এবং শুধুমাত্র deposit এবং getBalance মেথডের মাধ্যমে অ্যাক্সেসযোগ্য। এটি ডেটা সুরক্ষা নিশ্চিত করে এবং অবৈধ অ্যাক্সেস রোধ করে।"
                        },
                        {
                            title: "Encapsulation with Getters and Setters",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\n\npublic:\n    void setName(string n) {\n        name = n;\n    }\n\n    string getName() {\n        return name;\n    }\n};\n\nint main() {\n    Person person;\n    person.setName(\"John Doe\");\n    cout << \"Name: \" << person.getName() << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে Person ক্লাসের name প্রপার্টি private এবং setName এবং getName মেথডের মাধ্যমে সেট এবং রিট্রিভ করা হয়। এটি তথ্য প্রাইভেসি রক্ষা করে।"
                        },
                        {
                            title: "Encapsulation in a Banking System",
                            code: "#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\n\npublic:\n    BankAccount(double initialBalance) {\n        if (initialBalance > 0) {\n            balance = initialBalance;\n        }\n    }\n\n    void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n\n    void withdraw(double amount) {\n        if (amount > 0 && amount <= balance) {\n            balance -= amount;\n        }\n    }\n\n    double getBalance() {\n        return balance;\n    }\n};\n\nint main() {\n    BankAccount acc(500);\n    acc.deposit(150);\n    acc.withdraw(100);\n    cout << \"Balance: $\" << acc.getBalance() << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে BankAccount ক্লাসটি ডিপোজিট এবং উইথড্র মেথডের মাধ্যমে ব্যালেন্স পরিচালনা করে। এটি ডেটা অ্যাক্সেস নিয়ন্ত্রণ করে এবং অ্যাক্সেসেবল পাবলিক মেথডের মাধ্যমে অ্যাক্সেস দেয়।"
                        },
                        {
                            title: "Encapsulation with Validation",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Student {\nprivate:\n    int age;\n\npublic:\n    void setAge(int a) {\n        if (a > 0 && a < 120) {\n            age = a;\n        } else {\n            cout << \"Invalid age\" << endl;\n        }\n    }\n\n    int getAge() {\n        return age;\n    }\n};\n\nint main() {\n    Student student;\n    student.setAge(20);\n    cout << \"Age: \" << student.getAge() << endl;\n    student.setAge(150); // Invalid age\n    return 0;\n}",
                            descriptionCode: "এখানে Student ক্লাসটি age প্রপার্টি সঠিকভাবে ইনিশিয়ালাইজ করার জন্য ভ্যালিডেশন প্রয়োগ করে। এটি নিশ্চিত করে যে age সঠিক সীমার মধ্যে আছে।"
                        },
                        {
                            title: "Encapsulation with Inheritance",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Shape {\nprivate:\n    string color;\n\npublic:\n    void setColor(string c) {\n        color = c;\n    }\n\n    string getColor() {\n        return color;\n    }\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n\npublic:\n    void setRadius(double r) {\n        radius = r;\n    }\n\n    double getRadius() {\n        return radius;\n    }\n\n    double calculateArea() {\n        return 3.14 * radius * radius;\n    }\n};\n\nint main() {\n    Circle circle;\n    circle.setColor(\"Red\");\n    circle.setRadius(5.0);\n    cout << \"Color: \" << circle.getColor() << endl;\n    cout << \"Radius: \" << circle.getRadius() << endl;\n    cout << \"Area: \" << circle.calculateArea() << endl;\n    return 0;\n}",
                            descriptionCode: "এখানে Shape ক্লাসের color প্রপার্টি ইনহেরিটেন্সের মাধ্যমে Circle ক্লাসে ব্যবহৃত হচ্ছে। Circle ক্লাসের setRadius, getRadius, এবং calculateArea মেথডগুলি ব্যবহার করে চক্রের বৈশিষ্ট্যগুলি সেট এবং রিট্রিভ করা হচ্ছে।"
                        }
                    ]
                }
            ],
        },
        {
            id: 7,
            value: "Inheritance",
            link: "/inheritance",
            lecture: [
                {
                    title: "Introduction to Inheritance : ",
                    description: "Inheritance হলো একটি OOP কৌশল যা একটি ক্লাসকে অন্য ক্লাসের বৈশিষ্ট্য এবং আচরণ পুনঃব্যবহার করার সুযোগ দেয়। একটি বেস ক্লাস এবং একটি বা একাধিক ডেরাইভড ক্লাস থাকে। এটি কোড পুনরাবৃত্তি কমায় এবং ক্লাসের মধ্যে সম্পর্ক তৈরি করে।",
                    minTitle: [
                        {
                            title: "Basic Inheritance",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void eat() {\n        cout << \"Animal eats food\" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << \"Dog barks\" << endl;\n    }\n};\n\nint main() {\n    Dog dog;\n    dog.eat();  // Inherited method\n    dog.bark(); // Derived class method\n    return 0;\n}",
                            descriptionCode: "এখানে Dog ক্লাসটি Animal ক্লাস থেকে ইনহেরিট করেছে। Dog ক্লাসের একটি eat মেথড আছে যা Animal ক্লাস থেকে ইনহেরিটেড।"
                        },
                        {
                            title: "Inheritance with Constructor",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Vehicle {\npublic:\n    Vehicle(string b) : brand(b) {}\n    void showBrand() {\n        cout << \"Brand: \" << brand << endl;\n    }\nprivate:\n    string brand;\n};\n\nclass Car : public Vehicle {\npublic:\n    Car(string b, int y) : Vehicle(b), year(y) {}\n    void showDetails() {\n        showBrand();\n        cout << \"Year: \" << year << endl;\n    }\nprivate:\n    int year;\n};\n\nint main() {\n    Car car(\"Toyota\", 2020);\n    car.showDetails();\n    return 0;\n}",
                            descriptionCode: "এখানে Car ক্লাসটি Vehicle ক্লাস থেকে ইনহেরিট করেছে এবং Vehicle ক্লাসের কনস্ট্রাক্টর ব্যবহার করেছে। Car ক্লাসের কনস্ট্রাক্টর Vehicle ক্লাসের কনস্ট্রাক্টরকে কল করে।"
                        },
                        {
                            title: "Inheritance with Method Overriding",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() {\n        cout << \"Drawing Shape\" << endl;\n    }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        cout << \"Drawing Circle\" << endl;\n    }\n};\n\nint main() {\n    Shape* shape;\n    Circle circle;\n    shape = &circle;\n    shape->draw();  // Calls Circle's draw method\n    return 0;\n}",
                            descriptionCode: "এখানে Circle ক্লাসটি Shape ক্লাসের draw মেথডটি ওভাররাইড করেছে। Shape ক্লাসের পয়েন্টার ব্যবহার করে draw মেথড কল করা হলে Circle ক্লাসের draw মেথডটি কল হবে।"
                        },
                        {
                            title: "Inheritance with Protected Access Modifier",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Base {\nprotected:\n    int protectedValue;\npublic:\n    Base() : protectedValue(10) {}\n};\n\nclass Derived : public Base {\npublic:\n    void showValue() {\n        cout << \"Protected value: \" << protectedValue << endl;\n    }\n};\n\nint main() {\n    Derived obj;\n    obj.showValue();\n    return 0;\n}",
                            descriptionCode: "এখানে Base ক্লাসের protectedValue প্রপার্টি protected এক্সেস মোডিফায়ার দিয়ে সজ্জিত এবং Derived ক্লাসের মাধ্যমে অ্যাক্সেস করা হয়েছে। Derived ক্লাসের showValue মেথড ব্যবহার করে এর মান প্রদর্শিত হচ্ছে।"
                        },
                        {
                            title: "Multi-level Inheritance",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void eat() {\n        cout << \"Animal eats\" << endl;\n    }\n};\n\nclass Mammal : public Animal {\npublic:\n    void breathe() {\n        cout << \"Mammal breathes\" << endl;\n    }\n};\n\nclass Dog : public Mammal {\npublic:\n    void bark() {\n        cout << \"Dog barks\" << endl;\n    }\n};\n\nint main() {\n    Dog dog;\n    dog.eat();    // From Animal\n    dog.breathe(); // From Mammal\n    dog.bark();   // Own method\n    return 0;\n}",
                            descriptionCode: "এখানে Dog ক্লাসটি Mammal ক্লাসের মাধ্যমে Animal ক্লাস থেকে বৈশিষ্ট্য গ্রহণ করেছে। এটি মাল্টি-লেভেল ইনহেরিটেন্স প্রদর্শন করে যেখানে Dog ক্লাস Animal এবং Mammal ক্লাসের বৈশিষ্ট্যসমূহ ধারণ করে।"
                        },
                        {
                            title: "Hierarchical Inheritance",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    void draw() {\n        cout << \"Drawing Shape\" << endl;\n    }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() {\n        cout << \"Drawing Circle\" << endl;\n    }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() {\n        cout << \"Drawing Square\" << endl;\n    }\n};\n\nint main() {\n    Circle circle;\n    Square square;\n    circle.draw();  // Draws Circle\n    square.draw();  // Draws Square\n    return 0;\n}",
                            descriptionCode: "এখানে Circle এবং Square ক্লাসগুলি Shape ক্লাস থেকে ইনহেরিট করেছে। এটি হায়ারার্কিকাল ইনহেরিটেন্স প্রদর্শন করে যেখানে একাধিক ক্লাস একটি সাধারণ বেস ক্লাস থেকে ইনহেরিট করে।"
                        },
                        {
                            title: "Multiple Inheritance",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Base1 {\npublic:\n    void showBase1() {\n        cout << \"Base1 class\" << endl;\n    }\n};\n\nclass Base2 {\npublic:\n    void showBase2() {\n        cout << \"Base2 class\" << endl;\n    }\n};\n\nclass Derived : public Base1, public Base2 {\npublic:\n    void showDerived() {\n        cout << \"Derived class\" << endl;\n    }\n};\n\nint main() {\n    Derived obj;\n    obj.showBase1();\n    obj.showBase2();\n    obj.showDerived();\n    return 0;\n}",
                            descriptionCode: "এখানে Derived ক্লাসটি Base1 এবং Base2 ক্লাস থেকে ইনহেরিট করেছে। এটি মাল্টিপল ইনহেরিটেন্স প্রদর্শন করে যেখানে একটি ক্লাস একাধিক বেস ক্লাস থেকে বৈশিষ্ট্য গ্রহণ করে।"
                        }
                    ]
                }
            ],
        },
        {
            id: 8,
            value: "Polymorphism",
            link: "/polymorphism",
            lecture: [
                {
                    title: "Introduction to Polymorphism : ",
                    description: "Polymorphism হলো একটি OOP কৌশল যা একই নামে বিভিন্ন কার্যকারিতা প্রদর্শন করতে দেয়। এটি মূলত দুই ধরনের হয়: Compile-time (স্ট্যাটিক) polymorphism এবং Run-time (ডাইনামিক) polymorphism।",
                    minTitle: [
                        {
                            title: "Compile-time Polymorphism (Function Overloading)",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Printer {\npublic:\n    void print(int i) {\n        cout << \"Printing int: \" << i << endl;\n    }\n\n    void print(double d) {\n        cout << \"Printing double: \" << d << endl;\n    }\n\n    void print(string s) {\n        cout << \"Printing string: \" << s << endl;\n    }\n};\n\nint main() {\n    Printer printer;\n    printer.print(5);        // Calls print(int)\n    printer.print(3.14);     // Calls print(double)\n    printer.print(\"Hello\");  // Calls print(string)\n    return 0;\n}",
                            descriptionCode: "এখানে Printer ক্লাসে একই নামের বিভিন্ন মেথড আছে কিন্তু তাদের প্যারামিটার ভিন্ন। এটি compile-time polymorphism (ফাংশন ওভারলোডিং) প্রদর্শন করে।"
                        },
                        {
                            title: "Run-time Polymorphism (Method Overriding)",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show(int i) {\n        cout << \"Base class show method with int: \" << i << endl;\n    }\n\n    virtual void show(double d) {\n        cout << \"Base class show method with double: \" << d << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void show(int i) override {\n        cout << \"Derived class show method with int: \" << i << endl;\n    }\n\n    void show(double d) override {\n        cout << \"Derived class show method with double: \" << d << endl;\n    }\n};\n\nint main() {\n    Base* basePtr;\n    Derived derived;\n    basePtr = &derived;\n    basePtr->show(5);        // Calls Derived's show method with int\n    basePtr->show(3.14);     // Calls Derived's show method with double\n    return 0;\n}",
                            descriptionCode: "এখানে Base ক্লাসের show মেথডগুলি ওভারলোড করা হয়েছে এবং Derived ক্লাসে এই মেথডগুলি ওভাররাইড করা হয়েছে। Base ক্লাসের পয়েন্টার দিয়ে Derived ক্লাসের মেথড কল করা হচ্ছে যা run-time polymorphism প্রদর্শন করে।"
                        },
                        {
                            title: "Compile-time Polymorphism (Operator Overloading)",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    float real;\n    float imag;\npublic:\n    Complex() : real(0), imag(0) {}\n    Complex(float r, float i) : real(r), imag(i) {}\n\n    Complex operator + (const Complex& c) {\n        return Complex(real + c.real, imag + c.imag);\n    }\n\n    void display() {\n        cout << real << \" + \" << imag << \"i\" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3.5, 2.5), c2(1.5, 4.5);\n    Complex c3 = c1 + c2;  // Uses overloaded + operator\n    c3.display();\n    return 0;\n}",
                            descriptionCode: "এখানে Complex ক্লাসে + অপারেটর ওভারলোড করা হয়েছে। দুটি Complex অবজেক্ট যোগ করার সময় এই ওভারলোড করা অপারেটর ব্যবহার করা হয়।"
                        },
                        {
                            title: "Run-time Polymorphism (Virtual Destructor)",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual ~Base() {\n        cout << \"Base destructor called\" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    ~Derived() {\n        cout << \"Derived destructor called\" << endl;\n    }\n};\n\nint main() {\n    Base* basePtr = new Derived();\n    delete basePtr;  // Calls Derived's destructor\n    return 0;\n}",
                            descriptionCode: "এখানে Base ক্লাসের ডেস্ট্রাক্টরটি virtual ঘোষণা করা হয়েছে। এটি run-time polymorphism প্রদর্শন করে যেখানে Derived ক্লাসের ডেস্ট্রাক্টর কল হবে যখন Base ক্লাসের পয়েন্টার দিয়ে Derived অবজেক্ট ডিলিট করা হবে।"
                        },
                        {
                            title: "Multiple Polymorphism (Combination of Overloading and Overriding)",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void display(int i) {\n        cout << \"Base class display with int: \" << i << endl;\n    }\n\n    virtual void display(double d) {\n        cout << \"Base class display with double: \" << d << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void display(int i) override {\n        cout << \"Derived class display with int: \" << i << endl;\n    }\n\n    void display(double d) override {\n        cout << \"Derived class display with double: \" << d << endl;\n    }\n};\n\nint main() {\n    Base* basePtr;\n    Derived derived;\n    basePtr = &derived;\n    basePtr->display(5);        // Calls Derived's display(int)\n    basePtr->display(3.14);     // Calls Derived's display(double)\n    return 0;\n}",
                            descriptionCode: "এখানে Base ক্লাসের display মেথডগুলি ওভারলোড করা হয়েছে এবং Derived ক্লাসে এই মেথডগুলি ওভাররাইড করা হয়েছে। Base ক্লাসের পয়েন্টার দিয়ে Derived ক্লাসের মেথড কল করা হচ্ছে।"
                        }
                    ]
                }
            ],
        },
        {
            id: 9,
            value: "Abstraction",
            link: "/abstraction",
            lecture: [
                {
                    title: "Introduction to Abstraction : ",
                    description: "Abstraction হলো একটি OOP কৌশল যা বেসিক বা গুরুত্বপূর্ণ বৈশিষ্ট্যগুলি হাইলাইট করতে সহায়ক এবং অপ্রয়োজনীয় বা পুনরাবৃত্ত বৈশিষ্ট্যগুলি লুকায়। এটি মূলত দুটি অংশে বিভক্ত: abstract classes এবং interfaces।",
                    minTitle: [
                        {
                            title: "Abstract Class",
                            code: "#include <iostream>\nusing namespace std;\n\nclass AbstractClass {\npublic:\n    virtual void display() = 0; // Pure virtual function\n};\n\nint main() {\n    // AbstractClass obj; // Error: Cannot instantiate abstract class\n    return 0;\n}",
                            descriptionCode: "এখানে AbstractClass একটি বিমূর্ত ক্লাস যা একটি শুদ্ধ ভার্চুয়াল ফাংশন display ধারণ করে। এই ক্লাসের সরাসরি উদাহরণ তৈরি করা যায় না।"
                        },
                        {
                            title: "Abstract Method",
                            code: "#include <iostream>\nusing namespace std;\n\nclass AbstractClass {\npublic:\n    virtual void show() = 0; // Abstract method\n};\n\nclass ConcreteClass : public AbstractClass {\npublic:\n    void show() override {\n        cout << \"Concrete implementation of show()\" << endl;\n    }\n};\n\nint main() {\n    ConcreteClass obj;\n    obj.show();\n    return 0;\n}",
                            descriptionCode: "এখানে AbstractClass একটি বিমূর্ত মেথড show ধারণ করে এবং ConcreteClass এই মেথডের বাস্তবায়ন প্রদান করে।"
                        },
                        {
                            title: "Concrete Class Implementing Abstract Class",
                            code: "#include <iostream>\nusing namespace std;\n\nclass AbstractClass {\npublic:\n    virtual void show() = 0; // Pure virtual function\n};\n\nclass ConcreteClass : public AbstractClass {\npublic:\n    void show() override {\n        cout << \"ConcreteClass implementation of show()\" << endl;\n    }\n};\n\nint main() {\n    AbstractClass* obj = new ConcreteClass();\n    obj->show();\n    delete obj;\n    return 0;\n}",
                            descriptionCode: "এখানে ConcreteClass AbstractClass কে বাস্তবায়িত করেছে এবং AbstractClass পয়েন্টার দিয়ে ConcreteClass ক্লাসের অবজেক্টকে ব্যবহার করা হয়েছে।"
                        },
                        {
                            title: "Abstraction with Interface",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Interface {\npublic:\n    virtual void method() = 0; // Pure virtual function\n};\n\nclass Implementation : public Interface {\npublic:\n    void method() override {\n        cout << \"Implementation of method()\" << endl;\n    }\n};\n\nint main() {\n    Interface* obj = new Implementation();\n    obj->method();\n    delete obj;\n    return 0;\n}",
                            descriptionCode: "এখানে Interface একটি বিমূর্ত ক্লাস হিসাবে কাজ করছে, যা একটি শুদ্ধ ভার্চুয়াল ফাংশন ধারণ করে। Implementation ক্লাস এই ইন্টারফেসের বাস্তবায়ন প্রদান করে।"
                        },
                        {
                            title: "Abstract Class with Multiple Inheritance",
                            code: "#include <iostream>\nusing namespace std;\n\nclass Abstract1 {\npublic:\n    virtual void method1() = 0; // Pure virtual function\n};\n\nclass Abstract2 {\npublic:\n    virtual void method2() = 0; // Pure virtual function\n};\n\nclass ConcreteClass : public Abstract1, public Abstract2 {\npublic:\n    void method1() override {\n        cout << \"Implementation of method1()\" << endl;\n    }\n\n    void method2() override {\n        cout << \"Implementation of method2()\" << endl;\n    }\n};\n\nint main() {\n    ConcreteClass obj;\n    obj.method1();\n    obj.method2();\n    return 0;\n}",
                            descriptionCode: "এখানে ConcreteClass দুইটি বিমূর্ত ক্লাস (Abstract1 এবং Abstract2) কে বাস্তবায়ন করেছে। এই উদাহরণটি মাল্টিপল ইনহেরিটেন্সের মাধ্যমে বিমূর্ততার প্রদর্শন করে।"
                        }
                    ]
                }

            ],
        },
    ],

}

export default learningJsonConfig;