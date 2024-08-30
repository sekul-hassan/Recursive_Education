import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function PolymorphicAssociations(props) {
    return (
        <div className="globalDescription">
            <span className="globalSubTitle">Polymorphic Associations এর পরিচিতি:</span>
            <span>
                Polymorphic associations একটি মডেলকে একাধিক অন্যান্য মডেলের সাথে একক অ্যাসোসিয়েশনের মাধ্যমে যুক্ত করার সুযোগ দেয়। এটি বিশেষভাবে উপকারী যখন আপনি বিভিন্ন মডেলের মধ্যে নমনীয় সম্পর্ক তৈরি করতে চান, কিন্তু একাধিক অ্যাসোসিয়েশন সংজ্ঞায়িত করার প্রয়োজন হয় না।
            </span>
            <br /><br />

            <span className="globalSubTitle">Polymorphic Associations এর উদাহরণ:</span>
            <span>
                ধরুন আপনার কাছে একটি `Comment` মডেল আছে যা বিভিন্ন মডেলের সাথে সম্পর্কিত হতে পারে, যেমন `Post` এবং `Photo`। আলাদা আলাদা অ্যাসোসিয়েশন তৈরি করার পরিবর্তে, polymorphic associations ব্যবহার করে এটি পরিচালনা করা যায়।
            </span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define Post model
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define Photo model
const Photo = sequelize.define('Photo', {
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define Comment model
const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  commentableType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  commentableId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Polymorphic Associations
Post.hasMany(Comment, { foreignKey: 'commentableId', constraints: false });
Photo.hasMany(Comment, { foreignKey: 'commentableId', constraints: false });
Comment.belongsTo(Post, { foreignKey: 'commentableId', constraints: false, scope: { commentableType: 'Post' } });
Comment.belongsTo(Photo, { foreignKey: 'commentableId', constraints: false, scope: { commentableType: 'Photo' } });

// Synchronize models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
                `}
            </SyntaxHighlighter>
            <span>
                এই উদাহরণে:
                <ul>
                    <li><b>Post</b> এবং <b>Photo</b> মডেলগুলির অনেকগুলি <b>Comment</b> রেকর্ড থাকতে পারে।</li>
                    <li><b>Comment</b> মডেলে `commentableType` এবং `commentableId` ফিল্ড রয়েছে যা সম্পর্কিত মডেলের টাইপ এবং ID সংরক্ষণ করে।</li>
                    <li><b>Comment.belongsTo(Post)</b> এবং <b>Comment.belongsTo(Photo)</b> polymorphic association সংজ্ঞায়িত করে যেখানে `scope` নির্দেশ করে কোন মডেলটির সাথে কমেন্ট যুক্ত হবে।</li>
                </ul>
            </span>
            <br /><br />

            <span className="globalSubTitle">ব্যবহার:</span>
            <span>
                Polymorphic associations বিশেষভাবে উপকারী যখন আপনি একটি মডেল (যেমন `Comment`) কে একাধিক অন্যান্য মডেলের (যেমন `Post`, `Photo`) সাথে সম্পর্কিত করতে চান, একাধিক অ্যাসোসিয়েশন তৈরি না করেই।
            </span>
            <br /><br />

            <span className="globalSubTitle">Polymorphic Associations কোয়েরি করা:</span>
            <span>
                Polymorphic associations কোয়েরি করার জন্য, আপনাকে আপনার কোয়েরিতে সম্পর্কিত মডেলের টাইপ নির্ধারণ করতে হবে। উদাহরণস্বরূপ, একটি `Post` সম্পর্কিত কমেন্টগুলি খুঁজতে হলে, `commentableType` এবং `commentableId` দ্বারা ফিল্টার করতে হবে।
            </span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
Comment.findAll({
  where: {
    commentableType: 'Post',
    commentableId: 1
  }
}).then(comments => {
  console.log(comments);
});
                `}
            </SyntaxHighlighter>
            <span>
                এই কোয়েরিটি সব কমেন্ট ফিরিয়ে আনে যা `Post` মডেলের সাথে সম্পর্কিত এবং `commentableId` হল `1`।
            </span>
            <br />
        </div>
    );
}

export default PolymorphicAssociations;
