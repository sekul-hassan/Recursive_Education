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
import CPPBasic from "../CPP/CPPBasic";
import CppAdvance from "../CPP/CppAdvance";
import Function from "../CPP/Function";
import Recursion from "../CPP/Recursion";
import Oop from "../CPP/OOP";
import Encapsulation from "../CPP/Encapsulation";
import Inheritance from "../CPP/Inheritance";
import Polymorphism from "../CPP/Polymorphism";
import Abstraction from "../CPP/Abstraction";
import CppDSA from "../CPP/CppDSA";
import Javascript from "../LanguagePages/Javascript";

const practiceLists = [
    // javascript
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
            link: "/set&map",
            value: "Set&Map",
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
    // dbms
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
    // node js
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
    // sequelize
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
    // cpp
    [
        {id:0,link:"/cpp", value: "CPP"},
        {
            id:1,
            link:"/basic",
            value: "CPP",
            component:CPPBasic
        },
        {
            id:2,
            link:"/advance",
            value: "Advance",
            component:CppAdvance
        },
        {
            id:3,
            link:"/function",
            value: "Function",
            component:Function
        },
        {
            id:4,
            link:"/recursion",
            value: "Recursion",
            component:Recursion
        },
        {
            id:5,
            link:"/cppDsa",
            value: "DSA",
            component:CppDSA
        },
        {
            id:6,
            link:"/oop",
            value: "OOP",
            component:Oop
        },
        {
            id:7,
            link:"/encapsulation",
            value: "Encapsulation",
            component:Encapsulation
        },
        {
            id:8,
            link:"/inheritance",
            value: "Inheritance",
            component:Inheritance
        },
        {
            id:9,
            link:"/polymorphism",
            value: "Polymorphism",
            component:Polymorphism
        },
        {
            id:10,
            link:"/abstraction",
            value: "Abstraction",
            component:Abstraction
        },
    ],

]

export default practiceLists;