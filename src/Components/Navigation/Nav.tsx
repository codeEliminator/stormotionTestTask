import React from "react";
import { NavLink, Outlet, Search } from "react-router-dom"
import Logo from '../../assets/Logo.png'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import './Nav.css'

const Nav: React.FC = () => {
    return (
        <>
            <div className="navContainer">
                <div className="nav">
                    <div className="logo">
                        <NavLink to='/'><img src={Logo} alt="Logo" /></NavLink>
                    </div>
                    <div className="searchInputWrapper">
                        <input className="searchInput" placeholder="Search for games..." />
                        <div className="searchIconWrapper">
                            <AiOutlineSearch className="searchIcon" />
                        </div>
                    </div>
                    <div className="profile">
                        <AiOutlineUser className="profileIcon" />
                        <span className="profileName">Alex</span>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </>
        
        
    )
}

export default Nav