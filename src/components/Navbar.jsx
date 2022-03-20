import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/dialogs">Dialogs</NavLink></div>
            <div><NavLink to="/users">Users</NavLink></div>
            <div><NavLink to="/news">News</NavLink></div>
            <div><NavLink to="/music">Music</NavLink></div>
            <div><NavLink to="/settings">Settings</NavLink></div>
        </div>
    );
};

export default Navbar;