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

}

export default jsLanguageConfig;

