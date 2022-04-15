import React from 'react';
import dinner1 from '../../images/dinner/dinner1.png';
import dinner2 from '../../images/dinner/dinner2.png';
import dinner3 from '../../images/dinner/dinner3.png';
import dinner4 from '../../images/dinner/dinner4.png';
import dinner5 from '../../images/dinner/dinner5.png';
import dinner6 from '../../images/dinner/dinner6.png';
 
const Dinner = () => {
    return (
        <div className='food-flex'>
            <div className='foods'>
                <div className='food-item'>
                    <img src={dinner1} alt="" />
                    <h5>Lemony Salmon Piccata</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={dinner2} alt="" />
                    <h5>Lemony Salmon Piccata</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={dinner3} alt="" />
                    <h5>Lemony Salmon Piccata</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={dinner4} alt="" />
                    <h5>Lemony Salmon Piccata</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={dinner5} alt="" />
                    <h5>Lemony Salmon Piccata</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={dinner6} alt="" />
                    <h5>Lemony Salmon Piccata</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
            </div>
        </div>
    );
};

export default Dinner;