import React from 'react';
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function DDL(props) {
    return (
        <Container fluid="true" className="globalDescription text-dark">
            <span className="globalSubTitle">CREATE TABLE Command Example:</span>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`CREATE TABLE employees (
                    id INT PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    department VARCHAR(50),
                    salary DECIMAL(10, 2)
                );`}
            </SyntaxHighlighter>
            <span>
                <code>CREATE TABLE</code> কমান্ডটি ডাটাবেজে একটি নতুন টেবিল তৈরির জন্য ব্যবহার করা হয়। উপরের উদাহরণে একটি <code>employees</code> নামের টেবিল তৈরি করা হয়েছে, যেখানে চারটি কলাম আছে: <code>id</code>, <code>name</code>, <code>department</code>, এবং <code>salary</code>। <code>id</code> কলামটি integer এবং এটিকে primary key হিসাবে সেট করা হয়েছে, যা টেবিলের প্রতিটি row কে uniquely identify করে। <code>name</code> কলামটি একটি string, যার max length 100 characters এবং এটি empty থাকতে পারবে না। <code>department</code> কলামটি একটি string, যার max length 50 characters এবং এটি empty থাকতে পারে। <code>salary</code> কলামটি একটি দশমিক সংখ্যা, যা max length 10 characters পর্যন্ত হতে পারে, যার মধ্যে 2টি সংখ্যা দশমিকের পরে থাকতে পারে, এবং এটি খালি থাকতে পারে।
            </span>
            <br /><br />

            <span className="globalSubTitle">CREATE TABLE with AUTO_INCREMENT Primary Key:</span>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`CREATE TABLE products (
                    product_id INT PRIMARY KEY AUTO_INCREMENT,
                    product_name VARCHAR(100) NOT NULL,
                    price DECIMAL(10, 2) NOT NULL
                );`}
            </SyntaxHighlighter>
            <span>
                <code>CREATE TABLE</code> কমান্ডটি একটি নতুন টেবিল তৈরি করতে ব্যবহৃত হয়, যেখানে <code>AUTO_INCREMENT</code> কলামটি প্রতিটি নতুন রেকর্ডের জন্য স্বয়ংক্রিয়ভাবে একটি অনন্য সংখ্যা তৈরি করে। উপরের উদাহরণে <code>products</code> নামের একটি টেবিল তৈরি করা হয়েছে যেখানে <code>product_id</code> কলামটি একটি <code>AUTO_INCREMENT</code> integer এবং primary key হিসেবে সেট করা হয়েছে।
            </span>
            <br /><br />

            <span className="globalSubTitle">ALTER TABLE Command Example:</span>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`ALTER TABLE employees
ADD email VARCHAR(255);`}
            </SyntaxHighlighter>
            <span>
                <code>ALTER TABLE</code> কমান্ডটি বিদ্যমান একটি টেবিলের কাঠামো পরিবর্তন করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলের মধ্যে একটি নতুন <code>email</code> কলাম যোগ করা হয়েছে, যা <code>VARCHAR(255)</code> টাইপের।
            </span>
            <br /><br />

            <span className="globalSubTitle">DROP TABLE Command Example:</span>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`DROP TABLE employees;`}
            </SyntaxHighlighter>
            <span>
                <code>DROP TABLE</code> কমান্ডটি একটি টেবিলকে স্থায়ীভাবে ডাটাবেজ থেকে মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলটি মুছে ফেলা হয়েছে।
            </span>
            <br /><br />

            <span className="globalSubTitle">TRUNCATE TABLE Command Example:</span>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`TRUNCATE TABLE employees;`}
            </SyntaxHighlighter>
            <span>
                <code>TRUNCATE TABLE</code> কমান্ডটি টেবিলের সমস্ত রেকর্ড মুছে ফেলার জন্য ব্যবহার করা হয়, তবে টেবিলের কাঠামো বজায় থাকে। উপরের উদাহরণে <code>employees</code> টেবিলের সমস্ত রেকর্ড মুছে ফেলা হয়েছে, কিন্তু টেবিলের কাঠামো অপরিবর্তিত থাকে।
            </span>
            <br /><br />

            <span className="globalSubTitle">COMMENT ON TABLE Command Example:</span>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`COMMENT ON TABLE employees IS 'Table to store employee details';`}
            </SyntaxHighlighter>
            <span>
                <code>COMMENT ON TABLE</code> কমান্ডটি একটি টেবিলের জন্য মন্তব্য যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলের উদ্দেশ্য সম্পর্কে একটি মন্তব্য যোগ করা হয়েছে।
            </span>
            <br /><br />

            <span className="globalSubTitle">RENAME TABLE Command Example:</span>
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`ALTER TABLE employees RENAME TO staff;`}
            </SyntaxHighlighter>
            <span>
                <code>RENAME TABLE</code> কমান্ডটি একটি টেবিলের নাম পরিবর্তন করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলটির নাম পরিবর্তন করে <code>staff</code> রাখা হয়েছে।
            </span>
        </Container>
    );
}

export default DDL;
