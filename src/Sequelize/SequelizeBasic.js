import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function SequelizeBasic() {
    return (
        <div className="globalDescription">
            <span className="globalSubTitle">Introduction to Sequelize:</span> <br/>
            <span>Sequelize হল একটি promise-based ORM (Object-Relational Mapping) library যা Node.js এর সাথে ব্যবহৃত হয়। এটি বিভিন্ন SQL databases যেমন PostgreSQL, MySQL, MariaDB, SQLite, এবং Microsoft SQL Server এর সাথে কাজ করতে সাহায্য করে।</span>


            <span className="globalSubTitle">Setting Up Sequelize:</span> <br/>
            <span>Sequelize এবং একটি SQL database এর সাথে যোগাযোগ করার জন্য প্রথমে Sequelize package এবং database driver install করতে হবে:</span>

            <SyntaxHighlighter style={solarizedlight}>
                {`
npm install sequelize sequelize-cli
npm install pg pg-hstore        // PostgreSQL এর জন্য
npm install mysql2             // MySQL এর জন্য
npm install sqlite3            // SQLite এর জন্য
npm install tedious            // Microsoft SQL Server এর জন্য
                `}
            </SyntaxHighlighter>


            <span className="globalSubTitle">Basic Configuration:</span><br/>
            <span>Sequelize সেটআপ করার জন্য একটি configuration file তৈরি করতে হবে। নিচে একটি basic configuration example দেওয়া হলো:</span>

            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
const { Sequelize } = require('sequelize');

// PostgreSQL database connection example
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
                `}
            </SyntaxHighlighter>


            <span className="globalSubTitle">Defining Models:</span><br/>
            <span>Sequelize এ models define করতে হবে। Models represent database tables। নিচে একটি basic model example দেওয়া হলো:</span>

            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
const { DataTypes } = require('sequelize');
const sequelize = require('./path_to_your_sequelize_instance');

// User model example
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

// Sync model with the database
(async () => {
    await sequelize.sync({ force: true });
    console.log("The table for the User model was just created!");
})();
                `}
            </SyntaxHighlighter>


            <span className="globalSubTitle">Basic CRUD Operations:</span>
            <span>নিচে CRUD operations এর basic examples দেওয়া হলো:</span>


            <span className="globalSubTitle">1. Create:</span>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
(async () => {
    await User.create({
        name: 'John Doe',
        email: 'john.doe@example.com'
    });
})();
                `}
            </SyntaxHighlighter>


            <span className="globalSubTitle">2. Read:</span>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
(async () => {
    const users = await User.findAll();
    console.log(users);
})();
                `}
            </SyntaxHighlighter>


            <span className="globalSubTitle">3. Update:</span>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
(async () => {
    await User.update({ name: 'Jane Doe' }, {
        where: {
            email: 'john.doe@example.com'
        }
    });
})();
                `}
            </SyntaxHighlighter>


            <span className="globalSubTitle">4. Delete:</span>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
(async () => {
    await User.destroy({
        where: {
            email: 'john.doe@example.com'
        }
    });
})();
                `}
            </SyntaxHighlighter>


            <span className="globalSubTitle">Conclusion:</span>
            <span>Sequelize একটি powerful ORM যা SQL databases এর সাথে interaction কে সহজ এবং flexible করে তোলে। এটি complex queries এর সাথে কাজ করতে এবং data management করতে সাহায্য করে।</span>

        </div>
    );
}

export default SequelizeBasic;
