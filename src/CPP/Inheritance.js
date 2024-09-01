import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Inheritance(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Introduction to Inheritance */}
            <h3 className="title mt-3">Introduction to Inheritance</h3>
            <p className="globalDescription">
                Inheritance হলো একটি OOP কৌশল যা একটি ক্লাসকে অন্য ক্লাসের বৈশিষ্ট্য এবং আচরণ পুনঃব্যবহার করার সুযোগ দেয়। একটি বেস ক্লাস এবং একটি বা একাধিক ডেরাইভড ক্লাস থাকে। এটি কোড পুনরাবৃত্তি কমায় এবং ক্লাসের মধ্যে সম্পর্ক তৈরি করে।
            </p>

            {/* Example 1: Basic Inheritance */}
            <h4 className="globalSubTitle">Example 1: Basic Inheritance</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Animal eats food" << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Dog dog;
    dog.eat();  // Inherited method
    dog.bark(); // Derived class method
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Dog</code> ক্লাসটি <code>Animal</code> ক্লাস থেকে ইনহেরিট করেছে। <code>Dog</code> ক্লাসের একটি <code>eat</code> মেথড আছে যা <code>Animal</code> ক্লাস থেকে ইনহেরিটেড।
            </p>

            {/* Example 2: Inheritance with Constructor */}
            <h4 className="globalSubTitle">Example 2: Inheritance with Constructor</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Vehicle {
public:
    Vehicle(string b) : brand(b) {}
    void showBrand() {
        cout << "Brand: " << brand << endl;
    }
private:
    string brand;
};

class Car : public Vehicle {
public:
    Car(string b, int y) : Vehicle(b), year(y) {}
    void showDetails() {
        showBrand();
        cout << "Year: " << year << endl;
    }
private:
    int year;
};

int main() {
    Car car("Toyota", 2020);
    car.showDetails();
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Car</code> ক্লাসটি <code>Vehicle</code> ক্লাস থেকে ইনহেরিট করেছে এবং <code>Vehicle</code> ক্লাসের কনস্ট্রাক্টর ব্যবহার করেছে। <code>Car</code> ক্লাসের কনস্ট্রাক্টর <code>Vehicle</code> ক্লাসের কনস্ট্রাক্টরকে কল করে।
            </p>

            {/* Example 3: Inheritance with Method Overriding */}
            <h4 className="globalSubTitle">Example 3: Inheritance with Method Overriding</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() {
        cout << "Drawing Shape" << endl;
    }
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
};

int main() {
    Shape* shape;
    Circle circle;
    shape = &circle;
    shape->draw();  // Calls Circle's draw method
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Circle</code> ক্লাসটি <code>Shape</code> ক্লাসের <code>draw</code> মেথডটি ওভাররাইড করেছে। <code>Shape</code> ক্লাসের পয়েন্টার ব্যবহার করে <code>draw</code> মেথড কল করা হলে <code>Circle</code> ক্লাসের <code>draw</code> মেথডটি কল হবে।
            </p>

            {/* Example 4: Inheritance with Protected Access Modifier */}
            <h4 className="globalSubTitle">Example 4: Inheritance with Protected Access Modifier</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Base {
protected:
    int protectedValue;
public:
    Base() : protectedValue(10) {}
};

class Derived : public Base {
public:
    void showValue() {
        cout << "Protected value: " << protectedValue << endl;
    }
};

int main() {
    Derived obj;
    obj.showValue();
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Base</code> ক্লাসের <code>protectedValue</code> প্রপার্টি <code>protected</code> এক্সেস মোডিফায়ার দিয়ে সজ্জিত এবং <code>Derived</code> ক্লাসের মাধ্যমে অ্যাক্সেস করা হয়েছে। <code>Derived</code> ক্লাসের <code>showValue</code> মেথড ব্যবহার করে এর মান প্রদর্শিত হচ্ছে।
            </p>

            {/* Example 5: Multi-level Inheritance */}
            <h4 className="globalSubTitle">Example 5: Multi-level Inheritance</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Animal eats" << endl;
    }
};

class Mammal : public Animal {
public:
    void breathe() {
        cout << "Mammal breathes" << endl;
    }
};

class Dog : public Mammal {
public:
    void bark() {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Dog dog;
    dog.eat();    // From Animal
    dog.breathe(); // From Mammal
    dog.bark();   // Own method
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Dog</code> ক্লাসটি <code>Mammal</code> ক্লাসের মাধ্যমে <code>Animal</code> ক্লাস থেকে বৈশিষ্ট্য গ্রহণ করেছে। এটি মাল্টি-লেভেল ইনহেরিটেন্স প্রদর্শন করে যেখানে <code>Dog</code> ক্লাস <code>Animal</code> এবং <code>Mammal</code> ক্লাসের বৈশিষ্ট্যসমূহ ধারণ করে।
            </p>

            {/* Example 6: Hierarchical Inheritance */}
            <h4 className="globalSubTitle">Example 6: Hierarchical Inheritance</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Shape {
public:
    void draw() {
        cout << "Drawing Shape" << endl;
    }
};

class Circle : public Shape {
public:
    void draw() {
        cout << "Drawing Circle" << endl;
    }
};

class Square : public Shape {
public:
    void draw() {
        cout << "Drawing Square" << endl;
    }
};

int main() {
    Circle circle;
    Square square;
    circle.draw();  // Draws Circle
    square.draw();  // Draws Square
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Circle</code> এবং <code>Square</code> ক্লাসগুলি <code>Shape</code> ক্লাস থেকে ইনহেরিট করেছে। এটি হায়ারার্কিকাল ইনহেরিটেন্স প্রদর্শন করে যেখানে একাধিক ক্লাস একটি সাধারণ বেস ক্লাস থেকে ইনহেরিট করে।
            </p>

            {/* Example 7: Multiple Inheritance */}
            <h4 className="globalSubTitle">Example 7: Multiple Inheritance</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Base1 {
public:
    void showBase1() {
        cout << "Base1 class" << endl;
    }
};

class Base2 {
public:
    void showBase2() {
        cout << "Base2 class" << endl;
    }
};

class Derived : public Base1, public Base2 {
public:
    void showDerived() {
        cout << "Derived class" << endl;
    }
};

int main() {
    Derived obj;
    obj.showBase1();
    obj.showBase2();
    obj.showDerived();
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Derived</code> ক্লাসটি <code>Base1</code> এবং <code>Base2</code> ক্লাস থেকে ইনহেরিট করেছে। এটি মাল্টিপল ইনহেরিটেন্স প্রদর্শন করে যেখানে একটি ক্লাস একাধিক বেস ক্লাস থেকে বৈশিষ্ট্য গ্রহণ করে।
            </p>
        </Container>
    );
}

export default Inheritance;
