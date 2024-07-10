import shuttleHomeTop from "../Assets/Images/ProjectImg/shuttleHomeTop.png";
import shuttleProject from "../Assets/Images/ProjectImg/need2.png";
import ncpcProject from "../Assets/Images/ProjectImg/ncpc_site.png";
import portfolio from "../Assets/Images/Portfolio/portfolio.png";
import navbar from "../Assets/Images/Portfolio/navbar.png";
import homeTop from "../Assets/Images/Portfolio/homeTop.png";
import topMost from "../Assets/Images/Portfolio/TopMost.png";
import footer from "../Assets/Images/Portfolio/Footer.png";
import globalTop from "../Assets/Images/Portfolio/globalTOp.png";
import about from "../Assets/Images/Portfolio/about.png";
import skill from "../Assets/Images/Portfolio/skills.png";
import resume from "../Assets/Images/Portfolio/resume.png";
import projectDerails from "../Assets/Images/Portfolio/projectDetails.png";

const projects = [

    {
        projectName: "Portfolio",
        demo: {
            projectImg:portfolio,
            projectLink:"https://sekul.recursiveeducation.com/",
            projectRoute:"/Portfolio",
        },
        classes:[
            {
                id: 0,
                link: "/Portfolio",
                value: "Introduction",
                lecture: {
                    videoLink: "https://youtu.be/gXBOVWxGAX0?si=m3vxEBDvNB2-rVhz",
                    githubLink: "https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id: 1,
                link: "/Portfolio",
                value: "Setup",
                lecture: {
                    videoLink: "https://youtu.be/oLb6YofAZFc?si=Uprko8Rr0kWAhOca",
                    title: "CREATE A REACT PROJECT FILE STRUCTURE AND INSTALL FONT AWESOME.",
                    description: "To create a new React project, follow these steps:\n\n**Install Node.js**: Ensure you have Node.js installed from [nodejs.org](https://nodejs.org/).\n\n**Create React App**:\n```bash\nnpx create-react-app my-app\ncd my-app\n```\n\n**Project Structure**:\n- **public/**: Static files like `index.html`, images.\n- **src/**: Source code.\n  - **App.js**: Main component.\n  - **index.js**: Entry point.\n  - **components/**: Custom components.\n  - **styles/**: CSS files.\n\n**Install Font Awesome**:\n```bash\nnpm install --save @fortawesome/fontawesome-free\n```\n\n**Import Font Awesome**: Add the following to `src/index.js` or `src/App.js`:\n```js\nimport '@fortawesome/fontawesome-free/css/all.min.css';\n```\n\nNow, you can use Font Awesome icons in your components with `<i className='fas fa-icon-name'></i>`.",
                    githubLink: "https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:2,
                link:"/Portfolio",
                value: "Home-top",
                lecture: {
                    image:homeTop,
                    videoLink:"https://youtu.be/OBpCnLsl10g?si=aR2k_qS__R5d0v_J",
                    title:"REACT HOME TOP BANNER SECTION.",
                    description:"Contact Now\" button using Bootstrap for styling. Key points include:\n" +
                        "\n" +
                        "Container Setup: Uses a fluid Container from React Bootstrap with a class homeTopBackground for the background image.\n" +
                        "Overlay: Adds a semi-transparent overlay using homeTopBackgroundOverlay to enhance text readability.\n" +
                        "Button Styling: The Button is styled with the class contactBtn, featuring a gradient background and rounded corners. On hover, the button's background and text color change smoothly.\n" +
                        "Content Positioning: Centers the button inside the overlay with the content class using CSS absolute positioning and transformation.\n" +
                        "CSS Styling:\n" +
                        ".homeTopBackground and .globalTopBackground set different heights and a fixed background image.\n" +
                        ".homeTopBackgroundOverlay and .globalTopBackgroundOverlay apply a semi-transparent overlay with the same background properties.\n" +
                        "The contactBtn class uses CSS variables for gradients and enforces styling consistency.",
                    githubLink: "https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:3,
                link:"/Portfolio",
                value: "Top-most",
                lecture: {
                    image:topMost,
                    videoLink:"https://youtu.be/QYgf6l65cus?si=hM3gLaKbJ6z3lDqN",
                    title:"CREATE A RESPONSIVE CARD USING REACT BOOTSTRAP.",
                    description:"The TopMost component uses React Bootstrap to showcase three top projects. Each project is encapsulated within a responsive layout defined by Container, Row, and Col components. Each Col contains a ProjectCard, a reusable component displaying project details. The ProjectCard component employs Bootstrap's Card, CardBody, and CardFooter to structure content. CSS classes like .projectCardImg ensure images fit within their containers with rounded corners. .cardFooter applies a gradient background to the footer, enhancing visual appeal. .card styles add borders and cursor effects for user interaction. Overall, this setup leverages React's component-based architecture and Bootstrap's responsive grid system to create a polished, interactive display of top projects with consistent styling and functionality.",
                    githubLink: "https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:4,
                link:"/Portfolio",
                value: "Nav part 1",
                lecture: {
                    image:navbar,
                    videoLink:"https://youtu.be/jqPsoUZWB5o?si=9yObP1FzXgquOEYY",
                    title:"CREATE A RESPONSIVE NAVBAR USING REACT.",
                    description:"The useEffect hook in this React component is used to manage the CSS class changes based on the user's scroll position. Initially, the component sets up state variables (navBackground, navbar, navLink) to hold CSS class names using the useState hook.\n" +
                        "\n" +
                        "Inside useEffect, a handleScroll function is defined, which updates these CSS classes when the user scrolls. If the scroll position (window.scrollY) is greater than 1, the state is updated to apply one set of CSS classes (navBackgroundScroll, navbarScroll, navLinkScroll). If not, another set of classes (navBackground, navbar, navLink) is applied.\n" +
                        "\n" +
                        "The useEffect hook adds the handleScroll function as an event listener to the scroll event when the component mounts. The cleanup function in useEffect removes the event listener when the component unmounts to avoid memory leaks. This ensures the CSS classes change dynamically as the user scrolls, updating the appearance of the navigation bar.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:5,
                link:"/Portfolio",
                value: "Nav part 2",
                lecture: {
                    image:navbar,
                    videoLink:"https://youtu.be/EuIwG3BjPy0?si=7YRqJprGUBujGd5t",
                    title:"CREATE A RESPONSIVE NAVBAR USING REACT.",
                    description:"The useEffect hook in this React component is used to manage the CSS class changes based on the user's scroll position. Initially, the component sets up state variables (navBackground, navbar, navLink) to hold CSS class names using the useState hook.\n" +
                        "\n" +
                        "Inside useEffect, a handleScroll function is defined, which updates these CSS classes when the user scrolls. If the scroll position (window.scrollY) is greater than 1, the state is updated to apply one set of CSS classes (navBackgroundScroll, navbarScroll, navLinkScroll). If not, another set of classes (navBackground, navbar, navLink) is applied.\n" +
                        "\n" +
                        "The useEffect hook adds the handleScroll function as an event listener to the scroll event when the component mounts. The cleanup function in useEffect removes the event listener when the component unmounts to avoid memory leaks. This ensures the CSS classes change dynamically as the user scrolls, updating the appearance of the navigation bar.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },

            {
                id:6,
                link:"/Portfolio",
                value: "Footer",
                lecture: {
                    image:footer,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:7,
                link:"/Portfolio",
                value: "Global-top",
                lecture: {
                    image:globalTop,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:8,
                link:"/Portfolio",
                value: "About",
                lecture: {
                    image:about,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:9,
                link:"/Portfolio",
                value: "Project",
                lecture: {
                    image:topMost,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:10,
                link:"/Portfolio",
                value: "Details",
                lecture: {
                    image:projectDerails,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },

            {
                id:11,
                link:"/Portfolio",
                value: "Skill",
                lecture: {
                    image:skill,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:12,
                link:"/Portfolio",
                value: "Resume",
                lecture: {
                    image:resume,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
        ]
    },


    {
        projectName: "shuttle",
        demo: {
               projectImg:shuttleProject,
               projectLink:"https://shuttle.recursiveeducation.com/",
               projectRoute:"/shuttle"
           },
        classes:[
            {
                   id:0,
                   link:"/shuttle-project",
                   value: "Nav",
                   lecture: {
                       image:shuttleHomeTop,
                       videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                       title:"Coming soon.",
                       description:"Coming soon.",
                       githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                   }
               },
            {
                   id:1,
                   link:"/shuttle-project",
                   value: "Nav",
                   lecture: {
                       image:shuttleHomeTop,
                       videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                       title:"Coming soon.",
                       description:"Coming soon.",
                       githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                   }
               },
            {
                   id:2,
                   link:"/shuttle-project",
                   value: "Nav",
                   lecture: {
                       image:shuttleHomeTop,
                       videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                       title:"Coming soon.",
                       description:"Coming soon.",
                       githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                   }
               },
            {
                   id:3,
                   link:"/shuttle-project",
                   value: "Nav",
                   lecture: {
                       image:shuttleHomeTop,
                       videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                       title:"Coming soon.",
                       description:"Coming soon.",
                       githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                   }
               },
        ]
    },

    {
        projectName: "ncpc-project",
        demo: {
            projectImg:ncpcProject,
            projectLink:"https://shuttle.recursiveeducation.com/",
            projectRoute:"/ncpc-project"
        },
        classes:[
            {
                id:0,
                link:"/shuttle-project",
                value: "Nav",
                lecture: {
                    image:shuttleHomeTop,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:1,
                link:"/shuttle-project",
                value: "Nav",
                lecture: {
                    image:shuttleHomeTop,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:2,
                link:"/shuttle-project",
                value: "Nav",
                lecture: {
                    image:shuttleHomeTop,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
            {
                id:3,
                link:"/shuttle-project",
                value: "Nav",
                lecture: {
                    image:shuttleHomeTop,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"Coming soon.",
                    description:"Coming soon.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },
        ]
    },
];

export default projects;
