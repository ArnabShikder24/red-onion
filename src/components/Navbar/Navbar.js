import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo2 from '../../images/logo2.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'><img src={logo2} alt="logo" /></Link>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/login'>Login</Link>
                <Link className='signUp' to='/signup'>Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;