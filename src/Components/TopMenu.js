import React, {Fragment, useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";

function TopMenu(props) {

    const [login,setLogin] = useState(false);
    const [css,setCss] = useState({
        navBar:'navBar',
        navLink:'navLink',
        nabBrand:'navBrand'
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
                    nabBrand:'navBrandScroll'
                });
            }
            else{
                setCss({
                    navBar:'navBar',
                    navLink:'navLink',
                    nabBrand:'navBrand'
                });
            }
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll);
    })

    return (
        <Fragment>
            <Navbar className={css.navBar} fixed = "top" collapseOnSelect expand="sm">
                <Navbar.Brand href="#home">SEKUL HASSAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav className="nav">
                        <Nav.Link className={css.navLink} href="#deets">Home</Nav.Link>
                        <Nav.Link className={css.navLink} href="#memes">About</Nav.Link>
                        <Nav.Link className={css.navLink} href="#memes">Service</Nav.Link>
                        <Nav.Link className={css.navLink} href="#memes">Projects</Nav.Link>
                        <Nav.Link className={css.navLink} href="#memes">Practice</Nav.Link>
                        {
                            !login ? <Nav.Link className={css.navLink} href="#memes" onClick={loginBtn}>Login</Nav.Link>:<Nav.Link className={css.navLink} href="#memes" onClick={loginBtn}>Logout</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default TopMenu;
