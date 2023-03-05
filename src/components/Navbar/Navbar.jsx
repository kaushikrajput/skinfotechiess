import React, { useState, useEffect } from "react";
import style from './Navbar.module.css'
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Turn as Hamburger } from 'hamburger-react'
import '../Styles.css'

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setScrollPosition(true);
        } else {
            setScrollPosition(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    const [click, setClick] = useState(false)
    const [dropDiv, setDropdiv] = useState(false)
    
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setOpen(false)
    };
    const handleShow = () => setShow(true);

    const closeMobileMenu = () => setClick(false);

    const [down, setDown] = useState(false);

    const styles = {
        visibility: 'visible',
        width: '280px',
        zIndex: '99999999',
    }

    const navTitle = {
        fontSize: '22px',
        fontWeight: '400',
        textAlign: 'left',
        color: '#101010 !important',
        lineHeight: '26px',
        fontFamily: "'Poppins',sans-serif",
    }

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className={scrollPosition ? "navbar active" : "navbar"}>
                <div className={`${style.maindiv} container-fluid ${style.mPad}`}>
                    <div className={style.menuHeader}>
                        <div className="dskLogo">
                            <Link to="/" className="navBrand" >
                                <img src="imgs/sk_logo.png" alt="Logo" className="megaWhiteLogo img" />
                                <img src="imgs/sk_logo.png" alt="Logo" className="megaDarkLogo img" />
                            </Link>
                        </div>

                        <div className={`${style.customNav} custom-nav`} role="navigation">
                            <ul className={`${style.navList} nav-list`}>
                                <li>
                                    <Link to="/services" className={`${style.menuLinks} menu-links`}>Services</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className={`${style.menuLinks} menu-links`}>Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/about" className={`${style.menuLinks} menu-links`}>About</Link>
                                </li>
                                <li className={`${style.sbmenu} ${style.rpDropdown}`} onMouseEnter={() => setDropdiv(true)} onMouseLeave={() => setDropdiv(false)} >
                                    <Link to="/contact" className={`${style.menuLinks} menu-links `} onClick={closeMobileMenu}>Contact</Link>
                                    <div className={`${style.nxDropdown} ${style.menuDropdown} nx-dropdown`} onMouseEnter={() => setDropdiv(true)} onMouseLeave={() => setDropdiv(false)}>
                                        <div className={style.subMenuSection}>
                                            <div className={style.subMenuCenterBlock}>
                                                <div className={`${style.subMenuColumn} ${style.smfull}`}>
                                                    <ul>
                                                        <li><Link to="/contact">Contact Details</Link> </li>
                                                        <li><Link to="/career">Careers</Link> </li>
                                                        <li><Link to="/faq">FAQs</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <Link to="/contact" className={`${style.btnBr} ${style.bgBtn3} ${style.btshadB2} ${style.lnk}`} style={{ paddingLeft: "20px" }}>Get Proposal
                                        <i className={` fas fa-chevron-right  ${style.faIcon}`}>
                                            <span className={style.circle}></span>
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* -------------  mobile menu ------------- */}

                        <div className={style.mobileMenu2} >
                            <ul className={style.mobNav2}>
                                <li>
                                    <Link to="/contact" className={`${style.btnRound} ${style.trngl} ${style.bgBtn}`}>
                                        <i className="fas fa-envelope-open-text"></i>
                                    </Link>
                                </li>
                                <li className={style.navm} onClick={handleShow} >
                                    <Hamburger toggled={isOpen} color="#05688e" direction="right" onToggle={setOpen} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------- Mobile Navigation ---------------------- */}

            <Offcanvas show={show} onHide={handleClose} style={styles} scroll='true'>
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title style={navTitle}>SK Info Techies
                    </Offcanvas.Title >
                </Offcanvas.Header>
                <Offcanvas.Body className={`${style.navContainer} ${style.disableBody}`}>
                    <ul className={style.firstNav}>
                        <li>
                            <div className={style.navItemWrapper} >
                                <Link to="/" className={style.navItem}>Home</Link>
                            </div>
                        </li>
                        <li>
                            <div className={style.navItemWrapper}>
                                <Link to="/services" className={style.navItem}>Services</Link>
                            </div>
                        </li>
                        <li>
                            <div className={style.navItemWrapper}>
                                <Link to="/portfolio" className={style.navItem}>Portfolio</Link>
                            </div>
                        </li>
                        <li>
                            <div className={style.navItemWrapper}>
                                <Link to="/about" className={style.navItem}>About</Link>
                            </div>
                        </li>
                        <li className={style.navParent} onClick={() => setDown(!down)} >
                            <div className={style.navItemWrapper}>
                                <Link to="#" className={style.navItem}>Contact
                                    <span className={style.navNext}>
                                        <span>{down ? <i className={`fa-solid fa-chevron-up  ${style.arrow}`}></i>
                                            : <i className={`fa-solid fa-chevron-down ${style.arrow}`}></i>}
                                        </span>
                                    </span>
                                </Link>
                            </div>

                            {down && <div className={style.navContent} onClick={() => setDown(true)}>
                                <ul className={style.indent}>
                                    <li>
                                        <div className={style.navItemWrapper}>
                                            <Link to="/contact" className={style.navItem}>Contact Details</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={style.navItemWrapper}>
                                            <Link to="/career" className={style.navItem}>Careers</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={style.navItemWrapper}>
                                            <Link to="/faq" className={style.navItem}>FAQs</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>}
                        </li>
                    </ul>

                    <ul className={style.bottomNav}>
                        <li className={style.prb}>
                            <div className={style.navItemWrapper}>
                                <Link to="#" className={style.navItem}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
                                        <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
                                            c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
                                            c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
                                            C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </li>
                        <li className={style.prb}>
                            <div className={style.navItemWrapper}>
                                <Link to="#" className={style.navItem}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                    </svg>
                                </Link>
                            </div>
                        </li>
                        <li className={style.prb}>
                            <div className={style.navItemWrapper}>
                                <Link to="#" className={style.navItem}>
                                    <svg enableBackground="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </li>
                    </ul>

                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}
export default Navbar