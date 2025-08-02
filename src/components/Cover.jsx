import React from 'react';
import { Parallax, Background } from 'react-parallax';


const Cover = ({img,title}) => {
    return (
        <div>
                <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
       
       <div
  className="hero min-h-screen"
 >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
     
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </Parallax>
        </div>
    );
};

export default Cover;