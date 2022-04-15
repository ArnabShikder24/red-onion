import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='food-flex '>
            <div className='form'>
                <h2>Sign Up</h2>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder='Name' required/>
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder='Email' required/>
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder='Password' required/>
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder='Confirm Password' required/>
                    </div>
                    <input type="submit" value="Sign Up" />
                </form>
                <p>Alreay have an account? <Link className='create' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;