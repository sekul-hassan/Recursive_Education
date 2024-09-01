import React from 'react';
import { Container } from "react-bootstrap";
import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Function(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Function Parameters */}
            <h3 className="title mt-3">Function Parameters</h3>

            {/* Parameter Example 1 */}
            <h4 className="globalSubTitle">Example 1: Basic Parameter</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void printNumber(int num) {
    cout << "Number: " << num << endl;
}

int main() {
    printNumber(5);
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>printNumber</code> ফাংশন একটি একক প্যারামিটার <code>num</code> গ্রহণ করে। <code>num</code> এর মান <code>main()</code> ফাংশনে <code>printNumber(5)</code> কল করার মাধ্যমে প্রদর্শিত হয়।
            </p>

            {/* Parameter Example 2 */}
            <h4 className="globalSubTitle">Example 2: Multiple Parameters</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void addNumbers(int a, int b) {
    cout << "Sum: " << (a + b) << endl;
}

int main() {
    addNumbers(3, 4);
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>addNumbers</code> ফাংশন দুটি প্যারামিটার <code>a</code> এবং <code>b</code> গ্রহণ করে। <code>main()</code> ফাংশনে <code>addNumbers(3, 4)</code> কল করার মাধ্যমে দুটি সংখ্যার যোগফল প্রদর্শিত হয়।
            </p>

            {/* Default Parameters */}
            <h3 className="title mt-3">Default Parameters</h3>

            {/* Default Parameter Example 1 */}
            <h4 className="globalSubTitle">Example 1: Default Value</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void greet(string name = "Guest") {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    greet();
    greet("Alice");
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>greet</code> ফাংশনে <code>name</code> প্যারামিটার একটি ডিফল্ট মান "Guest" পায়। যদি কোন নাম প্রদান না করা হয়, তবে "Hello, Guest!" প্রদর্শিত হবে, অন্যথায় প্রদত্ত নামের সাথে সাদর অভ্যর্থনা করা হবে।
            </p>

            {/* Default Parameter Example 2 */}
            <h4 className="globalSubTitle">Example 2: Default Parameter with Multiple Arguments</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void display(int x, int y = 10) {
    cout << "x: " << x << ", y: " << y << endl;
}

int main() {
    display(5);
    display(5, 15);
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>display</code> ফাংশনে <code>y</code> প্যারামিটার একটি ডিফল্ট মান 10 পায়। <code>display(5)</code> কল করলে <code>y</code> এর মান 10 হবে, এবং <code>display(5, 15)</code> কল করলে <code>y</code> এর মান 15 হবে।
</p>

    {/* Return Values */}
    <h3 className="title mt-3">Return Values</h3>

    {/* Return Value Example 1 */}
    <h4 className="globalSubTitle">Example 1: Basic Return</h4>
    <SyntaxHighlighter language="cpp" style={solarizedlight}>
        {`#include <iostream>
using namespace std;

int square(int num) {
    return num * num;
}

int main() {
    cout << "Square of 4: " << square(4) << endl;
    return 0;
}`}
    </SyntaxHighlighter>
    <p className="globalDescription">
        এখানে <code>square</code> ফাংশন একটি পূর্ণসংখ্যার বর্গফল গণনা করে এবং <code>return</code> করে। <code>main()</code> ফাংশনে <code>square(4)</code> কল করে 4 এর বর্গফল 16 প্রদর্শিত হয়।
</p>

    {/* Return Value Example 2 */}
    <h4 className="globalSubTitle">Example 2: Returning Multiple Values</h4>
    <SyntaxHighlighter language="cpp" style={solarizedlight}>
        {`#include <iostream>
using namespace std;

pair<int, int> getMinMax(int a, int b) {
    return make_pair(min(a, b), max(a, b));
}

int main() {
    auto result = getMinMax(5, 10);
    cout << "Min: " << result.first << ", Max: " << result.second << endl;
    return 0;
}`}
    </SyntaxHighlighter>
    <p className="globalDescription">
        এখানে <code>getMinMax</code> ফাংশন একটি <code>pair</code> ব্যবহার করে দুইটি মান ফেরত দেয়। <code>main()</code> ফাংশনে <code>getMinMax(5, 10)</code> কল করে সর্বনিম্ন এবং সর্বোচ্চ মান প্রদর্শিত হয়।
    </p>

    {/* Pass by Reference */}
    <h3 className="title mt-3">Pass by Reference</h3>

    {/* Pass by Reference Example 1 */}
    <h4 className="globalSubTitle">Example 1: Modifying Values</h4>
    <SyntaxHighlighter language="cpp" style={solarizedlight}>
        {`#include <iostream>
using namespace std;

void increment(int &num) {
    num++;
}

int main() {
    int x = 5;
    increment(x);
    cout << "Incremented value: " << x << endl;
    return 0;
}`}
    </SyntaxHighlighter>
    <p className="globalDescription">
        এখানে <code>increment</code> ফাংশন একটি প্যারামিটারকে রেফারেন্স হিসেবে গ্রহণ করে এবং তার মান বাড়িয়ে দেয়। <code>x</code> এর মান <code>increment(x)</code> কল করার পর 6 হয়ে যায়।
    </p>

    {/* Pass by Reference Example 2 */}
    <h4 className="globalSubTitle">Example 2: Swapping Values</h4>
    <SyntaxHighlighter language="cpp" style={solarizedlight}>
        {`#include <iostream>
using namespace std;

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 1, y = 2;
    swap(x, y);
    cout << "Swapped values: x = " << x << ", y = " << y << endl;
    return 0;
}`}
    </SyntaxHighlighter>
    <p className="globalDescription">
        এখানে <code>swap</code> ফাংশন দুটি পূর্ণসংখ্যার মান বিনিময় করে। <code>swap(x, y)</code> কল করার পর <code>x</code> এবং <code>y</code> এর মান স্ব্যাপ হয়ে যায়।
    </p>

    {/* Pass by Array */}
    <h3 className="title mt-3">Pass by Array</h3>

    {/* Pass by Array Example 1 */}
    <h4 className="globalSubTitle">Example 1: Modifying Array Elements</h4>
    <SyntaxHighlighter language="cpp" style={solarizedlight}>
        {`#include <iostream>
using namespace std;

void fillArray(int arr[], int size) {
    for (int i = 0; i < size; ++i) {
        arr[i] = i + 1;
    }
}

int main() {
    int myArray[5];
    fillArray(myArray, 5);
    for (int i = 0; i < 5; ++i) {
        cout << myArray[i] << " ";
    }
    return 0;
}`}
    </SyntaxHighlighter>
    <p className="globalDescription">
        এখানে <code>fillArray</code> ফাংশন একটি Array এর সব উপাদান পূর্ণ করে। <code>myArray</code> এ 1 থেকে 5 পর্যন্ত সংখ্যা সেট করা হয় এবং পরে তা প্রদর্শিত হয়।
    </p>

    {/* Pass by Array Example 2 */}
    <h4 className="globalSubTitle">Example 2: Array Sum</h4>
    <SyntaxHighlighter language="cpp" style={solarizedlight}>
        {`#include <iostream>
using namespace std;

int arraySum(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; ++i) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int myArray[] = {1, 2, 3, 4, 5};
    cout << "Sum of array elements: " << arraySum(myArray, 5) << endl;
    return 0;
}`}
    </SyntaxHighlighter>
    <p className="globalDescription">
        এখানে <code>arraySum</code> ফাংশন একটি Array এর উপাদানগুলির যোগফল গণনা করে। <code>arraySum(myArray, 5)</code> কল করার পর Array এর উপাদানগুলির যোগফল প্রদর্শিত হয়।
    </p>
            {/* Function Overloading */}
            <h3 className="title mt-3">Function Overloading</h3>
            <p className="globalDescription">
                Function Overloading হলো একই নামের বিভিন্ন ফাংশন ডিফাইন করার প্রক্রিয়া, যাদের প্যারামিটারগুলির সংখ্যা বা টাইপ আলাদা থাকে। C++ এ এটি প্রোগ্রামিংয়ের একটি শক্তিশালী বৈশিষ্ট্য যা কোডের পাঠযোগ্যতা এবং ব্যবহারযোগ্যতা বৃদ্ধি করে।
            </p>

            {/* Function Overloading Example 1 */}
            <h4 className="globalSubTitle">Example 1: Overloading with Different Number of Parameters</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

void print(int i) {
    cout << "Integer: " << i << endl;
}

void print(double d) {
    cout << "Double: " << d << endl;
}

int main() {
    print(5);        // Calls print(int)
    print(5.99);     // Calls print(double)
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>print</code> ফাংশন দুটি ভার্সনে ওভারলোড করা হয়েছে: একটি পূর্ণসংখ্যা এবং একটি ডাবল টাইপের প্যারামিটার গ্রহণ করে। <code>print(5)</code> কল করলে পূর্ণসংখ্যার ভার্সন এবং <code>print(5.99)</code> কল করলে ডাবল টাইপের ভার্সন কল হবে।
        </p>

    {/* Function Overloading Example 2 */}
    <h4 className="globalSubTitle">Example 2: Overloading with Different Parameter Types</h4>
    <SyntaxHighlighter language="cpp" style={solarizedlight}>
        {`#include <iostream>
using namespace std;

void display(int a, double b) {
    cout << "Integer: " << a << ", Double: " << b << endl;
}

void display(double a, int b) {
    cout << "Double: " << a << ", Integer: " << b << endl;
}

int main() {
    display(5, 4.5);     // Calls display(int, double)
    display(4.5, 5);     // Calls display(double, int)
    return 0;
}`}
    </SyntaxHighlighter>
    <p className="globalDescription">
        এখানে <code>display</code> ফাংশন দুটি আলাদা সিগনেচারের সাথে ওভারলোড করা হয়েছে: একটির মধ্যে প্রথম প্যারামিটার <code>int</code> এবং দ্বিতীয় প্যারামিটার <code>double</code>, অন্যটির মধ্যে প্রথম প্যারামিটার <code>double</code> এবং দ্বিতীয় প্যারামিটার <code>int</code>। <code>display(5, 4.5)</code> কল করলে প্রথম ভার্সন এবং <code>display(4.5, 5)</code> কল করলে দ্বিতীয় ভার্সন কল হবে।
</p>
</Container>
);
}

export default Function;
