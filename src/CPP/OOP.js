import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Oop(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Basic OOP Concepts */}
            <h3 className="title mt-3">Basic OOP Concepts</h3>
            <p className="globalDescription">
                Object-Oriented Programming (OOP) একটি প্রোগ্রামিং কৌশল যেখানে "অবজেক্ট" এবং "ক্লাস" এর মাধ্যমে কোড সংগঠিত করা হয়। OOP এর মূল ধারণাগুলি হল Encapsulation, Inheritance, Polymorphism, এবং Abstraction।
            </p>

            {/* Class and Object */}
            <h3 className="title mt-3">Class and Object</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

// Define a class
class Car {
public:
    string brand;
    string model;
    int year;

    void displayInfo() {
        cout << "Brand: " << brand << ", Model: " << model << ", Year: " << year << endl;
    }
};

int main() {
    // Create an object of the class
    Car myCar;
    myCar.brand = "Toyota";
    myCar.model = "Corolla";
    myCar.year = 2020;

    myCar.displayInfo(); // Display car info
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Car</code> ক্লাসটি একটি <code>brand</code>, <code>model</code>, এবং <code>year</code> ফিল্ড সহ একটি গাড়ির তথ্য ধারণ করে। <code>displayInfo</code> মেথডটি গাড়ির তথ্য প্রদর্শন করে। <code>myCar</code> অবজেক্টটি এই ক্লাসের একটি ইনস্ট্যান্স এবং এর মাধ্যমে গাড়ির তথ্য সেট এবং প্রদর্শন করা হয়েছে।
            </p>

            {/* Class Method */}
            <h3 className="title mt-3">Class Method</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }

    int subtract(int a, int b) {
        return a - b;
    }
};

int main() {
    Calculator calc;
    cout << "Addition: " << calc.add(5, 3) << endl;
    cout << "Subtraction: " << calc.subtract(5, 3) << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Calculator</code> ক্লাসটি <code>add</code> এবং <code>subtract</code> নামক দুটি মেথড ধারণ করে। এই মেথডগুলি দুটি সংখ্যা যোগ এবং বিয়োগ করতে ব্যবহৃত হয়। <code>calc</code> অবজেক্টের মাধ্যমে এই মেথডগুলি কল করা হয়েছে।
            </p>

            {/* Constructor */}
            <h3 className="title mt-3">Constructor</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Rectangle {
public:
    int width, height;

    // Constructor
    Rectangle(int w, int h) : width(w), height(h) {}

    int area() {
        return width * height;
    }
};

int main() {
    Rectangle rect(10, 5);
    cout << "Area of rectangle: " << rect.area() << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Rectangle</code> ক্লাসটি একটি কনস্ট্রাক্টর ধারণ করে যা <code>width</code> এবং <code>height</code> ইনিশিয়ালাইজ করে। <code>area</code> মেথডটি আয়তনের হিসাব করে। <code>rect</code> অবজেক্ট তৈরি করার সময় কনস্ট্রাক্টরের মাধ্যমে আয়তক্ষেত্রের আকার সেট করা হয়েছে।
            </p>

            {/* Access Modifiers */}
            <h3 className="title mt-3">Access Modifiers</h3>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Person {
private:
    string name;
public:
    void setName(string n) {
        name = n;
    }
    
    void displayName() {
        cout << "Name: " << name << endl;
    }
};

int main() {
    Person person;
    person.setName("Alice");
    person.displayName();
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Person</code> ক্লাসের <code>name</code> ভেরিয়েবলটি <code>private</code> হিসেবে সেট করা হয়েছে, যার মানে এটি ক্লাসের বাইরে থেকে অ্যাক্সেস করা যাবে না। <code>setName</code> এবং <code>displayName</code> মেথডগুলি <code>name</code> পরিবর্তন এবং প্রদর্শন করতে ব্যবহৃত হয়।
            </p>
        </Container>
    );
}

export default Oop;
