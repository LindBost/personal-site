import React  from 'react'
import Card from './Card';
import './MeContainer.css';

const MeContainer = () => {

    return (
        <div className='gridContainer'>
            <div className='card-items'>
            <Card
            title='Blog'
            imageUrl='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png'
            body='body body body body body body body body body body body'
            path='/blog'
            />

            <Card 
            title='github'
            imageUrl='https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png'
            body='body body body body body body body body body body body'
            path='/github'
            />

            <Card 
            title='Me'
            imageUrl='https://kinsta.com/wp-content/uploads/2020/04/code-review-tools.png'
            body='body body body body body body body body body body body'
            path='/blog'
            />
            </div>
        </div>
    )
}


export default MeContainer;