import Slider from "../Components/Slider";
import {cssCode, htmlCode, jsCode} from "../Code/SliderCode";
import LoginForm from "../Components/LoginForm";
import Tab from "../Components/Tab";
import Accordions from "../Components/Accordion";
import SlideGallery from "../Components/SlideGallery";
import ReactSetup from "../ReactComponents/ReactSetup";
import {loginCss, loginHtml, loginJs} from "../Code/LiginCode";
import {tabCss, tabHtml, tabJs} from "../Code/TabsCode";
import {accordionCss, accordionHtml, accordionJs} from "../Code/AccordionCode";
import {galleryCss, galleryHtml, galleryJs} from "../Code/SliderGallery";
import Javascript from "../LanguagePages/Javascript";
import Array from "../LanguagePages/Array";
import Object from "../LanguagePages/Object";
import SetMap from "../LanguagePages/SetMap";
import Condition from "../LanguagePages/Condition";
import Loops from "../LanguagePages/Loops";
import Events from "../LanguagePages/Events";
import Dom from "../LanguagePages/Dom";
import String from "../LanguagePages/String";
import Number from "../LanguagePages/Number";
import Json from "../LanguagePages/Json";
import ScopHoisting from "../LanguagePages/Scop&Hoisting";
import Bitwise from "../LanguagePages/Bitwise";
import AsyncAwait from "../LanguagePages/Async";
import Intro from "../DBMS/Intro";
import DDL from "../DBMS/DDL";
import DML from "../DBMS/DML";
import DCL from "../DBMS/DCL";
import TCL from "../DBMS/TCL";
import BasicNode from "../NodeJS/BasicNode";
import Modules from "../NodeJS/Modules";
import Email from "../NodeJS/Email";
import SequelizeBasic from "../Sequelize/SequelizeBasic";
import Associations from "../Sequelize/Associations";
import Sync from "../Sequelize/Sync";
import EagerLoading from "../Sequelize/EagerLoading";
import AssociationScopes from "../Sequelize/AssociationScopes";
import PolymorphicAssociations from "../Sequelize/PolymorphicAssociations";
import Keys from "../DBMS/Keys";

