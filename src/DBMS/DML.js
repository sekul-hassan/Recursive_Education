import React from 'react';
import { Container } from "react-bootstrap";

function DML(props) {
    return (
        <Container fluid="true" className="text-dark">
            {/* INSERT INTO Command Example */}
            <h3 className="title mt-3">INSERT INTO Command Example</h3>
            <pre>
                <code>
                    {`INSERT INTO employees (id, name, department, salary) 
VALUES (1, 'John Doe', 'HR', 50000.00);`}
                </code>
            </pre>
            <p><code>INSERT INTO</code> কমান্ডটি একটি টেবিলে নতুন রেকর্ড যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলে নির্দিষ্ট মানগুলি সহ একটি রেকর্ড যোগ করা হয়েছে।</p>

            {/* UPDATE Command Example */}
            <h3 className="title mt-3">UPDATE Command Example</h3>
            <pre>
                <code>
                    {`UPDATE employees 
SET salary = 55000.00 
WHERE id = 1;`}
                </code>
            </pre>
            <p><code>UPDATE</code> কমান্ডটি একটি টেবিলের বিদ্যমান রেকর্ডগুলির তথ্য পরিবর্তন করতে ব্যবহার করা হয়। উপরের উদাহরণে <code>id = 1</code> এর জন্য <code>salary</code> আপডেট করা হয়েছে <code>55000.00</code> এ।</p>

            {/* DELETE Command Example */}
            <h3 className="title mt-3">DELETE Command Example</h3>
            <pre>
                <code>
                    {`DELETE FROM employees 
WHERE id = 1;`}
                </code>
            </pre>
            <p><code>DELETE</code> কমান্ডটি একটি টেবিল থেকে নির্দিষ্ট রেকর্ড মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে <code>id = 1</code> রেকর্ডটি <code>employees</code> টেবিল থেকে মুছে ফেলা হয়েছে।</p>

            {/* SELECT Command Example */}
            <h3 className="title mt-3">SELECT Command Example</h3>
            <pre>
                <code>
                    {`SELECT * FROM employees;`}
                </code>
            </pre>
            <p><code>SELECT</code> কমান্ডটি একটি টেবিল থেকে রেকর্ডগুলি পুনরুদ্ধার করতে ব্যবহার করা হয়। উপরের উদাহরণে <code>employees</code> টেবিলের সমস্ত রেকর্ড নির্বাচন করা হয়েছে।</p>

            {/* INSERT INTO with SELECT Command Example */}
            <h3 className="title mt-3">INSERT INTO with SELECT Command Example</h3>
            <pre>
                <code>
                    {`INSERT INTO employees_backup (id, name, department, salary) 
SELECT id, name, department, salary 
FROM employees 
WHERE department = 'HR';`}
                </code>
            </pre>
            <p><code>INSERT INTO</code> কমান্ডের সাথে <code>SELECT</code> ব্যবহার করা হয় ডেটা এক টেবিল থেকে আরেক টেবিলে কপি করতে। উপরের উদাহরণে, <code>employees</code> টেবিলের <code>HR</code> বিভাগের সমস্ত রেকর্ড <code>employees_backup</code> টেবিলে কপি করা হয়েছে।</p>

            {/* UPSERT (MERGE) Command Example */}
            <h3 className="title mt-3">UPSERT (MERGE) Command Example</h3>
            <pre>
                <code>
                    {`MERGE INTO employees AS target 
USING (VALUES (1, 'John Doe', 'HR', 55000.00)) AS source (id, name, department, salary) 
ON target.id = source.id 
WHEN MATCHED THEN 
    UPDATE SET salary = source.salary 
WHEN NOT MATCHED THEN 
    INSERT (id, name, department, salary) 
    VALUES (source.id, source.name, source.department, source.salary);`}
                </code>
            </pre>
            <p><code>UPSERT</code> বা <code>MERGE</code> কমান্ডটি ডাটাবেজে রেকর্ড আপডেট বা যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে, যদি <code>id = 1</code> এর জন্য রেকর্ড বিদ্যমান থাকে তবে এটি আপডেট করা হবে; অন্যথায় একটি নতুন রেকর্ড যোগ করা হবে।</p>

            {/* TRUNCATE Command Example */}
            <h3 className="title mt-3">TRUNCATE Command Example</h3>
            <pre>
                <code>
                    {`TRUNCATE TABLE employees;`}
                </code>
            </pre>
            <p><code>TRUNCATE</code> কমান্ডটি একটি টেবিলের সমস্ত রেকর্ড দ্রুত মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে, <code>employees</code> টেবিলের সমস্ত রেকর্ড মুছে ফেলা হয়েছে, তবে টেবিলের কাঠামো বজায় থাকে।</p>

            {/* DELETE with JOIN Command Example */}
            <h3 className="title mt-3">DELETE with JOIN Command Example</h3>
            <pre>
                <code>
                    {`DELETE e 
FROM employees e 
JOIN departments d ON e.department = d.name 
WHERE d.location = 'New York';`}
                </code>
            </pre>
            <p><code>DELETE</code> কমান্ডটি <code>JOIN</code> এর মাধ্যমে ব্যবহার করা যেতে পারে নির্দিষ্ট শর্তের উপর ভিত্তি করে রেকর্ড মুছে ফেলার জন্য। উপরের উদাহরণে, <code>New York</code> লোকেশনের সমস্ত <code>department</code> এর সাথে সম্পর্কিত <code>employees</code> টেবিলের রেকর্ডগুলি মুছে ফেলা হয়েছে।</p>
        </Container>
    );
}

export default DML;
