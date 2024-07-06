import Slider from "../Components/Slider";
import {cssCode, htmlCode, jsCode} from "../Code/SliderCode";
import LoginForm from "../Components/LoginForm";
import Tab from "../Components/Tab";
import Accordions from "../Components/Accordion";
import SideNavbar from "../Components/SideNavbar";
import SlideGallery from "../Components/SlideGallery";
import ReactSetup from "../ReactComponents/ReactSetup";
import {loginCss, loginHtml, loginJs} from "../Code/LiginCode";

const practiceLists = [
    [
        { id: 0, link: "/Javascript", value: "Javascript" },
        {
            id: 1,
            link: "/Javascript",
            value: "Slider part 1",
            component:Slider,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL",
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
            link: "/Javascript",
            value: "Slider part 2",
            component:Slider,
            code:{
                htmlCode: htmlCode,
                cssCode:cssCode,
                jsCode:jsCode,
            } ,
            videoContent:{
                title:"HOW TO MAKE A CAROUSEL",
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
            link: "/javascript",
            value: "Form part 1",
            component:LoginForm,
            code:{
                htmlCode: loginHtml,
                cssCode:loginCss,
                jsCode:loginJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A LOGIN FORM. Using html , css , and javascript.",
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
            link: "/javascript",
            value: "Form part 2",
            component:LoginForm,
            code:{
                htmlCode: loginHtml,
                cssCode:loginCss,
                jsCode:loginJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A LOGIN FORM. Using html , css , and javascript.",
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
            link: "/javascript",
            value: "Form part 3",
            component:LoginForm,
            code:{
                htmlCode: loginHtml,
                cssCode:loginCss,
                jsCode:loginJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A LOGIN FORM. Using html , css , and javascript.",
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
            link: "/javascript",
            value: "Form part 4",
            component:LoginForm,
            code:{
                htmlCode: loginHtml,
                cssCode:loginCss,
                jsCode:loginJs,
            } ,
            videoContent:{
                title:"HOW TO MAKE A LOGIN FORM. Using html , css , and javascript.",
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
            id: 6,
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
            id: 7,
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
            id: 8,
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