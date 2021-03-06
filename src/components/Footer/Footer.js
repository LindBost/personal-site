import React from 'react'
import './Footer.css';

const Footer = () => {

    const toGithub = () => {
        window.open('https://github.com/LindBost', "_blank")
    }

    const toLinkedIn = () => {
        window.open('https://www.linkedin.com/in/linda-blom-05150696/', "_blank")
    }

    const toInstagram = () => {
        window.open('https://www.instagram.com/Lindbos/', "_blank")
    }

    const toArchery = () => {
        window.open('https://idrottonline.se/IFUlvarnaBSK-Bagskytte/', "_blank")
    }

    const toArmory = () => {
        window.open('https://worldofwarcraft.com/en-gb/character/eu/dragonmaw/blinus', "_blank")
    }

    return (
        <div className='footer-container'>
            <div className='footer-desc'>
                <h1>Linda Blom</h1>
                <p>Thank you for visiting</p>
            </div>
            <div className='footer-links-wrapper'>

                <div className='footer-link-items'>
                    <h2 className='Footer-link-title'>Social Media</h2>
                    <div className='footer-link' onClick={toGithub}>GitHub</div>
                    <div className='footer-link' onClick={toLinkedIn}>LinkedIn</div>
                    <div className='footer-link' onClick={toInstagram}>Instagram</div>
                </div>
            </div>
            <div className='footer-links-wrapper'>

                <div className='footer-link-items'>
                    <h2 className='Footer-link-title'>Other Links</h2>
                    <div className='footer-link' onClick={toArchery}>Archery</div>
                    <div className='footer-link' onClick={toArmory}>Wow Armory</div>
                </div>
            </div>

        </div>
    )
}


export default Footer;