import React, { useState, useCallback }  from 'react'
import {useHistory} from 'react-router-dom';

const Blog = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);

    return (
        <div>
            Jag har klickat på Blogen  
            <div onClick={handleBack}>Tillbaka</div>
        </div>
    )
}


export default Blog;