import React from 'react';
import {AttachMoney, LineStyle, PermIdentity, Storefront, Timeline, TrendingUp} from "@mui/icons-material"
import "./styles/Sidebar.css"
import {Link} from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarLsit">
                        <Link to="/home">
                            <li className="sidebarListItem">
                                <LineStyle className="navbarIcon"/>
                                Home
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="navbarIcon"/>
                                Products
                            </li>
                        </Link>
                        <Link to="/categories">
                            <li className="sidebarListItem">
                                <Storefront className="navbarIcon"/>
                                Categories
                            </li>
                        </Link>
                        <Link to="/clients">
                            <li className="sidebarListItem">
                                <Storefront className="navbarIcon"/>
                                Clients
                            </li>
                        </Link>
                    </ul>
                    <h3 className="sidebarTitle">Reports Menu</h3>
                    <ul className="sidebarLsit">
                        <Link to="/reports" className="link">
                        <li className="sidebarListItem">
                            <LineStyle className="navbarIcon"/>
                                Reports
                        </li>
                        </Link>
                        <Link to="/balance">
                            <li className="sidebarListItem">
                                <TrendingUp className="navbarIcon"/>
                                Monthly Balance
                            </li>
                        </Link>
                        <Link to="/lists">
                            <li className="sidebarListItem">
                                <TrendingUp className="navbarIcon"/>
                                List Data
                            </li>
                        </Link>
                    </ul>
                    <h3 className="sidebarTitle">Analytics</h3>
                    <ul className="sidebarLsit">
                        <Link to="">
                            <li className="sidebarListItem">
                                <LineStyle className="navbarIcon"/>
                                Sales Analytics
                            </li>
                        </Link>
                        <Link to="">
                        <li className="sidebarListItem">
                            <Timeline className="navbarIcon"/>
                            UserAnalytics
                        </li>
                        </Link>
                        <Link to="">
                        <li className="sidebarListItem">
                            <TrendingUp className="navbarIcon"/>
                            CampaignAnalytics
                        </li>
                        </Link>
                    </ul>
                    <h3 className="sidebarTitle">Sales</h3>
                    <ul className="sidebarLsit">
                        <Link to="/transactions">
                            <li className="sidebarListItem">
                                <AttachMoney className="navbarIcon"/>
                                Transactions
                            </li>
                        </Link>
                        <Link to="/invoices">
                            <li className="sidebarListItem">
                                <TrendingUp className="navbarIcon"/>
                                Invoices
                            </li>
                        </Link>
                    </ul>
                    <h3 className="sidebarTitle">Settings Management</h3>
                        <ul className="sidebarLsit">
                            <Link to="/usersManagement" className="link">
                                <li className="sidebarListItem">
                                    <PermIdentity className="navbarIcon"/>
                                    Users Management
                                </li>
                            </Link>
                            <Link to="/settings" className="link">
                                <li className="sidebarListItem">
                                    <PermIdentity className="navbarIcon"/>
                                    General Settings
                                </li>
                            </Link>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;