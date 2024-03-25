import Slider from "../Components/Slider";
import {cssCode, htmlCode, jsCode} from "../Code/TabsCode";
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
            value: "Slider",
            component:Slider,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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