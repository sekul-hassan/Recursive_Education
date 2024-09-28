
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
        {
            title: "Introduction to Sequelize Associations : ",
            description: "Sequelize Association বলতে বোঝায় বিভিন্ন মডেলের (তথা টেবিলের) মধ্যে সম্পর্ক স্থাপন। এই সম্পর্কগুলি ডাটাবেসে বিভিন্ন ধরনের রেকর্ডের মধ্যে সম্পর্ক পরিচালনার জন্য ব্যবহৃত হয়। Sequelize বিভিন্ন ধরনের।\n" +
                "Sequelize বিভিন্ন ধরনের অ্যাসোসিয়েশন সাপোর্ট করে, যা বিভিন্ন টেবিলের মধ্যে সম্পর্ক স্থাপন করতে সাহায্য করে। এখানে প্রধান ধরনের অ্যাসোসিয়েশন গুলি দেওয়া হলো \n" +
                "এই উদাহরণে, প্রতিটি `User` এর একটি `Profile` থাকবে, এবং প্রতিটি `Profile` এক `User` এর সাথে সম্পর্কিত।\n",
            minTitle:[
                {
                    title:"One-to-One Association ",
                    description: "One-to-One অ্যাসোসিয়েশন মানে এক মডেলের একটি রেকর্ড অন্য মডেলের একটি রেকর্ডের সাথে সম্পর্কিত।",
                    code:"const { Sequelize, DataTypes } = require('sequelize');\n" +
                        "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                        "  host: 'localhost',\n" +
                        "  dialect: 'mysql'\n" +
                        "});\n" +
                        "\n" +
                        "// Define User model\n" +
                        "const User = sequelize.define('User', {\n" +
                        "  name: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Profile model\n" +
                        "const Profile = sequelize.define('Profile', {\n" +
                        "  bio: {\n" +
                        "    type: DataTypes.TEXT\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// One-to-One Association\n" +
                        "User.hasOne(Profile);\n" +
                        "Profile.belongsTo(User);\n" +
                        "\n" +
                        "// Synchronize models\n" +
                        "sequelize.sync({ force: true });"
                },
                {
                    title: " One-to-Many Association ",
                    description: "One-to-Many অ্যাসোসিয়েশন মানে এক মডেলের একটি রেকর্ড একাধিক রেকর্ডের সাথে সম্পর্কিত। \n" +
                        "এখানে, এক `User` অনেকগুলো `Post` তৈরি করতে পারে, এবং প্রতিটি `Post` এক `User` এর সাথে সম্পর্কিত।\n",
                    code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                        "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                        "  host: 'localhost',\n" +
                        "  dialect: 'mysql'\n" +
                        "});\n" +
                        "\n" +
                        "// Define User model\n" +
                        "const User = sequelize.define('User', {\n" +
                        "  name: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Post model\n" +
                        "const Post = sequelize.define('Post', {\n" +
                        "  title: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  },\n" +
                        "  content: {\n" +
                        "    type: DataTypes.TEXT\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// One-to-Many Association\n" +
                        "User.hasMany(Post);\n" +
                        "Post.belongsTo(User);\n" +
                        "\n" +
                        "// Synchronize models\n" +
                        "sequelize.sync({ force: true });"
                },
                {
                    title: " Many-to-Many Association(N:N) ",
                    description: "Many-to-Many অ্যাসোসিয়েশন মানে একাধিক রেকর্ড এক মডেলে একাধিক রেকর্ডের সাথে সম্পর্কিত। \n" +
                        "এই উদাহরণে, অনেক `Student` অনেকগুলো `Course` এ ভর্তি হতে পারে এবং প্রতিটি `Course` এ অনেক `Student` থাকতে পারে। `StudentCourses` টেবিলটি এই many-to-many সম্পর্ক পরিচালনা করে।",
                    code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                        "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                        "  host: 'localhost',\n" +
                        "  dialect: 'mysql'\n" +
                        "});\n" +
                        "\n" +
                        "// Define Student model\n" +
                        "const Student = sequelize.define('Student', {\n" +
                        "  name: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Course model\n" +
                        "const Course = sequelize.define('Course', {\n" +
                        "  title: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Many-to-Many Association\n" +
                        "Student.belongsToMany(Course, { through: 'StudentCourses' });\n" +
                        "Course.belongsToMany(Student, { through: 'StudentCourses' });\n" +
                        "\n" +
                        "// Synchronize models\n" +
                        "sequelize.sync({ force: true });\n"
                },
                {
                    title: "Multiple Associations ",
                    description: "Sequelize একাধিক ধরনের অ্যাসোসিয়েশন একসাথে ব্যবহার করতে দেয়। এটি আরও জটিল পরিস্থিতিতে উপকারী। \n" +
                        "এখানে, `Author` এর অনেকগুলো `Books` থাকতে পারে, এবং `Publisher` এর অনেকগুলো `Books` থাকতে পারে many-to-many সম্পর্কের মাধ্যমে। `PublisherBooks` টেবিলটি এই many-to-many সম্পর্ক পরিচালনা করে।",
                    code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                        "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                        "  host: 'localhost',\n" +
                        "  dialect: 'mysql'\n" +
                        "});\n" +
                        "\n" +
                        "// Define Author model\n" +
                        "const Author = sequelize.define('Author', {\n" +
                        "  name: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Book model\n" +
                        "const Book = sequelize.define('Book', {\n" +
                        "  title: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Publisher model\n" +
                        "const Publisher = sequelize.define('Publisher', {\n" +
                        "  name: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Associations\n" +
                        "Author.hasMany(Book); // One-to-Many\n" +
                        "Book.belongsTo(Author); // One-to-Many\n" +
                        "\n" +
                        "Publisher.belongsToMany(Book, { through: 'PublisherBooks' }); // Many-to-Many\n" +
                        "Book.belongsToMany(Publisher, { through: 'PublisherBooks' }); // Many-to-Many\n" +
                        "\n" +
                        "// Synchronize models\n" +
                        "sequelize.sync({ force: true });"
                }
            ]
        }
    ],
    eager:[
        {
            title: "Introduction to Eager Loading : ",
            description: "Eager Loading হল একটি প্রযুক্তি যা আপনাকে আপনার ডাটাবেসের সাথে সম্পর্কিত অন্যান্য টেবিলের ডেটা একসাথে লোড করতে দেয়। Sequelize-এ, এটি আপনাকে নেভিগেট এবং সম্পর্কিত ডেটা সহ মূল ডেটা একসাথে নিয়ে আসতে সাহায্য করে।",
        },
        {
            title: "Why Use Eager Loading? ",
            description: "Eager Loading ব্যবহার করার মাধ্যমে, আপনি একাধিক ডেটাবেস কল করতে বাধ্য হওয়া এড়াতে পারেন, যা পারফরম্যান্স উন্নত করতে সহায়ক। এটি একবারে সম্পর্কিত ডেটা লোড করতে সাহায্য করে, যা আপনার অ্যাপ্লিকেশনের লোডিং সময় কমায়।",
        },
        {
            title: "Example: Eager Loading in Sequelize ",
            description: "ধরুন, আপনার একটি `User` মডেল এবং একটি `Post` মডেল আছে, যেখানে এক `User` এর একাধিক `Post` থাকতে পারে। Eager Loading ব্যবহার করে আপনি একটি `User` এর সাথে সম্পর্কিত সমস্ত `Post` একসাথে লোড করতে পারেন।",
            code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                "  host: 'localhost',\n" +
                "  dialect: 'mysql'\n" +
                "});\n" +
                "\n" +
                "// Define User model\n" +
                "const User = sequelize.define('User', {\n" +
                "  name: {\n" +
                "    type: DataTypes.STRING,\n" +
                "    allowNull: false\n" +
                "  }\n" +
                "});\n" +
                "\n" +
                "// Define Post model\n" +
                "const Post = sequelize.define('Post', {\n" +
                "  title: {\n" +
                "    type: DataTypes.STRING,\n" +
                "    allowNull: false\n" +
                "  },\n" +
                "  content: {\n" +
                "    type: DataTypes.TEXT\n" +
                "  }\n" +
                "});\n" +
                "\n" +
                "// Define One-to-Many Association\n" +
                "User.hasMany(Post);\n" +
                "Post.belongsTo(User);\n" +
                "\n" +
                "// Eager Loading Example\n" +
                "User.findAll({\n" +
                "  include: Post // This will eager load all posts related to each user\n" +
                "}).then(users => {\n" +
                "  console.log(JSON.stringify(users, null, 2));\n" +
                "});"
        },
        {
            description: "এই কোডটি একটি `User` মডেল থেকে সমস্ত ব্যবহারকারী এবং তাদের সংশ্লিষ্ট `Post` গুলি একসাথে লোড করে। `include` অপশনটি Eager Loading সক্ষম করে এবং সম্পর্কিত ডেটা একসাথে রিটার্ন করে।"
        },
        {
            title: "Summary : ",
            description: "Eager Loading এটি সম্পর্কিত ডেটা একসাথে লোড করার একটি পদ্ধতি যা ডাটাবেস কল সংখ্যা কমায় এবং পারফরম্যান্স উন্নত করতে সাহায্য করে।"
        },
    ],
    associationScope:[
        {
            title: "Introduction to Association Scopes : ",
            description: "Sequelize associations allow you to define relationships between models, such as one-to-one, one-to-many, and many-to-many. Scopes in Sequelize help to define and manage query constraints based on these associations.",
        },
        {
            minTitle:[
                {
                    title: "Scope with One-to-One Association ",
                    description: "In a one-to-one association, you might want to scope your queries to include or exclude related records. Scopes can help manage this efficiently.",
                    code:"const { Sequelize, DataTypes } = require('sequelize');\n" +
                        "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                        "  host: 'localhost',\n" +
                        "  dialect: 'mysql'\n" +
                        "});\n" +
                        "\n" +
                        "// Define User model\n" +
                        "const User = sequelize.define('User', {\n" +
                        "  name: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Profile model\n" +
                        "const Profile = sequelize.define('Profile', {\n" +
                        "  bio: {\n" +
                        "    type: DataTypes.TEXT\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// One-to-One Association\n" +
                        "User.hasOne(Profile);\n" +
                        "Profile.belongsTo(User);\n" +
                        "\n" +
                        "// Scoping to include associated Profile\n" +
                        "User.scope('withProfile', {\n" +
                        "  include: [{ model: Profile }]\n" +
                        "});\n" +
                        "\n" +
                        "// Synchronize models\n" +
                        "sequelize.sync({ force: true }).then(() => {\n" +
                        "  console.log('Database & tables created!');\n" +
                        "});",
                    descriptionCode: "এখানে `User` মডেলের জন্য একটি scope `withProfile` তৈরি করা হয়েছে যা `Profile` মডেলকে অন্তর্ভুক্ত করে। এটি `User` মডেলের সঙ্গে সম্পর্কিত `Profile` ডেটা সহ কুয়েরি করতে সাহায্য করবে।",
                },
                {
                    title: "Scope with One-to-Many Association ",
                    description: "In a one-to-many association, you might want to scope queries to only include records that have a certain number of related records.",
                    code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                        "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                        "  host: 'localhost',\n" +
                        "  dialect: 'mysql'\n" +
                        "});\n" +
                        "\n" +
                        "// Define User model\n" +
                        "const User = sequelize.define('User', {\n" +
                        "  name: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Post model\n" +
                        "const Post = sequelize.define('Post', {\n" +
                        "  title: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// One-to-Many Association\n" +
                        "User.hasMany(Post);\n" +
                        "Post.belongsTo(User);\n" +
                        "\n" +
                        "// Scoping to include only users with at least one post\n" +
                        "User.scope('withPosts', {\n" +
                        "  include: [{ model: Post }]\n" +
                        "});\n" +
                        "\n" +
                        "// Synchronize models\n" +
                        "sequelize.sync({ force: true }).then(() => {\n" +
                        "  console.log('Database & tables created!');\n" +
                        "});",
                    descriptionCode: "এখানে `User` মডেলের জন্য `withPosts` নামে একটি scope তৈরি করা হয়েছে যা `Post` মডেলকে অন্তর্ভুক্ত করে। এটি কুয়েরি করার সময় শুধুমাত্র সেই `User` রেকর্ডগুলো অন্তর্ভুক্ত করবে যাদের এক বা একাধিক `Post` আছে।"
                },
                {
                    title: "Scope with Many-to-Many Association ",
                    description: "In a many-to-many association, you might want to scope queries to include records that are associated through a junction table.",
                    code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                        "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                        "  host: 'localhost',\n" +
                        "  dialect: 'mysql'\n" +
                        "});\n" +
                        "\n" +
                        "// Define Student model\n" +
                        "const Student = sequelize.define('Student', {\n" +
                        "  name: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Define Course model\n" +
                        "const Course = sequelize.define('Course', {\n" +
                        "  title: {\n" +
                        "    type: DataTypes.STRING,\n" +
                        "    allowNull: false\n" +
                        "  }\n" +
                        "});\n" +
                        "\n" +
                        "// Many-to-Many Association\n" +
                        "Student.belongsToMany(Course, { through: 'StudentCourses' });\n" +
                        "Course.belongsToMany(Student, { through: 'StudentCourses' });\n" +
                        "\n" +
                        "// Scoping to include courses for a specific student\n" +
                        "Student.scope('withCourses', {\n" +
                        "  include: [{ model: Course, through: { attributes: [] } }]\n" +
                        "});\n" +
                        "\n" +
                        "// Synchronize models\n" +
                        "sequelize.sync({ force: true }).then(() => {\n" +
                        "  console.log('Database & tables created!');\n" +
                        "});",
                    descriptionCode: "এখানে `Student` মডেলের জন্য `withCourses` নামে একটি scope তৈরি করা হয়েছে যা `Course` মডেলকে অন্তর্ভুক্ত করে। এই scope টি `Student` মডেলের সাথে সম্পর্কিত `Course` গুলোর তথ্যও প্রদান করবে।",
                },
            ],
        },
        {
            title: "Summary : ",
            description: "Association Scopes Scopes in Sequelize help manage and filter queries based on associations between models. You can use scopes to include associated records or filter results based on related data."
        }
    ],
    polyMorphicAssociation:[
        {
            title: "Polymorphic Associations এর পরিচিতি : ",
            description: "Polymorphic associations একটি মডেলকে একাধিক অন্যান্য মডেলের সাথে একক অ্যাসোসিয়েশনের মাধ্যমে যুক্ত করার সুযোগ দেয়। এটি বিশেষভাবে উপকারী যখন আপনি বিভিন্ন মডেলের মধ্যে নমনীয় সম্পর্ক তৈরি করতে চান, কিন্তু একাধিক অ্যাসোসিয়েশন সংজ্ঞায়িত করার প্রয়োজন হয় না।"
        },
        {
            title: "Polymorphic Associations এর উদাহরণ : ",
            description: "ধরুন আপনার কাছে একটি `Comment` মডেল আছে যা বিভিন্ন মডেলের সাথে সম্পর্কিত হতে পারে, যেমন `Post` এবং `Photo`। আলাদা আলাদা অ্যাসোসিয়েশন তৈরি করার পরিবর্তে, polymorphic associations ব্যবহার করে এটি পরিচালনা করা যায়।",
            code: "const { Sequelize, DataTypes } = require('sequelize');\n" +
                "const sequelize = new Sequelize('database', 'username', 'password', {\n" +
                "  host: 'localhost',\n" +
                "  dialect: 'mysql'\n" +
                "});\n" +
                "\n" +
                "// Define Post model\n" +
                "const Post = sequelize.define('Post', {\n" +
                "  title: {\n" +
                "    type: DataTypes.STRING,\n" +
                "    allowNull: false\n" +
                "  }\n" +
                "});\n" +
                "\n" +
                "// Define Photo model\n" +
                "const Photo = sequelize.define('Photo', {\n" +
                "  url: {\n" +
                "    type: DataTypes.STRING,\n" +
                "    allowNull: false\n" +
                "  }\n" +
                "});\n" +
                "\n" +
                "// Define Comment model\n" +
                "const Comment = sequelize.define('Comment', {\n" +
                "  content: {\n" +
                "    type: DataTypes.TEXT,\n" +
                "    allowNull: false\n" +
                "  },\n" +
                "  commentableType: {\n" +
                "    type: DataTypes.STRING,\n" +
                "    allowNull: false\n" +
                "  },\n" +
                "  commentableId: {\n" +
                "    type: DataTypes.INTEGER,\n" +
                "    allowNull: false\n" +
                "  }\n" +
                "});\n" +
                "\n" +
                "// Polymorphic Associations\n" +
                "Post.hasMany(Comment, { foreignKey: 'commentableId', constraints: false });\n" +
                "Photo.hasMany(Comment, { foreignKey: 'commentableId', constraints: false });\n" +
                "Comment.belongsTo(Post, { foreignKey: 'commentableId', constraints: false, scope: { commentableType: 'Post' } });\n" +
                "Comment.belongsTo(Photo, { foreignKey: 'commentableId', constraints: false, scope: { commentableType: 'Photo' } });\n" +
                "\n" +
                "// Synchronize models\n" +
                "sequelize.sync({ force: true }).then(() => {\n" +
                "  console.log('Database & tables created!');\n" +
                "});",
        },
        {
            description: "এই উদাহরণে : ",
            minTitle:[
                {description: "Post এবং Photo মডেলগুলির অনেকগুলি Comment রেকর্ড থাকতে পারে।"},
                {description: "Comment মডেলে `commentableType` এবং `commentableId` ফিল্ড রয়েছে যা সম্পর্কিত মডেলের টাইপ এবং ID সংরক্ষণ করে।"},
                {description: "Comment.belongsTo(Post) এবং Comment.belongsTo(Photo) polymorphic association সংজ্ঞায়িত করে যেখানে `scope` নির্দেশ করে কোন মডেলটির সাথে কমেন্ট যুক্ত হবে।"},
            ]
        },
        {
            title: "ব্যবহার ",
            description: "Polymorphic associations বিশেষভাবে উপকারী যখন আপনি একটি মডেল (যেমন `Comment`) কে একাধিক অন্যান্য মডেলের (যেমন `Post`, `Photo`) সাথে সম্পর্কিত করতে চান, একাধিক অ্যাসোসিয়েশন তৈরি না করেই।"
        },
        {
            title: "Polymorphic Associations কোয়েরি করা ",
            description: "Polymorphic associations কোয়েরি করার জন্য, আপনাকে আপনার কোয়েরিতে সম্পর্কিত মডেলের টাইপ নির্ধারণ করতে হবে। উদাহরণস্বরূপ, একটি `Post` সম্পর্কিত কমেন্টগুলি খুঁজতে হলে, `commentableType` এবং `commentableId` দ্বারা ফিল্টার করতে হবে।\n",
            code: "Comment.findAll({\n" +
                "  where: {\n" +
                "    commentableType: 'Post',\n" +
                "    commentableId: 1\n" +
                "  }\n" +
                "}).then(comments => {\n" +
                "  console.log(comments);\n" +
                "});",
            descriptionCode:"এই কোয়েরিটি সব কমেন্ট ফিরিয়ে আনে যা `Post` মডেলের সাথে সম্পর্কিত এবং `commentableId` হল `1`।"
        }
    ],
}

export default SequelizeConfig;