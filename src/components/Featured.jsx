import React from 'react';
import './featured.css'
import img1 from '../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className='featured-image bg-fixed'>
            <div className='flex'>
                <div>
                    <img className='w-32' src={img1} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, incidunt!</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;