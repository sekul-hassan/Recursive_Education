import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Dom() {
    return (
        <div className="mt-2">
            <span className="globalSubTitle">JavaScript DOM: </span>
            <div className="globalDescription">
                DOM বা Document Object Model হল একটি ওয়েব পেজের structure। DOM এর মাধ্যমে জাভাস্ক্রিপ্ট একটি ওয়েব পেজের HTML এবং CSS এর সাথে ইন্টার‍্যাক্ট করতে পারে, যেমন এলিমেন্ট পরিবর্তন, অ্যাড করা বা মুছে ফেলা।
            </div>
            <br /><br />

            <span className="globalSubTitle">Accessing Elements:</span>
            <br />
            <div className="globalDescription">
                DOM এর মাধ্যমে HTML এলিমেন্টগুলোকে অ্যাক্সেস করতে নিচের মেথডগুলো ব্যবহার করা হয়:
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`document.getElementById('elementId'); // একটি নির্দিষ্ট ID সম্বলিত এলিমেন্ট অ্যাক্সেস করতে
document.getElementsByClassName('className'); // একটি নির্দিষ্ট className সম্বলিত এলিমেন্টের লিস্ট অ্যাক্সেস করতে
document.getElementsByTagName('tagName'); // একটি নির্দিষ্ট ট্যাগ নাম সম্বলিত এলিমেন্টের লিস্ট অ্যাক্সেস করতে
document.querySelector('.className'); // CSS সিলেক্টর ব্যবহার করে প্রথম মিলে যাওয়া এলিমেন্ট অ্যাক্সেস করতে
document.querySelectorAll('.className'); // CSS সিলেক্টর ব্যবহার করে সব মিলে যাওয়া এলিমেন্টের লিস্ট অ্যাক্সেস করতে`}
            </SyntaxHighlighter>
            <br />

            <span className="globalSubTitle">Changing Content:</span>
            <br />
            <div className="globalDescription">
                DOM এর মাধ্যমে HTML এলিমেন্টের কন্টেন্ট পরিবর্তন করা যায়:
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`document.getElementById('elementId').innerHTML = 'New Content'; // একটি নির্দিষ্ট এলিমেন্টের ভিতরের HTML কন্টেন্ট পরিবর্তন করতে
document.getElementById('elementId').textContent = 'New Text'; // একটি নির্দিষ্ট এলিমেন্টের ভিতরের টেক্সট কন্টেন্ট পরিবর্তন করতে`}
            </SyntaxHighlighter>
            <br />

            <span className="globalSubTitle">Changing Styles:</span>
            <br />
            <div className="globalDescription">
                DOM এর মাধ্যমে HTML এলিমেন্টের স্টাইল পরিবর্তন করা যায়:
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`document.getElementById('elementId').style.color = 'red'; // একটি নির্দিষ্ট এলিমেন্টের টেক্সটের রং পরিবর্তন করতে
document.getElementById('elementId').style.backgroundColor = 'yellow'; // একটি নির্দিষ্ট এলিমেন্টের ব্যাকগ্রাউন্ড রং পরিবর্তন করতে`}
            </SyntaxHighlighter>
            <br />

            <span className="globalSubTitle">Adding/Removing Elements:</span>
            <br />
            <div className="globalDescription">
                DOM এর মাধ্যমে HTML এলিমেন্ট অ্যাড বা রিমুভ করা যায়:
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let newElement = document.createElement('div'); // নতুন একটি div এলিমেন্ট তৈরি করা
newElement.textContent = 'New Element'; // এলিমেন্টের কন্টেন্ট সেট করা
document.body.appendChild(newElement); // নতুন এলিমেন্ট পেজে অ্যাড করা

let element = document.getElementById('elementId'); // একটি নির্দিষ্ট এলিমেন্ট অ্যাক্সেস করা
element.parentNode.removeChild(element); // এলিমেন্ট পেজ থেকে রিমুভ করা`}
            </SyntaxHighlighter>
            <br />

            <span className="globalSubTitle">Event Handling:</span>
            <br />
            <div className="globalDescription">
                DOM এর মাধ্যমে ইভেন্ট হ্যান্ডলিং করতে পারা যায়:
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`document.getElementById('elementId').addEventListener('click', function() {
  alert('Element clicked!');
}); // একটি এলিমেন্টে ক্লিক ইভেন্ট হ্যান্ডলার যোগ করা`}
            </SyntaxHighlighter>
            <br />

            <span className="globalSubTitle">Traversing the DOM:</span>
            <br />
            <div className="globalDescription">
                DOM এর মাধ্যমে এলিমেন্টের পেরেন্ট, চাইল্ড এবং সিবলিং অ্যাক্সেস করা যায়:
            </div>
            <br />
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                {`let parentElement = document.getElementById('elementId').parentNode; // একটি এলিমেন্টের পেরেন্ট নোড অ্যাক্সেস করা
let childElements = document.getElementById('elementId').children; // একটি এলিমেন্টের চাইল্ড নোডগুলো অ্যাক্সেস করা
let nextSibling = document.getElementById('elementId').nextElementSibling; // একটি এলিমেন্টের পরবর্তী সিবলিং অ্যাক্সেস করা`}
            </SyntaxHighlighter>
            <br />
        </div>
    );
}

export default Dom;
