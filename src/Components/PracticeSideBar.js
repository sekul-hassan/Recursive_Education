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
                       <h4 className="practiceTitle mt-2">Javascript</h4>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                       <Link to="/slider">Slider</Link>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
       </Fragment>
    );
}

export default PracticeSideBar;
