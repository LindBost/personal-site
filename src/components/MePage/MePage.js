import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import data from '../data/data.json';

const MePage = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);


    const fetchDatazz = data;

    console.log('fetchDatazz', fetchDatazz)

    const fetchData = () => {
        const temp = [];

        {data.forEach((item, index) => {
            temp.push(
            <div className='page-card' key={index}>
                <img src={item.img} alt={item.alt} />
                <div className='page-info'>
                    <div className='text-wrap'>
                        <div>
                            {item.name}
                        </div>
                    </div>
                </div>
            </div>
        )
        })}

    return temp;
    }


    return (
        <div>
            <h2>Me.</h2>
            <div>{fetchData()}</div>
            <div className='knapp-group'>
                <div className='knapp' onClick={handleBack}>Tillbaka</div>
            </div>
        </div>
    )
}


export default MePage;

//https://worldofwarcraft.com/en-gb/character/eu/dragonmaw/blinus