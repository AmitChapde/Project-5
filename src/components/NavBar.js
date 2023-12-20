import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

function NavBar() {
    // Define the navLinkStyles function outside the return statement
    const navLinkStyles = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'none' : 'underline'
    });

    const auth=useAuth();

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
            {
                !auth.user && (
                    <NavLink style={navLinkStyles} to="/login">
                        Login
                    </NavLink>
                )
            }
        </nav>
    );
}

export default NavBar;
