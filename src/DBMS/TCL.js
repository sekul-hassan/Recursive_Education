import React from 'react';
import { Container } from "react-bootstrap";

function TCL(props) {
    return (
        <Container fluid="true" className="text-dark mt-2">
            <div className="globalDescription">
                <h1 className="title">ACID Properties of Transactions</h1>
                <ol >
                    <li><strong>Atomicity:</strong>  Atomicity নিশ্চিত করে যে একটি ট্রানজেকশনের সমস্ত অপারেশন একত্রে সম্পন্ন হয়। যদি ট্রানজেকশনের কোন অংশ ব্যর্থ হয়, তবে পুরো ট্রানজেকশন রোলব্যাক হয়ে যায়, ফলে ডেটাবেস অপরিবর্তিত থাকে।</li>
                    <li><strong>Consistency:</strong> Consistency নিশ্চিত করে যে একটি ট্রানজেকশন ডেটাবেসকে একটি সঠিক অবস্থান থেকে অন্য সঠিক অবস্থায় নিয়ে আসে। ট্রানজেকশন শেষ হলে, ডেটাবেস অবশ্যই সঙ্গতিপূর্ণ অবস্থায় থাকবে।</li>
                    <li><strong>Isolation:</strong> Isolation নিশ্চিত করে যে একটি ট্রানজেকশনের অপারেশনগুলি অন্যান্য সমকালীন ট্রানজেকশনগুলির অপারেশন থেকে পৃথক থাকে। একটি ট্রানজেকশন সম্পন্ন না হওয়া পর্যন্ত অন্য ট্রানজেকশনগুলির অপারেশন তার উপর প্রভাব ফেলতে পারে না। </li>
                    <li><strong>Durability:</strong> Durability নিশ্চিত করে যে একবার একটি ট্রানজেকশন কমিট হয়ে গেলে, তার পরিবর্তনগুলি স্থায়ী হয় এবং সিস্টেম ব্যর্থতার ঘটনাতেও হারিয়ে যাবে না।</li>
                </ol>
            </div>
            {/* Example 1: Basic Transaction with INSERT and COMMIT */}
            <h3 className="title">Basic Transaction with INSERT and COMMIT</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
INSERT INTO employees (id, name, department, salary) 
VALUES (1, 'Alice Smith', 'Engineering', 75000.00);
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                <code>BEGIN TRANSACTION</code> একটি নতুন ট্রানজেকশন শুরু করে। <code>INSERT INTO</code> বিবৃতিটি একটি নতুন কর্মচারী রেকর্ড যোগ করে এবং <code>COMMIT</code> সমস্ত পরিবর্তন সংরক্ষণ করে।
            </div>

            {/* Example 2: Transaction with INSERT and ROLLBACK */}
            <h3 className="title">Transaction with INSERT and ROLLBACK</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
INSERT INTO employees (id, name, department, salary) 
VALUES (2, 'Bob Johnson', 'Sales', 70000.00);
ROLLBACK;`}
                </code>
            </pre>
            <div className="globalDescription">
                <code>ROLLBACK</code> ট্রানজেকশনের সময় করা সমস্ত পরিবর্তন বাতিল করে, তাই ইনসার্ট করা রেকর্ডটি সংরক্ষিত হয় না।
            </div>

            {/* Example 3: Transaction with Multiple INSERTS */}
            <h3 className="title">Transaction with Multiple INSERTS</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
INSERT INTO employees (id, name, department, salary) 
VALUES (3, 'Carol White', 'HR', 60000.00);
INSERT INTO employees (id, name, department, salary) 
VALUES (4, 'David Green', 'Finance', 72000.00);
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                একাধিক রেকর্ড `employees` টেবিলের মধ্যে ইনসার্ট করা হয়েছে এবং <code>COMMIT</code> নিশ্চিত করে যে সমস্ত রেকর্ড সংরক্ষিত হয়।
            </div>

            {/* Example 4: Transaction with UPDATE and ROLLBACK */}
            <h3 className="title">Transaction with UPDATE and ROLLBACK</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
UPDATE employees 
SET salary = 78000.00 
WHERE id = 1;
ROLLBACK;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশন একটি কর্মচারীর বেতন আপডেট করে কিন্তু <code>ROLLBACK</code> ট্রানজেকশনের পরিবর্তনগুলি বাতিল করে, তাই কোন আপডেট সংরক্ষিত হয় না।
            </div>

            {/* Example 5: Transaction with SAVEPOINT */}
            <h3 className="title">Transaction with SAVEPOINT</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
INSERT INTO employees (id, name, department, salary) 
VALUES (5, 'Emma Davis', 'Marketing', 80000.00);
SAVEPOINT savepoint1;
UPDATE employees 
SET salary = 85000.00 
WHERE id = 5;
ROLLBACK TO SAVEPOINT savepoint1;
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশন একটি সেভপয়েন্ট সেট করে এবং পরে সেই সেভপয়েন্টে ফিরে যায়, আপডেটটি রোলব্যাক করে কিন্তু প্রাথমিক ইনসার্ট রেখে দেয়।
            </div>

            {/* Example 6: Transaction with SET TRANSACTION READ ONLY */}
            <h3 className="title">Transaction with SET TRANSACTION READ ONLY</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
SET TRANSACTION READ ONLY;
-- Read operations only
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি পড়া-মাত্র মোডে সেট করা হয়েছে, শুধুমাত্র পড়ার অপারেশনগুলি অনুমোদিত। লেখার চেষ্টা করলে ত্রুটি হবে।
            </div>

            {/* Example 7: Transaction with SET TRANSACTION READ WRITE */}
            <h3 className="title">Transaction with SET TRANSACTION READ WRITE</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
SET TRANSACTION READ WRITE;
-- Read and write operations
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি পড়া এবং লেখার উভয় অপারেশনই অনুমোদিত। এটি ডেটা পরিবর্তন করতে সক্ষম করে।
            </div>

            {/* Example 8: Transaction with Nested Transactions */}
            <h3 className="title">Transaction with Nested Transactions</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
-- Parent transaction
BEGIN TRANSACTION;
-- Child transaction operations
COMMIT;
-- Parent transaction continues
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই উদাহরণে একটি প্যারেন্ট ট্রানজেকশন এবং একটি নেস্টেড চাইল্ড ট্রানজেকশন রয়েছে। উভয় ট্রানজেকশনই কমিট করতে হয় সব পরিবর্তন সংরক্ষণ করতে।
            </div>

            {/* Example 9: Transaction with Multiple ROLLBACKS */}
            <h3 className="title">Transaction with Multiple ROLLBACKS</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
INSERT INTO employees (id, name, department, salary) 
VALUES (6, 'George Wilson', 'IT', 95000.00);
SAVEPOINT sp1;
DELETE FROM employees 
WHERE id = 6;
ROLLBACK TO SAVEPOINT sp1;
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি একাধিক রোলব্যাক অন্তর্ভুক্ত করে। একটি রেকর্ড ইনসার্ট করা হয়, একটি ডিলিট অপারেশন করা হয়, কিন্তু ডিলিট অপারেশন সেভপয়েন্টে ফিরে যায়, প্রাথমিক ইনসার্ট রেখে দেয়।
            </div>

            {/* Example 10: Transaction with SET TRANSACTION ISOLATION LEVEL */}
            <h3 className="title">Transaction with SET TRANSACTION ISOLATION LEVEL</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- Operations with SERIALIZABLE isolation
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি আইসোলেশন স্তরকে SERIALIZABLE এ সেট করে, সসঙ্গত ট্রানজেকশনগুলির জন্য সর্বোচ্চ স্তরের আইসোলেশন নিশ্চিত করে।
            </div>

            {/* Example 11: Transaction with INSERT, UPDATE, and ROLLBACK */}
            <h3 className="title">Transaction with INSERT, UPDATE, and ROLLBACK</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
INSERT INTO employees (id, name, department, salary) 
VALUES (7, 'Hannah Lee', 'Marketing', 83000.00);
UPDATE employees 
SET salary = 88000.00 
WHERE id = 7;
ROLLBACK;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি একটি রেকর্ড ইনসার্ট এবং আপডেট করে কিন্তু <code>ROLLBACK</code> দ্বারা পরিবর্তনগুলি বাতিল করে, তাই কোন আপডেট সংরক্ষিত হয় না।
            </div>

            {/* Example 12: Transaction with DELETE and COMMIT */}
            <h3 className="title">Transaction with DELETE and COMMIT</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
DELETE FROM employees 
WHERE id = 2;
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি একটি রেকর্ড মুছে দেয় এবং <code>COMMIT</code> দ্বারা পরিবর্তনগুলি স্থায়ী করে।
            </div>

            {/* Example 13: Transaction with INSERT and SAVEPOINT */}
            <h3 className="title">Transaction with INSERT and SAVEPOINT</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
INSERT INTO employees (id, name, department, salary) 
VALUES (8, 'Ivy Wilson', 'IT', 95000.00);
SAVEPOINT savepoint2;
-- Further operations
ROLLBACK TO SAVEPOINT savepoint2;
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশন একটি সেভপয়েন্ট সেট করে এবং পরে সেই সেভপয়েন্টে ফিরে যায়, পরবর্তীতে অপারেশনগুলি রোলব্যাক করে, ইনসার্ট রাখা হয়।
            </div>

            {/* Example 14: Transaction with Complex UPDATE */}
            <h3 className="title">Transaction with Complex UPDATE</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
UPDATE employees 
SET salary = salary * 1.1 
WHERE department = 'Sales';
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি `Sales` বিভাগে সকল কর্মচারীর বেতন 10% বৃদ্ধি করে এবং <code>COMMIT</code> দ্বারা পরিবর্তনগুলি সংরক্ষণ করে।
            </div>

            {/* Example 15: Transaction with INSERT and Multiple ROLLBACKS */}
            <h3 className="title">Transaction with INSERT and Multiple ROLLBACKS</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
INSERT INTO employees (id, name, department, salary) 
VALUES (9, 'Jack Lee', 'HR', 70000.00);
SAVEPOINT savepoint3;
DELETE FROM employees 
WHERE id = 9;
ROLLBACK TO SAVEPOINT savepoint3;
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি একটি রেকর্ড ইনসার্ট করে এবং তারপর মুছে ফেলে, কিন্তু <code>ROLLBACK TO SAVEPOINT</code> দ্বারা মুছে ফেলা রেকর্ড পুনরুদ্ধার করে।
            </div>

            {/* Example 16: Transaction with SET TRANSACTION READ ONLY and INSERT */}
            <h3 className="title">Transaction with SET TRANSACTION READ ONLY and INSERT</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
SET TRANSACTION READ ONLY;
-- Read operations
-- INSERT operation will fail
ROLLBACK;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি পড়া-মাত্র মোডে সেট করা হয়েছে, এতে ইনসার্ট অপারেশন ব্যর্থ হবে এবং পরিবর্তনগুলি রোলব্যাক করা হবে।
            </div>

            {/* Example 17: Transaction with Nested SAVEPOINT */}
            <h3 className="title">Transaction with Nested SAVEPOINT</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
SAVEPOINT sp2;
-- Operations
SAVEPOINT sp3;
-- Further operations
ROLLBACK TO SAVEPOINT sp2;
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি একটি নেস্টেড সেভপয়েন্ট ব্যবহার করে। প্রথম সেভপয়েন্টে ফিরে যাওয়া হয়, এবং দ্বিতীয় সেভপয়েন্টের অপারেশনগুলি বাতিল করা হয়।
            </div>

            {/* Example 18: Transaction with SET TRANSACTION ISOLATION LEVEL READ COMMITTED */}
            <h3 className="title">Transaction with SET TRANSACTION ISOLATION LEVEL READ COMMITTED</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- Operations with READ COMMITTED isolation
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি আইসোলেশন স্তরকে READ COMMITTED এ সেট করে, যা নিশ্চিত করে যে পড়ার সময় কেবলমাত্র কমিট হওয়া পরিবর্তনগুলি দেখা যায়।
            </div>

            {/* Example 19: Transaction with Complex DELETE */}
            <h3 className="title">Transaction with Complex DELETE</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
DELETE FROM employees 
WHERE salary < 60000.00;
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি সকল কর্মচারীকে মুছে দেয় যাদের বেতন 60000.00 এর কম এবং <code>COMMIT</code> দ্বারা পরিবর্তনগুলি স্থায়ী করে।
            </div>

            {/* Example 20: Transaction with SET TRANSACTION READ WRITE and SAVEPOINT */}
            <h3 className="title">Transaction with SET TRANSACTION READ WRITE and SAVEPOINT</h3>
            <pre className="globalDescription">
                <code>
                    {`BEGIN TRANSACTION;
SET TRANSACTION READ WRITE;
SAVEPOINT sp4;
-- Operations
ROLLBACK TO SAVEPOINT sp4;
COMMIT;`}
                </code>
            </pre>
            <div className="globalDescription">
                এই ট্রানজেকশনটি পড়া এবং লেখার মোডে সেট করা হয়েছে এবং একটি সেভপয়েন্ট ব্যবহার করে যা পরবর্তীতে ফিরে যাওয়া হয়, পরিবর্তনগুলি রোলব্যাক করে।
            </div>
        </Container>
    );
}

export default TCL;
