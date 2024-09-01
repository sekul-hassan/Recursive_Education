import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function CppBasic(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Introduction */}
            <h3 className="title mt-3">Introduction to C++</h3>
            <p className="globalDescription">
                C++ একটি Powerful এবং Versatile প্রোগ্রামিং Language, যা Bjarne Stroustrup দ্বারা C ভাষার একটি এক্সটেনশন
                হিসেবে তৈরি করা হয়েছে। এটি procedural এবং object-oriented programming উভয়কেই সমর্থন করে, যা software
                development, game development এবং system/application software এর ক্ষেত্রে বহুল ব্যবহৃত হয়।
            </p>

            {/* Basic Syntax */}
            <h3 className="title mt-3">Basic Syntax</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!"; // Prints Hello, World! to the console
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                উপরের উদাহরণে, <code>#include iostream</code> একটি প্রি-প্রসেসর ডিরেক্টিভ, যা standard input-output
                stream লাইব্রেরি ইনক্লুড করে। <code>main()</code> ফাংশনটি প্রতিটি C++ প্রোগ্রামের এন্ট্রি
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                পয়েন্ট। <code>cout</code> ব্যবহার করে কনসোলে ডেটা আউটপুট করা হয় এবং <code>//</code> ব্যবহার করে
                সিঙ্গেল-লাইন কমেন্ট তৈরি করা হয়।
            </p>

            {/* Comments in C++ */}
            <h3 className="title mt-3">Comments in C++</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`// This is a single-line comment
/* This is a 
   multi-line comment */`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                C++ প্রোগ্রামে, <code>//</code> দিয়ে সিঙ্গেল-লাইন কমেন্ট এবং <code> /* ... */</code> দিয়ে মাল্টি-লাইন
                কমেন্ট তৈরি করা হয়। কমেন্টগুলি কোডের মধ্যে নোট যোগ করতে এবং কোড ব্যাখ্যা করতে ব্যবহৃত হয়, যা
                প্রোগ্রামের কার্যকারিতা প্রভাবিত করে না।
            </p>

            {/* Output in C++ */}
            <h3 className="title mt-3">Output in C++</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int main() {
    cout << "This is an output example." << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                C++ এ, <code>cout</code> ব্যবহার করে আউটপুট প্রদর্শন করা হয়। উপরের
                উদাহরণে, <code>cout</code> এবং <code>endl</code> ব্যবহার করে স্ক্রিনে "This is an output example."
                প্রদর্শিত হবে। <code>endl</code> একটি নিউ লাইন তৈরি করে।
            </p>

            {/* Variables in C++ */}
            <h3 className="title mt-3">Variables in C++</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int main() {
    int myNumber = 10; // Integer variable
    double myFloat = 5.99; // Floating-point variable
    char myLetter = 'A'; // Character variable

    cout << "Integer: " << myNumber << endl;
    cout << "Floating-point: " << myFloat << endl;
    cout << "Character: " << myLetter << endl;

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                C++ এ, ভেরিয়েবলগুলি বিভিন্ন ধরনের ডেটা সংরক্ষণ করতে ব্যবহৃত হয়। উদাহরণস্বরূপ, <code>int</code> একটি
                পূর্ণসংখ্যা সংরক্ষণ করে, <code>double</code> দশমিক সংখ্যা সংরক্ষণ করে এবং <code>char</code> একটি অক্ষর
                সংরক্ষণ করে। উপরের উদাহরণে, <code>myNumber</code>, <code>myFloat</code>,
                এবং <code>myLetter</code> যথাক্রমে একটি পূর্ণসংখ্যা, দশমিক সংখ্যা, এবং একটি অক্ষর সংরক্ষণ করে
                এবং <code>cout</code> ব্যবহার করে এগুলি কনসোলে প্রদর্শিত হয়।
            </p>
            {/* User Input */}
            <h3 className="title mt-3">User Input</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

int main() {
    string userName;
    cout << "Enter your name: ";
    cin >> userName;
    cout << "Hello, " << userName << "!" << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                C++-এ user input নেওয়ার জন্য <code>cin</code> function ব্যবহার করা হয়। উপরের
                উদাহরণে, <code>userName</code> variable-এ user-এর নাম পড়া হয়েছে এবং <code>cout</code> এর মাধ্যমে
                স্বাগতম বার্তা প্রদর্শন করা হয়েছে।
            </p>

            {/* Data Types */}

            <h3 className="title mt-3">Introduction to C++ Data Types</h3>
            <p className="globalDescription">
                C++-এ বিভিন্ন ধরনের ডেটা সংরক্ষণ করতে বিভিন্ন প্রকারের ডেটা টাইপ ব্যবহৃত হয়। প্রতিটি ডেটা টাইপ
                নির্দিষ্ট ধরনের ডেটা সংরক্ষণ করতে সাহায্য করে এবং তাদের নিজস্ব বৈশিষ্ট্য থাকে।
            </p>

            {/* Integer */}
            <h3 className="title mt-3">Integer</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`int age = 25;`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>int</code> ডেটা টাইপ পূর্ণসংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়। যেমন, <code>age</code> ভেরিয়েবল একটি
                পূর্ণসংখ্যা 25 সংরক্ষণ করছে।
            </p>

            {/* Float */}
            <h3 className="title mt-3">Float</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`float height = 5.9;`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>float</code> ডেটা টাইপ দশমিক সংখ্যা সংরক্ষণ করে। উদাহরণস্বরূপ, <code>height</code> ভেরিয়েবল 5.9
                একটি floating-point সংখ্যা সংরক্ষণ করছে।
            </p>

            {/* Double */}
            <h3 className="title mt-3">Double</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`double pi = 3.14159;`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>double</code> ডেটা টাইপ আরও বেশি দশমিক সংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়।
                এটি <code>float</code> থেকে বেশি precision প্রদান করে। উদাহরণস্বরূপ, <code>pi</code> ভেরিয়েবল 3.14159
                একটি double precision সংখ্যা সংরক্ষণ করছে।
            </p>

            {/* Char */}
            <h3 className="title mt-3">Char</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`char grade = 'A';`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>char</code> ডেটা টাইপ একক অক্ষর সংরক্ষণ করতে ব্যবহৃত হয়। যেমন, <code>grade</code> ভেরিয়েবল 'A'
                একটি চরিত্র সংরক্ষণ করছে।
            </p>

            {/* String */}
            <h3 className="title mt-3">String</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`string name = "Alice";`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>string</code> ডেটা টাইপ একটি বা একাধিক অক্ষরের একটি সিকোয়েন্স সংরক্ষণ করতে ব্যবহৃত হয়।
                উদাহরণস্বরূপ, <code>name</code> ভেরিয়েবল "Alice" একটি string সংরক্ষণ করছে।
            </p>

            {/* Boolean */}
            <h3 className="title mt-3">Boolean</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`bool isAdult = true;`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>bool</code> ডেটা টাইপ দুটি মান নিতে পারে: <code>true</code> অথবা <code>false</code>।
                যেমন, <code>isAdult</code> ভেরিয়েবল <code>true</code> মান সংরক্ষণ করছে।
            </p>

            {/* Void */}
            <h3 className="title mt-3">Void</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`void display() {
    // Function does not return any value
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>void</code> ডেটা টাইপ কোনও মান সংরক্ষণ করে না এবং এটি সাধারণত ফাংশনের রিটার্ন টাইপ হিসেবে ব্যবহৃত
                হয় যখন ফাংশন কোন মান রিটার্ন করে না।
            </p>

            {/* Unsigned Types */}
            <h3 className="title mt-3">Unsigned Types</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`unsigned int positiveNumber = 100;`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>unsigned</code> ডেটা টাইপ শুধুমাত্র ধনাত্মক সংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়
                এবং <code>int</code> ডেটা টাইপের সাথে ব্যবহৃত হয় যা ঋণাত্মক সংখ্যা ধারণ করতে পারে।
            </p>

            {/* Long */}
            <h3 className="title mt-3">Long</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`long largeNumber = 100000;`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>long</code> ডেটা টাইপ বড় আকারের পূর্ণসংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়। এটি <code>int</code> থেকে বড়
                পরিসরের সংখ্যা ধারণ করতে সক্ষম।
            </p>

            {/* Long Long */}
            <h3 className="title mt-3">Long Long</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`long long veryLargeNumber = 10000000000;`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>long long</code> ডেটা টাইপ অত্যন্ত বড় পূর্ণসংখ্যা সংরক্ষণ করতে ব্যবহৃত হয়,
                যা <code>long</code> থেকে বড় পরিসরের সংখ্যা ধারণ করতে পারে।
            </p>

            {/* Operators */}
            <h3 className="title mt-3">Operators</h3>
            <h5 className="globalSubTitle">Arithmetic Operators</h5>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`int sum = 5 + 3;  // Addition
int diff = 5 - 3;  // Subtraction
int prod = 5 * 3;  // Multiplication
float quo = 5.0 / 3.0;  // Division`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                Arithmetic operators ব্যবহার করে গাণিতিক কাজ করা হয়। উদাহরণস্বরূপ, <code>+</code> যোগের
                জন্য, <code>-</code> বিয়োগের জন্য, <code>*</code> গুণের জন্য, এবং <code>/</code> ভাগের জন্য ব্যবহৃত
                হয়।
            </p>

            {/* Strings */}
            <h3 className="title mt-3">Introduction to C++ Strings</h3>
            <p className="globalDescription">
                C++-এ স্ট্রিং হ্যান্ডল করার জন্য প্রধানত তিনটি ধরনের স্ট্রিং ব্যবহৃত হয়: C স্টাইল স্ট্রিং, C++ স্ট্রিং,
                এবং স্ট্রিং লিটারেল। এই স্ট্রিং টাইপগুলি বিভিন্ন পরিস্থিতিতে ব্যবহৃত হয় এবং বিভিন্ন বৈশিষ্ট্য প্রদান
                করে।
            </p>

            {/* C-Style Strings */}
            <h3 className="title mt-3">C-Style Strings</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

int main() {
    const char* cString = "Hello, World!";
    std::cout << "C-Style String: " << cString << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                C-Style স্ট্রিং হলো ক্যারেক্টার অ্যারে যা একটি null টার্মিনেটর ('\\0') দিয়ে শেষ হয়। উপরের
                উদাহরণে, <code>cString</code> একটি C-Style স্ট্রিং যা "Hello, World!" ধারণ করে এবং
                এটি <code>std::cout</code> ব্যবহার করে আউটপুট করা হয়েছে।
            </p>

            {/* C++ String Class */}
            <h3 className="title mt-3">C++ String Class</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <string>

int main() {
    std::string cppString = "Hello, C++!";
    std::cout << "C++ String: " << cppString << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                C++ স্ট্রিং ক্লাস <code>std::string</code> ব্যবহার করে স্ট্রিং হ্যান্ডল করা হয়। এটি একটি ডাইনামিক সাইজ
                স্ট্রিং যা বিভিন্ন ফাংশন প্রদান করে যেমন স্ট্রিং কনক্যাটেনেশন, সাবস্ট্রিং এক্সট্রাকশন, এবং আরো। উপরের
                উদাহরণে, <code>cppString</code> একটি C++ স্ট্রিং যা "Hello, C++!" ধারণ করে।
            </p>

            {/* String Literals */}
            <h3 className="title mt-3">String Literals</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

int main() {
    std::cout << "String Literal: " << "Hello, World!" << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                স্ট্রিং লিটারেল হল সোজা স্ট্রিং যা ডাবল কোটস ("") এর মধ্যে থাকে। এটি একটি কনস্ট্যান্ট স্ট্রিং যা কোডে
                সরাসরি ব্যবহার করা হয়। উপরের উদাহরণে, "Hello, World!" একটি স্ট্রিং লিটারেল
                যা <code>std::cout</code> দ্বারা আউটপুট করা হয়েছে।
            </p>

            {/* Basic Operations */}
            <h3 className="title mt-3">Basic String Operations</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <string>

int main() {
    std::string str1 = "Hello";
    std::string str2 = "World";
    
    // Concatenation
    std::string str3 = str1 + " " + str2;
    
    // Length
    size_t length = str3.length();
    
    // Substring
    std::string substr = str3.substr(6, 5);

    std::cout << "Concatenated String: " << str3 << std::endl;
    std::cout << "Length: " << length << std::endl;
    std::cout << "Substring: " << substr << std::endl;

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                C++ স্ট্রিং ক্লাসের মাধ্যমে বিভিন্ন মৌলিক অপারেশন সম্পাদন করা যায়। উদাহরণস্বরূপ, স্ট্রিং কনক্যাটেনেশন,
                স্ট্রিং লেন্থ নির্ধারণ, এবং সাবস্ট্রিং এক্সট্রাকশন করা হয়েছে। এখানে, <code>str1 + " " +
                str2</code> দ্বারা কনক্যাটেনেশন, <code>str3.length()</code> দ্বারা লেন্থ, এবং <code>str3.substr(6,
                5)</code> দ্বারা সাবস্ট্রিং এক্সট্রাকশন করা হয়েছে।
            </p>

            {/* String Comparison */}
            <h3 className="title mt-3">String Comparison</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <string>

int main() {
    std::string str1 = "apple";
    std::string str2 = "banana";
    
    if (str1 < str2) {
        std::cout << "str1 is less than str2" << std::endl;
    } else {
        std::cout << "str1 is not less than str2" << std::endl;
    }

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                C++ স্ট্রিং তুলনা অপারেটরগুলির সাহায্যে করা হয়, যেমন <code>
                {`<`}
            </code>, <code>
                {`<`}
                =</code>, <code>></code>, এবং <code>>=</code>। উপরের উদাহরণে, <code>{`str1 < str2`}</code> দ্বারা স্ট্রিং
                তুলনা করা হয়েছে এবং ফলাফল কনসোলে প্রদর্শিত হয়েছে।
            </p>

            {/* String Iteration */}
            <h3 className="title mt-3">String Iteration</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <string>

int main() {
    std::string str = "Hello";
    
    for (char c : str) {
        std::cout << c << " ";
    }
    std::cout << std::endl;

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                স্ট্রিংয়ের প্রতিটি অক্ষর ইটারেট করতে রেঞ্জ-বেসড <code>for</code> লুপ ব্যবহার করা যেতে পারে। উপরের
                উদাহরণে, <code>for (char c : str)</code> দ্বারা স্ট্রিংয়ের প্রতিটি অক্ষর কনসোলে প্রদর্শিত হচ্ছে।
            </p>

            {/* Math */}

            <h3 className="title mt-3">Introduction to C++ Math Functions</h3>
            <p className="globalDescription">
                C++-এ গাণিতিক অপারেশন করার জন্য বিভিন্ন ফাংশন সরবরাহ করা হয় যা <code>cmath</code> হেডার ফাইলের
                অন্তর্গত। এই ফাংশনগুলি বিভিন্ন ধরনের গাণিতিক সমস্যা সমাধানে সহায়ক।
            </p>

            {/* Absolute Value */}
            <h3 className="title mt-3">Absolute Value</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <cmath>

int main() {
    int number = -10;
    std::cout << "Absolute Value: " << std::abs(number) << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>std::abs()</code> ফাংশন একটি সংখ্যা থেকে তার ধনাত্মক মান প্রদান করে। উপরের
                উদাহরণে, <code>-10</code> এর <code>absolute value</code> <code>10</code> হবে।
            </p>

            {/* Power Function */}
            <h3 className="title mt-3">Power Function</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <cmath>

int main() {
    double base = 2.0;
    double exponent = 3.0;
    std::cout << "Power: " << std::pow(base, exponent) << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>std::pow()</code> ফাংশন একটি সংখ্যা এবং একটি এক্সপোনেন্ট নিয়ে সেই সংখ্যার পাওয়ার বের করে। উপরের
                উদাহরণে, <code>2^3</code> এর মান হবে <code>8</code>।
            </p>

            {/* Square Root */}
            <h3 className="title mt-3">Square Root</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <cmath>

int main() {
    double number = 16.0;
    std::cout << "Square Root: " << std::sqrt(number) << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>std::sqrt()</code> ফাংশন একটি সংখ্যা থেকে তার স্কয়ার রুট বের করে।
                উদাহরণস্বরূপ, <code>16.0</code> এর স্কয়ার রুট হবে <code>4.0</code>।
            </p>

            {/* Exponential Function */}
            <h3 className="title mt-3">Exponential Function</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <cmath>

int main() {
    double number = 2.0;
    std::cout << "Exponential: " << std::exp(number) << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>std::exp()</code> ফাংশন একটি সংখ্যা থেকে <code>e</code> এর পাওয়ার বের করে।
                উদাহরণস্বরূপ, <code>e^2</code> এর মান হবে <code>7.389</code>।
            </p>

            {/* Logarithm Function */}
            <h3 className="title mt-3">Logarithm Function</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <cmath>

int main() {
    double number = 100.0;
    std::cout << "Logarithm: " << std::log10(number) << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>std::log10()</code> ফাংশন একটি সংখ্যার বেস 10 লগারিদম বের করে। উদাহরণস্বরূপ, <code>100.0</code> এর
                লগারিদম হবে <code>2.0</code>।
            </p>

            {/* Trigonometric Functions */}
            <h3 className="title mt-3">Trigonometric Functions</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <cmath>

int main() {
    double angle = 45.0;
    std::cout << "Sine: " << std::sin(angle * M_PI / 180.0) << std::endl;
    std::cout << "Cosine: " << std::cos(angle * M_PI / 180.0) << std::endl;
    std::cout << "Tangent: " << std::tan(angle * M_PI / 180.0) << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>std::sin()</code>, <code>std::cos()</code>, এবং <code>std::tan()</code> ফাংশনগুলি একটি কোণ থেকে
                যথাক্রমে সাইন, কসাইন, এবং ট্যানজেন্ট বের করে। কোণকে রেডিয়ানে রূপান্তর করার জন্য <code>angle * M_PI /
                180.0</code> ব্যবহার করা হয়।
            </p>

            {/* Absolute Value of Floating Point */}
            <h3 className="title mt-3">Absolute Value of Floating Point</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <cmath>

int main() {
    double number = -12.34;
    std::cout << "Absolute Value: " << std::fabs(number) << std::endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>std::fabs()</code> ফাংশন floating-point সংখ্যার absolute value বের করে। উপরের
                উদাহরণে, <code>-12.34</code> এর absolute value হবে <code>12.34</code>।
            </p>


            {/* Booleans */}
            <h3 className="title mt-3">Booleans</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`bool isTrue = true;
bool isFalse = false;`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>bool</code> data type দুটি মান নিতে পারে: <code>true</code> অথবা <code>false</code>।
                এখানে, <code>isTrue</code> এবং <code>isFalse</code> দুইটি boolean variable যা
                যথাক্রমে <code>true</code> এবং <code>false</code> সংরক্ষণ করছে।
            </p>

            {/* Conditionals */}
            <h3 className="title mt-3">Conditionals</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`if (age > 18) {
    cout << "Adult";
} else {
    cout << "Not an adult";
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>if</code> statement ব্যবহার করে condition চেক করা হয়। এখানে, <code>age</code> variable যদি 18 এর
                বেশি হয়, তবে "Adult" প্রদর্শিত হবে; অন্যথায়, "Not an adult" প্রদর্শিত হবে।
            </p>

            {/* Switch */}
            <h3 className="title mt-3">Switch</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`switch (grade) {
    case 'A':
        cout << "Excellent";
        break;
    case 'B':
        cout << "Good";
        break;
    default:
        cout << "Needs Improvement";
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>switch</code> statement একাধিক possible values চেক করতে ব্যবহৃত হয়।
                উদাহরণস্বরূপ, <code>grade</code> এর মান অনুযায়ী বিভিন্ন বার্তা প্রদর্শিত হয়।
            </p>

            {/* For Loop */}
            <h3 className="title mt-3">For Loop</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`for (int i = 0; i < 5; i++) {
    cout << i << " ";
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>for</code> loop একটি নির্দিষ্ট সংখ্যা পর্যন্ত iteration চালায়। এখানে, loop 0 থেকে 4 পর্যন্ত
                সংখ্যা print করে।
            </p>

            {/* While Loop */}
            <h3 className="title mt-3">While Loop</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`int i = 0;
while (i < 5) {
    cout << i << " ";
    i++;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>while</code> loop একটি condition এর সত্যতা যাচাই করে iteration চালায়। এখানে, loop তখন পর্যন্ত
                চলবে যতক্ষণ <code>i</code> 5 এর কম থাকে।
            </p>

            {/* Do While Loop */}
            <h3 className="title mt-3">Do While Loop</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`int i = 0;
do {
    cout << i << " ";
    i++;
} while (i < 5);`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>do-while</code> loop কমপক্ষে একবার iteration চালায় এবং পরে condition চেক করে। এখানে, loop একবার
                চলবে এবং পরে <code>i</code> 5 এর কম কিনা তা যাচাই করবে।
            </p>

            {/* Break */}
            <h3 className="title mt-3">Break</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    cout << i << " ";
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>break</code> statement loop বা switch-case থেকে বেরিয়ে আসতে ব্যবহৃত হয়। উদাহরণস্বরূপ, loop 5
                পৌঁছানোর পর বন্ধ হয়ে যাবে।
            </p>

            {/* Continue */}
            <h3 className="title mt-3">Continue</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    cout << i << " ";
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                <code>continue</code> statement iteration-এর একটি নির্দিষ্ট অংশ এড়িয়ে যায় এবং loop এর পরবর্তী
                iteration শুরু করে। এখানে, <code>i</code> যদি 5 হয়, তবে সেই iteration বাদ দিয়ে পরবর্তী iteration শুরু
                হবে।
            </p>
        </Container>
    );
}

export default CppBasic;
