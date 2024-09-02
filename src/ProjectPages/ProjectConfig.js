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
                    videoLink:"https://youtu.be/i6G87ceIhFE?si=JMMB1W8HYnxVxUL-",
                    title:"HOW TO CREATE A FOOTER USING REACT AND REACT BOOTSTRAP.",
                    description:"The Footer component is a React functional component that renders a footer section using React Bootstrap and FontAwesome icons.\n" +
                        "\n" +
                        "The Container from React Bootstrap (fluid=\"true\") makes the footer span the full width of the page.\n" +
                        "Inside the container, a div with class iconDiv contains four anchor (<a>) tags, each wrapping a FontAwesomeIcon component. These icons represent LinkedIn, GitHub, Facebook, and YouTube.\n" +
                        "Below the icons, a div with class footerCredit displays a copyright notice. The notice includes a link to \"recursiveeducation.com\".\n" +
                        "Each link currently has an empty href attribute, which should be filled with the respective URLs for the social media profiles. The component is exported for use in other parts of the application.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
                }
            },

            {
                id:7,
                link:"/Portfolio",
                value: "Global-top",
                lecture: {
                    image:globalTop,
                    videoLink:"https://youtu.be/QE6UJg3r5TM?si=SGfuUmjuGPeO5mxT",
                    title:"HOW TO CREATE A GLOBAL BANNER SECTION AND REACT BOOTSTRAP.",
                    description:"globalTopBackground: This class likely sets the background properties for the entire Container to provide a distinct background (e.g., an image, gradient, or solid color).\n" +
                        "\n" +
                        "globalTopBackgroundOverlay: This class probably applies an overlay effect over the background, which could include a semi-transparent color to make the text more readable.\n" +
                        "\n" +
                        "content: This class centers the content vertically and horizontally within the overlay or provides padding/margin to ensure the content is properly spaced.\n" +
                        "\n" +
                        "title: This class styles the text, making it larger or bolder to stand out as a title. The text-light class from Bootstrap adds a light color to the text, enhancing contrast against darker backgrounds..",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/globalTop",
                }
            },

            {
                id:8,
                link:"/Portfolio",
                value: "About",
                lecture: {
                    image:about,
                    videoLink:"https://youtu.be/Vio9uD8AayY?si=t7rzImn7OwVLpFWd",
                    title:"HOW TO CREATE A ABOUT PORTION IN PORTFOLIO USING REACT AND REACT BOOTSTRAP.",
                    description:"Container: Ensures the content is responsive and spans the full width of the screen (fluid=\"true\").\n" +
                        "text-center: Centers the content horizontally.\n" +
                        "imgDiv: Contains an image from aboutConfig.image if aboutConfig is not null.\n" +
                        "title: Displays the name from aboutConfig.name as a heading.\n" +
                        "boldDes: Links to a description from aboutConfig.description.\n" +
                        "The remaining div includes several p elements with description class, displaying various details from aboutConfig such as university, college, school, addresses, religion, marital status, date of birth, contact number, email, LinkedIn, and GitHub, each prefixed by a globalTitle span.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/aboutContent",
                }
            },

            {
                id:9,
                link:"/Portfolio",
                value: "Project",
                lecture: {
                    image:topMost,
                    videoLink:"https://youtu.be/Jr9MOZFDCQ0?si=KoCJ7UH8DIEXnH6q",
                    title:"RESPONSIVE PROJECT CARD DESIGN USING REACT AND REACT BOOTSTRAP.",
                    description:"The Project component is a React functional component that uses React Bootstrap for layout and styling.\n" +
                        "\n" +
                        "Main Functionality: It renders a navigation bar (NavBar), a global header (GlobalTop), a grid of project cards (ProjectCard), and a footer (Footer). The GlobalTop displays a header text, and each ProjectCard displays an image and a description text.\n" +
                        "\n" +
                        "CSS Functionality:\n" +
                        "\n" +
                        "container fluid=\"true\" className=\"px-3\": Ensures the container spans the full width and adds padding.\n" +
                        "row and col classes: Organize project cards in a responsive grid.\n" +
                        "mt-3: Adds a margin-top to separate elements.\n" +
                        "cardBody p-0: Removes padding from the card body.\n" +
                        "projectCardImg: Styles the image within the project card.\n" +
                        "cardFooter: Styles the footer of the card, displaying the text.\n" +
                        "The ProjectCard component, used multiple times in the Project component, receives image and text as props to display project details dynamically.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/project",
                }
            },

            {
                id:10,
                link:"/Portfolio",
                value: "Details",
                lecture: {
                    image:projectDerails,
                    videoLink:"https://youtu.be/yXEKNAJ1c80?si=RWMJ0Jb9I5ScZ1Ee",
                    title:"SHOWING PROJECT DETAILS WITHIN REACT BOOTSTRAP CAROUSEL.",
                    description:"Container: Wraps the entire content and makes it responsive.\n" +
                        "Row and Col: Organize content into two equal-width columns (sm={12} md={6} lg={6}).\n" +
                        "First Column: Contains a header (FEATURE IMAGES) and a Carousel with three images (img1, img2, img3).\n" +
                        "Second Column: Contains a header (REACT PROJECT), a description paragraph, and links to a GitHub repository and live project.\n" +
                        "CSS Functionality:\n" +
                        "\n" +
                        "mt-3: Adds a top margin to the container.\n" +
                        "sliderCol: Styles for the columns, likely controlling padding/margins.\n" +
                        "title: Styles for the headers.\n" +
                        "description: Styles for the description text.\n" +
                        "slideImg: Styles for the images in the carousel.\n" +
                        "This component displays featured images and project details side-by-side.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/projectDetails",
                }
            },

            {
                id:11,
                link:"/Portfolio",
                value: "Skill",
                lecture: {
                    image:skill,
                    videoLink:"https://youtu.be/k4_fL22l0-0?si=1OPCCIVoBor5LbjQ",
                    title:"HOW TO ADD YOUR SKILLS IN YOUR PORTFOLIO.",
                    description:"The Skills component is a React functional component using React Bootstrap to display a list of skills and experiences, each prefixed with a title and styled for clarity.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/skills",
                }
            },

            {
                id:12,
                link:"/Portfolio",
                value: "Resume",
                lecture: {
                    image:resume,
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"HOW TO WRITE A RESUME WITHIN YOUR PORTFOLIO WEBSITE & HTML TO DOWNLOAD PDF.",
                    description:"The Resume component is a React functional component that uses React Bootstrap to create a resume layout with two main sections: contact and education details on the left, and personal information and projects on the right.\n" +
                        "\n" +
                        "Container: A responsive container with full width (fluid=\"true\"), top margin (mt-3), padding (px-4), left-aligned text (text-start), and light-colored text (text-light).\n" +
                        "\n" +
                        "Row: Contains two columns:\n" +
                        "\n" +
                        "Left Column (resumeLeft): Displays a profile image, contact information (portfolio, phone, email, GitHub, LinkedIn, address), education details, and expertise list with various skills.\n" +
                        "Right Column: Displays the person's name and title, a brief description, project details with live and GitHub links, and references.\n" +
                        "Styling:\n" +
                        "\n" +
                        "mt-3: Adds top margin to the container and elements.\n" +
                        "text-start: Left-aligns text.\n" +
                        "text-light: Light text color.\n" +
                        "hrClass: Adds horizontal rules for separation.\n" +
                        "globalTitle and description: Style different text elements to enhance readability and visual hierarchy.\n" +
                        "This component effectively organizes resume content in a clear and visually appealing manner.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/resume",
                }
            },

            {
                id:13,
                link:"/Portfolio",
                value: "About confi",
                lecture: {
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"HOW TO CONFIGURATION JSON FOR STATIC DATABASE.",
                    description:"In React, JSON (JavaScript Object Notation) is used to structure and store data in a readable format. In the AboutContent component, aboutConfig is a JSON object imported from AboutConfig.js, containing details like name, description, education, and contact information. This JSON object organizes data into key-value pairs, making it easy to access and render dynamically within JSX. Each key (name, description, etc.) corresponds to a specific piece of information displayed in the component. This approach ensures clarity, maintainability, and flexibility in managing and displaying structured data across the application, facilitating seamless updates and modifications to the displayed content.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/aboutConfig",
                }
            },

            {
                id:14,
                link:"/Portfolio",
                value: "Skills config",
                lecture: {
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"HOW TO CONFIGURATION JSON FOR STATIC DATABASE.",
                    description: "In this React component, skillConfig is a JSON array imported from SkillConfig.js. Each object within skillConfig represents a skill with properties like id, name, and description.\n" +
                        "\n" +
                        "Importing and Mapping: The Skills component maps over skillConfig, rendering each skill's name and description dynamically.\n" +
                        "\n" +
                        "Dynamic Rendering: Using map(), it iterates through skillConfig, generating paragraphs (<p>) where name is styled as globalTitle and description as description.\n" +
                        "\n" +
                        "Structured Data: JSON provides a structured format to store and organize data, making it easy to manage and update skills information separately from the component logic. This approach enhances code maintainability and readability, facilitating straightforward integration of new skills or modifications to existing ones in the application.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/skillConfig",
                }
            },

            {
                id:15,
                link:"/Portfolio",
                value: "Project conf",
                lecture: {
                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
                    title:"HOW TO CONFIGURATION JSON FOR STATIC DATABASE.",
                    description: "Project Listing (Project Component):\n" +
                        "\n" +
                        "Project Component: Renders a list of projects using data from projectConfig. Each project is displayed in a Col within a Row, utilizing ProjectCard to show a preview of the project with its description and demo image.\n" +
                        "ProjectCard Component: Displays each project as a clickable card (Card) with an image (demoImage) and a brief description (description). Clicking on a card links to ProjectDetails based on projectId.\n" +
                        "Project Details (ProjectDetails Component):\n" +
                        "\n" +
                        "Routing and Parameters: Uses useParams from react-router-dom to fetch the projectId from the URL, then retrieves corresponding project details from projectConfig.\n" +
                        "Conditional Rendering: If the project exists (project !== undefined), renders Details component showing more detailed information about the project, including a carousel of images and additional project details. If the project doesn't exist, displays a message indicating that the project was not found.\n" +
                        "These components leverage React's routing (react-router-dom) and Bootstrap for responsive layout and styling, providing a seamless user experience to explore and view project details.",
                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/projectConfig",
                }
            },
        ]
    },

    //
    // {
    //     projectName: "shuttle",
    //     demo: {
    //            projectImg:shuttleProject,
    //            projectLink:"https://shuttle.recursiveeducation.com/",
    //            projectRoute:"/shuttle"
    //        },
    //     classes:[
    //         {
    //                id:0,
    //                link:"/shuttle-project",
    //                value: "Nav",
    //                lecture: {
    //                    image:shuttleHomeTop,
    //                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
    //                    title:"Coming soon.",
    //                    description:"Coming soon.",
    //                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
    //                }
    //            },
    //         {
    //                id:1,
    //                link:"/shuttle-project",
    //                value: "Nav",
    //                lecture: {
    //                    image:shuttleHomeTop,
    //                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
    //                    title:"Coming soon.",
    //                    description:"Coming soon.",
    //                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
    //                }
    //            },
    //         {
    //                id:2,
    //                link:"/shuttle-project",
    //                value: "Nav",
    //                lecture: {
    //                    image:shuttleHomeTop,
    //                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
    //                    title:"Coming soon.",
    //                    description:"Coming soon.",
    //                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
    //                }
    //            },
    //         {
    //                id:3,
    //                link:"/shuttle-project",
    //                value: "Nav",
    //                lecture: {
    //                    image:shuttleHomeTop,
    //                    videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
    //                    title:"Coming soon.",
    //                    description:"Coming soon.",
    //                    githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
    //                }
    //            },
    //     ]
    // },
    //
    // {
    //     projectName: "ncpc-project",
    //     demo: {
    //         projectImg:ncpcProject,
    //         projectLink:"https://shuttle.recursiveeducation.com/",
    //         projectRoute:"/ncpc-project"
    //     },
    //     classes:[
    //         {
    //             id:0,
    //             link:"/shuttle-project",
    //             value: "Nav",
    //             lecture: {
    //                 image:shuttleHomeTop,
    //                 videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
    //                 title:"Coming soon.",
    //                 description:"Coming soon.",
    //                 githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
    //             }
    //         },
    //         {
    //             id:1,
    //             link:"/shuttle-project",
    //             value: "Nav",
    //             lecture: {
    //                 image:shuttleHomeTop,
    //                 videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
    //                 title:"Coming soon.",
    //                 description:"Coming soon.",
    //                 githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
    //             }
    //         },
    //         {
    //             id:2,
    //             link:"/shuttle-project",
    //             value: "Nav",
    //             lecture: {
    //                 image:shuttleHomeTop,
    //                 videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
    //                 title:"Coming soon.",
    //                 description:"Coming soon.",
    //                 githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
    //             }
    //         },
    //         {
    //             id:3,
    //             link:"/shuttle-project",
    //             value: "Nav",
    //             lecture: {
    //                 image:shuttleHomeTop,
    //                 videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
    //                 title:"Coming soon.",
    //                 description:"Coming soon.",
    //                 githubLink:"https://github.com/sekul-hassan/portfolio_templete/tree/footer",
    //             }
    //         },
    //     ]
    // },
];

export default projects;