const practiceLists = [
    [
        { id: 0, link: "/Javascript", value: "Javascript" },
        {
            id: 1,
            link: "/basic",
            value: "Basic",
            component:Javascript,
        },
        {
            id: 2,
            link: "/array",
            value: "Array",
            component:Array,
        },
        {
            id: 3,
            link: "/set/map",
            value: "Set/Map",
            component:SetMap,
        },
        {
            id: 4,
            link: "/object",
            value: "Object",
            component:Object,
        },
        {
            id: 5,
            link: "/number",
            value: "Number",
            component:Number,
        },
        {
            id: 6,
            link: "/string",
            value: "String",
            component:String,
        },


        {
            id: 7,
            link: "/condition",
            value: "Condition",
            component:Condition,
        },
        {
            id: 8,
            link: "/loop",
            value: "Loop",
            component:Loops,
        },
        {
            id: 9,
            link: "/bitwise",
            value: "Bitwise",
            component:Bitwise,
        },
        {
            id: 10,
            link: "/events",
            value: "Events",
            component:Events,
        },
        {
            id: 11,
            link: "/dom",
            value: "DOM",
            component:Dom,
        },
        {
            id: 12,
            link: "/scope&hoisting",
            value: "Scope&Hoisting",
            component:ScopHoisting,
        },
        {
            id: 13,
            link: "/async",
            value: "Async",
            component:AsyncAwait,
        },
        {
            id: 14,
            link: "/json",
            value: "Json",
            component:Json,
        },
    ],
    [
        { id: 0, link: "/practiceJs", value: "Practice" },
        {
            id: 1,
            link: "/slider1",
            value: "Slider part 1",
            component:Slider,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL USING HTML CSS AND JAVASCRIPT",
                description: "HTML:\n" +
                    "\n" +
                    "slideShowContainer: Contains image slides with captions and navigation buttons (prev and next).\n" +
                    "mySlides: Each div represents a slide with an image (img), a numerical indicator (numberText), and a caption (text).\n" +
                    "dotDiv: Holds navigation dots (dot) for slide selection.\n" +
                    "CSS:\n" +
                    "\n" +
                    "slideShowContainer: Positioned relative for absolute positioning inside. Images have a maximum height of 350px with a width of 100%.\n" +
                    "numberText: Positioned on the left with black text, using the Popin font at 22px and serif.\n" +
                    "mySlides: Initially hidden (display: none;) to manage slide visibility.\n" +
                    "text: Positioned centrally for captions, using Raleway font at 20px, bold.\n" +
                    "dot: Circular navigation dots with hover effect.\n" +
                    "prev and next: Positioned absolute for slide navigation buttons (❮ and ❯), with hover effects.\n" +
                    "dotDiv: Centers navigation dots using flexbox (display: flex; justify-content: center;).\n" +
                    "fades animation: Fades animation applied to slides (fades), transitioning opacity from 0.3 to 1 over 1.5 seconds.",
                videoLink: "https://youtu.be/fVvcI1wtq9o?si=xM4hdvvUxQjeduhY",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/Slider",
            }
        },
        {
            id: 2,
            link: "/slider2",
            value: "Slider part 2",
            component:Slider,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL USING HTML CSS AND JAVASCRIPT",
                description: "slideIndex: Tracks the current slide, initialized to 1.\n" +
                    "showSlides(n): Displays the slide corresponding to n. It hides all slides (mySlides) and resets navigation dots (dot). It ensures slideIndex wraps around the slides' length. It displays the current slide and marks its corresponding dot as active.\n" +
                    "plusSlides(n): Adjusts slideIndex by n and updates the displayed slide using showSlides.\n" +
                    "currentSlide(n): Sets slideIndex to n and displays the corresponding slide using showSlides.\n" +
                    "CSS classes like .mySlides for slides and .dot for navigation dots are crucial. The slideshow's animation (fades) smoothly transitions slides. These functions provide dynamic slide navigation and presentation, enhancing user interaction with the slideshow.",
                videoLink: "https://youtu.be/Hx5dd-L1zX0?si=SlRuvaEnktjtLpmc",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/Slider",
            }
        },
        {
            id: 3,
            link: "/form1",
            value: "Form part 1",
            component:LoginForm,
            code:{
                htmlCode: loginHtml,
                cssCode:loginCss,
                jsCode:loginJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A LOGIN FORM. USING HTML CSS AND JAVASCRIPT.",
                description: "The .title class styles the title \"Click This Button\", making it uppercase, setting the font size to 17px, and using the font family \"popin, sans-serif\". It ensures the title stands out with a clear and consistent appearance.\n" +
                    "\n" +
                    "For the .login class, it styles the \"Login\" button within the .above section. It features a green background (#059862), removes the border for a sleek look, adds padding to provide spacing around the text, and rounds the corners (border-radius: 10px). The cursor changes to a pointer to indicate it's clickable, and on hover, the button transitions smoothly to a white background with black text and a green border, enhancing user interaction.\n" +
                    "\n" +
                    "The .above class centers the content horizontally within its container using text-align: center;, ensuring that the button and title are neatly aligned.\n" +
                    "\n" +
                    "Meanwhile, the .loginDiv class styles the login popup box, positioning it relative to its parent container. It centers the popup horizontally with margin: 0 auto;, applies a border with color #059862 to distinguish it, and initially hides it from view using display: none;.\n" +
                    "\n" +
                    "Lastly, the .imgDiv img class styles the avatar image displayed within the login popup. It sets specific dimensions (150px width and height), rounds the corners (border-radius: 50%) to create a circular appearance, ensuring the avatar is visually appealing and fits well within the popup design",
                videoLink: "https://youtu.be/kR2_30AnJE4?si=Y_m-fkYkwkiXPlE-",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/LoginForm"
            }
        },
        {
            id: 4,
            link: "/form2",
            value: "Form part 2",
            component:LoginForm,
            code:{
                htmlCode: loginHtml,
                cssCode:loginCss,
                jsCode:loginJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A LOGIN FORM. USING HTML CSS AND JAVASCRIPT.",
                description: "The .title class styles the title \"Click This Button\", making it uppercase, setting the font size to 17px, and using the font family \"popin, sans-serif\". It ensures the title stands out with a clear and consistent appearance.\n" +
                    "\n" +
                    "For the .login class, it styles the \"Login\" button within the .above section. It features a green background (#059862), removes the border for a sleek look, adds padding to provide spacing around the text, and rounds the corners (border-radius: 10px). The cursor changes to a pointer to indicate it's clickable, and on hover, the button transitions smoothly to a white background with black text and a green border, enhancing user interaction.\n" +
                    "\n" +
                    "The .above class centers the content horizontally within its container using text-align: center;, ensuring that the button and title are neatly aligned.\n" +
                    "\n" +
                    "Meanwhile, the .loginDiv class styles the login popup box, positioning it relative to its parent container. It centers the popup horizontally with margin: 0 auto;, applies a border with color #059862 to distinguish it, and initially hides it from view using display: none;.\n" +
                    "\n" +
                    "Lastly, the .imgDiv img class styles the avatar image displayed within the login popup. It sets specific dimensions (150px width and height), rounds the corners (border-radius: 50%) to create a circular appearance, ensuring the avatar is visually appealing and fits well within the popup design",
                videoLink: "https://youtu.be/XHm5M763VBs?si=FxbJ_K61KpqrHaCJ",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/LoginForm"
            }
        },
        {
            id: 5,
            link: "/form3",
            value: "Form part 3",
            component:LoginForm,
            code:{
                htmlCode: loginHtml,
                cssCode:loginCss,
                jsCode:loginJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A LOGIN FORM. USING HTML CSS AND JAVASCRIPT.",
                description: "openBox() Function:\n" +
                    "\n" +
                    "When the openBox() function is called (likely triggered by clicking the \"Login\" button with onclick=\"openBox()\"), it first retrieves references to the loginDiv and above elements using document.getElementById().\n" +
                    "It sets div.style.display = \"block\"; This line changes the CSS style of loginDiv to display: block;, making the login popup visible by overriding its initial style of display: none;.\n" +
                    "Simultaneously, it sets above.style.display = \"none\"; This line changes the CSS style of above to display: none;, hiding the \"Click This Button\" title and the \"Login\" button to make space for the login form.\n" +
                    "closeBox() Function:\n" +
                    "\n" +
                    "Conversely, when the closeBox() function is called (often triggered by clicking the close (×) button within the login popup with onclick=\"closeBox()\" or the \"Cancel\" button), it also retrieves references to the loginDiv and above elements.\n" +
                    "It then sets div.style.display = \"none\"; This line changes the CSS style of loginDiv back to display: none;, effectively hiding the login popup from view.\n" +
                    "Next, it sets above.style.display = \"block\"; This line changes the CSS style of above back to display: block;, restoring visibility to the \"Click This Button\" title and the \"Login\" button, allowing users to interact with them again.",
                videoLink: "https://youtu.be/7QdBr2palK0?si=gSYKbJeyuZejeGgj",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/LoginForm"
            }
        },
        {
            id: 6,
            link: "/form4",
            value: "Form part 4",
            component:LoginForm,
            code:{
                htmlCode: loginHtml,
                cssCode:loginCss,
                jsCode:loginJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A LOGIN FORM.USING HTML CSS AND JAVASCRIPT.",
                description: "openBox() Function:\n" +
                    "\n" +
                    "When the openBox() function is called (likely triggered by clicking the \"Login\" button with onclick=\"openBox()\"), it first retrieves references to the loginDiv and above elements using document.getElementById().\n" +
                    "It sets div.style.display = \"block\"; This line changes the CSS style of loginDiv to display: block;, making the login popup visible by overriding its initial style of display: none;.\n" +
                    "Simultaneously, it sets above.style.display = \"none\"; This line changes the CSS style of above to display: none;, hiding the \"Click This Button\" title and the \"Login\" button to make space for the login form.\n" +
                    "closeBox() Function:\n" +
                    "\n" +
                    "Conversely, when the closeBox() function is called (often triggered by clicking the close (×) button within the login popup with onclick=\"closeBox()\" or the \"Cancel\" button), it also retrieves references to the loginDiv and above elements.\n" +
                    "It then sets div.style.display = \"none\"; This line changes the CSS style of loginDiv back to display: none;, effectively hiding the login popup from view.\n" +
                    "Next, it sets above.style.display = \"block\"; This line changes the CSS style of above back to display: block;, restoring visibility to the \"Click This Button\" title and the \"Login\" button, allowing users to interact with them again.",
                videoLink: "https://youtu.be/zk6zwIHjuMs?si=JhwVkQvQh47aD-26",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/LoginForm"
            }
        },
        {
            id: 7,
            link: "/tabs1",
            value: "Tabs part 1",
            component:Tab,
            code:{
                htmlCode: tabHtml,
                cssCode:tabCss,
                jsCode:tabJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A TAB USING HTML CSS AND JAVASCRIPT.",
                description: ".container: Sets the width to 80% of the parent container and centers it using auto margins.\n" +
                    ".btnDiv: Adds a border and background color, providing a section for the buttons.\n" +
                    ".btn: Removes the default border and background, adds padding, and changes the cursor to a pointer. The .btn:hover state changes the background color and adds a transition effect for smoothness.\n" +
                    ".active: Changes the background color for the active button.\n" +
                    ".mam: Styles each tab content div, adding a border and padding, and ensures the content is hidden by default with display: none.",
                videoLink: "https://youtu.be/wY23c8o8cH4?si=aAxD_ARYb4OdP-dS",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/Tabs",
            }
        },
        {
            id: 8,
            link: "/tabs2",
            value: "Tabs part 2",
            component:Tab,
            code:{
                htmlCode: tabHtml,
                cssCode:tabCss,
                jsCode:tabJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A TAB USING HTML CSS AND JAVASCRIPT.",
                description: "This JavaScript function showMam manages the tab switching functionality:\n" +
                    "\n" +
                    "Retrieve Elements: It gets all elements with the class mam and btn using document.getElementsByClassName.\n" +
                    "Hide All Sections: Iterates over all mam elements, hiding them by setting style.display to \"none\". Simultaneously, it removes the \"active\" class from all btn elements.\n" +
                    "Show Selected Section: Displays the specific section identified by the mam parameter by setting its style.display to \"block\".\n" +
                    "Activate Button: Adds the \"active\" class to the clicked button using event.currentTarget.className += \" active\".",
                videoLink: "https://youtu.be/nKiyp7dNzPQ?si=RpEUy8o5FTGuHDTB",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/Tabs",
            }
        },
        {
            id: 9,
            link: "/accordion1",
            value: "Accordion 1",
            component:Accordions,
            code:{
                htmlCode: accordionHtml,
                cssCode:accordionCss,
                jsCode:accordionJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A ACCORDION USING HTML CSS AND JAVASCRIPT.",
                description: ".accordion: Defines the main section headers of the accordion. It uses display: flex to align child elements horizontally, justify-content: space-between to space them out evenly, and cursor: pointer to indicate interactivity. The background color is slightly transparent.\n" +
                    "\n" +
                    ".sign: Styles the plus sign in the accordion headers. It sets the font size, font family, and font weight to make it visually distinct.\n" +
                    "\n" +
                    ".accordionBody: Manages the content sections of the accordion. Initially hidden with display: none and max-height: 0, it transitions smoothly when opened due to the transition: max-height 0.2s ease-in. The background color is slightly lighter, and overflow: hidden ensures content doesn't spill out during the transition.",
                videoLink: "https://youtu.be/Zx5anxlWuSo?si=BHScivG7FjfH7I0w",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/Accordion"
            }
        },
        {
            id: 10,
            link: "/accordion2",
            value: "Accordion 2",
            component:Accordions,
            code:{
                htmlCode: accordionHtml,
                cssCode:accordionCss,
                jsCode:accordionJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A accordion USING HTML CSS AND JAVASCRIPT.",
                description: "Retrieve Elements: It gets all elements with the class accordionBody and sign using document.getElementsByClassName.\n" +
                    "Check Sign: It checks if the sign element at the specified index (num) has a \"+\" sign.\n" +
                    "If it does, the function:\n" +
                    "Sets the accordionBody at index num to display: block.\n" +
                    "Changes the sign to \"-\".\n" +
                    "Sets maxHeight to the element's scrollHeight, expanding the accordion.\n" +
                    "If the sign is \"-\", it:\n" +
                    "Sets accordionBody to display: none.\n" +
                    "Changes the sign to \"+\".\n" +
                    "Sets maxHeight to \"0px\", collapsing the accordion.",
                videoLink: "https://youtu.be/1n2dx5TzFIE?si=MPCRTjRGRGb-b0il",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/Accordion"
            }
        },
        {
            id: 11,
            link: "/sliderGallery",
            value: "Slide Gallery",
            component:SlideGallery,
            code:{
                htmlCode: galleryHtml,
                cssCode:galleryCss,
                jsCode:galleryJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A SLIDE GALLERY.",
                description: "First, the slideIndex variable tracks the current slide position.\n" +
                    "\n" +
                    "The showSlide(num) function displays the specified slide. It hides all slides and preview images, then shows the specified slide and changes the opacity of the corresponding preview image.\n" +
                    "\n" +
                    "The showNext(num) function increments or decrements the slideIndex to show the next or previous slide.\n" +
                    "\n" +
                    "Initially, showSlide(1) is called to display the first slide.\n" +
                    "\n" +
                    "This way, users can change slides by clicking on the preview images or the navigation buttons",
                videoLink: "https://youtu.be/WW9oXrDQbcU?si=4zMD2_OnoE1lYXRh",
                gitHubLink: "https://github.com/sekul-hassan/practiceJs/tree/main/slideGallery-shohidullah"
            }
        },
    ],
    [
        {id:0,link:"/dbms",value:"DBMS"},
        {
            id: 1,
            link: "/basic",
            value: "Basic",
            component:Intro
        },
        {
            id: 2,
            link: "/keys",
            value: "Keys",
            component:Keys
        },
        {
            id: 3,
            link: "/ddl_queries",
            value: "DDL",
            component:DDL
        },
        {
            id: 4,
            link: "/dml_queries",
            value: "DML",
            component:DML
        },
        {
            id: 5,
            link: "/tcl_queries",
            value: "TCL",
            component:TCL
        },
        {
            id: 6,
            link: "/dcl_queries",
            value: "DCL",
            component:DCL
        },

    ],
    [
        {id:0,link: "/nodeJS",value:"NodeJS"},
        {
            id: 1,
            link:"/basic",
            value: "Basic",
            component:BasicNode
        },
        {
            id: 2,
            link:"/modules",
            value: "Modules",
            component:Modules
        },
        {
            id: 3,
            link:"/emailJS",
            value: "EmailJS",
            component:Email
        }
    ],
    [
        {id:0,link:"/sequelize",value:"Sequelize"},
        {
            id: 1,
            link:"/basic",
            value: "Basic",
            component:SequelizeBasic
        },
        {
            id: 2,
            link:"/sync",
            value: "Sync",
            component:Sync
        },
        {
            id: 3,
            link:"/association",
            value: "Association",
            component:Associations
        },
        {
            id: 4,
            link:"/eager",
            value: "Eager",
            component:EagerLoading
        },
        {
            id: 5,
            link:"/associationScopes",
            value: "AssociationScopes",
            component:AssociationScopes
        },
        {
            id: 6,
            link:"/polymorphicAssociations",
            value: "PolymorphicAssociations",
            component:PolymorphicAssociations
        },

    ],
    [
        { id: 0, link: "React", value: "React" },
        {
            id: 1,
            link: "/setup",
            value: "Setup",
            component:ReactSetup,
        },
    ],

]

export default practiceLists;