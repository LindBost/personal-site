import React, { useEffect, useState } from 'react'
import './Header.css';
import hero3 from '../assets/hero3.mp4';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Header = () => {

    const [currTime, setCurTime] = useState();



    const getTime = () => {
        var today = new Date();

        var fetchTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var timeInInt = parseFloat(fetchTime);
        setCurTime(timeInInt)
    }

    console.log('time', currTime)

    useEffect(() => {
        getTime();
    }, [])

    if (currTime === 14) {
        console.log('God afternoon')
    }

    if (currTime < 12) {
        console.log('God morning')
    }


    if (currTime > 17) {
        console.log('Good evening')
    }

    //fixa så post(id: 2) i GET_ONE_POST tar in vilken den ska välja 

    const GET_ONE_POST = gql`
  query GetPost {
    post(id: 2) {
      id
      someId
      body
    }
  }
`;

    return (
        <div className='header'>
            <div className='heroBg'>
                <video className='videoBg' autoPlay loop muted>
                    <source src={hero3} type='video/mp4' />
                </video>
            </div>
            <div className='heroContent'>
                <div className='heroItems'>
                    <Query query={GET_ONE_POST}>
                        {({ loading, data }) => !loading && (
                            <div key={data.post.id}>
                                <h1>{data.post.body}</h1>
                            </div>
                        )}
                    </Query>
                    {/*<h1 className='heroH1'>Well, hi there!</h1>*/}
                    <p className='heroP'>Thank you for visiting</p>
                </div>
            </div>
        </div>
    )
}


export default Header;