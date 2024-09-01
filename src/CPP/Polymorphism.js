import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Polymorphism(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Introduction to Polymorphism */}
            <h3 className="title mt-3">Introduction to Polymorphism</h3>
            <p className="globalDescription">
                Polymorphism হলো একটি OOP কৌশল যা একই নামে বিভিন্ন কার্যকারিতা প্রদর্শন করতে দেয়। এটি মূলত দুই ধরনের হয়: Compile-time (স্ট্যাটিক) polymorphism এবং Run-time (ডাইনামিক) polymorphism।
            </p>

            {/* Example 1: Compile-time Polymorphism (Function Overloading) */}
            <h4 className="globalSubTitle">Example 1: Compile-time Polymorphism (Function Overloading)</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Printer {
public:
    void print(int i) {
        cout << "Printing int: " << i << endl;
    }

    void print(double d) {
        cout << "Printing double: " << d << endl;
    }

    void print(string s) {
        cout << "Printing string: " << s << endl;
    }
};

int main() {
    Printer printer;
    printer.print(5);        // Calls print(int)
    printer.print(3.14);     // Calls print(double)
    printer.print("Hello");  // Calls print(string)
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Printer</code> ক্লাসে একই নামের বিভিন্ন মেথড আছে কিন্তু তাদের প্যারামিটার ভিন্ন। এটি compile-time polymorphism (ফাংশন ওভারলোডিং) প্রদর্শন করে।
            </p>

            {/* Example 2: Run-time Polymorphism (Method Overriding) */}
            <h4 className="globalSubTitle">Example 2: Run-time Polymorphism (Method Overriding)</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Base {
public:
    virtual void show(int i) {
        cout << "Base class show method with int: " << i << endl;
    }

    virtual void show(double d) {
        cout << "Base class show method with double: " << d << endl;
    }
};

class Derived : public Base {
public:
    void show(int i) override {
        cout << "Derived class show method with int: " << i << endl;
    }

    void show(double d) override {
        cout << "Derived class show method with double: " << d << endl;
    }
};

int main() {
    Base* basePtr;
    Derived derived;
    basePtr = &derived;
    basePtr->show(5);        // Calls Derived's show method with int
    basePtr->show(3.14);     // Calls Derived's show method with double
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Base</code> ক্লাসের <code>show</code> মেথডগুলি ওভারলোড করা হয়েছে এবং <code>Derived</code> ক্লাসে এই মেথডগুলি ওভাররাইড করা হয়েছে। <code>Base</code> ক্লাসের পয়েন্টার দিয়ে <code>Derived</code> ক্লাসের মেথড কল করা হচ্ছে যা run-time polymorphism প্রদর্শন করে।
            </p>

            {/* Example 3: Compile-time Polymorphism (Operator Overloading) */}
            <h4 className="globalSubTitle">Example 3: Compile-time Polymorphism (Operator Overloading)</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Complex {
private:
    float real;
    float imag;
public:
    Complex() : real(0), imag(0) {}
    Complex(float r, float i) : real(r), imag(i) {}

    Complex operator + (const Complex& c) {
        return Complex(real + c.real, imag + c.imag);
    }

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3.5, 2.5), c2(1.5, 4.5);
    Complex c3 = c1 + c2;  // Uses overloaded + operator
    c3.display();
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Complex</code> ক্লাসে <code>+</code> অপারেটর ওভারলোড করা হয়েছে। দুটি <code>Complex</code> অবজেক্ট যোগ করার সময় এই ওভারলোড করা অপারেটর ব্যবহার করা হয়।
            </p>

            {/* Example 4: Run-time Polymorphism (Virtual Destructor) */}
            <h4 className="globalSubTitle">Example 4: Run-time Polymorphism (Virtual Destructor)</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Base {
public:
    virtual ~Base() {
        cout << "Base destructor called" << endl;
    }
};

class Derived : public Base {
public:
    ~Derived() {
        cout << "Derived destructor called" << endl;
    }
};

int main() {
    Base* basePtr = new Derived();
    delete basePtr;  // Calls Derived's destructor
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Base</code> ক্লাসের ডেস্ট্রাক্টরটি <code>virtual</code> ঘোষণা করা হয়েছে। এটি run-time polymorphism প্রদর্শন করে যেখানে <code>Derived</code> ক্লাসের ডেস্ট্রাক্টর কল হবে যখন <code>Base</code> ক্লাসের পয়েন্টার দিয়ে <code>Derived</code> অবজেক্ট ডিলিট করা হবে।
            </p>

            {/* Example 5: Multiple Polymorphism (Combination of Overloading and Overriding) */}
            <h4 className="globalSubTitle">Example 5: Multiple Polymorphism (Combination of Overloading and Overriding)</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Base {
public:
    virtual void display(int i) {
        cout << "Base class display with int: " << i << endl;
    }

    virtual void display(double d) {
        cout << "Base class display with double: " << d << endl;
    }
};

class Derived : public Base {
public:
    void display(int i) override {
        cout << "Derived class display with int: " << i << endl;
    }

    void display(double d) override {
        cout << "Derived class display with double: " << d << endl;
    }
};

int main() {
    Base* basePtr;
    Derived derived;
    basePtr = &derived;
    basePtr->display(5);        // Calls Derived's display(int)
    basePtr->display(3.14);     // Calls Derived's display(double)
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Base</code> ক্লাসের <code>display</code> মেথডগুলি ওভারলোড করা হয়েছে এবং <code>Derived</code> ক্লাসে এই মেথডগুলি ওভাররাইড করা হয়েছে। <code>Base</code> ক্লাসের পয়েন্টার দিয়ে <code>Derived</code> ক্লাসের মেথড কল করা হচ্ছে।
            </p>
        </Container>
    );
}

export default Polymorphism;
