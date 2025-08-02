import React from 'react';

const MenuItem = ({item}) => {
    const {image} = item
    return (
        <div className='w-40 mb-4'>
            <img style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
        </div>
    );
};

export default MenuItem;