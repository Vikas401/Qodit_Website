import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
const reqSvgs = require.context ( '../Assets/', true, /\.svg$/ )
const allSvgFilepaths = reqSvgs.keys().map ( path => ({ path, file: reqSvgs ( path) }) )

const options = {
  items: 6,
  autoplay:true,
  autoPlay:true,
  autoplayTimeout:1000,
  nav: false,
  loop: true,
  dots:false,
  animateIn:true,
  responsive:{
    0:{
        items:3,
    },
    600:{
        items:3,
    },
    1000:{
        items:6,
    }
},
};
export const LogoSection = (props) => {
  return (
    <div  className='testimonialCarousel'>
<OwlCarousel options={options}>
       {allSvgFilepaths ? allSvgFilepaths.map(item => <div key={item.id}>{item.title}
       <img id='logoImg' src={item.path} alt="" />
        </div>) : <h1>Loading</h1>}
</OwlCarousel>
</div>
  )}