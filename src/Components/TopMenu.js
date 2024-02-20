import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import white from '../Assets/Images/white.png';
import black from '../Assets/Images/black.png';
import { Link } from 'react-router-dom';

function TopMenu(props) {
    const [css, setCss] = useState({
        navBar: 'navBar',
        navLink: 'navLink',
        nabBrand: 'navBrand',
        smallNav:'smallNav',
        nav:'nav',
        logo: black,
    });

    const menuRef = useRef(null);

    const closeMenuOnClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            document.querySelector('.navbar-collapse.show')
        ) {
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
                navbarToggler.click();
            }
        }
    };

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 1) {
                setCss({
                    navBar: 'navBarScroll',
                    navLink: 'navLinkScroll',
                    nabBrand: 'navBrandScroll',
                    smallNav:'smallNavScroll',
                    nav:'navScroll',
                    logo: white,
                });
            } else {
                setCss({
                    navBar: 'navBar',
                    navLink: 'navLink',
                    nabBrand: 'navBrand',
                    smallNav:'smallNav',
                    nav:'nav',
                    logo: black,
                });
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', closeMenuOnClickOutside);
        return () => {
            document.removeEventListener('mousedown', closeMenuOnClickOutside);
        };
    }, []);

    return (
        <Fragment>
            <Navbar className={css.navBar} collapseOnSelect expand="md" sticky="top" ref={menuRef}>
                <Navbar.Brand className="m-0 p-0" href="#home">
                    <Link to="/">
                        <img className="logoImg" src={css.logo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    className={css.smallNav}
                    aria-controls="responsive-navbar-nav"
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav className={css.nav}>
                        <Nav.Link>
                            <Link to="/" className={css.navLink}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about" className={css.navLink}>
                                About
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/" className={css.navLink}>
                                Service
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/shuttle" className={css.navLink}>
                                Projects
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/practice" className={css.navLink}>
                                Practice
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default TopMenu;
