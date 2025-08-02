import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Featured from './Featured';
import PopularMenu from './PopularMenu';


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Featured />
            <PopularMenu />
        </div>
    );
};

export default Home;