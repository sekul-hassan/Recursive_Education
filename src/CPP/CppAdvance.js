import React from 'react';
import { Container } from "react-bootstrap";
import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CppAdvance(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Introduction */}
            <h3 className="title mt-3">Introduction to Advanced C++ Concepts</h3>
            <p className="globalDescription">
                C++-এ কিছু উন্নত ধারণা যেমন Arrays, Enums, এবং Pointers গুরুত্বপূর্ণ ভূমিকা পালন করে। এই ধারণাগুলি প্রোগ্রামিংয়ের ক্ষেত্রে আরও উন্নত এবং দক্ষ কোড লেখার জন্য ব্যবহৃত হয়।
            </p>

            {/* Arrays */}
            <h3 className="title mt-3">Arrays in C++</h3>

            {/* Example 1 */}
            <h4 className="globalSubTitle">Example 1: Basic Array</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    
    for (int i = 0; i < 5; ++i) {
        std::cout << "Element at index " << i << ": " << numbers[i] << std::endl;
    }
    
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                উপরের উদাহরণে, <code>int numbers[5]</code> একটি Integer Array যা পাঁচটি ইন্টিজার মান ধারণ করে। লুপের মাধ্যমে Array এর প্রতিটি উপাদান অ্যাক্সেস করা হয়েছে।
            </p>

            {/* Example 2 */}
            <h4 className="globalSubTitle">Example 2: Multi-Dimensional Array</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

int main() {
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
    
    for (int i = 0; i < 2; ++i) {
        for (int j = 0; j < 3; ++j) {
            std::cout << "Element at [" << i << "][" << j << "]: " << matrix[i][j] << std::endl;
        }
    }
    
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এই উদাহরণে, একটি 2x3 মেট্রিক্স Array ঘোষণা করা হয়েছে এবং একটি nested loop ব্যবহার করে প্রতিটি উপাদান প্রদর্শন করা হয়েছে।
            </p>

            {/* Example 3 */}
            <h4 className="globalSubTitle">Example 3: Array with Functions</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

void printArray(int arr[], int size) {
    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    printArray(numbers, 5);
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এই উদাহরণে, একটি Array কে একটি ফাংশনের মাধ্যমে প্রিন্ট করা হয়েছে। <code>printArray</code> ফাংশন Array এবং তার আকার নিয়ে কাজ করে এবং Array এর সমস্ত উপাদান প্রদর্শন করে।
            </p>

            {/* Enums */}
            <h3 className="title mt-3">Enums in C++</h3>

            {/* Example 1 */}
            <h4 className="globalSubTitle">Example 1: Basic Enum</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

enum Color {
    RED,
    GREEN,
    BLUE
};

int main() {
    Color myColor = GREEN;
    
    if (myColor == GREEN) {
        std::cout << "Color is Green" << std::endl;
    }

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে একটি Enum <code>Color</code> তৈরি করা হয়েছে যা বিভিন্ন রঙের মান ধারণ করে। <code>myColor</code> কে <code>GREEN</code> হিসেবে সেট করা হয়েছে এবং শর্ত চেক করা হয়েছে।
            </p>

            {/* Example 2 */}
            <h4 className="globalSubTitle">Example 2: Enum with Custom Values</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

enum Day {
    SUNDAY = 1,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
};

int main() {
    Day today = FRIDAY;
    
    std::cout << "Day number: " << today << std::endl;

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Day</code> Enum এর মানগুলি কাস্টম ভ্যালু দ্বারা সেট করা হয়েছে। <code>today</code> কে <code>FRIDAY</code> হিসেবে সেট করা হয়েছে এবং মান প্রদর্শন করা হয়েছে।
            </p>

            {/* Example 3 */}
            <h4 className="globalSubTitle">Example 3: Enum with Underlying Type</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

enum class Status : int {
    OK = 0,
    WARNING = 1,
    ERROR = 2
};

int main() {
    Status currentStatus = ERROR;
    
    std::cout << "Status code: " << static_cast<int>(currentStatus) << std::endl;

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে একটি Scoped Enum (enum class) ব্যবহার করা হয়েছে যা <code>int</code> টাইপের সাথে সম্পর্কিত। <code>currentStatus</code> কে <code>ERROR</code> হিসেবে সেট করা হয়েছে এবং তার মান প্রদর্শন করা হয়েছে।
            </p>

            {/* Pointers */}
            <h3 className="title mt-3">Pointers in C++</h3>

            {/* Example 1 */}
            <h4 className="globalSubTitle">Example 1: Basic Pointer</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

int main() {
    int value = 10;
    int* ptr = &value; // Pointer to an integer
    
    std::cout << "Value: " << value << std::endl;
    std::cout << "Pointer Address: " << ptr << std::endl;
    std::cout << "Pointer Value: " << *ptr << std::endl;

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>value</code> ভেরিয়েবলের অ্যাড্রেস একটি পয়েন্টার দ্বারা ধারণ করা হয়েছে। <code>*ptr</code> দ্বারা পয়েন্টারটি নির্দেশিত মান অ্যাক্সেস করা হয়েছে।
            </p>

            {/* Example 2 */}
            <h4 className="globalSubTitle">Example 2: Pointer to Array</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int* ptr = numbers; // Pointer to the first element of the array
    
    for (int i = 0; i < 5; ++i) {
        std::cout << "Element at index " << i << ": " << *(ptr + i) << std::endl;
    }

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে একটি Array এর প্রথম উপাদানে পয়েন্টার সেট করা হয়েছে। <code>*(ptr + i)</code> ব্যবহার করে Array এর প্রতিটি উপাদান অ্যাক্সেস করা হয়েছে।
            </p>

            {/* Example 3 */}
            <h4 className="globalSubTitle">Example 3: Pointer and Dynamic Memory Allocation</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>

int main() {
    int* ptr = new int(5); // Dynamic memory allocation
    
    std::cout << "Dynamically allocated value: " << *ptr << std::endl;
    
    delete ptr; // Deallocating memory

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>new</code> অপারেটর দ্বারা ডাইনামিক মেমরি অ্যালোকেশন করা হয়েছে এবং <code>delete</code> দ্বারা মেমরি মুক্ত করা হয়েছে। <code>*ptr</code> দ্বারা ডাইনামিকভাবে বরাদ্দকৃত মান অ্যাক্সেস করা হয়েছে।
            </p>
        </Container>
    );
}

export default CppAdvance;
