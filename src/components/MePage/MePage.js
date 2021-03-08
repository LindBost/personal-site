import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import { data } from '../data/data.js';
import './MePage.css';

const MePage = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);

    /*
    const [isActive, setActive] = useState(true)


    console.log('FÖÖRS', isActive)
    const turnCard = () => {
        
        setActive(false);
    }
    */

    const fetchData = () => {
        const temp = [];
        {
            data.forEach((item, index) => {
                temp.push(
                    <div className='page-card' key={index}>
                        <img className='me-img' src={item.img} alt={item.alt} />
                        <div className='page-info'>
                            <div className='text-wrap'>
                                <div className='me-title'>
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        /*
        {
            data.forEach((item, index) => {
                temp.push(
                    <div id={index} className= {`page-card flip-card ${isActive ? "isFlipped" : ""}`} key={index} onClick={((e) => turnCard())}>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <img className='me-img' src={item.img} alt={item.alt} />
                                <div className='page-info'>
                                    <div className='text-wrap'>
                                        <div className='me-title'>
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flip-card-back'>massa text</div>
                        </div>
                    </div>
                )
            })
        }
        */

        return temp;
    }


    return (
        <div className='me-container'>
            <h2>Me.</h2>
            <div className='me-wrapper' >{fetchData()}</div>
            <div className='knapp-group'>
                <div className='me-button' onClick={handleBack}>Back</div>
            </div>
        </div>
    )
}


export default MePage;
