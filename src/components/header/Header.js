import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Amazon Logo.wine.svg';
import './Header.css';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img width={200} src={logo} alt="" />
            <div>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <button onClick={handleSignOut}>Sign Out </button>
                        :
                        <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;


