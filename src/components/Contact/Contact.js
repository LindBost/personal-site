import React, { useState, useCallback }  from 'react'
import {useHistory} from 'react-router-dom';

const Contact = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);

    return (
        <div>
            Jag har klickat på Contact  
            <div onClick={handleBack}>Tillbaka</div>
        </div>
    )
}


export default Contact;