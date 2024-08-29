import React from 'react';
import { Container } from "react-bootstrap";

function Intro(props) {
    return (
        <Container fluid="true" className="text-dark">
            <h3 className="title">Introduction of DBMS (Database Management System) –</h3>
            <h5 className="globalDescription">
                Database Management System (DBMS) হচ্ছে একটি software system যা data কে একটি structured manner এ manage এবং organize করার জন্য design করা হয়েছে।
            </h5>
            <h5 className="globalDescription">
                DBMS data store এবং retrieve করার জন্য convenient and efficient manner offer করে।
            </h5>

            <h5 className="title">Key Features of DBMS –</h5>
            <h5 className="globalDescription">
                <strong>Data modeling:</strong> একটি DBMS data model create এবং modify করার জন্য tools প্রদান করে, যা database এ data এর structure এবং relationships define করে।
            </h5>
            <h5 className="globalDescription">
                <strong>Data storage and retrieval:</strong> DBMS database থেকে data store এবং retrieve করার জন্য দায়ী, এবং data search এবং query করার জন্য বিভিন্ন পদ্ধতি প্রদান করে।
            </h5>
            <h5 className="globalDescription">
                <strong>Concurrency control:</strong> DBMS concurrency control mechanisms প্রদান করে, যা নিশ্চিত করে যে multiple users data access করতে পারবে conflicting ছাড়া।
            </h5>
            <h5 className="globalDescription">
                <strong>Data integrity and security:</strong> DBMS data integrity এবং security constraints enforce করার জন্য tools প্রদান করে, যেমন data এর values এর উপর constraints এবং access control যা নির্দিষ্ট করে কে data access করতে পারবে।
            </h5>
            <h5 className="globalDescription">
                <strong>Backup and recovery:</strong> DBMS system failure এর ক্ষেত্রে data backup এবং recovery করার জন্য mechanisms প্রদান করে।
            </h5>

            <h5 className="title">Types of DBMS –</h5>
            <h5 className="globalDescription">
                DBMS দুটি প্রধান শ্রেণীতে বিভক্ত করা যায়: Relational Database Management System (RDBMS) এবং Non-Relational Database Management System (NoSQL বা Non-SQL)।
            </h5>
            <h5 className="globalDescription">
                <strong>RDBMS:</strong> Data টেবিলের আকারে সংগঠিত হয় এবং প্রতিটি টেবিলের একটি নির্দিষ্ট সংখ্যা row এবং column থাকে। Data primary এবং foreign keys এর মাধ্যমে একে অপরের সাথে সম্পর্কিত থাকে।
            </h5>
            <h5 className="globalDescription">
                <strong>NoSQL:</strong> Data key-value pairs, documents, graphs, বা column-based আকারে সংগঠিত হয়। এগুলি large-scale, high-performance scenarios handle করার জন্য design করা হয়েছে।
            </h5>

            <h5 className="title">Database Languages –</h5>
            <h5 className="globalDescription">
                Database languages প্রধানত চারটি ভাগে বিভক্ত:
            </h5>
            <ul className="globalDescription">
                <li> Data Definition Language (DDL).</li>
                <li>Data Manipulation Language (DML)</li>
                <li> Data Control Language (DCL)</li>
                <li>Transactional Control Language (TCL)</li>
            </ul>

            <h5 className="title">Data Definition Language (DDL) –</h5>
            <h5 className="globalDescription">
                DDL হচ্ছে Data Definition Language এর সংক্ষিপ্ত রূপ, যা database schemas এবং data কিভাবে database এ থাকা উচিত তা নির্দেশ করে।
            </h5>
            <ul className="globalDescription">
                <li><strong>CREATE:</strong> একটি database এবং এর objects (table, index, views, store procedure, function, triggers) তৈরি করতে ব্যবহৃত হয়।</li>
                <li><strong>ALTER:</strong> বিদ্যমান database এর structure পরিবর্তন করতে ব্যবহৃত হয়।</li>
                <li><strong>DROP:</strong> database থেকে objects delete করতে ব্যবহৃত হয়।</li>
                <li><strong>TRUNCATE:</strong> একটি table থেকে সব record remove করতে এবং সকল space মুক্ত করতে ব্যবহৃত হয়।</li>
                <li><strong>COMMENT:</strong> data dictionary তে মন্তব্য যোগ করতে ব্যবহৃত হয়।</li>
                <li><strong>RENAME:</strong> একটি object এর নাম পরিবর্তন করতে ব্যবহৃত হয়।</li>
            </ul>

            <h5 className="title">Data Manipulation Language (DML) –</h5>
            <h5 className="globalDescription">
                DML হচ্ছে Data Manipulation Language এর সংক্ষিপ্ত রূপ, যা data manipulation এর জন্য ব্যবহৃত হয় এবং সাধারণ SQL statements যেমন SELECT, INSERT, UPDATE, DELETE ইত্যাদি অন্তর্ভুক্ত করে।
            </h5>
            <ul className="globalDescription">
                <li><strong>SELECT:</strong> database থেকে data retrieve করতে ব্যবহৃত হয়।</li>
                <li><strong>INSERT:</strong> একটি table এ data insert করতে ব্যবহৃত হয়।</li>
                <li><strong>UPDATE:</strong> একটি table এ বিদ্যমান data update করতে ব্যবহৃত হয়।</li>
                <li><strong>DELETE:</strong> একটি table থেকে সমস্ত records delete করতে ব্যবহৃত হয়।</li>
                <li><strong>MERGE:</strong> UPSERT operation (insert or update) করতে ব্যবহৃত হয়।</li>
                <li><strong>CALL:</strong> একটি PL/SQL বা Java subprogram call করতে ব্যবহৃত হয়।</li>
                <li><strong>EXPLAIN PLAN:</strong> data access path এর ব্যাখ্যা করতে ব্যবহৃত হয়।</li>
                <li><strong>LOCK TABLE:</strong> concurrency control এর জন্য ব্যবহৃত হয়।</li>
            </ul>

            <h5 className="title">Data Control Language (DCL) –</h5>
            <h5 className="globalDescription">
                DCL হচ্ছে Data Control Language এর সংক্ষিপ্ত রূপ, যা database এ access specify করতে ব্যবহৃত হয়।
            </h5>
            <ul className="globalDescription">
                <li><strong>GRANT:</strong> একটি user কে DML commands (SELECT, INSERT, DELETE, ইত্যাদি) চালানোর permission প্রদান করতে ব্যবহৃত হয়।</li>
                <li><strong>REVOKE:</strong> একটি user এর permission বাতিল করতে ব্যবহৃত হয়।</li>
            </ul>

            <h5 className="title">Transactional Control Language (TCL) –</h5>
            <h5 className="globalDescription">
                TCL হচ্ছে Transactional Control Language এর সংক্ষিপ্ত রূপ, যা সমস্ত ধরনের transactional data এবং সকল transactions পরিচালনা করে।
            </h5>
            <ul className="globalDescription">
                <li><strong>ROLLBACK:</strong> database এ করা পরিবর্তনগুলো বাতিল বা undo করতে ব্যবহৃত হয়।</li>
                <li><strong>COMMIT:</strong> database এ করা পরিবর্তনগুলো save করতে ব্যবহৃত হয়।</li>
                <li><strong>SAVEPOINT:</strong> database এ data অস্থায়ীভাবে save করতে ব্যবহৃত হয়।</li>
            </ul>

            <h5 className="title">Data Query Language (DQL) –</h5>
            <h5 className="globalDescription">
                DQL হচ্ছে Data Manipulation Language এর একটি subset। DQL এর প্রধান command হল SELECT statement, যা একটি table থেকে data retrieve করতে ব্যবহৃত হয় table এর কোন পরিবর্তন ছাড়াই।
            </h5>

            <h5 className="title">Applications of DBMS –</h5>
            <h5 className="globalDescription">
                DBMS এর প্রধান applications হল:
            </h5>
            <ul className="globalDescription">
                <li><strong>Enterprise Information:</strong> Sales, accounting, human resources, manufacturing, online retailers।</li>
                <li><strong>Banking and Finance Sector:</strong> Banks এ customer details, accounts, loans, banking transactions, credit card transactions management।</li>
                <li><strong>University:</strong> ছাত্রদের course enrollment information, grades, staff roles management।</li>
                <li><strong>Airlines:</strong> Reservations এবং schedules management।</li>
                <li><strong>Telecommunications:</strong> Prepaid এবং postpaid bills management।</li>
            </ul>

            <h5 className="title">Paradigm Shift from File System to DBMS –</h5>
            <h5 className="globalDescription">
                File System manages data using files on a hard disk. DBMS এর দিকে shift করার প্রধান কারণগুলি হল:
            </h5>
            <ul className="globalDescription">
                <li><strong>Redundancy of Data:</strong> File systems এ data redundancy দেখা যায় যেখানে একই data বিভিন্ন স্থানে কপি করা হয়। DBMS data redundancy হ্রাস করতে সাহায্য করে।</li>
                <li><strong>Inconsistency of Data:</strong> File systems এ data inconsistency দেখা যায় যেখানে একই data এর একাধিক কপি একে অপরের সাথে মেলে না। DBMS data consistency বজায় রাখতে সাহায্য করে।</li>
                <li><strong>Difficult Data Access:</strong> File systems এ data access করতে user কে file এর exact location জানতে হয়। DBMS সহজ data access প্রদান করে।</li>
                <li><strong>Unauthorized Access:</strong> File systems unauthorized data access এর ঝুঁকি তৈরি করে। DBMS data security বাড়াতে সাহায্য করে।</li>
                <li><strong>No Concurrent Access:</strong> File systems এ multiple users একই data একসাথে access করতে পারে না। DBMS concurrent data access করতে সহায়তা করে।</li>
                <li><strong>No Backup and Recovery:</strong> File systems এ data এর কোন backup এবং recovery ব্যবস্থা নেই। DBMS backup এবং recovery management প্রদান করে।</li>
            </ul>

            <h5 className="title">Advantages of DBMS –</h5>
            <h5 className="globalDescription">
                DBMS এর সুবিধাগুলি অন্তর্ভুক্ত:
            </h5>
            <ul className="globalDescription">
                <li><strong>Data Organization:</strong> DBMS data structured ভাবে organize এবং store করতে সাহায্য করে, যা প্রয়োজন অনুযায়ী data retrieve এবং query করতে সহজ করে তোলে।</li>
                <li><strong>Data Integrity:</strong> DBMS data integrity constraints enforce করতে সাহায্য করে, যেমন data এর values এর উপর constraints এবং access control যা নির্দিষ্ট করে কে data access করতে পারবে।</li>
                <li><strong>Concurrent Access:</strong> DBMS concurrent data access control করতে সহায়তা করে, যাতে multiple users একই data access করতে পারে conflicting ছাড়া।</li>
                <li><strong>Data Security:</strong> DBMS data security management করতে tools প্রদান করে, যেমন data access control এবং sensitive data encryption।</li>
                <li><strong>Backup and Recovery:</strong> DBMS system failure এর ক্ষেত্রে data backup এবং recovery mechanisms প্রদান করে।</li>
                <li><strong>Data Sharing:</strong> DBMS multiple users কে একই data access এবং share করতে দেয়, যা collaborative work environment এ কার্যকর হতে পারে।</li>
            </ul>

            <h5 className="title">Disadvantages of DBMS –</h5>
            <h5 className="globalDescription">
                DBMS এর কিছু অসুবিধা অন্তর্ভুক্ত:
            </h5>
            <ul className="globalDescription">
                <li><strong>Complexity:</strong> DBMS set up এবং maintain করা জটিল হতে পারে, যা specialized knowledge এবং skills প্রয়োজন।</li>
                <li><strong>Performance Overhead:</strong> DBMS ব্যবহারে performance overhead তৈরি হতে পারে, বিশেষ করে high levels of concurrency প্রয়োজন হলে।</li>
                <li><strong>Scalability:</strong> DBMS ব্যবহার করা application এর scalability সীমিত করতে পারে, কারণ এটি data consistency নিশ্চিত করতে locking এবং অন্যান্য synchronization mechanisms ব্যবহার করতে হয়।</li>
                <li><strong>Cost:</strong> একটি DBMS কেনা, maintain করা এবং upgrade করার খরচ উচ্চ হতে পারে, বিশেষ করে large বা complex systems এর ক্ষেত্রে।</li>
                <li><strong>Limited Use Cases:</strong> সব use cases DBMS এর জন্য উপযুক্ত নয়; কিছু সমাধানগুলিতে high reliability, consistency বা security প্রয়োজন নেই এবং অন্য ধরনের data storage দ্বারা ভালভাবে serve করা যেতে পারে।</li>
            </ul>
        </Container>
    );
}

export default Intro;
