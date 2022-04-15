import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './MenuItems.css'

const MenuItems = () => {
    return (
        <div className='menuItem'>
            <div className='link-item'>
                <NavLink to='/'>Breakfast</NavLink>
                <NavLink to='/lunch'>Lunch</NavLink>
                <NavLink to='/dinner'>Dinner</NavLink>
            </div>
            <Outlet></Outlet>
            <div className='btn-cover'>
                <button className='check-btn'>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default MenuItems;