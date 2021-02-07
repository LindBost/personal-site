import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import './Github.css';
import githubimg from '../assets/githubimg.png';

const Github = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);

    const toGithub = () => {
        window.open('https://github.com/LindBost', "_blank")
    }


    return (
            <div className='github-container'>
            <h2>Github.</h2>
            <div className='github-logo'>
                <img src={githubimg} alt='logo' />
            </div>
            <p className='github-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales enim id libero commodo euismod. Aenean sit amet felis iaculis, finibus urna vel, consectetur dolor. Duis id lacus non odio cursus convallis pretium ac sapien.</p>
            <div className='knapp-group'>
                <button className='knapp' type="button" onClick={toGithub}>To Github</button>
                <div className='knapp'onClick={handleBack}>Tillbaka</div>
            </div>
            </div>
    )
}


export default Github;