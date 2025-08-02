import React from 'react';
import Cover from './Cover';
import img1 from '../assets/menu/banner3.jpg'
import img2 from '../assets/menu/dessert-bg.jpeg'
import img3 from '../assets/menu/pizza-bg.jpg'
import img4 from '../assets/menu/salad-bg.jpg'
import img5 from '../assets/menu/soup-bg.jpg'
import useMenu from './useMenu';
import PopularMenu from './PopularMenu';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
        const salad = menu.filter(item=>item.category==='salad')
    const drinks = menu.filter(item=>item.category==='drinks')
    const dessert = menu.filter(item=>item.category==='dessert')
    const pizza = menu.filter(item=>item.category==='pizza')
    const soup = menu.filter(item=>item.category==='soup')
    return (
        <div>
            <Cover img={img1} title="Our Menu" />
            <PopularMenu></PopularMenu>
             <MenuCategory img={img2} item={salad} title={"soup"}></MenuCategory>
       <MenuCategory img={img3} item={drinks} title={"drinks"}></MenuCategory>
       <MenuCategory img={img4} item={dessert} title={"dessert"}></MenuCategory>
       <MenuCategory img={img5} item={pizza} title={"pizza"}></MenuCategory>
       <MenuCategory img={img5} item={soup} title={"soup"}></MenuCategory>
        </div>
    );
};

export default Menu;