import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Loops() {
        return (
            <div className="mt-2">
                    <span className="globalSubTitle">Loops:</span>
                    <div className="globalDescription">
                            জাভাস্ক্রিপ্টে loops ব্যবহারের মাধ্যমে আমরা একটি কাজকে বারবার নির্দিষ্ট সংখ্যক বার চালাতে পারি।
                    </div>
                    <br />

                    <span className="globalSubTitle">for loop</span>
                    <br />
                    <div className="globalDescription">
                            for loop সাধারণত নির্দিষ্ট সংখ্যক বার কোড ব্লক চালানোর জন্য ব্যবহৃত হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`for (let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}
// Output: "Number: 0", "Number: 1", "Number: 2", "Number: 3", "Number: 4"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">while loop</span>
                    <br />
                    <div className="globalDescription">
                            while loop তখন পর্যন্ত কোড ব্লক চালিয়ে যেতে থাকে যতক্ষণ না নির্দিষ্ট শর্তটি সত্য থাকে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}
// Output: "Count: 0", "Count: 1", "Count: 2", "Count: 3", "Count: 4"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">do...while loop</span>
                    <br />
                    <div className="globalDescription">
                            do...while loop কমপক্ষে একবার কোড ব্লক চালায়, তারপর শর্তটি চেক করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let count = 0;
do {
  console.log("Count: " + count);
  count++;
} while (count < 5);
// Output: "Count: 0", "Count: 1", "Count: 2", "Count: 3", "Count: 4"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">for...of loop</span>
                    <br />
                    <div className="globalDescription">
                            for...of loop একটি iterable object যেমন array এর প্রতিটি এলিমেন্টের জন্য কোড ব্লক চালায়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let numbers = [10, 20, 30];
for (let number of numbers) {
  console.log("Number: " + number);
}
// Output: "Number: 10", "Number: 20", "Number: 30"`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">for...in loop</span>
                    <br />
                    <div className="globalDescription">
                            for...in loop একটি object এর properties গুলোর উপর loop চালায়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                            {`let person = {name: "John", age: 30, job: "Developer"};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output: "name: John", "age: 30", "job: Developer"`}
                    </SyntaxHighlighter>
                    <br />
            </div>
        );
}

export default Loops;
