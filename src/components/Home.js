import React, { useState }  from 'react'
import MeContainer from './MeContainer'
import SayHelloContainer from './SayHelloContainer'

const Home = () => {
    return (
        <div>
            HOME Här ritar jag ut MeContainer och SayHelloContainer
            <MeContainer />
            <SayHelloContainer />
        </div>
    )
}


export default Home;