import React, {Fragment, useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import white from "../Assets/Images/white.png";
import black from "../Assets/Images/black.png";
import {Link} from "react-router-dom";

function TopMenu(props) {

    const [login,setLogin] = useState(false);
    const [css,setCss] = useState({
        navBar:'navBar',
        navLink:'navLink',
        nabBrand:'navBrand',
        logo:black
    })

    const loginBtn = ()=>{
        setLogin(!login);
    }

    useEffect(()=>{
        function handleScroll(){
            if(window.scrollY>1){
                setCss({
                    navBar:'navBarScroll',
                    navLink:'navLinkScroll',
                    nabBrand:'navBrandScroll',
                    logo:white
                });
            }
            else{
                setCss({
                    navBar:'navBar',
                    navLink:'navLink',
                    nabBrand:'navBrand',
                    logo: black
                });
            }
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll);
    })

    return (
        <Fragment>
            <Navbar className={css.navBar} fixed = "top" collapseOnSelect expand="sm">
                <Navbar.Brand className="m-0 p-0" href="#home"><Link to="/"><img className="logoImg" src={css.logo} alt=""/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav className="nav">
                        <Nav.Link ><Link to="/" className={css.navLink} >Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/"  className={css.navLink} >About</Link></Nav.Link>
                        <Nav.Link ><Link to="/"  className={css.navLink} >Service</Link></Nav.Link>
                        <Nav.Link ><Link to="/"  className={css.navLink}>Projects</Link></Nav.Link>
                        <Nav.Link><Link to="practice"  className={css.navLink} >Practice</Link></Nav.Link>
                        {
                            !login ? <Nav.Link><Link className={css.navLink} onClick={loginBtn}>Login</Link></Nav.Link>:<Nav.Link onClick={loginBtn}><Link className={css.navLink}>Logout</Link></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default TopMenu;
