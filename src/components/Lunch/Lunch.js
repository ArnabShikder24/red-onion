import React from 'react';
import lunch1 from '../../images/lunch/lunch1.png'
import lunch2 from '../../images/lunch/lunch2.png'
import lunch3 from '../../images/lunch/lunch3.png'
import lunch4 from '../../images/lunch/lunch4.png'
import lunch5 from '../../images/lunch/lunch5.png'
import lunch6 from '../../images/lunch/lunch6.png'

const Lunch = () => {
    return (
        <div className='food-flex'>
            <div className='foods'>
                <div className='food-item'>
                    <img src={lunch1} alt="" />
                    <h5>Healthy Meal Plan</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={lunch2} alt="" />
                    <h5>BHealthy Meal Plan </h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={lunch3} alt="" />
                    <h5>Healthy Meal Plan</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={lunch4} alt="" />
                    <h5>Healthy Meal Plan</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={lunch5} alt="" />
                    <h5>Healthy Meal Plan</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
                <div className='food-item'>
                    <img src={lunch6} alt="" />
                    <h5>Healthy Meal Plan</h5>
                    <p>How we dream about our future</p>
                    <h3>$6.99</h3>
                </div>
            </div>
        </div>
    );
};

export default Lunch;