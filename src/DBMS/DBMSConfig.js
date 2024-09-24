

const DBMSConfig = {
    basic:[
        {
            title: "Introduction of DBMS (Database Management System) – ",
            description: "Database Management System (DBMS) হচ্ছে একটি software system যা data কে একটি structured manner এ manage এবং organize করার জন্য design করা হয়েছে।\n" +
                "DBMS data store এবং retrieve করার জন্য convenient and efficient manner offer করে।"
        },
        {
            title: "Key Features of DBMS – ",
            minTitle:[
                {
                    title: "Data modeling : ",
                    description:"একটি DBMS data model create এবং modify করার জন্য tools প্রদান করে, যা database এ data এর structure এবং relationships define করে।"
                },
                {
                    title: "Data storage and retrieval : ",
                    description:" DBMS database থেকে data store এবং retrieve করার জন্য দায়ী, এবং data search এবং query করার জন্য বিভিন্ন পদ্ধতি প্রদান করে।"
                },
                {
                    title: "Concurrency control : ",
                    description: "DBMS concurrency control mechanisms প্রদান করে, যা নিশ্চিত করে যে multiple users data access করতে পারবে conflicting ছাড়া।"
                },
                {
                    title: "Data integrity and security : ",
                    description: " DBMS data integrity এবং security constraints enforce করার জন্য tools প্রদান করে, যেমন data এর values এর উপর constraints এবং access control যা নির্দিষ্ট করে কে data access করতে পারবে।"
                },
                {
                    title: "Backup and recovery : ",
                    description: "DBMS system failure এর ক্ষেত্রে data backup এবং recovery করার জন্য mechanisms প্রদান করে।"
                },
            ]
        },
        {
            title: "Types of DBMS – ",
            description: "DBMS দুটি প্রধান শ্রেণীতে বিভক্ত করা যায়: Relational Database Management System (RDBMS) এবং Non-Relational Database Management System (NoSQL বা Non-SQL)।",
            minTitle: [
                {
                    title: "RDBMS : ",
                    description: " Data টেবিলের আকারে সংগঠিত হয় এবং প্রতিটি টেবিলের একটি নির্দিষ্ট সংখ্যা row এবং column থাকে। Data primary এবং foreign keys এর মাধ্যমে একে অপরের সাথে সম্পর্কিত থাকে।"
                },
                {
                    title: "NoSQL : ",
                    description: "Data key-value pairs, documents, graphs, বা column-based আকারে সংগঠিত হয়। এগুলি large-scale, high-performance scenarios handle করার জন্য design করা হয়েছে।"
                }
            ]
        },
        {
            title: "Database Languages – ",
            description: "Database languages প্রধানত চারটি ভাগে বিভক্ত : ",
            minTitle: [
                {title: "Data Definition Language (DDL)."},
                {title: "Data Manipulation Language (DML)."},
                {title: "Data Control Language (DCL)."},
                {title: "Transactional Control Language (TCL)."},
            ]
        },
        {
            title: "Data Definition Language (DDL) – ",
            description: "DDL হচ্ছে Data Definition Language এর সংক্ষিপ্ত রূপ, যা database schemas এবং data কিভাবে database এ থাকা উচিত তা নির্দেশ করে।",
            minTitle: [
                {
                    title: "CREATE : ",
                    description: " একটি database এবং এর objects (table, index, views, store procedure, function, triggers) তৈরি করতে ব্যবহৃত হয়।"
                },
                {
                    title: "ALTER : ",
                    description: "বিদ্যমান database এর structure পরিবর্তন করতে ব্যবহৃত হয়।"
                },
                {
                    title: "DROP : ",
                    description: "database থেকে objects delete করতে ব্যবহৃত হয়।"
                },
                {
                    title: "TRUNCATE : ",
                    description: " একটি table থেকে সব record remove করতে এবং সকল space মুক্ত করতে ব্যবহৃত হয়।"
                },
                {
                    title: "COMMENT : ",
                    description: "data dictionary তে মন্তব্য যোগ করতে ব্যবহৃত হয়।"
                },
                {
                    title: "RENAME : ",
                    description: "একটি object এর নাম পরিবর্তন করতে ব্যবহৃত হয়।"
                },
            ]
        },
        {
            title: "Data Manipulation Language (DML) –",
            description: "DML হচ্ছে Data Manipulation Language এর সংক্ষিপ্ত রূপ, যা data manipulation এর জন্য ব্যবহৃত হয় এবং সাধারণ SQL statements যেমন SELECT, INSERT, UPDATE, DELETE ইত্যাদি অন্তর্ভুক্ত করে।",
            minTitle: [
                {
                    title: "SELECT :",
                    description: "database থেকে data retrieve করতে ব্যবহৃত হয়।"
                },
                {
                    title: "INSERT :",
                    description: "একটি table এ data insert করতে ব্যবহৃত হয়।"
                },
                {
                    title: "UPDATE :",
                    description: "একটি table এ বিদ্যমান data update করতে ব্যবহৃত হয়।"
                },
                {
                    title: "DELETE :",
                    description: "একটি table থেকে সমস্ত records delete করতে ব্যবহৃত হয়।"
                },
                {
                    title: "MERGE:",
                    description: "UPSERT operation (insert or update) করতে ব্যবহৃত হয়।"
                },
                {
                    title: "CALL :",
                    description: "একটি PL/SQL বা Java subprogram call করতে ব্যবহৃত হয়।"
                },
                {
                    title: "EXPLAIN PLAN :",
                    description: "data access path এর ব্যাখ্যা করতে ব্যবহৃত হয়।"
                },
                {
                    title: "LOCK TABLE :",
                    description: "concurrency control এর জন্য ব্যবহৃত হয়।"
                }
            ]
        },
        {
            title: "Data Control Language (DCL) –",
            description: "DCL হচ্ছে Data Control Language এর সংক্ষিপ্ত রূপ, যা database এ access specify করতে ব্যবহৃত হয়।",
            minTitle: [
                {
                    title: "GRANT :",
                    description: "একটি user কে DML commands (SELECT, INSERT, DELETE, ইত্যাদি) চালানোর permission প্রদান করতে ব্যবহৃত হয়।"
                },
                {
                    title: "REVOKE :",
                    description: "একটি user এর permission বাতিল করতে ব্যবহৃত হয়।"
                }
            ]
        },
        {
            title: "Data Control Language (DCL) –",
            description: "DCL হচ্ছে Data Control Language এর সংক্ষিপ্ত রূপ, যা database এ access specify করতে ব্যবহৃত হয়।",
            minTitle: [
                {
                    title: "GRANT :",
                    description: "একটি user কে DML commands (SELECT, INSERT, DELETE, ইত্যাদি) চালানোর permission প্রদান করতে ব্যবহৃত হয়।"
                },
                {
                    title: "REVOKE :",
                    description: "একটি user এর permission বাতিল করতে ব্যবহৃত হয়।"
                }
            ]
        },
        {
            title: "Transactional Control Language (TCL) –",
            description: "TCL হচ্ছে Transactional Control Language এর সংক্ষিপ্ত রূপ, যা সমস্ত ধরনের transactional data এবং সকল transactions পরিচালনা করে।",
            minTitle: [
                {
                    title: "ROLLBACK :",
                    description: "database এ করা পরিবর্তনগুলো বাতিল বা undo করতে ব্যবহৃত হয়।"
                },
                {
                    title: "COMMIT :",
                    description: "database এ করা পরিবর্তনগুলো save করতে ব্যবহৃত হয়।"
                },
                {
                    title: "SAVEPOINT :",
                    description: "database এ data অস্থায়ীভাবে save করতে ব্যবহৃত হয়।"
                }
            ]
        },
        {
            title: "Data Query Language (DQL) –",
            description: "DQL হচ্ছে Data Manipulation Language এর একটি subset। DQL এর প্রধান command হল SELECT statement, যা একটি table থেকে data retrieve করতে ব্যবহৃত হয় table এর কোন পরিবর্তন ছাড়াই।"
        },
        {
            title: "Applications of DBMS –",
            description: "DBMS এর প্রধান applications হল :",
            minTitle: [
                {
                    title: "Enterprise Information :",
                    description: "Sales, accounting, human resources, manufacturing, online retailers।"
                },
                {
                    title: "Banking and Finance Sector :",
                    description: "Banks এ customer details, accounts, loans, banking transactions, credit card transactions management।"
                },
                {
                    title: "University :",
                    description: "ছাত্রদের course enrollment information, grades, staff roles management।"
                },
                {
                    title: "Airlines :",
                    description: "Reservations এবং schedules management।"
                },
                {
                    title: "Telecommunications :",
                    description: "Prepaid এবং postpaid bills management।"
                }
            ]
        },
        {
            title: "Paradigm Shift from File System to DBMS –",
            description: "File System manages data using files on a hard disk. DBMS এর দিকে shift করার প্রধান কারণগুলি হল:",
            minTitle: [
                {
                    title: "Redundancy of Data :",
                    description: "File systems এ data redundancy দেখা যায় যেখানে একই data বিভিন্ন স্থানে কপি করা হয়। DBMS data redundancy হ্রাস করতে সাহায্য করে।"
                },
                {
                    title: "Inconsistency of Data :",
                    description: "File systems এ data inconsistency দেখা যায় যেখানে একই data এর একাধিক কপি একে অপরের সাথে মেলে না। DBMS data consistency বজায় রাখতে সাহায্য করে।"
                },
                {
                    title: "Difficult Data Access :",
                    description: "File systems এ data access করতে user কে file এর exact location জানতে হয়। DBMS সহজ data access প্রদান করে।"
                },
                {
                    title: "Unauthorized Access :",
                    description: "File systems unauthorized data access এর ঝুঁকি তৈরি করে। DBMS data security বাড়াতে সাহায্য করে।"
                },
                {
                    title: "No Concurrent Access :",
                    description: "File systems এ multiple users একই data একসাথে access করতে পারে না। DBMS concurrent data access করতে সহায়তা করে।"
                },
                {
                    title: "No Backup and Recovery :",
                    description: "File systems এ data এর কোন backup এবং recovery ব্যবস্থা নেই। DBMS backup এবং recovery management প্রদান করে।"
                }
            ]
        },
        {
            title: "Advantages of DBMS –",
            description: "DBMS এর সুবিধাগুলি অন্তর্ভুক্ত :",
            minTitle: [
                {
                    title: "Data Organization :",
                    description: "DBMS data structured ভাবে organize এবং store করতে সাহায্য করে, যা প্রয়োজন অনুযায়ী data retrieve এবং query করতে সহজ করে তোলে।"
                },
                {
                    title: "Data Integrity :",
                    description: "DBMS data integrity constraints enforce করতে সাহায্য করে, যেমন data এর values এর উপর constraints এবং access control যা নির্দিষ্ট করে কে data access করতে পারবে।"
                },
                {
                    title: "Concurrent Access :",
                    description: "DBMS concurrent data access control করতে সহায়তা করে, যাতে multiple users একই data access করতে পারে conflicting ছাড়া।"
                },
                {
                    title: "Data Security :",
                    description: "DBMS data security management করতে tools প্রদান করে, যেমন data access control এবং sensitive data encryption।"
                },
                {
                    title: "Backup and Recovery :",
                    description: "DBMS system failure এর ক্ষেত্রে data backup এবং recovery mechanisms প্রদান করে।"
                },
                {
                    title: "Data Sharing :",
                    description: "DBMS multiple users কে একই data access এবং share করতে দেয়, যা collaborative work environment এ কার্যকর হতে পারে।"
                }
            ]
        },
        {
            title: "Disadvantages of DBMS –",
            description: "DBMS এর কিছু অসুবিধা অন্তর্ভুক্ত :",
            minTitle: [
                {
                    title: "Complexity :",
                    description: "DBMS set up এবং maintain করা জটিল হতে পারে, যা specialized knowledge এবং skills প্রয়োজন।"
                },
                {
                    title: "Performance Overhead :",
                    description: "DBMS ব্যবহারে performance overhead তৈরি হতে পারে, বিশেষ করে high levels of concurrency প্রয়োজন হলে।"
                },
                {
                    title: "Scalability :",
                    description: "DBMS ব্যবহার করা application এর scalability সীমিত করতে পারে, কারণ এটি data consistency নিশ্চিত করতে locking এবং অন্যান্য synchronization mechanisms ব্যবহার করতে হয়।"
                },
                {
                    title: "Cost :",
                    description: "একটি DBMS কেনা, maintain করা এবং upgrade করার খরচ উচ্চ হতে পারে, বিশেষ করে large বা complex systems এর ক্ষেত্রে।"
                },
                {
                    title: "Limited Use Cases :",
                    description: "সব use cases DBMS এর জন্য উপযুক্ত নয়; কিছু সমাধানগুলিতে high reliability, consistency বা security প্রয়োজন নেই এবং অন্য ধরনের data storage দ্বারা ভালভাবে serve করা যেতে পারে।"
                }
            ]
        },
    ],
    keys:[
        {
            title: "Database Keys এর পরিচিতি : ",
            description: "Database keys বিভিন্ন টেবিলের মধ্যে সম্পর্ক স্থাপন এবং ডেটার নির্ভুলতা নিশ্চিত করতে ব্যবহৃত হয়। এখানে বিভিন্ন ধরনের কিই আলোচনা করা হলো:",
            minTitle: [
                {
                    title: "Primary Key : ",
                    description: "Primary key হল একটি টেবিলের মধ্যে একটি ইউনিক কলাম বা কলামের সেট যা প্রতিটি রেকর্ডকে অনন্যভাবে চিহ্নিত করে। একটি টেবিলের মধ্যে একটিই primary key থাকতে পারে.",
                    code: "CREATE TABLE Users (\n    UserID INT PRIMARY KEY,\n    UserName VARCHAR(255) NOT NULL\n);"
                },
                {
                    title: "Foreign Key : ",
                    description: "Foreign key হল একটি কলাম বা কলামের সেট যা অন্য একটি টেবিলের primary key কে reference করে। এটি টেবিলের মধ্যে সম্পর্ক স্থাপন করতে ব্যবহৃত হয়.",
                    code: "CREATE TABLE Orders (\n    OrderID INT PRIMARY KEY,\n    UserID INT,\n    FOREIGN KEY (UserID) REFERENCES Users(UserID)\n);"
                },
                {
                    title: "Unique Key : ",
                    description: "Unique key হল একটি কলাম বা কলামের সেট যা একটি টেবিলের মধ্যে ইউনিক ভ্যালু নিশ্চিত করে। Primary key এর মতই, কিন্তু একটি টেবিলের মধ্যে একাধিক unique key থাকতে পারে.",
                    code: "CREATE TABLE Employees (\n    EmployeeID INT PRIMARY KEY,\n    Email VARCHAR(255) UNIQUE NOT NULL\n);"
                },
                {
                    title: "Composite Key : ",
                    description: "Composite key হল দুটি বা তার অধিক কলামের সমন্বয় যা মিলে একটি রেকর্ডকে ইউনিকভাবে চিহ্নিত করে। এটি তখন ব্যবহৃত হয় যখন একটি একক কলাম যথেষ্ট নয়.",
                    code: "CREATE TABLE CourseEnrollments (\n    StudentID INT,\n    CourseID INT,\n    EnrollmentDate DATE,\n    PRIMARY KEY (StudentID, CourseID)\n);"
                },
                {
                    title: "Candidate Key : ",
                    description: "Candidate key হল টেবিলের সব সম্ভাব্য primary key গুলির মধ্যে একটি। এটি একটি বা একাধিক কলামের সমন্বয় হতে পারে যা টেবিলের প্রতিটি রেকর্ডকে ইউনিকভাবে চিহ্নিত করতে পারে.",
                    code: "CREATE TABLE Students (\n    StudentID INT PRIMARY KEY,\n    SSN VARCHAR(11) UNIQUE NOT NULL\n);"
                },
                {
                    title: "Alternate Key : ",
                    description: "Alternate key হল candidate key গুলির মধ্যে যেগুলি primary key হিসেবে নির্বাচিত হয়নি। এটি টেবিলের অন্যান্য ইউনিক কন্ডিশনগুলি নিশ্চিত করে.",
                    code: "CREATE TABLE Products (\n    ProductID INT PRIMARY KEY,\n    SKU VARCHAR(255) UNIQUE NOT NULL\n);"
                }
            ]
        }
    ],
    ddl:[
        {
            title: "CREATE TABLE Command Example: ",
            description: "CREATE TABLE কমান্ডটি ডাটাবেজে একটি নতুন টেবিল তৈরির জন্য ব্যবহার করা হয়। উপরের উদাহরণে একটি employees নামের টেবিল তৈরি করা হয়েছে, যেখানে চারটি কলাম আছে: id, name, department, এবং salary। id কলামটি integer এবং এটিকে primary key হিসাবে সেট করা হয়েছে, যা টেবিলের প্রতিটি row কে uniquely identify করে। name কলামটি একটি string, যার max length 100 characters এবং এটি empty থাকতে পারবে না। department কলামটি একটি string, যার max length 50 characters এবং এটি empty থাকতে পারে। salary কলামটি একটি দশমিক সংখ্যা, যা max length 10 characters পর্যন্ত হতে পারে, যার মধ্যে 2টি সংখ্যা দশমিকের পরে থাকতে পারে, এবং এটি খালি থাকতে পারে।",
            code: "CREATE TABLE employees (\n" +
                "    id INT PRIMARY KEY,\n" +
                "    name VARCHAR(100) NOT NULL,\n" +
                "    department VARCHAR(50),\n" +
                "    salary DECIMAL(10, 2)\n" +
                ");"
        },

        {
            title: "CREATE TABLE with AUTO_INCREMENT Primary Key : ",
            description: "CREATE TABLE কমান্ডটি একটি নতুন টেবিল তৈরি করতে ব্যবহৃত হয়, যেখানে AUTO_INCREMENT কলামটি প্রতিটি নতুন রেকর্ডের জন্য স্বয়ংক্রিয়ভাবে একটি অনন্য সংখ্যা তৈরি করে। উপরের উদাহরণে products নামের একটি টেবিল তৈরি করা হয়েছে যেখানে product_id কলামটি একটি AUTO_INCREMENT integer এবং primary key হিসেবে সেট করা হয়েছে।",
            code: "CREATE TABLE products (\n" +
                "    product_id INT PRIMARY KEY AUTO_INCREMENT,\n" +
                "    product_name VARCHAR(100) NOT NULL,\n" +
                "    price DECIMAL(10, 2) NOT NULL\n" +
                ");"
        },

        {
            title: "ALTER TABLE Command Example : ",
            description: "ALTER TABLE কমান্ডটি বিদ্যমান একটি টেবিলের কাঠামো পরিবর্তন করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলের মধ্যে একটি নতুন email কলাম যোগ করা হয়েছে, যা VARCHAR(255) টাইপের।",
            code: "ALTER TABLE employees\n" +
                "ADD email VARCHAR(255);"
        },

        {
            title: "DROP TABLE Command Example : ",
            description: "DROP TABLE কমান্ডটি একটি টেবিলকে স্থায়ীভাবে ডাটাবেজ থেকে মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলটি মুছে ফেলা হয়েছে।",
            code: "DROP TABLE employees;"
        },

        {
            title: "TRUNCATE TABLE Command Example : ",
            description: "TRUNCATE TABLE কমান্ডটি টেবিলের সমস্ত রেকর্ড মুছে ফেলার জন্য ব্যবহার করা হয়, তবে টেবিলের কাঠামো বজায় থাকে। উপরের উদাহরণে employees টেবিলের সমস্ত রেকর্ড মুছে ফেলা হয়েছে, কিন্তু টেবিলের কাঠামো অপরিবর্তিত থাকে।",
            code: "TRUNCATE TABLE employees;"
        },

        {
            title: "COMMENT ON TABLE Command Example : ",
            description: "COMMENT ON TABLE কমান্ডটি একটি টেবিলের জন্য মন্তব্য যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলের উদ্দেশ্য সম্পর্কে একটি মন্তব্য যোগ করা হয়েছে।",
            code: "COMMENT ON TABLE employees IS 'Table to store employee details';"
        },

        {
            title: "RENAME TABLE Command Example : ",
            description: "RENAME TABLE কমান্ডটি একটি টেবিলের নাম পরিবর্তন করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলটির নাম পরিবর্তন করে staff রাখা হয়েছে。",
            code: "ALTER TABLE employees RENAME TO staff;"
        }
    ],
    dml:[
        {
            title: "INSERT INTO Command Example",
            description: "INSERT INTO কমান্ডটি একটি টেবিলে নতুন রেকর্ড যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলে নির্দিষ্ট মানগুলি সহ একটি রেকর্ড যোগ করা হয়েছে।",
            code: "INSERT INTO employees (id, name, department, salary)\nVALUES (1, 'John Doe', 'HR', 50000.00);"
        },
        {
            title: "UPDATE Command Example",
            description: "UPDATE কমান্ডটি একটি টেবিলের বিদ্যমান রেকর্ডগুলির তথ্য পরিবর্তন করতে ব্যবহার করা হয়। উপরের উদাহরণে id = 1 এর জন্য salary আপডেট করা হয়েছে 55000.00 এ।",
            code: "UPDATE employees\nSET salary = 55000.00\nWHERE id = 1;"
        },
        {
            title: "DELETE Command Example",
            description: "DELETE কমান্ডটি একটি টেবিল থেকে নির্দিষ্ট রেকর্ড মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে id = 1 রেকর্ডটি employees টেবিল থেকে মুছে ফেলা হয়েছে।",
            code: "DELETE FROM employees\nWHERE id = 1;"
        },
        {
            title: "SELECT Command Example",
            description: "SELECT কমান্ডটি একটি টেবিল থেকে রেকর্ডগুলি পুনরুদ্ধার করতে ব্যবহার করা হয়। উপরের উদাহরণে employees টেবিলের সমস্ত রেকর্ড নির্বাচন করা হয়েছে।",
            code: "SELECT * FROM employees;"
        },
        {
            title: "INSERT INTO with SELECT Command Example",
            description: "INSERT INTO কমান্ডের সাথে SELECT ব্যবহার করা হয় ডেটা এক টেবিল থেকে আরেক টেবিলে কপি করতে। উপরের উদাহরণে, employees টেবিলের HR বিভাগের সমস্ত রেকর্ড employees_backup টেবিলে কপি করা হয়েছে।",
            code: "INSERT INTO employees_backup (id, name, department, salary)\nSELECT id, name, department, salary\nFROM employees\nWHERE department = 'HR';"
        },
        {
            title: "UPSERT (MERGE) Command Example",
            description: "UPSERT বা MERGE কমান্ডটি ডাটাবেজে রেকর্ড আপডেট বা যোগ করার জন্য ব্যবহার করা হয়। উপরের উদাহরণে, যদি id = 1 এর জন্য রেকর্ড বিদ্যমান থাকে তবে এটি আপডেট করা হবে; অন্যথায় একটি নতুন রেকর্ড যোগ করা হবে।",
            code: "MERGE INTO employees AS target\nUSING (VALUES (1, 'John Doe', 'HR', 55000.00)) AS source (id, name, department, salary)\nON target.id = source.id\nWHEN MATCHED THEN\n    UPDATE SET salary = source.salary\nWHEN NOT MATCHED THEN\n    INSERT (id, name, department, salary)\n    VALUES (source.id, source.name, source.department, source.salary);"
        },
        {
            title: "TRUNCATE Command Example",
            description: "TRUNCATE কমান্ডটি একটি টেবিলের সমস্ত রেকর্ড দ্রুত মুছে ফেলার জন্য ব্যবহার করা হয়। উপরের উদাহরণে, employees টেবিলের সমস্ত রেকর্ড মুছে ফেলা হয়েছে, তবে টেবিলের কাঠামো বজায় থাকে।",
            code: "TRUNCATE TABLE employees;"
        },
        {
            title: "DELETE with JOIN Command Example",
            description: "DELETE কমান্ডটি JOIN এর মাধ্যমে ব্যবহার করা যেতে পারে নির্দিষ্ট শর্তের উপর ভিত্তি করে রেকর্ড মুছে ফেলার জন্য। উপরের উদাহরণে, New York লোকেশনের সমস্ত department এর সাথে সম্পর্কিত employees টেবিলের রেকর্ডগুলি মুছে ফেলা হয়েছে।",
            code: "DELETE e\nFROM employees e\nJOIN departments d ON e.department = d.name\nWHERE d.location = 'New York';"
        }
    ],
    tcl:[
        {
            title: "ACID Properties of Transactions ",
            minTitle: [
                {
                    title: "Atomicity",
                    description: "Atomicity নিশ্চিত করে যে একটি ট্রানজেকশনের সমস্ত অপারেশন একত্রে সম্পন্ন হয়। যদি ট্রানজেকশনের কোন অংশ ব্যর্থ হয়, তবে পুরো ট্রানজেকশন রোলব্যাক হয়ে যায়, ফলে ডেটাবেস অপরিবর্তিত থাকে।"
                },
                {
                    title: "Consistency",
                    description: "Consistency নিশ্চিত করে যে একটি ট্রানজেকশন ডেটাবেসকে একটি সঠিক অবস্থান থেকে অন্য সঠিক অবস্থায় নিয়ে আসে। ট্রানজেকশন শেষ হলে, ডেটাবেস অবশ্যই সঙ্গতিপূর্ণ অবস্থায় থাকবে।"
                },
                {
                    title: "Isolation",
                    description: "Isolation নিশ্চিত করে যে একটি ট্রানজেকশনের অপারেশনগুলি অন্যান্য সমকালীন ট্রানজেকশনগুলির অপারেশন থেকে পৃথক থাকে। একটি ট্রানজেকশন সম্পন্ন না হওয়া পর্যন্ত অন্য ট্রানজেকশনগুলির অপারেশন তার উপর প্রভাব ফেলতে পারে না।"
                },
                {
                    title: "Durability",
                    description: "Durability নিশ্চিত করে যে একবার একটি ট্রানজেকশন কমিট হয়ে গেলে, তার পরিবর্তনগুলি স্থায়ী হয় এবং সিস্টেম ব্যর্থতার ঘটনাতেও হারিয়ে যাবে না।"
                }
            ]
        },
        {
            title: "Basic Transaction with INSERT and COMMIT",
            description: "একটি নতুন ট্রানজেকশন শুরু করে। INSERT INTO বিবৃতিটি একটি নতুন কর্মচারী রেকর্ড যোগ করে এবং COMMIT সমস্ত পরিবর্তন সংরক্ষণ করে।",
            code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (1, 'Alice Smith', 'Engineering', 75000.00);\nCOMMIT;"
        },
        {
            title: "Transaction with INSERT and ROLLBACK",
            description: "ROLLBACK ট্রানজেকশনের সময় করা সমস্ত পরিবর্তন বাতিল করে, তাই ইনসার্ট করা রেকর্ডটি সংরক্ষিত হয় না।",
            code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (2, 'Bob Johnson', 'Sales', 70000.00);\nROLLBACK;"
        },
        {
            title: "Transaction with Multiple INSERTS",
            description: "একাধিক রেকর্ড `employees` টেবিলের মধ্যে ইনসার্ট করা হয়েছে এবং COMMIT নিশ্চিত করে যে সমস্ত রেকর্ড সংরক্ষিত হয়।",
            code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (3, 'Carol White', 'HR', 60000.00);\nINSERT INTO employees (id, name, department, salary) \nVALUES (4, 'David Green', 'Finance', 72000.00);\nCOMMIT;"
        },
        {
            title: "Transaction with UPDATE and ROLLBACK",
            description: "এই ট্রানজেকশন একটি কর্মচারীর বেতন আপডেট করে কিন্তু ROLLBACK ট্রানজেকশনের পরিবর্তনগুলি বাতিল করে, তাই কোন আপডেট সংরক্ষিত হয় না।",
            code: "BEGIN TRANSACTION;\nUPDATE employees \nSET salary = 78000.00 \nWHERE id = 1;\nROLLBACK;"
        },
        {
            title: "Transaction with SAVEPOINT",
            description: "এই ট্রানজেকশন একটি সেভপয়েন্ট সেট করে এবং পরে সেই সেভপয়েন্টে ফিরে যায়, আপডেটটি রোলব্যাক করে কিন্তু প্রাথমিক ইনসার্ট রেখে দেয়।",
            code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (5, 'Emma Davis', 'Marketing', 80000.00);\nSAVEPOINT savepoint1;\nUPDATE employees \nSET salary = 85000.00 \nWHERE id = 5;\nROLLBACK TO SAVEPOINT savepoint1;\nCOMMIT;"
        },
        {
            title: "Transaction with SET TRANSACTION READ ONLY",
            description: "এই ট্রানজেকশনটি পড়া-মাত্র মোডে সেট করা হয়েছে, শুধুমাত্র পড়ার অপারেশনগুলি অনুমোদিত। লেখার চেষ্টা করলে ত্রুটি হবে।",
            code: "BEGIN TRANSACTION;\nSET TRANSACTION READ ONLY;\n-- Read operations only\nCOMMIT;"
        },
        {
            title: "Transaction with SET TRANSACTION READ WRITE",
            description: "এই ট্রানজেকশনটি পড়া এবং লেখার উভয় অপারেশনই অনুমোদিত। এটি ডেটা পরিবর্তন করতে সক্ষম করে।",
            code: "BEGIN TRANSACTION;\nSET TRANSACTION READ WRITE;\n-- Read and write operations\nCOMMIT;"
        },
        {
            title: "Transaction with Nested Transactions",
            description: "এই উদাহরণে একটি প্যারেন্ট ট্রানজেকশন এবং একটি নেস্টেড চাইল্ড ট্রানজেকশন রয়েছে। উভয় ট্রানজেকশনই কমিট করতে হয় সব পরিবর্তন সংরক্ষণ করতে।",
            code: "BEGIN TRANSACTION;\n-- Parent transaction\nBEGIN TRANSACTION;\n-- Child transaction operations\nCOMMIT;\n-- Parent transaction continues\nCOMMIT;"
        },
        {
            title: "Transaction with Multiple ROLLBACKS",
            description: "এই ট্রানজেকশনটি একাধিক রোলব্যাক অন্তর্ভুক্ত করে। একটি রেকর্ড ইনসার্ট করা হয়, একটি ডিলিট অপারেশন করা হয়, কিন্তু ডিলিট অপারেশন সেভপয়েন্টে ফিরে যায়, প্রাথমিক ইনসার্ট রেখে দেয়।",
            code: "BEGIN TRANSACTION;\nINSERT INTO employees (id, name, department, salary) \nVALUES (6, 'George Wilson', 'IT', 95000.00);\nSAVEPOINT sp1;\nDELETE FROM employees \nWHERE id = 6;\nROLLBACK TO SAVEPOINT sp1;\nCOMMIT;"
        },
        {
            title: "Transaction with SET TRANSACTION ISOLATION LEVEL",
            description: "এই ট্রানজেকশনটি আইসোলেশন স্তরকে SERIALIZABLE এ সেট করে, সসঙ্গত ট্রানজেকশনগুলির জন্য সর্বোচ্চ স্তরের আইসোলেশন নিশ্চিত করে।",
            code: "BEGIN TRANSACTION;\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n-- Operations with SERIALIZABLE isolation\nCOMMIT;"
        }
    ],
    dcl:[
        {
            title: "GRANT Command Example",
            description: "GRANT কমান্ডটি একটি নির্দিষ্ট ব্যবহারকারী বা রোলকে ডাটাবেজে নির্দিষ্ট অনুমতি (privileges) প্রদান করতে ব্যবহার করা হয়। উপরের উদাহরণে, 'username' নামের ব্যবহারকারীকে employees টেবিলের উপর SELECT এবং INSERT অনুমতি প্রদান করা হয়েছে।",
            code: "GRANT SELECT, INSERT ON employees TO 'username';"
        },
        {
            title: "REVOKE Command Example",
            description: "REVOKE কমান্ডটি পূর্বে প্রদানকৃত অনুমতিগুলি (privileges) অপসারণ করতে ব্যবহার করা হয়। উপরের উদাহরণে, 'username' নামের ব্যবহারকারী থেকে employees টেবিলের উপর SELECT এবং INSERT অনুমতি অপসারণ করা হয়েছে।",
            code: "REVOKE SELECT, INSERT ON employees FROM 'username';"
        },
        {
            title: "GRANT ALL PRIVILEGES Command Example",
            description: "GRANT ALL PRIVILEGES কমান্ডটি একটি ব্যবহারকারীকে সম্পূর্ণ অনুমতি প্রদান করতে ব্যবহার করা হয়। উপরের উদাহরণে, 'username' ব্যবহারকারীকে database_name ডাটাবেজের সব টেবিলের উপর সমস্ত অনুমতি প্রদান করা হয়েছে।",
            code: "GRANT ALL PRIVILEGES ON database_name.* TO 'username';"
        },
        {
            title: "REVOKE ALL PRIVILEGES Command Example",
            description: "REVOKE ALL PRIVILEGES কমান্ডটি পূর্বে প্রদানকৃত সমস্ত অনুমতি অপসারণ করতে ব্যবহার করা হয়। উপরের উদাহরণে, 'username' ব্যবহারকারী থেকে database_name ডাটাবেজের সব টেবিলের উপর সমস্ত অনুমতি অপসারণ করা হয়েছে।",
            code: "REVOKE ALL PRIVILEGES ON database_name.* FROM 'username';"
        }

    ]
}

export default DBMSConfig;