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
        {linkTag : "/learn/Javascrip/basic"}
    ],
    array:[
        {
            title: "Array : ",
            description: " একই ডেটা টাইপের একাধিক মান সংরক্ষণের জন্য array ব্যবহার করা হয়। জাভাস্ক্রিপ্টে অ্যারে তৈরির জন্য [] ব্র্যাকেট ব্যবহার করা হয়।",
            example:[
                {code : "let numbers = [2, 3, 4, 5]; // এখানে [] ব্র্যাকেটের মধ্যে একটি অ্যারে তৈরি করা হয়েছে\n" +
                        "// অ্যারে তৈরির সময় [] ব্র্যাকেট ব্যবহার করে মানগুলি কমা দ্বারা পৃথক করা হয় এবং অ্যারের মধ্যে সেগুলি রাখা হয়।\n" +
                        "\n" +
                        "// এছাড়াও, অ্যারে বিভিন্ন ডেটা টাইপের মান ধারণ করতে পারে:\n" +
                        "let mixedArray = [1, 'hello', true, null];"},
                {code : "const cars = [];\n" +
                        "cars[0] = \"Saab\";\n" +
                        "cars[1] = \"Volvo\";\n" +
                        "cars[2] = \"BMW\";" }
            ],
        },
        {
            title: "Array methods : ",
            minTitle:[
                {
                    title: "array.length ",
                    description: "// return length of array",
                    code:"let fruits = ['apple', 'banana', 'mango'];\n" +
                        "console.log(fruits.length); // আউটপুট: 3",
                },
                {
                    title: "array.toString() ",
                    description: "// মেথডটি array কে একটি string এ রূপান্তর করে, যেখানে প্রতিটি এলিমেন্ট কমা দিয়ে আলাদা করা থাকে।",
                    code:"let fruits = ['apple', 'banana', 'mango'];\n" +
                        "console.log(fruits.toString()); // আউটপুট: apple,banana,mango",
                },
                {
                    title: "array.at() ",
                    description: "// মেথডটি array এর নির্দিষ্ট পজিশনের এলিমেন্ট রিটার্ন করে। পজিটিভ এবং নেগেটিভ উভয় ইনডেক্স ব্যবহার করা যায়। নেগেটিভ ইনডেক্স array এর শেষ থেকে গোনা হয়।",
                    code:"let fruits = ['apple', 'banana', 'mango'];\n" +
                        "console.log(fruits.at(1)); // আউটপুট: 'banana'\n" +
                        "console.log(fruits.at(-1)); // আউটপুট: 'mango'",
                },
                {
                    title: "array.join()",
                    description: "// মেথডটি array এর সব এলিমেন্টগুলিকে একটি string এ রূপান্তর করে এবং একটি নির্দিষ্ট separator (যেমন, কমা, স্পেস) ব্যবহার করে তাদের সংযুক্ত করে।",
                    code:"let fruits = ['apple', 'banana', 'mango'];\n" +
                        "console.log(fruits.join(', ')); // আউটপুট: 'apple, banana, mango'\n" +
                        "console.log(fruits.join(' - ')); // আউটপুট: 'apple - banana - mango'",
                },
                {
                    title: "array.push() ",
                    description: "// মেথডটি একটি array এর শেষে একটি বা একাধিক এলিমেন্ট যোগ করে এবং নতুন array এর length রিটার্ন করে।",
                    code:"let fruits = ['apple', 'banana'];\n" +
                        "fruits.push('mango');\n" +
                        "console.log(fruits); // আউটপুট: ['apple', 'banana', 'mango']\n" +
                        "let newLength = fruits.push('orange');\n" +
                        "console.log(newLength); // আউটপুট: 4",
                },
                {
                    title: "array.pop()  ",
                    description: "// মেথডটি একটি array এর শেষ এলিমেন্টটি সরিয়ে ফেলে এবং সেই সরানো এলিমেন্টটি রিটার্ন করে।",
                    code:"let fruits = ['apple', 'banana', 'mango'];\n" +
                        "let lastFruit = fruits.pop();\n" +
                        "console.log(lastFruit); // আউটপুট: 'mango'\n" +
                        "console.log(fruits); // আউটপুট: ['apple', 'banana']",
                },
            ]
        },
        {
            title: "Search methods : ",
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
            title: "Sort methods : ",
            minTitle: [
                {
                    title: "array.sort() ",
                    description:   "// Array এর এলিমেন্টগুলোকে alphabetically বা numerically sort করে।",
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
            title: "Iteration methods : ",
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
            tags:[
                "Javascript ",
                "array",
                "DSA",
                "JS ",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/array"}
    ],

    setMat:[
        {
            title:"Set : ",
            description: "জাভাস্ক্রিপ্টের Set একটি ডেটা স্ট্রাকচার যা ইউনিক value store করে। ",
            example:[
                {
                    code: "let numbers = new Set([1, 2, 3, 4]);\n" +
                        "console.log(numbers); // Set {1, 2, 3, 4}"
                },
            ]
        },
        {
            title: "Set Methods : ",
            minTitle:[
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
            title: "Map Methods : ",
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
            tags:[
                "Javascript ",
                "DSA ",
                "Set Map ",
                "JS ",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/set&map"}
    ],

    object:[
        {
            title: "Object : ",
            description: " জাভাস্ক্রিপ্টে object হল একটি data structure যা key-value pair আকারে তথ্য সংরক্ষণ করে। প্রতিটি key কে property বলা হয় এবং তার corresponding value কে বলা হয় value।\n",
            example:[
                {
                    code:"const person = {\n" +
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
            minTitle:[
                {
                    title: "Accessing Object Properties ",
                    code:"console.log(person.firstName); // Output: John\n" +
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
                },{

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
            code:"firstName: John\n" +
                "lastName: Doe\n" +
                "age: 31\n" +
                "email: john.doe@example.com"
        },
        {
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "Object",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/object"}
    ],

    number:[
        {
            title:" Number Operations : ",
            description:"JavaScript-এ Number টাইপের Data নিয়ে বিভিন্ন ধরনের অপারেশন করা যায়। ",
        },
        {
            title: " Number Properties : ",
            description:"JavaScript-এর Number এর কিছু property আছে, যেমন MAX_VALUE, MIN_VALUE, NaN ইত্যাদি।",
            code:"console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308\n" +
                "console.log(Number.MIN_VALUE); // Output: 5e-324\n" +
                "console.log(Number.NaN); // Output: NaN (Not a Number)"
        },
        {
            title: "Number Methods : ",
            description: "JavaScript-এ Number-এর জন্য অনেক গুলো মেথড আছে। নিচে কিছু উল্লেখযোগ্য মেথডের উদাহরণ দেওয়া হলো : ",
            minTitle:[
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
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "Number",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/number"}
    ],

    string: [
        {
            title: "String Operations : ",
            description: " JavaScript-এ বিভিন্ন স্ট্রিং অপারেশন করা যায় যা ডাটা ম্যানিপুলেশনে অনেক কাজে আসে।"
        },
        {
            title: "String Methods : ",
            minTitle:[
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
                    code:"let text = \"Hello, World!\";\n" +
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
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "String",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/string"}
    ],

    condition:[
        {
            title: "Condition : ",
            description: "জাভাস্ক্রিপ্টে শর্ত বা condition ব্যবহারের মাধ্যমে আমরা একটি নির্দিষ্ট শর্ত পূরণ হলে নির্দিষ্ট কাজ করতে পারি।",
            minTitle:[
                {
                    title: "if(condition) ",
                    description: "যদি শর্তটি সত্য হয়, তাহলে একটি কোড ব্লক চালানো হবে, আর যদি মিথ্যা হয়, তাহলে অন্য কোড ব্লকটি চালানো হবে।",
                    code:"let age = 18;\n" +
                        "if (age >= 18) {\n" +
                        "  console.log(\"You are eligible to vote.\");\n" +
                        "}\n" +
                        "// Output: \"You are eligible to vote.\""
                },
                {
                    title: "else",
                    code:"let age = 16;\n" +
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
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "Condition",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/condition"}
    ],

    loop:[
        {
            title: "Loop : ",
            description: "জাভাস্ক্রিপ্টে loops ব্যবহারের মাধ্যমে আমরা একটি কাজকে বারবার নির্দিষ্ট সংখ্যক বার চালাতে পারি।",
            minTitle:[
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
                    description:   "for...of loop একটি iterable object যেমন array এর প্রতিটি এলিমেন্টের জন্য কোড ব্লক চালায়।",
                    code : "let numbers = [10, 20, 30];\n" +
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
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "Loop",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/loop"}
    ],

    bitwise:[
        {
            title: "Bitwise Operators (বিটওয়াইজ অপারেটর) : ",
            description: "বিটওয়াইজ অপারেটরগুলো সংখ্যার বিটের উপর কাজ করে। জাভাস্ক্রিপ্টে বিভিন্ন বিটওয়াইজ অপারেটর ব্যবহার করা হয় ",
            minTitle:[
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
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "Bitwise",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/bitwise"}
    ],

    events:[
        {
            title:"JavaScript Events : ",
            description: "জাভাস্ক্রিপ্ট ইভেন্ট হল কোনো নির্দিষ্ট ঘটনার প্রতিক্রিয়া জানাতে ব্যবহৃত একটি উপায়। উদাহরণস্বরূপ, একটি বাটন ক্লিক করলে, একটি ইমেজ লোড হলে, বা একটি কীবোর্ড কী চাপলে একটি ইভেন্ট ঘটে।",
            minTitle:[
                {
                    title:"Click Event ",
                    description: "Click ইভেন্ট তখন ঘটে যখন User কোনো HTML এলিমেন্টের উপর ক্লিক করে।",
                    code:"<button onclick=\"alert('Button clicked!')\">Click Me</button>\n" +
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
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "Events",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/events"}
    ],

    scopeHoisting:[
        {
            title:"Scope (স্কোপ) : ",
            description: "স্কোপ হলো একটি ভেরিয়েবল বা ফাংশনের পরিসর যেখানে তা দৃশ্যমান এবং ব্যবহার করা যেতে পারে। জাভাস্ক্রিপ্টে মূলত দুই ধরনের স্কোপ থাকে: লেক্সিকাল (বা ব্লক) স্কোপ এবং গ্লোবাল স্কোপ।",
            minTitle:[
                {
                    title: " Global Scope (গ্লোবাল স্কোপ) ",
                    description: "যেকোনো ভেরিয়েবল যা গ্লোবাল স্কোপে ডিফাইন করা হয়, তা পুরো প্রোগ্রাম জুড়ে অ্যাক্সেসযোগ্য থাকে।",
                    code:"let globalVar = \"I am global\";\n" +
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
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "Scope & Hoisting",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/scope&histing"}
    ],

    async:[
        {
            title: "Async and Await : ",
            description: "JavaScript-এ async এবং await কীওয়ার্ডগুলো ব্যবহার করে asynchronous কোড আরও সহজে লেখা যায়। এগুলো Promises এর সাথে কাজ করে এবং কোডকে synchronous কোডের মতোই পড়তে সহজ করে তোলে।",
            minTitle:[
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
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "Async Await",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/scope&histing"}
    ],

    json:[
        {
            title: "JSON (JavaScript Object Notation) : ",
            description: "JSON হল একটি লাইটওয়েট ডেটা ইন্টারচেঞ্জ ফরম্যাট যা মানুষের দ্বারা পড়তে সহজ এবং মেশিন দ্বারা পার্স করা সহজ। এটি সাধারণত অবজেক্ট এবং অ্যারে হিসেবে ডেটা উপস্থাপন করে।",
            minTitle:[
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
            tags:[
                "Javascript ",
                "JS ",
                "DSA",
                "JSON",
                "NodeJs ",
                "Programming ",
                "Web Development ",
            ]
        },
        {linkTag : "/learn/Javascrip/json"}
    ]

}

export default jsLanguageConfig;

