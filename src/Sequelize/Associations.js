import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Associations(props) {
    return (
        <div className="globalDescription">
            <span className="globalSubTitle">Introduction to Sequelize Associations:</span><br/>
            <span>
                Sequelize Association বলতে বোঝায় বিভিন্ন মডেলের (তথা টেবিলের) মধ্যে সম্পর্ক স্থাপন। এই সম্পর্কগুলি ডাটাবেসে বিভিন্ন ধরনের রেকর্ডের মধ্যে সম্পর্ক পরিচালনার জন্য ব্যবহৃত হয়। Sequelize বিভিন্ন ধরনের।
            </span><br/>
            <span>
                Sequelize বিভিন্ন ধরনের অ্যাসোসিয়েশন সাপোর্ট করে, যা বিভিন্ন টেবিলের মধ্যে সম্পর্ক স্থাপন করতে সাহায্য করে। এখানে প্রধান ধরনের অ্যাসোসিয়েশন গুলি দেওয়া হলো:
            </span>
            <br /><br/>

            <span className="globalSubTitle">1. One-to-One Association:</span><br/>
            <span>
                One-to-One অ্যাসোসিয়েশন মানে এক মডেলের একটি রেকর্ড অন্য মডেলের একটি রেকর্ডের সাথে সম্পর্কিত।
            </span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define Profile model
const Profile = sequelize.define('Profile', {
  bio: {
    type: DataTypes.TEXT
  }
});

// One-to-One Association
User.hasOne(Profile);
Profile.belongsTo(User);

// Synchronize models
sequelize.sync({ force: true });
                `}
            </SyntaxHighlighter>
            <span>
                এই উদাহরণে, প্রতিটি `User` এর একটি `Profile` থাকবে, এবং প্রতিটি `Profile` এক `User` এর সাথে সম্পর্কিত।
            </span>
            <br /><br />

            <span className="globalSubTitle">2. One-to-Many Association:</span>
            <span>
                One-to-Many অ্যাসোসিয়েশন মানে এক মডেলের একটি রেকর্ড একাধিক রেকর্ডের সাথে সম্পর্কিত।
            </span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define Post model
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT
  }
});

// One-to-Many Association
User.hasMany(Post);
Post.belongsTo(User);

// Synchronize models
sequelize.sync({ force: true });
                `}
            </SyntaxHighlighter>
            <span>
                এখানে, এক `User` অনেকগুলো `Post` তৈরি করতে পারে, এবং প্রতিটি `Post` এক `User` এর সাথে সম্পর্কিত।
            </span>
            <br /><br />

            <span className="globalSubTitle">3. Many-to-Many Association(N:N):</span>
            <span>
                Many-to-Many অ্যাসোসিয়েশন মানে একাধিক রেকর্ড এক মডেলে একাধিক রেকর্ডের সাথে সম্পর্কিত।
            </span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define Student model
const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define Course model
const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Many-to-Many Association
Student.belongsToMany(Course, { through: 'StudentCourses' });
Course.belongsToMany(Student, { through: 'StudentCourses' });

// Synchronize models
sequelize.sync({ force: true });
                `}
            </SyntaxHighlighter>
            <span>
                এই উদাহরণে, অনেক `Student` অনেকগুলো `Course` এ ভর্তি হতে পারে এবং প্রতিটি `Course` এ অনেক `Student` থাকতে পারে। `StudentCourses` টেবিলটি এই many-to-many সম্পর্ক পরিচালনা করে।
            </span>
            <br /><br />

            <span className="globalSubTitle">4. Multiple Associations:</span>
            <span>
                Sequelize একাধিক ধরনের অ্যাসোসিয়েশন একসাথে ব্যবহার করতে দেয়। এটি আরও জটিল পরিস্থিতিতে উপকারী।
            </span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define Author model
const Author = sequelize.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define Book model
const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define Publisher model
const Publisher = sequelize.define('Publisher', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Associations
Author.hasMany(Book); // One-to-Many
Book.belongsTo(Author); // One-to-Many

Publisher.belongsToMany(Book, { through: 'PublisherBooks' }); // Many-to-Many
Book.belongsToMany(Publisher, { through: 'PublisherBooks' }); // Many-to-Many

// Synchronize models
sequelize.sync({ force: true });
                `}
            </SyntaxHighlighter>
            <span>
                এখানে, `Author` এর অনেকগুলো `Books` থাকতে পারে, এবং `Publisher` এর অনেকগুলো `Books` থাকতে পারে many-to-many সম্পর্কের মাধ্যমে। `PublisherBooks` টেবিলটি এই many-to-many সম্পর্ক পরিচালনা করে।
            </span>
            <br />
        </div>
    );
}

export default Associations;
