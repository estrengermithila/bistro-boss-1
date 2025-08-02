import React from 'react';
import Cover from './Cover';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({item,img,title}) => {
    return (
        <div>
            <Cover img={img} title={title}></Cover>
            <div>
                {
                    item.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className='btn btn-warning'>View All {title}</button></Link>
        </div>
    );
};

export default MenuCategory;