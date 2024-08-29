import React from 'react';
import { Container } from "react-bootstrap";

function DML(props) {
    return (
        <Container fluid="true" className="text-dark">
            <h3 className="title mt-3">INSERT INTO Command Example</h3>
            <pre>
                <code>
                    {`INSERT INTO employees (id, name, department, salary) 
VALUES (1, 'John Doe', 'HR', 50000.00);`}
                </code>
            </pre>

            <code>INSERT INTO</code> কমান্ডটি একটি টেবিলে নতুন রেকর্ড যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলে নির্দিষ্ট মানগুলি সহ একটি রেকর্ড যোগ করা হয়েছে।

            <h3 className="title mt-3">UPDATE Command Example</h3>
            <pre>
                <code>
                    {`UPDATE employees 
SET salary = 55000.00 
WHERE id = 1;`}
                </code>
            </pre>

            <code>UPDATE</code> কমান্ডটি একটি টেবিলের বিদ্যমান রেকর্ডগুলির তথ্য পরিবর্তন করতে ব্যবহার করা হয়। উপরের উদাহরণে <code>id = 1</code> এর জন্য <code>salary</code> আপডেট করা হয়েছে <code>55000.00</code> এ।

            <h3 className="title mt-3">DELETE Command Example</h3>
            <pre>
                <code>
                    {`DELETE FROM employees 
WHERE id = 1;`}
                </code>
            </pre>

            <code>DELETE</code> কমান্ডটি একটি টেবিল থেকে নির্দিষ্ট রেকর্ড মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>id = 1</code> রেকর্ডটি <code>employees</code> টেবিল থেকে মুছে ফেলা হয়েছে।

            <h3 className="title mt-3">SELECT Command Example</h3>
            <pre>
                <code>
                    {`SELECT * FROM employees;`}
                </code>
            </pre>
            <code>SELECT</code> কমান্ডটি একটি টেবিল থেকে রেকর্ডগুলি পুনরুদ্ধার করতে ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলের সমস্ত রেকর্ড নির্বাচন করা হয়েছে।
        </Container>
    );
}

export default DML;
