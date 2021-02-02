import React, { useState, useCallback }  from 'react'
import {useHistory} from 'react-router-dom';
import Card from './Card';

const MeContainer = () => {

    const history = useHistory();
    const displayBlog = useCallback(() => history.push('/blog'), [history]);

    return (
        <div className='gridContainer'>
            MECONTAINER Här kommer det va en grid (så om man klickar på blog så kommer man dit )
            
            <div onClick={displayBlog}>klicka för att se blog</div>
            <Card 
            title='card title'
            imageUrl='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png'
            body='body body body body body body body body body body body'
            />
        </div>
    )
}


export default MeContainer;