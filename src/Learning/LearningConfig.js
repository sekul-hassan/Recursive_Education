import Javascript from "../LanguagePages/Javascript";
import Array from "../LanguagePages/Array";
import Intro from "../DBMS/Intro";
import DDL from "../DBMS/DDL";

const learningConfig = [
    {
        id:0,
        level:"Javascript",
        lecture:[
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
        ]
    },
    {
        id:1,
        level: "DBMS",
        lecture:[
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
        ]
    }
]

export default learningConfig;