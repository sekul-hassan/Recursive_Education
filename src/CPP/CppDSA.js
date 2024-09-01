import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CppDSA(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Introduction to Data Structures in C++ */}
            <h3 className="title mt-3">Introduction to Data Structures in C++</h3>
            <p className="globalDescription">
                C++ এ বিভিন্ন ধরনের ডেটা স্ট্রাকচার আছে যা তথ্য সংরক্ষণ এবং পরিচালনার জন্য ব্যবহৃত হয়। এই কম্পোনেন্টে আমরা বিভিন্ন ডেটা স্ট্রাকচার যেমন ভেক্টর, লিস্ট, স্ট্যাক, কিউ, ডিকিউ, সেট এবং ম্যাপের সাথে পরিচিত হবো এবং প্রতিটির জন্য উদাহরণ প্রদান করবো।
            </p>

            {/* Vector Examples */}
            <h4 className="title mt-3">Vector</h4>

            <h4 className="globalSubTitle">Example 1: Basic Vector Operations</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> vec = {1, 2, 3, 4, 5};
    vec.push_back(6); // Add element at the end
    vec.pop_back();   // Remove the last element

    for (int num : vec) {
        cout << num << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>vector</code> ব্যবহার করে একটি সংখ্যা ভেক্টর তৈরি করা হয়েছে। <code>push_back</code> এবং <code>pop_back</code> ফাংশনের মাধ্যমে উপাদান যোগ এবং মুছে ফেলা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 2: Iterating Through Vector</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> vec = {10, 20, 30, 40, 50};

    for (auto it = vec.begin(); it != vec.end(); ++it) {
        cout << *it << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>vector</code> এর উপাদানগুলি <code>begin</code> এবং <code>end</code> ইটারেটর ব্যবহার করে প্রদর্শন করা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 3: Using Vector of Objects</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <vector>
using namespace std;

class Person {
public:
    Person(string n) : name(n) {}
    void display() const {
        cout << "Name: " << name << endl;
    }
private:
    string name;
};

int main() {
    vector<Person> people;
    people.push_back(Person("Alice"));
    people.push_back(Person("Bob"));

    for (const auto& person : people) {
        person.display();
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Person</code> ক্লাসের একটি <code>vector</code> তৈরি করা হয়েছে। <code>push_back</code> ফাংশনের মাধ্যমে অবজেক্ট যোগ করা হয়েছে এবং <code>display</code> মেথড ব্যবহার করে উপস্থাপন করা হয়েছে।
            </p>

            {/* Stack Examples */}
            <h4 className="title mt-3">Stack</h4>

            <h4 className="globalSubTitle">Example 1: Basic Stack Operations</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> stk;
    stk.push(1); // Push element onto the stack
    stk.push(2);
    stk.push(3);

    while (!stk.empty()) {
        cout << stk.top() << " ";
        stk.pop(); // Pop element from the stack
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>stack</code> ব্যবহার করে কিছু উপাদান স্ট্যাকের উপরে পুশ করা হয়েছে এবং পরে <code>pop</code> ফাংশনের মাধ্যমে মুছে ফেলা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 2: Stack of Strings</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<string> stk;
    stk.push("Hello");
    stk.push("World");

    while (!stk.empty()) {
        cout << stk.top() << " ";
        stk.pop();
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>stack</code> এর উপাদান হিসেবে স্ট্রিং ব্যবহার করা হয়েছে। স্ট্রিং উপাদানগুলি পুশ এবং পপ করা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 3: Checking Stack Size</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> stk;
    stk.push(10);
    stk.push(20);
    stk.push(30);

    cout << "Stack size: " << stk.size() << endl;
    stk.pop();
    cout << "Stack size after pop: " << stk.size() << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>stack</code> এর আকার <code>size</code> ফাংশন ব্যবহার করে প্রদর্শন করা হয়েছে এবং পরে একটি উপাদান মুছে ফেলা হয়েছে।
            </p>

            {/* Queue Examples */}
            <h4 className="title mt-3">Queue</h4>

            <h4 className="globalSubTitle">Example 1: Basic Queue Operations</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    q.push(1); // Add element to the queue
    q.push(2);
    q.push(3);

    while (!q.empty()) {
        cout << q.front() << " "; // Get the front element
        q.pop(); // Remove the front element
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>queue</code> ব্যবহার করে কিছু উপাদান কিউতে যোগ করা হয়েছে এবং <code>pop</code> ফাংশনের মাধ্যমে মুছে ফেলা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 2: Queue of Doubles</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<double> q;
    q.push(1.1);
    q.push(2.2);
    q.push(3.3);

    while (!q.empty()) {
        cout << q.front() << " ";
        q.pop();
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>queue</code> এর উপাদান হিসেবে ডাবল ব্যবহার করা হয়েছে। কিউতে উপাদান যোগ এবং মুছে ফেলা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 3: Queue Size and Front Element</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    q.push(10);
    q.push(20);

    cout << "Front element: " << q.front() << endl;
    cout << "Queue size: " << q.size() << endl;
    q.pop();
    cout << "Queue size after pop: " << q.size() << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>queue</code> এর আকার <code>size</code> ফাংশন ব্যবহার করে প্রদর্শন করা হয়েছে এবং পরে একটি উপাদান মুছে ফেলা হয়েছে।
            </p>

            {/* List Examples */}
            <h4 className="title mt-3">List</h4>

            <h4 className="globalSubTitle">Example 1: Basic List Operations</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> myList = {1, 2, 3, 4};
    myList.push_back(5); // Add element to the end
    myList.push_front(0); // Add element to the front

    for (int num : myList) {
        cout << num << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>list</code> ব্যবহার করে একটি সংখ্যা তালিকা তৈরি করা হয়েছে। <code>push_back</code> এবং <code>push_front</code> ফাংশনের মাধ্যমে উপাদান যোগ করা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 2: List Iterator</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> myList = {10, 20, 30, 40};

    for (auto it = myList.begin(); it != myList.end(); ++it) {
        cout << *it << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>list</code> এর উপাদানগুলি ইটারেটর ব্যবহার করে প্রদর্শন করা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 3: Removing Elements from List</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> myList = {10, 20, 30, 40};
    myList.pop_back(); // Remove last element
    myList.pop_front(); // Remove first element

    for (int num : myList) {
        cout << num << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>list</code> থেকে <code>pop_back</code> এবং <code>pop_front</code> ফাংশনের মাধ্যমে উপাদান মুছে ফেলা হয়েছে।
            </p>

            {/* Deque Examples */}
            <h4 className="title mt-3">Deque</h4>

            <h4 className="globalSubTitle">Example 1: Basic Deque Operations</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq;
    dq.push_back(1); // Add element to the end
    dq.push_front(0); // Add element to the front

    for (int num : dq) {
        cout << num << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>deque</code> ব্যবহার করে কিছু উপাদান সামনে এবং পিছনে যোগ করা হয়েছে এবং প্রদর্শন করা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 2: Accessing Deque Elements</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq = {10, 20, 30, 40};
    cout << "First element: " << dq.front() << endl;
    cout << "Last element: " << dq.back() << endl;

    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>deque</code> এর প্রথম এবং শেষ উপাদান <code>front</code> এবং <code>back</code> ফাংশনের মাধ্যমে প্রদর্শন করা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 3: Removing Elements from Deque</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq = {10, 20, 30, 40};
    dq.pop_front(); // Remove first element
    dq.pop_back();  // Remove last element

    for (int num : dq) {
        cout << num << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>deque</code> থেকে উপাদান <code>pop_front</code> এবং <code>pop_back</code> ফাংশনের মাধ্যমে মুছে ফেলা হয়েছে।
            </p>

            {/* Set Examples */}
            <h4 className="title mt-3">Set</h4>

            <h4 className="globalSubTitle">Example 1: Basic Set Operations</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s;
    s.insert(1); // Insert elements into set
    s.insert(2);
    s.insert(3);
    s.insert(3); // Duplicate elements are not allowed

    for (int num : s) {
        cout << num << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>set</code> এ কিছু উপাদান যোগ করা হয়েছে এবং প্রদর্শন করা হয়েছে। <code>set</code> এ কোন ডুপ্লিকেট উপাদান থাকতে পারে না।
            </p>

            <h4 className="globalSubTitle">Example 2: Set with Custom Comparator</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <set>
using namespace std;

struct DescendingOrder {
    bool operator()(int a, int b) const {
        return a > b;
    }
};

int main() {
    set<int, DescendingOrder> s;
    s.insert(1);
    s.insert(2);
    s.insert(3);

    for (int num : s) {
        cout << num << " ";
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে একটি <code>set</code> তৈরি করা হয়েছে যা উপাদানগুলি অবতরণ ক্রমে সজ্জিত করে।
            </p>

            <h4 className="globalSubTitle">Example 3: Finding Elements in a Set</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {10, 20, 30, 40};
    auto it = s.find(20);

    if (it != s.end()) {
        cout << "Element found: " << *it << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>set</code> এর একটি নির্দিষ্ট উপাদান <code>find</code> ফাংশনের মাধ্যমে খোঁজা হয়েছে।
            </p>

            {/* Map Examples */}
            <h4 className="title mt-3">Map</h4>

            <h4 className="globalSubTitle">Example 1: Basic Map Operations</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <map>
using namespace std;

int main() {
    map<int, string> m;
    m[1] = "One";
    m[2] = "Two";
    m[3] = "Three";

    for (const auto& pair : m) {
        cout << pair.first << ": " << pair.second << endl;
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে একটি <code>map</code> তৈরি করা হয়েছে যা কী-মান জোড়া সংরক্ষণ করে এবং প্রদর্শন করে।
            </p>

            <h4 className="globalSubTitle">Example 2: Iterating Over a Map</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> m;
    m["Alice"] = 25;
    m["Bob"] = 30;

    for (auto it = m.begin(); it != m.end(); ++it) {
        cout << it->first << ": " << it->second << endl;
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>map</code> এর উপাদানগুলি ইটারেটর ব্যবহার করে প্রদর্শন করা হয়েছে।
            </p>

            <h4 className="globalSubTitle">Example 3: Finding Elements in a Map</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
#include <map>
using namespace std;

int main() {
    map<int, string> m = {{1, "One"}, {2, "Two"}, {3, "Three"}};
    auto it = m.find(2);

    if (it != m.end()) {
        cout << "Found: " << it->first << " -> " << it->second << endl;
    } else {
        cout << "Not Found" << endl;
    }
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>map</code> এর একটি নির্দিষ্ট উপাদান <code>find</code> ফাংশনের মাধ্যমে খোঁজা হয়েছে।
            </p>
        </Container>


    );
}

export default CppDSA;
