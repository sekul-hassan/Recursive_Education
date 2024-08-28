import React from 'react';
import { Container } from "react-bootstrap";

function Query(props) {
    return (
        <Container fluid="true" className="text-dark">
            <h5 className="title">Database Queries – ডাটাবেস কোয়েরিস</h5>

            {/* Data Definition Language (DDL) */}
            <h6 className="queryTitle">Data Definition Language (DDL) – ডেটা ডেফিনিশন ল্যাঙ্গুয়েজ:</h6>
            <p className="globalDescription">
                DDL is used to define or modify the structure of the database.
                <br />ডেটাবেসের কাঠামো সংজ্ঞায়িত বা পরিবর্তন করার জন্য DDL ব্যবহার করা হয়।
            </p>
            <p className="queryExample">
                <strong>CREATE:</strong> <code>CREATE TABLE Students (ID INT, Name VARCHAR(100));</code>
                <br />নতুন ডেটাবেস বা অবজেক্ট (যেমন টেবিল, ইনডেক্স) তৈরির জন্য ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>ALTER:</strong> <code>ALTER TABLE Students ADD Age INT;</code>
                <br />বিদ্যমান ডেটাবেসের কাঠামো পরিবর্তন করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>DROP:</strong> <code>DROP TABLE Students;</code>
                <br />ডেটাবেস থেকে অবজেক্ট মুছে ফেলার জন্য ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>TRUNCATE:</strong> <code>TRUNCATE TABLE Students;</code>
                <br />টেবিল থেকে সমস্ত রেকর্ড সরাতে ব্যবহৃত হয়, কিন্তু টেবিলের কাঠামো বজায় থাকে।
            </p>
            <p className="queryExample">
                <strong>COMMENT:</strong> <code>COMMENT ON TABLE Students IS 'Student information';</code>
                <br />ডেটা ডিকশনারিতে মন্তব্য যোগ করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>RENAME:</strong> <code>RENAME TABLE Students TO Pupils;</code>
                <br />অবজেক্টের নাম পরিবর্তন করতে ব্যবহৃত হয়।
            </p>

            {/* Data Manipulation Language (DML) */}
            <h6 className="queryTitle">Data Manipulation Language (DML) – ডেটা ম্যানিপুলেশন ল্যাঙ্গুয়েজ:</h6>
            <p className="globalDescription">
                DML is used to retrieve, insert, update, and delete data in the database.
                <br />ডেটাবেসে ডেটা পুনরুদ্ধার, সন্নিবেশ, আপডেট এবং মুছে ফেলার জন্য DML ব্যবহার করা হয়।
            </p>
            <p className="queryExample">
                <strong>SELECT:</strong> <code>SELECT * FROM Students;</code>
                <br />ডেটাবেস থেকে ডেটা পুনরুদ্ধার করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>INSERT:</strong> <code>INSERT INTO Students (ID, Name) VALUES (1, 'John Doe');</code>
                <br />টেবিলে নতুন ডেটা সন্নিবেশ করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>UPDATE:</strong> <code>UPDATE Students SET Name = 'Jane Doe' WHERE ID = 1;</code>
                <br />বিদ্যমান ডেটা আপডেট করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>DELETE:</strong> <code>DELETE FROM Students WHERE ID = 1;</code>
                <br />টেবিল থেকে রেকর্ড মুছে ফেলতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>MERGE:</strong> <code>MERGE INTO Students USING NewStudents ON (Students.ID = NewStudents.ID);</code>
                <br />উপসার্ট অপারেশন (ইনসার্ট বা আপডেট) এর জন্য ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>CALL:</strong> <code>CALL UpdateStudentName(1, 'John Doe');</code>
                <br />PL/SQL বা Java সাবপ্রোগ্রাম কল করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>EXPLAIN PLAN:</strong> <code>EXPLAIN PLAN FOR SELECT * FROM Students;</code>
                <br />ডেটা অ্যাক্সেস পাথের ব্যাখ্যা প্রদান করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>LOCK TABLE:</strong> <code>LOCK TABLE Students IN EXCLUSIVE MODE;</code>
                <br />টেবিলের উপর এক্সক্লুসিভ অ্যাক্সেস নিশ্চিত করতে ব্যবহৃত হয়।
            </p>

            {/* Data Control Language (DCL) */}
            <h6 className="queryTitle">Data Control Language (DCL) – ডেটা কন্ট্রোল ল্যাঙ্গুয়েজ:</h6>
            <p className="globalDescription">
                DCL is used to control access to data in the database.
                <br />ডেটাবেসে ডেটার অ্যাক্সেস নিয়ন্ত্রণ করার জন্য DCL ব্যবহার করা হয়।
            </p>
            <p className="queryExample">
                <strong>GRANT:</strong> <code>GRANT SELECT ON Students TO User1;</code>
                <br />নির্দিষ্ট ডেটার উপর অ্যাক্সেস অনুমোদন করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>REVOKE:</strong> <code>REVOKE SELECT ON Students FROM User1;</code>
                <br />নির্দিষ্ট ডেটার উপর অ্যাক্সেস প্রত্যাহার করতে ব্যবহৃত হয়।
            </p>

            {/* Transaction Control Language (TCL) */}
            <h6 className="queryTitle">Transaction Control Language (TCL) – ট্রানজ্যাকশন কন্ট্রোল ল্যাঙ্গুয়েজ:</h6>
            <p className="globalDescription">
                TCL is used to manage transactions in the database.
                <br />ডেটাবেসে লেনদেন পরিচালনা করার জন্য TCL ব্যবহার করা হয়।
            </p>
            <p className="queryExample">
                <strong>COMMIT:</strong> <code>COMMIT;</code>
                <br />লেনদেনের পরিবর্তনগুলি ডেটাবেসে স্থায়ী করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>ROLLBACK:</strong> <code>ROLLBACK;</code>
                <br />ডেটাবেসে করা পরিবর্তনগুলি পূর্বাবস্থায় ফেরাতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>SAVEPOINT:</strong> <code>SAVEPOINT savepoint_name;</code>
                <br />একটি লেনদেনে মধ্যবর্তী অবস্থান চিহ্নিত করতে ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>SET TRANSACTION:</strong> <code>SET TRANSACTION READ ONLY;</code>
                <br />লেনদেনের বৈশিষ্ট্যগুলি নির্ধারণ করতে ব্যবহৃত হয়।
            </p>

            {/* Data Query Language (DQL) */}
            <h6 className="queryTitle">Data Query Language (DQL) – ডেটা কুয়েরি ল্যাঙ্গুয়েজ:</h6>
            <p className="globalDescription">
                DQL is primarily focused on querying data from the database.
                <br />ডেটাবেস থেকে ডেটা কুয়েরি করার জন্য DQL প্রধানত ব্যবহৃত হয়।
            </p>
            <p className="queryExample">
                <strong>SELECT:</strong> <code>SELECT * FROM Students;</code>
                <br />ডেটাবেস থেকে ডেটা পুনরুদ্ধার করতে ব্যবহৃত হয়।
            </p>
        </Container>
    );
}

export default Query;
