import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Encapsulation(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* Introduction to Encapsulation */}
            <h3 className="title mt-3">Introduction to Encapsulation</h3>
            <p className="globalDescription">
                Encapsulation একটি OOP কৌশল যা Data hide এবং controlled অ্যাক্সেসের মাধ্যমে অবজেক্টের অভ্যন্তরীণ অবস্থান রক্ষা করে। এটি ক্লাসের ডেটা মেম্বার এবং মেথডগুলি প্রাইভেট করে রাখে এবং পাবলিক মেথডগুলির মাধ্যমে এক্সেসের অনুমতি দেয়।
            </p>

            {/* Example 1: Basic Encapsulation */}
            <h4 className="globalSubTitle">Example 1: Basic Encapsulation</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Account {
private:
    double balance;

public:
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    double getBalance() {
        return balance;
    }
};

int main() {
    Account acc;
    acc.deposit(1000);
    cout << "Balance: $" << acc.getBalance() << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Account</code> ক্লাসের <code>balance</code> ভেরিয়েবলটি <code>private</code> এবং শুধুমাত্র <code>deposit</code> এবং <code>getBalance</code> মেথডের মাধ্যমে অ্যাক্সেসযোগ্য। এটি ডেটা সুরক্ষা নিশ্চিত করে এবং অবৈধ অ্যাক্সেস রোধ করে।
            </p>

            {/* Example 2: Encapsulation with Getters and Setters */}
            <h4 className="globalSubTitle">Example 2: Encapsulation with Getters and Setters</h4>
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

    string getName() {
        return name;
    }
};

int main() {
    Person person;
    person.setName("John Doe");
    cout << "Name: " << person.getName() << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Person</code> ক্লাসের <code>name</code> প্রপার্টি <code>private</code> এবং <code>setName</code> এবং <code>getName</code> মেথডের মাধ্যমে সেট এবং রিট্রিভ করা হয়। এটি তথ্য প্রাইভেসি রক্ষা করে।
            </p>

            {/* Example 3: Encapsulation in a Banking System */}
            <h4 className="globalSubTitle">Example 3: Encapsulation in a Banking System</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;

public:
    BankAccount(double initialBalance) {
        if (initialBalance > 0) {
            balance = initialBalance;
        }
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }

    double getBalance() {
        return balance;
    }
};

int main() {
    BankAccount acc(500);
    acc.deposit(150);
    acc.withdraw(100);
    cout << "Balance: $" << acc.getBalance() << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>BankAccount</code> ক্লাসটি ডিপোজিট এবং উইথড্র মেথডের মাধ্যমে ব্যালেন্স পরিচালনা করে। এটি ডেটা অ্যাক্সেস নিয়ন্ত্রণ করে এবং অ্যাক্সেসেবল পাবলিক মেথডের মাধ্যমে অ্যাক্সেস দেয়।
            </p>

            {/* Example 4: Encapsulation with Validation */}
            <h4 className="globalSubTitle">Example 4: Encapsulation with Validation</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Student {
private:
    int age;

public:
    void setAge(int a) {
        if (a > 0 && a < 120) {
            age = a;
        } else {
            cout << "Invalid age" << endl;
        }
    }

    int getAge() {
        return age;
    }
};

int main() {
    Student student;
    student.setAge(20);
    cout << "Age: " << student.getAge() << endl;
    student.setAge(150); // Invalid age
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Student</code> ক্লাসটি <code>age</code> প্রপার্টি সঠিকভাবে ইনিশিয়ালাইজ করার জন্য ভ্যালিডেশন প্রয়োগ করে। এটি নিশ্চিত করে যে <code>age</code> সঠিক সীমার মধ্যে আছে।
            </p>

            {/* Example 5: Encapsulation with Inheritance */}
            <h4 className="globalSubTitle">Example 5: Encapsulation with Inheritance</h4>
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                {`#include <iostream>
using namespace std;

class Shape {
private:
    string color;

public:
    void setColor(string c) {
        color = c;
    }

    string getColor() {
        return color;
    }
};

class Circle : public Shape {
private:
    double radius;

public:
    void setRadius(double r) {
        radius = r;
    }

    double getRadius() {
        return radius;
    }

    double calculateArea() {
        return 3.14 * radius * radius;
    }
};

int main() {
    Circle circle;
    circle.setColor("Red");
    circle.setRadius(5.0);
    cout << "Color: " << circle.getColor() << endl;
    cout << "Radius: " << circle.getRadius() << endl;
    cout << "Area: " << circle.calculateArea() << endl;
    return 0;
}`}
            </SyntaxHighlighter>
            <p className="globalDescription">
                এখানে <code>Shape</code> ক্লাসের <code>color</code> প্রপার্টি ইনহেরিটেন্সের মাধ্যমে <code>Circle</code> ক্লাসে ব্যবহৃত হচ্ছে। <code>Circle</code> ক্লাসের <code>setRadius</code>, <code>getRadius</code>, এবং <code>calculateArea</code> মেথডগুলি ব্যবহার করে চক্রের বৈশিষ্ট্যগুলি সেট এবং রিট্রিভ করা হচ্ছে।
            </p>
        </Container>
    );
}

export default Encapsulation;
