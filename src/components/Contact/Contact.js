import React, { useCallback }  from 'react'
import {useHistory} from 'react-router-dom';

const Contact = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);

    const toLinkedIn = () => {
        window.open('https://www.linkedin.com/in/linda-blom-05150696/', "_blank")
    }


    return (
        <div> 
            <button className='knapp' type="button" onClick={toLinkedIn}>To linkedin</button>
            <div onClick={handleBack}>Tillbaka</div>
        </div>
    )
}


export default Contact;