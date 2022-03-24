import React from 'react';
import logo from '../../images/Amazon Logo.wine.svg';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <img width={200} src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/inventory">Inventory</a>
                <a href="/orders">Orders</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;


