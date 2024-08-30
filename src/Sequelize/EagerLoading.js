import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function EagerLoading(props) {
    return (
        <div className="globalDescription">
            <span className="globalSubTitle">Introduction to Eager Loading:</span><br/>
            <span>
                Eager Loading হল একটি প্রযুক্তি যা আপনাকে আপনার ডাটাবেসের সাথে সম্পর্কিত অন্যান্য টেবিলের ডেটা একসাথে লোড করতে দেয়। Sequelize-এ, এটি আপনাকে নেভিগেট এবং সম্পর্কিত ডেটা সহ মূল ডেটা একসাথে নিয়ে আসতে সাহায্য করে।
            </span>
            <br /><br />

            <span className="globalSubTitle">Why Use Eager Loading?</span><br/>
            <span>
                Eager Loading ব্যবহার করার মাধ্যমে, আপনি একাধিক ডেটাবেস কল করতে বাধ্য হওয়া এড়াতে পারেন, যা পারফরম্যান্স উন্নত করতে সহায়ক। এটি একবারে সম্পর্কিত ডেটা লোড করতে সাহায্য করে, যা আপনার অ্যাপ্লিকেশনের লোডিং সময় কমায়।
            </span>
            <br /><br />

            <span className="globalSubTitle">Example: Eager Loading in Sequelize</span><br/>
            <span>
                ধরুন, আপনার একটি `User` মডেল এবং একটি `Post` মডেল আছে, যেখানে এক `User` এর একাধিক `Post` থাকতে পারে। Eager Loading ব্যবহার করে আপনি একটি `User` এর সাথে সম্পর্কিত সমস্ত `Post` একসাথে লোড করতে পারেন।
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

// Define One-to-Many Association
User.hasMany(Post);
Post.belongsTo(User);

// Eager Loading Example
User.findAll({
  include: Post // This will eager load all posts related to each user
}).then(users => {
  console.log(JSON.stringify(users, null, 2));
});
                `}
            </SyntaxHighlighter>
            <span>
                এই কোডটি একটি `User` মডেল থেকে সমস্ত ব্যবহারকারী এবং তাদের সংশ্লিষ্ট `Post` গুলি একসাথে লোড করে। `include` অপশনটি Eager Loading সক্ষম করে এবং সম্পর্কিত ডেটা একসাথে রিটার্ন করে।
            </span>
            <br /><br />

            <span className="globalSubTitle">Summary:</span>
            <span>
                **Eager Loading**: এটি সম্পর্কিত ডেটা একসাথে লোড করার একটি পদ্ধতি যা ডাটাবেস কল সংখ্যা কমায় এবং পারফরম্যান্স উন্নত করতে সাহায্য করে।
            </span>
        </div>
    );
}

export default EagerLoading;
