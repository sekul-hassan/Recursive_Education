import React from 'react';

function Object(props) {
    return (
        <p>
            <strong>Object:</strong> জাভাস্ক্রিপ্টে object হল একটি data structure যা key-value pair আকারে তথ্য
            সংরক্ষণ করে। প্রতিটি key কে property বলা হয় এবং তার corresponding value কে বলা হয় value।
            <br/>
            Example:
            <br/>
            <code>
                const person = {"{"}
                <br/>
                &nbsp;&nbsp;firstName: "John",
                <br/>
                &nbsp;&nbsp;lastName: "Doe",
                <br/>
                &nbsp;&nbsp;age: 30,
                <br/>
                &nbsp;&nbsp;address: {"{"}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;city: "New York",
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;zipCode: 10001
                <br/>
                &nbsp;&nbsp;{"}"},
                <br/>
                {"}"};
            </code>
            <br/>
            Accessing Object Properties:
            <br/>
            <code>
                console.log(person.firstName); // Output: John
                <br/>
                console.log(person["lastName"]); // Output: Doe
            </code>
            <br/>
            Modifying Object Properties:
            <br/>
            <code>
                person.age = 31;
                <br/>
                console.log(person.age); // Output: 31
            </code>
            <br/>
            Adding New Properties:
            <br/>
            <code>
                person.email = "john.doe@example.com";
                <br/>
                console.log(person.email); // Output: john.doe@example.com
            </code>
            <br/>
            Object Methods:
            <br/>
            <code>
                const person = {"{"}
                <br/>
                &nbsp;&nbsp;firstName: "John",
                <br/>
                &nbsp;&nbsp;lastName: "Doe",
                <br/>
                &nbsp;&nbsp;fullName: function() {"{"}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return this.firstName + " " + this.lastName;
                <br/>
                &nbsp;&nbsp;{"}"},
                <br/>
                {"}"};
                <br/>
                console.log(person.fullName()); // Output: John Doe
            </code>
            <br/>
            Looping Through Object Properties:
            <br/>
            <code>
                for (let key in person) {"{"}
                <br/>
                &nbsp;&nbsp;console.log(key + ": " + person[key]);
                <br/>
                {"}"}
            </code>
            <br/>
            Example Output:
            <br/>
            <code>
                firstName: John
                <br/>
                lastName: Doe
                <br/>
                age: 31
                <br/>
                email: john.doe@example.com
            </code>
        </p>
    );
}

export default Object;