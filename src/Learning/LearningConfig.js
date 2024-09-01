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

const learningConfig = [
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
        {id:0,link:"/dbms",value:"DBMS"},
        {
            id: 1,
            link: "/basic",
            value: "Basic",
            component:Intro
        },
        {
            id: 2,
            link: "/ddl_queries",
            value: "DDL",
            component:DDL
        },
        {
            id: 3,
            link: "/dml_queries",
            value: "DML",
            component:DML
        },
        {
            id: 4,
            link: "/tcl_queries",
            value: "TCL",
            component:TCL
        },
        {
            id: 5,
            link: "/dcl_queries",
            value: "DCL",
            component:DCL
        },

    ],

    [
        { id: 0, link: "/React", value: "React" },
        {
            id: 1,
            link: "/setup",
            value: "Setup",
            component:ReactSetup,
        },
    ],

]

export default learningConfig;