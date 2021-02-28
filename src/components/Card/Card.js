import React, { useCallback } from 'react'
import {useHistory} from 'react-router-dom';
import './Card.css'

const Card = ({ title, imageUrl, body, path }) => {

    const history = useHistory();
    const handleClick = useCallback(() => history.push({pathname: path}), [history]);

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
            </div>
            <div className='btn'>
                <button onClick={handleClick}>
                    <a>
                        View more
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Card
