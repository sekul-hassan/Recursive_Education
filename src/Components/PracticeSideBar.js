import React, {Fragment, useState} from 'react';
import '../Assets/CSS/SideBar.css';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";

function PracticeSideBar(props) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
       <Fragment>
           <Navbar expand={true} className="practiceList">
               <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
               <Navbar.Collapse id="basic-navbar-nav" className={`${showMenu ? 'show' : ''}`}>
                   <Nav className="flex-column sidebar">
                       <h4 className="practiceTitle">Javascript</h4>
                       <Nav.Link href="#link"><Link to="/slider">Slider</Link></Nav.Link>
                       <Nav.Link href="#anotherlink">Another Link</Nav.Link>
                       <Nav.Link href="#morelinks">More Links</Nav.Link>
                       <Nav.Link href="#evenmorelinks">Even More Links</Nav.Link>
                       <Nav.Link href="#lastlink">Last Link</Nav.Link>
                       <Nav.Link href="#home">Home</Nav.Link>
                       <Nav.Link href="#link">Link</Nav.Link>
                       <Nav.Link href="#anotherlink">Another Link</Nav.Link>
                       <Nav.Link href="#morelinks">More Links</Nav.Link>
                       <Nav.Link href="#evenmorelinks">Even More Links</Nav.Link>
                       <Nav.Link href="#lastlink">Last Link</Nav.Link>
                       <Nav.Link href="#home">Home</Nav.Link>
                       <Nav.Link href="#link">Link</Nav.Link>
                       <Nav.Link href="#anotherlink">Another Link</Nav.Link>
                       <Nav.Link href="#morelinks">More Links</Nav.Link>
                       <Nav.Link href="#evenmorelinks">Even More Links</Nav.Link>
                       <Nav.Link href="#lastlink">Last Link</Nav.Link>
                       <Nav.Link href="#home">Home</Nav.Link>
                       <Nav.Link href="#link">Link</Nav.Link>
                       <Nav.Link href="#anotherlink">Another Link</Nav.Link>
                       <Nav.Link href="#morelinks">More Links</Nav.Link>
                       <Nav.Link href="#evenmorelinks">Even More Links</Nav.Link>
                       <Nav.Link href="#lastlink">Last Link</Nav.Link>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
       </Fragment>
    );
}

export default PracticeSideBar;
