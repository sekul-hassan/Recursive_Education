import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Events() {
        return (
            <div className="mt-2">
                    <span className="globalSubTitle">JavaScript Events: </span>
                    <div className="globalDescription">
                            জাভাস্ক্রিপ্ট ইভেন্ট হল কোনো নির্দিষ্ট ঘটনার প্রতিক্রিয়া জানাতে ব্যবহৃত একটি উপায়। উদাহরণস্বরূপ, একটি বাটন ক্লিক করলে, একটি ইমেজ লোড হলে, বা একটি কীবোর্ড কী চাপলে একটি ইভেন্ট ঘটে।
                    </div>
                    <br /><br />

                    <span className="globalSubTitle">Click Event</span>
                    <br />
                    <div className="globalDescription">
                            Click ইভেন্ট তখন ঘটে যখন User কোনো HTML এলিমেন্টের উপর ক্লিক করে।
                    </div>
                    <br />
                    <SyntaxHighlighter language="html" style={solarizedlight}>
                            {`<button onclick="alert('Button clicked!')">Click Me</button>
// Output: "Button clicked!" (বাটন ক্লিক করার পর একটি এলার্ট দেখাবে)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">Mouseover Event</span>
                    <br />
                    <div className="globalDescription">
                            Mouseover ইভেন্ট তখন ঘটে যখন ব্যবহারকারী মাউস কার্সর কোনো HTML এলিমেন্টের উপর নিয়ে যায়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="html" style={solarizedlight}>
                            {`<div onmouseover="console.log('Mouse over!')">Hover over me</div>
// Output: "Mouse over!" (এলিমেন্টের উপর মাউস নিয়ে গেলে কনসোলে লগ হবে)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">Keydown Event</span>
                    <br />
                    <div className="globalDescription">
                            Keydown ইভেন্ট তখন ঘটে যখন ব্যবহারকারী কোনো কীবোর্ড কী চাপেন।
                    </div>
                    <br />
                    <SyntaxHighlighter language="html" style={solarizedlight}>
                            {`<input type="text" onkeydown="console.log('Key pressed!')"/>
                // Output: "Key pressed!" (কীবোর্ডের কোনো কী চাপলে কনসোলে লগ হবে)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">Change Event</span>
                    <br />
                    <div className="globalDescription">
                            Change ইভেন্ট তখন ঘটে যখন একটি ইনপুট ফিল্ডের মান পরিবর্তন করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="html" style={solarizedlight}>
                            {`<input type="text" onchange="console.log('Input changed!')"/>
                // Output: "Input changed!" (ইনপুটের মান পরিবর্তিত হলে কনসোলে লগ হবে)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">Submit Event</span>
                    <br />
                    <div className="globalDescription">
                            Submit ইভেন্ট তখন ঘটে যখন একটি ফর্ম সাবমিট করা হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="html" style={solarizedlight}>
                            {`<form onsubmit="console.log('Form submitted!')">
  <button type="submit">Submit</button>
</form>
// Output: "Form submitted!" (ফর্ম সাবমিট করলে কনসোলে লগ হবে)`}
                    </SyntaxHighlighter>
                    <br />

                    <span className="globalSubTitle">Load Event</span>
                    <br />
                    <div className="globalDescription">
                            Load ইভেন্ট তখন ঘটে যখন একটি পৃষ্ঠা বা ইমেজ সম্পূর্ণভাবে লোড হয়।
                    </div>
                    <br />
                    <SyntaxHighlighter language="html" style={solarizedlight}>
                            {`<body onload="console.log('Page fully loaded!')">
// Output: "Page fully loaded!" (পেজ পুরোপুরি লোড হলে কনসোলে লগ হবে)`}
                    </SyntaxHighlighter>
                    <br />
            </div>
        );
}

export default Events;
