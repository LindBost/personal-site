import React, { useState, useCallback }  from 'react'
import {useHistory} from 'react-router-dom';

const MeContainer = () => {

    const history = useHistory();
    const displayBlog = useCallback(() => history.push('/blog'), [history]);

    return (
        <div className='gridContainer'>
            MECONTAINER Här kommer det va en grid (så om man klickar på blog så kommer man dit )
            
            <div onClick={displayBlog}>klicka för att se blog</div>
        </div>
    )
}


export default MeContainer;