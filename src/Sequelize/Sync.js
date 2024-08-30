import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Sync(props) {
    return (
        <div className="globalDescription">
            <span className="globalSubTitle">Sequelize `sync` Method:</span>br
            <span>
                Sequelize-এর `sync` মেথড ব্যবহৃত হয় মডেলগুলির পরিবর্তন ডাটাবেসে আপডেট করতে। এখানে দুইটি প্রধান অপশন থাকে: `force` এবং `alter`।
            </span>
            <br /><br />

            <span className="globalSubTitle">1. {`sync({ force: true })`}:</span> <br/>
            <span>
                force: true ব্যবহার করলে, Sequelize ডাটাবেসের টেবিলগুলোকে সম্পূর্ণভাবে পুনর্গঠিত করবে। এর মানে, বর্তমান টেবিলগুলো মুছে ফেলবে এবং পুনরায় তৈরি করবে।
            </span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');
    });
                `}
            </SyntaxHighlighter>
            <span>
                **ব্যবহার**: সাধারণত ডেভেলপমেন্টের সময় মডেল পরিবর্তন করার জন্য ব্যবহৃত হয়। এটি ডাটাবেসের সমস্ত তথ্য মুছে ফেলে, তাই প্রোডাকশন ডেটাবেসে এটি ব্যবহার করা উচিত নয়।
            </span>
            <br /><br />

            <span className="globalSubTitle">2. {`sync({ alter: true })`}:</span><br/>
            <span>
               alter: true ব্যবহার করলে, Sequelize বিদ্যমান টেবিলগুলির স্ট্রাকচারকে আপডেট করবে, কিন্তু টেবিলগুলির মধ্যে বিদ্যমান ডেটা রক্ষা করবে। এটি টেবিলের স্কিমা পরিবর্তন করে, যেমন নতুন কলাম যোগ করা বা কলামের ধরন পরিবর্তন করা, তবে ডেটা মুছে ফেলবে না।
            </span>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database & tables updated!');
    });
                `}
            </SyntaxHighlighter>
            <span>
                **ব্যবহার**: এটি সাধারণত ডেভেলপমেন্ট এবং প্রোডাকশন উভয় পরিবেশেই ব্যবহার করা যেতে পারে যখন আপনি মডেল স্কিমা পরিবর্তন করতে চান কিন্তু ডেটা হারাতে চান না।
            </span>
            <br /><br />

            <span className="globalSubTitle">Summary:</span>
            <span>
                **`force: true`**: সমস্ত টেবিল মুছে ফেলবে এবং পুনরায় তৈরি করবে, তাই সকল বিদ্যমান ডেটা মুছে যাবে।
                <br />
                **`alter: true`**: টেবিলগুলির স্কিমা আপডেট করবে, ডেটা রক্ষা করবে।
            </span>
        </div>
    );
}

export default Sync;
