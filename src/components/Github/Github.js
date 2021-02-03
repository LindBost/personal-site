import React, { useEffect, useCallback }  from 'react'
import {useHistory, Link} from 'react-router-dom';

const Github = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);
    
    const toGithub = () => {
        window.open('https://github.com/LindBost', "_blank")
    }


    return (
        <div>
            Jag har klickat på Github  
            <h2>Github</h2>
            <div>
                kolla
                <button type="button" onClick={toGithub}>To Github</button>
            </div>
            <div onClick={handleBack}>Tillbaka</div>
        </div>
    )
}


export default Github;