import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo2 from '../../images/logo2.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo2} alt="logo" />
            <div>
                <Link to='/cart'>Cart</Link>
                <Link to='/login'>Login</Link>
                <Link className='signUp' to='/signup'>Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;