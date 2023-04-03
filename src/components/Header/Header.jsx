import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/contact">Contact</ActiveLink>
                <ActiveLink to ="/posts">Posts</ActiveLink>
                <Link to="/about">About</Link>
                <Link to='friends' >Friends</Link>
        </nav>
    );
};

export default Header;