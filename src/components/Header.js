import React from 'react'
import './Header.css';
import hero2 from './assets/hero2.mp4';

const Header = () => {
    return (
        <div className='header'>
            <div className='heroBg'>
                <video className='videoBg' autoPlay loop muted>
                    <source src={hero2} type='video/mp4'/>
                </video>
            </div>
            <div className='heroContent'>
                <div className='heroItems'>
                    <h1 className='heroH1'>test1</h1>
                    <p className='heroP'>test2</p>
                </div>
            </div>
        </div>
    )
}


export default Header;

//https://github.com/LindBost/my-gatsby-site/blob/master/react-gatsby-travel-v1/src/components/Hero.js