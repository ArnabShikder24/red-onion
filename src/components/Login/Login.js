import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='food-flex '>
            <div className='form'>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input onBlur={e => setEmail(e.target.value)} type="email" placeholder='Your Email' required/>
                    </div>
                    <div className="input-group">
                        <input onBlur={e => setPassword(e.target.value)} type="password" placeholder='Your Password' required/>
                    </div>
                    <input type="submit" value="Login" />
                </form>
                <p>New in Red Onion? <Link className='create' to='/signup'>Create Account</Link></p>
            </div>
        </div>
    );
};

export default Login;