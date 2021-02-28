import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom';

const MePage = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);

    return (
            <div>
            <h2>Me.</h2>
            <div className='knapp-group'>
                <div className='knapp'onClick={handleBack}>Tillbaka</div>
            </div>
            </div>
    )
}


export default MePage;

//https://worldofwarcraft.com/en-gb/character/eu/dragonmaw/blinus