import React, { useState }  from 'react'
import MeContainer from './MeContainer'
import SayHelloContainer from './SayHelloContainer'
import Card from './Card';

const Home = () => {
    return (
        <div>
            HOME Här ritar jag ut MeContainer och SayHelloContainer
            <MeContainer />
            <SayHelloContainer />
{ /*           <Card 
            title='card title'
            imageUrl='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png'
            body='body body body body body body body body body body body'
/> */}
        </div>
    )
}


export default Home;

//https://www.youtube.com/watch?v=Q3I_NwaCZI8 - create a card with title 