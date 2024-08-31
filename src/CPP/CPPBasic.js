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
                C++ একটি Powerful এবং Versatile প্রোগ্রামিং Language, যা Bjarne Stroustrup দ্বারা C ভাষার একটি এক্সটেনশন হিসেবে তৈরি করা হয়েছে। এটি procedural এবং object-oriented programming উভয়কেই সমর্থন করে, যা software development, game development এবং system/application software এর ক্ষেত্রে বহুল ব্যবহৃত হয়।
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
                উপরের উদাহরণে, <code>#include iostream</code> একটি প্রি-প্রসেসর ডিরেক্টিভ, যা standard input-output stream লাইব্রেরি ইনক্লুড করে। <code>main()</code> ফাংশনটি প্রতিটি C++ প্রোগ্রামের এন্ট্রি পয়েন্ট। <code>cout</code> ব্যবহার করে কনসোলে ডেটা আউটপুট করা হয় এবং <code>//</code> ব্যবহার করে সিঙ্গেল-লাইন কমেন্ট তৈরি করা হয়।
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
                C++ প্রোগ্রামে, <code>//</code> দিয়ে সিঙ্গেল-লাইন কমেন্ট এবং <code> /* ... */</code> দিয়ে মাল্টি-লাইন কমেন্ট তৈরি করা হয়। কমেন্টগুলি কোডের মধ্যে নোট যোগ করতে এবং কোড ব্যাখ্যা করতে ব্যবহৃত হয়, যা প্রোগ্রামের কার্যকারিতা প্রভাবিত করে না।
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
                C++ এ, <code>cout</code> ব্যবহার করে আউটপুট প্রদর্শন করা হয়। উপরের উদাহরণে, <code>cout</code> এবং <code>endl</code> ব্যবহার করে স্ক্রিনে "This is an output example." প্রদর্শিত হবে। <code>endl</code> একটি নিউ লাইন তৈরি করে।
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
                C++ এ, ভেরিয়েবলগুলি বিভিন্ন ধরনের ডেটা সংরক্ষণ করতে ব্যবহৃত হয়। উদাহরণস্বরূপ, <code>int</code> একটি পূর্ণসংখ্যা সংরক্ষণ করে, <code>double</code> দশমিক সংখ্যা সংরক্ষণ করে এবং <code>char</code> একটি অক্ষর সংরক্ষণ করে। উপরের উদাহরণে, <code>myNumber</code>, <code>myFloat</code>, এবং <code>myLetter</code> যথাক্রমে একটি পূর্ণসংখ্যা, দশমিক সংখ্যা, এবং একটি অক্ষর সংরক্ষণ করে এবং <code>cout</code> ব্যবহার করে এগুলি কনসোলে প্রদর্শিত হয়।
            </p>
        </Container>
    );
}

export default CppBasic;
