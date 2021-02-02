import React, { useState }  from 'react'
import MeContainer from './MeContainer'
import SayHelloContainer from './SayHelloContainer'
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <MeContainer />
            <SayHelloContainer />
        </div>
    )
}


export default Home;

//https://www.youtube.com/watch?v=Q3I_NwaCZI8 - create a card with title 