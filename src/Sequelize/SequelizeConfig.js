
const SequelizeConfig = {
    basic:[
        {
            title: "Introduction to Sequelize",
            description: "Sequelize হল একটি promise-based ORM (Object-Relational Mapping) library যা Node.js এর সাথে ব্যবহৃত হয়। এটি বিভিন্ন SQL databases যেমন PostgreSQL, MySQL, MariaDB, SQLite, এবং Microsoft SQL Server এর সাথে কাজ করতে সাহায্য করে।",
            minTitle: [
                {
                    title: "Setting Up Sequelize",
                    description: "Sequelize এবং একটি SQL database এর সাথে যোগাযোগ করার জন্য প্রথমে Sequelize package এবং database driver install করতে হবে:",
                    code: "npm install sequelize sequelize-cli\nnpm install pg pg-hstore        // PostgreSQL এর জন্য\nnpm install mysql2             // MySQL এর জন্য\nnpm install sqlite3            // SQLite এর জন্য\nnpm install tedious            // Microsoft SQL Server এর জন্য"
                },
                {
                    title: "Basic Configuration",
                    description: "Sequelize সেটআপ করার জন্য একটি configuration file তৈরি করতে হবে। নিচে একটি basic configuration example দেওয়া হলো:",
                    code: "const { Sequelize } = require('sequelize');\n\n// PostgreSQL database connection example\nconst sequelize = new Sequelize('database_name', 'username', 'password', {\n    host: 'localhost',\n    dialect: 'postgres',\n});\n\n(async () => {\n    try {\n        await sequelize.authenticate();\n        console.log('Connection has been established successfully.');\n    } catch (error) {\n        console.error('Unable to connect to the database:', error);\n    }\n})();"
                },
                {
                    title: "Defining Models",
                    description: "Sequelize এ models define করতে হবে। Models represent database tables। নিচে একটি basic model example দেওয়া হলো:",
                    code: "const { DataTypes } = require('sequelize');\nconst sequelize = require('./path_to_your_sequelize_instance');\n\n// User model example\nconst User = sequelize.define('User', {\n    name: {\n        type: DataTypes.STRING,\n        allowNull: false\n    },\n    email: {\n        type: DataTypes.STRING,\n        allowNull: false,\n        unique: true\n    }\n});\n\n// Sync model with the database\n(async () => {\n    await sequelize.sync({ force: true });\n    console.log(\"The table for the User model was just created!\");\n})();"
                },
            ]
        },
        {
            title: "Basic CRUD Operations",
            description: "নিচে CRUD operations এর basic examples দেওয়া হলো:",
            minTitle: [
                {
                    title: "Create",
                    code: "(async () => {\n    await User.create({\n        name: 'John Doe',\n        email: 'john.doe@example.com'\n    });\n})();"
                },
                {
                    title: "Read",
                    code: "(async () => {\n    const users = await User.findAll();\n    console.log(users);\n})();"
                },
                {
                    title: "Update",
                    code: "(async () => {\n    await User.update({ name: 'Jane Doe' }, {\n        where: {\n            email: 'john.doe@example.com'\n        }\n    });\n})();"
                },
                {
                    title: "Delete",
                    code: "(async () => {\n    await User.destroy({\n        where: {\n            email: 'john.doe@example.com'\n        }\n    });\n})();"
                }
            ]
        },
        {
            title: "Conclusion",
            description: "Sequelize একটি powerful ORM যা SQL databases এর সাথে interaction কে সহজ এবং flexible করে তোলে। এটি complex queries এর সাথে কাজ করতে এবং data management করতে সাহায্য করে।"
        }
    ],
    sync: [
        {
            title: "Sequelize `sync` Method",
            description: "Sequelize-এর `sync` মেথড ব্যবহৃত হয় মডেলগুলির পরিবর্তন ডাটাবেসে আপডেট করতে। এখানে দুইটি প্রধান অপশন থাকে: `force` এবং `alter`।",
            minTitle: [
                {
                    title: "sync({ force: true })",
                    description: "force: true ব্যবহার করলে, Sequelize ডাটাবেসের টেবিলগুলোকে সম্পূর্ণভাবে পুনর্গঠিত করবে। এর মানে, বর্তমান টেবিলগুলো মুছে ফেলবে এবং পুনরায় তৈরি করবে।",
                    code: "sequelize.sync({ force: true })\n    .then(() => {\n        console.log('Database & tables created!');\n    });"
                },
                {
                    title: "sync({ alter: true })",
                    description: "alter: true ব্যবহার করলে, Sequelize বিদ্যমান টেবিলগুলির স্ট্রাকচারকে আপডেট করবে, কিন্তু টেবিলগুলির মধ্যে বিদ্যমান ডেটা রক্ষা করবে। এটি টেবিলের স্কিমা পরিবর্তন করে, যেমন নতুন কলাম যোগ করা বা কলামের ধরন পরিবর্তন করা, তবে ডেটা মুছে ফেলবে না।",
                    code: "sequelize.sync({ alter: true })\n    .then(() => {\n        console.log('Database & tables updated!');\n    });"
                }
            ]
        },
        {
            title: "Summary",
            description: " `force: true` : সমস্ত টেবিল মুছে ফেলবে এবং পুনরায় তৈরি করবে, তাই সকল বিদ্যমান ডেটা মুছে যাবে। `alter: true`  টেবিলগুলির স্কিমা আপডেট করবে, ডেটা রক্ষা করবে।"
        }
    ],
    association:[

    ]
}

export default SequelizeConfig;