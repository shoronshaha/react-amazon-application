import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Amazon Logo.wine.svg';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <img width={200} src={logo} alt="" />
            <div>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;


