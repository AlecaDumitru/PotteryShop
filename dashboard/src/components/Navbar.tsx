import React from 'react';
import "./styles/Navbar.css"
import {Language, NotificationsNone, Settings} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-Wrapper">
                <Link to="/">
                    <div className="Navbar-Left">
                        <span className="logo">Ioana</span>
                    </div>
                </Link>
                <div className="Navbar-Right">
                    <div className="navbarIconContainer">
                        <NotificationsNone/>
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIconContainer">
                        <Language/>
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    );
};
export default Navbar;