import React from 'react'
import { BackgroundSVG } from '../BackgroundSVG';
import './About.css';

function Banner() {
    return (
        <div className="new_banner">
         <BackgroundSVG/>
        <h1 style = {{zIndex: 2}}>About Us</h1>
        </div>
    )
}

export default Banner
