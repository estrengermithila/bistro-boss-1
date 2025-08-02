import React from 'react';
import FoodCart from './FoodCart';

const OrderCategory = ({item}) => {
    return (
        <div>
            {
                item.map(item =><FoodCart key={item._id} item={item}></FoodCart>)
            }
        </div>
    );
};

export default OrderCategory;