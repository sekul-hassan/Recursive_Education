import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Object(props) {
    return (
        <div className="mt-2">
            <strong>Object:</strong>
            <div className="globalDescription">
                জাভাস্ক্রিপ্টে object হল একটি data structure যা key-value pair আকারে তথ্য সংরক্ষণ করে। প্রতিটি key কে property বলা হয় এবং তার corresponding value কে বলা হয় value।
            </div>
            <br />
            Example:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        city: "New York",
        zipCode: 10001
    }
};`}
            </SyntaxHighlighter>
            <br />
            Accessing Object Properties:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe`}
            </SyntaxHighlighter>
            <br />
            Modifying Object Properties:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`person.age = 31;
console.log(person.age); // Output: 31`}
            </SyntaxHighlighter>
            <br />
            Adding New Properties:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`person.email = "john.doe@example.com";
console.log(person.email); // Output: john.doe@example.com`}
            </SyntaxHighlighter>
            <br />
            Object Methods:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // Output: John Doe`}
            </SyntaxHighlighter>
            <br />
            Looping Through Object Properties:
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`for (let key in person) {
    console.log(key + ": " + person[key]);
}`}
            </SyntaxHighlighter>
            <br />
            Example Output:
            <br />
            <SyntaxHighlighter language="plaintext" style={solarizedlight}>
                {`firstName: John
lastName: Doe
age: 31
email: john.doe@example.com`}
            </SyntaxHighlighter>
        </div>
    );
}

export default Object;
