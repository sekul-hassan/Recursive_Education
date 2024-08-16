import React from 'react';

function Dom() {
    return (
        <div>
            <span className="globalSubTitle">JavaScript DOM : </span>
            <span>DOM বা Document Object Model হল একটি ওয়েব পেজের structure । DOM এর মাধ্যমে জাভাস্ক্রিপ্ট একটি ওয়েব পেজের HTML এবং CSS এর সাথে ইন্টার‍্যাক্ট করতে পারে, যেমন এলিমেন্ট পরিবর্তন, অ্যাড করা বা মুছে ফেলা।</span>
            <br/><br/>

            <span className="globalSubTitle">Accessing Elements:</span> <br/>
            <span>DOM এর মাধ্যমে HTML এলিমেন্টগুলোকে অ্যাক্সেস করতে নিচের মেথডগুলো ব্যবহার করা হয়:</span>
            <br/>
            <code>
                {`document.getElementById('elementId')`} <br/>
                <span>{'// একটি নির্দিষ্ট ID সম্বলিত এলিমেন্ট অ্যাক্সেস করতে'}</span> <br/><br/>
                {`document.getElementsByClassName('className')`} <br/>
                <span>{'// একটি নির্দিষ্ট className সম্বলিত এলিমেন্টের লিস্ট অ্যাক্সেস করতে'}</span> <br/><br/>
                {`document.getElementsByTagName('tagName')`} <br/>
                <span>{'// একটি নির্দিষ্ট ট্যাগ নাম সম্বলিত এলিমেন্টের লিস্ট অ্যাক্সেস করতে'}</span> <br/><br/>
                {`document.querySelector('.className')`} <br/>
                <span>{'// CSS সিলেক্টর ব্যবহার করে প্রথম মিলে যাওয়া এলিমেন্ট অ্যাক্সেস করতে'}</span> <br/><br/>
                {`document.querySelectorAll('.className')`} <br/>
                <span>{'// CSS সিলেক্টর ব্যবহার করে সব মিলে যাওয়া এলিমেন্টের লিস্ট অ্যাক্সেস করতে'}</span> <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Changing Content:</span> <br/>
            <span>DOM এর মাধ্যমে HTML এলিমেন্টের কন্টেন্ট পরিবর্তন করা যায়:</span>
            <br/>
            <code>
                {`document.getElementById('elementId').innerHTML = 'New Content';`} <br/>
                <span>{'// একটি নির্দিষ্ট এলিমেন্টের ভিতরের HTML কন্টেন্ট পরিবর্তন করতে'}</span> <br/><br/>
                {`document.getElementById('elementId').textContent = 'New Text';`} <br/>
                <span>{'// একটি নির্দিষ্ট এলিমেন্টের ভিতরের টেক্সট কন্টেন্ট পরিবর্তন করতে'}</span> <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Changing Styles:</span> <br/>
            <span>DOM এর মাধ্যমে HTML এলিমেন্টের স্টাইল পরিবর্তন করা যায়:</span>
            <br/>
            <code>
                {`document.getElementById('elementId').style.color = 'red';`} <br/>
                <span>{'// একটি নির্দিষ্ট এলিমেন্টের টেক্সটের রং পরিবর্তন করতে'}</span> <br/><br/>
                {`document.getElementById('elementId').style.backgroundColor = 'yellow';`} <br/>
                <span>{'// একটি নির্দিষ্ট এলিমেন্টের ব্যাকগ্রাউন্ড রং পরিবর্তন করতে'}</span> <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Adding/Removing Elements:</span> <br/>
            <span>DOM এর মাধ্যমে HTML এলিমেন্ট অ্যাড বা রিমুভ করা যায়:</span>
            <br/>
            <code>
                {`let newElement = document.createElement('div');`} <br/>
                {`newElement.textContent = 'New Element';`} <br/>
                {`document.body.appendChild(newElement);`} <br/>
                <span>{'// নতুন একটি div এলিমেন্ট তৈরি করে তা পেজে অ্যাড করতে'}</span> <br/><br/>
                {`let element = document.getElementById('elementId');`} <br/>
                {`element.parentNode.removeChild(element);`} <br/>
                <span>{'// একটি নির্দিষ্ট এলিমেন্ট পেজ থেকে রিমুভ করতে'}</span> <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Event Handling:</span> <br/>
            <span>DOM এর মাধ্যমে ইভেন্ট হ্যান্ডলিং করতে পারা যায়:</span>
            <br/>
            <code>
                {`document.getElementById('elementId').addEventListener('click', function() {`} <br/>
                {`  alert('Element clicked!');`} <br/>
                {`});`} <br/>
                <span>{'// একটি এলিমেন্টে ক্লিক ইভেন্ট হ্যান্ডলার যোগ করতে'}</span> <br/>
            </code>
            <br/>

            <span className="globalSubTitle">Traversing the DOM:</span> <br/>
            <span>DOM এর মাধ্যমে এলিমেন্টের পেরেন্ট, চাইল্ড এবং সিবলিং অ্যাক্সেস করা যায়:</span>
            <br/>
            <code>
                {`let parentElement = document.getElementById('elementId').parentNode;`} <br/>
                <span>{'// একটি এলিমেন্টের পেরেন্ট নোড অ্যাক্সেস করতে'}</span> <br/><br/>
                {`let childElements = document.getElementById('elementId').children;`} <br/>
                <span>{'// একটি এলিমেন্টের চাইল্ড নোডগুলো অ্যাক্সেস করতে'}</span> <br/><br/>
                {`let nextSibling = document.getElementById('elementId').nextElementSibling;`} <br/>
                <span>{'// একটি এলিমেন্টের পরবর্তী সিবলিং অ্যাক্সেস করতে'}</span> <br/>
            </code>
            <br/>
        </div>
    );
}

export default Dom;
