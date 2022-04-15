import React from 'react';
import './Breakfast.css'
import breakfast1 from '../../images/breakfast/breakfast1.png'
import breakfast2 from '../../images/breakfast/breakfast2.png'
import breakfast3 from '../../images/breakfast/breakfast3.png'
import breakfast4 from '../../images/breakfast/breakfast4.png'
import breakfast5 from '../../images/breakfast/breakfast5.png'
import breakfast6 from '../../images/breakfast/breakfast6.png'

const Breakfast = () => {
    return (
        <div className='food-flex'>
            <div className='foods'>
                <div className='food-item'>
                    <img src={breakfast1} alt="" />
                    <h5>Bagel and cream cheese</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={breakfast2} alt="" />
                    <h5>Bagel and cream cheese</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={breakfast3} alt="" />
                    <h5>Bagel and cream cheese</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={breakfast4} alt="" />
                    <h5>Bagel and cream cheese</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={breakfast5} alt="" />
                    <h5>Bagel and cream cheese</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={breakfast6} alt="" />
                    <h5>Bagel and cream cheese</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
            </div>
        </div>  
    );
};

export default Breakfast;