import Slider from "../Components/Slider";
import {cssCode, htmlCode, jsCode} from "../Code/SliderCode";
import LoginForm from "../Components/LoginForm";
import Tab from "../Components/Tab";
import Accordions from "../Components/Accordion";
import SideNavbar from "../Components/SideNavbar";
import SlideGallery from "../Components/SlideGallery";
import ReactSetup from "../ReactComponents/ReactSetup";

const practiceLists = [
    [
        { id: 0, link: "/Javascript", value: "Javascript" },
        {
            id: 1,
            link: "/Javascript",
            value: "Slider 1",
            component:Slider,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL",
                description: "এই HTML দ্বারা একটি ছবি স্লাইডশো গ্যালারি তৈরি করা হয়েছে, যা CSS দ্বারা স্টাইল করা এবং JavaScript দ্বারা কার্যকর করা হয়েছে। <div class=\"slideShowContainer\"> হল মূল কন্টেনার যেখানে ছবি স্লাইড (<div class=\"mySlides fades\">) রয়েছে সহ সংখ্যা, ছবি, এবং ক্যাপশন। নেভিগেশন ব্যবহার করা হয় বাটন (<button> পূর্ব এবং পরবর্তী) এবং ডট (<span class=\"dot\">) সরাসরি স্লাইড নির্বাচনের জন্য। CSS (slider.css) স্টাইল দেয় কন্টেনার, ছবি, ক্যাপশন, বাটন, ডট, এবং এনিমেশন (@keyframes fades) জন্য সম্পূর্ণ ট্রান্সিশন। JavaScript (slider.js) দ্বারা হ্যান্ডল করা হয় স্লাইড ইন্ডেক্স (slideIndex), স্লাইড পরিচালনা করা, পূর্বে বা পরে স্লাইড নির্বাচন (plusSlides(n) এবং currentSlide(n) ফাংশন), এবং স্লাইড এবং ডটের দৃশ্যমানতা আপডেট করা (showSlides(n) ফাংশন)। এই সেটআপ একটি ফাংশনাল এবং দর্শনীয় ছবি স্লাইডশো তৈরি করে যা ওয়েব পৃষ্ঠার জন্য উপযোগী এবং আকর্ষণীয়।",
                videoLink: "https://www.youtube.com/watch?v=fVvcI1wtq9o",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/Slider",
            }
        },
        {
            id: 2,
            link: "/Javascript",
            value: "Slider 2",
            component:Slider,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL",
                description: " slideIndex এর মান প্রথমে ১ হিসেবে সেট করা হয় এবং showSlides(slideIndex) ফাংশনটি কল করে প্রথমের স্লাইডটি দেখানো হয়।\n" +
                    "\n" +
                    "plusSlides(n) ফাংশনটি slideIndex এর মানের সাথে n যোগ করে এবং showSlides ফাংশনকে কল করে বাটনের ক্লিক অনুযায়ী পরবর্তী বা আগের স্লাইডটি প্রদর্শন করে।\n" +
                    "\n" +
                    "currentSlide(n) ফাংশনটি slideIndex কে n এ সেট করে এবং showSlides ফাংশনকে কল করে ডট নেভিগেশনের সাথে সম্পর্কিত স্লাইডটি প্রদর্শন করে।\n" +
                    "\n" +
                    "showSlides(n) ফাংশনটি স্লাইড এবং নেভিগেশন ডট গুলির প্রদর্শন নিয়ন্ত্রণ করে:\n" +
                    "\n" +
                    "এটি নিশ্চিত করে যে slideIndex যদি স্লাইডের মোট সংখ্যাটি অতিক্রম করে থাকে তবে সেটা ১ হবে।\n" +
                    "সংখ্যা যদি ১ থেকে ছোট হয় তবে সেটা স্লাইডের সর্বোচ্চ সংখ্যা হবে।\n" +
                    "সমস্ত স্লাইডগুলি লুপ দিয়ে লুপ দিয়ে গোপন করে এবং সমস্ত ডট থেকে \"active\" ক্লাস সরানো হয়।\n" +
                    "বর্তমান স্লাইডটি প্রদর্শন করা হয় (slides[slideIndex - 1].style.display = \"block\") এবং সম্পর্কিত ডটকে \"active\" চিহ্নিত করা হয় (dots[slideIndex - 1].className += \" active\").",
                videoLink: "https://www.youtube.com/watch?v=Hx5dd-L1zX0&list=PLLvutCsCxeloa9IqYgZL5uGflXTpv13lH&index=3",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/Slider",
            }
        },
        {
            id: 3,
            link: "/javascript",
            value: "Login Form",
            component:LoginForm,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL",
                description: "Using HTML CSS & JavaScript",
                videoLink: "https://youtu.be/gZC4Za8uA3I",
            }
        },
        {
            id: 4,
            link: "/javascript",
            value: "Tabs",
            component:Tab,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL",
                description: "Using HTML CSS & JavaScript",
                videoLink: "https://youtu.be/gZC4Za8uA3I",
            }
        },
        {
            id: 5,
            link: "/javascript",
            value: "Accordion",
            component:Accordions,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL",
                description: "Using HTML CSS & JavaScript",
                videoLink: "https://youtu.be/gZC4Za8uA3I",
            }
        },
        {
            id: 6,
            link: "/javascript",
            value: "Side Nav",
            component:SideNavbar,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL",
                description: "Using HTML CSS & JavaScript",
                videoLink: "https://youtu.be/gZC4Za8uA3I",
            }
        },
        {
            id: 7,
            link: "/javascript",
            value: "Slide Gallery",
            component:SlideGallery,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL",
                description: "Using HTML CSS & JavaScript",
                videoLink: "https://youtu.be/gZC4Za8uA3I",
            }
        },
    ],
    [
        { id: 0, link: "Javascript", value: "React" },
        {
            id: 1,
            link: "/javascript",
            value: "Setup",
            component:ReactSetup,
        },
    ],
]

export default practiceLists;