import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function AssociationScopes(props) {
    return (
        <div className="globalDescription">
            <span className="globalSubTitle">Introduction to Association Scopes:</span>
            <span>
                Sequelize associations allow you to define relationships between models, such as one-to-one, one-to-many, and many-to-many. Scopes in Sequelize help to define and manage query constraints based on these associations.
            </span>
            <br /><br />

            <span className="globalSubTitle">1. Scope with One-to-One Association:</span>
            <span>
                In a one-to-one association, you might want to scope your queries to include or exclude related records. Scopes can help manage this efficiently.
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

// Scoping to include associated Profile
User.scope('withProfile', {
  include: [{ model: Profile }]
});

// Synchronize models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
                `}
            </SyntaxHighlighter>
            <span>
                এখানে `User` মডেলের জন্য একটি scope `withProfile` তৈরি করা হয়েছে যা `Profile` মডেলকে অন্তর্ভুক্ত করে। এটি `User` মডেলের সঙ্গে সম্পর্কিত `Profile` ডেটা সহ কুয়েরি করতে সাহায্য করবে।
            </span>
            <br /><br />

            <span className="globalSubTitle">2. Scope with One-to-Many Association:</span>
            <span>
                In a one-to-many association, you might want to scope queries to only include records that have a certain number of related records.
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
  }
});

// One-to-Many Association
User.hasMany(Post);
Post.belongsTo(User);

// Scoping to include only users with at least one post
User.scope('withPosts', {
  include: [{ model: Post }]
});

// Synchronize models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
                `}
            </SyntaxHighlighter>
            <span>
                এখানে `User` মডেলের জন্য `withPosts` নামে একটি scope তৈরি করা হয়েছে যা `Post` মডেলকে অন্তর্ভুক্ত করে। এটি কুয়েরি করার সময় শুধুমাত্র সেই `User` রেকর্ডগুলো অন্তর্ভুক্ত করবে যাদের এক বা একাধিক `Post` আছে।
            </span>
            <br /><br />

            <span className="globalSubTitle">3. Scope with Many-to-Many Association:</span>
            <span>
                In a many-to-many association, you might want to scope queries to include records that are associated through a junction table.
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

// Scoping to include courses for a specific student
Student.scope('withCourses', {
  include: [{ model: Course, through: { attributes: [] } }]
});

// Synchronize models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
                `}
            </SyntaxHighlighter>
            <span>
                এখানে `Student` মডেলের জন্য `withCourses` নামে একটি scope তৈরি করা হয়েছে যা `Course` মডেলকে অন্তর্ভুক্ত করে। এই scope টি `Student` মডেলের সাথে সম্পর্কিত `Course` গুলোর তথ্যও প্রদান করবে।
            </span>
            <br /><br />

            <span className="globalSubTitle">Summary:</span>
            <span>
                **Association Scopes**: Scopes in Sequelize help manage and filter queries based on associations between models. You can use scopes to include associated records or filter results based on related data.
            </span>
        </div>
    );
}

export default AssociationScopes;
