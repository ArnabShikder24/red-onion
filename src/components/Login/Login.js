import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='food-flex '>
            <div className='form'>
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <input type="email" placeholder='Your Email' required/>
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder='Your Password' required/>
                    </div>
                    <input type="submit" value="Login" />
                </form>
                <p>New in Red Onion? <Link className='create' to='/signup'>Create Account</Link></p>
            </div>
        </div>
    );
};

export default Login;