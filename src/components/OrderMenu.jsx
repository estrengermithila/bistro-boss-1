import React, { useState } from 'react';
import Cover from './Cover';
import img1 from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from './useMenu';
import OrderCategory from './OrderCategory';
import { useParams } from 'react-router-dom';

const OrderMenu = () => {
    const categories =['salad','soup','pizza','drinks','dessert']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
     const [menu] = useMenu()
    const salad = menu.filter(item=>item.category==='salad')
    const drinks = menu.filter(item=>item.category==='drinks')
    const dessert = menu.filter(item=>item.category==='dessert')
    const pizza = menu.filter(item=>item.category==='pizza')
    const soup = menu.filter(item=>item.category==='soup')
    const [tabIndex, setTabIndex] = useState(initialIndex);
    return (
        <div>
            <Cover img={img1} title="Order Menu"></Cover>
       <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Soup</Tab>
        <Tab>Pizza</Tab>
        <Tab>Drinks</Tab>
        <Tab>Dessert</Tab>
        
      </TabList>
      <TabPanel>
        <OrderCategory item={salad}></OrderCategory>
      </TabPanel>
      <TabPanel>
        <OrderCategory item={soup}></OrderCategory>
      </TabPanel>
      <TabPanel>
        <OrderCategory item={pizza}></OrderCategory>
      </TabPanel>
      <TabPanel>
        <OrderCategory item={drinks}></OrderCategory>
      </TabPanel>
      <TabPanel>
        <OrderCategory item={dessert}></OrderCategory>
      </TabPanel>
     
    </Tabs>
       </div>
       
        </div>
    );
};

export default OrderMenu;