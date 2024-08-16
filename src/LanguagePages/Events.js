import React from 'react';

function Events() {
    return (
        <div>
            <span className="globalSubTitle">JavaScript Events : </span>
            <span>জাভাস্ক্রিপ্ট ইভেন্ট হল কোনো নির্দিষ্ট ঘটনার প্রতিক্রিয়া জানাতে ব্যবহৃত একটি উপায়। উদাহরণস্বরূপ, একটি বাটন ক্লিক করলে, একটি ইমেজ লোড হলে, বা একটি কীবোর্ড কী চাপলে একটি ইভেন্ট ঘটে।</span>
            <br/><br/>

            <span className="globalSubTitle">Click Event</span> <br/>
            <span>Click ইভেন্ট তখন ঘটে যখন User কোনো HTML এলিমেন্টের উপর ক্লিক করে।</span>
            <br/>
            <code>
                {`<button onclick="alert('Button clicked!')">Click Me</button>`} <br/>
                {'// আউটপুট: "Button clicked!" (বাটন ক্লিক করার পর একটি এলার্ট দেখাবে)'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Mouseover Event</span> <br/>
            <span>Mouseover ইভেন্ট তখন ঘটে যখন ব্যবহারকারী মাউস কার্সর কোনো HTML এলিমেন্টের উপর নিয়ে যায়।</span>
            <br/>
            <code>
                {`<div onmouseover="console.log('Mouse over!')">Hover over me</div>`} <br/>
                {'// আউটপুট: "Mouse over!" (এলিমেন্টের উপর মাউস নিয়ে গেলে কনসোলে লগ হবে)'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Keydown Event</span> <br/>
            <span>Keydown ইভেন্ট তখন ঘটে যখন ব্যবহারকারী কোনো কীবোর্ড কী চাপেন।</span>
            <br/>
            <code>
                {`<input type="text" onkeydown="console.log('Key pressed!')"/>`} <br/>
                {'// আউটপুট: "Key pressed!" (কীবোর্ডের কোনো কী চাপলে কনসোলে লগ হবে)'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Change Event</span> <br/>
            <span>Change ইভেন্ট তখন ঘটে যখন একটি ইনপুট ফিল্ডের মান পরিবর্তন করা হয়।</span>
            <br/>
            <code>
                {`<input type="text" onchange="console.log('Input changed!')"/>`} <br/>
                {'// আউটপুট: "Input changed!" (ইনপুটের মান পরিবর্তিত হলে কনসোলে লগ হবে)'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Submit Event</span> <br/>
            <span>Submit ইভেন্ট তখন ঘটে যখন একটি ফর্ম সাবমিট করা হয়।</span>
            <br/>
            <code>
                {`<form onsubmit="console.log('Form submitted!')">`} <br/>
                {`  <button type="submit">Submit</button>`} <br/>
                {`</form>`} <br/>
                {'// আউটপুট: "Form submitted!" (ফর্ম সাবমিট করলে কনসোলে লগ হবে)'} <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Load Event</span> <br/>
            <span>Load ইভেন্ট তখন ঘটে যখন একটি পৃষ্ঠা বা ইমেজ সম্পূর্ণভাবে লোড হয়।</span>
            <br/>
            <code>
                {`<body onload="console.log('Page fully loaded!')">`} <br/>
                {'// আউটপুট: "Page fully loaded!" (পেজ পুরোপুরি লোড হলে কনসোলে লগ হবে)'} <br/>
            </code>
            <br/>
        </div>
    );
}

export default Events;
