import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to TShirt Mania!!!</h2>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/orderreview">Order Review</NavLink>
                <NavLink to="/grandpa">GrandPa</NavLink>
            </nav>
        </div>
    );
};

export default Header;