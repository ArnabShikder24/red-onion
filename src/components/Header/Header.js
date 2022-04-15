import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='header-info'>
                    <h1>Best food waiting for your belly</h1>
                    <input type="text" placeholder='Search food items' /><button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;