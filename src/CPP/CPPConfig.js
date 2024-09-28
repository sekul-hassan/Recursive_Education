
const CPPConfig = {
    basic:[
        {
            title:"Introduction to C++ ",
            description:"C++ একটি Powerful এবং Versatile প্রোগ্রামিং Language, যা Bjarne Stroustrup দ্বারা C ভাষার একটি এক্সটেনশন হিসেবে তৈরি করা হয়েছে। এটি procedural এবং object-oriented programming উভয়কেই সমর্থন করে, যা software development, game development এবং system/application software এর ক্ষেত্রে বহুল ব্যবহৃত হয়।",
        },
        {
            title: "Basic Syntax ",
            minTitle:[
                {
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
            title: "Introduction to C++ Data Types ",
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
            title: "Operators ",
            description: "Arithmetic Operators ",
            code: "int sum = 5 + 3;  // Addition\n" +
                "int diff = 5 - 3;  // Subtraction\n" +
                "int prod = 5 * 3;  // Multiplication\n" +
                "float quo = 5.0 / 3.0;  // Division",
            descriptionCode: "Arithmetic operators ব্যবহার করে গাণিতিক কাজ করা হয়। উদাহরণস্বরূপ, + যোগের জন্য, - বিয়োগের জন্য, * গুণের জন্য, এবং / ভাগের জন্য ব্যবহৃত হয়।",
        },
        {
            title: "Introduction to C++ Strings",
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
            title: "Introduction to C++ Math Functions",
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
    advance:[
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
    function:[
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
    recursion:[
        {
            title: "Introduction to Recursion",
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
    dsa: [
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
    oop:[
        {
            title: "Basic OOP Concepts",
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
    encapsulation: [
        {
            title: "Introduction to Encapsulation",
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
    inheritance:[
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
    polymorphism:[
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
    abstraction:[
        {
            title: "Introduction to Abstraction",
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

    ]
}

export default CPPConfig;