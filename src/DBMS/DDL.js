import React from 'react';
import { Container } from "react-bootstrap";

function DDL(props) {
    return (
        <Container fluid="true" className="globalDescription text-dark">
            <h3 className="title mt-3">CREATE TABLE Command Example</h3>
            <pre>
                <code>
                    {`CREATE TABLE employees (
                        id INT PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        department VARCHAR(50),
                        salary DECIMAL(10, 2)
                    );`}
                </code>
            </pre>
            <code>CREATE TABLE</code> কমান্ডটি ডাটাবেজে একটি নতুন টেবিল তৈরির জন্য ব্যবহার করা হয়। উপরের উদাহরণে
            একটি <code>employees</code> নামের টেবিল তৈরি করা হয়েছে, যেখানে চারটি কলাম
            আছে: <code>id</code>, <code>name</code>, <code>department</code>,
            এবং <code>salary</code>। <code>id</code> কলামটি integer এবং এটিকে primary key হিসাবে সেট করা
            হয়েছে, যা টেবিলের প্রতিটি row কে uniquely identify করে। <code>name</code> কলামটি একটি string, যার
            max length 100 characters এবং এটি empty থাকতে পারবে না। <code>department</code> কলামটি একটি string, যার
            max length 50 characters এবং এটি empty থাকতে পারে। <code>salary</code> কলামটি একটি দশমিক সংখ্যা, যা
            max length 10 characters পর্যন্ত হতে পারে, যার মধ্যে 2টি সংখ্যা দশমিকের পরে থাকতে পারে, এবং এটি খালি থাকতে
            পারে।

            <h3 className="title mt-3">CREATE TABLE with AUTO_INCREMENT Primary Key</h3>
            <pre>
                <code>
                    {`CREATE TABLE products (
                        product_id INT PRIMARY KEY AUTO_INCREMENT,
                        product_name VARCHAR(100) NOT NULL,
                        price DECIMAL(10, 2) NOT NULL
                    );`}
                </code>
            </pre>
            <code>CREATE TABLE</code> কমান্ডটি একটি নতুন টেবিল তৈরি করতে ব্যবহৃত হয়, যেখানে <code>AUTO_INCREMENT</code> কলামটি প্রতিটি নতুন রেকর্ডের জন্য স্বয়ংক্রিয়ভাবে একটি অনন্য সংখ্যা তৈরি করে। উপরের উদাহরণে <code>products</code> নামের একটি টেবিল তৈরি করা হয়েছে যেখানে <code>product_id</code> কলামটি একটি <code>AUTO_INCREMENT</code> integer এবং primary key হিসেবে সেট করা হয়েছে।

            <h3 className="title mt-3">ALTER TABLE Command Example</h3>
            <pre>
                <code>
                    {`ALTER TABLE employees
ADD email VARCHAR(255);`}
                </code>
            </pre>
            <code>ALTER TABLE</code> কমান্ডটি বিদ্যমান একটি টেবিলের কাঠামো পরিবর্তন করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে
            <code>employees</code> টেবিলের মধ্যে একটি নতুন <code>email</code> কলাম যোগ করা হয়েছে, যা <code>VARCHAR(255)</code> টাইপের।

            <h3 className="title mt-3">DROP TABLE Command Example</h3>
            <pre>
                <code>
                    {`DROP TABLE employees;`}
                </code>
            </pre>
            <code>DROP TABLE</code> কমান্ডটি একটি টেবিলকে স্থায়ীভাবে ডাটাবেজ থেকে মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলটি মুছে ফেলা হয়েছে।

            <h3 className="title mt-3">TRUNCATE TABLE Command Example</h3>
            <pre>
                <code>
                    {`TRUNCATE TABLE employees;`}
                </code>
            </pre>
            <code>TRUNCATE TABLE</code> কমান্ডটি টেবিলের সমস্ত রেকর্ড মুছে ফেলার জন্য ব্যবহার করা হয়, তবে টেবিলের কাঠামো বজায় থাকে। উপরের উদাহরণে <code>employees</code> টেবিলের সমস্ত রেকর্ড মুছে ফেলা হয়েছে, কিন্তু টেবিলের কাঠামো অপরিবর্তিত থাকে।

            <h3 className="title mt-3">COMMENT ON TABLE Command Example</h3>
            <pre>
                <code>
                    {`COMMENT ON TABLE employees IS 'Table to store employee details';`}
                </code>
            </pre>
            <code>COMMENT ON TABLE</code> কমান্ডটি একটি টেবিলের জন্য মন্তব্য যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলের উদ্দেশ্য সম্পর্কে একটি মন্তব্য যোগ করা হয়েছে।

            <h3 className="title mt-3">RENAME TABLE Command Example</h3>
            <pre>
                <code>
                    {`ALTER TABLE employees RENAME TO staff;`}
                </code>
            </pre>
            <code>RENAME TABLE</code> কমান্ডটি একটি টেবিলের নাম পরিবর্তন করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলটির নাম পরিবর্তন করে <code>staff</code> রাখা হয়েছে।
        </Container>
    );
}

export default DDL;
