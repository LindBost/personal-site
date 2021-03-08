import React, {useEffect, useState} from 'react'
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

   if(currTime === 14 ) {
    console.log('woop')
} 

if(currTime < 14) {
    console.log('jjaaaa')
}


if(currTime > 14) {
    console.log('nooo')
}


 const GET_ONE_POST = gql`
  query GetPost {
    post(id: 1) {
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
                    <source src={hero3} type='video/mp4'/>
                </video>
            </div>
            <div className='heroContent'>
                <div className='heroItems'>
                    <h1 className='heroH1'>Well, hi there!</h1>
                    <p className='heroP'>Thank you for visiting</p>
                </div>
            </div>
            <Query query={GET_ONE_POST}>
        {({ loading, data }) => !loading && (
                <div key={data.post.id}>
                  <h1>{data.post.someId}</h1>
                  <p>{data.post.body}</p>
                </div>
        )}
      </Query>
        </div>
    )
}


export default Header;