import React, { useEffect }  from 'react'
import MeContainer from '../MeContainer/MeContainer'
import SayHelloContainer from '../Contact/SayHelloContainer'
import './Home.css';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='home-container'>
            <MeContainer />
            <SayHelloContainer />
        </div>
    )
}


export default Home;






























//https://www.youtube.com/watch?v=Q3I_NwaCZI8 - create a card with title 