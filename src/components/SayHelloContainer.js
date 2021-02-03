import React from 'react'
import './SayHelloContainer.css';
import Card from './Card';


const SayHelloContainer = () => {
    return (
        <div className='hello-container'>
            <h2>Say Hello.</h2>
            <div className='hello-card'>
            <Card
                title='Say hello!'
                imageUrl='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png'
                body='body body body body body body body body body body body'
                path='/contact'
            />
            </div>
        </div>
    )
}


export default SayHelloContainer;