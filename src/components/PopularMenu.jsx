import React from 'react';
import useMenu from './useMenu';
import MenuItem from './MenuItem';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category==='popular')
    return (
        <div>
            {
                popularMenu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    );
};

export default PopularMenu;