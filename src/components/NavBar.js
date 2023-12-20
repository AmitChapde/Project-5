import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    // Define the navLinkStyles function outside the return statement
    const navLinkStyles = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'none' : 'underline'
    });


    return (
        <nav className='primary-nav'>
            <NavLink style={navLinkStyles} to="/" end>
                Home
            </NavLink>
            <NavLink style={navLinkStyles} to="/about">
                About
            </NavLink>
            <NavLink style={navLinkStyles} to="/Products">
                Products
            </NavLink>
            <NavLink style={navLinkStyles} to="/Profile">
                Profile
            </NavLink>
    
        </nav>
    );
}

export default NavBar;
