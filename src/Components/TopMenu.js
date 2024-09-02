import React, { Fragment, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import white from '../Assets/Images/wightLogo.png';
import black from '../Assets/Images/blackLogo.png';
import { Link } from 'react-router-dom';

function TopMenu(props) {
    const [css, setCss] = useState({
        navBar: 'navBarScroll',
        navLink: 'navLinkScroll',
        nabBrand: 'navBrandScroll',
        smallNav:'smallNavScroll',
        nav:'navScroll',
        logo: white,
    });


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

    return (
        <Fragment>
            <Navbar className={css.navBar} collapseOnSelect expand="md" sticky="top">
                <Navbar.Brand className="m-0 p-0" href="#home"><Link to="/"><img className="logoImg" src={css.logo} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle className={css.smallNav} aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav className={css.nav}>
                        <Link to="/" className={css.navLink}>Home</Link>
                        <Link to="/about" className={css.navLink}>About</Link>
                        <Link to="/services" className={css.navLink}>Service</Link>
                        {/*<Link to="/academic" className={css.navLink}>Academic</Link>*/}
                        <Link to="/learn" className={css.navLink}>Learn</Link>
                        <Link to="/project" className={css.navLink}>Projects</Link>
                        <Link to="/javascript" className={css.navLink}>Practice</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default TopMenu;
