import React from 'react'
import './SayHelloContainer.css';
import Card from './Card';


const SayHelloContainer = () => {

    const toLinkedIn = () => {
        window.open('https://www.linkedin.com/in/linda-blom-05150696/', "_blank")
    }


    return (
        <div className='hello-container'>
            <h2>Say Hello.</h2>
            <h1>linda-bostrom@hotmail.se</h1>
            <p className='hello-text'>I love to be creative and build things. Anything from my own projects like this page to Ikea furniture.</p>
            <div className='hello-card'>
            {/*<Card
                title='Say hello!'
                imageUrl='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png'
                body='body body body body body body body body body body body'
                path='/contact'
            />*/}
            <button className='knapp' type="button" onClick={toLinkedIn}>To linkedin</button>
            </div>
        </div>
    )
}


export default SayHelloContainer;