import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Abstraction(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Introduction to Abstraction */}
            <h3 className="title mt-3">Introduction to Abstraction</h3>
            <p className="globalDescription">
                Abstraction হলো একটি OOP কৌশল যা বেসিক বা গুরুত্বপূর্ণ বৈশিষ্ট্যগুলি হাইলাইট করতে সহায়ক এবং অপ্রয়োজনীয় বা পুনরাবৃত্ত বৈশিষ্ট্যগুলি লুকায়। এটি মূলত দুটি অংশে বিভক্ত: abstract classes এবং interfaces।
            </p>

            {/* Example 1: Abstract Class */}
            <h4 className="globalSubTitle">Example 1: Abstract Class</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class AbstractClass {
public:
    virtual void display() = 0; // Pure virtual function
};

int main() {
    // AbstractClass obj; // Error: Cannot instantiate abstract class
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>AbstractClass</code> একটি বিমূর্ত ক্লাস যা একটি শুদ্ধ ভার্চুয়াল ফাংশন <code>display</code> ধারণ করে। এই ক্লাসের সরাসরি উদাহরণ তৈরি করা যায় না।
            </p>

            {/* Example 2: Abstract Method */}
            <h4 className="globalSubTitle">Example 2: Abstract Method</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class AbstractClass {
public:
    virtual void show() = 0; // Abstract method
};

class ConcreteClass : public AbstractClass {
public:
    void show() override {
        cout << "Concrete implementation of show()" << endl;
    }
};

int main() {
    ConcreteClass obj;
    obj.show();
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>AbstractClass</code> একটি বিমূর্ত মেথড <code>show</code> ধারণ করে এবং <code>ConcreteClass</code> এই মেথডের বাস্তবায়ন প্রদান করে।
            </p>

            {/* Example 3: Concrete Class Implementing Abstract Class */}
            <h4 className="globalSubTitle">Example 3: Concrete Class Implementing Abstract Class</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class AbstractClass {
public:
    virtual void show() = 0; // Pure virtual function
};

class ConcreteClass : public AbstractClass {
public:
    void show() override {
        cout << "ConcreteClass implementation of show()" << endl;
    }
};

int main() {
    AbstractClass* obj = new ConcreteClass();
    obj->show();
    delete obj;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>ConcreteClass</code> <code>AbstractClass</code> কে বাস্তবায়িত করেছে এবং <code>AbstractClass</code> পয়েন্টার দিয়ে <code>ConcreteClass</code> ক্লাসের অবজেক্টকে ব্যবহার করা হয়েছে।
            </p>

            {/* Example 4: Abstraction with Interface */}
            <h4 className="globalSubTitle">Example 4: Abstraction with Interface</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Interface {
public:
    virtual void method() = 0; // Pure virtual function
};

class Implementation : public Interface {
public:
    void method() override {
        cout << "Implementation of method()" << endl;
    }
};

int main() {
    Interface* obj = new Implementation();
    obj->method();
    delete obj;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Interface</code> একটি বিমূর্ত ক্লাস হিসাবে কাজ করছে, যা একটি শুদ্ধ ভার্চুয়াল ফাংশন ধারণ করে। <code>Implementation</code> ক্লাস এই ইন্টারফেসের বাস্তবায়ন প্রদান করে।
            </p>

            {/* Example 5: Abstract Class with Multiple Inheritance */}
            <h4 className="globalSubTitle">Example 5: Abstract Class with Multiple Inheritance</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Abstract1 {
public:
    virtual void method1() = 0; // Pure virtual function
};

class Abstract2 {
public:
    virtual void method2() = 0; // Pure virtual function
};

class ConcreteClass : public Abstract1, public Abstract2 {
public:
    void method1() override {
        cout << "Implementation of method1()" << endl;
    }

    void method2() override {
        cout << "Implementation of method2()" << endl;
    }
};

int main() {
    ConcreteClass obj;
    obj.method1();
    obj.method2();
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>ConcreteClass</code> দুইটি বিমূর্ত ক্লাস (<code>Abstract1</code> এবং <code>Abstract2</code>) কে বাস্তবায়ন করেছে। এই উদাহরণটি মাল্টিপল ইনহেরিটেন্সের মাধ্যমে বিমূর্ততার প্রদর্শন করে।
            </p>
        </Container>
    );
}

export default Abstraction;
