import React from 'react'
import './SayHelloContainer.css';


const SayHelloContainer = () => {

    const toLinkedIn = () => {
        window.open('https://www.linkedin.com/in/linda-blom-05150696/', "_blank")
    }

    const toGithub = () => {
        window.open('https://github.com/LindBost', "_blank")
    }

    return (
        <div className='hello-container'>
            <h2>Say Hello.</h2>
            <h1 className='hello-email'>linda-bostrom@hotmail.se</h1>
            <p className='hello-text'>I love to be creative and build things. Anything from my own projects like this page to Ikea furniture.</p>
            <div className='hello-card'>
            <button className='knapp' type="button" onClick={toLinkedIn}>To linkedin</button>
            <button className='knapp' type="button" onClick={toGithub}>To Github</button>
            </div>
        </div>
    )
}


export default SayHelloContainer;