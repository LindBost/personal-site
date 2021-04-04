import React, { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './Github.css';
import githubimg from '../assets/githubimg.png';

const Github = () => {

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const toGithub = () => {
        window.open('https://github.com/LindBost', "_blank")
    }


    return (
        <div className='github-wrapper'>
            <div className='github-container'>
                <h2 className='git-h2'>Github.</h2>
                <div className='github-logo'>
                    <img src={githubimg} alt='logo' />
                </div>
                <div>
                    <p className='github-text'>Please visit my Github for more projects.</p>
                </div>
                <div className='knapp-group'>
                    <button className='knapp' type="button" onClick={toGithub}>To Github</button>
                    <div className='knapp' onClick={handleBack}>Back</div>
                </div>
            </div>
        </div>
    )
}


export default Github;