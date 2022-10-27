import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo2 from '../../images/logo2.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import group2 from '../../images/icons/Group 2.png'
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <nav className='navbar'>
            <Link to='/'><img src={logo2} alt="logo" /></Link>
            <div className='nav-item'>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                {
                    user ?
                    <button onClick={logout} className='logout'>Log Out</button>
                    
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link className='signUp' to='/signup'>Sign Up</Link>
                    </>
                }
                {
                    user && <img style={{width: '35px', marginLeft: '20px', cursor: 'pointer'}} src={group2} alt="user" />
                }
            </div>
        </nav>
    );
};

export default Navbar;