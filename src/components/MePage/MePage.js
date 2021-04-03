import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { data } from '../data/data.js';
import './MePage.css';

const MePage = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);
    useEffect(() => {
        window.scrollTo(0, 0)
      })

    const fetchData = () => {
        const temp = [];
        {
            data.forEach((item, index) => {
                temp.push(

                    <div className="flip-box" key={index}>
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img className='me-img' src={item.img} alt={item.alt}/>
                            </div>
                            <div className="flip-box-back">
                                <h2 className="item-header">{item.name}</h2>
                                <p className="item-desc">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }

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

