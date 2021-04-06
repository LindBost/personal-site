import React, { useEffect, useState } from 'react'
import './Header.css';
import hero3 from '../assets/hero3.mp4';
import GoodMorgingText from '../GoodMorningText';

const Header = () => {

    const [sendId, setSendId] = useState();

    const getTime = () => {
        var today = new Date();

        var fetchTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var timeInInt = parseFloat(fetchTime);

        if (timeInInt >= 13 && timeInInt < 17) {
            console.log('God afternoon')

            setSendId("2");
        }

        if (timeInInt < 12) {
            console.log('God morning')

            setSendId("0");
        }


        if (timeInInt >= 17) {
            console.log('Good evening')

            setSendId("1");
        }
    }


    useEffect(() => {
        getTime();
    }, [])

    //TODO: fix GraphQL for deploy
    return (
        <div className='header'>
            <div className='heroBg'>
                <video className='videoBg' autoPlay loop muted>
                    <source src={hero3} type='video/mp4' />
                </video>
            </div>
            <div className='heroContent'>
                <div className='heroItems'>
                    {sendId && <GoodMorgingText sendId={sendId} /> }
                    {/*<h1 className='heroH1'>Well, hi there!</h1>*/}
                    <p className='heroP'>Thank you for visiting</p>
                </div>
            </div>
        </div>
    )
}


export default Header;