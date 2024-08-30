import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Keys(props) {
    return (
        <div className="globalDescription">
            <span className="globalSubTitle">Database Keys এর পরিচিতি:</span>
            <span>
                Database keys বিভিন্ন টেবিলের মধ্যে সম্পর্ক স্থাপন এবং ডেটার নির্ভুলতা নিশ্চিত করতে ব্যবহৃত হয়। এখানে বিভিন্ন ধরনের কিই আলোচনা করা হলো:
            </span>
            <br /><br />

            <span className="globalSubTitle">1. Primary Key:</span>
            <span>
                Primary key হল একটি টেবিলের মধ্যে একটি ইউনিক কলাম বা কলামের সেট যা প্রতিটি রেকর্ডকে অনন্যভাবে চিহ্নিত করে। একটি টেবিলের মধ্যে একটিই primary key থাকতে পারে।
            </span>
            <br />
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    UserName VARCHAR(255) NOT NULL
);
                `}
            </SyntaxHighlighter>
            <span>
                এই উদাহরণে, `UserID` কলামটি primary key হিসেবে চিহ্নিত করা হয়েছে, যা প্রতিটি ব্যবহারকারীকে অনন্যভাবে চিহ্নিত করে।
            </span>
            <br /><br />

            <span className="globalSubTitle">2. Foreign Key:</span>
            <span>
                Foreign key হল একটি কলাম বা কলামের সেট যা অন্য একটি টেবিলের primary key কে reference করে। এটি টেবিলের মধ্যে সম্পর্ক স্থাপন করতে ব্যবহৃত হয়।
            </span>
            <br />
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
                `}
            </SyntaxHighlighter>
            <span>
                এখানে, `UserID` কলামটি `Users` টেবিলের `UserID` কলামের একটি foreign key হিসেবে কাজ করছে। এটি নির্দেশ করে যে প্রতিটি অর্ডার একটি নির্দিষ্ট ব্যবহারকারীর সাথে সম্পর্কিত।
            </span>
            <br /><br />

            <span className="globalSubTitle">3. Unique Key:</span>
            <span>
                Unique key হল একটি কলাম বা কলামের সেট যা একটি টেবিলের মধ্যে ইউনিক ভ্যালু নিশ্চিত করে। Primary key এর মতই, কিন্তু একটি টেবিলের মধ্যে একাধিক unique key থাকতে পারে।
            </span>
            <br />
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Email VARCHAR(255) UNIQUE NOT NULL
);
                `}
            </SyntaxHighlighter>
            <span>
                এই উদাহরণে, `Email` কলামটি unique key হিসেবে চিহ্নিত করা হয়েছে, যা নিশ্চিত করে যে টেবিলের মধ্যে কোনো দুটি রেকর্ডের একই ইমেইল ঠিকানা থাকবে না।
            </span>
            <br /><br />

            <span className="globalSubTitle">4. Composite Key:</span>
            <span>
                Composite key হল দুটি বা তার অধিক কলামের সমন্বয় যা মিলে একটি রেকর্ডকে ইউনিকভাবে চিহ্নিত করে। এটি তখন ব্যবহৃত হয় যখন একটি একক কলাম যথেষ্ট নয়।
            </span>
            <br />
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`
CREATE TABLE CourseEnrollments (
    StudentID INT,
    CourseID INT,
    EnrollmentDate DATE,
    PRIMARY KEY (StudentID, CourseID)
);
                `}
            </SyntaxHighlighter>
            <span>
                এখানে, `StudentID` এবং `CourseID` কলামগুলোর সমন্বয়ে composite key তৈরি করা হয়েছে, যা নিশ্চিত করে যে প্রতিটি ছাত্র একটি নির্দিষ্ট কোর্সে একবারই ভর্তি হতে পারে।
            </span>
            <br /><br />

            <span className="globalSubTitle">5. Candidate Key:</span>
            <span>
                Candidate key হল টেবিলের সব সম্ভাব্য primary key গুলির মধ্যে একটি। এটি একটি বা একাধিক কলামের সমন্বয় হতে পারে যা টেবিলের প্রতিটি রেকর্ডকে ইউনিকভাবে চিহ্নিত করতে পারে।
            </span>
            <br />
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    SSN VARCHAR(11) UNIQUE NOT NULL
);
                `}
            </SyntaxHighlighter>
            <span>
                এখানে, `StudentID` এবং `SSN` উভয়ই candidate key হিসেবে কাজ করতে পারে, কিন্তু একটিকে primary key হিসেবে নির্বাচন করা হয়েছে।
            </span>
            <br /><br />

            <span className="globalSubTitle">6. Alternate Key:</span>
            <span>
                Alternate key হল candidate key গুলির মধ্যে যেগুলি primary key হিসেবে নির্বাচিত হয়নি। এটি টেবিলের অন্যান্য ইউনিক কন্ডিশনগুলি নিশ্চিত করে।
            </span>
            <br />
            <SyntaxHighlighter language="sql" style={solarizedlight}>
                {`
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    SKU VARCHAR(255) UNIQUE NOT NULL
);
                `}
            </SyntaxHighlighter>
            <span>
                এখানে, `SKU` কলামটি একটি alternate key হিসেবে কাজ করছে, যা নিশ্চিত করে যে প্রতিটি প্রোডাক্টের একটি ইউনিক SKU কোড থাকবে।
            </span>
            <br />
        </div>
    );
}

export default Keys;
