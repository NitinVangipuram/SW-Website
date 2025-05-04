import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo_black_final.png';
// import logo from '../../images/logo-iit.jpg';
import Footer from '../Footer/footer';
import "./Sidebar.css"

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen); console.log(isOpen); }

    // Define the links as pairs
    const links = [
        { path: "/dean_associate_deans", label: "Dean and Associate Deans" },
        { path: "/administrative_office", label: "Administrative Office" },
        { path: "/student_life", label: "Students Campus Life" },
        { path: "/hostels", label: "Hostels" },
        { path: "/mess_canteen", label: "Mess & Canteen" },
        { path: "/gymkhana", label: "Gymkhana" },
        { path: "/health", label: "Health" },
        { path: "/counselling", label: "Counselling" },
        // { path: "https://www.iitdh.ac.in/details", label: "Alumni Association" }
    ];

    return (
        <>
            {/* Navbar for larger screens */}
           <nav className="navbar navbar-expand-lg d-none d-lg-flex custom-navbar">
                <NavLink to="/" className="navbar-brand custom-nav-image-wrapper">
                    <img src={logo} alt='logo' className="rounded custom-nav-image"/>
                </NavLink>

                {/*<button className="navbar-toggler" type="button" onClick={toggle}>
                    <FaBars />
                </button>*/}

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        {links.map((link, index) => (
                            <li className="nav-item custom-item-navbar" key={index}>
                                <NavLink to={link.path} className="nav-link fs-5">
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Navbar for smaller screens */}
            {<nav className="navbar navbar-expand-lg d-lg-none custom-navbar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" onClick={toggle}>
                        {isOpen ? <FaTimes style={{color: "white"}}/> : <FaBars style={{color: "white"}}/>}
                    </button>
                    <NavLink to="/" className="navbar-brand custom-nav-image-wrapper">
                        <img src={logo} alt='logo' className="rounded custom-nav-image" />
                    </NavLink>
                </div>
            </nav>}

            {/* Sidebar for mobile */}
            <div className={'custom-sidebar-container'}>
            <div className={`custom-sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-nav" style={{backgroundColor: "#85198e"}}>
                    {links.map((link, index) => (
                        <li className="nav-item custom-item-navbar" key={index}>
                            <NavLink to={link.path} className="nav-link" onClick={toggle}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            </div>



            {/* Main Content */}
            {<div className="d-flex justify-content-center align-items-center p-3" style={{ height: '100%' }}>
                {/*<div className="topbar d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary d-lg-none" onClick={toggle}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>*/}
                <main>{children}</main>
            </div>}
            <Footer />
        </>
    );
};

export default Sidebar;
